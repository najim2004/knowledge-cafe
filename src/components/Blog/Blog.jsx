import PropTypes from 'prop-types';
import vector from '../../assets/images/Vector.svg';

const Blog = ({blog, handleBookmarks, handleReadingTime}) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags}=blog;
    return (
        <div>
            <img className='w-full rounded-lg' src={cover} alt="" />
            <div className='flex justify-between mt-8'>
                <div className='flex gap-6'>
                    <img className='size-[60px]' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-[rgba(17,17,17,0.60)] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-xl font-medium text-[rgba(17,17,17,0.60)]'>{reading_time} min read</p>
                    <button onClick={()=>handleBookmarks(title)}><img className='size-6' src={vector} alt="" /></button>
                </div>
            </div>
            <h2 className="text-[40px] font-bold max-w-[737px] my-4 leading-[64px]">{title}</h2>
            <p className='flex gap-4 text-[rgba(17,17,17,0.60)] text-xl font-medium'>{hashtags.map((hash,idx)=><span key={idx}>#{hash}</span>)}</p>
            <button onClick={()=>handleReadingTime(reading_time)} className='mt-5 text-xl font-semibold underline text-[#6047EC]'>Mark as read</button>
            <hr className='my-[40px] bg-[rgba(17,17,17,0.10)]' />
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}
export default Blog;