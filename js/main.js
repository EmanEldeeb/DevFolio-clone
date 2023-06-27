const moveUp=document.querySelector('.move-up')

window.addEventListener('scroll',()=>{
  document.documentElement.scrollTop > 100 ? moveUp.classList.add('show-move-up') : moveUp.classList.remove('show-move-up') ;
})

moveUp.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})


const countSection=document.querySelector('.count')
const numbers=document.querySelectorAll('.count-num')
let started=false;
console.log(countSection,numbers)

window.addEventListener('scroll',()=>{
   if(window.scrollY +'100' >= countSection.offsetTop){  
        if(!started){
            numbers.forEach((num)=>startCount(num))
        }
        started=true
    }
})

function startCount(num){
    const goal=num.dataset.goal;
    const count=setInterval(()=>{     
        num.textContent++;
        if( num.textContent === goal){
            clearInterval(count)
        }
    }
        ,2500/goal)
}
const navToggler=document.querySelector('.toggler')
const navClose=document.querySelector('.close')
const linksList=document.querySelector('.links-content')
const mainMenuHolder=document.querySelector('.dropdown--menu-holder-main');
const subMenuHolder=document.querySelector('.dropdown--menu-holder-sub')
const mainMenu=document.querySelector('.dropdown--menu-main')
const subMenu=document.querySelector('.dropdown--menu-sub')

navToggler.addEventListener('click',()=>{
    linksList.classList.remove('hidding')
    linksList.classList.add('showing')
})
navClose.addEventListener('click',()=>{
    linksList.classList.add('hidding')
    linksList.classList.remove('showing')
})


mainMenuHolder.addEventListener('click',(event)=>{
    
    mainMenu.classList.toggle('display-mode');
}

   

)

subMenuHolder.addEventListener('click',(event)=>{
    event.stopPropagation()
    subMenu.classList.toggle('display-mode')
}

)