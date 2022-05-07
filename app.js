function talk(){
    var know = {
        "Who are you" : "Hello, Elinson_Marinho.Dev here  👨‍💻😎!",
        "How are you" : "Great 😀!",
        "What can i do for you" : "Please give a follow me https://github.com/ElinsonMarinho 🤝",
        "ok" :"Thanks my friend 🔗💻",
        "Bye" : "Okay! we will meet soon...🖖"
    };
    var user = document.getElementById('userBox').value;
      document.getElementById('chatLog').innerHTML = user + "<br>";
      if (user in know) {
          document.getElementById('chatLog').innerHTML = know[user] +"<br>";
      }else{
          document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
        } 
}