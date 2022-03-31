const React = require("react");
const {Component} = React;
const Try = require("./Try");

function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseBall extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: []
    }

    onSubmitForm = (e) => {
        const {answer, value, tries} = this.state
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState({
                result: value + ' 홈런!!',
                value: ''
            })
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState({
                    result: `실패하였습니다. 답은  ${answer} 이었습니다.`
                })
                alert('새로운 게임을 시작합니다.')
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: []
                })
            } else {
                for (let i = 0; i < 4; i++) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                let tryContent = {try: value, result: ` ${strike} 스트라이크 ${ball} 볼 입니다.`}
                this.setState({
                    result: '땡!',
                    value: '',
                    tries: [...tries, tryContent]
                })
            }
        }
    };

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const {result, value, tries} = this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput}/>
                </form>
                <div>
                    시도: {tries.length}
                </div>
                <div>
                </div>
                <ul>
                    {tries.map((v) => {
                        return (
                            <Try tryInfo={v}/>
                        );
                    })}
                </ul>
            </>
        );
    }
}

module.exports = NumberBaseBall;
