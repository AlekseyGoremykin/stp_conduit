import React from 'react';
import './tags.css';
import { Link } from "react-router-dom";

import * as postActions from "../../resources/post/post.actions";
import { useDispatch } from "react-redux";


function Tags(props) {

  const dispatch = useDispatch();

  const getTag = async (e) => {
    const tag = e.target.innerHTML;
    await dispatch(postActions.getPostsByTag(`${props.url}&tag=${tag}`));
  }

  return (
    <>
      <div className="tagsWrapper">
        <p className="tagsTitle">
          Popular Tags
        </p>
        {props.tags?.tags?.map((tag, i) => {
          return(
            <Link onClick={getTag} id={i} className="tag">
              {tag}
            </Link>
          )
        })}
      </div>
    </>
  );
}

export default Tags;
