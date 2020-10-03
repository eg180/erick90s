


const gitHubPromise = axios.get('https://api.github.com/users/eg180')
.then(res => {
    // do shit here
    let ghCard = renderThatDamnHTMLSon(res);

    entryPoint.appendChild(ghCard);
    
})
.catch(err => {
    console.log(err);
})

// ENTRY POINT
const entryPoint = document.querySelector('.card-container');
//


function renderThatDamnHTMLSon(obj) {
    // entry point to html

entryPoint.classList.add('card-container');





let ghCard = document.createElement('div');
ghCard.classList.add('card');


// div 1 //
const picDiv = document.createElement('div');
picDiv.classList.add('pic-div');

const profileImage = document.createElement('img');
profileImage.setAttribute("id", "profile-photo");
profileImage.src = obj.data.avatar_url;


picDiv.appendChild(profileImage);
// end div 1 //




// const profileImage = document.createElement('img');
// profileImage.src = dataObject.data.avatar_url;
// gitHubCard.appendChild(profileImage);

// ADD LINK CODE EXAMPLE
// const profileLink = document.createElement('a');
//   profileLink.setAttribute('href', dataObject.data.html_url);
//   profileLink.textContent = dataObject.data.html_url;

// div 2 
const userInfo = document.createElement('div');
userInfo.classList.add('user-info');

// const unameLabel = document.createElement('span');
// unameLabel.textContent = 'Location: ';
const uname = document.createElement('h2');
uname.textContent = obj.data.login;

const loc = document.createElement('p');
loc.textContent = `Location: ${obj.data.location}`;

const bio = document.createElement('p');
bio.textContent = `Bio: ${obj.data.bio}`;


const profileLink = document.createElement('a');
profileLink.setAttribute('href', obj.data.html_url);
profileLink.textContent = obj.data.html_url;


// userInfo.appendChild(unameLabel);
userInfo.appendChild(uname);
userInfo.appendChild(loc);
userInfo.appendChild(bio);
userInfo.appendChild(profileLink);

// end div 2

ghCard.appendChild(picDiv);
ghCard.appendChild(userInfo);



// return final product / HTML

return ghCard;
}










