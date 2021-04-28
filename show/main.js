let apiUser ="http://movie.app.ruk-com.cloud/api/users"
let apimovie ="http://movie.app.ruk-com.cloud/api/name-movie"

let setUser = document.querySelector(".set-user");
let setmovie1 = document.querySelector(".set-movie1");
let setmovie2 = document.querySelector(".set-movie2");
let setmovie3 = document.querySelector(".set-movie3");
let setmovie4 = document.querySelector(".set-movie4");
let setmovie5 = document.querySelector(".set-movie5");
getUser()
getmovie()

async function getUser(){
    let i =0
    let orderObj = await axios.get(apiUser)
    function nextuser(){
        setUser.innerHTML = orderObj.data[i].username
    }
    nextuser()
}
async function getmovie1(){
    let i =0
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[0].name
    setmovie1.innerHTML = picture

}

async function getmovie2(){
    let i =0
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[1].name
    setmovie2.innerHTML = picture

}

async function getmovie3(){
    let i =0
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[2].name
    setmovie3.innerHTML = picture

}

async function getmovie4(){
    let i =0
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[3].name
    setmovie4.innerHTML = picture

}

async function getmovie5(){
    let i =0
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[4].name
    setmovie5.innerHTML = picture

}
