let apimovie ="http://projectsever.app.ruk-com.cloud/api/name-movie"
let setmovie1 = document.querySelector(".set-movie1");
let setmovie2 = document.querySelector(".set-movie2");
let setmovie3 = document.querySelector(".set-movie3");
let setmovie4 = document.querySelector(".set-movie4");
let setmovie5 = document.querySelector(".set-movie5");

getmovie1()
getmovie2()
getmovie3()
getmovie4()
getmovie5()

async function getmovie1(){
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[0].name
    setmovie1.innerHTML = picture

}
async function getmovie2(){
 
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[1].name
    setmovie2.innerHTML = picture

}
async function getmovie3(){
 
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[2].name
    setmovie3.innerHTML = picture

}
async function getmovie4(){
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[3].name
    setmovie4.innerHTML = picture

}
async function getmovie5(){

    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[4].name
    setmovie5.innerHTML = picture

}