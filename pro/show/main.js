let apiUser ="http://127.0.0.1:5000/api/users"
let apimovie ="http://127.0.0.1:5000/api/name-movie"

let setUser = document.querySelector(".set-user");
let setmovie = document.querySelector(".set-movie");
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
async function getmovie(){
    let i =0
    var movieObj = await axios.get(apimovie)
    let picture =movieObj.data[i].name
    setmovie.innerHTML = picture

}
