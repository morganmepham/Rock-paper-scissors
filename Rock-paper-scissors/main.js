const playerChoiceDisp = document.getElementById('playerChoiceDisplay');
const computerChoiceDisp = document.getElementById('computerChoiceDisplay');
const result = document.getElementById('resultDisplay')
const playerImgToDisp = document.getElementById('playerImgToDisp')
const computerImgToDisp = document.getElementById('computerImgToDisp')



document.getElementById('rockButton').addEventListener('click', () => {
    playerImgToDisp.src = './images/rock.png'
    computerChoice()
    changeDisplay()
});
document.getElementById('paperButton').addEventListener('click', () => {
    playerImgToDisp.src = './images/paper.png'
    computerChoice()
    changeDisplay()
});
document.getElementById('scissorsButton').addEventListener('click', () => {
    playerImgToDisp.src = './images/scissors.png'
    computerChoice()
    changeDisplay()
});

function computerChoice(){
    const choices = ['paper', 'rock', 'scissors']
    const index = Math.floor(Math.random() * 3)
    computerImgToDisp.src = `./images/${choices[index]}.png`
};


function changeDisplay(){
    const computerChoice = computerImgToDisp
    console.log(playerImgToDisp.src)
    console.log(computerImgToDisp.src)

    if(playerImgToDisp.src === 'http://127.0.0.1:5500/images/rock.png' && computerImgToDisp.src === 'http://127.0.0.1:5500/images/rock.png'){
       result.innerHTML = 'Draw'
       console.log('m')
    }else if(playerImgToDisp.src === 'http://127.0.0.1:5500/images/paper.png' && computerImgToDisp.src === 'http://127.0.0.1:5500/images/paper.png'){
        result.innerHTML = 'Draw'
    }else if(playerImgToDisp.src === 'http://127.0.0.1:5500/images/scissors.png' && computerImgToDisp.src === 'http://127.0.0.1:5500/images/scissors.png'){
        result.innerHTML = 'Draw'
    }

    if(playerImgToDisp.src === 'http://127.0.0.1:5500/images/scissors.png' && computerImgToDisp.src === 'http://127.0.0.1:5500/images/paper.png'){
        result.innerHTML = 'You Win!'
     }else if(playerImgToDisp.src === 'http://127.0.0.1:5500/images/paper.png' && computerImgToDisp.src === 'http://127.0.0.1:5500/images/rock.png'){
         result.innerHTML = 'You Win!'
     }else if(playerImgToDisp.src === 'http://127.0.0.1:5500/images/rock.png' && computerImgToDisp.src === 'http://127.0.0.1:5500/images/scissors.png'){
         result.innerHTML = 'You Win!'
     }

     if(playerImgToDisp.src === 'http://127.0.0.1:5500/images/scissors.png' && computerImgToDisp.src === 'http://127.0.0.1:5500/images/rock.png'){
        result.innerHTML = 'Computer Wins!'
     }else if(playerImgToDisp.src === 'http://127.0.0.1:5500/images/paper.png' && computerImgToDisp.src === 'http://127.0.0.1:5500/images/scissors.png'){
         result.innerHTML = 'Computer Wins!'
     }else if(playerImgToDisp.src === 'http://127.0.0.1:5500/images/rock.png' && computerImgToDisp.src === 'http://127.0.0.1:5500/images/papers.png'){
         result.innerHTML = 'Computer Wins!'
     }
}