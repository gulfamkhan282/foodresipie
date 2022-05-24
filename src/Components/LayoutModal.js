import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Breadcrumb,
  Typography,
  Row,
  PageHeader,
  Col,
  Divider,
  Image,
  Button,
} from "antd";
import FormData from "./FormData";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  VideoCameraOutlined,
  Icon,
  HomeOutlined,SettingFilled
} from "@ant-design/icons";
import {
  StyledMain,
  StyledTitle,
  StyledImage,
  Heading,
  ViewButton,
  ViewModal,
  LoaderSpin,
} from "./StyledComponents";
import myImage from "./Images/Cooking-Recipe.png";
import LoadingSpin from "react-loading-spin";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
const { Header, Content, Footer, Sider } = Layout;

const LayoutModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  const [state, setState] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState(null);

  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(false);
  const APP_ID = "566c7570";
  const APP_KEY = "7e685454b5402ace1b51aa13957bf81a";

  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };

  const itemsdata = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];
  useEffect(() => {
    if (!isModalVisible) {
      setEditData(null);
    }
  }, [isModalVisible]);
  const { Title } = Typography;
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getRecipe = async (e) => {
    setLoading(true);
    // const recipeName = e.target.elements.recipeName.value;
    // e.preventDefault();
    // console.log(e);
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await api_call.json();
    if (data.hits) {
      setRecipe(data.hits);
      setLoading(false);
    }
  };
  const handleChange = (data) => {
    // console.log(handleChange);
  };
  const handleData = (data) => {
    // console.log(data);
  };

  console.log(editData);

  return (
    <Router>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <Link to="/">
            <div className="logo" />
          </Link>
          {!collapsed && (
            <Link to="/">
              <img
                src={myImage}
                style={{ width: "100px", height: "100px", margin: "17px 41px" }}
                alt="logo"
              />
            </Link>
          )}
          {collapsed && (
            <img
              src={myImage}
              style={{ width: "50px", height: "50px", margin: "17px 17px" }}
              alt="logo"
            />
          )}
          <>
            {!collapsed && (
              <StyledMain
                style={{ backgroundColor: "inherit", color: "white" }}
              >
                <Menu.Item key={1}>
                  <Link to="/About">
                    <span>About</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key={2}>
                  <Link to="/Contact">
                    <span>Contact</span>
                  </Link>
                </Menu.Item>
              </StyledMain>
            )}
            {collapsed && (
              <StyledMain
                style={{ backgroundColor: "inherit", color: "white" }}
              >
                <Menu.Item key={1}>
                  <Link to="/">
                  <HomeOutlined />
                  </Link>
                </Menu.Item>
                <Menu.Item key={2}>
                  < SettingFilled />
                </Menu.Item>
              </StyledMain>
            )}
          </>
        </Sider>
        <Layout className="site-layout">
          {/* <StyledTitle
            className="site-page-header"
            title="Recipe Search"
            subTitle="Taste Foods"
          /> */}

          <Heading
            className="site-layout-background"
            style={{
              padding: "44px",
            }}
          >
            <PieChartOutlined />
            React Xoverchief
          </Heading>

          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Link to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Link>
              <Link to="/">
                <Breadcrumb.Item>Recipe</Breadcrumb.Item>
              </Link>
            </Breadcrumb>
            <FormData getRecipe={getRecipe} query={query} setQuery={setQuery} />
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Routes>
                <Route path="/layoutModal"  element={<LayoutModal />} />
                <Route path="/about"  element={<About />} />
                <Route path="/contact"  element={<Contact />} />
              </Routes>
              <div
                className="spinner"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "inherit",
                  // backgroundColor: "white",
                }}
              >
                {loading && (
                  <LoadingSpin
                    duration="2s"
                    width="15px"
                    timingFunction="ease-in-out"
                    direction="alternate"
                    size="200px"
                    primaryColor="#3a80ba"
                    secondaryColor="#333"
                    numberOfRotationsInAnimation={2}
                  />
                )}
              </div>
              <Row
                className="recipe-box"
                style={{
                  display: "grid",
                  gridTemplateColumns: "  300px 300px 300px 300px ",
                  justifyContent: "space-around",
                  borderRadius: "17px",
                  rowGap: "40px",
                }}
              >
                {/* {dataTest(recipes)} */}

                {!loading &&
                  recipe &&
                  recipe.map((data) => {
                    return (
                      <div onClick={() => handleData(data)}>
                        <StyledImage
                          onClick={() => handleChange(data)}
                          src={data["recipe"].image}
                        />

                        <ViewButton
                          type="primary"
                          onClick={() => {
                            setIsModalVisible(!isModalVisible);

                            setEditData(data);
                          }}
                        >
                          View Recipe
                        </ViewButton>

                        <Button
                          type="primary"
                          onClick={() => setPreviewVisible(!isPreviewVisible)}
                        ></Button>
                        <Title level={3}>{data["recipe"]["label"]}</Title>
                        <Title level={5}>{data["recipe"]["source"]}</Title>
                        <Title level={5}>{data["recipe"]["dietLabels"]}</Title>
                      </div>
                    );
                  })}
                {editData && (
                  <ViewModal
                    footer={
                      <>
                        <Button onClick={handleCancel}>Cancel</Button>
                      </>
                    }
                    title="Recipe description"
                    centered
                    visible={isModalVisible}
                    onCancel={handleCancel}
                  >
                    <Image src={editData["recipe"].image} />
                    <Title level={3}>{editData["recipe"]["label"]}</Title>
                    <Title level={5}>{editData["recipe"]["source"]}</Title>
                    <Title level={5}>
                      Calories :{editData["recipe"]["calories"]}
                    </Title>

                    <Title level={5}>{editData["recipe"]["cuisineType"]}</Title>
                  </ViewModal>
                )}
              </Row>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            React Xoverchief ©2022 Created by Food UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default LayoutModal;
