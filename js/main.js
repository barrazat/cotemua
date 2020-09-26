const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});

const parallax  = document.getElementById("parallax");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset *0.5 + "px";
})

function ErrorMessage(){
    var errorEmojis = ["⚠️", "🥺", "😟", "😞", "😣", "😖"];    
    var emojiSelected = Math.floor(Math.random()*errorEmojis.length);
    
    document.getElementById('emoji').innerHTML = errorEmojis[emojiSelected];
}

ErrorMessage();