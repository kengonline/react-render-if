import React, { Component } from 'react';
import PropTypes from 'prop-types'

const propTypes = {
    component: PropTypes.func,
    elseComponent: PropTypes.func,
    condition: PropTypes.any,
    strict: PropTypes.bool
}

const defaultProps = {
    condition: true,
    strict: false
}

class RenderIf extends React.Component {
    constructor(props) {
        super(props);
        
        this.renderComponent = this.renderComponent.bind();
    }

    renderComponent(elseComponent) {
        if (elseComponent) {
            return elseComponent();
        } else {
            return null;
        }
    }

    render() {
        const { component, children, condition, strict, elseComponent } = this.props;

        if (!condition) return this.renderComponent(elseComponent);

        if (!!children) return children;

        if (component.prototype && !component.prototype.render) return component();

        const errorMsg = `State component(${component.prototype.constructor.name}) must be render as children elements!!!`;
        if (strict) {
            throw new Error(errorMsg);
        } else {
            console.warn(errorMsg);
        }
        return this.renderComponent(elseComponent);
    }
}

RenderIf.propTypes = propTypes;
RenderIf.defaultProps = defaultProps;

export default RenderIf;