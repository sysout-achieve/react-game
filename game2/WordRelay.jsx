const React = require("react");
const {Component} = React;

class WordRelay extends Component {
    state = {
        word: '끝말잇기',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: '딩동댕!',
                word: this.state.value,
                value: '',
            })
        } else {
            this.setState({
                result: '땡!',
                value: ''
            })
        }
    }

    onRefInput = (c) => {
        this.input = c;
    }

    onChangeInput = (e) => {
        this.setState({value: e.target.value});
    }
    input;

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        )
    }
}

module.exports = WordRelay;