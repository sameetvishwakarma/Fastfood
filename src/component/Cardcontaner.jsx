import Restaurent from "./Restaurent.jsx"


const Cardcontainer = () =>{
    const resdata = [
        {
            title:"Seoul Burgers",
            rating:"4.5",
            deliverytime:"40-45 mins",
            cuisine:"Burger, Bubble Teea",
            location:"Ghatkkopar East",
        },
        {
            title:"McDonald's",
            rating:"4.3",
            deliverytime:"45-50 mins",
            cuisine:"Burger, Beverages",
            location:"Andheri West",
        },
        {
            title:"BOSS Burger",
            rating:"4.0",
            deliverytime:"30-35 mins",
            cuisine:"Samosalicious Smash Burger",
            location:"Bandra East",
        },
        {
            title:"Burger King",
            rating:"4.3",
            deliverytime:"45-50 mins",
            cuisine:"American Burger, Fast Food",
            location:"Powai",
        },
        {
            title:"Good Flippin",
            rating:"4.5",
            deliverytime:"25-30 mins",
            cuisine:"Burrger and Fries, Cold Drinks",
            location:"Marin Line",
        },
        {
            title:"Bombay Burger",
            rating:"3.5",
            deliverytime:"30-35 mins",
            cuisine:"Ameican, Snacks",
            location:"Sion",
        },
        {
            title:"Burger Bomb",
            rating:"4.0",
            deliverytime:"45-50 mins",
            cuisine:"Burger, Snacks, Cafe",
            location:"Bhandup",
        },
        {
            title:"Movie Max",
            rating:"3.9",
            deliverytime:"35-40 mins",
            cuisine:"Bevrages, Fast food",
            location:"Marol Naka",
        },
    ]

    return(
        <div className="flex p-5 grid grid-cols-4 place-items-center container mx-auto">
            {
                resdata.map((restaurent)=>{
                    return(
                        <Restaurent
                        title={restaurent?.title}
                        rating={restaurent?.rating}
                        deliverytime={restaurent?.deliverytime}
                        cuisine={restaurent?.cuisine}
                        location={restaurent?.location}
                        />
                    );
                })
            }
            {/* <restaurent /> */}
            {/* <restaurent /> */}
            {/* <restaurent /> */}
            {/* <restaurent /> */}
            {/* <restaurent /> */}
            {/* <restaurent /> */}
            {/* <restaurent /> */}
            {/* <restaurent /> */}
        </div>
    )
}


export default Cardcontainer