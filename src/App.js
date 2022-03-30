import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./componenets/NewsCards/NewsCards";


const alanKey = "04e6ea6a23ce00fec1067ff5b9a839f82e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
   const [newsArticles, setNewsArticles] = useState([]);
   const [currentArticle, setCurrentArticle] = useState(-1);


    useEffect(()=>{
        alanBtn({
            key : alanKey,
            onCommand : ( {commandData, articles} ) => {
                if(commandData === 'newHeadLines'){
                    setNewsArticles(articles);
                } else if(commandData === 'readHighlights'){
                    setCurrentArticle((prevArticle) => prevArticle + 1 );
                }
            }
        })
    }, []);

    return (
        <div>
            <div className="header">
               <h1 className="header-title">Alan AI</h1>
            </div>
            <NewsCards articles = {newsArticles} currentArticle = {currentArticle}/>
        </div>
    )
}

export default App;