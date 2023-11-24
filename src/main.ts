import { NotaFiscal } from "./model/NotaFiscal";

const notaF1 = new NotaFiscal(`213578-952`);
notaF1.pessoaF.setNome(`José Mateus`);
notaF1.pessoaF.setCpf(`00000-00`);
console.log(`Nome:${notaF1.pessoaF.getNome()}`);
console.log(`CPF:${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n°:${notaF1.getNumeroNotaFiscal()}`);

const notaF2v = new NotaFiscal(`800667-908`);
notaF2v.pessoaF.setNome(`Mateus José`);
notaF2v.pessoaF.setCpf(`99999-99`);
console.log(`Nome:${notaF2v.pessoaF.getNome()}`);
console.log(`CPF:${notaF2v.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n°:${notaF2v.getNumeroNotaFiscal()}`);