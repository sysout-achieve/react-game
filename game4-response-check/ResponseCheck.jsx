import React, {useRef, useState} from "react";

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');

            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready') {
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
        } else if (state === 'now') {
            endTime.current = new Date();
            let responseTime = endTime.current - startTime.current;
            setState('waiting');
            setMessage('클릭해서 다시 시작하세요.');
            setResult((prevResult) => {
               return [...prevResult, responseTime]
            });
        }
    };

    const onClickReset = () => {
        setResult([]);
    };

    const renderAverage = () => {
        return result.length === 0
            ? null
            : <>
                <div>평균시간 : {result.reduce((a, c) => a + c) / result.length}</div>
                <button onClick={onClickReset}>리셋</button>
            </>
    };
    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
            {result.map((v) => {
                return (
                    <ul>
                        <li>
                            <div>
                                <b>{v} MMS</b>
                            </div>
                        </li>
                    </ul>
                );
            })}
        </>
    );
};
//
// class ResponseCheck extends PureComponent {
//     state = {
//         state: 'waiting',
//         message: '클릭해서 시작하세요.',
//         result: [],
//     }
//
//     timeout;
//     startTime;
//     endTime;
//
//     onClickScreen = () => {
//         const {state, result} = this.state;
//         if (state === 'waiting') {
//             this.setState({
//                 state: 'ready',
//                 message: '초록색이 되면 클릭하세요.'
//             });
//             this.timeout = setTimeout(() => {
//                 this.setState({
//                     state: 'now',
//                     message: '지금 클릭'
//                 });
//                 this.startTime = new Date();
//             }, Math.floor(Math.random() * 1000) + 2000);
//         } else if (state === 'ready') {
//             clearTimeout(this.timeout)
//             this.setState({
//                 state: 'waiting',
//                 message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
//             });
//         } else if (state === 'now') {
//             this.endTime = new Date();
//             let responseTime = this.endTime - this.startTime;
//             this.setState({
//                 state: 'waiting',
//                 message: '클릭해서 다시 시작하세요.',
//                 result: [...result, responseTime]
//             });
//         }
//     };
//
//     onClickReset = () => {
//         this.setState({
//             result: []
//         });
//     };
//
//     renderAverage = () => {
//         const {result} = this.state
//         return result.length === 0
//             ? null
//             : <>
//                 <div>평균시간 : {result.reduce((a, c) => a + c) / result.length}</div>
//                 <button onClick={this.onClickReset}>리셋</button>
//             </>
//     };
//
//     render() {
//         const {state, message, result} = this.state
//         return (
//             <>
//                 <div
//                     id="screen"
//                     className={state}
//                     onClick={this.onClickScreen}>
//                     {message}
//                 </div>
//                 {this.renderAverage()}
//                 {result.map((v) => {
//                     return (
//                         <ul>
//                             <li>
//                                 <div>
//                                     <b>{v} MMS</b>
//                                 </div>
//                             </li>
//                         </ul>
//                     );
//                 })}
//             </>
//         );
//     }
// }

export default ResponseCheck;