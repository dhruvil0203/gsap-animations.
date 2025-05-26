import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  // useGSAP(
  //   () => {
  //     gsap.from(".box", {
  //       rotate: 360,
  //       duration: 1,
  //       delay: 1,
  //       scale: 0,
  //     });
  //   },
  //   { scope: ".container" }
  // );
  // const [circle, setCircle] = useState(0);
  // const random = gsap.utils.random(-500, 500, 10);
  // useGSAP(() => {
  //   gsap.to(".circle", {
  //     x: circle,
  //     duration: 0.85,
  //   });
  // }, [circle]);
  // const random = gsap.utils.random(-500, 500, 100);
  // const randomX = gsap.utils.random(-360, 360, 30);
  // const randomY = gsap.utils.random(-300, 300, 30);
  // const [xValue, setXValue] = useState();
  // const [yValue, setYValue] = useState();
  // const [rotate, setRotate] = useState();
  // const imageref = useRef();
  // useGSAP(() => {
  //   gsap.to(imageref.current, {
  //     x: xValue,
  //     y: yValue,
  //     duration: 0.5,
  //     rotate: rotate,
  //   });
  // }, [xValue, rotate, yValue]);
  // return (
  //   <main>
  //     {/* <div className="container">
  //       <div className="circle"></div>
  //       <div className="box"></div>
  //     </div>
  //     <div className="kuch">
  //       <div className="circle"></div>
  //       <div className="box"></div>
  //     </div> */}
  //     <div className="circle"></div>
  //     {/* <button
  //       onClick={() => {
  //         setCircle(random);
  //         console.log(circle);
  //       }}
  //     >
  //       Animate
  //     </button> */}
  //     <div className="box" ref={imageref}>
  //       <img
  //         onClick={() => {
  //           setXValue(random);
  //           setYValue(randomY);
  //           setRotate(randomX);
  //         }}
  //         src="https://imgs.search.brave.com/s1LkmQCiGEKr2cy_lpAcGK3ScbWIw1P3YtZnuyLSeb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vV2gxdnBk/NlZQYkpORlFrMi1D/SDhWTmZDOUR1NUI1/VmZYZGtFOERVTm01/NC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlo/ZEd4aC9jeTFqYjI1/MFpXNTBMV05rL2Jp/NXdhWGhsYkhOeGRX/bGsvTG1OdmJTOXpk/RzlqYXkxcC9iV0Zu/WlhNdlpteDVMV2h2/L2RYTmxMWGt4ZGs5/NmJFTXQvTmpBd0xt/cHdadw"
  //         alt=""
  //         />
  //         </div>
  // </main>
  // );

  const boxref = useRef();
  const { contextSafe } = useGSAP();

  const rotatebox = contextSafe(() => {
    gsap.to(boxref.current, {
      rotate: 360,
      duration: 0.8,
    });
  });

  return (
    <main>
      <button onClick={rotatebox}>Animate</button>
      <div ref={boxref} className="box"></div>
    </main>
  );
};

export default App;
