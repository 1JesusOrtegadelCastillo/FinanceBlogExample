let money = document.getElementById('moneyParallax');

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    money.style.top = -value * 2 + 'px';
})