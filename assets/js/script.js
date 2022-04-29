// Define the array with the links of the videos for modal
var linksVideos = [
    "https://youtu.be/W_w6Mf7zz04",
    'https://youtu.be/7khegg0-jgE',
    'https://youtu.be/9-3YXedkOQg',
    'https://youtu.be/UzIBmzLYHNY',
];

// Get the modal and from it the iframe
var modal = document.getElementById("myModal");
var iframe = modal.querySelector('iframe');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var enlaces = document.querySelectorAll('#myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on any link, open the modal 
enlaces.forEach((enlace, index) => {
    enlace.onclick = function () {
        console.log(`Hi`, index);
        var link = linksVideos[index];
        var id = obternerIdVideoModal(link);
        iframe.setAttribute(`src`, `https://www.youtube.com/embed/${id}`);
        modal.style.display = 'block';
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    iframe.setAttribute(`src`, ``);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        iframe.setAttribute(`src`, ``);
    }
}

function obternerIdVideoModal(link) {
    var exp = /[^b/]+$/g;
    var idExtraido = link.match(exp);
    return idExtraido;
}