(function() {

    var React = require('react'),
        Container = require('./components/container.jsx');

    // Needed for React Developer Tools
    window.React = React;

    React.render(<Container />, document.getElementById('content'));
})();
