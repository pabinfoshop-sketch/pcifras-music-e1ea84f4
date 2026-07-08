export type MockSong = {
  id: string;
  title: string;
  artist: string;
  key: string;
  category: string;
  cifra: string;
};

export const mockSongs: MockSong[] = [
  {
    id: "1",
    title: "Evidências",
    artist: "Chitãozinho & Xororó",
    key: "G",
    category: "Sertanejo",
    cifra: `[Intro] G  D  Em  C

[G]Quando eu digo que [D]deixei de te amar
É por[Em]que eu te amo
Quando eu [C]digo que não quero mais você
É por[G]que eu te quero

[Em]Eu tenho medo de te [C]dar meu coração
E confes[G]sar que eu estou em tuas [D]mãos
Mas não po[Em]sso imaginar o que [C]será de mim
Se eu te [D]perder um [G]dia`,
  },
  {
    id: "2",
    title: "Como Zaqueu",
    artist: "Fernandinho",
    key: "D",
    category: "Gospel",
    cifra: `[Intro] D  A  Bm  G

[D]Como Zaqueu eu quero [A]subir
O mais [Bm]alto que eu puder
Só pra Te [G]ver, olhar pra Ti
E chamar a Tua a[D]tenção`,
  },
  {
    id: "3",
    title: "Garota de Ipanema",
    artist: "Tom Jobim",
    key: "F",
    category: "Bossa Nova",
    cifra: `[Intro] Fmaj7  G7

[Fmaj7]Olha que coisa mais linda
Mais cheia de [G7]graça
É ela menina que vem e que [Gm7]passa
Num doce ba[F#7]lanço a caminho do [Fmaj7]mar`,
  },
  {
    id: "4",
    title: "Nada Pra Mim",
    artist: "Léo Brandão",
    key: "E",
    category: "Gospel",
    cifra: `[E]Se eu tenho tudo e não tenho a [B]Ti
Não tenho [C#m]nada, nada pra [A]mim
[E]Se eu tenho a Ti e não tenho [B]mais
Já tenho [C#m]tudo, tudo demais[A]`,
  },
  {
    id: "5",
    title: "Chove",
    artist: "Anavitória",
    key: "C",
    category: "Pop",
    cifra: `[C]Chove lá fora, chove [G]dentro do peito
[Am]Chove memória, chove [F]nosso jeito
[C]De se querer sem [G]saber por quê
[Am]De se perder pra se [F]encontrar em você`,
  },
  {
    id: "6",
    title: "Sorte Que Cê Tem Sorte",
    artist: "Marília Mendonça",
    key: "A",
    category: "Sertanejo",
    cifra: `[A]Sorte que cê tem sorte
[E]De eu ter esse coração mole
[F#m]De perdoar tudo que cê [D]faz
[A]Sorte que cê tem sorte`,
  },
  // ===== Gospel =====
  { id: "7", title: "Lugar Secreto", artist: "Gabriela Rocha", key: "G", category: "Gospel", cifra: `[G]Debaixo das Tuas asas eu [D]vou\n[Em]Debaixo das Tuas asas eu [C]estou\n[G]Ali estarei segu[D]ro, no Teu amor eu con[C]fio` },
  { id: "8", title: "Ninguém Explica Deus", artist: "Preto no Branco", key: "D", category: "Gospel", cifra: `[D]Ninguém explica Deus\n[A]A palavra é insuficiente\n[Bm]Só o coração sente quem [G]é Ele` },
  { id: "9", title: "Deus Não Falhará", artist: "Coral Kemuel", key: "E", category: "Gospel", cifra: `[E]Deus não falhará\n[B]Ele não desistirá\n[C#m]Ele é fiel, Ele é [A]bom` },
  { id: "10", title: "Ainda Que a Figueira", artist: "Rosa de Saron", key: "Em", category: "Gospel", cifra: `[Em]Ainda que a figueira não [C]floresça\n[G]E não haja fruto na vi[D]deira\n[Em]Ainda assim eu me alegra[C]rei` },
  { id: "11", title: "Oceanos", artist: "Ana Nóbrega", key: "B", category: "Gospel", cifra: `[B]Tu me chamas sobre as [F#]águas\n[G#m]Onde os pés podem fa[E]lhar\n[B]E ali Te encontrarei` },
  { id: "12", title: "Deserto", artist: "Isaias Saad", key: "A", category: "Gospel", cifra: `[A]No deserto de Judá\n[E]Clamarei o Teu nome\n[F#m]Minha alma tem sede de [D]Ti` },
  { id: "13", title: "Reckless Love", artist: "Isaias Saad", key: "G", category: "Gospel", cifra: `[G]Antes de eu dizer uma [D]palavra\n[Em]Tu cantavas sobre [C]mim\n[G]Tu tens sido tão, tão [D]bom pra mim` },
  { id: "14", title: "Tua Graça Me Basta", artist: "Davi Sacer", key: "C", category: "Gospel", cifra: `[C]Tua graça me basta\n[G]Tua graça me basta\n[Am]Eu vivo dependente de [F]Ti` },
  { id: "15", title: "Deus é Deus", artist: "Delino Marçal", key: "D", category: "Gospel", cifra: `[D]Deus é Deus e nada é impossí[A]vel\n[Bm]Ele vai fazer o que promet[G]eu` },
  { id: "16", title: "Galileu", artist: "Fernandinho", key: "E", category: "Gospel", cifra: `[E]Deus está aqui neste [B]lugar\n[C#m]E o Espírito de Deus vai se mani[A]festar` },
  // ===== Sertanejo =====
  { id: "17", title: "Flor e o Beija-Flor", artist: "Henrique & Juliano", key: "G", category: "Sertanejo", cifra: `[G]Você é a flor, eu sou o beija-[D]flor\n[Em]Você é o mar, eu sou o pesca[C]dor` },
  { id: "18", title: "Propaganda", artist: "Jorge & Mateus", key: "D", category: "Sertanejo", cifra: `[D]Não é propaganda, é o que eu [A]sinto\n[Bm]Não é mentira, é verdade [G]viva` },
  { id: "19", title: "Largado às Traças", artist: "Zé Neto & Cristiano", key: "A", category: "Sertanejo", cifra: `[A]Largado às traças\n[E]No fundo do bar\n[F#m]Bebendo pra tentar te [D]esquecer` },
  { id: "20", title: "Notificação Preferida", artist: "Zé Neto & Cristiano", key: "C", category: "Sertanejo", cifra: `[C]Sua notificação preferida\n[G]Ainda sou eu\n[Am]E a saudade não me [F]deixa` },
  { id: "21", title: "Cheia de Manias", artist: "Jorge & Mateus", key: "E", category: "Sertanejo", cifra: `[E]Cheia de manias\n[B]Como todo mundo\n[C#m]Mas tem umas coisas que só [A]você tem` },
  { id: "22", title: "Ai Se Eu Te Pego", artist: "Michel Teló", key: "C", category: "Sertanejo", cifra: `[C]Nossa, nossa\n[G]Assim você me mata\n[F]Ai se eu te pego, ai ai se eu te [C]pego` },
  { id: "23", title: "Você Não Vale Nada", artist: "Calcinha Preta", key: "G", category: "Sertanejo", cifra: `[G]Você não vale nada, mas eu [D]gosto de você\n[Em]Tudo que eu queria, agora não [C]sei mais o que é` },
  { id: "24", title: "Duas Metades", artist: "Israel & Rodolffo", key: "D", category: "Sertanejo", cifra: `[D]Somos duas metades\n[A]Que se completam\n[Bm]Duas almas que se en[G]contram` },
  { id: "25", title: "Coração Cachorro", artist: "Ávine Vinny", key: "A", category: "Sertanejo", cifra: `[A]Coração cachorro\n[E]Não aprende\n[F#m]Volta sempre pra quem [D]machuca` },
  { id: "26", title: "Bloqueado", artist: "Gusttavo Lima", key: "E", category: "Sertanejo", cifra: `[E]Bloqueado\n[B]No WhatsApp e no Insta\n[C#m]Mas no coração ainda [A]não deu` },
  // ===== Pop Nacional =====
  { id: "27", title: "Envolver", artist: "Anitta", key: "Am", category: "Pop", cifra: `[Am]Ela quer, quer, quer\n[F]Que eu envolva ela\n[C]Ela quer, quer que eu [G]envolva ela` },
  { id: "28", title: "Show das Poderosas", artist: "Anitta", key: "C", category: "Pop", cifra: `[C]Prepara que agora é a hora\n[G]Do show das poderosas\n[Am]Que descem, mas não [F]desce` },
  { id: "29", title: "Meteoro", artist: "Luan Santana", key: "G", category: "Pop", cifra: `[G]Meteoro da paixão\n[D]Deixa cair sobre mim\n[Em]Do universo pra você me [C]encontrar` },
  { id: "30", title: "Química do Amor", artist: "Luan Santana", key: "D", category: "Pop", cifra: `[D]Química do amor\n[A]Não tem explicação\n[Bm]É só sentir no cora[G]ção` },
  { id: "31", title: "Trem-Bala", artist: "Ana Vilela", key: "G", category: "Pop", cifra: `[G]Não é sobre ter\n[D]Todas as pessoas do seu lado\n[Em]É saber que na [C]correria` },
  { id: "32", title: "AmarElo", artist: "Emicida", key: "F", category: "Pop", cifra: `[F]Permita que eu fale, e não as [C]minhas cicatrizes\n[Dm]Elas são coadjuvantes, não, [Bb]melhor, figurantes` },
  { id: "33", title: "Pupila", artist: "Anavitória", key: "C", category: "Pop", cifra: `[C]Coração de estudante\n[G]Se apaixona por [Am]tudo\n[F]E se desapega de nada` },
  { id: "34", title: "Onda Diferente", artist: "Anitta", key: "Em", category: "Pop", cifra: `[Em]Onda diferente\n[C]Vibração da gente\n[G]Balança, movimenta [D]tudo` },
  // ===== Rock Nacional =====
  { id: "35", title: "Tempo Perdido", artist: "Legião Urbana", key: "D", category: "Rock", cifra: `[D]Todos os dias quando acordo\n[A]Não tenho mais o tempo que passou\n[G]Mas tenho muito tempo\nTemos todo o tempo do [D]mundo` },
  { id: "36", title: "Pais e Filhos", artist: "Legião Urbana", key: "G", category: "Rock", cifra: `[G]Estátuas e cofres e paredes pinta[D]das\n[Em]Ninguém sabe o que aconte[C]ceu\n[G]Ela se jogou da janela do quinto an[D]dar` },
  { id: "37", title: "Que País É Esse", artist: "Legião Urbana", key: "Em", category: "Rock", cifra: `[Em]Nas favelas, no senado\n[D]Sujeira pra todo lado\n[C]Ninguém respeita a Constitui[B7]ção` },
  { id: "38", title: "Ideologia", artist: "Cazuza", key: "Am", category: "Rock", cifra: `[Am]Meu partido\n[Dm]É um coração partido\n[E]E as ilusões estão todas [Am]perdidas` },
  { id: "39", title: "Malandragem", artist: "Cássia Eller", key: "C", category: "Rock", cifra: `[C]Quem sabe eu ainda sou uma [Am]menininha\n[F]Esperando o ônibus da esco[G]la, sozinha` },
  { id: "40", title: "Vida Loka", artist: "Barão Vermelho", key: "E", category: "Rock", cifra: `[E]Vida loka\n[B]Cheia de emoção\n[C#m]Sem pensar no [A]amanhã` },
  { id: "41", title: "Metal Contra as Nuvens", artist: "Legião Urbana", key: "D", category: "Rock", cifra: `[D]Não sou escravo de ninguém\n[A]Ninguém senhor do meu domínio\n[Bm]Sei o que devo defender` },
  { id: "42", title: "Bete Balanço", artist: "Barão Vermelho", key: "G", category: "Rock", cifra: `[G]Bete balanço, olha o balanço\n[D]Da Bete que dança\n[Em]Um rock and roll gostoso de [C]dançar` },
  { id: "43", title: "Exagerado", artist: "Cazuza", key: "A", category: "Rock", cifra: `[A]Amor da minha vida\n[E]Daqui até a eterni[F#m]dade\n[D]Nosso amor é pedra [E]dura` },
  // ===== MPB =====
  { id: "44", title: "Aquarela", artist: "Toquinho", key: "C", category: "MPB", cifra: `[C]Numa folha qualquer\n[G]Eu desenho um sol amarelo\n[Am]E com cinco ou seis retas\n[F]É fácil fazer um cas[C]telo` },
  { id: "45", title: "Aquele Abraço", artist: "Gilberto Gil", key: "G", category: "MPB", cifra: `[G]O Rio de Janeiro continua [D]lindo\n[Em]O Rio de Janeiro continua [C]sendo\n[G]Aquele abra[D]ço!` },
  { id: "46", title: "Sozinho", artist: "Caetano Veloso", key: "D", category: "MPB", cifra: `[D]Às vezes, no silêncio da [A]noite\n[Bm]Eu fico imaginando nós [G]dois\n[D]Eu fico ali, sonhando acor[A]dado` },
  { id: "47", title: "O Leãozinho", artist: "Caetano Veloso", key: "A", category: "MPB", cifra: `[A]Gosto muito de te ver, leão[E]zinho\n[F#m]Caminhando sob o [D]sol\n[A]Gosto muito de você, leão[E]zinho` },
  { id: "48", title: "Andar com Fé", artist: "Gilberto Gil", key: "E", category: "MPB", cifra: `[E]Andar com fé eu vou\n[A]Que a fé não costuma faiá\n[B]Andar com fé eu [E]vou` },
  { id: "49", title: "Trem das Onze", artist: "Adoniran Barbosa", key: "G", category: "MPB", cifra: `[G]Não posso ficar\n[D]Nem mais um minuto com você\n[G]Sinto muito amor, mas não pode [D]ser` },
  { id: "50", title: "O Que Será", artist: "Chico Buarque", key: "Dm", category: "MPB", cifra: `[Dm]O que será que será\n[Gm]Que andam suspirando pelas al[A]covas\n[Dm]Que andam sussurrando em versos e [Gm]trovas` },
  { id: "51", title: "Wave", artist: "Tom Jobim", key: "D", category: "MPB", cifra: `[D]Vou te contar, os olhos já não podem [F#m]ver\n[Bm]Coisas que só o coração pode enten[G]der` },
  { id: "52", title: "Como Nossos Pais", artist: "Elis Regina", key: "C", category: "MPB", cifra: `[C]Não quero lhe falar\n[G]Meu grande amor\n[Am]Das coisas que aprendi nos [F]discos` },
  { id: "53", title: "Palco", artist: "Gilberto Gil", key: "A", category: "MPB", cifra: `[A]No palco, no palco\n[E]Sou eu quem canto\n[F#m]Sou eu quem [D]danço` },
  { id: "54", title: "Alegria, Alegria", artist: "Caetano Veloso", key: "G", category: "MPB", cifra: `[G]Caminhando contra o vento\n[D]Sem lenço, sem documento\n[Em]No sol de quase de[C]zembro` },
  { id: "55", title: "Chega de Saudade", artist: "Tom Jobim", key: "Dm", category: "MPB", cifra: `[Dm]Vai minha tristeza\n[A7]E diz a ela que sem ela não pode [Dm]ser\n[Gm]Diz-lhe numa prece que ela [A7]regresse` },
  { id: "56", title: "Roda Viva", artist: "Chico Buarque", key: "Am", category: "MPB", cifra: `[Am]Tem dias que a gente se sente\n[Dm]Como quem partiu ou mor[E]reu\n[Am]A gente estancou de repente` },
];

export type MockRepertoire = {
  id: string;
  name: string;
  description: string;
  songIds: string[];
  createdAt: string;
};

export const mockRepertoires: MockRepertoire[] = [
  {
    id: "r1",
    name: "Culto Domingo",
    description: "Repertório para o culto de domingo à noite",
    songIds: ["2", "4"],
    createdAt: "2026-06-15",
  },
  {
    id: "r2",
    name: "Show Acústico",
    description: "Set list para apresentação acústica",
    songIds: ["1", "3", "5"],
    createdAt: "2026-06-20",
  },
  {
    id: "r3",
    name: "Favoritas",
    description: "Minhas músicas preferidas",
    songIds: ["1", "6"],
    createdAt: "2026-07-01",
  },
];
