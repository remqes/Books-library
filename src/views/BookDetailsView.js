import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { isAuthenticated } from "../services/authService"
import { getBookById } from "../services/bookService"
import { Link } from "react-router-dom"

const BookDetailsView = () => {
    const user = isAuthenticated()
    const [book, setBook] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getBook();
    }, []);

    const getBook = async () => {
        const response = await getBookById(id)
        setBook(response.data)
    }

    return (
        <div className="container mt-5">
            <h2>{book.title}</h2>
            <h2>{book.author}</h2>
            {user.role === 'ADMIN' && (
                <Link to={`/editBook/${book._id}`} className="btn btn-warning">Edytuj</Link>
            )}
            
        </div>
        
    )
}

export default BookDetailsView