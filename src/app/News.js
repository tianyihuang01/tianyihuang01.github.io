/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import styled from 'styled-components';

import getNewsByName from '../api/getNewsByName';
import HeaderBottom from '../components/HeaderBottom';
import ContainerBottom from '../components/ContainerBottom';
import Source from '../components/Source';
import { PAGE_SIZE } from '../config/constants';

const NewsTitle = styled.a`
  font-weight: 500;
  color: black;
  text-decoration: none;
`;

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: undefined,
    };

    this.setNews = this.setNews.bind(this);
  }

  componentDidMount() {
    this.getNews();
  }

  componentDidUpdate(prevProps) {
    // console.log('prev Props city:', prevProps.city);
    // console.log('this props city:', this.props.city);
    if (prevProps.city.id !== this.props.city.id) {
      // console.log('another news call');
      this.getNews();
    }
  }

  setNews = (result) => {
    // this.clearNews();
    this.setState({ news: result });
  };

  clearNews = () => {
    this.setState({ news: undefined });
  };

  getNews = async () => {
    const cityName = this.formatCity(this.props.city.name);
    const cityQuery = { name: cityName, pageSize: PAGE_SIZE };
    // console.log('News Call', cityQuery);
    const { data } = await getNewsByName(cityQuery);
    if (data.status === 'ok') {
      this.setNews(data);
      // console.log('response:', data);
    }
  };

  shortenText = (text, maxLength) =>
    text.length <= maxLength ? text : text.substring(0, maxLength);

  formatCity = (city) => {
    const formattedCity = city.replace(/\s+/g, '+').toLowerCase();
    return formattedCity;
  };

  render() {
    const { news } = this.state;
    const { city } = this.props;
    // console.log('News Render:', city, news);

    if (!news) {
      return (
        <ContainerBottom>
          <HeaderBottom>News</HeaderBottom>
          LOADING NEWS...
        </ContainerBottom>
      );
    }

    if (news.articles.length === 0) {
      return (
        <ContainerBottom>
          <HeaderBottom>News</HeaderBottom>
          No news found in {city.name}
        </ContainerBottom>
      );
    }

    return (
      <ContainerBottom>
        <HeaderBottom>News</HeaderBottom>
        {news.articles.slice(0, 2).map(({ title, url, publishedAt, source }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <NewsTitle href={url} target="_blank" rel="noreferrer">
              <div>{this.shortenText(title, 50)}...</div>
            </NewsTitle>
            <Source>
              {source.name}&nbsp;
              {this.shortenText(publishedAt, 10)}
            </Source>
            <br />
          </div>
        ))}
        <Source>
          Power by <a href="https://newsapi.org/">News API</a>
        </Source>
      </ContainerBottom>
    );
  }
}

export default News;
