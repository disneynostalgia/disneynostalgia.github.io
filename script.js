// IMAGE ROTATION
// var slideIndex = 1;
// showDivs(slideIndex);
//
// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length} ;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex-1].style.display = "block";
// }

// def makeObj(L1,L2):
// 	string = ""
// 	for i in range(len(L1)):
// 		string+="\""+L1[i]+"\": [\""+L2[i] +"\"]\n"
// 	return string


//CREATE MOVIE NAMES AND MOVIE LOCATIONS
// var movieNames = ["Aladdin","Aladdin: The Return of Jafar","Aladdin: The King of Thieves","Beauty and the Beast","Beauty and the Beast: The Enchanted Christmas","Beauty and the Beast: Belle's Magical World","Big Hero 6","Cinderella","Cinderella II: Dreams Come True","Cinderella III: A Twist in Time","Fantasia","Finding Dory","Finding Nemo","Frozen","Lilo & Stitch","Lilo & Stitch: Stich Has A Glitch","Monsters Inc.","Monsters University","Mulan","Mulan 2","Pocahontas","Pocahontas II: Journey to a New World","Sleeping Beauty","Snow White and the Seven Dwarves","Tangled","The Incredibles","The Lion King","The Little Mermaid","The Little Mermaid 2: Return to the Sea","The Little Mermaid 3: Ariel's Beginning","The Princess and the Frog","Toy Story","Toy Story 2","Toy Story 3","Up","Wall-E"];
// var moviePaths = ["../movies/aladdin-1.html","../movies/aladdin-2.html","../movies/aladdin-3.html","../movies/beauty-and-the-beast-1.html","../movies/beauty-and-the-beast-2.html","../movies/beauty-and-the-beast-3.html","../movies/big-hero-6.html","../movies/cinderella-1.html","../movies/cinderella-2.html","../movies/cinderella-3.html","../movies/fantasia.html","../movies/finding-dory.html","../movies/finding-nemo-1.html","../movies/frozen-1.html","../movies/lilo-&-stitch-1.html","../movies/lilo-&-stitch-2.html","../movies/monsters-inc.html","../movies/monsters-university.html","../movies/mulan-1.html","../movies/mulan-2.html","../movies/pocahontas-1.html","../movies/pocahontas-2.html","../movies/sleeping-beauty-1.html","../movies/snow-white-1.html","../movies/tangled-1.html","../movies/the-incredibles-1.html","../movies/the-lion-king-1.html","../movies/the-little-mermaid-1.html","../movies/the-little-mermaid-2.html","../movies/the-little-mermaid-3.html","../movies/the-princess-and-the-frog-1.html","../movies/toy-story-1.html","../movies/toy-story-2.html","../movies/toy-story-3.html","../movies/up-1.html","../movies/wall-e-1.html"];
// var videoPaths = ["https://drive.google.com/file/d/0B5nt_X2PsOIuSlU1SzkxMDUxdjA/preview","https://drive.google.com/file/d/0B5nt_X2PsOIuSEJIX3JJclJkNjA/preview","https://drive.google.com/file/d/0B5nt_X2PsOIuNnB3clVuU1pJdFk/preview"]

