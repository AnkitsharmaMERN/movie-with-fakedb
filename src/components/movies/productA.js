import "../movies/productA.css";

import { useState } from "react";
import axios from "axios";


const Movieproductadd = () => {


    const [Movies, SetMovies] = useState({
        img: "", Desc: "", title: "", Trailerlink: "", click: ""
    })
    // This function is for get the value from reactUI
    const Handelvalue = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        SetMovies({ ...Movies, [name]: value });

    }
    // This function is for post the value in server 
    const postdata = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3333/Movies", Movies)
            SetMovies({ img: "", Desc: "", title: "", Trailerlink: "", click: "" })
        } catch (error) {
            console.log(error)
        }
    }


  


return (
    <div className="product container mt-2">
        <div className="row" style={{ alignContent: "center" }} >
            Image link :  <input type="text" placeholder="Paste your image link of movies" name="img" value={Movies.img} onChange={Handelvalue} />
        </div>
        <br />
        <div className="row" style={{ alignContent: "center" }} >
            Description : <input type="text" placeholder="enter your description about movies " name="Desc" value={Movies.Desc} onChange={Handelvalue} />
        </div>
        <br />
        <div className="row" style={{ alignContent: "center" }} >
            Title : <input type="text" placeholder="enter your movies name title " name="title" value={Movies.title} onChange={Handelvalue} />
        </div>
        <br />
        <div className="row" style={{ alignContent: "center" }} >
            Trailer link : <input type="text" placeholder="enter your movie trailer link " name="Trailerlink" value={Movies.Trailerlink} onChange={Handelvalue} />
        </div>
        <br />
        <div className="row" style={{ alignContent: "center" }} >
            Movie download :  <input type="text" placeholder="enter your movie page link" name="click" value={Movies.click} onChange={Handelvalue} />
        </div>
        <br />

        <button type="button" class="btn btn-success my-2" onClick={postdata} >ADD movie</button>
        
    </div>

)

}
export default Movieproductadd;