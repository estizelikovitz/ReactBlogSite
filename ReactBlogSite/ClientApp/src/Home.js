import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';


const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            const { data } = await axios.get('/api/blogsite/getblogs');

            setBlogs(data);
        }
        getBlogs();
    }, []);

    return (

    <div className="row">

        <div className="col-md-8">

            <h1 className="my-4">
                    Esti's Blog
                    <br/>
                <small>Read on...</small>
            </h1>
                <div>

                    {blogs.map(b => <Post blog={b} key={b.id} />)}
            </div>

            <ul className="pagination justify-content-center mb-4">
                <li className="page-item">
                    <div className="page-link" href="/home/index?page=2">&larr; Older</div>
                </li>
            </ul>

        </div>
    </div>

    )
}
export default Home;