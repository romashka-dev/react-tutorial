import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const firstBook = {
  image: 'https://m.media-amazon.com/images/I/71K+9YJ7VbL._SY522_.jpg',
  title:
    'Dog Man: Big Jim Begins: A Graphic Novel (Dog Man #13): From the Creator of Captain Underpants',
  author: 'Dav Pilkey',
  description:
    'In DOG MAN: BIG JIM BEGINS, discover the origin of our beloved characters from the Dog Man series as they join forces to stop the Space Cuties from destroying the city. Will the past predict the future for Dog Man and his friends? Will goodness and bravery prevail? Can anything happen if you truly believe?',
}

const secondBook = {
  image: 'https://m.media-amazon.com/images/I/41e+dwz5W5L._SY522_.jpg',
  title: 'Melania Hardcover – October 8, 2024',
  author: 'Melania Trump',
  description:
    'Melania is a compelling and inspirational memoir that offers a glimpse into the life of a remarkable woman who has navigated challenges with grace and determination.',
}

const thirdBook = {
  image: 'https://m.media-amazon.com/images/I/81paxLbonYL._SY522_.jpg',
  title: `From Crook to Cook: Platinum Recipes from Tha Boss Dogg's Kitchen (Snoop Dogg Cookbook, Celebrity Cookbook with Soul Food Recipes) (Snoop Dog x Chronicle Books)`,
  author: 'Snoop Dogg',
  description: `Looking for cookbooks with a little more personality? Welcome to tha Boss Dogg's Kitchen.`,
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      >
        <BookDescription description={firstBook.description} />
      </Book>
      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      >
        <BookDescription description={secondBook.description} />
      </Book>
      <Book
        image={thirdBook.image}
        title={thirdBook.title}
        author={thirdBook.author}
      >
        <BookDescription description={thirdBook.description} />
      </Book>
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  const { image, title, author, children } = props
  return (
    <article className="book">
      <img src={image} alt={title} width={192} height={285} />
      <h2>{title}</h2>
      <h2>{author}</h2>
      {children}
    </article>
  )
}

const BookDescription = ({ description }) => <p>{description}</p>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
