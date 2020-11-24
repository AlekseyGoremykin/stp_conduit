import React from 'react';
import { Link } from "react-router-dom";

import './new-article-page.css';
import Header from '../../components/header/header';

function NewArticlePage() {

  return (
    <>
      <Header></Header>
      <div className="createArticleFormWrapper">
        <div className="createArticleForm">
          <input className="createArticleFormTitle" type="text" placeholder="Article title"/>
          <input className="createArticleFormInput" type="text" placeholder="What's this article about?"/>
          <textarea className="createArticleFormTextarea" name="" id="" cols="30" rows="5" placeholder="Write your article (in markdown)"></textarea>
          <input className="createArticleFormInput" type="text" placeholder="Enter tags"/>
          <div className="createArticleFormButtonWrapper">
            <button className="createArticleFormButton">Publish Article</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArticlePage;
