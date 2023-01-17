"use strict";
var AjaxTs = (function () {
    function AjaxTs() {
        this.READY_STATUS_CODE = 4;
    }
    AjaxTs.prototype.isCompleted = function (req) {
        return req.readyState === this.READY_STATUS_CODE;
    };
    AjaxTs.prototype.httpGet = function (url, callback) {
        var _this = this;
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            var finished = _this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };
        req.open('GET', url, true);
        req.send();
    };
    return AjaxTs;
}());
function executar() {
    var ajax = new AjaxTs();
    ajax.httpGet('data.txt', function (status, response) {
        var divMain = document.getElementById('caixa1');
        divMain.innerHTML = response;
    });
}
//# sourceMappingURL=out.js.map