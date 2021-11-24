import Image from "next/dist/client/image";
import { Page1 } from "./styled";

const PageOne = () => {
    return (
        <Page1>
            <div className="final-pg-1">
                <div className="center">
                    <div className="background-purple-1">
                        <div className="background-white-1">
                        <div className="grid-page-1">
                            <ul id="navBar">
                            <li id="tribute">TRIBUTE</li>
                            <a href= " " ><li id="about">ABOUT</li></a>
                            <a href= " " ><li id="info">Info</li></a>
                            </ul>
                            <div className="main-image"><Image src="/Main image.png" alt="main image" width={522.57} height={347} /></div>
                            <div className="content">
                            <div className="main-grid">
                            <div className="name"><p id="name">Dr. Norman Borlaug</p></div>
                            <div className="quote"><p id="quote">The man who<br/> saved a billion lives</p></div>
                            <div className="years"><p id="years">1914 - 2009</p>
                            </div>
                            </div>
                            <p id="description">Dr. Norman Borlaug, third from the left, trains biologists in<br/> Mexico on how to increase wheat yields - part of his life-long<br/> war on hunger.</p>
                            <div className="first-arrow"><a href="#date-1"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page1>
    )
}

export default PageOne;