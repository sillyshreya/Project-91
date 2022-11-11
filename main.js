
function adduser() {
    player1_name=document.getElementById("player1").value ;
    player2_name=document.getElementById("player2").value ;
    localStorage.setItem("player1",player1_name);
    localStorage.setItem("player2",player2_name);
window.location.replace("quiz_index.html");
}
player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;


function send() {
    number1 = document.getElementById("word").value;
    number2 = document.getElementById("digit").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h5>" + number1 + " X " + number2 + "</h5>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("digit").value = "";
    
}
   