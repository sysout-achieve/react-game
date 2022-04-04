import React, {Component} from "react";
import Ball from "./Ball";

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}

class Lotto extends Component {
    state = {
        winNumbers: getWinNumbers(),
        winBalls: [],
        bonus: null,
        redo: false
    };

    timeouts = [];

    componentDidMount() {
        this.motionStart()
    }

    componentWillUnmount() {
        this.timeouts.forEach((v) => {
            clearInterval(v);
        });
    }

    onClickRedo = () => {
        this.setState({
            winNumbers: getWinNumbers(),
            winBalls: [],
            bonus: null,
            redo: false
        })
        this.timeouts = [];
        this.motionStart()
    }

    motionStart = () => {
        const {winNumbers} = this.state;
        for (let i = 0; i < winNumbers.length - 1; i++) {
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        winBalls: [...prevState.winBalls, winNumbers[i]]
                    };
                });
            }, (i + 1) * 1000);
        }
        this.timeouts[winNumbers.length] = setTimeout(() => {
            this.setState({
                bonus: winNumbers[winNumbers.length - 1],
                redo: true
            });
        }, winNumbers.length * 1000);
    }

    render() {
        const {winBalls, bonus, redo} = this.state;
        return (
            <>
                <div>
                    당첨 숫자
                </div>
                <div id="결과창">
                    {winBalls.map((v) => <Ball key={v} number={v}/>)}
                </div>

                <div>
                    보너스!
                </div>
                {bonus && <Ball number={bonus}/>}

                {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
            </>
        );
    }
}

export default Lotto;