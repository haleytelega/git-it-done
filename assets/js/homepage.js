var getUserRepos = function (user) {
    //format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //make a requst to the url
    fetch(apiUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
        });
    });

    console.log("outside") //run bc not dependant on anything
}
getUserRepos("haleytelega");