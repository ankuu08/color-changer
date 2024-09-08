let btn=document.querySelectorAll(".btn");
console.log(btn);
let arr=Array.from(btn);
console.log(arr);
let bdy=document.querySelector("body");
console.log(bdy);
arr.forEach((val)=>{
  val.addEventListener("click",()=>{
    let col=val.getAttribute("id");
    console.log(col);
    bdy.style.backgroundColor=col;
  })
})