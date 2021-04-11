import React,{Component} from 'react'
import './App.css';
import Layout from './Components/Layout/Layout'
import Modal from './Components/UI/Modal/Modal'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      showModal: false
    }
  }
  toggleModal= ()=>{
    let prev=this.state.showModal;
    this.setState({showModal:!prev})
    console.log("OPen modal")
  }

  render(){
    let modal=null;
    if(this.state.showModal){
      console.log("Modal opened")
      modal=<Modal openModal={this.state.showModal} closeModal={this.toggleModal.bind(this)} addModal={true}/>
    }
    return (
      <div className="App">
        {modal}
        <header className="App-header">
          <Layout openModal={this.toggleModal.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default App;
