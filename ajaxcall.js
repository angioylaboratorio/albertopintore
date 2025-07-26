function carica(elemento)
{
    let richiesta;
    richiesta=new XMLHttpRequest();
    richiesta.onreadystatechange=function()
    {
        document.getElementById("right").style.display="block";
        document.getElementById("right").innerHTML=richiesta.responseText;
    }
    richiesta.open("GET",elemento.innerHTML + ".html",true);
    richiesta.send();


}

function carica1(elemento)
{
    let richiesta;
    richiesta=new XMLHttpRequest();
    richiesta.onreadystatechange=function()
    {
        document.getElementById("body1").style.display="block";
        document.getElementById("body1").innerHTML=richiesta.responseText;
    }
    richiesta.open("GET",elemento.innerHTML + ".html",true);
    richiesta.send();


}