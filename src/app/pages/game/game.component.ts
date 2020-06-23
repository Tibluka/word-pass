import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  actualPassword = "Senha"
  gamePhase = ""
  indexOf = 0
  teamATotalPoints = ""
  teamBTotalPoints = ""
  randomWord = ""
  player1TeamA = 0
  player2TeamA = 0
  round1Passwords = ["", "", "", "", "", "", "", "", "", ""]
  round2Passwords = ["", "", "", "", "", "", "", "", ""]
  round3Passwords = ["", "", "", "", "", "", "", ""]
  round4Passwords = ["", "", "", "", "", "", ""]
  round5Passwords = ["", "", "", "", "", ""]
  finalRoundPasswords = ["", "", "", "", ""]
  startMessage = "Pronto para começar?"
  skipMove = 3


  gameOn = false
  gameOff = true

  isGameOn() {
    this.gameOn = !this.gameOn
    this.gameOff = !this.gameOff
    this.actualPassword = "Prepare-se!"
  }

  gameIsOn() {
    this.gamePhase = "Eliminatórias"
  }

  getPass() {

    this.round1Passwords = []
    for (let r1 = 0; r1 < 10; r1++) {
      this.randomWord = this.passwords[Math.floor(Math.random() * this.passwords.length)]
      this.round1Passwords.push(this.randomWord)
      this.actualPassword = this.randomWord
    }
    console.log(this.round1Passwords)
  }

  passIsRight() {
    if (this.indexOf < this.round1Passwords.length - 1) {
      this.indexOf++
    } else {
      this.indexOf = 0
    }
    this.actualPassword = this.round1Passwords[this.indexOf]
    if (this.player1TeamA <= 10 || this.player1TeamA >= 0) {
      this.player1TeamA += 1
    } else if (this.player2TeamA <= 10 || this.player1TeamA >= 0) {
      this.player2TeamA += 1
    } else {
      alert('Próxima rodada')
    }
  }

  passIsWrong() {
    if (this.indexOf < this.round1Passwords.length - 1) {
      this.indexOf++
    } else {
      this.indexOf = 0
    }
    this.actualPassword = this.round1Passwords[this.indexOf]
  }

  passwords = ["barraca", "errado", "horrível", "feira", "pera", "zero", "bravo",
    "grande", "prédio", "aviso", "gasolina", "risada", "alvo", "final", "polvo", "alho",
    "ilha", "talheres", "barriga", "erro", "irritado", "armário", "cobertor", "porta",
    "brinco", "gravata", "prego", "bisavô", "guloso", "roseira", "anel", "fralda",
    "pulga", "bilhete", "milho", "telhado", "burro", "ferrado", "jarra", "árvore",
    "colar", "ralador", "bruxa", "graveto", "primavera", "camisa", "Luísa", "sorriso",
    "balde", "funil", "sinal", "coelho", "olho", "toalha", "cachorro", "ferradura",
    "serra", "barba", "corda", "revólver", "bruxaria", "grilo", "refresco", "casulo",
    "música", "televisão", "barril", "futebol", "soldado", "colher", "orelha", "velha",
    "carro", "ferro", "serrote", "barbatana", "formiga", "sorvete", "cravo", "igreja",
    "trela", "cheirosa", "parafuso", "tesoura", "bolsa", "jornal", "solteiro", "espelho",
    "palha", "vermelho", "churrasco", "garra", "sorriso", "barco", "garfo", "tartaruga",
    "creme", "lágrima", "três", "coser", "pesado", "tesouro", "calças", "malmequer",
    "túnel", "habilidade", "hipopótamo", "homem", "corrida", "garrafa", "terremoto",
    "borboleta", "guardanapo", "torneira", "crocodilo", "livro", "trevo", "defesa",
    "raposa", "vaso", "berinjela", "jejum", "laranjeira", "habituado", "história",
    "hospital", "corrupto", "gorro", "torre", "calor", "harpa", "torta", "cruzado",
    "madrugada", "truque", "famoso", "resumo", "visita", "gorjeta", "jerico", "lojista",
    "hélice", "hobby", "hotel", "bateria", "geladeira", "periquito", "carteira",
    "margarida", "urso", "dragão", "pedra", "zebra", "biscoito", "esquadro", "mosquito",
    "hoje", "jiboia", "majestade", "hexágono", "hoje", "humano", "cadeira", "gorila",
    "picareta", "cartola", "martelo", "verdade", "assado", "passado", "pressa", "bosque",
    "esquilo", "musgo", "jeca", "jiló", "nojento", "hiato", "holofote", "humilde",
    "camarão", "jacaré", "pirata", "catorze", "partir", "verde", "assadura", "passagem",
    "sessenta", "castelo", "festa", "óculos", "jegue", "jipe", "sujeira", "auxiliar",
    "exército", "texto", "coleira", "lírio", "pirueta", "alegre", "estrela", "praia",
    "assobio", "pássaro", "sossegado", "desfile", "fósforo", "ostra", "jeito", "laje",
    "traje", "axila", "extintor", "xale", "coroa", "madeira", "tabuleiro", "braço",
    "fruta", "prato", "massa", "passeio", "sossego", "disco", "história", "pastor",
    "algema", "gema", "girassol", "caixa", "fax", "xampu", "faqueiro", "muro", "tubarão",
    "amanhã", "hortelã", "rã", "missa", "passo", "tosse", "escada", "isqueiro", "pianista",
    "colégio", "gêmeo", "mágico", "caixote", "lixo", "xará", "capacete", "cenoura",
    "cinema", "anã", "ímã", "rolimã", "nosso", "pêssego", "tossir", "escorrega", "lagosta",
    "rabisco", "frigideira", "general", "página", "durex", "máximo", "xarife", "cebola",
    "cereja", "circo", "avelã", "irmã", "romã", "osso", "pessoa", "vassoura", "escova",
    "lápis", "tênis", "gelado", "Gilberto", "relógio", "enxame", "peixe", "xerox", "cedo",
    "cesta", "cisme", "divã", "lã", "talismã", "aquele", "leque", "queijo", "espera",
    "máscara", "vestido", "gelatina", "ginásio", "tigela", "exame", "próximo", "xícara",
    "cego", "cidade", "hélice", "fã", "maçã", "tobogã", "aqui", "liquidificador", "queimado",
    "arroz", "feroz", "rapaz", "gelo", "girafa", "vegetal", "exemplo", "táxi", "xilofone",
    "ceia", "cigano", "Lúcia", "avião", "dragão", "mamão", "esquerda", "máquina", "quente",
    "avestruz", "juiz", "rapidez", "águia", "formigueiro", "guinada", "bombom", "jardim", "pudim",
    "cena", "cigarro", "piscina", "balão", "feijão", "melão", "esquilo", "piquenique", "quieto",
    "capuz", "luz", "timidez", "figueira", "guelra", "guitarra", "campo", "lâmpada", "sempre",
    "açucareiro", "caroço", "melaço", "botão", "fogão", "pavão", "esquimó", "porque", "quilo",
    "cartaz", "nariz", "veloz", "fogueira", "guerra", "guizo", "castanha", "golfinho", "passarinho",
    "açucena", "carroça", "moça", "camarão", "irmão", "pião", "jaqueta", "queda", "raquete",
    "cruz", "noz", "verniz", "foguetão", "guerreiro", "Miguel", "cegonha", "joaninha", "pinheiro",
    "balanço", "coração", "pedaço", "caminhão", "leão", "televisão", "aquário", "quadro", "quase",
    "dez", "paz", "vez", "foguete", "guiador", "Pessegueiro", "atleta", "cliente", "globo",
    "braço", "criança", "poço", "cidadão", "limão", "tubarão", "esquadro", "qualidade", "quociente",
    "feliz", "raiz", "xadrez", "avental", "elefante", "melancia", "blusa", "explodir", "pleno",
    "cabeça", "dança", "praça", "alface", "caracol", "mel", "oblíquo", "quarto", "ventríloquo",
    "bochecha", "chave", "chuveiro", "chiclete", "flauta", "pluma", "bombeiro", "impressora", "pombo",
    "caça", "doçura", "raça", "alfinete", "culpa", "mil", "bandeira", "engraçado", "morango",
    "borracha", "cheque", "concha", "clara", "flores", "plural", "galinha", "ninho", "banho",
    "caçador", "graça", "taça", "almoço", "dedal", "Olga", "brinco", "fantasma", "pimenta",
    "cachimbo", "chicote", "fechadura", "clarim", "glaciar", "teclado", "abelha", "folha", "palhaço",
    "carapaça", "laço", "trança", "almofada", "fácil", "palmeira", "cantar", "frango", "pintor",
    "cachorro", "chinelo", "flecha", "clarinete", "gladíolo", "triatlo", "agulha", "galho", "pilha",
    "alemã", "galã", "manhã", "altura", "filme", "papel", "caranguejo", "fundo", "seringa",
    "chaminé", "chinesa", "lanche", "beliche", "charco", "chuva", "aranha", "engenho", "minhoca",
    "cem", "limpeza", "tambor", "bicicleta", "clima", "inglesa", "cinto", "incêndio", "tanque",
    "chão", "chocolate", "machado", "desenho", "lenha", "rainha", "banheiro", "gafanhoto", "moinho",
    "compasso", "marfim", "tampa", "blefe", "clube", "planeta", "dentista", "laranja", "turbante",
    "chapéu", "chupeta", "mochila", "dinheiro", "linha", "unha", "atlas", "claro", "global",
    "computador", "nuvem", "tromba", "bloco", "deglutir", "planta", "domingo", "lindo", "volante",
    "biombo", "homem", "patim", "bloqueio", "duplo", "plasma", "coelho"]

  /*  public password = ""
 
    rules = {
     qualifying: {
       qtdWords: 10,
       time: 30,
       prize: null,
       words: []
     },
     round1: {
       qtdWords: 10,
       time: 90,
       prize: 10000,
       skip: 3,
       words: []
     },
     round2: {
       qtdWords: 9,
       time: 90,
       prize: 25000,
       skip: 3,
       words: []
     },
     round3: {
       qtdWords: 8,
       time: 90,
       prize: 25000,
       skip: 3,
       words: []
     },
     round4: {
       qtdWords: 7,
       time: 90,
       prize: 25000,
       skip: 3,
       words: []
     },
     round5: {
       qtdWords: 6,
       time: 90,
       prize: 25000,
       skip: 3,
       words: []
     },
     finalRound: {
       qtdWords: 5,
       time: 90,
       prize: 25000,
       skip: 3,
       words: []
     },
   }
    
  // Remover palavras 

 getWords(round) {
    for (let index = 0; index <= this.rules[round].qtdWords; index++) {
      const index = Math.random();
      this.rules[round].palavras.push(this.passwords[index]);
      this.passwords.splice(index, 1)
    }
  }
  
  showWord(index, round) {
    this.password = this.rules[round].palavras[index];
  }
  
 */

  constructor() {

  }

  skip() {

  }

  ngOnInit(): void {
    this.isGameOn()
  }

}
