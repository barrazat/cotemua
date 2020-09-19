const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});

function ErrorMessage(){
    var errorEmojis = ["⚠️", "🥺", "😟", "😞", "😣", "😖"];    
    var emojiSelected = Math.floor(Math.random()*errorEmojis.length);
    
    document.getElementById('emoji').innerHTML = errorEmojis[emojiSelected];
}

ErrorMessage();