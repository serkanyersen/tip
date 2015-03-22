var React   = require('react');
    sui     = require('react-semantify'),
    Segment = sui.Segment,
    Divider = sui.Divider,
    Header  = sui.Header,
    Icon    = sui.Icon,
    Amount  = require('./amount.jsx'),
    People  = require('./people.jsx'),
    Tip     = require('./tip.jsx'),

    Container = React.createClass({

        getInitialState: function() {
            return {
                percentage: 15,
                amount: 0,
                people: 1
            };
        },

        handlePercentage: function(value) {
            this.setState({ percentage: +value });
        },

        handleAmount: function(value) {
            this.setState({ amount: +value });
        },

        handlePeople: function(value) {
            this.setState({ people: value });
        },

        getTipAmount: function() {
            return ((this.state.amount / this.state.people) * this.state.percentage / 100).toFixed(2);
        },

        getTotalAmount: function() {
            console.log(this.state.amount, this.state.people);
            return (
                (parseFloat(this.state.amount) / (parseFloat(this.state.people))
            ) + parseFloat(this.getTipAmount())).toFixed(2);
        },

        render: function() {
            return (
                <Segment className="tall piled">
                    <Header>
                        <Icon className="calculator" />
                        <div className="content">
                            Tip Calculator
                        </div>
                    </Header>
                    <Divider />

                    <div className="ui form">
                        <div className="two fields">
                            <div className="ten wide field">
                                <Amount onChange={this.handleAmount} />
                            </div>
                            <div className="six wide field">
                                <People defaultValue={this.state.people} onChange={this.handlePeople} />
                            </div>
                        </div>
                        <div className="field">
                            <Tip defaultValue={this.state.percentage} onChange={this.handlePercentage} />
                        </div>
                        <Divider />

                        <div className="two fields">
                            <div className="field">
                                <Header>Tip</Header>
                                <Divider />
                                ${this.getTipAmount()}
                            </div>
                            <div className="field">
                                <Header>Total</Header>
                                <Divider />
                                ${this.getTotalAmount()}
                            </div>
                        </div>
                    </div>
                </Segment>
            );
        }
    });

module.exports = Container;
