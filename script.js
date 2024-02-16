let buttonSubmit = document.getElementById('buttonSubmit');
let messageRec = document.getElementById('floatingTextarea2');
let listRecommendations = document.getElementById('listRecommendations');

function addNewRecommendation() {
    if(messageRec != null || undefined) {
        listRecommendations.innerHTML += `<li class="list-group-item">"` + messageRec + `"</li>`;
    } else if(messageRec = "") {
         alert("The text area is blank")
    }
};

buttonSubmit.addEventListener('click', addNewRecommendation());