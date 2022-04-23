import './Form.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { createBook } from '../services/bookService'

const AddBookView = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        type: "",
        pagesNumber: ""
    })
    const navigate = useNavigate()
    const handleChange = (event) => {
        setBook({
            ...book, [event.target.name]: event.target.value
    })
}

    const handleSubmit = async (event) => {
        event.preventDefault();
        book.type = book.type.split(',')
        const response = await createBook(book);
        setBook({
            title: "",
            author: "",
            type: "",
            pagesNumber: ""
        })
        navigate('/');
    }

    return (
        <div className="container mt-5">
            <h2>Dodaj książkę</h2>
            <form className="form">
                <input className="form-control" name='title' onChange={handleChange} value={book.title} placeholder="Tytuł" type='text' />
                <input className="form-control" name='author' onChange={handleChange} value={book.author} placeholder="Autor" type='text' />
                <input className="form-control" name='type' onChange={handleChange} value={book.type} placeholder="Kategorie" type='text' />
                <input className="form-control" name='pagesNumber' onChange={handleChange} value={book.pagesNumber} placeholder="Liczba stron" type='text' />
                <button className="btn btn-outline-dark form-control" onClick={handleSubmit}>Dodaj</button>
            </form>
        </div>
    )
}

export default AddBookView