import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons'
import Index from './pages/Index'
import About from './pages/About'

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : ""


class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  };
  render () {
    return (
      <BrowserRouter basename={BASE_NAME}>
        <section>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="mail" >
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="app">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
          <Switch>
            <Route path="/about" component={About} >
            </Route>
            <Route path="/" >
              <Index />
            </Route>
          </Switch>
        </section>
      </BrowserRouter>
    )
  }
}

export default App
