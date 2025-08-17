import ReactDOM from "react-dom/client"
import "./style.css"

import two from "./assest/images/2.jpg"
import three from "./assest/images/3.jpg"
import five from "./assest/images/5.jpg"
import java from "./assest/images/java.jpg"
import python from "./assest/images/python.jpg"
import rone from "./assest/images/r1.jpg"
import rtwo from "./assest/images/r2.jpg"
import rthree from "./assest/images/r3.jpg"
import rfour from "./assest/images/r4.jpg"
import rfive from "./assest/images/r5.jpg"
import rsix from "./assest/images/r6.jpg"
import rseven from "./assest/images/r7.jpg"
import reight from "./assest/images/r8.jpg"
import uiux from "./assest/images/uiux.jpg"
import we from "./assest/images/we.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Navbar() {
    return (

        <div class="navbar">
            <div class="navbar__logo">
                <h1>Udemy</h1>
            </div>

            <div class="navbar__search">
                <i class="fa-solid fa-magnifying-glass" style={{ color: "#000000" }}></i>
                <input type="text" placeholder="Search for anything here,Tech,Business,Art........." />
            </div>

            <div class="navbar__title">
                <h3>Trending Courses</h3>

                <div class="navbar__pop">
                    <h3>My Learning</h3>
                    <div class="navbar__popup">
                        <p>You not purchase anything yet</p>
                    </div>
                </div>
            </div>

            <div class="navbar__icon">
                <i class="fa-solid fa-cart-shopping" style={{ color: "#000000" }}></i>
                <i class="fa-solid fa-bell" style={{ color: "#00040a" }}></i>
                <i class="fa-solid fa-user" style={{ color: "#000000" }}></i>


            </div>
            <div class="navbar__menu">
                <i class="fa-solid fa-bars"></i>
            </div>


        </div>

    );
}

function Sone() {
    return (<div class="section1--course">
        <ul>
            <li>Development</li>
            <li>Business</li>
            <li>IT & Software</li>
            <li>Personal Development</li>
            <li>Design</li>
            <li>Marketing</li>
        </ul>
    </div>

    );
}

function Stwo() {
    return (
        <div class="section2--images">
            <img src={two} alt="study" />
            <div class="section2--offer">
                <h2>Udemy Flash Sale!</h2>
                <p>Get the top Courses for just &#8377; 449.Just one day to save but a lifetime to learn. </p>
            </div>

        </div>
    );
}

function Sthree() {
    return (
        <div class="section3--recommended">
            <h2><b>Recommended for you</b></h2>
            <p>Pick the best fit</p>

            <div class="section3--course">

                <div class="section3--recommended__image">
                    <img src={python} alt="Python" />
                    <h4>2023 Python Data Visualization Masterclass</h4>
                    <p>Col Steele</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p><b>&#8377; 449 </b><del><i>1999</i></del></p>
                </div>

                <div class="section3--recommended__image">
                    <img src={we} alt="Web" />
                    <h4>Web Development Bootcamp 2023|Advance</h4>
                    <p>Col Steele</p>
                    <p>3.2 ⭐⭐⭐</p>
                <p><b>&#8377; 449</b> <del><i>1999</i></del></p>
            </div>

            <div class="section3--recommended__image">
                <img src={uiux} alt="uiux" />
                <h4>Master UI/UX Designing with Figma</h4>
                <p>Col Steele</p>
                <p>2.8⭐⭐</p>
                <p><b>&#8377; 449</b> <del><i>1999</i></del></p>
            </div>

            <div class="section3--recommended__image">
                <img src={java} alt="Java" />
                <h4>Basic to Advance Java core training</h4>
                <p>Col Steele</p>
                <p>4.8⭐⭐⭐⭐ </p>
                <p><b>&#8377; 449</b> <del><i>1999</i></del></p>
            </div>
        </div>
</div >
    );
}
function Sfour(){
    return(
        <div class="section4--topic">
        <h1>Topic recommended for you</h1>

        <div class="section4--topic__course">
            <p>Website</p>
            <p>Javascript</p>
            <p>CSS</p>
            <p>Mongo DB</p>
            <p>Azure</p>
            <p>AWS</p>
            <p>Docker</p>
            <p>GitHUB</p>
            <p>React js</p>
        </div>
    </div>

    )
}

function Sfive(){
    return(
        <div class="section5--recommended">
        <h2><b>Most Popular</b></h2>
        <p>Pick the best fit</p>

        <div class="section5--course">

            <div class="section5--recommended__image">
                <img src={rone} alt="Python"/>
                <h4>Data Visualization Masterclass</h4>
                <p>Col Steele</p>
                <p>4.8⭐⭐⭐⭐ </p>
                <p><b>&#8377; 449 </b><del><i>1999</i></del></p>
            </div>

            <div class="section5--recommended__image">
                <img src={rtwo }alt="Web"/>
                <h4>Javascript</h4>
                <p>Col Steele</p>
                <p>3.2⭐⭐⭐</p>
                <p><b>&#8377; 449</b> <del><i>1999</i></del></p>
            </div>

            <div class="section5--recommended__image">
                <img src={rthree} alt="uiux"/>
                <h4>UI/UX Designing</h4>
                <p>Col Steele</p>
                <p>2.8 ⭐⭐</p>
                <p><b>&#8377; 449</b> <del><i>1999</i></del></p>
            </div>

            <div class="section5--recommended__image">
                <img src={rfour} alt="Java"/>
                <h4>HacKing</h4>
                <p>Col Steele</p>
                <p>4.8⭐⭐⭐⭐ </p>
                <p><b>&#8377; 449</b> <del><i>1999</i></del></p>
            </div>

        </div>
        <div class="section5--course">

            <div class="section5--recommended__image">
                <img src={rfive} alt="Python"/>
                <h4>Mongo DB</h4>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p><b>&#8377; 449 </b><del><i>1999</i></del></p>
            </div>

            <div class="section5--recommended__image">
                <img src={reight} alt="Web"/>
                <h4>Cyber Security</h4>
                <p>Col Steele</p>
                <p>3.2⭐⭐⭐</p>
                <p><b>&#8377; 449</b> <del><i>1999</i></del></p>
            </div>

            <div class="section5--recommended__image">
                <img src={rseven} alt="uiux"/>
                <h4>Designing with AI</h4>
                <p>Col Steele</p>
                <p>2.8⭐⭐ </p>
                <p><b>&#8377; 449</b> <del><i>1999</i></del></p>
            </div>

            <div class="section5--recommended__image">
                <img src={rsix}alt="Java"/>
                <h4>Fullstack Developer</h4>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p><b>&#8377; 449</b> <del><i>1999</i></del></p>
            </div>

        </div>

    </div>
    );
}

function Fotter(){
    return(
        <div class="fotter">

        <div class="footer1">

            <div class="fotter1--topic">
                <p>Udemy Business</p>
                <p>Teach on Udemy </p>
                <p>Get the app</p>
                <p>About us</p>
                <p>Contact us</p>

            </div>
            <div class="fotter2--topic">
                <p>Careers</p>
                <p>Blog</p>
                <p>Help and Support</p>
                <p>Affiliate</p>
                <p>Investors</p>
            </div>
        </div>
        <div class="fotter2">
            <h1>Udemy</h1>
            <p>&copy; 2023udemy,Inc</p>

        </div>
    </div>
    )
}
root.render(
    <div>
        <Navbar></Navbar>
        <Sone></Sone>
        <Stwo></Stwo>
        <Sthree></Sthree>
        <Sfour></Sfour>
        <Sfive></Sfive>
        <Fotter></Fotter>
    </div>
);
