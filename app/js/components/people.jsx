var React   = require('react');
    sui     = require('react-semantify'),
    Icon    = sui.Icon,

    People  = React.createClass({

        getInitialState: function() {
            return { value: this.props.defaultValue };
        },

        decrease: function(event) {
            var value = (this.state.value -= 1) || 1;
            this.setState({ value: value });
            this.props.onChange && this.props.onChange(value);
        },

        increase: function(event) {
            var value = this.state.value += 1;
            this.setState({ value: value });
            this.props.onChange && this.props.onChange(value);
        },

        render: function() {
            var value = this.state.value;
            return (
                <div className="ui grid">
                    <div className="column">
                        <div className="ui 2 fluid buttons">
                            <div className="ui icon purple button" onClick={this.decrease}><Icon className="remove user" /></div>
                            <div className="ui icon blue button" onClick={this.increase}><Icon className="add user" /></div>
                        </div>
                        <div className="total-people">{this.state.value}</div>
                    </div>
                </div>
            );
        }
    });

module.exports = People;
