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
function getProfile(){

const username =
document.getElementById("search").value.trim();

const profile =
document.getElementById("profile");

if(username === ""){

profile.innerHTML =
"<p class='error'>Please enter username</p>";

return;

}

profile.innerHTML =
"<p class='loading'>Loading...</p>";

fetch(
"https://api.github.com/users/" + username
)

.then(response => {

if(!response.ok){

throw new Error("User not found");

}

return response.json();

})

.then(data => {

profile.innerHTML =

`

<img src="${data.avatar_url}">

<h2>${data.name || data.login}</h2>

<p>${data.bio || "No bio available"}</p>

<p><strong>Followers:</strong> ${data.followers}</p>

<p><strong>Following:</strong> ${data.following}</p>

<p><strong>Repositories:</strong> ${data.public_repos}</p>

<a href="${data.html_url}"
target="_blank">

View Profile

</a>

`;

})

.catch(error => {

profile.innerHTML =
"<p class='error'>User not found</p>";

});

}
