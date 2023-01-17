function executar(){

    //objeto
    let xhttp = new XMLHttpRequest;

    //resposta
    xhttp.onreadystatechange = function(){

        if (xhttp.readyState == 4 && xhttp.status == 200){
           //tratamento dos dados
            let dados = xhttp.responseXML;
            let clientes = dados.getElementsByTagName('cliente');
            let conteudo = '<h2> Clientes </h2>';

            for (let i = 0; i < clientes.length; i ++){
                conteudo += '<p>Nome: ' + clientes[i].getElementsByTagName('nome')[0].childNodes[0].nodeValue + '</p>';
                conteudo += '<p>Email: ' + clientes[i].getElementsByTagName('email')[0].childNodes[0].nodeValue + '</p>';
            }
            
            document.getElementById('caixa1').innerHTML = conteudo;

        }
    };

    //pedido
    xhttp.open('GET', 'dados.xml', true); 
    xhttp.send();

}