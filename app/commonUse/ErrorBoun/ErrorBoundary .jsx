// components/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        return this.props.children;
    }
}

export default ErrorBoundary;