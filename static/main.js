document.getElementById('create-slides').addEventListener('click', function () {
    var numSlides = parseInt(document.getElementById('num-slides').value);
    var slideContainer = document.getElementById('slide-container');
    slideContainer.innerHTML = '';

    for (var i = 1; i <= numSlides; i++) {
        var slideDiv = document.createElement('div');
        slideDiv.className = 'slide';

        var slideLabel = document.createElement('label');
        slideLabel.textContent = 'Conteúdo do Slide ' + i + ':';

        var slideTextarea = document.createElement('textarea');
        slideTextarea.name = 'slide-' + i;
        slideTextarea.required = true;

        slideDiv.appendChild(slideLabel);
        slideDiv.appendChild(slideTextarea);
        slideContainer.appendChild(slideDiv);
    }

    // Atualiza o campo oculto com o conteúdo dos slides
    document.getElementById('slide-content').value = JSON.stringify(collectSlideContent());
});

function collectSlideContent() {
    var slideContents = [];
    var slideTextareas = document.querySelectorAll('textarea[name^="slide-"]');

    slideTextareas.forEach(function (textarea) {
        slideContents.push(textarea.value);
    });

    return slideContents;
}
