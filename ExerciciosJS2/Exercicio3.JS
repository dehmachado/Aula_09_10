alert("Alerta: Questão 03");
var nomeAluno = ["José de Andrade", "Maria do Nascimento", "Zezé Legal"];
var nota01 = [5, 9, 3];
var nota02 = [7.8, 5.5, 4];
var pesoNota01 = 0.6;
var pesoNota02 = 0.4;

var nota01F = function(){
    for(var i = 0; i<3; i++){
        return nota01[i]*pesoNota01;
    }
};
var nota02F = function(){
    for(var i = 0; i<3; i++){
        return nota02[i]*pesoNota01;
    }
};
var notaF = function(){
    for(var i = 0; i<3; i++){
        return nota01[i]+nota02[i];
    }
};

