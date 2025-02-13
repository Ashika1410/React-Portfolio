import { NavBar } from "./FirstComponent"
function Portfolio() {
    return (
        <>
        <br /><br /><br /><br />
            <div className="portfolio-container">
                <h1>PORTFOLIO</h1>
                <div className="grid-container">
                    <div class="item"><img src="src\assets\pj1.jfif" alt="Image 1" /></div>
                    <div class="item"><img src="src\assets\pj2.jfif" alt="Image 2" /></div>
                    <div class="item"><img src="src\assets\pj3.jpg" alt="Image 3" /></div>
                    <div class="item"><img src="src\assets\pj4.jpeg" alt="Image 4" /></div>
                    <div class="item"><img src="src\assets\pj5.jfif" alt="Image 5" /></div>
                    <div class="item"><img src="src\assets\pj6.jfif" alt="Image 6" /></div>
                    <div class="item"><img src="src\assets\pj7.jpg" alt="Image 7" /></div>
                    <div class="item"><img src="src\assets\pj8.jpg" alt="Image 8" /></div>
                    <div class="item"><img src="src\assets\pj9.jpg" alt="Image 9" /></div>
                    <div class="item"><img src="src\assets\pj10.jfif" alt="Image 10" /></div>
                    <div class="item"><img src="src\assets\pj11.jpg" alt="Image 11" /></div>
                    <div class="item"><img src="src\assets\pj12.jpg" alt="Image 12" /></div>
                </div>
            </div>
            <NavBar/>
        </>
    )
}

export { Portfolio }