import './Review.css'

const Review = ({review}) => {


    return (
        <div>
            <div className='review'>
                <div className='review__box'>
                    <img src='https://polit.ru/media/photolib/2013/03/05/0Aa-8nRHmRE_1362496755.jpg'></img>
                    <div className='review__container'>
                        <h1>{review.name}</h1>
                        <p>{review.desc}</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Review;