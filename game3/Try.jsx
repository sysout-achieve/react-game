import React, {PureComponent, memo} from 'react';

// class Try extends PureComponent {
//     render() {
//         const {tryInfo} = this.props;
//         return (
//             <li>
//                 <div>
//                     <b>{tryInfo.try}</b>
//                 </div>
//                 <div>
//                     -> {tryInfo.result}
//                 </div>
//             </li>
//         )
//     }
// }

const Try = memo(({tryInfo}) => {
    return (
        <li>
            <div>
                <b>{tryInfo.try}</b>
            </div>
            <div>
                -> {tryInfo.result}
            </div>
        </li>
    )
})

export default Try;

