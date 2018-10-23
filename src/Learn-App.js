import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      head: 'Head Content',
      foot: 'Foot Content',
      data: [],
      number: 1,
    }
    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  setStateHandler() {
    var item = "setState..."
    var myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({data: myArray})
  };
  forceUpdateHandler() {
      this.forceUpdate();
  };
  findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
  };
  setNewNumber() {
      var newNumber = this.state.number + 1;
      this.setState({number: newNumber});
  };
  render() {
    return (
      <div className="App">
        <Header/>
        <p>{this.state.head}</p>
        <p>{this.props.headProp}</p>
        <p>{this.props.headerProp}</p>
        <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
        </div>
        <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
        </div>
        <div>
            <button onClick = {this.findDomNodeHandler}>FIND MY NODE</button>
            <div id="myDiv">NODE - Hello There</div>
        </div>
        <div>
            <button onClick = {this.setNewNumber}>INCREMENT NUMBER</button>
            <Number myNumber = {this.state.number} />
        </div>
        <Content/>
        <Table/>
        <p>{this.props.footerProp}</p>
        <p>{this.props.footProp}</p>
        <p>{this.state.foot}</p>
        <Footer/>
      </div>
    );
  }
}

class Header extends React.Component {
   render() {
      return (
         <div className="header">
            <h1>Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      var i=1;
      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div className="content">
            <h1>Hello World</h1>
            <p className = "text">This is first react application</p>
            <p className = "text">MathFunction: {1+1}</p>
            <p className = "text">If Else Condition: {i == 1 ? 'True' : 'False'}</p>
            <p className = "text" style = {myStyle}>Css Style</p>
         </div>
      );
   }
}

class Number extends React.Component {
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
     return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

class Table extends React.Component{
  constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
  }
  render() {
    var style = {
      textAlign: 'center',
    }
    return (
      <div className="table" style={style}>
        <table>
           <tbody>
              {this.state.data.map((val, i) => <TableRow key = {i} 
                 data = {val} />)}
           </tbody>
        </table>
      </div>
    );
  }
}

class TableRow extends React.Component{
  render() {
    return (
      <tr className={this.props.data.id}>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.age}</td>
       </tr>
    );
  }
}

class Footer extends React.Component {
   render() {
      return (
         <div className="footer">
            <h2>Footer</h2>
            <p>@Copyright</p>
         </div>
      );
   }
}

App.defaultProps = {
   headerProp: "Header Props from App.js",
   footerProp: "Footer Props from App.js"
}
export default App;
