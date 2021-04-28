let apimovie ="http://127.0.0.1:5000/api/name-movie"

let setmovie = document.querySelector(".set-movie");

getmovie()

async function getmovie(){
    let i =0
    console.log("kfsjgspor");
    var movieObj = await axios.get(apimovie)
    console.log(movieObj.data[i].name);
    
    setmovie.innerHTML = await movieObj.data[i].name
    
}