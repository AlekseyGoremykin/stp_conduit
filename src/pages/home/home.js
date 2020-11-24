import React, {useEffect} from 'react';

import './home.css';
import Header from '../../components/header/header';
import Title from '../../components/title/title';
import NavMenu from "../../components/navMenu/navMenu";
import Post from "../../components/post/post";
import Tags from "../../components/tags/tags";

import * as postActions from "../../resources/post/post.actions";
import { useDispatch, useSelector } from "react-redux";
import * as postSelectors from "../../resources/post/post.selectors";

function Home() {

  const dispatch = useDispatch();
  const tags = useSelector(postSelectors.selectTags);
  const posts = useSelector(postSelectors.selectPosts);

  const [page, setPage] = React.useState(0);
  const postsQuantity = 10;

  useEffect( () => {
    const fetchTags = async () => {
      await dispatch(postActions.getTags('api/tags'));
    }
    fetchTags();
  }, [dispatch])

  useEffect( () => {
    const fetchPosts = async () => {
      await dispatch(postActions.getPosts(`api/articles?limit=${postsQuantity}&offset=${page}`));
    }
    fetchPosts();
  }, [dispatch, page])

  const getPageNumber = (e) => {
    let page = e.target.innerHTML;
    let postsNumber = (page * postsQuantity) - postsQuantity;
    setPage(postsNumber);
  }

  return (
    <>
      <Header></Header>
      <Title></Title>
      <NavMenu></NavMenu>
      <div className="content">
        <div>
          {posts.articles?.map(post => {
            return(
              <Post post={post}></Post>
            )
          })}
        </div>
        <div className="homePageTags">
          <Tags tags={tags} url={`api/articles?limit=${postsQuantity}&offset=${page}`}></Tags>
        </div>
      </div>
      <div className="pagination">
        <button className="paginationBtn" onClick={getPageNumber}>1</button>
        <button className="paginationBtn" onClick={getPageNumber}>2</button>
        <button className="paginationBtn" onClick={getPageNumber}>3</button>
        <button className="paginationBtn" onClick={getPageNumber}>4</button>
        <button className="paginationBtn" onClick={getPageNumber}>5</button>
        <button className="paginationBtn" onClick={getPageNumber}>6</button>
        <button className="paginationBtn" onClick={getPageNumber}>7</button>
        <button className="paginationBtn" onClick={getPageNumber}>8</button>
        <button className="paginationBtn" onClick={getPageNumber}>9</button>
        <button className="paginationBtn" onClick={getPageNumber}>10</button>
      </div>
    </>
  );
}

export default Home;
