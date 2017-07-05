import 'whatwg-fetch';

const bookUrl = 'books';

export function getBooks() {
    return get(bookUrl);
}

function get(url) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error);
}