import {Link, useLoaderData, Form} from 'react-router-dom'
import Header from '../components/Header';
import '../Style.css'

function Show(props) {
  const data=useLoaderData()
  return (
    <div>
      <Header />

      <Form className="frm-show" method="post" action={`/update/${data.id}`}>
        <h2 style={{ textAlign: "center", color: "#d9ec6c" }}>
          Update the Vocabulary
        </h2>
        <div className="update-field">
          <label>Vocab</label>
          <input
            type="text"
            name="vocab"
            placeholder="vocab"
            defaultValue={data.vocab}
          />
        </div>

        <div className="update-field">
          <label>Translation</label>
          <input
            type="text"
            name="translation"
            placeholder="translation"
            defaultValue={data.translation}
          />
        </div>
        <div className="update-field">
          <label>pronounciation</label>
          <input
            type="text"
            name="pronounciation"
            placeholder="pronounciation"
            defaultValue={data.pronounciation}
          />
        </div>
        <div className="update-field">
          <label>Type</label>
          <input
            type="text"
            name="type"
            placeholder="type"
            defaultValue={data.type}
          />
        </div>

        <button className="btn-update">Update Vocabulary</button>
      </Form>

      <Form className="frm-delete" method="post" action={`/delete/${data.id}`}>
        <h2>Delete Vocabulary</h2>
        <button className="btn-delete">Delete</button>
      </Form>
    </div>
  );
}

export default Show;
