import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader/root';

import MineSweeper from "./MineSweeper";

const Hot = hot(MineSweeper);

ReactDom.render(<Hot />, document.querySelector('#root'))