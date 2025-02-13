import { NavBar } from "./FirstComponent"
function Contact() {
    return (
        <>
        <br /><br /><br /><br />
            <div className="contact-container">
                <h1>Contact Me</h1>
            <div className="lets-contact">
                <p><img src="src\assets\whatsapp.png" alt="one" />WhatsApp</p>
                <p><img src="src\assets\linkedin.png" alt="two" />LinkedIn</p>
                <p><img src="src\assets\instagram.png" alt="three" />Instagram</p>
                <p><img src="src\assets\facebook.png" alt="four" />FaceBook</p>
                <p><img src="src\assets\twitter.png" alt="five" />Twitter</p>
            </div>
                <div className="send-msg">
                <form action="send-msg">
                    <h4>Send Me a Message </h4>
                    <label for="name">NAME * </label>
                    <input type="text" placeholder="Name" class="input-bg"/><br /><br />
                    <label for="email">E-MAIL * </label>
                    <input type="email" placeholder="Email" class="input-bg"/><br /><br />
                    <label for="subject">SUBJECT * </label>
                    <input type="text" placeholder="Subject" class="input-bg"/><br /><br />
                    <label for="message">MESSAGE * </label>
                    <textarea name="message" cols="30" rows="5" placeholder="Message" class="input-bg"></textarea><br /><br />
                    <button>SEND A MESSAGE <i class="fa-solid fa-right-long"></i></button><br /><br />
                </form>
            </div>
                <p>Feel free to reach out to me via email at
                    <a href="mailto:your@email.com">ashika04m@gmail.com</a>.
                    You can also connect with me on
                    <a href="https://www.linkedin.com/in/yourname">LinkedIn</a>.</p>
            </div>
            <NavBar/>
        </>
    )
}

export { Contact }