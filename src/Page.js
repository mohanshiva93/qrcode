import React, {useState} from 'react';
import {AddDataToFireStore} from './FireBase';
import QRCode from "react-qr-code";
import  { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

/**
* @author
* @function Page
**/

export const Page = (props) => {
  const ref = useRef(null)
 
const [name,setName] = useState('');
const [mobile,setMobile] = useState('');
const [url,setUrl] = useState('');
const [description,setDescription] = useState('');
const [isDataSaved,setIsDataSaved] = useState(false);

const addData =()=>{

   var saveBarCode={
     Name : name,
     MobileNo : mobile,
     URL : url,
     Description : description
   }

  if(name != '' && mobile !='' )
  {
    AddDataToFireStore('barcode',saveBarCode).then(response => {
      alert("Data saved Successfully")
      setIsDataSaved(true);
    });
  }
  else{
    alert("Enter Name & mobile number")
  }
}

const onButtonClick = useCallback(() => {
  if (ref.current === null) {
    return
  }

  toPng(ref.current, { cacheBust: true, })
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'my-image-name.png'
      link.href = dataUrl
      link.click()
    })
    .catch((err) => {
      console.log(err)
    })
}, [ref])

 const clear =() =>{
  setName('')
  setMobile('')
  setUrl('')
  setDescription('')
 }

  return(
    <div>

<div class="container">
  
  {isDataSaved === false &&
  <form>
  <h2>CREATE YOUR QR CODE</h2>
  <div class="form-group">
            <label for="usr">Name:</label>
            <input type="text" class="form-control" value={name} onChange={(event)=> setName(event.target.value)} placeholder="Name"/>
          </div>

          <div class="form-group">
            <label for="usr">Mobile No:</label>
            <input type="text" class="form-control"  value={mobile} onChange={(event)=> setMobile(event.target.value)} placeholder="mobile number"></input>
        
          </div>

          <div class="form-group">
            <label for="usr">Redirect URL:</label>
            <input type="text" class="form-control" value={url} onChange={(event)=> setUrl(event.target.value)}  placeholder="Redirect URL"></input>
        
          </div>

          <div class="form-group">
            <label for="usr">Description:</label>
            <textarea type="text" class="form-control"  rows="3" value={description} onChange={(event)=> setDescription(event.target.value)} placeholder="Description"></textarea>
            
          </div> 
          <hr/>
          <div className="button">
            <button type="button" class="btn btn-primary" onClick={addData} title="Save">SAVE</button>
            <button type="button" class="btn btn-default" onClick={clear} title="Clear">CLEAR</button>   
          </div>  
  </form>
}
{isDataSaved === true &&
       <div> 
         <h2>QR CODE DETAILS: </h2>
        <label>Name:{name}</label><br/>
        <label>Mobile No:{mobile}</label><br/>  
        <label>URL:{url}</label><br/>
        <label>Description:{description}</label><br/><br/><br/>
        <div  ref={ref} style={{backgroundColor: 'white', padding:10, width: 276}}>
           <QRCode value={"http://localhost:3000/" + mobile} />
        </div>
        <br></br>
        <button type="button" class="btn btn-default" onClick={() => {setIsDataSaved(false)}} title="Clear">Back</button>   
        <button type="button" class="btn btn-primary" onClick={onButtonClick} title="Download QR">Download QR</button> 
       
      </div>
      }
</div>
      
 </div>
   )

 }