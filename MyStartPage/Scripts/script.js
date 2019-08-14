/*Class*/
function StartPage() {

} /*End class StartPage*/

/*Metods*/
StartPage.prototype.saludo = function(name) {
  var x = document.getElementsByClassName("title");
  this.name = name;
  var time = new Date().getHours();
  if (time < 5) {
    x[0].innerHTML = ("Good Evening "+name);
  } else if (time >= 5 && time < 12) {
    x[0].innerHTML = ("Good Morning "+name);
  } else if (time >= 12 && time < 18) {
    x[0].innerHTML = ("Good Afternoon "+name);
  } else if (time >= 18 && time <= 24) {
    x[0].innerHTML = ("Good Evening "+name);
  }
}

StartPage.prototype.formatoFecha = function(){
  var dayNames = new Array("Sunday", "Monday", "Thursday", "Wednesday", "Thuesday", "Friday", "Saturday");
  var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var dayNumber = new Date().getDate();
  var dayIndex = new Date().getDay();
  var monthIndex = new Date().getMonth();
  var year = new Date().getFullYear();
  var time = dayNames[dayIndex] + ' ' + dayNumber + ' ' + monthNames[monthIndex] + ' ' + year;

  return (document.getElementById("date").innerHTML = time);
}

StartPage.prototype.formatoHora = function(){
  var hours = new Date().toLocaleString('en-US',{hour:'numeric',minute:'numeric',second:'numeric',hour12:true});

  return (document.getElementById("time").innerHTML = hours);
}

StartPage.prototype.formatoCelebracion = function(){
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var dayNumber =  new Date().getDate();
    var monthIndex =  new Date().getMonth();
    var monthName = monthArray[monthIndex];
    var msg=null;
    var i=0;
    var msg = myObj[monthArray[monthIndex]][dayNumber-1].celebration;

    return (document.getElementById("celebration").innerHTML = msg);
}

StartPage.prototype.searchYouTube = function (txtTap) {
  document.getElementById("searchYouTube").innerHTML = "Search for \""+txtTap+"\"";
  document.getElementById("youtubeSearch").href = "https://www.youtube.com/results?search_query="+txtTap;
}

StartPage.prototype.searchDuckDuckGO = function (txtTap) {
  document.getElementById("SearchDuckDuckGo").innerHTML = "Search for \""+txtTap+"\"";
  document.getElementById("duckduckgoSearch").href = "https://duckduckgo.com/?q="+txtTap;
}

StartPage.prototype.searchYandex = function (txtTap) {
  document.getElementById("SearchYandex").innerHTML = "Search for \""+txtTap+"\"";
  document.getElementById("yandexSearch").href = "https://yandex.com/search/?text="+txtTap;
}

StartPage.prototype.inputClean = function () {
  document.getElementById('dropdown').style.visibility = "hidden";
  document.getElementById('searchInputSubmitSearch').style.opacity = '0';
  document.getElementById('searchInputSubmitReset').style.opacity = '0';
  document.getElementById("searchInputSubmitSearch").style.cursor = "";
  document.getElementById("searchInputSubmitReset").style.cursor = "";
}

StartPage.prototype.inputTapeHidden = function () {
    document.getElementById('dropdown').style.visibility = "hidden";
    document.getElementById('searchInputSubmitSearch').style.opacity = '0';
    document.getElementById('searchInputSubmitReset').style.opacity = '0';
    document.getElementById("searchInputSubmitSearch").style.cursor = "";
    document.getElementById("searchInputSubmitReset").style.cursor = "";
}

StartPage.prototype.inputTapeVisible = function () {
    document.getElementById('dropdown').style.visibility = "visible";
    document.getElementById('searchInputSubmitSearch').style.opacity = '1';
    document.getElementById('searchInputSubmitReset').style.opacity = '1';
    document.getElementById("searchInputSubmitSearch").style.cursor = "pointer";
    document.getElementById("searchInputSubmitReset").style.cursor = "pointer";
}

