import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
//import format from 'date-fns'


const Comment = ({ comment }) => {
    const { name, text} = comment;


    //const getText = () => {
    //    if (content.Length > 100) {
    //        let part = b.Content.Substring(0, 100);
    //        part += "...";
    //        <p className="card-text">{part}</p>

    //    }
    //    else {
    //        <p className="card-text">{content}</p>

    //    }
    //}
    return (
        <>
            <div className="media mb-4">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>

                    <div className="media-body">
                        <h5 className="mt-0">
                            {name}
                        </h5>
                        {text}
                    </div>
        </div>
        </>

    )
}
export default Comment;