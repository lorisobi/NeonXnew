
function initUser(){
   
    if (localStorage.getItem("user") === undefined || localStorage.getItem("user") === null){
        user = {'userData':{'username':'testuser','Theme':'System','SystemAccent':'Blue','TaskbarPosition':'Bottom','AutoHideTaskbar':'False','Wallpaper':'Base64 stuff ask firecube'},'taskbarPins':['app1','app2','app3'],'installedApps':[{'2048':{'Name':'2048','ShortName':'2048','Publisher':'https://play2048.co/','URL':'https://play2048.co/','accentColor':'#faf8ef;','widgetURL':'example.com'}}],'filesystem':{}}
        //var user = JSON.stringify(basicuser)
        user = usernamepicker(user);
        localStorage.setItem("user", user);
        alert("Item set");



    }
    else{
        var user = localStorage.getItem("user");
        alert("Reloaded");

        return user 
    }
    document.getElementById("jsonshower").innerHTML = JSON.stringify(user['userData']['username']);

    
    
}




function searchUserdataForApp(appname, apptype){
    
}

function updateWallpaper(Base64wallpaper){
    
}

function updateAccentColor(HEXaccentColor){

}

function updateTaskBar(pinnedTaskbarList){

}

function installApp(installedApp){
    
}

