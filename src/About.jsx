import { NavBar } from "./FirstComponent"
function About() {
    return (
        <>
        <br /><br /><br /><br />
            <div className="about-container">
                <h1>ABOUT ME</h1>
                <p>I am an computer science and engineering student in Annai Vailankanni College Of Engineering. <br/>
                Now I am learning an development course in Rexknar creative solutions in Chunkankadai. <br/>
                My hobbies are listening to music and watching adventures movies. <br/></p>
                <dl>
                <dt> Name: </dt>
                <dd> Ashika.M </dd>
                <dt> E-mail: </dt>
                <dd> ashika04m@gmail.com </dd>
                <dt> Pnone No: </dt>
                <dd> +91 9677349149 </dd>
                <dt> Twitter: </dt>
                <dd> freelancer9 </dd>
            </dl>
            <button class="contact"> Contact <i class="fa-solid fa-right-long"></i> </button>
            <button class="download"> Download CV </button><br/><br/><br/>
            </div>
            <NavBar/>
        </>
    )
}

export { About }