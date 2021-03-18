/*
 * @Author: your name
 * @Date: 2021-03-17 23:19:19
 * @LastEditTime: 2021-03-17 23:49:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Hooks-Immutable\cloud-music\src\App.js
 */
import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <i className="iconfont">&#xe62b;</i>
    </div>
  );
}

export default App;
