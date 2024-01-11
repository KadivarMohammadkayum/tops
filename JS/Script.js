function login(){

    let num = document.getElementById("number").value;
    let pas = document.getElementById("pwd").value;

    if ( num == "6353128509" && pas == "6353128509" )
    {
        alert('You are successfully logged in')
        // return true;
        window.location='welcome.html';

    }else {
        alert ('mobile number and password are incorect please try again')
        // return false;
        window.location='index.html';

    }
}

function lgt(){
    if(confirm("Are you confirm to logout") == true){
        window.location='index.html'
    }else{
        window.location='welcome.html'
    }
    console.log(hello);
}