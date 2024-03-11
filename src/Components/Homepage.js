import "./Homepage.css"
import Navbar from "./Navbar";
import Second from "./Second";
function Homepage() {
    return (
        <div>
            <div className="home">
            <Navbar/>
            <div style={{width:"38%",marginLeft:"40px",padding:"130px 0"}}>
                <div>
                <h1 style={{fontWeight:"800",fontSize:"46px",textAlign:"center",lineHeight:"50px"}}>Let us find your 
<span style={{color:"#BE123C"}}> Forever Food.</span></h1>
                </div>
                <div style={{textAlign:"center",fontSize:"18px"}}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                </div>
                <div>
                    <button  style={{backgroundColor:"rgb(225 29 72)",color:"white",padding:"16px 46px",border:"none",borderRadius:"6px",margin:"0px 10px",fontWeight:"600"}}>Search Now</button>
                    <button style={{color:"rgb(225 29 72)",padding:"16px 46px",border:"none",borderRadius:"6px",fontWeight:"600"}}>Know more</button>
                </div>
            </div>
            </div>
            <Second/>
        </div>
    );
};

export default Homepage;