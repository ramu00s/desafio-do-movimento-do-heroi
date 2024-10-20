class hero{
    constructor(name,age,heroClass){
        this.name = name
        this.age = age
        this.heroClass = heroClass
    }
    heroIntroduction(){
        console.log(`Olá herói! Você se chama ${this.name}, possui a idade de ${this.age} anos e é um grande ${this.heroClass}.`)
    }
    action(){
        let attack;

        switch(this.heroClass){
            case "mago":
                attack = "magia";
                break;
            case "guerreiro":
                attack = "espada";
                break;
            case "monge":
                attack = "artes marciais";
                break;
            case "ninja":
                attack = "shuriken"
                break;
            default:
                attack = "ataque desconhecido"
        }
        console.log(`O ${this.heroClass} atacou usando ${attack}.`)
    }
}

let hero0 = new hero ("Sir Ramu","24","mago")
hero0.heroIntroduction()
hero0.action()

let hero1 = new hero ("Sir Vitu","26","guerreiro")
hero1.heroIntroduction()
hero1.action()

let hero2 = new hero ("Sir Jhon","23","monge")
hero2.heroIntroduction()
hero2.action()

let hero3 = new hero ("Sir Lucca","25","ninja")
hero3.heroIntroduction()
hero3.action()



