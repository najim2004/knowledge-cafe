import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between mt-12'>
            <h1 className="text-[40px] font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;