fetch('https://api.github.com/search/repositories?q=stars:150000..300000', {
  method: "GET"
})
  .then((data) => data.json())
.then((res) => console.log(res))
  .then((users) => {
    const allUsers = document.querySelector(".userRepositoryNames");
    users.forEach((user) => {
      // user container
      const userConatiner =  document.createElement('div');
      userConatiner.setAttribute('class','div');
      
      allUsers.innerHTML =`<a href='${user.items.html_url}'> ${user.full_name} </a>`;
     
       allUsers.append(userConatiner);
      
    });
  });


function searchClick(){
    let searchBar=document.getElementById("search-bar");
    searchBar.style.width="500px";
    searchBar.style.background="grey";
    searchBar.style.color="#000";
    searchBar.style.border="1px solid blue";

}

async function searchfunction(event){
    let searchText=document.getElementById("search-bar").value;
    
    
    if (event.keyCode === 13) {
        const url="https://api.github.com"
        const response=await fetch(url);
        const result=response.json();

        console.log(result);
    
    }

}


function explore(){
    fetch('https://api.github.com/orgs/ORG/repos', {
  method: "GET"
})
 .then((data) => data.json())
 .then((data1)=> {
    const explore=document.querySelector(".explore-repository");

    explore.innerHTML=`<h1> ${data1} </h1>`;
 
});
}