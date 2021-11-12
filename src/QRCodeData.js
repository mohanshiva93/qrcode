import React, { useState } from 'react'

/**
* @author
* @function 
**/

export const  QRCodeData= (props) => {
  const[imgURL, setImgURL]=useState("https://i.ytimg.com/vi/56rNoZKpcS4/sddefault.jpg")
  return(
    <div>
      <div class="panel-group" id="accordion">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" >Event Details</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse in">
    <div class="panel-body">Your presence is requested
                            at a reception to celebrate the
                            wedding of
                            Archana
                            and
                            Shashi Kumar
                            on Saturday, September 7th, 2002
                            at 7pm
                            at
                            Akbar Restaurant
                            2 South Street
                            Garden City
                            New York 11530
                            (516) 357-8300</div>
     
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse">Live Streaming Details</a>
      </h4>
    </div>
    <div id="collapse3" class="panel-collapse collapse in">
      <div class="panel-body">
        <b> Live Streaming starts from : 10am Nov 21</b>
        <br></br>Streaming Link : <a href='https://www.youtube.com/watch?v=QCHo_NBw5d4'>Marriage Link (https://www.youtube.com/watch?v=QCHo_NBw5d4) </a>
        </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse"  > Invitation card</a>
      </h4>
    </div>
    <div id="collapse2" class="panel-collapse collapse in">
      <div class="panel-body">
      <div className="row">
            <div className="col-xs-12">
                <img src='https://i.ytimg.com/vi/56rNoZKpcS4/sddefault.jpg' onClick={()=>setImgURL('https://i.ytimg.com/vi/56rNoZKpcS4/sddefault.jpg')} style={{width:50, height:50}}></img>
                <img src='https://d1bdry3axpowl5.cloudfront.net/public/video_editor_resources/WED045_telugu/WED045_telugu.jpg'  
                onClick={()=>setImgURL('https://d1bdry3axpowl5.cloudfront.net/public/video_editor_resources/WED045_telugu/WED045_telugu.jpg')} style={{width:50, height:50}}></img>
                <img src='https://i.ytimg.com/vi/G8yun0wpu7g/maxresdefault.jpg'  onClick={()=>setImgURL('https://i.ytimg.com/vi/G8yun0wpu7g/maxresdefault.jpg')} style={{width:50, height:50}}></img>
            </div>
            
            <div className="col-xs-12" style={{marginTop:10}}>
               <img src={imgURL} style={{maxWidth:500}}></img>
            </div>
          </div>

      </div>
    </div>
  </div>

</div>
    </div>
   )

 }