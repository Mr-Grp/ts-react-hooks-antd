import React from "react";
import Button from "./components/Button/button";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>按钮样式</p>
        <Button className="custom"> Hello </Button>
        <Button disabled> Disabled Button </Button>
        <Button btnType="primary" size="lg">
          Large Primary
        </Button>
        <Button btnType="danger" size="sm">
          Small Danger
        </Button>
        <Button btnType="link" href="http://www.baidu.com" target="_blank">
          Baidu Link
        </Button>
        <Button btnType="link" href="http://www.baidu.com" disabled>
          Disabled Link
        </Button>
      </header>
      <div className="a">
        <div className="b">111</div>
      </div>
    </div>
  );
};

export default App;
