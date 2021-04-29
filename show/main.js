let apiUser ="http://movie.app.ruk-com.cloud/api/users"
let apimovie ="http://movie.app.ruk-com.cloud/api/name-movie"

let setmovie1 = document.querySelector(".set-movie1");
let setmovie11 = document.querySelector(".set-movie11");

let setmovie2 = document.querySelector(".set-movie2");
let setmovie22 = document.querySelector(".set-movie22");

let setmovie3 = document.querySelector(".set-movie3");
let setmovie33 = document.querySelector(".set-movie33");

let setmovie4 = document.querySelector(".set-movie4");
let setmovie44 = document.querySelector(".set-movie44");

let setmovie5 = document.querySelector(".set-movie5");
let setmovie55 = document.querySelector(".set-movie55");

getmovie1()
getmovie11()

getmovie2()
getmovie22()

getmovie3()
getmovie33()

getmovie4()
getmovie44()

getmovie5()
getmovie55()

async function getmovie1(){
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[0].name
    setmovie1.innerHTML = picture
}
async function getmovie11(){
    var movieObj = await axios.get(apimovie)
    let story =movieObj.data[0].story
    setmovie11.innerHTML = story

}


async function getmovie2(){
 
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[1].name
    setmovie2.innerHTML = picture

}
async function getmovie22(){
    var movieObj = await axios.get(apimovie)
    let story =movieObj.data[1].story
    setmovie22.innerHTML = story

}



async function getmovie3(){
 
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[2].name
    setmovie3.innerHTML = picture

}
async function getmovie33(){
    var movieObj = await axios.get(apimovie)
    let story =movieObj.data[2].story
    setmovie33.innerHTML = story

}

async function getmovie4(){
 
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[3].name
    setmovie4.innerHTML = picture

}
async function getmovie44(){
    var movieObj = await axios.get(apimovie)
    let story =movieObj.data[3].story
    setmovie44.innerHTML = story

}


async function getmovie5(){
 
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[4].name
    setmovie5.innerHTML = picture

}
async function getmovie55(){
    var movieObj = await axios.get(apimovie)
    let story =movieObj.data[4].story
    setmovie55.innerHTML = story

}

