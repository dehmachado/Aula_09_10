alert("Alerta: Questão 04");
function regraAprovacao(notaFinal){
    if(notaFinal > 0 && notaFinal < 10.1){
        if(notaFinal < 4){
            return "Reprovado";
        }else if(notaFinal < 6){
            return "Recuperação";
        }else if(notaFinal < 7.1){
            return "Aula de Reforço";
        }else{
            return "Aprovado";
        }
    }else{
        console.log("Nota = Valor incoerente!");
        return "Erro!";
    }
}

function pesoNota(nota, peso){
    for(var i = 0; i<nota.length; i++){
        nota[i] = nota[i]*peso;
    }
    return nota;
}

function calcFinal(notas1, notas2){
    for(var i = 0; i<notas1.length; i++){
        notas1[i] = notas1[i]+notas2[i];
    }
    return notas1;
}

var nomeAluno = ["José de Andrade", "Maria do Nascimento", "Zezé Legal"];
var nota01 = [5, 9, 3];
var nota02 = [7.8, 5.5, 4];
var pesoNota01 = 0.6;
var pesoNota02 = 0.4;
var nota01F = pesoNota(nota01, pesoNota01);
var nota02F = pesoNota(nota02, pesoNota02);
var notaF = calcFinal(nota01F, nota02F);

var i = 0;
while(i < notaF.length){
    alert("Situação acadêmica do aluno: " + nomeAluno[i] + ", é: " + regraAprovacao(notaF[i]));
    i++;
}

console.log("Done!");