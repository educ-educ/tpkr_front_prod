
import './Img.scss';

const Img = ({src, classes = [], alt}) => {
	return (
		<img src={src} className={classes.join(' ')} alt={alt}/>
	)
}
export default Img;
