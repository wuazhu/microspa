import React from 'react'
import { Button } from 'antd'
import SharedModule from '../shared/index'

class Index extends React.Component {
  parentRouter = SharedModule.getShared()
  locationTo = (path) => {
    // console.log(this.parentRouter)
    this.parentRouter.mainAppRouterPush(path)
  }
  render() {
    return (
      <div>
        <h1>
          This is React Index Page
        </h1>
        <Button type="primary" onClick={() => this.locationTo('/')}>去首页</Button>
        <Button type="primary" onClick={() => this.locationTo('/vue')}>去vue</Button>
      </div>
    )
  }
}

export default Index
