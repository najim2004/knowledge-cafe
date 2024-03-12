import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs,setBlog]=useState([]);
    useEffect(()=>{
        fetch('blogs.json',)
            .then(res=>res.json())
            .then(data=>setBlog(data))
    },[])
    return (
        <div className="w-[845px]">
            <h1>Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;