import React from 'react'
import { Button } from 'antd'
import SharedModule from '../shared/index'

class About extends React.Component {
  parentRouter = SharedModule.getShared()
  locationTo = (path) => {
    // console.log(this.parentRouter)
    this.parentRouter.mainAppRouterPush(path)
  }
  render() {
    return (
      <div>
        <h1>
          This is React About Page
        </h1>
        <Button type="primary" onClick={() => this.locationTo('/vue')}>去vue</Button>
      </div>
    )
  }
}

export default About
