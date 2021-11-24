import type { NextPage } from 'next'
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import PageOne from "../Components/Page1";
import PageTwo from "../Components/Page2";
import PageThree from "../Components/Page3";
import PageFour from "../Components/Page4";
import PageFive from "../Components/Page5";
import PageSix from "../Components/Page6";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
    </div>
   
  )
}


export default Home




