import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookCard = ({ obj }) => {

    return (
        <Card className='bookCard' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>
                    {obj.author}
                </Card.Text>
                <Link className='btn btn-outline-primary' to={`/book/${obj._id}`}>
                    Zobacz więcej
                </Link>
            </Card.Body>
        </Card>
    )
}

export default BookCard