import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div>
            <div className="py-[21px] min-w-[411px] flex items-center justify-center bg-[rgba(96,71,236,0.10)] border-[1px] border-[#6047EC] rounded-lg">
                <h2 className="text-[#6047EC] text-2xl font-bold">Spent time on read : {readingTime} min</h2>
            </div>
            <div className="p-[30px] min-w-[411px] flex flex-col gap-4 rounded-lg items-center bg-[rgba(96,71,236,0.10)] mt-6 min-h-[400px]">
            <h3 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h3>
            <hr className='border-black border-dashed w-full border-t-[1px]' />
            {
                bookmarks.map((bookmark,idx) =><div key={idx} className="p-5 bg-white rounded-lg text-[18px] font-semibold">
                <h1 className='max-w-[311px]'>{bookmark.title}</h1>
                </div>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;