import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

interface rules {
  stage: number,
  qty: number,
  words: Array<any>,
  phase: string,
  skip: number,
  points: number,
  countDown: number
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  /*  
  
    teamA = {
      player1: "",
      player2: "",
      player1Points: 0,
      player2Points: 0,
      player1Chances: 0,
      player2Chances: 0,
    }
  
    startMessage = "Pronto para começar?"
    gameOn = false
    gameOff = true
    teamATotalPoints = ""
    teamBTotalPoints = ""
    player1TeamA = 0
    player2TeamA = 0
    round1Passwords = ["", "", "", "", "", "", "", "", "", ""]
    round2Passwords = ["", "", "", "", "", "", "", "", ""]
    round3Passwords = ["", "", "", "", "", "", "", ""]
    round4Passwords = ["", "", "", "", "", "", ""]
    round5Passwords = ["", "", "", "", "", ""]
    finalRoundPasswords = ["", "", "", "", ""]
  
    constructor() {
  
    }
  
    isGameOn() {
      this.gameOn = !this.gameOn
      this.gameOff = !this.gameOff
      this.actualPassword = "Prepare-se!"
    }
  
    gameIsOn() {
      this.gamePhase = "Eliminatórias"
    }
  
    start() {
  
    }
  
  
    getPass() {
      if (this.gameOn === false && this.isGameOn) {
        alert("Clique em 'Pronto para começar'!")
      } else {
        if (this.gamePhase === 'Eliminatórias') {
          this.round1Passwords = []
          for (let r1 = 0; r1 < 10; r1++) {
            this.randomWord = this.passwords[Math.floor(Math.random() * this.passwords.length)]
            this.round1Passwords.push(this.randomWord)
            this.actualPassword = this.randomWord
          }
        }
      }
    }
  
    passIsRight() {
      if (this.indexOf < this.round1Passwords.length - 1) {
        this.indexOf++
      } else {
        this.indexOf = 0
      }
      this.actualPassword = this.round1Passwords[this.indexOf]
      if(this.player1TeamA <= 10 || this.player1TeamA >= 0){
        this.player1TeamA += 1
      }else if(this.player2TeamA <= 10 || this.player1TeamA >= 0){
        this.player2TeamA += 1
      }else{
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
      if(this.player1TeamA <= 10 || this.player1TeamA >= 0){
        this.player1TeamA -= 1
      }else if(this.player2TeamA <= 10 || this.player1TeamA >= 0){
        this.player2TeamA -= 1
      }else{
        alert('Fim da rodada')
      }
    }
  
  
    skip() {
  
    }
  
  
    ngOnInit(): void {
      this.gameIsOn()
      console.log()
    }
  
  }
  */
  private indexWord = 0
  public stage = 1
  public gameRule: rules;
  public block = false;
  public word = 'Pronto para começar?'
  public teamPoints = 0
  public getWordBtn = false
  public timer = this.timerService.qualifyingTimer


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

  public rules: Array<rules> = [
    {
      stage: 1,
      qty: 10,
      words: [],
      phase: 'Eliminatória',
      skip: 0,
      points: 0,
      countDown: 3
    },
    {
      stage: 2,
      qty: 10,
      words: [],
      phase: 'Rodada 1',
      skip: 5,
      points: 0,
      countDown: 90
    },
    {
      stage: 3,
      qty: 9,
      words: [],
      phase: 'Rodada 2',
      skip: 4,
      points: 0,
      countDown: 90
    },
    {
      stage: 4,
      qty: 8,
      words: [],
      phase: 'Rodada 3',
      skip: 3,
      points: 0,
      countDown: 90
    }, {
      stage: 5,
      qty: 7,
      words: [],
      phase: 'Rodada 4',
      skip: 2,
      points: 0,
      countDown: 90
    },
    {
      stage: 6,
      qty: 6,
      words: [],
      phase: 'Rodada 5',
      skip: 1,
      points: 0,
      countDown: 90
    },
    {
      stage: 7,
      qty: 5,
      words: [],
      phase: 'Rodada final',
      skip: 0,
      points: 0,
      countDown: 90
    },
  ]

  constructor(private timerService: TimerService) {
  }

  ngOnInit(): void {
    //colocar o if do timer aqui
  }

  // FUNCTIONS

  getPass() {
    this.indexWord = 0
    this.gameRule = this.rules.find(rule => rule.stage === this.stage)
    this.timerService.setTimer(this.gameRule.countDown)
    if (this.gameRule.stage == 2) {
      this.teamPoints = 0
    }
    for (let index = 0; index < this.gameRule.qty; index++) {
      const i = Math.floor((Math.random() * this.passwords.length - 1));
      const word = {
        word: this.passwords[i],
        status: ''
      }
      this.gameRule.words.push(word)
      this.passwords.splice(i, 1)
    }
    this.word = this.gameRule.words[0].word
    this.getWordBtn = !this.getWordBtn

  }

  skip() {
    //mudar o status da palavra que foi pulada para depois que o array todo for percorrido, apresentar na tela novamente somente as palavras que estiverem com esse status.

    this.gameRule.words[this.indexWord].status = ''
    if (this.gameRule.phase !== 'Eliminatória') {
      this.gameRule.skip--
    }
    this.skipWord()
  }

  passIsRight() {

    this.gameRule.words[this.indexWord].status = 'done'
    this.gameRule.points++
    if ((this.gameRule.points == 5 && this.gameRule.stage !== 1 ||
      (this.timerService.gameTimer == 0 || this.timerService.qualifyingTimer == 0))) {
      this.finishPhase()
    } else {
      this.skipWord()
    }
  }

  passIsWrong() {

    this.gameRule.words[this.indexWord].status = 'wrong'
    this.gameRule.skip--
    this.skipWord()
  }

  private skipWord() {

    this.indexWord++;
    if (this.indexWord >= this.gameRule.qty) {
      this.indexWord = 0;
    }
    if (this.gameRule.words[this.indexWord].status !== '') {
      const index = this.gameRule.words.findIndex(word => word.status === '')
      console.log(this.gameRule.words)
      if (index !== -1) {
        this.skipWord()
      } else {
        this.finishPhase()
      }
    } else {
      this.word = this.gameRule.words[this.indexWord].word
      console.log(this.gameRule)
    }
  }

  timeIsUp() {
    if (this.timerService.qualifyingTimer === 0) {
      this.finishPhase()
    }
  }

  lucas(params){
    console.log('Acabou', params)
  }

  finishPhase() {
    this.stage++
    this.block = true
    this.word = `Fim da fase ${this.gameRule.phase}`
    this.getWordBtn = !this.getWordBtn
    this.teamPoints += this.gameRule.points
    this.gameRule.points = 0
    this.timerService.stopTimer()
  }
}


/*   public filho = {

    name: ''
  }
  public mae = {
    name: 'henrique'
  }

  nasceuFilho() {
    this.filho = this.mae;
    console.log('nasceuFilho Nome do Filho', this.filho)
    console.log('nasceuFilho Nome do mae', this.mae)
  }

  testeOne() {
    this.mae.name = 'lucas'
    console.log('testeOne Nome da Mae', this.mae)
    console.log('testeOne Nome do filho', this.filho)
  }

  teste(lucas) {
    const prop = 'qty'
    console.log(this.gameRule[lucas])
    if (lucas === 'qty') {
      this.gameRule[prop]
      console.log(this.gameRule.qty)
    }
    if (lucas === 'stage') {
      console.log(this.gameRule.stage)
    }
    if (lucas === 'words') {
      console.log(this.gameRule.words)
    }

  }

}

 */

