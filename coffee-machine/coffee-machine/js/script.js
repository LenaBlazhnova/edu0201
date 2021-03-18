let money = document.getElementById("money");
let display = document.getElementById("display");
let bill_acc = document.getElementById("bill_acc");
let displayInfo = document.getElementById("displayInfo");
let displayBalance = document.getElementById("displayBalance");
let progressBar = document.getElementsByClassName("progress-bar")[0];
let change_box = document.getElementById("change_box");
let lock = document.getElementById("lock");
let coffeCup = document.getElementById("coffeCup");
disapear(coffeCup);

let progress = 0;
function getCoffee(coffeName,price){
  if(+money.value>=price){
    money.value = +money.value-price;
    displayBalance.innerText = money.value;
    let audio = new Audio("audio/coffee1.mp3");
    audio.play();
    let timerId = setInterval(()=>{
      lock.hidden = false;
      if(progress>110){
        clearInterval(timerId);
        progressBar.hidden = true;
        progressBar.style.width = 0+'%';
        displayInfo.innerHTML = `<i class="fas fa-mug-hot" style="color: #a68b49;"></i> Кофе ${coffeName} готов`;
        apear(coffeCup);
        progress = 0;
        lock.hidden = true;
        return;
      }
      else if(progress<40) displayInfo.innerHTML = `<i class="fas fa-hourglass-start" style="color:#a68f1efe"></i> Приготовление...`;
      else if(progress<80) displayInfo.innerHTML = `<i class="fas fa-hourglass-half" style="color:#a68f1efe"></i> Приготовление...`;
      else displayInfo.innerHTML = `<i class="fas fa-hourglass-end" style="color:#a68f1efe"></i> Приготовление...`;
      progressBar.hidden = false;
      progressBar.style.width = ++progress+'%';
    },70);
  }else{
     displayInfo.innerHTML = `<i class="far fa-frown"></i> Недостаточно средств`;
  }
}
function getChange(num){
  let change_box_h = change_box.getBoundingClientRect().height-60;
  let change_box_w = change_box.getBoundingClientRect().width-60;
  let change = 0;
  let top = Math.random()*change_box_h;
  let left = Math.random()*change_box_w;
  if(num>=10) change = 10;
  else if(num>=5) change = 5;
  else if(num>=2) change = 2;
  else if(num>=1) change = 1;
  else{
    let audio = new Audio("audio/getChange.mp3");
    audio.play();
  }
  
  if(change>0){
    let img = document.createElement('img');
    img.src = `img/${change}rub.png`;
    img.style.top = top+'px';
    img.style.left= left+'px';
    img.onclick = function(){this.hidden=true;}
    change_box.append(img);
    money.value=0
    displayBalance.innerText = 0;
    getChange(num-change);
  }
}
function disapear(object){
  object.hidden = true;
  
}
function apear(object){
  object.hidden = false;
}
let zIndex=1;
let bills = document.querySelectorAll("[src$='rub.jpg']"); 
for(let i=0; i<bills.length; i++){ 
  let bill = bills[i]; 
  bill.onmousedown = function(e){
    this.ondragstart = function(){return false;}
    this.style.position = 'absolute';
    this.style.zIndex = ++zIndex;
    this.style.transform = 'rotate(90deg)';
    moveAt(e);
    function moveAt(event){
      bill.style.top = (event.clientY-bill.offsetHeight/2)+'px';
      bill.style.left = (event.clientX-bill.offsetWidth/2)+'px';
    }
    document.addEventListener('mousemove',moveAt);
    this.onmouseup = function(){
      document.removeEventListener('mousemove',moveAt);
      let bill_acc_top = bill_acc.getBoundingClientRect().top; // Верх купюроприёмника
      let bill_acc_bottom = bill_acc.getBoundingClientRect().bottom - (bill_acc.getBoundingClientRect().height*2/3);
      let bill_acc_left = bill_acc.getBoundingClientRect().left;
      let bill_acc_right = bill_acc.getBoundingClientRect().right;
      let banknote_top = this.getBoundingClientRect().top; // Верх купюры
      let banknote_left = this.getBoundingClientRect().left;
      let banknote_right = this.getBoundingClientRect().right;
      if(bill_acc_top<banknote_top && bill_acc_bottom>banknote_top && bill_acc_left<banknote_left && bill_acc_right>banknote_right){
        money.value = (+money.value)+(+this.dataset.value);
        let audio = new Audio("audio/BillsInBills_Acc.mp3");
        audio.play();
        displayBalance.innerText = money.value;
        this.hidden = true;
        
      }
    }
  }
}