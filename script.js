let header = document.querySelector('header');
let secondNav = document.querySelector('.nav');

window.addEventListener('scroll',function(e){
    if(window.scrollY>300){
        header.classList.add('colored-nav');
        secondNav.classList.add('colored-nav');
        secondNav.style.height = 'fit-content';
    }else{
        header.classList.remove('colored-nav');
        secondNav.classList.remove('colored-nav');
        secondNav.style.height = 'fit-content';
    }
})

function showMenu(){
    secondNav.classList.toggle('hide');
}

window.onresize = function(){
    secondNav.classList.add('hide');
}
