const Header = ()=>{
    return(
        <div className ="fluid-container flex justify-between p-7 shadow-lg text-lg">
            <div>logo</div>
            <div>
                <ul className = "flex gap-7">
                    <li>Home</li>
                    <li>about</li>
                    <li>FAQ</li>
                    <li>Conatct</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header