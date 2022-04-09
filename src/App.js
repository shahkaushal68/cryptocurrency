import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  Homepage,
  Navbar,
  News,
} from "./components";
import { Layout, Space, Typography } from "antd";

const { Sider, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout>
      <Sider>
        <Navbar />
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Content>
        <Footer>
          <Title level={5} style={{ textAlign: "center" }}>
            Cryptoverse <br />
            All Rights Reserverd <br />
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </Title>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
