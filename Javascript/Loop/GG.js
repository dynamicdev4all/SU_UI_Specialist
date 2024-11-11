let cpu = Math.floor(Math.random() * 100);
let user;
let count =parseInt(0);
while(true){
    user = parseInt(prompt("Enter your guessed num :"));

    if(cpu == user){
        alert("Congrats..... You have selected a correct number");
        alert(`With number of attempts  :  ${count}`);
        break;
    }

    else if(cpu > user){
        count =parseInt(count + 1);
        alert("Enter a larger number");
        alert(`Number of attempts  :  ${count}`);
    }

    else if(cpu  <user){
        count =parseInt(count + 1);
        alert("Enter a smaller number");
        alert(`Number of attempts  :  ${count}`);
    }
}