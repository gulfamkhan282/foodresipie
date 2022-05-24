import React from 'react'
import { Typography } from "antd";
import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
function About() {
  return (
    <Content className="about">
    <Title level={2}>About</Title>
    <div style={{ paddingTop: "2em" }}>
      <p>
        lorem ipsum A paragraph is a self-contained unit of discourse in
        writing dealing with a particular point or idea. A paragraph
        consists of one or more sentences. Though not required by the
        syntax of any language, paragraphs are usually an expected part
        of formal writing, used to organize longer prose. Wikipedia
        lorem ipsum A paragraph is a self-contained unit of discourse in
        writing dealing with a particular point or idea. A paragraph
        consists of one or more sentences. Though not required by the
        syntax of any language, paragraphs are usually an expected part
        of formal writing, used to organize longer prose. Wikipedia
        lorem ipsum A paragraph is a self-contained unit of discourse in
        writing dealing with a particular point or idea. A paragraph
        consists of one or more sentences. Though not required by the
        syntax of any language, paragraphs are usually an expected part
        of formal writing, used to organize longer prose. Wikipedia
      </p>
    </div>
  </Content>
  )
}

export default About