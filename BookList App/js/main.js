// BOOK CLASS:REpresents a Book

class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

// UI Class: Handle UI Tasks
class UI {
	//make the mehtod dispalybook
	static displayBooks() {
		const books = Store.getBook();

		//set var to the sotedbook
		books.forEach((book) => UI.addBookToList(book));
	}

	//make the addbook to lis
	static addBookToList(book) {
		// get the lis
		const list = document.querySelector('#book-list');

		// create the row
		const row = document.createElement('tr');

		// inner to the row
		row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td>
            <a href="#" class="btn btn-danger bnt-sm delete">X</a>
          </td>
        `;

		// append to row
		list.appendChild(row);
	}

	//delte book
	static deleteBook(el) {
		//check class delete is set
		if (el.classList.contains('delete')) {
			el.parentElement.parentElement.remove();
		}
	}

	//clear fileds method
	static clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}

	//alert
	static showAlert(message, classname) {
		//create div
		const div = document.createElement('div');

		//add classes
		div.className = `alert alert-${classname}`;
		//appent to div
		div.appendChild(document.createTextNode(message));
		//get container
		const container = document.querySelector('.container');
		//get form
		const form = document.querySelector('#book-form');
		//insert the div before the form
		container.insertBefore(div, form);

		//vanish in 3 second
		setTimeout(() => document.querySelector('.alert').remove(), 3000);
	}
}

//Store Class:Handles Storage

class Store {
	//get book
	static getBook() {
		let books;
		if (localStorage.getItem('books') === null) {
			//set the books in empty
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}
		//return books
		return books;
	}

	//add book
	static addBook(book) {
		const books = Store.getBook();
		//push book
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}
	//remoave bbok
	static removeBook(isbn) {
		//get a book to delete
		const books = Store.getBook();

		//llop throw book
		books.forEach((book, index) => {
			if (book.isbn === isbn) {
				books.splice(index, 1);
			}
		});
		localStorage.setItem('books', JSON.stringify(books));
	}
}

// Event: Dispaly Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event:Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
	e.preventDefault();
	// Get form values
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;
	//validate
	if (title === '' || author === '' || isbn === '') {
		UI.showAlert('all fileds is required', 'danger');
	} else {
		//instaiate book
		const book = new Book(title, author, isbn);

		//add book to ui
		UI.addBookToList(book);

		//add book to storge
		Store.addBook(book);
		//show success message
		UI.showAlert('book added', 'success');

		//clear fileds
		UI.clearFields();
	}
});

// Event:Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
	//remove book form ui
	UI.deleteBook(e.target);

	//remove book from store
	Store.removeBook(e.target.parentElement.previousElementSibLing.textContent);

	//set the meassge
	UI.showAlert('book deleted', 'danger');
});
