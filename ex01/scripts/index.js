var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";

};

function openModal(param) {
    var href = param.getAttribute("href");
    modal.style.display = "block";
    var modalContent = modal.querySelector(".modal-content");
    var modalBody = modalContent.querySelector(".modal-body");
    modalBody.innerHTML = "'<object data='" + href + "'class= 'objectView' ></object>'";

}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};