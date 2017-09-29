import React, { Component } from 'react';
import PropTypes from 'prop-types'

const propTypes = {
    component: PropTypes.func,
    condition: PropTypes.bool,
    strict: PropTypes.bool
}

const defaultProps = {
    condition: true,
    strict: false
}

class RenderIf extends React.Component {
    render() {
        const { component, children, condition, strict } = this.props;
        if (!condition) return null;

        if (children) return children;

        if (component.prototype && !component.prototype.render) return component();

        const errorMsg = `State component(${component.prototype.constructor.name}) must be render as children elements!!!`;
        if (strict) {
            throw new Error(errorMsg);
        } else {
            console.warn(errorMsg);
        }
        return null;
    }
}

RenderIf.propTypes = propTypes;
RenderIf.defaultProps = defaultProps;

export default RenderIf;