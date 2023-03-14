import { useState } from 'react';

function useBook() {
  const [book, setBook] = useState({
    title: null,
    author: null,
    location: null,
    dueDate: null,
    email: false,
    SMS: false,
    calendar: false,
    image: null,
  });

  const onBookChange = (modifier) => (event) => {
    switch (modifier) {
      case "title":
        console.log(modifier);
        console.log(event.target.value);
        setBook({ ...book, title: event.target.value });
        break;
      case "author":
        console.log(modifier);
        console.log(event.target.value);
        setBook({ ...book, author: event.target.value });
        break;
      case "location":
        console.log(modifier);
        console.log(event.target.value);
        setBook({ ...book, location: event.target.value });
        break;
      case "dueDate":
        console.log(modifier);
        console.log(event.target.value);
        setBook({ ...book, dueDate: event.target.value });
        break;
      case "email":
        console.log(modifier);
        setBook({ ...book, email: !book.email });
        break;
      case "SMS":
        console.log(modifier);
        setBook({ ...book, SMS: !book.SMS });
        break;
      case "calendar":
        console.log(modifier);
        setBook({ ...book, calendar: !book.calendar });
        break;
      case "image":
        console.log(modifier);
        setBook({ ...book, image: URL.createObjectURL(event.target.files[0]) });
        break;
      default:
        console.log("Invalid book change");
        break;
    }
  };

  const saveBook = () => {
    setBook({ ...book });
    console.log(book);
  };

  return {
    book,
    onBookChange,
    saveBook,
  };
}

export default useBook;