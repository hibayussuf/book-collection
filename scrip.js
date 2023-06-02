const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

bookForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const pagesInput = document.getElementById('pages');

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = parseInt(pagesInput.value);

  if (!title || !author || isNaN(pages)) {
    alert('Please fill in all fields with valid values.');
    return;
  }

  const book = {
    title: title,
    author: author,
    pages: pages
  };

  addBookToList(book);
  resetFormFields();
});

function addBookToList(book) {
  const bookItem = document.createElement('li');
  bookItem.innerHTML = `
    <span class="title">${book.title}</span>
    <span class="author">by ${book.author}</span>
    <span class="pages">${book.pages} pages</span>
  `;
  bookList.appendChild(bookItem);
}

function resetFormFields() {
  bookForm.reset();
}
