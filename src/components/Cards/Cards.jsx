import './Cards.css'
import Card from './Card/Card.jsx'
import { useState } from 'react'

const Cards = () => {

    const [CardInfo, setCardInfo] = useState([
        { id: 0, name: 'Название', desc: 'блин я такой тупой КЛАС :О' },
        { id: 1, name: 'Название', desc: 'блин я такой тупой КЛАС :О' },
        { id: 2, name: 'Название', desc: 'блин я такой тупой КЛАС :О' },
        { id: 3, name: 'Название', desc: 'блин я такой тупой КЛАС :О' },
        { id: 4, name: 'Название', desc: 'блин я такой тупой КЛАС :О' },
        { id: 5, name: 'Название', desc: 'блин я такой тупой КЛАС :О' },
        { id: 6, name: 'Название', desc: 'блин я такой тупой КЛАС :О' },
        { id: 7, name: 'Название', desc: 'блин я такой тупой КЛАС :О' }
    ])

    return (
        <div className='cards__container'>
            {
                CardInfo.map((value) => <Card key={value.id} card={value} />)
            }
        </div>

    )
}

export default Cards;