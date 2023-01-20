import { useState } from "react";

const MakeBlog = ()=>{
  const [text,setText] = useState("");
  const [title, setTitle] = useState("");
  const submitBlog = (e)=>{
    const bodyData = {
      title,
      text
    }
    fetch(
      "https://back-end-rest-qr42cwn02-nonnimaeju5.vercel.app/p/blogs",
      {
        method:"POST",
        body: JSON.stringify(bodyData),
        headers:{ 'content-type':'application/json', 'accept':'application/json' } 
      }
    )
      .then((r)=>r.json())
      .then(console.log);
  }
  return (
    <div>
      Make a blog:<br/>
      Title:<input value={title} onChange={e=>setTitle(e.target.value)} type="text"></input><br/>
      Main text:<textarea value={text} onChange={(e)=>setText(e.target.value)}></textarea>
      <button onClick={submitBlog}>submit your blog</button>
    </div>
  )
}
export default MakeBlog;