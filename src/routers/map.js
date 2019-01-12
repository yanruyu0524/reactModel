import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
export default class Map extends Component {
  render() {
    const {routers}=this.props;
    const defaultRouter=<Route exact key={1} path='/' component={()=>{
        return <Redirect to='/home'></Redirect>
    }}></Route>
    return (
      <Switch>
        {
            routers.map((item,index)=>{
                const Comp=item.component;
                return <Route key={index} path={item.path} component={(apiRouter)=>{
                    return <Comp {...apiRouter} routers={item.children}></Comp>
                }}></Route>
            }).concat(defaultRouter)
        }
      </Switch>
    )
  }
}
