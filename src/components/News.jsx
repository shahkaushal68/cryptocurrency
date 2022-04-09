import React, { useState } from "react";
import { Col, Row, Card, Typography, Avatar, Select } from "antd";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptoQuery } from "../services/cryptoApi";
import moment from "moment";

const { Title, Text } = Typography;
const { Option } = Select;
const demoImage =
  "https://images.news18.com/ibnlive/uploads/2022/01/bitcoin-16411059783x2.png?impolicy=website&width=510&height=356";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrecny");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptoQuery(100);

  console.log("cryptoNews", cryptoNews);
  console.log("data", data);

  if (!cryptoNews?.value) return "Loading...";
  return (
    <Row gutter={[16, 16]} className="crypto-news">
      {!simplified && (
        <Col span={24}>
          <Title value={4}>All Crypto related news</Title>
        </Col>
      )}
      {!simplified && (
        <Col span={24}>
          <Select
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option defult value="Cryptocurrency">
              Cryptocurrency
            </Option>
            {data?.data?.coins.map((coin, index) => (
              <Option key={index} value={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news, index) => (
        <Col className="gutter-row" xs={24} sm={12} md={8} key={index}>
          <Card size="small" className="news-card" hoverable>
            <a href={news.url}>
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="news"
                  className="news-image"
                />
              </div>
              <p>
                {news.description > 10
                  ? `${news.description.substring(0, 10)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={news?.provider[0]?.image?.thumbnail?.contentUrl}
                  />
                  <Text className="provider-name">
                    {news?.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
