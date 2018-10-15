    var currentLetter = document.getElementById('currentLetter');
    var gamefield = document.getElementById('gamefield');
    var currentResDiv = document.getElementById('currentResDiv');
    var canUserGuessLetter = false;
    var letterToGuess;
    var userPoints = 0,
     pointsIncrementer = 10;
     var result = document.getElementById('result');
    var conn = new WebSocket('ws://localhost:8080');
    
    conn.onopen = function() {
        console.log('connection over websocket was established!');
    }

    conn.onmessage = function(e) { 
        currentLetter.innerHTML = e.data; 
        letterToGuess = e.data;
        canUserGuessLetter = true;
    }; 
                
    gamefield.addEventListener('keydown', function(event) {
        var input = String.fromCharCode(event.keyCode).toLocaleLowerCase();
        var isLetter = /^[a-z]$/i.test(input);

        if(canUserGuessLetter && isLetter){
           canUserGuessLetter = false;
           var span = document.createElement('span');
           span.innerHTML = input;
           if(input === letterToGuess) {
            span.classList.add("valid"); 
            result.innerHTML = userPoints;
           }else {
            span.classList.add("error"); 
            userPoints += pointsIncrementer;
           }
            currentResDiv.appendChild(span);    
        }else {
            event.preventDefault();
        }
    });

    

    document.getElementById('startBtn').addEventListener('click', function (event) {
        conn.send('hello');
    });
    
    
