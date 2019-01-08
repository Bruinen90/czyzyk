const elements = document.querySelectorAll('path');
let prevDelay = 0;
elements.forEach((element, index) => {
    element.style.strokeDasharray = element.getTotalLength()*1.05;
    element.style.strokeDashoffset = element.getTotalLength()*1.05;
    element.style.animationDuration = element.getTotalLength()*4 + 'ms';
    element.style.animationDelay =  prevDelay + 'ms';
    prevDelay += element.getTotalLength()*2.83;
})
