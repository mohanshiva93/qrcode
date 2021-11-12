import React, {useState} from 'react';
import {AddDataToFireStore} from './FireBase';
import {DownloadQR} from './DownloadQR'
/**
* @author
* @function Page
**/

export const Page = (props) => {

 
const [name,setName] = useState('');
const [mobile,setMobile] = useState('');
const [url,setUrl] = useState('');
const [description,setDescription] = useState('');
const [isDataSaved,setIsDataSaved] = useState(true);

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
      setIsDataSaved(true);
    });
  }
  else{
    alert("Enter Name & mobile number")
  }
}


 const clear =() =>{
  setName('')
  setMobile('')
  setUrl('')
  setDescription('')
  setIsDataSaved(false);
 }

  return(
    <div>

<div>
  
  {isDataSaved === false &&
  <div>
    <div className="col-lg-12">
    <div className="col-lg-6" style={{backgroundColor:'#c1c1c1',  height:360}}>
      <form>    
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
              
      </form>
     </div>
     <div className="col-lg-6" style={{backgroundColor:'#c1c1c1',  height:360}}> 
       <form>
              <div class="form-group">
                <label for="usr">Document 1:</label>
                <input type="file" class="form-control" placeholder="Redirect URL"></input>            
              </div> 
       </form>

       <form>
              <div class="form-group">
                <label for="usr">Document 2:</label>
                <input type="file" class="form-control" placeholder="Redirect URL"></input>            
              </div> 
       </form>

       <form>
              <div class="form-group">
                <label for="usr">Document 3:</label>
                <input type="file" class="form-control" placeholder="Redirect URL"></input>            
              </div> 
       </form>
     </div>
     <div  className="col-lg-12">
     <hr/>
              <div className="button">
                <button type="button" class="btn btn-primary" style={{marginRight:10}} onClick={addData} title="Save">Generate QR</button>
                <button type="button" class="btn btn-default" onClick={clear} title="Clear">Clear</button>   
              </div>  
     </div>
    
    </div>
    
   
  </div>
}
{isDataSaved === true &&
       <div> 
         <DownloadQR name={name} description={description} url={url} backAction={clear}></DownloadQR>
      </div>
      }
</div>
      
 </div>
   )

 }