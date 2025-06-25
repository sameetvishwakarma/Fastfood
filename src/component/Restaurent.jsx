import { img_url } from "../contants"


const Restaurent = ({title,rating,delivverytime,cuisine,location}) =>{

    // const {title,rating,delivverytime,cuisine,location} = props

    return(
        <div className="w-full max-w-[200px]">
            <div className="w-full rounded-x1">
                <img className="w-4xl h-40" src = {img_url} alt="restaurent" />
                <div>
                    <h1>{title}</h1>
                    <h2>{rating}</h2>
                </div>
                <div>
                    <p>{delivverytime}</p>
                    <p>{cuisine}</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>  
    )
}


export default Restaurent