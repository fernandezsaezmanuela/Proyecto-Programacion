let links = document.querySelectorAll(".link-menu");
links.forEach (function (link){
    link.addEventListener ("click",function(){
        links.forEach (function (l){
            l.classList.remove ("activo");
        });
        this.classList.add ("activo");
    });
});