const React = require('react');
const {PureComponent} = require('react');

class Test extends PureComponent {
    state = {
        counter: 0,
    };

    onClick = () => {
        this.setState({});
    }

    render() {
        console.log('랜더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

module.exports = Test