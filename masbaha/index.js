const counter = document.querySelector('#counter')
const saveBtn = document.querySelector('#save-btn')
const resetBtn = document.querySelector('#reset-btn')

const yourCount = document.querySelector('#your-count')
const totalCount = document.querySelector('#total-count')


const countNum = document.querySelector('#count-num')


let count = 0;
function counting() {
    count += 1
    countNum.innerHTML = count;
}

function save() {
   totalCount.innerHTML = count 
    countNum.innerHTML = '0'
    
}

function reset() {
    count = 0
    countNum.innerHTML = '0'
    totalCount.innerHTML = "0"
}
