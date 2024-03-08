let string ="";
let buttons=document.querySelectorAll('.rows');
Array.from(buttons).forEach((button)=>{
  button.addEventListener("click",(evt)=>{
    if(evt.target.innerText== "="){
      string=eval(string);
      document.querySelector('input').value=string;
    }
    else if(evt.target.innerText== "C"){
      string="";
      document.querySelector('input').value=string;

    }
    else{
      string=string+evt.target.innerText;
      document.querySelector('input').value=string;
    }

  })
});