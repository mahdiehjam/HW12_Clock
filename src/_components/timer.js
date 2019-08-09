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
        this.setState({[name]: value ,minimumIntegerDigits: 2 });
    }
    
    
    showTimer = () =>{
        const {hour,min,sec} = this.state;
        let {start} = this.props;
        let counter = 0;
        counter = hour*3600 + min*60 + sec;
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
            <input type="number" vlaue={hour} name="hour" min="00" max="23" placeholder="00" onChange={this.eventHandler}/>
            :
            <input type="number" vlaue={min} name="min" min="00" max="59" placeholder="00" onChange={this.eventHandler}/>
            :
            <input type="number" vlaue={sec} name="sec" min="00" max="59" placeholder="00" onChange={this.eventHandler}/>
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