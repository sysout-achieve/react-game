import React, {useState, useRef, useEffect} from "react";

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

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [isValid, setValid] = useState(true);
    const [score, setScore] = useState(0);

    const interval = useRef();
    const timeout = useRef();

    useEffect(() => {   //componentDidMount, componentDidUpdate 역할 (1:1 대응은 아님)
        changeHand();
        return () => {  // componentDidMount, componentDidUpdate의 역할
            clearInterval(interval.current);
        }
    }, [result, imgCoord])

    const changeHand = () => {
        interval.current = setInterval(() => {
            if (imgCoord === rspCoords.바위) {
                randomRSP()
            } else if (imgCoord === rspCoords.가위) {
                randomRSP()
            } else if (imgCoord === rspCoords.보) {
                randomRSP()
            }
        }, 50)
    }

    const randomRSP = () => {
        const rspRandom = Math.floor(Math.random() * 3 - 1);
        if (rspRandom === -1) {
            setImgCoord(rspCoords.가위);
            setValid(true);
        } else if (rspRandom === 0) {
            setImgCoord(rspCoords.바위);
            setValid(true);
        } else {
            setImgCoord(rspCoords.보);
            setValid(true);
        }
    }

    const onClickBtn = (choice) => {
        clearTimeout(timeout.current);
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        console.log(`${myScore} , ${cpuScore}`);
        const diff = myScore - cpuScore;
        if (isValid) {
            if (diff === 0) {
                setResult('비겼습니다!');
                setValid(false);
            } else if ([-1, 2].includes(diff)) {
                setResult('이겼습니다!');
                setScore((prevScore) => prevScore + 1);
                setValid(false);
            } else {
                setResult('졌습니다!');
                setScore((prevScore) => prevScore - 1);
                setValid(false);
            }
        }
        timeout.current = setTimeout(() => changeHand(), 2000);
    }

    return (
        <>
            <div id="computer"
                 style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}/>
            <div>
                <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score} 점</div>
        </>
    );
}

export default RSP;