import { useContext, useState } from 'react';
import { UserContext } from '../contexts/userContext';

function useBook() {
  const { token } = useContext(UserContext);
  const [book, setBook] = useState({
    user_id: token,
    title: null,
    author: null,
    location: null,
    due_date: null,
    alert_time: "",
    email: false,
    SMS: false,
    photo: null,
  });

  const onBookChange = (modifier) => (event) => {
    switch (modifier) {
      case "title":
        setBook({ ...book, title: event.target.value });
        break;
      case "author":
        setBook({ ...book, author: event.target.value });
        break;
      case "location":
        setBook({ ...book, location: event.target.value });
        break;
      case "due_date":
        setBook({ ...book, due_date: event.target.value });
        break;
      case "alert":
        setBook({ ...book, alert_time: event.target.value });
        break;
      case "email":
        setBook({ ...book, email: !book.email });
        break;
      case "SMS":
        setBook({ ...book, SMS: !book.SMS });
        break;
      case "photo":
        setBook({ ...book, photo: URL.createObjectURL(event.target.files[0]) });
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
    setBook,
  };
}

export default useBook;