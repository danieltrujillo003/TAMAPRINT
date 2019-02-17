import { POST_NEW_ARTICLE } from "./types";

export const postNewArticle = articleData => dispatch => {
  
    fetch("http://localhost:3000/articulos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        articleData
      })
    })
      .then(res => res.json())
      .then(newArticle => {
        dispatch({
          type: POST_NEW_ARTICLE,
          payload: newArticle
        });
        console.log("New article added: ");
      })
  }
