#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
 .usage("Usage: --move <move>")
 .option("move", { alias: "move", describe: "Your move", type: "string", demandOption: true })
 .argv;


class computerPlayer{
    constructor(){
        this.choice = ''
    }

    makeChoice(){
        let comChoice = Math.random()*3 //0-3
        comChoice = Math.ceil(comChoice)//round
        if(comChoice===1){
            this.choice = 'rock'

        }
        else if(comChoice ===2){
            this.choice = 'scissors'
        }
        else{
            this.choice = 'paper'
        }
        console.log(`Computer Plays ${this.choice}`)
    }//end of makeChoice

}//computerPlayer

class humanPlayer{
    constructor(){
        this.choice = ''
    }

    makeChoice(){
        this.choice = options.move
        console.log(`Human Plays ${this.choice}`)
    }//end of makeChoice


}//end human player

 class Game{
     constructor(){}

    getChoices(human, computer){
        //get player choices
        if(human.choice === computer.choice){
            return 'tie'

        }
        else if(human.choice === 'rock'){
            if(computer.choice === 'paper'){
                return 'Computer Wins!'
            }
            else if(computer.choice === 'scissors'){
                return 'Player Wins!'
            }
        }//end else if 1
        else if(human.choice === 'scissors'){
            if(computer.choice === 'rock'){
                return 'Computer Wins!'
            }
            else if(computer.choice === 'paper'){
                return 'Player Wins!'
            }
        }//endd else if 2
        else if(human.choice === 'paper'){
            if(computer.choice === 'scissors'){
                return 'Computer Wins!'
            }
            else if(computer.choice === 'rock'){
            return 'Player Wins'
            }
        }//end else if 3
    }




 }// end game class

 const game = new Game()
 const player = new humanPlayer()
 const computer = new computerPlayer()

player.makeChoice()
computer.makeChoice()

 console.log(game.getChoices(player,computer))