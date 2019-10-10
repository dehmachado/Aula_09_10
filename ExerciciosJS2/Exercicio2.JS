alert("Alerta: Questão 02");
var nomeAluno = "João da Silva";
var nota01 = 7;
var nota02 = 8.5;
var pesoNota01 = 0.6;
var pesoNota02 = 0.4;
var nota01F = nota01 * pesoNota01;
var nota02F = nota02 * pesoNota02;
var notaF = nota01F + nota02F;

alert("Nome: " + nomeAluno + ". Primeira Nota: " + nota01 + ". Segunda Nota: " + nota02);
alert("Nota Total: " + notaF.toFixed(2));