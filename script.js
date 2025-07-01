
let scream = document.getElementById('scream');
let screen = document.getElementById('screen');
let hasScreamed = false;

document.addEventListener('click', () => {
    if (!hasScreamed) {
        scream.play();
        let img = document.createElement('img');
        img.src = 'assets/face.png';
        img.style.position = 'fixed';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100vw';
        img.style.height = '100vh';
        img.style.zIndex = '9999';
        document.body.appendChild(img);
        hasScreamed = true;
    }
});
