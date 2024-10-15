const modalBtn = document.getElementById('modal');
const banner = document.getElementById('banner');
const closeBtn = document.getElementById('close');
 

function showModal () {
    banner.classList.add('banner--active');
}

function closeModal() {
    banner.classList.remove('banner--active');
}

modalBtn.addEventListener('click', function() {
    showModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
} )