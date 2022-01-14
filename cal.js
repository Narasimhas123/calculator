const screens=document.querySelector('.screen');
const btns=document.querySelectorAll('.btn');
const clears=document.querySelector('.clear');
const equals=document.querySelector('.equal');

for(let i=0; i<btns.length; i++){
    // btns[i].addEventListener('click', function (){
//     //     let number=btns[i].getAttribute('value');
//     //     screens.value+=number
//     })
btns[i].addEventListener('click', function(){
    let number=btns[i].getAttribute('value');
    screens.value +=number;
})
 }
 equals.addEventListener('click',function(){
     if(screens.value===''){
         alert('enter value')
     }else{
     let value=eval(screens.value);
     screens.value=value;
     }
 })
 clears.addEventListener('click', function(){
     screens.value='';
 })
