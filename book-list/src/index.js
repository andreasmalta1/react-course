import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src="./images/book1.jpg" alt="Things We Left Behind" />
const Title = () => <h2>Things We Left Behind</h2>
const Author = () => <h4>Lucy Score</h4>

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList />)
