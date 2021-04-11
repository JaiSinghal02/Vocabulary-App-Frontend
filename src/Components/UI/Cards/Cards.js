import React,{Component} from 'react'
import './Cards.css'
import Card from './Card/Card'
import Modal from '../Modal/Modal'

class Cards extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }
    }
    toggleModal= (e)=>{
        let prev=this.state.showModal;
        this.setState({showModal:!prev})
    }
    render(){
        let modal=null;
        if(this.state.showModal){
            modal=<Modal 
            openModal={this.state.showModal} 
            closeModal={this.toggleModal.bind(this)} 
            wordModal={true}
            modalHeight="100%"
            modalWidth="100%"
            />
        }
        return(
            <div className="cards-container">
                {modal}
            <Card openCard={this.toggleModal.bind(this)}/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        )
    }
}

export default Cards