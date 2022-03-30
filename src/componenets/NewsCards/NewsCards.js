import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import { Grow, Grid, Typography } from '@material-ui/core';

const NewsCards = ({ articles,currentArticle }) => {
  return (
    <Grow in>
        <Grid container alignItems='stretch' spacing={3}>

        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={4} style= {{display: "flex"}}>
            <NewsCard 
            article ={article}
            currentArticle = {currentArticle}
            index = {i}
            />
          </Grid>
        ))}

        </Grid>
    </Grow>
  )
}

export default NewsCards;