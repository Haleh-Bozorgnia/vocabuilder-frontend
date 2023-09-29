import { Form } from "react-router-dom";
import Header from "../components/Header";
import '../Style.css'
function Create(){
    return (
      <div className="container-create">
        <Header />
        <h2 style={{ color: "#574D3E", textAlign: "center", color: "#d9ec6c" }}>
          Create A New Vocabulary
        </h2>
        <Form className="frm-create" method="post" action="/create">
          <input type="text" name="vocab" placeholder="vocab" />
          <input type="text" name="translation" placeholder="translation" />
          <input
            type="text"
            name="pronounciation"
            placeholder="pronounciation"
          />
          <input type="text" name="type" placeholder="type" />
          <button className="btn-create">Create a new vocab</button>
        </Form>
      </div>
    );
}
export default Create