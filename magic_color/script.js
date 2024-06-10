const randomcolor=function()
{
    const hex="0123456789ABCDEF"
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalId;
const startChangeColor=function()
{
    if(!intervalId){
    intervalId= setInterval(changeBgColor,2000)
    }
    function changeBgColor(){
    document.body.style.backgroundColor=randomcolor();
}
}
const stopChangeColor=function()
{
     clearInterval(intervalId);
     intervalId=null;
}
document.querySelector("#start").addEventListener('click',startChangeColor);
document.querySelector("#stop").addEventListener('click',stopChangeColor);