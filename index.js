let bars = document.querySelectorAll('.bar');
let btn = document.querySelector('.hamburger-menu-container')
let navcon = document.querySelector('.nav-container2')
console.log(navcon)
let rots = ['translate(0,15px) rotate(45deg)','scale(0)','translate(0,-11px) rotate(-45deg)'];
let third = ['translate(0,14px) rotate(-45deg)','scale(0)','translate(0,-13px) rotate(45deg)']
let rev = ['translate(0,0px) rotate(0deg)','scale(1)','translate(0,0px) rotate(0deg)'];
let count = 0;
let isthree = (num)=>{
return num%3==0
}
let navbox = document.getElementById('nav-actual2')
let hamburger = () => {
    [...bars].map((el,i)=>{
        let id = +el.classList[1].slice(1)
        el.style = `transform:${rev[id-1]};transition: .3s ease;`
    })

}
//event listener - click
let clickFunc = (c) => {btn.addEventListener('click',(e)=>{
c++
console.log(c)
//no matter what c%2 determines weather the navigation menu appears or not.
if(c%2!=0){
    navcon.classList.remove('nav-container2')
    navcon.classList.add('active')
}
else{
    navcon.classList.add('nav-container2')
    navcon.classList.remove('active')

}
if(c%2!=0 && !isthree(c)){
    [...bars].map((el,i)=>{
        let id = +el.classList[1].slice(1)
        el.style = `transform:${rots[id-1]};transition: .3s ease;`
    })
}
else if(c%2!=0 && isthree(c)){
    [...bars].map((el,i)=>{
        let id = +el.classList[1].slice(1)
        el.style = `transform:${third[id-1]};transition: .3s ease;`
    })
}
else{
    hamburger()
}
})
}
clickFunc(count)
const targetElements = (element,element1,mouse) => {
    let left = element.getBoundingClientRect().x
    let right = left+element.getBoundingClientRect().width
    let top = element.getBoundingClientRect().y
    let bottom = top + element.getBoundingClientRect().height
    let pos = {x:mouse.pageX,y:mouse.pageY}

    let left1 = element1.getBoundingClientRect().x
    let right1 = (left1+element1.getBoundingClientRect().width)-50
    let top1 = element1.getBoundingClientRect().y
    let bottom1 = top1 + element1.getBoundingClientRect().height

    if((pos.y >= bottom1&&pos.y <= top) || pos.y >= bottom || (pos.x <= right1&&pos.x >= right)||pos.x<=240 && pos.x>=68){  
        console.log('outside')
        navcon.classList.add('nav-container2')
        navcon.classList.remove('active')
        clickFunc(count=0)
        hamburger()
        
    }
    else{
        console.log('inside')
    }
}
window.addEventListener('click',(e)=>{
    console.log(navbox.getBoundingClientRect().x)
    if(navcon.classList[0]=='active')
    {
    targetElements(navbox,btn,e)
    }
})

window.addEventListener('resize',(e)=>{
    if(e.target.innerWidth>850){
        navcon.classList.add('nav-container2')
        navcon.classList.remove('active')
        clickFunc(count=0)
        hamburger()
    }
})