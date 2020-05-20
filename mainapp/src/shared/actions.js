import { initGlobalState } from 'qiankun'
import injectRoute from '../router/index'
const initialState = {}

console.log('injectRoute', injectRoute)
const actions = initGlobalState(initialState)
actions.injectRoute = injectRoute
console.log('---------', actions, '---------')

export default actions
