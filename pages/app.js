let bookName = document.querySelectorAll('.book-name')

/*using the forEach to get multiple element 
after converting the nodeList/ HTML COLLECTION TO AN ARRAY 
*/
Array.from(bookName).forEach(function (book){
	book.textContent += '(book title)';
});


// using for loop to select multiple element in the DOM
for (let i = 0; i < bookName.length; i++) {
	bookName[i].textContent += ' (book title)';
}