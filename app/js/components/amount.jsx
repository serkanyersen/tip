var React   = require('react');
    sui     = require('react-semantify'),
    Icon    = sui.Icon,

    Amount  = React.createClass({

        getInitialState: function() {
            return { value: this.props.defaultValue };
        },

        handleChange: function(event) {
            this.setState({ value: event.target.value });
            this.props.onChange && this.props.onChange(event.target.value);
        },

        render: function() {
            var value = this.state.value;
            return (
                <div className="ui fluid left icon input">
                    <input type="number"
                           placeholder="Bill Amount..."
                           min="0"
                           value={value}
                           onChange={this.handleChange} />
                    <Icon className="dollar" />
                </div>
            );
        }
    });

module.exports = Amount;
