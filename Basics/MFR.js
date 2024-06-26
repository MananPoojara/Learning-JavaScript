// Map
// Filter
// Reduce


// its all about making foreach useful
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newnums = []
mynums.forEach((items) => {
    if (items > 5) {
        newnums.push(items)
    }
})
// we can see in foreach we have to give callback that has logic but in foreach we can't return items
console.log(newnums);

// filter
const newb = mynums.filter((i) => {
    return i > 5
})
console.log(newb);
//we can see difference in line of code


//example
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        publishYear: 1925,
        edition: "First Edition",
        language: "English",
        pages: 180
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        publishYear: 1960,
        edition: "Pulitzer Prize Edition",
        language: "English",
        pages: 281
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        publishYear: 1949,
        edition: "First Edition",
        language: "English",
        pages: 328
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        publishYear: 1813,
        edition: "Vintage Classics",
        language: "English",
        pages: 279
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Coming-of-Age",
        publishYear: 1951,
        edition: "Modern Library Edition",
        language: "English",
        pages: 224
    }
];

//user said i need romance genra book
const user = books.filter((book) => {
    return book.genre === 'Romance'
})

console.log(user);