var movieNames = {
  "Aladdin": ["../movies/aladdin-1.html","../img/Aladdin1.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuSlU1SzkxMDUxdjA/preview"],//////////////////////////DN1
  "Aladdin II: The Return of Jafar": ["../movies/aladdin-2.html","../img/Aladdin2.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuSEJIX3JJclJkNjA/preview"],//////////////////////////DN1
  "Aladdin III: The King of Thieves": ["../movies/aladdin-3.html","../img/Aladdin3.jpg", "https://drive.google.com/file/d/0BwptHJueSIVyU0pYWjFQdUR5SWM/preview"], //////////////////////////DN4
  "Beauty and the Beast": ["../movies/beauty-and-the-beast-1.html","../img/BeautyAndTheBeast1.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuNnB3clVuU1pJdFk/preview"],//////////////////////////DN1
  "Beauty and the Beast: The Enchanted Christmas": ["../movies/beauty-and-the-beast-2.html","../img/BeautyAndTheBeast2.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuTHE0RVRWTldyU28/preview"],//////////////////////////DN1
  "Beauty and the Beast: Belle's Magical World": ["../movies/beauty-and-the-beast-3.html","../img/BeautyAndTheBeast3.jpg"],//////////////////////////DN1
  "Big Hero 6": ["../movies/big-hero-6.html","../img/BigHero6.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIud25sOG51NWctYUE/preview"],//////////////////////////DN1
  "Bolt": ["../movies/bolt-1.html","../img/Bolt1.jpg","https://drive.google.com/file/d/0BwptHJueSIVyTmtNWE51VGpNdVE/preview"],//////////////////////////DN4
  "Brave": ["../movies/brave-1.html","../img/Brave1.jpg","https://drive.google.com/file/d/0BwptHJueSIVycHE2TmNHVDUyMVU/preview"],/////////////////////////DN4
  "Cinderella": ["../movies/cinderella-1.html","../img/Cinderella1.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuY2JuUFlTTHVqUlE/preview"],//////////////////////////DN1
  "Cinderella II: Dreams Come True": ["../movies/cinderella-2.html","../img/Cinderella2.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuYXN6dWhfbXhQMEE/preview"],///////////////////////////DN1
  "Cinderella III: A Twist in Time": ["../movies/cinderella-3.html","../img/Cinderella3.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuTnBiMWU4a1FkRWs/preview"],///////////////////////////DN1
  "Fantasia 2000": ["../movies/fantasia-2000.html","../img/Fantasia2000.jpg","https://drive.google.com/file/d/0BwptHJueSIVyaTZhQ3gyUGRxTnM/preview"],//////////////////////////DN1
  "Fantasia": ["../movies/fantasia.html","../img/Fantasia.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuaFkwdVVyNnJoZHM/preview"],//////////////////////////DN1
  "Finding Dory": ["../movies/finding-dory.html","../img/FindingDory.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuM3dacWFMWkNmM0E/preview"],//////////////////////////DN1
  "Finding Nemo": ["../movies/finding-nemo-1.html","../img/FindingNemo1.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuQkJJUm16VnRMeEE/preview"],//////////////////////////DN1
  "Frozen": ["../movies/frozen-1.html","../img/Frozen1.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuM1VObTlzQ3ZKdVU/preview"],//////////////////////////DN1
  "Inside Out": ["../movies/inside-out-1.html","../img/InsideOut1.jpg","https://drive.google.com/file/d/0BwptHJueSIVyRUJQR1JKVjNIMlE/preview"],/////////////////////////////////DN4
  "Lilo & Stitch": ["../movies/lilo-&-stitch-1.html","../img/Lilo&Stitch1.jpg","https://drive.google.com/file/d/0B5nt_X2PsOIuYkgyX2VuNHVaYzQ/preview"],//////////////////////////DN2
  "Lilo & Stitch: Stitch Has A Glitch": ["../movies/lilo-&-stitch-2.html","../img/Lilo&Stitch2.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaOXN5V1B3cDNPSWs/preview"],//////////////////////////DN2
  "Meet the Robinsons": ["../movies/meet-the-robinsons-1.html","../img/MeetTheRobinsons1.jpg","https://drive.google.com/file/d/0BwptHJueSIVyb1V1WjAzejNCY3M/preview"],//////////////////////////DN4
  "Monsters Inc.": ["../movies/monsters-inc.html","../img/MonstersInc1.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaSURIaHNaWmMyOFU/preview"],//////////////////////////DN2
  "Monsters University": ["../movies/monsters-university.html","../img/MonstersInc2.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaZXFRN3VCdFZPSlk/preview"],//////////////////////////DN2
  "Mulan": ["../movies/mulan-1.html","../img/Mulan1.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaWjVWOGhORTE1blk/preview"],//////////////////////////DN2
  "Mulan 2": ["../movies/mulan-2.html","../img/Mulan2.jpg","https://drive.google.com/file/d/0B7Y495M5-oUad2F6RWl6NkMxZm8/preview"],//////////////////////////DN2
  "Pocahontas": ["../movies/pocahontas-1.html","../img/Pocahontas1.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaMDVuTTlzb2NqMDQ/preview"],//////////////////////////DN2
  "Pocahontas II: Journey to a New World": ["../movies/pocahontas-2.html","../img/Pocahontas2.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaYW9STFBVTVZKZkU/preview"],//////////////////////////DN2
  "Sleeping Beauty": ["../movies/sleeping-beauty-1.html","../img/SleepingBeauty1.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaNHZqeWJJS0V6YUU/preview"],//////////////////////////DN2
  "Snow White and the Seven Dwarves": ["../movies/snow-white-1.html","../img/SnowWhite1.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaV0VXV2N4OUtsNWc/preview"],//////////////////////////DN2
  "Tangled": ["../movies/tangled-1.html","../img/Tangled1.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaaHR5RVJfcHJrbVE/preview"],//////////////////////////DN2
  "Tarzan": ["../movies/tarzan-1.html","../img/Tarzan1.jpg","https://drive.google.com/file/d/0BwptHJueSIVydHh5Q3FYWklvYU0/preview"],////////////////////////////DN4
  "Tarzan II": ["../movies/tarzan-2.html","../img/Tarzan2.jpg","https://drive.google.com/file/d/0BwptHJueSIVyVGZ6cVZRRTJLNk0/preview"],////////////////////////////DN4
  "The Good Dinosaur": ["../movies/the-good-dinosaur-1.html","../img/TheGoodDinosaur1.jpg","https://drive.google.com/file/d/0BwptHJueSIVySXVHOEMyRVF1Mkk/preview"],//////////////////////DN4
  "The Incredibles": ["../movies/the-incredibles-1.html","../img/TheIncredibles1.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaSU8wUHVDcUlQbzA/preview"],//////////////////////////DN2
  "The Lion King": ["../movies/the-lion-king-1.html","../img/TheLionKing1.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaQm1HUTlfVWlUUzQ/preview"],//////////////////////////DN2
  "The Little Mermaid": ["../movies/the-little-mermaid-1.html","../img/TheLittleMermaid1.jpg","https://drive.google.com/file/d/0B7Y495M5-oUaNkg4WFBlWEVDODA/preview"],//////////////////////////DN2
  "The Little Mermaid 2: Return to the Sea": ["../movies/the-little-mermaid-2.html","../img/TheLittleMermaid2.jpg", "https://drive.google.com/file/d/0B7Y495M5-oUabDljQ1l6bVpFX28/preview"],//////////////////////////DN2                                          //DN2 - END
  "The Little Mermaid 3: Ariel's Beginning": ["../movies/the-little-mermaid-3.html","../img/TheLittleMermaid3.jpg","https://drive.google.com/file/d/0B8Sw_3IMSFAZR0VfT0U4R01oRVk/preview"],//////////////////////////DN3
  "The Princess and the Frog": ["../movies/the-princess-and-the-frog-1.html","../img/ThePrincessAndTheFrog1.jpg","https://drive.google.com/file/d/0B8Sw_3IMSFAZdjVkSjBrOVZQbFE/preview"],//////////////////////////DN3
  "Toy Story": ["../movies/toy-story-1.html","../img/ToyStory1.jpg","https://drive.google.com/file/d/0B8Sw_3IMSFAZV0VQOWdTVGtvZjA/preview"],//////////////////////////DN3
  "Toy Story 2": ["../movies/toy-story-2.html","../img/ToyStory2.jpg","https://drive.google.com/file/d/0B8Sw_3IMSFAZNF9nLUFzSGYyU1U/preview"],//////////////////////////DN3
  "Toy Story 3": ["../movies/toy-story-3.html","../img/ToyStory3.jpg","https://drive.google.com/file/d/0B8Sw_3IMSFAZUWVYUHdNVXBjUU0/preview"],//////////////////////////DN3
  "Turbo": ["../movies/turbo-1.html","../img/Turbo1.jpg","https://drive.google.com/file/d/0BwptHJueSIVyZkJpVzB0YVBSOTA/preview"],//////////////////////////DN4
  "Up": ["../movies/up-1.html","../img/Up1.jpg","https://drive.google.com/file/d/0B8Sw_3IMSFAZM3VkSU5faEJudTg/preview"],//////////////////////////DN3
  "Wall-E": ["../movies/wall-e-1.html","../img/Walle1.jpg","https://drive.google.com/file/d/0B8Sw_3IMSFAZLUFQWHRLMnBJQ0E/preview"],//////////////////////////DN3
  "Wreck-It Ralph": ["../movies/wreck-it-ralph-1.html","../img/WreckItRalph1.jpg","https://drive.google.com/file/d/0BwptHJueSIVyblRmLTVzcW9Ha3M/preview"],//////////////////////////DN4
  "Zootopia": ["../movies/zootopia-1.html","../img/Zootopia1.jpg","https://drive.google.com/file/d/0BwptHJueSIVyT0ljaWdZQVlxZDA/preview"],//////////////////////////DN4

}



