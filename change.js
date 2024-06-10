const btn=document.querySelector("button");
console.log(btn);
btn.addEventListener('click',()=>{
    const roncol=`rgb(${random(255)} ${random(255)} ${random(255)})`
    document.body.style.backgroundColor=roncol;

},false)
function random(number)
{
    return Math.floor(Math.random()*(number+1));
}