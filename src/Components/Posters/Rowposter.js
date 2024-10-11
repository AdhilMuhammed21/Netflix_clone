import React,{useEffect,useState} from 'react'
import {imageUrl,API_KEY} from '../../Constants/constants'
import axios from '../../Axios'
import './Rowposter.css'
import YouTube from 'react-youtube'

function Rowposter(props) {
  const [movie,setMovie] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
     axios.get(props.urls).then((response=>{
      console.log(response.data)
      setMovie(response.data.results)
     }))

  },[])

  const opt ={
    height : '700',
    width : '100%',
    playerVarse : {
      autoplay : 1,
    },
    
  };

  const handleMovie =(id)=> {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Empty Array")

      }

    })

  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {movie.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>

        )}
        </div>
        { urlId && <YouTube opts={opt} videoId={urlId.key} /> }
    </div>
  )
}

export default Rowposter
