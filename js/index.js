document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggle').addEventListener('click', function() {
        const socialDiv = document.querySelector('.social');
        const authorDiv = document.querySelector(".author");
        const creditsContainer = document.querySelector(".credits");
        socialDiv.classList.toggle('hidden');
        authorDiv.classList.toggle('hidden');
    
    });
});

