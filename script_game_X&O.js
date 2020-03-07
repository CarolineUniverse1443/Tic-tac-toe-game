var tictac = document.getElementById('ngame');
var game_field = document.getElementsByClassName('posit');
var s1=game_field[0], s2=game_field[1],s3=game_field[2],s4= game_field[3],s5=game_field[4],s6= game_field[5],s7=game_field[6],s8= game_field[7],s9=game_field[8];
var sett = document.getElementById('gear');
var i, k=0, choice=k;
           
function change_Set ()
{
    var evid = confirm("If you change the settings, the game will be lost. Continue?");
    if(evid)
    {
    var fstep = prompt("Is the first one a cross or a zero?");
    if (fstep == "zero")
    {
    k=1;
    }
    else if (fstep == "cross")
    {k=0;}
    choice = k;
    if(fstep)
    { 
        setTimeout(startGame, 1000);
        }
        return choice;
    }
                
}
            
sett.onclick = function()
{
    setTimeout(change_Set, 1000);
}
function startGame()
{

    /*var evid = confirm("Do you want to start a new game?");
    if (evid) {*/
        for(i=0;i<game_field.length;i++)
        {
           game_field[i].innerHTML = ""; 
        }
    //}
}

tictac.onclick = function ()
{
    
    setTimeout(startGame,300);
    //return choice;
    k=0;
}
            
/*
for(i=0;i<game_field.length;i++)
{
    game_field[i]. onclick = function()
  {
    if(game_field[i].innerHTML == "")
    {
     if(k==0)
     {
        game_field[i].innerHTML="<i>X</i>";
        k=1;
        
     }
     else {
    game_field[i].innerHTML="<b>○</b>";
     k=0;
     }
    }
    else
    {
        alert("This position is already occupied!");
    }
                
  }
}*/
            
s1.onclick = function()
{
    if(s1.innerHTML == "")
    {
     if(k==0)
     {
        s1.innerHTML="<i>X</i>";
        k=1;
        
     }
     else {
    s1.innerHTML="<b>⚪</b>";
     k=0;
     
     }
    }
    else
    {
        alert("This position is already occupied!");
    }
    
}
            
s2.onclick = function()
{
    if(s2.innerHTML == "")
    {
     if(k==0)
     {
        s2.innerHTML="<i>X</i>";
        k=1;
        
     }
     else {
    s2.innerHTML="<b>⚪</b>";
     k=0;
     
     }
    }
    else
    {
        alert("This position is already occupied!");
    }
}

s3.onclick = function()
{
    if(s3.innerHTML == "")
    {
     if(k==0)
     {
        s3.innerHTML="<i>X</i>";
        k=1;
        
     }
     else {
    s3.innerHTML="<b>⚪</b>";
     k=0;
     
     }
    }
    else
    {
        alert("This position is already occupied!");
    }
}
            
s4.onclick = function()
{
    if(s4.innerHTML == "")
    {
     if(k==0)
     {
        s4.innerHTML="<i>X</i>";
        k=1;
        
     }
     else {
    s4.innerHTML="<b>⚪</b>";
     k=0;
     
     }
    }
    else
    {
        alert("This position is already occupied!");
    }
}

s5.onclick = function()
{
    if(s5.innerHTML == "")
    {
     if(k==0)
     {
        s5.innerHTML="<i>X</i>";
        k=1;
        
     }
     else {
    s5.innerHTML="<b>⚪</b>";
     k=0;
     
     }
    }
    else
    {
        alert("This position is already occupied!");
    }
}
            
s6.onclick = function()
{
    if(s6.innerHTML == "")
    {
     if(k==0)
     {
        s6.innerHTML="<i>X</i>";
        k=1;
        
     }
     else {
    s6.innerHTML="<b>⚪</b>";
     k=0;
     
     }
    }
    else
    {
        alert("This position is already occupied!");
    }
}
            
s7.onclick = function()
{
    if(s7.innerHTML == "")
    {
     if(k==0)
     {
        s7.innerHTML="<i>X</i>";
        k=1;
        
     }
     else {
    s7.innerHTML="<b>⚪</b>";
     k=0;
     
     }
    }
    else
    {
        alert("This position is already occupied!");
    }
}
            
s8.onclick = function()
{
    if(s8.innerHTML == "")
    {
     if(k==0)
     {
        s8.innerHTML="<i>X</i>";
        k=1;
        
     }
     else {
    s8.innerHTML="<b>⚪</b>";
     k=0;
     
     }
    }
    else
    {
        alert("This position is already occupied!");
    }
}
            
s9.onclick = function()
{
    if(s9.innerHTML == "")
    {
     if(k==0)
     {
        s9.innerHTML="<i>X</i>";
        k=1;
        
     }
     else {
    s9.innerHTML="<b>⚪</b>";
     k=0;
     }
    }
    else
    {
        alert("This position is already occupied!");
    }
}