////////////////////////////////////////////////////////////////////////////////


function namesFunction(){
  var tempNames = []
  for(var key in movieNames){
    tempNames.push(String(key));
  }
  return tempNames
}

function pathsFunction(){
  var tempPaths = []
  for(var key in movieNames){
    tempPaths.push(String(movieNames[key][0]));
  }
  return tempPaths
}
var allMovieNames = namesFunction();
var allPathNames = pathsFunction();


////////////////////////////////////////////////////////////////////////////////


function verify(){
  password = document.getElementById("pass").value;
  console.log(password);
  if(password === "Disney123"){
    console.log("TEST");
    window.location = "home.html";
  }else{
    alert("PASSWORD IS INCORRECT");
  }
}


////////////////////////////////////////////////////////////////////////////////


function pressedEnter(e) {
    if (e.keyCode == 13) {
      verify();
    }
}


////////////////////////////////////////////////////////////////////////////////


function loadMoviesInOrder(arrNames = allMovieNames, arrPaths = allPathNames, seq = ""){
  if(arrNames.length===0 && arrPaths.length===0 && seq.length>1){
    var div = document.getElementById("loadMovies");
    div.innerHTML = "";

    var text = document.createTextNode("NO MATCHES FOUND FOR: "+seq);
    var h4 = document.createElement("h4");

    h4.append(text);
    div.append(h4);
  }else{

  var div = document.getElementById("loadMovies");
  div.innerHTML = "";

  for(var i=0; i<arrNames.length;i++){
    //CREATE/GET ELEMENTS

    var text = document.createTextNode(arrNames[i]);
    var h4 = document.createElement("h4");
    var link = document.createElement("a");
    link.href = arrPaths[i];

    //APPEND ELEMENTS

    h4.append(text);
    link.append(h4);
    div.append(link);

  }
  }
  span = document.getElementById("searchedFor");
  if(seq.length>0){
    span.innerHTML = seq;
  }else{
    span.innerHTML = "All Movies";
  }
}


