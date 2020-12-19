var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');
var serverURL ="https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(text){
    return serverURL + '?text=' + text;
};
function doFetch(text){
    var newurl = getTranslationURL(text);
    fetch(newurl)
    .then(Response => Response.json())
    .then(json => outputDiv.innerText = json.contents.translated)
    .catch(errorHandler);
    }
function clickHandler(){
    doFetch(txtInput.value)
    };
    function errorHandler(error){
        console.log("error occured", error);
        alert("something wrong with server : try again later")
    };
btnTranslate.addEventListener('click', clickHandler);

