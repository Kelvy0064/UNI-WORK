document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('side-menu__open-btn').addEventListener('click', function() {
        document.getElementById('side-menu').classList.add('open');
    });
    document.getElementById('side-menu__close-btn').addEventListener('click', function() {
        document.getElementById('side-menu').classList.remove('open')
    })
});