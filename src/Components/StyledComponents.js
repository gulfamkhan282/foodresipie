import styled from "styled-components";
import {
  Modal,
  Avatar,
  Input,
  Form,
  Image,
  Button,
  PageHeader,
  Layout,
  title,
  Menu,
} from "antd";
import img from "./Images/download.jpg";
export const StyledImage = styled(Image)`
  border-radius: 10px;
`;
export const Heading = styled.h1`
  background-color: #3a80ba;
  height: 135px;
  color: white;
  text-align: center;
  padding: 38px;
`;

export const StyledInput = styled(Input)`
  border-radius: 7px;
  width: 12%;
`;
export const StyledForm = styled(Form)`
  text-align: center;
`;
export const StyledButton = styled(Button)`
  position: absolute;
  right: 480px;
  border-radius: 7px;
`;
export const ViewButton = styled(Button)`
  display: block;
  margin: 15px 93px;
`;
export const ViewModal = styled(Modal)`
  div.ant-modal-content {
    margin: 93px;
    border-radius: 12px;
  }
  && .ant-image-img {
    border-radius: 50px;
  }
  .ant-modal-header {
    border-radius: 12px;
  }
`;
export const StyledTitle = styled(PageHeader)`
  margin: auto;
  ant-page-header {
    background-color: #3a80ba;
  }
  .ant-page-header-heading-title,
  .ant-page-header-heading-sub-title {
    color: #3a80ba;
  }
`;
export const Content = styled.div`
  ant-layout site-layout {
    border: 1px solid #000;
    background-image: url(${img});
    width: 2000px;
    height: 2000px;
  }
`;
export const StylInput = styled(Input)`
  width: 200px;
`;
export const StyledMain = styled(Menu)`
  && .ant-menu-item-only-child{
    background-color: #3a80ba;
  }
`;
