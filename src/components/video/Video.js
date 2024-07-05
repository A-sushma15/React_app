import React,{useState, useEffect} from 'react';



function Video() {

  const [videos,setVideos] = useState([])
  useEffect(() => {
    fetch("videoData.json")
    .then(response => response.json())
    .then(data => setVideos(data))
    .catch(error => console.error("Problem with fetching data!!",error))
  
    
  }, [])
  

 
 

  return (
    <div>
      <div className="container">
        <div className="row">
          {
            videos.map((video,key) => (
              <div key={key} className="col-md-4">
                <a href={`https://youtube.com/watch?v=${video.imag_id}`}>
                <div className="card">
                  <img src={`http://img.youtube.com/vi/${video.imag_id}/0.jpg`} className="img-thumbnail" alt={video.title}/>
                  <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.channelName}</p>
                  <small> 
                    {video.viewsCount} views - {video.likesCount} likes -{" "}  
                    {video.duration}m
                  </small>
                
                </div>
            </div>
            </a>
        </div>
        
          ))
        }
      </div> 
      </div>
    </div>
  );
 
      }
export default Video
