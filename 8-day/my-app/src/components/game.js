import React from 'react';
import { Board } from './board';

class Game extends React.Component {
    render(){
        return  (
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{this.props.status}</div>
                    <ol>{/* todo */}</ol>
                </div>
            </div>
        )
    }
}
export {Game};