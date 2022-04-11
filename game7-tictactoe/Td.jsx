import React, {useCallback, memo, useRef, useEffect} from 'react';
import {CLICK_CELL} from './TicTacToe';

const Td = memo(({rowIndex, cellIndex, dispatch, cellData}) => {
    console.log('td rendered');

    const ref = useRef([]);
    useEffect(()=>{

    })

    const onClickTd = useCallback(() => {
        if (cellData) {
            return;
        }
        dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex})
    }, [cellData]);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
});

export default Td;