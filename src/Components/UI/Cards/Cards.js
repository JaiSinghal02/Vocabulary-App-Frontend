import React,{Component} from 'react'
import './Cards.css'
import Card from './Card/Card'

class Cards extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className="cards-container">
            <Card/>
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