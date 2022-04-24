/*let wrapper = document.querySelector('.img__wrapper')

function donwload(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        let img = document.createElement('img');
        wrapper.appendChild(img);
        img.src = reader.result;
    }
}*/


document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById("author").value = name;
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    let avatar_name = localStorage.getItem('avatar_name');
    if (avatar_name != null) {
        document.getElementById("avatar").file = avatar_name;
    }
});

const abuse = ['ViAgRA', 'xxx'];

document.querySelector('button').onclick = () => {

    let avatar = document.getElementById('avatar').value;
    console.log(avatar);
    let author = document.getElementById('author').value;
    console.log(author);
    let text = document.querySelector('textarea').value;

    for (let i = 0; i < abuse.length; i++) {
        //abuse[i]
        while (author.indexOf(abuse[i]) != -1) {
            text = text.replace(abuse[i], star(abuse[i].length));
        }
        while (text.indexOf(abuse[i]) != -1) {
            text = text.replace(abuse[i], star(abuse[i].length));
        }
    }
    if (localStorage.getItem('avatar_name') == null) {
        localStorage.setItem('avatar_name', avatar);
    }
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }
    document.querySelector('#out').innerHTML += '<div class="commet">' + author + ': ' + text + '</div>';
}

function star(n) {
    let out = '';
    for (let i = 0; i < n; i++) {
        out += '*';
    }
    return out;
}