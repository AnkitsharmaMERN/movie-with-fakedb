



const Card = (props) => {

    return (
        
            <div className="card my-2 design"  style={{ width: "18rem", height:"25rem", margin:"auto", background:"black"}}>
                <img src={props.img} className="card-img-top" alt="..." style={{ width:"100%", height:"50%"}} />
                <hr style={{color:"white"}}></hr>
                <div className="card-body" style={{color:"white"}}>
                    <h5 className="card-title"style={{color:"white"}}>{props.title}</h5>
                    <p className="card-text"style={{color:"white"}}>{props.Desc}</p>
                   <div className="row">
                    <a href={props.Trailerlink} className="btn btn-primary" target="_blank" >{props.click}</a>
                    </div>
                </div>
            </div>
        


    )
}
export default Card;