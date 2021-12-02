   // Declaring functions to variable to turn it to null later ;)))) ! but let won work
            var start = document.getElementById("playButton").addEventListener('click',()=>{
                console.log('play game!');
                document.getElementById("playButton").style.display = 'none';
                document.getElementById("start-game").style.display = 'block';
            });
            let tries = 10 ;
            var counter = document.getElementById('counter-var');
            counter.innerText=tries;
            let random_num = parseInt(Math.random() * 100); 
            let count = 1; // keep track  of tries
            
            function play() {
                console.log(tries);
                counter.innerText=tries -1 ;
                tries -=1 ;
                let response = document.getElementById('response');
                if(response.value == undefined) {response.innerText='cant be Empty or other than Number !';}
                let n = parseInt(document.getElementById('number').value);function add() 
                {let  stat =  ''; count +=1 ;(n < random_num)?(stat = 'To low'):stat = 'To high !';response.innerText=stat;  if (count == 10) {window.location='playAgain.html';}}if(!isNaN(n)){(n == random_num)? ((count == 3)?response.innerText="Wow you won only after 3 tries !":response.innerText="Congragilations You have won after : "+count+" Tries ! "):(n < random_num || n < random_num )?add():add() ;}else{let x ;}}
                console.log(random_num);