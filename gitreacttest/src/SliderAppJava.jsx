import React, { useState }  from "react";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./SliderAppJava.css";


function SliderAppJava() {
   const sliderImages = [ 
      {
         url: "./assets/slide1.jpg",
      },
      {
         url: "./assets/slide2.jpg",
      },
      {
         url: "./assets/slide3.jpg",
      },
      {
         url: "./assets/slide4.jpg",
      },      
   ];
   const [activeImageNum, setImageNr] = useState(0);
   const length = sliderImages.length;
   const nextSlide = () => {
      // setImageNr(if(activeImageNum === length - 1){
      //               0;}
      //             else{
      //                activeImageNum +1;
      //             }
         
      //    )
      setImageNr(activeImageNum === length - 1 ? 0 : activeImageNum + 1);         
   };
   const prevSlide = () => {
      setImageNr(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
   };
   if (sliderImages.length <= 0) {
      return null; //array vazio
   }
   return (
      <div>
         <h2 className="title">
            {" "}
            Criar o slider de raiz usando icons para os botões de avanço/recuo
         </h2>
         <section className = "image-slider">
            <div className = "arrow">
               {/* <ArrowBackIosIcon onClick = {prevSlide}></ArrowBackIosIcon> */}
               <button onClick = {prevSlide}>PREV</button> 
            </div>
            {sliderImages.map((currentImage, index) => {
               return (
                  <div>            
                     {index === activeImageNum && <img src={currentImage.url} alt="slide" className="image"></img>}
                  </div>
               );
            })}
            <div className="arrow"> 
               {/* <ArrowForwardIosIcon onClick = {nextSlide}></ArrowForwardIosIcon> */}
               <button onClick = {nextSlide}>NEXT</button> 
            </div>
            
         </section>
      </div>
   );
}
export default SliderAppJava;