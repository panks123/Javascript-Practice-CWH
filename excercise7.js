console.log("excercise7")

let now= new Date()

console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

let hours=now.getHours()
let minutes=now.getMinutes()
let seconds=now.getSeconds()
let amPm='AM'
if(hours==0)
{
    hours=12
}
else if(hours>12)
{
    hours=12-(24-hours)
    amPM='PM'
}
else
{
    amPM='AM'
}
let clock=document.getElementById('clock')
setInterval(()=>{
    let now= new Date()

    let hours=now.getHours()
    let minutes=now.getMinutes()
    let seconds=now.getSeconds()
    let amPm='AM'
    if(hours<12)
    {
        amPm='AM'
    }
    else
    {
        amPm='PM'
    }
    if(hours==0)
    {
        hours=12
    }
    else if(hours>12)
    {
        hours=12-(24-hours)
    }
    if(hours<=9)
    {
        hours=`${0}${hours}`
    }
    if(minutes<=9)
    {
        minutes=`${0}${minutes}`
    }
    if(seconds<=9)
    {
        seconds=`${0}${seconds}`
    }
    clock.innerText=`${hours}:${minutes}:${seconds} ${amPm}`
},1000)
