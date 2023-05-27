import './Reviews.css'
import Review from './Review/Review'
import {useState} from 'react'

const Reviews = () => {

    const [ReviewInfo, setReviewInfo] = useState([
        {id: 0, name: 'ваня т', desc: 'аываываыва'},
        {id: 1, name: 'Федя х', desc: 'ыаввыаываыв'},
        {id: 2, name: 'але', desc: 'авыаы'},
        {id: 3, name: 'рав', desc: 'авыаы'},
        {id: 4, name: 'ленпр', desc: 'авыаы'},
        {id: 5, name: 'дддд', desc: 'авыаы'},
    ])

    return (
        <div className='reviews__container'>
            {
                ReviewInfo.map(value => <Review key={value.id} review={value}/>)
            }
        </div>
    )
}

export default Reviews