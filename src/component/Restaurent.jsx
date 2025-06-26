import { img_url } from "../contants"


const Restaurent = ({title,rating,deliverytime,cuisine,location}) =>{

    // const {title,rating,delivverytime,cuisine,location} = props

    return(
        <div className="w-full max-w-[200px]">
            <div className="w-full">
                <img className="w-4xl h-40 rounded-lg" src = {img_url} alt="restaurent" />
                <h1 className="font-bold text-xl">{title}</h1>

                <div className="flex gap-3 font-semibold">
                    <p>{rating}</p>
                    <p>{deliverytime}</p>
                </div>
                    <p className="text-[16px] text-gray-700">{cuisine}</p>
                    <p className="text-[16px] text-gray-700">{location}</p>
            </div>
        </div>  
    )
}


export default Restaurent