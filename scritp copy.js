let palavraChave = 'LATEX';
let palavraDigitada = ['a'];

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
}

function comparar() {
    for (let c = 0; c < palavraChave.length; c++) {
        for (let v = 0; v < palavraDigitada.length; v++) {

            if (palavraChave[c] === palavraDigitada[v] && c !== v) {
                document.getElementById(`ltr${c}`).style.backgroundColor = 'yellow';
                document.getElementById(`ltr${c}`).style.color = 'black';
                console.log(palavraChave[c], 'chave', palavraDigitada[v], 'digitada')
            }

          
            if (palavraChave[c] === palavraDigitada[v] && c === v) {
                document.getElementById(`ltr${c}`).style.backgroundColor = 'green';
                document.getElementById(`ltr${c}`).style.color = 'white';
            }

            
          
            
      
        }
    }

    }