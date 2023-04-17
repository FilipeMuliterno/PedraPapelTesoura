var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "papel"){
        if(inimigoOpt == "papel"){
            //Empate
            vencedor.innerHTML = "Resultado: " + "<span style='color:yellow'>O jogo foi empatado!</span>";
        }else if(inimigoOpt == "tesoura"){
            //Inimigo Ganhou
            vencedor.innerHTML = "Resultado: " + "<span style='color:red'>O Inimigo ganhou!</span>";
        }else if(inimigoOpt == "pedra"){
            //Player Ganhou
            vencedor.innerHTML = "Resultado: " + "<span style='color:green'>O player ganhou!</span>";
        }
    }

    if(playerOpt == "tesoura"){
        if(inimigoOpt == "tesoura"){
            //Empate
            vencedor.innerHTML = "Resultado: " + "<span style='color:yellow'>O jogo foi empatado!</span>";
        }else if(inimigoOpt == "pedra"){
            //Inimigo Ganhou
            vencedor.innerHTML = "Resultado: " + "<span style='color:red'>O Inimigo ganhou!</span>";
        }else if(inimigoOpt == "papel"){
            //Player Ganhou
            vencedor.innerHTML = "Resultado: " + "<span style='color:green'>O player ganhou!</span>";
        }
    }

    if(playerOpt == "pedra"){
        if(inimigoOpt == "pedra"){
            //Empate
            vencedor.innerHTML = "Resultado: " + "<span style='color:yellow'>O jogo foi empatado!</span>";
        }else if(inimigoOpt == "papel"){
            //Inimigo Ganhou
            vencedor.innerHTML = "Resultado: " + "<span style='color:red'>O Inimigo ganhou!</span>";
        }else if(inimigoOpt == "tesoura"){
            //Player Ganhou
            vencedor.innerHTML = "Resultado: " + "<span style='color:green'>O player ganhou!</span>";
        }
    }
}

function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
            enemyOptions[i].childNodes[0].style.opacity = 0.3; 
    }   
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3); //floor faz arredondar o numero, gera um numero aleatorio entre 0 e 1, mas como é *3 genra de 0 a 2
    
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacityPlayer()
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
        
    })
}