function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() { };

UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row);
}

UI.prototype.clearData = function(){
    const title = document.querySelector('#title').value=''
    const author = document.querySelector('#author').value='';
    const isbn = document.querySelector('#isbn').value='';
}

UI.prototype.showAlert = function(messege,className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(messege));


    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div,form);
    
    setTimeout(() => {
        document.querySelector('.alert').remove();
    },3000);
}

UI.prototype.deleteBook = function(target){
    if (target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}


document.querySelector('#book-form').addEventListener('submit', (e) => {

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title,author,isbn);
    const ui = new UI();

    if(title === '' || author === '' || isbn === '') {

        ui.showAlert('Please fill in all fields','error');
    } else {
        ui.addBookToList(book);
        ui.clearData();
        ui.showAlert('Book added','success');
        console.log(title,author,isbn);
    }
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', (e) => {
    const target = e.target;
    const ui = new UI();
    ui.showAlert('Book Removed','success')
    ui.deleteBook(target);
})

