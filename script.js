function calculateLove(){

    let boy =
    document.getElementById("boy").value.trim();

    let girl =
    document.getElementById("girl").value.trim();

    if(boy === "" || girl === ""){
        alert("Please enter both names");
        return;
    }

    document.getElementById("loading").style.display="block";
    document.getElementById("result").innerHTML="";

    setTimeout(function(){

        let combined = (boy + girl).toLowerCase();

        let total = 0;

        for(let i=0;i<combined.length;i++){
            total += combined.charCodeAt(i);
        }

        let score = total % 101;

        let emoji = "";
        let message = "";

        if(score >= 90){
            emoji = "😍❤️🥰";
            message = "Soulmates";
        }
        else if(score >= 70){
            emoji = "💕😍";
            message = "Perfect Match";
        }
        else if(score >= 50){
            emoji = "😊❤️";
            message = "Good Connection";
        }
        else if(score >= 30){
            emoji = "🙂";
            message = "Can Become Better";
        }
        else{
            emoji = "💔😅";
            message = "Need More Understanding";
        }

        document.getElementById("loading").style.display="none";

        document.getElementById("result").innerHTML =
        `${emoji}<br>${score}%<br>${message}`;

    },3000);
}
