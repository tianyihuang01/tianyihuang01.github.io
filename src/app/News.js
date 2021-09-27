import React, { Component } from 'react';
import styled from 'styled-components';

import getNewsByName from '../api/getNewsByName';
import HeaderBottom from '../components/HeaderBottom';
import ContainerBottom from '../components/ContainerBottom';
import Source from '../components/Source';
import { PAGE_SIZE } from '../config/constants';

const NewsContainer = styled.div`
  margin-bottom: 10px;
`;

const TitleContainer = styled.a`
  text-decoration: none;  
`;

const Title = styled.div`
  font-weight: 500;
  color: black;  
  overflow: hidden;
  line-height: 1.5em;
  height: 3em;
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
    if (prevProps.city.id !== this.props.city.id) {
      this.getNews();
    }
  }

  setNews = (result) => {
    this.setState({ news: result });
  };

  clearNews = () => {
    this.setState({ news: undefined });
  };

  getNews = async () => {
    const cityName = this.formatCity(this.props.city.name);
    const cityQuery = { name: cityName, pageSize: PAGE_SIZE };
    const { data } = await getNewsByName(cityQuery);
    if (data.status === 'ok') {
      this.setNews(data);
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
          <NewsContainer key={index}>
            <TitleContainer href={url} target="_blank" rel="noreferrer">
              <Title>{title}</Title>
            </TitleContainer>
            <Source>
              {source.name}&nbsp;
              {this.shortenText(publishedAt, 10)}
            </Source>
          </NewsContainer>
        ))}
        <Source>
          Power by{' '}
          <a href="https://newsapi.org/" target="_blank" rel="noreferrer">
            News API
          </a>
        </Source>
      </ContainerBottom>
    );
  }
}

export default News;
