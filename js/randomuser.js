const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))

}
const displayUser = user =>{
    const name = document.getElementById('name');
    // console.log(user.results[0].name.title);
    name.innerHTML =user.results[0].name.title+' '+ user.results[0].name.first    + ' ' + user.results[0].name.last;

    const gender = user.results[0].gender;
    // console.log(user.results[0].gender);
    document.getElementById('gender').innerHTML = gender;
    // const gender = user;
    // console.log(user.results[0].location.street.name)
    const location = user.results[0].location.street.number+','+user.results[0].location.street.name;
    document.getElementById('location').innerHTML =location;

    // console.log(user.results[0].picture.thumbnail);
    const picture = user.results[0].picture.thumbnail;
    document.getElementById('img').innerHTML = picture;
}
loadUser()