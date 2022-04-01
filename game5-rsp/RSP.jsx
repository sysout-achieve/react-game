import React, {Component} from "react";

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
}

const scores = {
    가위: 1,
    바위: 0,
    보: -1
}

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
        return v[1] === imgCoord;
    })[0];
}


class RSP extends Component {
    state = {
        result: '',
        imgCoord: '0',
        isValid: true,
        score: 0
    }

    interval;
    timeout;

    componentDidMount() {
        this.changeHand()
    }

    componentDidUpdate() {    //리랜더링 후

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    randomRSP = () => {
        const rspRandom = Math.floor(Math.random() * 3 - 1);
        if (rspRandom === -1) {
            this.setState({
                imgCoord: rspCoords.가위,
                isValid: true
            })
        } else if (rspRandom === 0) {
            this.setState({
                imgCoord: rspCoords.바위,
                isValid: true
            })
        } else {
            this.setState({
                imgCoord: rspCoords.보,
                isValid: true
            })
        }
    }

    changeHand = () => {
        this.interval = setInterval(() => {
            const {imgCoord} = this.state;
            if (imgCoord === rspCoords.바위) {
                this.randomRSP()
            } else if (imgCoord === rspCoords.가위) {
                this.randomRSP()
            } else if (imgCoord === rspCoords.보) {
                this.randomRSP()
            }
        }, 50)
    }

    onClickBtn = (choice) => {
        clearTimeout(this.timeout);
        clearInterval(this.interval);
        const {imgCoord, isValid} = this.state;
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        console.log(`${myScore} , ${cpuScore}`);
        const diff = myScore - cpuScore;
        if (isValid) {
            if (diff === 0) {
                this.setState({
                    result: '비겼습니다!',
                    isValid: false
                })
            } else if ([-1, 2].includes(diff)) {
                this.setState((prevState) => {
                    return {
                        result: '이겼습니다!',
                        score: prevState.score + 1,
                        isValid: false
                    }
                })
            } else {
                this.setState((prevState) => {
                    return {
                        result: '졌습니다!',
                        score: prevState.score - 1,
                        isValid: false
                    }
                })
            }
        }
        this.timeout = setTimeout(() => this.changeHand(), 2000);
    }

    render() {
        const {result, score, imgCoord} = this.state;
        return (
            <>
                <div id="computer"
                     style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}/>
                <div>
                    <button id="rock" className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score} 점</div>
            </>
        );
    }
}

export default RSP;