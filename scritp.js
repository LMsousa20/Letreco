let palavraChave = 'LATEX';
let palavraDigitada = ['a'];
let pontuacao = 0;

// for(let i=0; i<palavraChave.length; i++){
//     console.log(palavraChave[i])

// }

function testar() {
    palavraDigitada[0] = document.getElementById('ltr0').value.toUpperCase();
    palavraDigitada[1] = document.getElementById('ltr1').value.toUpperCase();
    palavraDigitada[2] = document.getElementById('ltr2').value.toUpperCase();
    palavraDigitada[3] = document.getElementById('ltr3').value.toUpperCase();
    palavraDigitada[4] = document.getElementById('ltr4').value.toUpperCase();


    console.log(palavraDigitada);

    comparar()
    console.log(`pontuacao`,pontuacao)
}

function comparar() {
    for(let i=0; i<palavraChave.length; i++){
        if(palavraChave[i] === palavraDigitada[i]){
            document.getElementById(`ltr${i}`).style.backgroundColor = 'green';
            document.getElementById(`ltr${i}`).style.color = 'white';
            pontuacao ++;

        }else{
            document.getElementById(`ltr${i}`).style.backgroundColor = 'red';
            document.getElementById(`ltr${i}`).style.color = 'white';
            for(let v=0; v<palavraDigitada.length; v++){
                if(palavraChave[v] === palavraDigitada[i]){
                    document.getElementById(`ltr${i}`).style.backgroundColor = 'yellow';
                    console.log(i,v)
                }
            }
        
        }

    }
    if(pontuacao === 5){
        document.getElementById('resultado').style.backgroundColor = 'green';
        document.getElementById('resultado').textContent = ' Ganhou';
     
       }else{
        document.getElementById('resultado').style.backgroundColor = 'RED';
        document.getElementById('resultado').innerHTML += `${palavraDigitada.join('')} está incorreta`;
     
       }
    }