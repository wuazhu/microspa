// micro-app-main/src/shared/index.js
import store from "./store"

class InjectTable {
  injectRouter(router) {
    this.router = router
  }
}

export const injectTable = new InjectTable()

class Shared {
  /**
   * 路由注入
   */
  mainAppRouterPush(path) {
    console.log(injectTable)
    return injectTable.router.push(path)
  }
  /**
   * 获取 Token
   */
  getToken() {
    const state = store.getState()
    return state.token || {}
  }

  /**
   * 设置 Token
   */
  setToken(token) {
    console.log('setToken', token)
    // 将 token 的值记录在 store 中
    store.dispatch({
      type: "SET_TOKEN",
      payload: token
    })
  }
}

const shared = new Shared()
export default shared
