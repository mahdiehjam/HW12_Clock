import React from 'react';

function StopWatch ({counter}) {
  const cSec = counter % 100;
  const counterSec = (counter - cSec) / 100;
  const hour = Math.floor(counterSec / 3600);
  const min = Math.floor((counterSec % 3600) / 60);
  const sec = counterSec % 60;
  return <div style={style}>
    <span>{hour.toLocaleString('en',{minimumIntegerDigits: 2})}</span>
    :
    <span>{min.toLocaleString('en',{minimumIntegerDigits: 2})}</span>
    :
    <span>{sec.toLocaleString('en',{minimumIntegerDigits: 2})}</span>
    
    <span style={milisecStyle}>{cSec.toLocaleString('en',{minimumIntegerDigits: 2})}</span>
  </div>;
}

const style = {
  color: '#FFF',
  fontSize: 40,
  fontWeight: 'bold'
};

const milisecStyle = {
  color: '#FFF',
  fontSize: 30,
  fontWeight: 'bold',
  paddingLeft: 10,
  paddingTop: 10
};

export {StopWatch};