"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaFiscal = void 0;
const PessoaJuridica_1 = require("./PessoaJuridica");
const PessoaFisica_1 = require("./PessoaFisica");
class NotaFiscal {
    constructor(_numeroNotaFiscal) {
        this.pessoaF = new PessoaFisica_1.PessoaFisica(``, ``);
        this.pessoaJ = new PessoaJuridica_1.PessoJuridica(``, ``);
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }
    setNumeroNotaFiscal(_numeroNotaFiscal) {
        this.numeroNotaFiscal = _numeroNotaFiscal;
    }
    getNumeroNotaFiscal() {
        return this.numeroNotaFiscal;
    }
}
exports.NotaFiscal = NotaFiscal;
//# sourceMappingURL=NotaFiscal.js.map