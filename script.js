const header=document.querySelector('header')
const rakaImg=document.querySelector('.rakaimg')
window.addEventListener('scroll',scroll)
//function header
function scroll(){
    if(window.scrollY>header.offsetHeight+50){
        header.classList.add('bg-black')

        header.style.opacity='0.5'

        rakaImg.style.height='58px'

        rakaImg.style.width='100px'

        header.style.height='70px'
    }else{
        header.classList.remove('bg-black')

        rakaImg.style.height='104px'

        rakaImg.style.width='auto'
    }
}

//rondom background
const landingPage=document.querySelector('.landing-page')
const arrayImg=['1.jpg','2.jpg','3.jpg','100.jpg']
setInterval(()=>{
    //rondom number
    const rondomImage=Math.floor(Math.random()*arrayImg.length)

    landingPage.style.backgroundImage='url("imgs/'+arrayImg[rondomImage]+'")'
},3000)
//ul
// services
// let services=document.querySelector(".services")
// let boxs=document.querySelectorAll('.con')
// boxs.forEach((box)=>{
//     box.addEventListener('click',()=>{
//         services.style.transition='.3s'
//         services.style.backgroundColor='black'
//     }
//     )
// })
/////////////////////
// control location
const head1=document.querySelector('.head1')
const head2=document.querySelector('.head2')
const head3=document.querySelector('.head3')
const main1=document.querySelector('.main1')
const main2=document.querySelector('.main2')
const main3=document.querySelector('.main3')
head1.addEventListener('click',()=>{
    head1.style.backgroundColor='white'
    head2.style.backgroundColor='#747474'
    head3.style.backgroundColor='#747474'

    head1.style.color='#6b6b6b'
    head2.style.color='#fff'
    head3.style.color='#fff'

    main1.style.display='block'
    main2.style.display='none'
    main3.style.display='none'

    head1.style.borderTop='3px solid orange'
    head2.style.borderTop='none'
    head3.style.borderTop='none'
})
head2.addEventListener('click',()=>{
    head1.style.backgroundColor='#747474'
    head2.style.backgroundColor='white'
    head3.style.backgroundColor='#747474'

    head1.style.color='#fff'
    head2.style.color='#6b6b6b'
    head3.style.color='#fff'

    main1.style.display='none'
    main2.style.display='block'
    main3.style.display='none'

    head1.style.borderTop='none'
    head2.style.borderTop='3px solid orange'
    head3.style.borderTop='none'
})
head3.addEventListener('click',()=>{
    head1.style.backgroundColor='#747474'
    head2.style.backgroundColor='#747474'
    head3.style.backgroundColor='white'

    head1.style.color='#fff'
    head2.style.color='#fff'
    head3.style.color='#6b6b6b'

    main1.style.display='none'
    main2.style.display='none'
    main3.style.display='block'

    head1.style.borderTop='none'
    head2.style.borderTop='none'
    head3.style.borderTop='3px solid orange'
})

//from validation
let firstName=document.querySelector('.first')
let phone=document.querySelector('.phone')
let email=document.querySelector('.email')
let subject=document.querySelector('.subject')
let message=document.querySelector('.message')
let btnSubmit=document.querySelector(".sumbit")
function check(){
    if(firstName.value==='' || phone.value==='' || email.value==='' || subject.value==='' || message.value==''){
        alert('Error few data is missing')
    }else{
        alert('Thanks for you we will contact with you soon')
    }
}
btnSubmit.addEventListener('click',()=>{
    check()
})

