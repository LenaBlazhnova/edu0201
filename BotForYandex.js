// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://crushdrummers.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
let sites = {
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":["Как звучит флейта","Валторна","Тромбон","Кларнет","Фагот","Гобой","Саксофон"],
    "crushdrummers.ru":["Барабанное шоу","Заказать шоу барабанщиков","Барабанное шоу в Москве"]
}
let site = Object.keys(sites)[Math.floor(Math.random()*Object.keys(sites).length)];
let keywords = sites[site];
let randomIndex = Math.floor(Math.random()*keywords.length);
let keyword = keywords[randomIndex];
let yandexInput = document.getElementById("text");
let btn = document.getElementsByClassName("mini-suggest__button")[0];
let links = document.links;
let found= document.getElementsByClassName("home-logo__default")[0];
if(found!=undefined){
    let i = 0;
    document.cookie = "site="+site;
    let timerId = setInterval(()=>{
        yandexInput.value += keyword[i++];
        if(i==keyword.length){
            clearInterval(timerId);
            btn.click();
        }
    },250);
}else if(location.hostname == "yandex.ru"){
    site = getCookie("site");
    let nextYandexPage = true;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.indexOf(site)!=-1){
            nextYandexPage = false;
            link.removeAttribute("target");
            link.click();
            break;
        }
    }
    setTimeout(()=>{
        let CurrentPageOfYandex = Number(document.querySelectorAll("[aria-label^='Текущая страница']")[0].innerText);
        if(nextYandexPage && CurrentPageOfYandex<10){
            document.querySelectorAll("[aria-label^='Следующая страница']")[0].click()
        }else{(CurrentPageOfYandex == 11)
              location.href = "https://yandex.ru/";
        }
    },1800);
}else{
    setInterval(()=>{
        if(Math.random()>=0.8) location.href = "https://yandex.ru/";
        let link = links[Math.floor(Math.random()*links.length)];
        if(link.href.indexOf(location.hostname)!=-1){
           link.click();}
        },3200);
}
