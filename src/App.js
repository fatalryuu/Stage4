import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";

function App() {

    // const buttons = document.querySelectorAll(".dropdown__button");
    // const divs = document.querySelectorAll(".dropdown__content");
    // const checkbox = document.querySelector('#burger');
    //
    // const resizeListener = () => {
    //     if (window.innerWidth >= 900) {
    //         if (checkbox.checked) {
    //             checkbox.checked = false;
    //             divs.forEach(div => div.style.display = 'none'); !!
    //         }
    //     }
    // }
    //
    // window.addEventListener('resize', resizeListener);
    //
    // checkbox.addEventListener('change', () => { !!
    //     if (!this.checked) {
    //         divs.forEach(div => div.style.display = 'none');
    //         buttons.forEach(button => button.classList.remove("up"));
    //     }
    // });
    //
    // if (window.innerWidth <= 900) {
    //     buttons.forEach((button, i) => button.addEventListener("click", () => {
    //         divs.forEach((div, j) => {
    //             if (i !== j) {
    //                 div.style.display = "none";
    //                 buttons[j].classList.remove("up");
    //             }
    //         });
    //
    //         const computedStyle = window.getComputedStyle(divs[i]);
    //         const displayValue = computedStyle.getPropertyValue("display");
    //
    //         if (displayValue === "none") {
    //             divs[i].style.display = "block";
    //             button.classList.add("up");
    //         } else {
    //             divs[i].style.display = "none";
    //             button.classList.remove("up");
    //         }
    //     }));
    // }
    //

    return (
        <div className="app">
            <Header />
            <Projects />
        </div>
    );
}

export default App;
