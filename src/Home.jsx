import { NavBar } from "./FirstComponent"
function Home(){
    return(
        <>
        <br /><br /><br /><br />
        <div className="home-container">
                <h1>I am Ashika</h1>
                <img src="src\assets\cute.jpg" alt="Cute" />
                <h2>Computer Science and Engineering  Student</h2>
                <div className="content">
                    <h2>Annai Vailankanni College of Engineering</h2>
                    <img src="src\assets\linkedin.png" alt="LinkedIn" />
                    <img src="src\assets\instagram.png" alt="Instagram" />
                    <img src="src\assets\twitter.png" alt="Twitter" />
                    <img src="src\assets\whatsapp.png" alt="Whatsapp" />
                    <img src="src\assets\pinterest.png" alt="Printest" />
                    <h2>Contact Through</h2>
                    <p>I am an college girl and I was improving my skills and knowledge. </p>
                    <p>I am an energetic persion.</p>
                    <p>Now I was studying a front-end development course.</p>
                </div>
            </div>
            <NavBar/>
        </>
    )
}

export { Home }