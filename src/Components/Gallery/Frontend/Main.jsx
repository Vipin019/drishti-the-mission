import React,{useEffect, useState} from 'react'
import './Main.css';




const Main = () => {

  const [datas, setData]=useState([{
    link: ''
  }])
 
  useEffect(() =>{
    fetch("http://localhost:4000/app/link").then(res=>{
      if(res.ok){
        return res.json();
      }
    }).then(jsonRes=>setData(jsonRes))
  })
  datas.reverse()
  return (
    <div id='main'>
    <h1>Photo Gallery</h1>
      <din id="main__images">
     {
      datas.map(data =>
        <div id="main__images__image">
        <img src={"https://drive.google.com/uc?export=view&id="+data.link.substring(32,65)} alt="image" />
        </div>
      )}
        
        
      </din>
    </div>
  )
}

export default Main
