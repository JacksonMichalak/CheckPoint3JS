function Aluno (nome, qtdDeFaltas, notas) {
    this.nome = nome;
    this.qtdDeFaltas = qtdDeFaltas;
    this.notas = notas;

    this.calculaMedia = function () {
        const soma = this.notas.reduce((acumulador, nota) => {
            return acumulador + nota;
        }, 0);
        const media = soma / this.notas.length;
        return media
    };

    this.faltas = function () {
        this.qtdDeFaltas += 1;
        return this.qtdDeFaltas;
    }

}

let aluno1 = new Aluno("Maicon", 1, [5, 8, 9, 10]);
let aluno2 = new Aluno("Aline", 3, [9, 4, 8, 8]);
let aluno3 = new Aluno("Giovani", 4, [7, 7, 6, 10]);
let aluno4 = new Aluno("João", 0, [1, 8, 10, 10]);
let aluno5 = new Aluno("Débora", 5, [5, 7, 5, 4]);

const listaDeEstudantes = [aluno1, aluno2, aluno3, aluno4, aluno5];

const curso = {
    nomeDoCurso: "Javascript - DH",
    notaDeAprovacao: 7,
    faltasMaximas: 4,
    listaDeEstudantes: listaDeEstudantes,
    adicionarAluno: function (nome, qtdDeFaltas, notas) {
        let aluno = new Aluno(nome, qtdDeFaltas, notas);
        this.listaDeEstudantes.push(aluno);
    },
    consultarAluno: function (nome) {
        const aluno = this.listaDeEstudantes.find((aluno) => {
            return aluno.nome === nome;
        });
        return aluno;
    },
    media: function (nome) {
        let aluno = this.consultarAluno(nome);
        let media = aluno.calculaMedia();
        let resultado = false; 
        if(media >= this.notaDeAprovacao && aluno.qtdDeFaltas < this.faltasMaximas){
            console.log(`O(A) Aluno(a) ${aluno.nome} foi Aprovado(a)!`);
            resultado = true;
        } else if(aluno.qtdDeFaltas === this.faltasMaximas && media > this.notaDeAprovacao * 1.1){
            resultado = true;
        } else {
            console.log(`O(A) ${aluno.nome} foi Reprovado(a).`);
        }
        return resultado;
    },
    aprovacao: function () {
        const aprovados = this.listaDeEstudantes.map((aluno) => {
            return this.media(aluno.nome);
        });
        return aprovados;
    }
}

console.log(curso.aprovacao());