StartPage.prototype.imgRandom = function() {
  var arrayIMG = ["A", "B", "C", "D", "E", "F"];
  var nRandom = Math.round(Math.random() * (2 - 1) + 1);
  /*Choose a view*/
  //var nRandom = 2;

  if (nRandom == 1) {
    document.getElementsByTagName("BODY")[0].style.background = "#001f56";
    var imagen = "Images/card/UNAMblue_0";
    for (var i = 0; i <= 5; i++) {
      document.getElementById("imgGrid" + arrayIMG[i]).src = imagen + (i + 1) + ".jpg";
    }
  } else if (nRandom == 2) {
    document.getElementsByTagName("BODY")[0].style.background = "#001f56";
    var imagen = "Images/card/UNAMwhite_0";
    for (var i = 0; i <= 5; i++) {
      document.getElementById("imgGrid" + arrayIMG[i]).src = imagen + (i + 1) + ".jpg";
    }
  }
}

StartPage.prototype.creaTabla = function () {
  var grids = new Array("gridA", "gridB", "gridC", "gridD", "gridE", "gridF");
  var gridTotal = 6;
  var rowTotal = 4;
  var cellTotal = 4;
  var g = 0;
  var x = 0;
  var y = 0;

  for (g = 0; g < gridTotal; g++) {
    var table = document.createElement("TABLE");
    table.setAttribute("class", "tabla");
    document.getElementsByClassName("direction-reveal__overlay")[g].appendChild(table);
    /*Access the JSON object*/
    var tabla = urls[grids[g]];
    var contador = 0;
    /*Create row*/
    for (x = 0; x < rowTotal; x++) {
      var row = document.createElement("tr");
      row.setAttribute("class", "row");
      /*Create cell*/
      for (y = 0; y < cellTotal; y++) {
        var attrHref = tabla[contador].url;
        var attrImagen = tabla[contador].icon;

        var cell = document.createElement("td");
        cell.setAttribute("id", "x"+x+"y"+y);

        var enlace = document.createElement("a");
        if (!attrHref) {
          enlace.setAttribute("href", "");
        }else {
          enlace.setAttribute("href", attrHref);
          cell.appendChild(enlace);
        }

        var icono = document.createElement("img");
        if (!attrImagen) {
          icono.setAttribute("src", "");
        } else {
          icono.setAttribute("src", "Images/icon/"+attrImagen);
          enlace.appendChild(icono);
        }

        row.appendChild(cell);

        contador++;
      }
      document.getElementsByClassName("tabla")[g].appendChild(row);
    }
  }/*End for*/
};

StartPage.prototype.consolaInformacion = function(){
    var egg = console.log("There are no easter eggs here.");
    var rabbit = console.log("    (\\_/)");
    var rabbit = console.log("   =('_')=");
    var gitHub = console.log("GitHub: https://github.com/vill1960/");

    return (egg, rabbit, gitHub);
}

/*---------------------------------------------------------------------------*/
/*Main function.*/
function main(){
  /*Instance*/
  var StartPageA = new StartPage();
  var name = "";

  /*Calling methods*/
  //
  var imprimeSaludo = StartPageA.saludo(name);
  setInterval(function(){StartPageA.saludo(name);}, 1000);

  //
  var imprimeFecha = StartPageA.formatoFecha();
  setInterval(function(){StartPageA.formatoFecha();}, 1000);

  //
  var imprimeHora = StartPageA.formatoHora();
  setInterval(function(){StartPageA.formatoHora();}, 1000);

  //
  var imprimeCelebracion = StartPageA.formatoCelebracion();
  setInterval(function(){StartPageA.formatoCelebracion();}, 1000);

  //
  var imprimeImagen = StartPageA.imgRandom();

  //
  var imprimeTabla = StartPageA.creaTabla();

  //
  var imprimeConsola = StartPageA.consolaInformacion();

  //
  var inputClean = StartPageA.inputClean;
  document.getElementById('searchInputSubmitReset').addEventListener('click',inputClean);

  //
  document.getElementById("searchInput").oninput = function(){
    var txtTap = document.getElementById("searchInput").value;
    if (txtTap == "") {
      StartPageA.inputTapeHidden();
    } else {
      StartPageA.inputTapeVisible();
      StartPageA.searchYouTube(txtTap);
      StartPageA.searchDuckDuckGO(txtTap);
      StartPageA.searchYandex(txtTap);
    }
  };
}

window.onload = main;
