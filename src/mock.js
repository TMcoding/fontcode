import React from "react";
import { Tooltip,Tag } from "antd";
import "./App.css";
export const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address:
      "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号",
    sex: "nan",
  },
  {
    key: "2",
    name: "吴彦祖",
    age: 42,
    address: "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号",
    sex: "女",
  },
  {
    key: "3",
    name: "刘德华",
    age: 50,
    address: "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园4号",
    sex: "双性人",
  },
  {
    key: "4",
    name: "刘雯",
    age: 30,
    address: "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号江干区湖底公园1号",
    sex: "女",
  },
  {
    key: "5",
    name: "雷佳音",
    age: 42,
    address: "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号",
    sex: "男",
  },
  {
    key: "6",
    name: "刘嘉玲",
    age: 42,
    address: "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号",
    sex: "女",
  },
  {
    key: "7",
    name: "郭富城",
    age: 42,
    address: "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号",
    sex: "男",
  },
  {
    key: "8",
    name: "嘿嘿嘿",
    age: 42,
    address: "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号",
    sex: "偏1",
  },
  {
    key: "9",
    name: "云烟",
    age: 42,
    address: "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号",
    sex: "女性化",
  },
  {
    key: "10",
    name: "帝豪",
    age: 42,
    address: "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号",
    sex: "壮熊",
  },
  {
    key: "11",
    name: "帝豪",
    age: 42,
    address: "西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号",
    sex: "狒狒",
  },
];
export const columns = [
  {
    align: "center",
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    align: "center",
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    // className:"clomns",
    align: "center",
    title: "住址",
    dataIndex: "address",
    key: "address",
    render(text, record) {
      return <div style = {{width:"200px",whiteSpace: "nowrap",textOverflow: "ellipsis",overflow: "hidden"}}><Tooltip placement = "leftTop" title={text}>{text}</Tooltip></div>
    },
  },
  {
    align: "center",
    title: "性别",
    dataIndex: "sex",
    key: "sex",
    render(text,record) {
        let color
        switch (text) {
            case "nan":
                color = "magenta"
                break;
            case "nv":
                color = "purple"
                break;
            case "壮熊":
                color = "yellow"
                break;
            case "偏1":
                color = "green"
                break;
        
            default:color = "red"
                break;
        }
    return <Tag color = {color}>{text}</Tag>
    },
  },
];
