
const title = document.getElementById('title');
const image = document.getElementById('image');
const dynamicText = document.getElementById('dynamic-text');
const textContainer = document.getElementById('text-container');

title.style.color = 'green';
title.style.position = 'relative';
title.style.top = '10px';


document.getElementById('change-image').addEventListener('click', function() {
    image.src = "img2.jpg";
});


document.getElementById('add-text').addEventListener('click', function() {
    const newText = document.createTextNode('New Text Which Animal is this.');
    const newParagraph = document.createElement('p');
    newParagraph.appendChild(newText);
    textContainer.appendChild(newParagraph);
});


document.getElementById('delete-text').addEventListener('click', function() {
    if (textContainer.lastChild) {
        textContainer.removeChild(textContainer.lastChild);
    }
});

$(document).ready(function() {
   
    $('#jquery-button').click(function() {
        $(this).text('Button Text Changed!');
    });

    
    $('body').css('background-image', 'url("bg.png")');

    
    $('#myForm').submit(function(event) {
        event.preventDefault();
        const name = $('#name').val();
        alert('Form submitted! Animal is : ' + name);
    });

    
    $('#submit-form').attr('title', 'Click to submit the form');
});
