let header = document.querySelector('header');

window.addEventListener('scroll',function(e){
    if(window.scrollY>300){
        header.classList.add('colored-nav');
    }else{
        header.classList.remove('colored-nav');
    }
})

function showMenu(){
    
}