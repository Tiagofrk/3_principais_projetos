document.querySelector('#btn').addEventListener('click', () => {
    let alturah, alturam;

    alturah = document.querySelector('#alth').value;
    alturam = document.querySelector('#altm').value;
    
    alturah = alturah.split(',');
    alturam = alturam.split(',');

    let maiorh = parseInt(alturah[0])
    let maiorm = parseInt(alturam[0]) 
    
    for(i = 0; i<alturah.length;i++){
        if (parseInt(alturah[i]) > maiorh) {
        maiorh = parseInt(alturah[i]);
        }
    }

    for(c = 0; c<alturam.length;c++){
        if (parseInt(alturam[c]) > maiorm){
        maiorm = parseInt(alturam[c]);
        }
    }

    if(maiorh > maiorm){
        document.write('A maior altura é do homem : ' , maiorh);
    }else {
        document.write('A maior altura é da mulher : ' , maiorm);
    }

});