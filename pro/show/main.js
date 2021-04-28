let apiUser ="http://127.0.0.1:5000/api/users"
let setUser = document.querySelector(".set-user");

getUser()

async function getUser(){
    let i =0
    let orderObj = await axios.get(apiUser)
    setUser.innerHTML = orderObj.data[i].username

}