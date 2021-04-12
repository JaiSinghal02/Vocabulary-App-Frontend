import React,{Component} from 'react'
import './Cards.css'
import Card from './Card/Card'
import Modal from '../Modal/Modal'
import CircularProgress from '@material-ui/core/CircularProgress';


class Cards extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false,
            infoModalData: null,
        }
    }
    setInfoModalData=(name)=>{
        const data=this.props.dictionaryData
        let info;
        for(let i=0;i<data.length;++i){
            if(data[i]["_id"]===name){
                info=data[i]
                break
            }
        }
        return info
    }
    toggleModal= (name)=>{
        let prev=this.state.showModal;
        const info=this.setInfoModalData(name)
        this.setState({showModal:!prev,infoModalData:info})
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
            data={this.state.infoModalData}
            />
        }
        let cardContent=<div style={{marginTop: '200px'}}><CircularProgress size={80} thickness={2.0}/> </div>
        const data=this.props.dictionaryData
        if(data){
            
            cardContent=data.map(word=>{
                return(
                    <Card key={word["_id"]} openCard={(name)=>this.toggleModal.bind(this,name)} data={word}/>
                )
            })
        }
        
        return(
            <>
            <div className="cards-container">
                {modal}
            {cardContent}
            
            </div>
            </>
        )
    }
}

export default Cards