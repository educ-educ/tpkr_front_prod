
import { Link } from 'react-router-dom'
import './Card.scss'

export const Card = ({classes = [], linkAlter, children, width}) => {


	return (
		<Link to={linkAlter} className={`card ${classes}`} style={{width: width}}>
			{children}
		</Link>
	)
}

export default Card