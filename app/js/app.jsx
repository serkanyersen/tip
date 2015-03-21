(function() {

    var React = require('react'),
        injectTapEventPlugin = require("react-tap-event-plugin"),
        Container = require('./components/container.jsx');

    // Needed for React Developer Tools
    window.React = React;

    // Needed for onTouchTap
    // Can go away when react 1.0 release
    // Check this repo:
    // https://github.com/zilverline/react-tap-event-plugin
    injectTapEventPlugin();

    React.render(<Container />, document.getElementById('content'));
})();
