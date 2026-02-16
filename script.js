function getProfile(){

const username =
document.getElementById("search").value;

fetch("https://api.github.com/users/" + username)

.then(response => response.json())

.then(data => {

document.getElementById("profile").innerHTML =

`

<img src="${data.avatar_url}">

<h2>${data.name}</h2>

<p>${data.bio}</p>

<p>Followers: ${data.followers}</p>

<p>Following: ${data.following}</p>

<p>Repos: ${data.public_repos}</p>

`;

});

}
