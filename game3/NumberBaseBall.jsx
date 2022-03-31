import React, {PureComponent, createRef} from 'react';
import Try from './Try';

function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseBall extends PureComponent {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: []
    }

    inputRef = createRef();

    onSubmitForm = (e) => {
        const {answer, value, tries} = this.state
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState((prevState) => {
                return {
                    result: prevState.value + ' 홈런!!',
                    value: ''
                }
            });
            alert('게임을 다시 시작합니다!!');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: []
            })
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState((prevState) => {
                    return {
                        result: `실패하였습니다. 답은  ${prevState.answer} 이었습니다.`
                    }
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
                this.setState((prevState) => {
                    return {
                        result: '땡!',
                        value: '',
                        tries: [...prevState.tries, tryContent]
                    }
                })
            }
        }
        this.inputRef.current.focus();
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
                    <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput}/>
                    <button>입력!!</button>
                </form>
                <div>
                    시도: {tries.length}
                </div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            <Try key={`${i + 1} 차 시도`} tryInfo={v}/>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseBall;