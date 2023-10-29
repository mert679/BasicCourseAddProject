import {useState} from "react"
import Ccsharp from "./images/ccsharp.png"
import Angular from "./images/angular.jpg"
import Bootstrap from "./images/bootstrap5.png"
import Kompleweb from "./images/kompleweb.jpg"

const courseMap = {
    Angular:Angular,
    Ccsharp:Ccsharp,
    Bootstrap:Bootstrap,
    Kompleweb:Kompleweb
}
export function Course(props) {
    console.log(props.course);
    return(
        <div className="img_wrapper">

        <img src={courseMap[props.course]} alt="" />
        </div>
    )
}
