import { useEffect, useState } from "react";
import { Code } from "./components/Code";
import { Markdown } from "./components/Markdown";
import welcome from './content/docs/welcome.md'

function App() {
  const [content,setContent]=useState(``)
  useEffect(()=>{
    fetch(welcome).then((res)=>{
      return res.text()
    }).then((data)=>{
      console.log(data);
      setContent(data)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className="App" >
      <Code code="System.out.println('hello')" />
      <Markdown md={content}/>
    </div>
  );
}

export default App;
