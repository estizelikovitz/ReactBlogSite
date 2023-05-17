import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import Comment from './Comment';
//import format from 'date-fns/format';


const MostRecent = () => {

    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [blogId, setBlogId] = useState(0);


    const { id } = useParams();
    const history = useHistory();


    useEffect(() => {
        const getBlog = async () => {
            const { data } = await axios.get('/api/blogsite/getmostrecent');
            setBlog(data);
            const { comments } = data;
            setComments(comments);
            setBlogId(id);
        }
        getBlog();
    }, []);

    const onSubmitClick = async () => {
        await axios.post('/api/blogsite/addcomment', { name, text, blogId, blog });
        //history.push('/');
    }

    const onNameChange = (e) => {
        const newName = e.target.value;

        setName(newName);
        console.log(name);
    }

    const onTextChange = (e) => {
        const newText = e.target.value;

        setText(newText);
        console.log(text);
    }

    const { title, content, date } = blog;

    return (
        <>
            <main role="main" className="pb-3">

                <div className="row">

                    <div className="col-lg-8">
                        <h1 className="mt-4">{title}</h1>
                        <p className="lead">
                            by
                            <a href="#">Esti Zelikovitz</a>
                        </p>

                        <hr />
                        {/*<p>Posted on {format(new Date(date), 'EEEE LLLL dd-yy')}</p>*/}
                        <p>Posted on {date}</p>

                        <hr />

                        <p>{content}</p>
                        <hr />

                        <div className="card my-4">
                            <h5 className="card-header">Leave a Comment:</h5>
                            <div className="card-body">
                                <form method="post" id="comment">
                                    <input type="hidden" value={id} name="BlogPostId" />
                                    <div className="form-group">

                                        <input id="name" type="text" placeholder="Please enter your name" onChange={onNameChange} className="form-control" name="name" />

                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Type your comment here but remember to be be nice..." id="content" name="text" className="form-control" onChange={onTextChange} rows="3"></textarea>
                                    </div>
                                    <Link to='/'>
                                        <button id="submit-comment" className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                                    </Link>

                                </form>
                            </div>
                        </div>
                        <div>
                            {comments.map(c => <Comment comment={c} key={c.id} />)}
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
export default MostRecent;