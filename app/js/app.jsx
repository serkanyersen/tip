(function() {

    var React = require('react'),
        Main = require('./components/main.jsx');

    // Needed for React Developer Tools
    window.React = React;

    React.render(<Main />, document.getElementById('content'));
})();
