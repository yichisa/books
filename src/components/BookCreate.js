import { useState } from "react";

// receiving onCreate prop
function BookCreate({ onCreate }) {
    // input will be defaulting to empty string
    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        // do not want to reload the page/ default behavior
        setTitle(event.target.value);
    }
    // event handler for submitting form
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return (
      <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            {/* input always pairs with onChange */}
            <input value={title} onChange={handleChange}/>
            <button className="button">Create!</button>
        </form>

    </div>
    );
}


export default BookCreate;