////////////////////////////////////////////////////////////////////////////////


function loadMoviesInOrderV2(arrNames = allMovieNames, arrPaths = allPathNames, seq = ""){
  if(arrNames.length===0 && arrPaths.length===0 && seq.length>1){
    var div = document.getElementById("loadMovies");
    div.innerHTML = "";

    var text = document.createTextNode("NO MATCHES FOUND FOR: "+seq);
    var h4 = document.createElement("h4");

    h4.append(text);
    div.append(h4);
  }else{

    var div = document.getElementById("loadMovies");
    div.innerHTML = "";

    for(var i=0; i<arrNames.length;i++){
      //CREATE/GET ELEMENTS
      var figure = document.createElement("figure");

      var img = document.createElement("img");
      img.src = movieNames[arrNames[i]][1];
      img.width = "150";
      img.height = "210";

      var text = document.createTextNode(arrNames[i]);
      var caption = document.createElement("figcaption");
      caption.appendChild(text);

      var link = document.createElement("a");
      link.href = arrPaths[i];

      //APPEND ELEMENTS

      // h4.append(text);
      link.appendChild(img);
      link.appendChild(caption);
      figure.appendChild(link);

      div.append(figure);

    }
  }
  span = document.getElementById("searchedFor");
  if(seq.length>0){
    span.innerHTML = seq;
  }else{
    span.innerHTML = "All Movies";
  }
}


