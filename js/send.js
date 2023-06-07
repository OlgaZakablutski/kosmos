document.getElementById("send").addEventListener("click", buttonSend);

let Bday = document.getElementById("Bday");
let fname = document.getElementById("fname");
let CarMark = document.getElementById("CarMark");
let para = document.getElementById("para");
let comment = document.getElementById("comment");
para.style.fontWeight = '900';
para.style.color = 'red';



function buttonSend() {
    // alert("First name " + fname.value + ' ' + Bday.value + ' ' + CarMark.value);
    // para.className += 'para';

    para.classList.remove('para');
    if (comment.value.length < 5) {
        alert('error!');
    } else { 
        para.innerHTML = "First name " + fname.value + ' ' + Bday.value + ' ' + CarMark.value;

    }  

}    




