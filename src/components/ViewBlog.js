import { useEffect, useState } from 'react';

const MakeBlog = ()=> {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      const response = await fetch("https://back-end-rest-qr42cwn02-nonnimaeju5.vercel.app/p/blogs");
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    }
    getData();
  },[])
  return (
    <>
      here is something:
      { blogs.map((blog)=>{
        return (
        <>
        <h1>{blog.title}</h1>
        <img src={blog.picture_url}></img>
        <p>{blog.text}</p>
        </>
      ) } ) }
    </>
  )
}

export default MakeBlog;