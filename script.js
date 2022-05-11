//evento adicionado para cada que que o click do mouse for solto
document.body.addEventListener('keyup', (event) => {
    //event.code identifica qual letra foi digitada
    playSound(event.code.toLowerCase());
})

//adiciona evento de click no botão "tocar" e cria a função
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    if(song !== ''){
        //cria uma array com cada letra que fui escrita no input, que fará com que seja possível identificar qual tecla foi apertada
        let songArray = song.split('');
        playComposition(songArray);
    }
})

function playSound(sound){
    //selecionar o arquivo de audio baseado na tecla digitada
    let audioElement = document.querySelector(`#s_${sound}`)
    //seleciona a tecla pressionada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    //caso queria fazer o som varias vezes seguidas, para fazer isso sem pausa no som:
    if(audioElement){
        //termina o som
        audioElement.currentTime = 0;
        //começa o som
        audioElement.play();
    }

    //adicionar efeito nas teclas ao digitar
    if(keyElement){
        keyElement.classList.add('active')
        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300)
    }
}

//tocar composição escrita no input
function playComposition(songArray){
    let wait = 0
    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)
        //irá tocar cada letra da composição a cada 0.250 segundos
        wait+=250;
    }
}