import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

interface rules {
  stage: number,
  qty: number,
  words: Array<any>
}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  public stage = 1
  private passwords = ["barraca", "errado", "horrível", "feira", "pera", "zero", "bravo",
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


  // RULES
  private indexWord = 0;
 /*
 ANTES
 public rules = {,
      qty: 10,
      words: []
  }
  */
  public rules:Array<rules> = [
    {
      stage: 1,
      qty: 10,
      words: []
    },
    {
      stage: 2,
      qty: 10,
      words: []
    },
    {
      stage: 3,
      qty: 5,
      words: []
    }
  ]

  public gameRule:rules;


  public block = false;
  public word = 'Pronto para começar?'

  constructor() {
  }

  ngOnInit(): void {
  }

  // FUNCTIONS

  getPass() {
    this.gameRule = this.rules.find(rule => rule.stage === this.stage)
    this.block = false;
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
    console.log(this.gameRule)
  }

  skip() {
    this.gameRule.words[this.indexWord].status = ''
    this.skipWord()
  }

  passIsRight() {
    this.gameRule.words[this.indexWord].status = 'done'
    this.skipWord()
  }

  private skipWord() {
    this.indexWord++;
    if (this.indexWord >= this.gameRule.qty) {
      this.indexWord = 0;
    }
    if (this.gameRule.words[this.indexWord].status !== '') {
      const index = this.gameRule.words.findIndex(word => word.status === '')
      if (index !== -1) {
        this.skipWord();
      } else {
        this.stage++
        this.block = true;
        this.word = `Iniciar fase ${this.stage}`;
      }
    } else {
      this.word = this.gameRule.words[this.indexWord].word
      console.log(this.gameRule)
    }
  }

  passIsWrong() {
  }

  public filho = {
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
    console.log('testeOne Nome da Mae',this.mae)
    console.log('testeOne Nome do filho',this.filho)
  }

  teste(lucas) {
    const prop = 'qty'
    console.log(this.gameRule[lucas])
    if(lucas === 'qty') {
      this.gameRule[prop]
      console.log(this.gameRule.qty)
    }
    if(lucas === 'stage') {
      console.log(this.gameRule.stage)
    }
    if(lucas === 'words') {
      console.log(this.gameRule.words)
    }

  }

}
