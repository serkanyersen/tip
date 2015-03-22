var React     = require('react');
    sui       = require('react-semantify'),
    Amount    = require('./amount.jsx'),
    People    = require('./people.jsx'),
    Tip       = require('./tip.jsx'),
    Total     = require('./total.jsx'),
    AppHeader = require('./app-header.jsx'),
    Segment   = sui.Segment,

    Main = React.createClass({

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
                (parseFloat(this.state.amount) / parseFloat(this.state.people)) + parseFloat(this.getTipAmount())
            ).toFixed(2);
        },

        render: function() {
            return (
                <Segment className="piled">
                    <AppHeader />

                    <div className="ui grid">
                        <div className="ten wide column">
                            <Amount onChange={this.handleAmount} />
                        </div>
                        <div className="six wide column">
                            <People defaultValue={this.state.people} onChange={this.handlePeople} />
                        </div>
                        <div className="sixteen wide column">
                            <Tip defaultValue={this.state.percentage} onChange={this.handlePercentage} />
                        </div>

                        <Total tip={this.getTipAmount()}
                               total={this.getTotalAmount()}
                               showPerson={this.state.people > 1} />
                    </div>
                </Segment>
            );
        }
    });

module.exports = Main;
