import { ConfigProvider, Button } from 'antd';
import './App.css';
import React, { useState } from 'react';
import { getLoginQrCKey } from './api/index';

function App() {
  const [theme, setTheme] = useState({
    token: {
      colorPrimary: 'pink',
    },
  });
  const fn = () => {
    getLoginQrCKey()
      .then(() => {
        // console.log(res)
      })
      .catch(() => {
        // console.log(err)
      });
  };
  return (
    <ConfigProvider theme={theme}>
      <h1 className="text-[26px] text-[green] text-center">测试页面</h1>
      <Button type="primary" onClick={fn}>
        按钮
      </Button>
      <button
        type="button"
        onClick={() => {
          setTheme({
            token: {
              colorPrimary: 'skyblue',
            },
          });
        }}
      >
        修改主题色
      </button>
    </ConfigProvider>
  );
}

export default App;
