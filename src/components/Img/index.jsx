
import './Img.scss';

export const Img = ({src, classes = [], alt}) => {
	return (
		<img src={src} className={classes.join(' ')} alt={alt}/>
	)
}
