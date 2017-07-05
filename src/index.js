import './index.css';
import { getBooks } from './api/bookApi';

getBooks().then(result => {

    let booksBody = "";

    result.forEach(book => {
        booksBody += `<tr>
      <td><a href="#" data-id="${book.sequence}" class="deleteBook">Delete</a></td>
      <td>${book.title}</td>
      <td>${book.sequence}</td>
      </tr>`

    });

    global.document.getElementById('books').innerHTML = booksBody;

});