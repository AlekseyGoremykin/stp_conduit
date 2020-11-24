import React, {useEffect} from 'react';
import './post.css';
import * as postActions from "../../resources/post/post.actions";
import { useDispatch, useSelector } from "react-redux";
import * as postSelectors from "../../resources/post/post.selectors";

function Post(props) {

  const dispatch = useDispatch();
  const posts = useSelector(postSelectors.selectPosts);
  const date = new Date(props.post.updatedAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatDate = date.toLocaleDateString("en-US", options);

  const addLike = async (post) => {
    await dispatch(postActions.isFavorit(`/api/articles/${post.slug}/favorite`));
  }


  return (
    <>
      <div className="postWrapper">
        <div className="postInfo">
          <div className="authorInfoWrapper">
            <div>
              <img className="postAuthorAvatar" src={props.post.author.image} alt=""/>
            </div>
            <div>
              <p className='postAuthor'>{props.post.author.username}</p>
              <p className='postDate'>{formatDate}</p>
            </div>
          </div>
          <div className="likes" onClick={() => {addLike(props.post)}}>
            <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M 15 7 C 8.9424416 7 4 11.942442 4 18 C 4 22.096154 7.0876448 25.952899 10.851562 29.908203 C 14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547 C 28.751621 37.869472 33.384518 33.863507 37.148438 29.908203 C 40.912356 25.952899 44 22.096154 44 18 C 44 11.942442 39.057558 7 33 7 C 29.523564 7 26.496821 8.8664883 24 12.037109 C 21.503179 8.8664883 18.476436 7 15 7 z M 15 10 C 17.928571 10 20.3663 11.558399 22.732422 15.300781 A 1.50015 1.50015 0 0 0 25.267578 15.300781 C 27.6337 11.558399 30.071429 10 33 10 C 37.436442 10 41 13.563558 41 18 C 41 20.403846 38.587644 24.047101 34.976562 27.841797 C 31.68359 31.30221 27.590312 34.917453 24 38.417969 C 20.409688 34.917453 16.31641 31.30221 13.023438 27.841797 C 9.4123552 24.047101 7 20.403846 7 18 C 7 13.563558 10.563558 10 15 10 z"></path>
            </svg>
            {props.post.favoritesCount}
          </div>
        </div>
        <h3 className='postTitle'>
          {props.post.title}
        </h3>
        <p className='postDescription'>
          {props.post.description}
        </p>
        <p className='readMore'>
          Read more...
        </p>
      </div>
    </>
  );
}

export default Post;
