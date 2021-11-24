import styled from '@emotion/styled';
import Page1 from '../Page1/styled';

export const Page2 = styled.div`
.center {
    display: flex;
    justify-content: center;
  }

  .first-pass{
    width: 1442px;
    height: 145px;
    background: #E5E5E5;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
  }
  .purple-background-2{
  position: relative;
  width: 1442px;
  height: 1024px;
  
  background: #3A4A69;
  }
  
  .background-white-2{
    position: absolute;
    width: 1442px;
    height: 813px;
    top: 12%;
    bottom: 12%;
    background: #FFFFFF;
  }
  
  .grid-div-2{
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  
  #date-1{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  
  position: absolute;
  width: 350px;
  left: 183px;
  top: 100px;
  
  background: rgba(83, 106, 153, 0.49);
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  }
  
  #text-1{
  position: absolute;
  width: 400.89px;
  left: 185px;
  top: 180px;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  }
  
  
  .image1-page2{
  position: absolute;
  width: 544.86px;
  right: 135px;
  top: 115px;
  
  
  background: url('/public/imageName.png');
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
  }
  
  #year-1{
  position: absolute;
  width: 175px;
  height: 75px;
  left: 300px;
  top: 350px;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 75px;
  
  
  color: rgba(58, 84, 138, 0.87);
  
  }
  
  #year-2{
    position: absolute;
  width: 175px;
  height: 75px;
  left: 980px;
  top: 350px;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 75px;
  
  
  color: rgba(58, 84, 138, 0.87);
  }
  
  .image2-page2{
    position: absolute;
    width: 544.86px;
    left: 180px;
    top: 540px;
  
  background: url('/public/imageName.png');
  
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
  }
  
  #date-2{
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  
  position: absolute;
  width: 549.4px;
  right: 135.8px;
  top: 520px;
  background: rgba(83, 106, 153, 0.49);
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  }
  
  
  #text-2{
  position: absolute;
  width: 550.52px;
  right: 135.8px;
  top: 600px;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  
  color: #000000;
  
  }
  
  .arrow-page-2-up{
    position: absolute;
  width: 43.39px;
  height: 0px;
  left: 670px;
  top: 800px;
  transform: rotate(-180deg);
  }
  
  .arrow-page-2-down{
    position: absolute;
    width: 43.39px;
    height: 0px;
    left: 640px;
    top: 757px;
    }
  
`


export default Page2;