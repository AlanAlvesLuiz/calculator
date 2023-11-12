class Personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        const mensagemAtaque = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagemAtaque);
        return mensagemAtaque;
    }
}
const personagemNinja = new Personagem('Kakashi', 30, 'ninja');
const personagemMago = new Personagem('Merlin', 100, 'mago');
const personagemGuerreiro = new Personagem('Arthur', 35, 'guerreiro');
const personagemMonge = new Personagem('Li', 40, 'monge');

personagemNinja.atacar();
personagemMago.atacar();
personagemGuerreiro.atacar();
personagemMonge.atacar();

