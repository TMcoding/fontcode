import React, { Component } from "react";
import { Table, Button, Modal, Input, Breadcrumb, Alert,Tag,Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import TextLoop from "react-text-loop";
import "./App.css";
// import { dataSource, columns } from "./mock";
const { Item } = Breadcrumb;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'sex',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  
  showModal = (_) => {
    this.setState({
      visible: true,
    });
  };
  handelModal = (_) => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <>
        <Breadcrumb>
          <Item>Home</Item>
          <Item>
            <a href="jsvascript:;">Application Center</a>
          </Item>
          <Item>
            <a href="jsvascript:;">Application List</a>
          </Item>
          <Item>An Application</Item>
        </Breadcrumb>
        <div className="container">
          <Table 
          dataSource = {data}
          columns = {columns}
          ></Table>
        </div>
      </>
    );
  }
}

export default App1;
