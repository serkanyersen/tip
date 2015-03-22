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
            return (
                (parseFloat(this.state.amount) / (parseFloat(this.state.people))
            ) + parseFloat(this.getTipAmount())).toFixed(2);
        },

        render: function() {
            var subheader;
            if (this.state.people > 1) {
                subheader = <div className="sub header">Per Person</div>;
            }

            return (
                <Segment className="tall piled">
                    <Header>
                        <div className="content">
                            Tip Calculator
                        </div>
                    </Header>
                    <Divider />

                    <div className="ui grid">
                        <div className="ten wide column">
                            <Amount onChange={this.handleAmount} />
                        </div>
                        <div className="six wide column">
                            <People defaultValue={this.state.people} onChange={this.handlePeople} />
                        </div>
                    </div>
                    <div className="ui grid">
                        <div className="sixteen wide column">
                            <Tip defaultValue={this.state.percentage} onChange={this.handlePercentage} />
                        </div>
                        <div className="ui vertically padded grid">
                            <div className="result-section eight wide column">
                                <Header>
                                    Tip
                                    {subheader}
                                </Header>
                                <Divider />
                                ${this.getTipAmount()}
                            </div>
                            <div className="result-section eight wide column">
                                <Header>
                                    Total
                                    {subheader}
                                </Header>
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
