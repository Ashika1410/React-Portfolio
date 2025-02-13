import { NavBar } from "./FirstComponent"
function Skills() {
    return (
        <>
        <br /><br /><br /><br />
            <section className="skill-container">
            <h1> SKILLS </h1>
            <div class="my-skills">
                <h2> Every Day is a New Challenge </h2>
                <p> I have problem solving skills. <br/>I also solve mathemathical problems in a certain time period.
                    <br/>I can solve errors in codes and also find the errors. <br/>I only need certain time period to
                    find an problem and solve it. <br/>I also have the following skills also <br/> like Basic computer skills
                    courses cover the <br/>most common usages of a computer, including a <br/>majority or all of the following: understanding
                    <br/>the basic notions of computer manipulation;<br/>managing computer files, word processing, using <br/>
                    spreadsheets and databases; creating presentations; <br/>finding information and communicating.</p>
            </div>
            <div class="skills">
                    <label for="file">Website: 100%</label>
                    <progress id="file" value="100" max="100"> 100% </progress><br /><br />
                    <label for="file">Photography: 80%</label>
                    <progress id="file" value="80" max="100"> 80% </progress><br /><br />
                    <label for="file">Coding: 90%</label>
                    <progress id="file" value="90" max="100"> 90% </progress><br /><br />
                    <label for="file">CopyWriting: 60%</label>
                    <progress id="file" value="60" max="100"> 60% </progress><br /><br />
            </div>
        </section>
        <NavBar/>
        </>
    )
}

export { Skills }