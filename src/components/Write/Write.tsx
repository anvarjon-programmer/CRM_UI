import { useState } from "react";
import ReactQuill from "react-quill";
import Preview from "./Preview";

const Write = () => {
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
  return (
     <section className="w-[90%] md:w-[90%] lg:w-[60%] mx-auto py-[3rem]">
        <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className="text-4xl outline-none w-full"
      />
      <ReactQuill
        theme="bubble"
        value={description}
        onChange={setDescription}
        placeholder="Tell Your Story..."
        className="write my-5"
      />
      <Preview/>
     </section>
  )
}

export default Write