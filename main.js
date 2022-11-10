'use strict';

let currNumber = document.querySelector('#number');
const INCREASEBTN = document.querySelector('#increase');
const RESETBTN = document.querySelector('#reset');
const DECREASEBTN = document.querySelector('#decrease');
let number = 0;

function incNum(){
    number += 1;
    currNumber.textContent = number;
}

function decNum(){
    number -= 1;
    currNumber.textContent = number;
}

function resetNum(){
    number = 0;
    currNumber.textContent = number;
}

INCREASEBTN.addEventListener('click', () => {
    incNum();
});

RESETBTN.addEventListener('click', () => {
    resetNum();
});

DECREASEBTN.addEventListener('click', () => {
    decNum();
});