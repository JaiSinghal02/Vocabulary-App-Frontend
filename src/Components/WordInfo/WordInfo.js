import React from 'react'
import Divider from '@material-ui/core/Divider';
import './WordInfo.css'

export default function WordInfo(props){
    let definition=null,examples=null;
  const mapArray = (obj,ind=0)=>{
    if(obj["definitions"]){
      definition=<p className="word-info-modal-definition">{obj["definitions"]}</p>
      if(obj["examples"]){

        examples=obj["examples"].map((exp,id)=>{
          return(
              <li key={id}>{exp["text"]}</li>
          )
        })
      }
    }
    let subsenseInfo=null
    if(obj["subsenses"]){
        subsenseInfo=obj["subsenses"].map((obj2,ind)=>{
          return(mapArray(obj2,ind))
        })
      }
    return(
      <React.Fragment key={ind}>
      {definition}
      <ul className="word-info-modal-example-list">
        {examples}
      </ul>
      {subsenseInfo}
      </React.Fragment>
    )
  }
    let content=props.data["lexicalEntries"].map((obj1,ind)=>{
        return(
          <React.Fragment key={ind+1000}> 
          {ind!==0?
            <div style={{width: '100%', height: '3px',display: 'block'}}>
            <Divider style={{display: 'flex'}} light />
            </div>:null}
          <p className={"word-info-modal-word"+(ind===0?" word-info-modal-first-word":"")}>{obj1["lexicalCategory"]["id"]}</p>
          
          {obj1["entries"].map((obj2,ind)=>{
            return(
              <React.Fragment key={ind+100}>
              {obj2["etymologies"]?<p className="word-info-modal-etymology">{obj2["etymologies"]}</p>:null}
              <div>
                {obj2["senses"].map((obj3,ind)=>{
                  return(
                    <div key={ind+10}>
                      {mapArray(obj3)}
                    </div>
                  )
                })}
              </div>
              </React.Fragment>
            )
          })}
          </React.Fragment>
        )
      })
    return(
        <>
        {content}
        </>
    )
}