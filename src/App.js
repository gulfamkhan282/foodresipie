import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import FormData from "./Components/FormData";
import {
  Row,
  Col,
  Divider,
  Image,
  Button,
  Modal,
  Typography,
  Spin,
  Skeleton,
} from "antd";
import styled from "styled-components";
import {
  StyledImage,
  Heading,
  ViewButton,
  ViewModal,
  LoaderSpin,
} from "./Components/StyledComponents";
import LoadingSpin from "react-loading-spin";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";
import LayoutModal from "./Components/LayoutModal";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState(null);

  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(false);
  const APP_ID = "566c7570";
  const APP_KEY = "7e685454b5402ace1b51aa13957bf81a";
  useEffect(() => {
    if (!isModalVisible) {
      setEditData(null);
    }
  }, [isModalVisible]);
  const { Title } = Typography;
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

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
    <>
      <Content>
        <LayoutModal />

        <div
          className="spinner"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "inherit",
            backgroundColor: "white",
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
                  <Title level={4}>{data["recipe"]["source"]}</Title>
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
              <Title level={2}>{editData["recipe"]["label"]}</Title>
              <Title level={4}>{editData["recipe"]["source"]}</Title>
              <Title level={4}>
                Calories :{editData["recipe"]["calories"]}
              </Title>

              <Title level={5}>{editData["recipe"]["cuisineType"]}</Title>
            </ViewModal>
          )}
        </Row>
      </Content>
    </>
  );
};

export default App;
