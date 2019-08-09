import React,{Component} from 'react';
import { Timer,ClockButton } from "../_components";
import { withRouter } from "react-router-dom";

class TimerPage extends Component{

    state = {
        start : false,
        counter:0
    }

    setCounter = count =>{
        //const {counter} = this.state;
        this.setState({counter: count});
    }

    startTimer = () =>{
        this.setState({start: true});
        this.interval = setInterval(()=>{
            this.setState({counter: this.state.counter - 1})
        },1000)
    }
    
    goBack = () => {
        this.props.history.push('/');
    }

    renderBtn = ()=>{
        const {start} = this.state;
        if(start){
            return<>
                <ClockButton onClick = {this.addLap}>pause</ClockButton>
                <ClockButton onClick = {this.goBack}>back</ClockButton>
            </>
        }else{
            return<>
                <ClockButton onClick = {this.goBack}>back</ClockButton>
                <ClockButton onClick = {this.startTimer}>start</ClockButton>
            </>
        }
    }

    render(){
        const {start,counter,setCounter} = this.state;
        return <div className="clock-page">
            <Timer  start={start} counter={counter} setCounter={setCounter}/>
            <div style={{marginTop: 20,width: 350,justifyContent: 'space-around'}}>
                {this.renderBtn()}
            </div>
        </div>
    }

} 



withRouter(TimerPage);
export {TimerPage};