const React = require("react");
const {Component} = React;

class Try extends Component {
    render() {
        return (
            <li>
                <div>
                    <b>{this.props.tryInfo.try}</b>
                </div>
                <div>
                    -> {this.props.tryInfo.result}
                </div>
            </li>
        )
    }
}

module.exports = Try;
