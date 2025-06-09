

let rootpath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enterApiKey.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
