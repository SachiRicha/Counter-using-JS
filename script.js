'use strict';

let count = 0;

function updateCount(){
    document.querySelector(".count").textContent= `${count}`;
}

function increaseCount(){
    count++;
    updateCount();
}

function decreaseCount(){
    if(count>0){
        count--;
    } else {
        count =0;
    }
    
    updateCount();
}

