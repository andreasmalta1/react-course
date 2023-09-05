import React from "react"
import ReactDOM from "react-dom/client"

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81UIdE+tquL._AC_UL600_SR600,400_.jpg"
    alt="Things We Left Behind"
  />
)
const Title = () => <h2>Things We Left Behind</h2>
const Author = () => <h4>Lucy Score</h4>

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList />)
