import React from 'react'

export default function Footer(props) {
    let myStyle = {
        color : props.mode ==='dark'?'white':'black',
        backgroundColor : props.mode==='dark'?'black':'white'
    }

    let myTextColor = {
        backgroundColor : props.mode==='dark'?'white':'dark'
    }

    return (
        <div className="container-fluid"  style={myStyle}>
            <footer className={`bg-${props.mode}  bg-info text-center text-lg-start fixed-bottom`}>
                <div className={`text-center p-3 bg-${props.mode}`} >
                    © 2023 Copyright : &nbsp;
                    <a className="text-dark" style={myTextColor} href="https://github.com/insh007/reactTextUtilsApp.git" >MyGitHubAccount</a>
                </div>
            </footer>
        </div>
    )
}
