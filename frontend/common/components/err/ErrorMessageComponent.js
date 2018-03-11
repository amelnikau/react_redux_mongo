import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components';

const ErrorMessageDiv = styled.div`
  color: red;
`;

let ErrorMessageComponent = ({err}) => {
    return (
        <ErrorMessageDiv>{err}</ErrorMessageDiv>
    )
};

const mapStateToProps = (state) => ({
    err: state.err
});

ErrorMessageComponent = connect(mapStateToProps, undefined)(ErrorMessageComponent);

export default ErrorMessageComponent