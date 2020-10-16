document.addEventListener("DOMContentLoaded", function(){

    document.addEventListener('click', function (event) {

        if (!event.target.matches('.toggle')) return;
        event.preventDefault();
        var nav = document.getElementById("nav");
        
        nav.classList.toggle('visible');

    }, false);    
});  