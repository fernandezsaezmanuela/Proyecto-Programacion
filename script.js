const links = document.querySelectorAll (".link-menu");
links.forEach (link => {
    link.addEventListener("click", function(){
        links.forEach(l => l.classList.remove("activo"));
        this.classList.add("activo");
    });
});