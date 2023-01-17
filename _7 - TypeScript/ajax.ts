class AjaxTs{
    // finalizado dos códigos ajax
    private READY_STATUS_CODE = 4;
    private isCompleted(req: XMLHttpRequest){
        return req.readyState === this.READY_STATUS_CODE;
    }

    public httpGet(url: string, callback: (status: number, response: string) => any): void {
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        }

        req.open('GET', url, true);
        req.send();
    }

}

function executar(){
    let ajax = new AjaxTs();
    ajax.httpGet('data.txt', (status: number, response: string) => {
        let divMain = <HTMLDivElement> document.getElementById('caixa1');
        divMain.innerHTML = response;
    
    });

}
