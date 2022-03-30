import React, {useState, useEffect, createRef} from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderBottom: '15px solid white'
}
const styleForCurrentArticle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderBottom: '15px solid green'
}
const imageIcon = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png';

const NewsCard = ({ article, index, currentArticle }) => {
  const[elRefs, setElRefs] =useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 20) ;
  
 useEffect(()=>{
       window.scroll(0, 0);
       setElRefs((refs) => Array(20).fill().map(( _ , j ) => refs[j] || createRef()));
 }, []);

 useEffect(() => {
       if(index === currentArticle && elRefs[currentArticle]){
         scrollToRef(elRefs[currentArticle]);
       }

 }, [index, currentArticle, elRefs]);

  return (
    <Card ref={elRefs[index]}  style={ currentArticle == index ? styleForCurrentArticle : style}>
      <CardActionArea href={article.url} target="_blank" >
        <CardMedia image={article.urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} style={{ height: "250px"}} />
        <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
          <Typography variant="body2" color="textSecondary" component="h2">
             {(new Date(article.publishedAt)).toLocaleDateString()} - {(new Date(article.publishedAt)).toLocaleTimeString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{article.source.name}</Typography>
        </div>
        <Typography style={{ padding: '0 16px' }} gutterBottom variant="h5">{article.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{article.description}</Typography>
        </CardContent>
        <CardActions style={{ padding: '0 16px 8px 16px', display: 'flex', justifyContent: 'space-between'}}>
          <Button size='small' color='primary'>Learn More</Button>
          <Typography variant="h5" color="textSecondary">{index + 1}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default NewsCard