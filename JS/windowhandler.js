function newwindow(appname, apptype){
    
    if (appname = "basic"){
        var body = document.getElementById("body");
        body.innerHTML = body.innerHTML + "<div id='window'>    <div class='windowheader' id=windowheader>    <img src='apps/Test app/AppIcon.png' width='16' height='16'>    <p>Test App</p>    <img class=minimize src='assets/icons/minimize.svg'>  <img id=maximize src='assets/icons/maximize.svg'>   <img onclick='exit()' id=closeapp src='assets/icons/exit.svg'>  </div><iframe src='apps/Test app/index.html' width='100%' height='100%'></iframe></div>";
        
    }
    else if(appname = "settings"){
        var body = document.getElementById("body");
        body.innerHTML = body.innerHTML + "";
    }
    else{
        var appdata = searchUserdataForApp(appname, apptype)

        if (apptype = "widget"){
            
        }
        else{
            
        }
    }
}

function usernamepicker(user){
    body.innerHTML = "<div style='border: 0; background: white; outline: 0; border-radius: 6px; filter: drop-shadow(2px 0 0 black); height: 400px; width: 400px;'>    <h2>Enter username</h2><form id='usernameform'><input type='text' id='usernameinput'><input type='submit'></form>" + body.innerHTML;
    document.getElementById('usernameform').addEventListener('submit'
    user['userData']['username'] = document.getElementById("")
    return user;
}