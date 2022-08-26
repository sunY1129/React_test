//import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Sample from './Sample';

function App() {
  var a = 10 + 10
  console.log(a)
  var name = 'MyName'
  console.log('안녕하세요'+name)
  const text = <h1>React Project,{10 * 20}</h1>
  function add10(num){
    return num + 10
  }
  function handleClickEvent(e){
    alert(e.target.textContent)
  }
  const customStyle={
    color:'red', textAlign:'center'
  }
  class MyTag extends React.Component{
    render(){
      return(
        <div>Hello, {this.props.name}</div>
      )
    }
  }
  return (
    <div className="App">
      <h1 style={customStyle}>Main test</h1>
      <h2 style={{color:'blue',backgroundColor:'yellow'}}>Sub test</h2>
      <div>test</div>
      <MyTag name="park"/>
      <div>
        {a}
        {text}
        <h1 className='title' onClick={handleClickEvent}>
          add10의 함수 결과: {add10(3)}
        </h1>
        <Sample />
      </div>
    </div>
  );
}

export default App;
