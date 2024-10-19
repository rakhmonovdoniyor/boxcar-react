import styled from "styled-components";
import car1 from "../../assets/homepage/11 1.png";
import car2 from "../../assets/motor/22 1.png";
import car3 from "../../assets/homepage/camp (1).png";
import car4 from "../../assets/homepage/c a.png";
import im11 from "../../assets/homepage/image4.png";
import im12 from "../../assets/homepage/blog1.png";
import im13 from "../../assets/homepage/blog2.png";
import im14 from "../../assets/homepage/blog3.png";
import im21 from "../../assets/homepage/image.png";
import im22 from "../../assets/homepage/image4.png";
import im23 from "../../assets/homepage/image4.png";
import im24 from "../../assets/motor/caravan-7.jpg";
import cmpinfo from "../../assets/carousel/Rectangle 2.png";
import motorback from "../../assets/motor/caravan-2.png";
import reimg from "../../assets/motor/caravan-7.jpg";
import infocar1 from "../../assets/motor/carvan-2.webp";
import int1 from "../../assets/carousel/Rectangle 2.png";
import int2 from "../../assets/carousel/Rectangle 2.png";
import int3 from "../../assets/carousel/Rectangle 2.png";
import int4 from "../../assets/carousel/Rectangle 2.png";
import int5 from "../../assets/carousel/Rectangle 2.png";
import infoimg1 from "../../assets/carousel/Rectangle 2.png";
import camp1 from "../../assets/carousel/Rectangle 2.png";

import campback from "../../assets/carousel/Rectangle 2.png";

import img1 from "../../assets/homepage/image.png";
import img2 from "../../assets/homepage/image2.png";
import img3 from "../../assets/homepage/image3.png";
import img4 from "../../assets/homepage/image4.png";
import img5 from "../../assets/homepage/image4.png";
import img6 from "../../assets/homepage/image4.png" ;
import img7 from "../../assets/homepage/image4.png";
import img8 from "../../assets/homepage/image4.png";


export const Multih1 = styled.h1`
  font-size: 15px;
  font-weight: 300;
  text-align: center;
  color: ${(props) => (props.$white ? "#fff" : "black")};
`;
export const Img = styled.img.attrs((props) => ({
  alt: "no img",
  src: props.$car1
    ? car1
    : props.$car2
    ? car2
    : props.$car3
    ? car3
    : props.$car4
    ? car4
    : props.$im11
    ? im11
    : props.$im12
    ? im12
    : props.$im13
    ? im13
    : props.$im14
    ? im14
    : props.$im21
    ? im21
    : props.$im22
    ? im22
    : props.$im23
    ? im23
    : props.$im24
    ? im24
    : props.$reimg
    ? reimg
    : props.$cmpinfo
    ? cmpinfo
    : props.$infocar1
    ? infocar1
    : props.$int1
    ? int1
    : props.$int2
    ? int2
    : props.$int3
    ? int3
    : props.$int4
    ? int4
    : props.$int5
    ? int5
    : undefined,
}))`
  
  height: ${(props) =>
    props.$reimg ? "100px" : props.$cmpinfo ? "none" : "150px"};
  width: ${(props) =>
    props.$im11 ||
    props.$im12 ||
    props.$im13 ||
    props.$im14 ||
    props.$im21 ||
    props.$im22 ||
    props.$im23 ||
    props.$im24 ||
    props.$im19
      ? "100%"
      : "none"};
  @media screen and (max-width: 1200px) {
    width: ${(props) => (props.$cmpinfo ? "70%" : "none")};

  }
  @media screen and (max-width: 900px){
    width: ${(props) => (props.$cmpinfo ? "60%" : "none")};
  }
  @media screen and (max-width: 900px){
    width: ${(props) => (props.$cmpinfo ? "40%" : "none")};
  }
`;

export const ImgBgWrap = styled.div`
display: flex;
`



export const Parallelogram = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  width: 70%;
  height: 40px;
  background-color: #3498db;
  clip-path: polygon(10% 0%, 100% 0, 90% 100%, 0% 100%);
`;
export const MulticarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  /* padding: 0 100px; */
  
`;
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
 
  /* padding: 100px; */
  /* max-width: 1200px; */
  margin: 0 auto;
  
  @media (min-width: 900px) {
    grid-template-columns: ${(props) =>
      props.$sec
        ? "repeat(3, 1fr)"
        : "repeat(4, 1fr)"}; 
  }
  @media (max-width: 500px) {
    gap: 10px;
  }
  
`;

export const Sdiv = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
  
`;
export const Innerdivv = styled.div`
  flex: 1;
  /* border: 1px solid black; */
  h1{
    padding-top: 30px;
  }
`;
export const Innerdiv2 = styled.div`
  flex: 3;
  /* border: 1px solid black; */
`;
export const MotorDiv = styled.div`
  background-image: ${(props) =>
    props.$camp ? `url(${camp1})` : `url(${motorback})`};
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

  
// Videos

export const Videos1 = styled.div`
display: flex;
flex-direction: column;
`
export const Videos2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 50px;
`
export const Videos3 = styled.div`
display: grid;
grid-template-columns: repeat(4, 2fr);
gap: 20px;
`
export const Videos4 = styled.div`

`
export const Videos5 = styled.div`

`
export const Center4 = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
export const Carousel1 = styled.div`
/* padding: 0px 100px ; */
display: grid;
justify-content: center;
align-items: center; 
/* flex-direction: column; */
`
export const Cen5 =styled.div`
display: grid;
justify-content: center;
align-items: center;
@media screen and (min-width: 900px){
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 50px;
  /* border: 1px solid red; */
}
`