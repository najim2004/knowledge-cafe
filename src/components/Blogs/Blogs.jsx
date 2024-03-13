import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks}) => {
    const [blogs,setBlog]=useState([]);
    useEffect(()=>{
        fetch('blogs.json',)
            .then(res=>res.json())
            .then(data=>setBlog(data))
    },[])
    return (
        <div className="w-[845px]">
            {
                blogs.map(blog=><Blog key={blog.id} handleBookmarks={handleBookmarks} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookmarks:PropTypes.func.isRequired
}
export default Blogs;