let listaAmigos = [];
let listaNumeros= [];
let i = 0;
let j = 0;

function adicionar (){
    let amigo = document.getElementById('nome-amigo').value;
    if (amigo != ''){
        if (listaAmigos.includes(amigo)){
            alert('Esta pessoa já está incluida no sorteio!');
        } else {
            listaAmigos.push(amigo);
            document.getElementById('lista-amigos').innerHTML = listaAmigos;
        }
    } else{
        alert('Nenhum nome foi inserido!');
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    while (i < listaAmigos.length){
        let numeroAleatorio = parseInt(Math.random()*listaAmigos.length);
        if (listaNumeros.includes(numeroAleatorio)){
            numeroAleatorio = parseInt(Math.random()*listaAmigos.length);
            i--;
        } else{
            listaNumeros.push(numeroAleatorio);
        }
        i++;
    }

    if (listaAmigos.length > 1){
        while (j < listaAmigos.length - 1){
            document.getElementById('lista-sorteio').insertAdjacentHTML('beforeend',
            `<span>${listaAmigos[listaNumeros[j]]}</span> --> <span>${listaAmigos[listaNumeros[j+1]]}</span> <br>`);
            j++;
        }
    
        document.getElementById('lista-sorteio').insertAdjacentHTML('beforeend',
            `<span>${listaAmigos[listaNumeros[j]]}</span> --> <span>${listaAmigos[listaNumeros[0]]}</span>`);
    } else{
        alert('Não é possível fazer o sorteio com apenas uma pessoa!')
    }
}

function reiniciar(){
    listaAmigos = [];
    listaNumeros= [];
    i = 0;
    j = 0;
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}