var React   = require('react');
    sui     = require('react-semantify'),
    Button    = sui.Button,

    Tip  = React.createClass({

        getInitialState: function() {
            return {
                value: this.props.defaultValue,
                options: [
                    { value: 8,  text: '8%'  },
                    { value: 10, text: '10%' },
                    { value: 15, text: '15%' },
                    { value: 18, text: '18%' },
                    { value: 20, text: '20%' }
                ]
            };
        },

        selectButton: function(event) {
            // Get clicked element, sorry for the bubbling!
            var value = $(event.target).data('value');
            if (value === undefined) {
                value = $(event.target).parents('.button').data('value');
            }

            // Set the selected value
            this.setState({ value: value });

            // call onChange prop if provided by parent
            this.props.onChange && this.props.onChange(value);
        },

        render: function() {
            var value = this.state.value,
                options = this.state.options,
                className = options.length + " fluid ui buttons";
                buttons = options.map(function (item){
                    var selected = value === item.value? 'active' : '';

                    return <Button key={item.value} value={item.value} className={selected}> {item.text} </Button>;
                });

            return (
                <div className={className} onClick={this.selectButton}>
                    {buttons}
                </div>
            );
        }
    });

module.exports = Tip;
