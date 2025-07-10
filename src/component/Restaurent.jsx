import { img_url } from "../contants";


const Restaurent = ({name,avgRating,deliverytime,cuisines,locality,imgId}) =>{

    // const {title,rating,delivverytime,cuisine,location} = props

    return(
        <>
        <div className="w-full content ">
            <div className="w-full max-w-[]">
                <img className="w-3xl img_size h-50 rounded-lg" src = {`${img_url + imgId}`} alt="restaurent" />
                <h1 className="text-xl font-bold w-full h-7 overflow-hidden text-ellipsis">{name}</h1>

                <div className="flex gap-3 font-semibold">
                    <p>{avgRating}</p>
                    <p>{deliverytime}</p>
                </div>
                      <p className="text-[16px] text-gray-700"> {cuisines} </p>
                    <p className="text-[16px] text-gray-700">{locality}</p>
            </div>
        </div>  
        </>
    )
}


export default Restaurent