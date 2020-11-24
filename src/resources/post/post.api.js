const BASE_URL = 'https://conduit.productionready.io/';
//const token = localStorage.getItem('redditApiToken');

export const getPosts = (url) => {
  return window.fetch(`${BASE_URL}${url}`, {
  }).then(response => response.json())
}

export const getPostsByTag = (url) => {
  return window.fetch(`${BASE_URL}${url}`, {
  }).then(response => response.json())
}

export const getTags = (url) => {
  return window.fetch(`${BASE_URL}${url}`, {
  }).then(response => response.json())
}

export const isFavorit = (url) => {
  return window.fetch(`${BASE_URL}${url}`, {
    method: "POST",
  }).then(response => response.json())
}
