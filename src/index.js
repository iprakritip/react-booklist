import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [

  {
    author: "Peter Attia MD",
    title: "Outlive: The Science and Art of Longevity",
    img: "https://images-na.ssl-images-amazon.com/images/I/71IJiOOyb1L._AC_UL900_SR900,600_.jpg",
    id: 1
  },
  {
    author: "Bonnie Garmus",
    title: "Lessons in Chemistry: A Novel",
    img: "https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg",
    id: 2
  }
];



const BookList = () => {
  const someValue = 'jpaitei';
  const displayValue =()=>{
    console.log(someValue);
  }
  return (
    <section className='booklist'>
      
      {books.map((book) => {
        return (
          <Book {...book} key={book.id} displayValue={displayValue} />
        )
      })}
    </section>
  )
}


const Book = (props) => {
  const { img, title, author, displayValue } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author}</h4>
    </article>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);


