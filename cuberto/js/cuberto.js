const container = document.querySelectorAll('.col-2-videos')

container.forEach(element => {
    element.addEventListener('mouseover', function(e) {
        element.play();
    });
});

container.forEach(element => {
    element.addEventListener('mouseout', function(e) {
        element.pause();
        element.currentTime=0;
    });
});

