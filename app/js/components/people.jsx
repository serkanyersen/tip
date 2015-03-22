var React   = require('react');
    sui     = require('react-semantify'),
    Icon    = sui.Icon,

    People  = React.createClass({

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
                           min="1"
                           max="20"
                           placeholder="People..."
                           value={value}
                           onChange={this.handleChange} />
                    <Icon className="add user" />
                </div>
            );
        }
    });

module.exports = People;
