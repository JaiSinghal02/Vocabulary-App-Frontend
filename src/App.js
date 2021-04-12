import React, { Component } from 'react'
import './App.css';
import Layout from './Components/Layout/Layout'
import Modal from './Components/UI/Modal/Modal'
import Cards from './Components/UI/Cards/Cards';
import PopAlert from './Components/UI/PopAlert/PopAlert'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionaryData: null,
      data:null,
      showModal: false,
      searchBarTxt: '',
      message:"",
      showPopAlert: false
    }
  }
  fetchDictionary = (fetch=false) => {
    if (!this.state.dictionaryData || fetch) {
      axios.get('/dictionary')
        .then(res => {
          this.updateDictionary(res.data,fetch)
        })
        .catch(err => {
          this.setState({showPopAlert:true,message: err.message})
        })
    }
  }
  componentDidMount() {
    this.fetchDictionary()

  }
  updateDictionary = (data,fetch=false) => {
    let msg=""
    if(fetch){
      msg="Queued successfully!"
    }
    this.setState({ dictionaryData: data.reverse(), showPopAlert: fetch,data:data,message:msg })
  }
  toggleModal = (text="",msg="") => {
    let err=""
    if(text==="error"){
      err=msg
    }
    let prev = this.state.showModal;
    this.setState({ showModal: !prev,message:err,showPopAlert: err!==""})
    if(typeof text==='string' && text!=="error"){
      this.fetchDictionary(true)
    }
    
  }
  searchBarQuery = (e) => {
    let queryText=e.target.value
    let exp=new RegExp(queryText)
    let data=this.state.dictionaryData
    let newData=[]
    for(let i=0;i<data.length;++i){
      if(data[i]["_id"].match(exp)){
        newData.push(data[i])
      }
    }
    this.setState({ searchBarTxt: queryText,data:newData })
  }
  isSearching = () => {
    this.setState({data:null })
  }
  isNotSearching = () => {
    this.setState({data:this.state.dictionaryData })
  }

  render() {
    let modal = null;
    if (this.state.showModal) {
      modal = <Modal openModal={this.state.showModal} closeModal={this.toggleModal.bind(this)} 
      addModal={true} />
    }
    let popalert=null;
        if(this.state.showPopAlert){
            popalert=<PopAlert open={this.state.showPopAlert} message={this.state.message} close={()=>this.setState({showPopAlert:false})} />
        }
    return (
      <div className="App">
        {modal}
        <header className="App-header">
          <Layout openModal={this.toggleModal.bind(this)}
            searchBarQuery={this.searchBarQuery.bind(this)}
            isSearching={this.isSearching.bind(this)}
            isNotSearching={this.isNotSearching.bind(this)}
          />
          { this.state.data ? <Cards dictionaryData={this.state.data}/> : null}
        </header>
        {popalert}
      </div>
    );
  }
}

export default App;
