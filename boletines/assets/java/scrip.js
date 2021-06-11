let links = document.querySelectorAll(".close");

links.forEach(function(link) {


    link.addEventListener("click", function(ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');


        content.classlist.remove("animate__slideInDown");
        content.classlist.remove("animate__animated");


        content.classlist.add("animate__fadeOutUp");
        content.classlist.add("animate__animated");

        setTimeout(function() {
            window.history.go(-1);
        }, 600);
        setInterval
        return false;
    });

});