import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div >
            <ul className="list" style={{ gap: "10px"}}>
                    <li><img src="https://flowbite.com/docs/images/logo.svg" /></li>
                    <li style={{ fontSize:"24px"}}>GeekFoods</li>
                </ul>
            </div>
            <div>
            <ul className="list" style={{ gap: "30px"}}>
                    <li style={{color:"#2563EB"}}>Home</li>
                    <li className="mid">Quote</li>
                    <li className="mid">Restaurants</li>
                    <li className="mid">Foods</li>
                    <li className="mid">Contact</li>
          </ul>
            </div>
            <div>
                <ul className="list">
                    <li>  <button style={{backgroundColor:"#2563EB", color:"white",padding:"10px 14px",border:"none",borderRadius:"8px",fontWeight:"bold"}}>Get Started</button></li>
               </ul>
            </div>
        </div>
    );
}

export default Navbar;