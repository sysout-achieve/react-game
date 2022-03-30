const React = require("react");
const {Component} = React;
const Try = require("./Try");

class NumberBaseBall extends Component {
    state = {
        result: '',
        value: '',
        answer: 'getNumbers()',
        tries: []
    }

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>
                    시도: {this.state.tries.length}
                </div>
                <ul>
                    {[
                        {fruit: '사과', taste: '맛있다'},
                        {fruit: '배', taste: '맛있지?'},
                        {fruit: '귤', taste: '응'},
                        {fruit: '감', taste: 'ㅇㅋ'},
                        {fruit: '하', taste: '맛있다'},
                        {fruit: '주', taste: '맛있다'},
                    ].map((v, i) => {
                        return (
                            <Try value={v} index={i} />
                        );
                    })}
                </ul>
            </>
        );
    }
}

module.exports = NumberBaseBall;
