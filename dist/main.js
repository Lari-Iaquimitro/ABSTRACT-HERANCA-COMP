"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotaFiscal_1 = require("./model/NotaFiscal");
const notaF1 = new NotaFiscal_1.NotaFiscal(`213578-952`);
notaF1.pessoaF.setNome(`José Mateus`);
notaF1.pessoaF.setCpf(`00000-00`);
console.log(`Nome:${notaF1.pessoaF.getNome()}`);
console.log(`CPF:${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n°:${notaF1.getNumeroNotaFiscal()}`);
const notaF2 = new NotaFiscal_1.NotaFiscal(`800667-908`);
notaF2.pessoaF.setNome(`Mateus José`);
notaF2.pessoaF.setCpf(`99999-99`);
console.log(`Nome:${notaF2.pessoaF.getNome()}`);
console.log(`CPF:${notaF2.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n°:${notaF2.getNumeroNotaFiscal()}`);
//# sourceMappingURL=main.js.map