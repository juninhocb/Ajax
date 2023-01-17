function fnajax(url, funcao){
    let xhttp = new XMLHttpRequest; 
    //resposta
    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            funcao(xhttp);
        }
    };

    //enviar o pedido
    xhttp.open('GET', url, true);
    xhttp.send();


}

function cmd1 (resposne){
    document.getElementById('caixa1').innerHTML = resposne.responseText;
}

function cmd2(response){
    document.getElementById('caixa2').innerHTML = response.responseText;
}