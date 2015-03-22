var React   = require('react');
    sui     = require('react-semantify'),
    Header  = sui.Header,
    Divider = sui.Divider,

    AppHeader = React.createClass({
        render: function() {
            return (
                <Header>
                    <div className="content">Tip Calculator</div>
                    <Divider />
                </Header>
            );
        }
    });

module.exports = AppHeader;
