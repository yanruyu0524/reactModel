
import React from 'react'
import Map from './map'
import Routers from './routers'

export default class RouterView extends React.Component{
    render(){
        const {routers}=this.props
        return(
            <Map routers={routers===undefined?Routers:routers}></Map>
        )
    }
}