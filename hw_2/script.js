/**
 * Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
 */

const newBook = {
    id: Symbol(),
    author: 'Мэттью Джастис',
    title: 'Как на самом деле работают компьютеры',
}
const replayBook = {
    id: Symbol(),
    author: 'Адитья Бхаргава',
    title: 'Грокаем алгоритмы',
}
const deleteBook = {
    id: Symbol(),
    author: 'Кембридж Ха-Джун Чанг',
    title: 'Как устроена экономика',
};

const deleteBook1 = {
    id: Symbol(),
    author: 'Рэй Далио',
    title: 'Принципы',
};


const booksDB = [
    {
        id: Symbol(),
        author: 'Рэй Далио',
        title: 'Принципы',
    },
    {
        id: Symbol(),
        author: 'Кембридж Ха-Джун Чанг',
        title: 'Как устроена экономика',
    },
    {
        id: Symbol(),
        author: 'Танинбаум',
        title: 'Компьютерные сети',
    },
    {
        id: Symbol(),
        author: 'Адитья Бхаргава',
        title: 'Грокаем алгоритмы',
    }
];

class Library {
    #books = [];
    index = null;
    constructor(books) {
        this.#books = books;
    }
    get allBooks() {
        console.log('Список книг');
        this.#books.forEach(book => {
            console.log(`${book.author}: "${book.title}"`);
        });
        console.log('\n');
    }

    addBook(newBookObject) {
        console.log(`Добавляем книгу:   "${newBookObject.title}"`);
        if (!this.hasBook(newBookObject)) {
            this.#books.push(newBookObject);
        } else {
            throw `Книга с названием: '${newBookObject.title}' есть в библиотеке`;
        }

    }
    removeBook(bookObject) {
        console.log(`Удаляем книгу:   "${bookObject.title}"`);
        if (this.hasBook(bookObject)) {
            this.#books.splice(this.index, 1)
        } else {
            throw `Книги с названием: '${bookObject.title}' нет в библиотеке`;
        }
    }

    hasBook(bookObject) {
        return this.#books.some((el, idx) => {
            this.index = idx;
            return bookObject.title.trim().toLowerCase() === el.title.trim().toLowerCase();
        });
    };
}


const libEx = new Library(booksDB);
libEx.allBooks;

libEx.addBook(newBook);
libEx.allBooks;

libEx.removeBook(deleteBook1)
libEx.allBooks;

libEx.removeBook(deleteBook)
libEx.allBooks;

//Удаления с ошибкой отсутствия книги в библиотеке
libEx.removeBook(deleteBook1)
libEx.allBooks;

//Добавление с ошибкой наличия книги в библиотеке
// libEx.addBook(replayBook);
// libEx.allBooks;


