import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';


const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const params = useParams();
    const page = parseInt(params.page) || 1;

    useEffect(() => {
        const getBlogs = async () => {
            const { data } = await axios.get(`/api/blogsite/getblogs?page=${page}`);
            setBlogs(data);
        }
        getBlogs();
    }, [page]);

    return (

        <div className="row">

            <div className="col-md-8">

                <h1 className="my-4">
                    Esti's Blog
                    <br />
                    <small>Read on...</small>
                </h1>
                <div>

                    {blogs.map(b => <Post blog={b} key={b.id} />)}
                </div>

                <ul className="pagination justify-content-center mb-4">
                    <li className="page-item">
                        <Link to={`/page/${page + 1}`}>
                            <div className="page-link" >&larr; Older</div>
                        </Link>
                        <br />
                        <Link to={`/page/${page - 1}`}>
                            <div className="page-link" >&rarr; Newer</div>
                        </Link>
                    </li>
                </ul>

            </div>
        </div>

    )
}
export default Home;