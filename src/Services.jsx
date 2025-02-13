import { NavBar } from "./FirstComponent"
function Services() {
    return (
        <>
        <br /><br /><br /><br />
            <div className="service-container">
                <h1>Services</h1>
                <div id="carouselExampleAutoplaying" class="carousel slide mt-4" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="my-services">
                                <img src="src\assets\webdesign.jpg" />
                                <div class="info">
                                    <h1> Web Design </h1>
                                    <p>Create Free Landing Pages That Make it Easy for People to Buy Your Products.
                                        Sign Up Now! Create Powerful Landing Pages That Make it Easy for People to Buy Your Products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="my-services">
                                <img src="src\assets\photograph.jpg" />
                                <div class="info">
                                    <h1> Photography</h1>
                                    <p>Photography is the process of recording an image – a photograph – on lightsensitive film or, in
                                        the case of digital photography, via a digital electronic or magnetic memory.
                                        The photograph is evident in nearly every aspect of modern life.</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="my-services">
                                <img src="src\assets\videoedit.jpg" />
                                <div class="info">
                                    <h1>Video Editing</h1>
                                    <p>Create amazing videos with Clipchamp's
                                        easy drag-and-drop video editor that has pro features and designer video templates.</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="my-services">
                                <img src="src\assets\copywrite.jpg" />
                                <div class="info">
                                    <h1> Copy Writing</h1>
                                    <p>Copywriting is the act or occupation of writing text for the purpose of advertising or other
                                        forms of marketing.
                                        The product, called copy or sales copy, is written content that aims to increase brand awareness
                                        and ultimately persuade a person or group to take a particular action.</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="my-services">
                                <img src="src\assets\codeing.png" />
                                <div class="info">
                                    <h1>Coding </h1>
                                    <p>What exactly coding means?
                                        Coding creates a set of instructions for computers to follow. These instructions determine what
                                        actions a computer can and cannot take.
                                        Coding allows programmers to build programs, such as websites and apps.</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="my-services">
                                <img src="src\assets\appdev.jfif" />
                                <div class="info">
                                    <h1>App Developing</h1>
                                    <p>Discover latest app development tools, platform updates, training,
                                        and documentation for developers across every Android device.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <NavBar/>
        </>
    )
}

export { Services }