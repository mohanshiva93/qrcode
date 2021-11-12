import React, { useState } from 'react'
import  { useCallback, useRef } from 'react';
import QRCode from "react-qr-code";
import { toPng } from 'html-to-image';
/**
* @author
* @function 
**/

export const DownloadQR = (props) => {
    const ref = useRef(null)

    const[QRSize, setQRSize]=useState(200)
    
const onDownloadQRButtonClick = useCallback(() => {
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
 
  const _setQRSize = (e) =>{
      if(!isNaN(e.target.value) && e.target.value>99 && e.target.value<299)
         setQRSize(e.target.value);
  }


  return(
     
    <div>
         <h2>QR CODE DETAILS: </h2>
        <br/><br/>
        <div className="col-lg-6"></div>
        <div className="col-lg-6"></div>
        <div class="form-group">
            <label for="usr">QR Size:</label>
            <input type="number" style={{width:300}} class="form-control"   value={QRSize} onChange={_setQRSize} placeholder="QR Size"></input>
        </div>
        
        <br/>
        
        <div  ref={ref} style={{backgroundColor: 'white', padding:10, width: QRSize*3}}>
          <div className="row">
            <div className="col-xs-4">
            <QRCode size= {QRSize} value={"https://mohanshiva93.github.io/qrcode/#/qrdata"} />
            </div>
            <div className="col-xs-8">
            <label>Name:{props.name}</label><br/> 
            <label>URL:{props.url}</label><br/>
            <label>Description:{props.description}</label>
            </div>
          </div>           
        </div>
        <br></br>
        <button type="button" class="btn btn-default" onClick={props.backAction} title="Clear">Back</button>   
        <button type="button" class="btn btn-primary" onClick={onDownloadQRButtonClick} title="Download QR">Download QR</button> 
       
    </div>
   )

 }