let comments = [];
loadComments();

document.addEventListener("DOMContentLoaded", function (event) {
    let name1 = localStorage.getItem('name1');
    if (name1 != null) {
        document.getElementById("comment-name").value = name1;
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    let avatar_name = localStorage.getItem('avatar_name');
    if (avatar_name != null) {
        document.getElementById("comment-avatar").value = avatar_name;
    }
});

const abuse = ['ViAgRA', 'xxx'];

document.getElementById('comment-add').onclick = function () {
    let commentAvatar = document.getElementById('comment-avatar').value;
    let commentName = document.getElementById('comment-name').value;
    let commentBody = document.getElementById('comment-body').value;

    for (let i = 0; i < abuse.length; i++) {
        //abuse[i]
        while (commentName.indexOf(abuse[i]) != -1) {
            text = text.replace(abuse[i], checkWordIsValid(abuse[i].length));
        }
        while (commentBody.indexOf(abuse[i]) != -1) {
            text = text.replace(abuse[i], checkWordIsValid(abuse[i].length));
        }
    }
    if (localStorage.getItem('avatar_name') == null) {
        localStorage.setItem('avatar_name', commentAvatar);
    }
    if (localStorage.getItem('name1') == null) {
        localStorage.setItem('name1', commentName);
    }

    let comment = {
        name: commentName,
        body: commentBody,
    }

    commentBody.value = '';

    comments.push(comment);
    saveComments();
    showComments();
}

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments() {
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function (item) {
        out += `<p class="alert alert-primary" role="alert">${item.name}</p>`;
        out += `<p class="alert alert-success" role="alert">${item.body}</p>`;
    });
    commentField.innerHTML = out;
}

function checkWordIsValid()(n) {
    let out = '';
    for (let i = 0; i < n; i++) {
        out += '*';
    }
    return out;
}