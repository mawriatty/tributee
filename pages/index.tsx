import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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



    
        <div className="center">
          <div className="first-pass"></div>
        </div>

        <div className="center">
          <div className="purple-background-2">
            <div className="background-white-2">
              <div className="grid-page-2">
                <div className="grid-div-2">
                  <div className="date-1"><p id="date-1"> March 25, 1914 Born in Cresco, Iowa</p></div>
                  <div className="text-1"><p id="text-1">Norman Borlaug was born to Henry Oliver<br/> (1889–1971) and Clara (Vaala) Borlaug <br/> (1888–1972) on his grandparents farm in Saude <br/> in 1914, the first of four children. His three sisters <br/> were Palma Lillian (Behrens; 1916–2004),<br/>  Charlotte (Culbert; b. 1919) and Helen (b. 1921).</p></div>
                </div>
                <div className="image1-page2"><Image src="/FOTO UNIVERSITY.png" alt="image 1 page 2" width={544.86} height={227} /></div>
                <div className="year-1"><p id="year-1">1914</p></div>
                <div className="year-2"><p id="year-2">1933</p></div>
                <div className="image2-page2"><Image src="/FOTO WITH THE FAMILY.png" alt="image 2 page 2" width={389.89} height={243} /></div>
                <div className="grid-div-3">
                <div className="date-2"><p id="date-2"> 1933 - Norman Bourlaug Admission to the Minnesota University</p></div>
                <div className="text-2"><p id="text-2">1933 - Norman Bourlaug leaves his familys farm to attend the University of Minnesota, thanks to a Depression era program known as the National Youth Administration</p></div>
                <div className="arrow-page-2-up"><a href="#navBar"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                <div className="arrow-page-2-down"><a href="#date-1-page-3"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="center">
          <div className="first-pass"></div>
        </div>

        <div className="center">
          <div className="purple-background-3">
            <div className="background-white-3">
              <div className="grid-page-3">
                <div className="grid-div-3">
                  <div className="date-1-page-3"><p id="date-1-page-3">  1935 Civilian Conservation Corps</p></div>
                  <div className="text-1-page-3"><p id="text-1-page-3">Stop school<br/>Norman Bourlaug has to stop school and<br/>save up more money. Works in the Civilian Conservation Corps, helping starving Americans.<br/>I saw how food changed them, he said. <br/>All of this left scars on me.<br/></p></div>
                </div>
                <div className="image1-page3"><Image src="/foto natonal forest service.png" alt="image 2 page 3" width={470} height={227} /></div>
                <div className="year-1-page-3"><p id="year-1-page-3">1935</p></div>
                <div className="year-2-page-3"><p id="year-2-page-3">1937</p></div>
                <div className="image2-page3"><Image src="/FOTO WORK IN THE FOREST.png" alt="image 1 page 3" width={401} height={243} /></div>
                <div className="grid-div-4">
                <div className="date-2-page-3"><p id="date-2-page-3">    1937  US Forestry Service</p></div>
                <div className="text-2-page-3"><p id="text-2-page-3">Norman Bourlaug finishes university and takes <br/>a job in the US Forestry Service</p></div>
                <div className="arrow-page-3-up"><a href="#date-2"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                <div className="arrow-page-3-down"><a href="#date-1-page-4"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className="center">
          <div className="first-pass"></div>
        </div>

        <div className="center">
          <div className="purple-background-4">
            <div className="background-white-4">
              <div className="grid-page-4">
                <div className="grid-div-5">
                  <div className="image1-page4"><Image src="/FOTO UNIVERSITY.png" alt="image 1 page 2" width={544.86} height={227} /></div>
                  <div className="year-1-page-4"><p id="year-1-page-4">1914</p></div>
                  <div className="date-1-page-4"><p id="date-1"> March 25, 1914 Born in Cresco, Iowa</p></div>
                  <div className="text-1-page-4"><p id="text-1">Norman Borlaug was born to Henry Oliver<br/>
                   (1889–1971) and Clara (Vaala) Borlaug <br/> (1888–1972) on his grandparents farm in Saude <br/> 
                   in 1914, the first of four children. His three sisters <br/> were Palma Lillian (Behrens; 1916–2004),<br/>
                   Charlotte (Culbert; b. 1919) and Helen (b. 1921).</p></div>
                  
                </div>
                
                
                <div className="year-2-page-4"><p id="year-2-page-4">1933</p></div>
                <div className="image2-page4"><Image src="/FOTO WITH THE FAMILY.png" alt="image 2 page 2" width={389.89} height={243} /></div>
                <div className="grid-div-6">
                <div className="date-2-page-4"><p id="date-2-page-4"> 1933 - Norman Bourlaug Admission to the Minnesota University</p></div>
                <div className="text-2-page-4"><p id="text-2-page-4">1933 - Norman Bourlaug leaves his familys farm to attend the University of Minnesota, thanks to a Depression era program known as the National Youth Administration</p></div>
                <div className="arrow-page-2-up"><a href="#navBar"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                <div className="arrow-page-2-down"><a href=" "><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>



    </div>
   
  )
}


export default Home




