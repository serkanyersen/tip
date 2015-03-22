var React   = require('react');
    sui     = require('react-semantify'),
    Divider = sui.Divider,
    Header  = sui.Header,
    Icon    = sui.Icon,

    Total   = React.createClass({

        getInitialState: function() {
            return {
                showPerson: this.props.showPerson,
                tip: this.props.tip,
                total: this.props.total
            };
        },

        // Kinda unnecessary ?!!!!
        componentWillReceiveProps: function(nextProps) {
            this.setState(nextProps);
        },

        render: function() {
            var subheader;
            if (this.state.showPerson) {
                subheader = <div className="sub header">Per Person</div>;
            }
            return (
                <div className="ui vertically padded grid">
                    <div className="result-section eight wide column">
                        <Header>
                            Tip {subheader}
                            <Divider />
                        </Header>
                        <span className="result">${this.state.tip}</span>
                    </div>
                    <div className="result-section eight wide column">
                        <Header>
                            Total {subheader}
                            <Divider />
                        </Header>
                        <span className="result">${this.state.total}</span>
                    </div>
                </div>
            );
        }
    });

module.exports = Total;
