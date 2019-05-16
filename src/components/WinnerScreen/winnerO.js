import React,{
    Component
} from 'react';
import O from '../XO/o';
import Winner from './winner';


class WinnerO extends Component {

    render(){
        return(
            <div className="winnerAlign">
                 <O
                    radius={"50"}
                    width={"250"}
                    height={"250"}
                    strokeWidth={"20"}
                    cx={"125"}
                    cy={"165"}
                    />
                <Winner
                winner={this.props.winner}
                />
            </div>
           
        );
    }
}

export default WinnerO;