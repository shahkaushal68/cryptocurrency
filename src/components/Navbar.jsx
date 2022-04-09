import React, { useEffect, useState } from "react";
import cryptocurrency from "../images/cryptocurrency.png";
import { Link } from "react-router-dom";
import { Avatar, Typography, Menu, Button } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    //console.log("activemenu", activeMenu);
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize > 800) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={cryptocurrency} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptocurrency</Link>
        </Typography.Title>
        <Button
          className="menu-control-button"
          type="primary"
          icon={<MenuOutlined />}
          size={24}
          onClick={() => setActiveMenu(!activeMenu)}
        />
        {activeMenu && (
          <Menu theme="dark" width>
            <Menu.Item key="mail" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="cryptocurrencies" icon={<HomeOutlined />}>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item key="exchanges" icon={<HomeOutlined />}>
              <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item key="news" icon={<HomeOutlined />}>
              <Link to="/news">News</Link>
            </Menu.Item>
          </Menu>
        )}
      </div>
    </div>
  );
};

export default Navbar;
