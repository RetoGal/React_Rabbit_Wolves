// import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';

class Button extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: "Click me"
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    alert("pratan")
  }
  render(){
    return(
      <button onClick = {this.handleClick}>
        {this.state.text}
      </button>
    )
  }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Button/>)


// function App() {
//   return (
//     <div className="App">
//       <Show name="Reto" />
//     </div>
//   );
// }

export default Button;
