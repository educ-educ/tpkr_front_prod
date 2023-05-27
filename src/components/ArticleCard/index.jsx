
import './ArticleCard.scss'
import {Img} from '../Img/index';
import {Card} from '../Card/index';

export const ArticleCard = ({classes = [' '], src, articleText, articleDescription='', data, linkAlter, width}) => {

	return (
		<Card classes={classes} linkAlter={linkAlter !== undefined ? linkAlter : '/notFound'} width={width}>
                <Img src={src} classes={['card-image']} />
                <div className='text-block'>
                    {articleText}
                </div>
                <div className='description-block'>
                    {articleDescription}
                </div>
                <div className='data'>
                    {data}
                </div>
		</Card>
	)
}

export default ArticleCard