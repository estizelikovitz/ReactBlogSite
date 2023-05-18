import { Link } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';


const Post = ({ blog }) => {
    const { title, content, date, id, comments } = blog;

    //const { id } = useParams();
    

    const getText= () => {
        if (content.Length > 100) {
            let part = b.Content.Substring(0, 100);
            part += "...";
            <p className="card-text">{part}</p>

        }
        else {
            <p className="card-text">{content}</p>

        }
    }
    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">
                        <Link to={`/viewblog/${id}`}>
                        <h1>{title}</h1>
                        </Link>
                    </h2>
                    {getText()}
                    <br/>

                    <small>{comments.length} comment(s)</small>
                    <br/>
                    <Link to={`/viewblog/${id}`} className="btn btn-primary">Read More &rarr;</Link>

            </div>
            <div className="card-footer text-muted">
                    Posted on {date} by
                    <Link to="#"> ez</Link>
            </div>
        </div >
        </>

        )
}
export default Post;