import React, {Component} from 'react';
import NumberBaseball from '../game3/NumberBaseBall';
import RSP from '../game5-rsp/RSP';
import Lotto from '../game6-lotto/Lotto';

class GameMatcher extends Component {
    render() {
        let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
        console.log(urlSearchParams.get('hello'));
        console.log(urlSearchParams.get('page'));
        if (this.props.match.params.name === 'number-baseball') {
            return <NumberBaseball/>
        } else if (this.props.match.params.name === 'rock-scissors-paper') {
            return <RSP/>
        } else if (this.props.match.params.name === 'lotto-generator') {
            return <Lotto/>
        }

        return (
            <div>
                일치하는 게임이 없습니다.
            </div>
        );
    }
}

export default GameMatcher;