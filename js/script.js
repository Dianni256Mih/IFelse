let button = document.getElementById('button');
let fundo_azul = false;

function mudar_fundo(){
    if (fundo_azul == false){
        fundo_azul = true;
        document.body.style.background = '#7FFFD4';
        button.style.background = '#FF82AB';
        button.style.color = '#7FFFD4';
    }else{
        fundo_azul = false;
        document.body.style.background = '#FF82AB';
        button.style.background = '#7FFFD4';
        button.style.color = '#FF82AB';
    }
}