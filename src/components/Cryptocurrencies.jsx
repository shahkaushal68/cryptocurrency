import { Card, Col, Input, Row, Space } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptoListing, isLoading } = useGetCryptoQuery(count);

  //console.log("cryptoListing", cryptoListing);

  const [cryptos, setCryptos] = useState([]);

  const [inputTerm, setInputTerm] = useState("");

  //console.log("cryptos-data", cryptoListing);
  //console.log("cryptos", cryptos);

  const seartchData = () => {
    if (cryptos) {
      const filterData = cryptoListing?.data?.coins.filter((coin) =>
        coin.name.toLowerCase().includes(inputTerm.toLocaleLowerCase())
      );
      setCryptos(filterData);
    }
  };

  useEffect(() => {
    seartchData();
  }, [cryptoListing, inputTerm]);

  const { Search } = Input;

  if (isLoading) return "Loading...";

  return (
    <>
      {!simplified && (
        <Row style={{ marginBottom: "15px", textAlign: "center" }}>
          <Col span={12} offset={6}>
            <div className="search-crypto">
              <Search
                placeholder="search Cryptocurrenies"
                onChange={(e) => setInputTerm(e.target.value)}
              />
            </div>
          </Col>
        </Row>
      )}
      <Row gutter={[16, 16]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.uuid}>
            <Link to={`/crypto/${crypto.uuid}`}>
              <Card
                title={`${crypto.rank} - ${crypto.name}`}
                extra={<img src={crypto.iconUrl} className="crypto-image" />}
                hoverable
              >
                <p>Price: {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
