import React from "react";
import "./style.css";
import Logo from "./img/logo.svg"
import Sticker from "./img/sticker.svg"
import Card1 from "./img/prof card 2.png"
import Card2 from "./img/prof card 3.png"
import Card3 from "./img/prof card 20.png"
import Card4 from "./img/prof card 6.png"
import Card5 from "./img/prof card 28.png"

function DivHeader() {
    <div class="div_header">
    <img class="logo" src={Logo} alt="logo" />
    <button class="button_enter">Войти</button>
    </div>
}

function DivTitle() {
    <div class="div_title">
    <div class="div_text">
        <p class="des">Онлайн-тренировки для занятий дома</p>
        <h1 class="title">
          Начните заниматься спортом <br />
          и улучшите качество жизни
        </h1>
      </div>
      <img class="sticker" src={Sticker} alt="sticker" />
      </div>
}

function DivMain() {
    <div class="div_main">
    <img class="sports_card" src={Card1} alt="yoga" />
    <img class="sports_card" src={Card2} alt="stretching" />
    <img class="sports_card" src={Card3} alt="dance fitness" />
    <img class="sports_card" src={Card4} alt="step aerobic" />
    <img class="sports_card" src={Card5} alt="bodyflex" />
    </div>
}

fucntion DivFooter() {
    <div class="div_footer">
    <button class="button_up">Наверх ↑</button>
    </div>
}