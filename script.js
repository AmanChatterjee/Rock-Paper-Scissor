let a = document.querySelector("#r");
let b = document.querySelector("#p");
let c = document.querySelector("#s");
let h = document.querySelector("#d3");
let ys= document.querySelector("#ys");
let cs= document.querySelector("#cs");
let ds= document.querySelector("#ds");
let d1=0;
let c1=0;
let y1=0;


a.addEventListener("mouseover", () => {
  a.style.border = "2px solid black";
});
b.addEventListener("mouseover", () => {
    b.style.border = "2px solid black";
  });
  c.addEventListener("mouseover", () => {
    c.style.border = "2px solid black";
  });

  a.addEventListener("mouseout", () => {
    a.style.border = "none";
  });
  b.addEventListener("mouseout", () => {
      b.style.border = "none";
    });
    c.addEventListener("mouseout", () => {
      c.style.border = "none";
    });
 
    let arr=["r","p","s"];
    let d= 0;

    a.addEventListener("click",()=>{
        d= arr[Math.floor(Math.random()*arr.length)];
        if(d=="r"){
            h.innerHTML="Draw";
            d1++;
            ds.innerHTML=d1;
        }
        else if(d=="p"){
            h.innerHTML="You Lose";
            c1++;
            cs.innerHTML=c1;
        }
        else{
            h.innerHTML="You Win";
            y1++;
            ys.innerHTML=y1;
        }
    });

    b.addEventListener("click",()=>{
        d= arr[Math.floor(Math.random()*arr.length)];

        if(d=="p"){
            h.innerHTML="Draw";
            d1++;
            ds.innerHTML=d1;
        }
        else if(d=="s"){
            h.innerHTML="You Lose";
            c1++;
            cs.innerHTML=c1;
        }
        else{
            h.innerHTML="You Win";
            y1++;
            ys.innerHTML=y1;
        }
    });

    c.addEventListener("click",()=>{
        d= arr[Math.floor(Math.random()*arr.length)];

        if(d=="s"){
            h.innerHTML="Draw";
            d1++;
            ds.innerHTML=d1;
        }
        else if(d=="r"){
            h.innerHTML="You Lose";
            c1++;
            cs.innerHTML=c1;
        }
        else{
            h.innerHTML="You Win";
            y1++;
            ys.innerHTML=y1;
        }
    });
