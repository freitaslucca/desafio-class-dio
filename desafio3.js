class hero{
    
    constructor(name, age, type, atack){
        this.name = name
        this.age = age
        this.type = type
        this. atack = atack
    }

    writeAtack(){
        if(this.type === "Mago"){
            this.atack = "magia"
        }else if(this.type === "Guerreiro"){
            this.atack = "espada"
        }else if(this.type === "Monge"){
            this.atack = "artes marciais"
        }else if(this.type === "Ninja"){
            this.atack = "shuriken"
        }else{
            this.atack = "chinelada"
        }
        console.log(`O ${this.type} atacou usando ${this.atack}`)

    }

    
}

let mago = new hero("Kevin", 32,"Mago")
let guerreiro = new hero("Lucca", 18,"Guerreiro")
let monge= new hero("Juan", 90,"Monge")
let ninja = new hero("Arthur", 19,"Ninja")


mago.writeAtack()
guerreiro.writeAtack()
monge.writeAtack()
ninja.writeAtack()