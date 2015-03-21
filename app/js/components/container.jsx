var React   = require('react');
    sui     = require('react-semantify'),
    Segment = sui.Segment,
    Divider = sui.Divider,
    Header  = sui.Header,
    Amount  = require('./amount.jsx'),
    Tip     = require('./tip.jsx'),

    Container = React.createClass({

        getInitialState: function() {
            return {
                percentage: 15,
                amount: 0
            };
        },

        handlePercentage: function(value) {
            this.setState({ percentage: +value });
        },

        handleAmount: function(value) {
            this.setState({ amount: +value });
        },

        getTipAmount: function() {
            return (this.state.amount * this.state.percentage / 100).toFixed(2);
        },

        getTotalAmount: function() {
            return (parseFloat(this.state.amount) + parseFloat(this.getTipAmount())).toFixed(2);
        },

        render: function() {
            return (
                <Segment className="tall stacked">
                    <Header>Tip Calculator</Header>
                    <Divider />

                    <div className="ui form">

                        <div className="field">
                            <Amount onChange={this.handleAmount} />
                        </div>

                        <div className="field">
                            <Tip defaultValue={this.state.percentage} onChange={this.handlePercentage} />
                        </div>

                        <Header>Tip</Header>
                        <Divider />
                        ${this.getTipAmount()}

                        <Header>Total</Header>
                        <Divider />
                        ${this.getTotalAmount()}
                    </div>
                </Segment>
            );
        }
    });

module.exports = Container;
