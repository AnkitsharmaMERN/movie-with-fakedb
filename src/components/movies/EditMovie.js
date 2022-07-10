import React, { useEffect } from 'react';
import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"



function EditMovie() {

    const { id } = useParams();
    const [movies, SetMovies] = useState([])
    const [update, SetUpdate] = useState([])

    useEffect(() => {
        getsingledata();
    })


    const getsingledata = async () => {
        try {
            const res = await axios.get(`http://localhost:3333/Movies/${id}`)
            SetMovies(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    // This function is for get the value from reactUI
    const Handelvalue = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        SetUpdate({ ...update, [name]: value });
    }

   //This is function for delete value by admin 
    const removemovie = async () => {
        try {
            const res = await axios.delete(`http://localhost:3333/Movies/${id}`)
            SetMovies(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const updatedata = async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.put(`http://localhost:3333/Movies/${id}`, update)
            SetUpdate(res.data)

        }catch(e){
            console.log(e)
        }


    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className="container mt-2">
                        <div className="row" style={{ alignContent: "center" }} >
                            Image link :  <input type="text" placeholder="Paste your image link of movies" name="img" value={update.img} onChange={Handelvalue} />
                        </div>
                        <br />
                        <div className="row" style={{ alignContent: "center" }} >
                            Description : <input type="text" placeholder="enter your description about movies " name="Desc" value={update.Desc} onChange={Handelvalue} />
                        </div>
                        <br />
                        <div className="row" style={{ alignContent: "center" }} >
                            Title : <input type="text" placeholder="enter your movies name title " name="title" value={update.title} onChange={Handelvalue} />
                        </div>
                        <br />
                        <div className="row" style={{ alignContent: "center" }} >
                            Trailer link : <input type="text" placeholder="enter your movie trailer link " name="Trailerlink" value={update.Trailerlink} onChange={Handelvalue} />
                        </div>
                        <br />
                        <div className="row" style={{ alignContent: "center" }} >
                            Movie download :  <input type="text" placeholder="enter your movie page link" name="click" value={update.click} onChange={Handelvalue} />
                        </div>
                        <br />

                        <button type="button" class="btn btn-success my-2" onClick={updatedata}> Update movie</button>

                    </div>

                </div>
                <div className='col'>
                    <div className="card my-2 design" style={{ width: "18rem", height: "25rem", margin: "auto", background: "black" }}>
                        <img src={movies.img} className="card-img-top" alt="..." style={{ width: "100%", height: "50%" }}/>
                        <hr style={{ color: "white" }}></hr>
                        <div className="card-body" style={{ color: "white" }}>
                            <h5 className="card-title" style={{ color: "white" }}>{movies.title}</h5>
                            <p className="card-text" style={{ color: "white" }}>{movies.Desc}</p>
                            <div className='container row col '>
                            <a href={movies.Trailerlink} className="btn btn-primary" target="_blank" >{movies.click}</a>
                                    <button type="button" className="btn btn-danger my-2" onClick={removemovie}>Remove Movie</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditMovie;




