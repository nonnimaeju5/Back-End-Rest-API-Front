import { useState } from "react";
import MakeBlog from "./components/MakeBlog";
import ViewBlog from "./components/ViewBlog";

const App = () => {
  const [route, setRoute] = useState("makeBlog");
  
  return (
    <div>
      <button onClick={()=>setRoute("makeBlog")}>makeBlog</button>
      <button onClick={()=>setRoute("viewBlog")}>viewBlog</button>
      {route==="makeBlog" && <MakeBlog/> }
      {route==="viewBlog" && <ViewBlog/> }
    </div>
  )
}
export default App;