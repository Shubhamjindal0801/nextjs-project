"use client";

import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

function BackToTop() {
  const myBtnRef = useRef(null)

  useEffect(() => {
    const scrollFunction = () => {
      const myBtn = myBtnRef.current;
      if (myBtn) {
        if (
          document.body.scrollTop > 250 ||
          document.documentElement.scrollTop > 250
        ) {
          myBtn.style.display = 'flex';
        } else {
          myBtn.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', scrollFunction);

    return () => {
        window.removeEventListener('scroll', scrollFunction);
      };
    }, []);
  
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

//   window.onscroll = function () {
//     scrollFunction();
//   };
//   function scrollFunction() {
//     if (
//       document.body.scrollTop > 250 ||
//       document.documentElement.scrollTop > 250
//     ) {
//       myBtn.style.display = "flex";
//     } else {
//       myBtn.style.display = "none";
//     }
//   }
//   function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }
  return (
    <div ref={myBtnRef} className="top-btn" id="my-btn" onClick={() => topFunction()}>
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default BackToTop;
