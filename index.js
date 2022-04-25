class detail {

    constructor(nome, passos) {
            this.nome = nome,
            this.passos = passos,
            this.velocidade=0
        }
        
        inicio(){
            console.log("\nEra uma vez... uma lebre e uma tartaruga.\nA lebre vivia caçoando da lerdeza da tartaruga.\n\nCerta vez, a tartaruga já muito cansada por ser alvo de gozações, desafiou a lebre para uma corrida.");
            console.log("A lebre muito segura de si, aceitou prontamente.");
            console.log("--Passos: "+this.velocidade+"--");
            console.log("Decidiram que, dali 100 passos, estaria a linha de chegada e quem a cruzasse primeiro seria o grande vencedor!")
        }
        
        andou(){
            console.log("\nNão perdendo tempo, a tartaruga pois-se a caminhar.")
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            console.log("E assim continuou.., com seus passinhos lentos, porém, firmes.")
            }
        
        pulou(){
            console.log("\nA lebre pois-se a pular e logo ultrapassou a adversária.");
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            console.log("Continuou pulando...")
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            console.log("E pulando...")
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            console.log("E vendo que ganharia fácil, na metade do caminho, parou e resolveu cochilar.")
            this.velocidade-=50;
            console.log("--Passos: "+this.velocidade+"--");
        }

        continuou(){
            console.log("\nE a persistente tartaruga continuava seu trajeto sem descansar...");
            this.velocidade+=this.passos*5;
            console.log("--Passos: "+this.velocidade+"--");
            console.log("Caminhou...")
            this.velocidade+=this.passos*8;
            console.log("--Passos: "+this.velocidade+"--");
            console.log("E caminhou...")
            this.velocidade+=this.passos*13;
            console.log("--Passos: "+this.velocidade+"--");
            console.log("Passou pela lebre, que estava cochilando, e seguiu seu looongo caminho.\nAndou bastaaante mesmo.. Até estar a dois passos da linha de chegada.")
            this.velocidade+=this.passos*19;
            console.log("--Passos: "+this.velocidade+"--");
        }

        retornou(){
            console.log("\nA lebre quando acordou, não viu a tartaruga e voltou a dar seus grandes saltos.");
            this.velocidade+=50;
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            this.velocidade+=this.passos;
            console.log("--Passos: "+this.velocidade+"--");
            console.log("Já na reta final, faltando apenas um salto para sua vitória, viu finalmente a sua adversária cruzando a linha de chegada, toda sorridente.")
        }
    
        fim(){
            console.log("\n\n\nMais vale um trabalho persistente, do que os dotes naturais mal aproveitados.");
            console.log("                      Devagar se vai ao longe.");
            console.log("\n\n                            FIM!                              ");
            console.log( "                          --------        ")
            console.log( "                        /  / _ |  |  _    ")
            console.log( "                       / _ | _ | _ ( ' >  ")
            console.log( '                         "       "                \n')
        }
}

module.exports = detail
