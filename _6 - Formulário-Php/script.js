// submeter o formulário

function SubmeterFormulario(id_formulario){


    let form = $('#'+id_formulario); //busca o formulário html, via jquery

    form.submit(
        function(e){

            e.preventDefault(); //impede que o formulário seja submetido pelo seu efeito normal

            //subsmissão do formulário AJAX
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
                success: function(resposta){
                    $('#info').html('Enviado com sucesso' + resposta);

                },
                error: function(){
                    alert('Ocorreu um erro');
                }
            });

            
    });


}