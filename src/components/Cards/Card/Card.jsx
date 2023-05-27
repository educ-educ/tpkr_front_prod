import './Card.css'

const Card = ({card}) => {

    
    return (
        <div className='card'>
            <img src='https://polit.ru/media/photolib/2013/03/05/0Aa-8nRHmRE_1362496755.jpg'></img>
            <div className='card__container'>
                <h1>{card.name}</h1>
                <p>Описание курса: {card.desc}</p>
            </div>
        </div>
    )
}

export default Card;