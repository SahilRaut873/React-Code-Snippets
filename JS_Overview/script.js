const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const book = getBook(1);
// book;

// // const title = book.title;
// // const author = book.author;

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// console.log(author, title, genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// const [first, second, ...other] = genres;
// console.log(first, second, other);

// const newGenres = ["epic fantasy", ...genres];
// newGenres;

// const updatedBook = {
//   ...book,
//   // Adding a new property
//   moviePublicationDate: "2001-12-19",

//   // Overwriting an existing property
//   pages: 120,
// };
// updatedBook;

// // function getYear(str){
// //     return str.split("-")[1];
// // }
// //console.log(getYear)

// const getYear=(str)=>str.split("-")[0];
// console.log(getYear(publicationDate));

// const summary = `${title} is a book is ${pages} page this books is written by ${author} and ${getYear(publicationDate)
// }. The book has ${hasMovieAdaptation ? "" :"not"} been adapted movie `;
// summary;

// const pagesrange = pages > 1000 ? "Over Thousand" : "less than thousand";
// pagesrange;
// console.log(pagesrange);

// // function getYear(str){
// //     return str.split("-")[1];
// // };

// // const getYear=(str)=>str.split("-")[0];
// //console.log(getYear(publicationDate));
// // console.log(getYear(publicationDate))

// console.log(true && "Welcome");
// console.log(false && "Welcome");

// console.log(true || "Hii");
// console.log(false || "HIi")

// //falsy
// console.log("sahil" && "Welcome")
// console.log(0 && "Welcome");

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong=book.reviews.librarything.reviewsCount || "No data";
// countWrong;

// const count=book.reviews.librarything.reviewsCount ?? "no data";
// count

// const books=getBooks();
// books;

// const x=[1,2,3,4,5].map((ele)=> ele*5);
// console.log(x);

// const titles=books.map((book)=> book.title);
// titles;

// const longBooks=books.filter((book)=>book.pages >500);
// longBooks;

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((dat) => console.log(dat));

async function getApi() {
  const res=await fetch("https://jsonplaceholder.typicode.com/todos");
  const data= await res.json();
  console.log(data);
  
}
getApi();
console.log("Jon")