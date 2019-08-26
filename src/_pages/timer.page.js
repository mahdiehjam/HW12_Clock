import React,{Component} from 'react';
import { Timer,ClockButton } from "../_components";
import { withRouter } from "react-router-dom";

class TimerPage extends Component{

    state = {
        timerStart: 0,
        strat: false,
        counter: 0
    }

    goBack = () => {
        this.props.history.push('/');
    }

    startTimer = () => {
        this.setState({
            start: true,
            counter: this.state.counter,
            timerStart: this.state.counter
        });
        this.timer = setInterval(() => {
            const newTime = this.state.counter - 1;
            if (newTime >= 0) {
                this.setState({
                    counter: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ start: false });
                alert("Countdown ended");
            }
        }, 1000);
    };

    pauseTimer = () => {
        this.setState({
            start: false,
        });
        clearInterval(this.timer);
    }
    
    restart = () => {
        this.setState({
            timerStart: 0,
            counter: 0
        });
        if (this.state.start === false) {
            this.setState({
                counter: this.state.timerStart
            });
        }
    }


    renderBtn = ()=>{
        const {start} = this.state;
        if(start){
            return<>
                <ClockButton onClick = {this.restart}>restart</ClockButton>
                <ClockButton onClick={this.pauseTimer}>Pause</ClockButton>
            </>
        }else{
            return<>
                <ClockButton onClick={this.goBack}>Back</ClockButton>
                <ClockButton onClick={this.startTimer}>Start</ClockButton>
            </>
        }
    }

    adjustTimer = input => {
        const { counter, strat } = this.state;
        const max = 216000;
        if (!strat) {
            if (input === "incHours" && counter + 3600 < max) {
                this.setState({ counter: counter + 3600 });
            } else if (input === "decHours" && counter - 3600 >= 0) {
                this.setState({ counter: counter - 3600 });
            } else if (input === "incMinutes" && counter + 60 < max) {
                this.setState({ counter: counter + 60 });
            } else if (input === "decMinutes" && counter - 60 >= 0) {
                this.setState({ counter: counter - 60 });
            } else if (input === "incSeconds" && counter + 1 < max) {
                this.setState({ counter: counter + 1 });
            } else if (input === "decSeconds" && counter - 1 >= 0) {
                this.setState({ counter: counter - 1 });
            }
        }
    };

    render() {
        const {counter} = this.state;

        return <div className=" clock-page">
            <div className="timer">
                <div className="timerbtn" >
                    <button onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
                    <button onClick={() => this.adjustTimer("incMinutes")}>&#8679;</button>
                    <button onClick={() => this.adjustTimer("incSeconds")}>&#8679;</button>
                </div>
                <Timer counter={counter} />
                <div className="timerbtn" >
                    <button onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
                    <button onClick={() => this.adjustTimer("decMinutes")}>&#8681;</button>
                    <button onClick={() => this.adjustTimer("decSeconds")}>&#8681;</button>
                </div>
                
            </div>
            <div style={{ marginTop: 20, width: 350, justifyContent: 'space-around' }}>
                {this.renderBtn()}
            </div>
        </div>
    }

} 



withRouter(TimerPage);
export {TimerPage};