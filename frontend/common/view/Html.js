/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application strings into before sending it to the client.
 */
const Html = ({body, styles, finalState}) => `
  <!doctype html>
    <html>
    <head>
        <title>Frontcamp-3 Redux</title>
        ${styles}
    </head>
    <body style="margin:0">
    <div id="app">${body}</div>
    <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(/</g, '\\\x3c')}
    </script>
    <script src="/static/bundle.js"></script>
    </body>
    </html>
`;

export default Html;