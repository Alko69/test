fetch('http://swapi.dev/api/people/66/')
.then((response) => { // .then = si l'url marche on entre dans la boucle, sinon erreur
return response.json();

})
.then((data) =>{
    console.log(data);
    debugger
})
