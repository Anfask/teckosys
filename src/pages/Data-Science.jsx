import React from "react";
import './Data-Science.css';
import BookDemo from "./BookDemo";

const Data = () => {
    return (
        <>
            <div className="Data-Science">
                <h1>Data <span>Science</span></h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iusto vel architecto recusandae cumque adipisci exercitationem id, ratione omnis nemo molestias perspiciatis maxime odio. Enim fugiat illum explicabo neque voluptatibus.</h2>
                <p>We are updating soon !</p>
            </div>
            <div className="book">
                <BookDemo/>
            </div>
        </>
    );
};

export default Data;