import { Col, Row, Statistic, Typography } from "antd";
import React from "react";
import { useGetCryptoQuery } from "../services/cryptoApi";
//import millify from "millify";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";

const { Title } = Typography;

const Homepage = () => {
  const { data, isLoading } = useGetCryptoQuery(100);

  const globalStats = data?.data?.stats;
  console.log("globalStats", data);
  if (isLoading) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Status
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Crypto Currency" value={globalStats?.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exachnages"
            value={globalStats?.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={globalStats?.totalMarketCap}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={globalStats?.total24hVolume}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats?.totalMarkets} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Crypto currency in the world
        </Title>
        <Title level={3} className="home-title">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="home-title">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
