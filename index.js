let passWord = document.getElementById('pwd');
let cb = document.getElementById('checkBox');
let login_button = document.getElementById('loginBut');

cb.onclick = function(){
    if(cb.checked){
        passWord.type = 'type';
    }else{
        passWord.type = 'password';
    }
} 

