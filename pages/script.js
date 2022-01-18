let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
    console.log("button pressed");
    sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
    let API_KEY = "ohi0W99lxyIFIBxGihp93rZi1T7IbApYHuvvvAhv";
    let response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    console.log(response);
    let data = await response.json();
    console.log(data);
    useApiData(data)
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
    document.querySelector("#content").innerHTML += data.explanation
    document.querySelector("#content").innerHTML += `<img src = "${data.url}">`
}