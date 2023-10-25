const editor = document.getElementById('editor');

const saveButton = document.getElementById('save');

const loadButton = document.getElementById('load');



// Save the content to local storage

saveButton.addEventListener('click', function () {

    const content = editor.value;

    localStorage.setItem('notepadContent', content);

    alert('Content saved successfully.');

});



// Load content from local storage

loadButton.addEventListener('click', function () {

    const content = localStorage.getItem('notepadContent');

    if (content) {

        editor.value = content;

        alert('Content loaded successfully.');

    } else {

        alert('No saved content found.');

    }

});
