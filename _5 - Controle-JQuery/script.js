$(document).ready(
    function(){
        $('#cmd').click(
            function(){
                //filtrando com o jquery
                //$('#caixa').load('dados.txt #3');

                $('#caixa').load('dados.txt', function(responseTxt, statusTxt, xhr){
                    
                    
                    if (statusTxt == "success") 
                        alert('Aconteceu uma comunicação com sucesso.');
                    
                    if (statusTxt == "error")
                        alert('Aconteceu um erro na comunicação.' + xhr.status + ': ' + xhr.statusText);
                    


                });
            }
        )
    }
);