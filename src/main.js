const api = "https://codeforces.com/api/user.info?handles=";

const currRating = document.getElementById("currRating");
const bestRating = document.getElementById("bestRating");
const username = document.getElementById("username");
const err = document.getElementById("error");
const btn = document.getElementById("getRating");

function  getData(username){
    currRating.innerText = "loading...";
    bestRating.innerText = "loading...";
    let response;
    $.ajax(api + username, {    
        method: "GET",
        success: function(data) {
            console.log(data.result[0]);
            if(data.status === "OK"){
                console.log(data.result[0]);
                response = data.result[0];
                response["status"] = "success";
                currRating.innerText = response.rating;
                bestRating.innerText = response.maxRating;
            }else{
                err.innerText = data.status;
                currRating.innerText = "";
                bestRating.innerText = "";
                
            }
        },
        error:()=>{
            err.innerText = "Error Ocurred";
            currRating.innerText = "";
            bestRating.innerText = "";
        }
    })
    console.log("level 2");
}

btn.addEventListener("click" , ()=>{
    currRating.innerText = "";
    bestRating.innerText = "";
    currRating.innerText = "";
    err.innerText = "";
    getData(username.value);
})