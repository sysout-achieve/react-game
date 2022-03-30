const React = require("react");
const {useState, useRef} = React;

const WordRelay = () => {
    const [word, setWord] = useState('2. 끝말잇기');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult({result: '딩동댕'});
            setWord({word: value});
            setValue({value: ''});
        } else {
            setResult({result: '땡!!'});
            setValue({value: ''});
        }
        inputRef.current.focus();
    }

    const onChangeInput = (e) => {
        setValue({value: e.target.value});
    }

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    )
}

module.exports = WordRelay;