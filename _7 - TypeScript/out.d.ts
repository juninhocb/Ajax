declare class AjaxTs {
    private READY_STATUS_CODE;
    private isCompleted;
    httpGet(url: string, callback: (status: number, response: string) => any): void;
}
declare function executar(): void;