////////////////////////////////////////////////////////////////////////////////


function alphaSearch(char){
  var movieTitles = [];
  var movieLocations = [];

  for(var key in movieNames){
    if(String(key)[0]===char){
      movieTitles.push(String(key));
      movieLocations.push(movieNames[key][0]);
    }
  }
  if(movieTitles.length>0)
    loadMoviesInOrderV2(movieTitles, movieLocations); ///////CHANGE NOW LOL
  else
    alert("SORRY! There are no movies that start with \""+char+"\"!");

}


////////////////////////////////////////////////////////////////////////////////


function searchBarOld() {
  var seq = (document.getElementById("movieTitle").value).toUpperCase();
  var names = [];
  var matchedNames = [];
  var matchedLocations = [];
  if(seq.length===0){
    loadMoviesInOrder();

  }else{

    //SET UP FOR SEARCH
    for(var i=0;i<movieNames.length;i++){
      names.push((movieNames[i].replace(/\s+/g, '')).toUpperCase());
    }
    for(var i=0;i<movieNames.length;i++){
      if(names[i].indexOf(seq)!==-1){               //NAMES IS ALL MOVIE NAMES WITHOUT WHITESPACE/CASE-SENSITIVITY
        if(matchedNames.indexOf(movieNames[i])===-1){
          matchedNames.push(movieNames[i]);
          matchedLocations.push(moviePaths[i]);
        }
      }
    }

    loadMoviesInOrder(matchedNames,matchedLocations,seq);

    }
}


////////////////////////////////////////////////////////////////////////////////


function searchBar() {
  var seq = (document.getElementById("movieTitle").value).toUpperCase();
  var names = [];
  var namesEdit = [];
  var matchedNames = [];
  var matchedLocations = [];
  if(seq.length===0){
    loadMoviesInOrderV2();
  }else{
      for(var key in movieNames){
        names.push(String(key));
        namesEdit.push(String(key).replace(/\s+/g, '').toUpperCase());
      }
      for(var i=0;i<names.length;i++){
        if(namesEdit[i].indexOf(seq)!==-1){
          matchedNames.push(names[i]);
          matchedLocations.push(movieNames[names[i]][0]);
        }
      }
      console.log(matchedNames);
      console.log(matchedLocations);
      loadMoviesInOrderV2(matchedNames,matchedLocations,seq);
  }
}


////////////////////////////////////////////////////////////////////////////////


function loadVideo(vidName){
  divFilm = document.getElementById("film");

  container = document.createElement("div");
  container.className = "container";

  br = document.createElement("br");

  h2 = document.createElement("h2");
  movieTitle = document.createTextNode(vidName);
  h2.appendChild(movieTitle);

  fluid = document.createElement("div");
  fluid.className = "embed-responsive embed-responsive-16by9";

  iframe = document.createElement("iframe");
  // iframe.src= videoPaths[path];
  if(movieNames[vidName][2]===undefined){
    h1 = document.createElement("h1");
    text = document.createTextNode("SORRY! This video is not available yet!");
    h1.appendChild(text);
    container.appendChild(br);
    container.appendChild(h2);
    container.appendChild(h1);

  }else{
    iframe.src = movieNames[vidName][2];
    iframe.name = vidName;
    iframe.title = vidName;
    iframe.className = "embed-responsive-item";
    iframe.width = "640";
    iframe.height = "480";
    iframe.setAttribute("allowfullscreen",true);

    fluid.appendChild(iframe);


    container.appendChild(br);
    container.appendChild(h2);
    container.appendChild(fluid);
  }
  divFilm.appendChild(container);

}
