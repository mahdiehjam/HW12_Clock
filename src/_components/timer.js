import React from 'react';


class Timer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hour:0,
            min:0,
            sec:0
        }
    }

    eventHandler = (event)=>{
        const {target:{value,name}} = event;
        this.setState({[name]: value});
    }
    
    calculateClock = () =>{
     
        
    }
    
    showTimer = () =>{
       
        const {hour,min,sec} = this.state;
        let {start} = this.props;
        let count = 0;
        count = hour*3600 + min*60 + sec;
        // this.props.setCounter({count});
        if(start){
            return <>
            <span>{hour.toLocaleString('en',{minimumIntegerDigits: 2})}</span>
            :
            <span>{min.toLocaleString('en',{minimumIntegerDigits: 2})}</span>
            :
            <span>{sec.toLocaleString('en',{minimumIntegerDigits: 2})}</span></>
        }else{
            return<>
            <input type="number" vlaue={hour} name="hour" onChange={this.eventHandler}/>:
            <input type="number" vlaue={min} name="min" onChange={this.eventHandler}/>:
            <input type="number" vlaue={sec} name="sec" onChange={this.eventHandler}/>
            </>
        }
    }
    
    render(){
        return <div className="Timer-page">
            {this.showTimer()}
        </div>
    }
        
}

  

export {Timer};