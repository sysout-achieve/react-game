import React from 'react';
import Tr from "./Tr";

const Table = ({tableData, dispatch}) => {
    return (
        <table>
            <tbody>
            {Array(tableData.length).fill().map((tr, i) => (<Tr dispatch={dispatch} rowIndex={i} rowData={tableData[i]}/>))}
            </tbody>
        </table>
    );
};

export default Table;