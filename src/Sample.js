import React, { Component } from 'react';

const cardStyle = {
  border: '1px solid black',
  padding: 10,
  margin: 10
}
function Card(props){
  return <div style={cardStyle}>
    <span>2022년08월26일</span>
    <hr />
    <span>{props.author}</span>
    {props.children}
  </div>
}
class Sample extends Component {
  render() {
    const elements = []
    for (let index=1; index<10; index++){
      elements.push(
        <Card author='NoName'>
          <h1>Lorem Ipsum</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>
        </Card>
      )  
    }
    return (
      <div>
        {elements}
      </div>
    );
  }
}

export default Sample;