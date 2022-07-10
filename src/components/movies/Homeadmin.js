import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Homeadmin.css";


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
        <div className="container-fluid mt-2">
            <div className="container" style={{ border: "1px solid black" }}>
                <div className='row' style={{ margin: "auto" }}>
                    {movies.map((movie) => {
                        return (
                            <div className="card my-2 design" style={{ width: "18rem", height: "25rem", margin: "auto", background: "black" }}>
                                <img src={movie.img} className="card-img-top" alt="..." style={{ width: "100%", height: "50%" }} />
                                <hr style={{ color: "white" }}></hr>
                                <div className="card-body" style={{ color: "white" }}>
                                    <h5 className="card-title" style={{ color: "white" }}>{movie.title}</h5>
                                    <p className="card-text" style={{ color: "white" }}>{movie.Desc}</p>
                                    <div >
                                    <a href={movie.Trailerlink} className="btn btn-primary " target="_blank" >{movie.click}</a>
                                    <Link to ={`/EditMovie/${movie.id}`} className="btn btn-secondary my-2 items">Edit Movie </Link>
                                    </div>
                                </div>

                            </div>
                        );
                    })}

                </div>
            </div>
        </div >
    )
}

export default Home;
