/* eslint-disable no-console, no-use-before-define */

import Express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'

import configureStore from '../common/store/configureStore'
import blogApi from '../common/api/api'
import StaticRouter from 'react-router-dom/StaticRouter';
import AppRouter from '../common/routes/AppRouter';

import {ServerStyleSheet} from 'styled-components';
import Html from '../common/view/Html';
import {FRONT_END_PORT} from "../common/config/config";

const app = new Express();
const port = FRONT_END_PORT;

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));


const handleRender = (req, res) => {
    let preloadedState = {};

    blogApi.getBlogs().then(result => {
        preloadedState = {blogs: result, auth: {username: 'anonymous', isLogged: false}}
        returnResponseWithPreloadedState(preloadedState, req, res);
    }).catch(error => {
        preloadedState = {err: error.toString()};
        returnResponseWithPreloadedState(preloadedState, req, res);
    });
};

function returnResponseWithPreloadedState(preloadedState, req, res) {
    const store = configureStore(preloadedState);

    const sheet = new ServerStyleSheet();

    let context = {};
    const body = renderToString(sheet.collectStyles(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <AppRouter/>
            </StaticRouter>
        </Provider>));
    const styles = sheet.getStyleTags();

    const finalState = store.getState();

    res.send(Html({
        body,
        styles,
        finalState
    }))
}

app.get("/", handleRender);
app.get("/login", handleRender);

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
});
