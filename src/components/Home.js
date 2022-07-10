import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "./card";


function Home() {

  
  const [movies, SetMovies] = useState([])

  useEffect(() => {
    getalldata();
   
  })

  const getalldata = async () => {
    try {
      const res = await axios.get("http://localhost:3333/Movies")
      SetMovies(res.data)

    } catch (error) {
      console.log(error)
    }
  }
     
  return (
    <div className="container-fluid mt-2"style={{background:"gray"}}>
      <div className="container" >
        <div className='row' style={{ margin: "auto" }}>
          {movies.map((movie) => {
            return (
              <Card
                img={movie.img}
                Desc={movie.Desc}
                title={movie.title}
                Trailerlink={movie.Trailerlink}
                click={movie.click}
              />
            );
          })}

        </div>
      </div>
    </div >
  )
}

export default Home;
