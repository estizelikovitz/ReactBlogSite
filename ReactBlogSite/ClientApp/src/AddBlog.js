import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { produce } from 'immer';


const AddBlog = () => {

    const [blog, setBlog] = useState({title:'', content:''});
    const history = useHistory();

    const onTextChange = (e) => {
        const newBlog = produce(blog, draft => {
            draft[e.target.name] = e.target.value;
        });

        setBlog(newBlog);
    }

    const onSubmitClick = async () => {
        await axios.post('/api/blogsite/addblog', blog);
        history.push('/');
    }

    const { title, content } = blog;

    return (

        <div className="container">
            <main role="main" className="pb-3">
                <div className="row">
                    <div className="col-md-8 offset-md-2 jumbotron">
                        <div>
                            <input type="text" className="form-control" value={title} onChange={onTextChange}  placeholder="Title" name="title" />
                            <br />
                            <textarea name="content" placeholder="What's on your mind?" value={content} onChange={onTextChange} className="form-control" rows="20"></textarea>
                            <br />
                            <button className="btn btn-primary" onClick={onSubmitClick}>Submit Post!</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default AddBlog;