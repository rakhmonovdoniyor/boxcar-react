import styled from "styled-components";
import rasm1 from "../../assets/home/image.png"

export const BigCon = styled.div`
display: flex;
flex-direction: column;
`
export const Container = styled.div`
display: flex;
z-index: 1;
background-image: url(${rasm1});

 
    /* position: absolute; */
    /* top: 50px; */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    height: 800px;
    /* width: 100vw; */
    background-position: 10% 88%;
    flex-direction: column;
    color: white;
`

export const WrapCon = styled.div`
display: flex;
justify-content: center;
width: 100%;
 
`
export const BoxCardiv = styled.div`
display: flex;
flex: 1;
justify-content: space-around;
 align-items: center;
gap: 100px;

`
export const Navbardiv = styled.div`
display: flex;
flex: 1;
justify-content: center;
align-items: center;
gap: 20px;

`
export const Inputsearch = styled.input`
 color: white;
/* leading-trim: both;
text-edge: cap; */
cursor: pointer;
/* 15/M */
font-family: "DM Sans";
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 26px; /* 173.333% */
background-color: transparent;
border: none;
`

export const AddListingbutton = styled.button`
display: inline-flex;
padding: 18px 26px;
justify-content: center;
align-items: center;
gap: 10px;
//text
color: var(--Color-Primary, #050B20);
/* leading-trim: both;
text-edge: cap; */
cursor: pointer;
/* 15/M */
font-family: "DM Sans";
font-size: 15px;
font-style: normal;
font-weight: 500;
/* line-height: 26px; 173.333% */
border-radius: 120px;
background: var(--White, #FFF);
`

export const Boxinputwrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
gap: 10px;
 
`
export const CenterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h1{
    color: var(--White, #FFF);
text-align: center;
leading-trim: both;
text-edge: cap;

/* 70/B */
font-family: "DM Sans";
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
 `

 export const Tabsdiv = styled.div`
 width: 900px;
height: 76px;
flex-shrink: 0;
border-radius: 120px;
background: #FFF;
display: flex;
align-items: center;
justify-content: center;
color: black;
gap: 150px;
 
 `
 export const TabElement = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: black;
 `
 
export const SearchBtn = styled.div`
display: inline-flex;
padding: 20px 30px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 120px;
background: var(--Color-Secondary, #405FF2);
color: var(--White, #FFF);
 
.SearchBtn:hover{
    background-color:white;
    cursor: pointer;
}
/* 15/M */ cursor: pointer;
font-family: "DM Sans";
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 26px; /* 173.333% */
 `
 export const GrayDiv= styled.div`
 display: inline-flex;
padding: 8px 30px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 60px;
background: rgba(255, 255, 255, 0.20);
color: var(--Color-White, #FFF);

/* 15/M */
font-family: "DM Sans";
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 186.667% */
 
 `
 export const GrayDivwrap = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 gap: 10px;
 :hover{
     background-color: rgb(200,200,200);
 }
 `


export const BodyCenter = styled.div`
border-radius: 80px 80px 0px 0px;
background: var(--Bg-1, #F9FBFC);
 
 /* height: 2000px; */
 /* width: 100%; */
padding: 50px;
 
display: flex;
z-index: 999999;
margin-top: -100px;
`
export const BodyTextWrap = styled.div`
 display: grid;
 
 
 
`
export const BodyText = styled.div`
 display: flex;
 
justify-content: center;
gap: 900px;
 align-items: center;
 color:black;
 h1{
    display: flex;
 }
`
 
export const CarLogoWrap = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
  /* &CarLogoWrap:hover{
 
 border: 1px solid var(--Color-Secondary, #405FF2);
  
  
   }
  */
`
export const CarsLogo = styled.div`
width: 210px;
height: 180px;
flex-shrink: 0;
 
 
 
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
 

/* sh-1 */
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
border-radius: 16px;
border: 1px solid var(--Border, #E1E1E1);
background: var(--White, #FFF);
h3{
color: var(--Color-Primary, #050B20);
text-align: center;
leading-trim: both;
text-edge: cap;

/* 18/M */
font-family: "DM Sans";
font-size: 18px;
font-style: normal;
font-weight: 500;
/* line-height: 32px; 177.778% */
}
`
 export const CaruselCon = styled.div`
 display: flex;
 padding: 50px 50px 50px 0px;
 gap: 50px;
 `