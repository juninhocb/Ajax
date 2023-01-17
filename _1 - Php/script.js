window.onload = function (){
    document.getElementById('btn-change').addEventListener('click', btn_func);
}

function btn_func(){
    //document.getElementById('box').innerHTML = "Este é o texto alterado";

    //ajax

    //objeto
    let request_xhttp = new XMLHttpRequest();

    request_xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            document.getElementById('box').innerHTML = this.responseText;
            //document.getElementById('box').innerHTML = request_xhttp.responseText;
        } else {
            document.getElementById('box').innerHTML = "Tente novamente mais tarde.";
        }

    }

    //request_xhttp.open("GET", "dados.txt", true);
    request_xhttp.open("GET", "data.php?n=joao&a=ribeiro", true);
    request_xhttp.send();

}