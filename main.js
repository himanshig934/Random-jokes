


let jokebtn = document.getElementById('jokebtn'); 
let box = document.getElementById('box');
let p = document.createElement('p');

jokebtn.addEventListener('click', async() => {

try {

    let response = await fetch(`https://official-joke-api.appspot.com/random_joke`);
    let data = await response.json();
    
    p.innerText = `${data.setup} \n ${data.punchline}`;
    p.classList.add('text-black-400', 'px-2');
    box.append(p);

} catch (error) {
    box.innerText = 'Failed to load joke';
}

});
