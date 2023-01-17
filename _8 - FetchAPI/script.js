$(document).ready(function(){

    $('#btn').click(()=> {
        fetchApi('juninhocb')
        document.getElementById('nickname').value='';
    });
});

function getAndSend(){
    let nick = document.getElementById('nickname');
    fetchApi(nick.value);
}

function fetchApi(user){
    let api = `https://api.github.com/users/${user}`;
    fetch(api)
        .then((promisse) => {
            return promisse.json();
        })
        .then((response) => {
            console.log(response);
            $('#followers').html("Seguidores: " + response['followers']);
            $('#login').html("Login: " + response['login']);
            $('#location').html("Localização: " + response['location']);
        })
        .catch( (error) => {
            console.error(error)
        });

}