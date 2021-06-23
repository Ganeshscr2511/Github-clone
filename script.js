// fetch('https://api.github.com/search/repositories?q=stars:150000..300000', {
//   method: "GET"
// })
//   .then((data) => data.json())
// .then((res) => console.log(res))
//   .then((users) => {
//     const allUsers = document.querySelector(".userRepositoryNames");
//     users.forEach((user) => {
//       // user container
//       const userConatiner =  document.createElement('div');
//       userConatiner.setAttribute('class','div');
      
//       allUsers.innerHTML =`<a href='${user.items.html_url}'> ${user.full_name} </a>`;
     
//        allUsers.append(userConatiner);
      
//     });
//   });




function onsearch(event){
    if(event.keyCode === 13){
      
    const searchText=document.getElementById("search-box").value;
    const originalText=searchText.split(" ").join(" ");
    let url='https://api.github.com/orgs/`${originalText}`/repos';
  
  fetch(url , {
    method: "GET"
  })
    .then((data) => data.json())
  
    .then((users) => {
      const allUsers = document.querySelector(".userRepositoryNames");
      users.forEach((user) => {
        // user container
        const userConatiner =  document.createElement('div');
        userConatiner.setAttribute('class','div');
        
        userConatiner.innerHTML = `
        <img src='${user.avatar_url}' alt='profile-Img'>
        `+`<br>`+ `
        <a href="${user.repos_url}">${user.name}</a>`
        ;
       
         allUsers.append(userConatiner);
        
      });
    });
    }
    
  }
