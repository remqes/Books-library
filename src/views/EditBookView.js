import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { deleteBook, editBook, getBookById } from "../services/bookService"

const EditBookView = () => {
    const navigate = useNavigate()
    const { id } = useParams() 
    const [book, setBook] = useState({
        title: "",
        author: "",
        type: "",
        pagesNumber: ""
    })

    useEffect(() => {
        getBookById(id).then(response => setBook(response.data)).catch(error => console.log(error))
    }, [])

    const handleChange = (event) => {
        setBook({
            ...book, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await editBook(book, id)
        setBook({
            title: "",
            author: "",
            type: "",
            pagesNumber: ""
        })
        navigate('/')
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        const choice = window.confirm("Czy na pewno chcesz usunąć książkę?");
        if (!choice) return;
        deleteBook(id)
        navigate("/");
        }

    return(
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="form">
                <h2>
                    Edycja
                </h2>
                <input onChange={handleChange} value={book.title} name="title" type="text" className="form-control" placeholder="Tytuł" />
                <input onChange={handleChange} value={book.author} name="author" type="text" className="form-control" placeholder="Autor" />
                <input onChange={handleChange} value={book.type} name="type" type="text" className="form-control" placeholder="Kategorie" />
                <input onChange={handleChange} value={book.pagesNumber} name="pagesNumber" type="text" className="form-control" placeholder="Liczba stron" />
                <button className="btn btn-outline-dark form-control mb-2">Zapisz</button>
                <button onClick={handleDelete} className="btn btn-outline-danger form-control">Usuń książkę</button>
            </form>
        </div>
    )
}
export default EditBookView