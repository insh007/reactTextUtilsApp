import React from "react";

function About(props) {
    let myStyle = {
        color : props.mode ==='dark'?'white':'black',
        backgroundColor : props.mode==='dark'?'black':'white'
    }

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>How it's working</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This website is in under develoment process but we provide free tools to help you with your daily tasks. You will find tools for formatting source code, converters, tools for handling text, such as remove duplicate characters, remove extra space, convert to uppercase, convert to lowercase, reverse text and many others.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This website is totally free to use so make your hands dirty to do things.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Responsive</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            It also support Browser compatibility by providing screen resolution to different devices like mobile, desktop, laptop etc
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

    // try code for dark mode
    // const [myStyle, setMyStyle] = useState({
    //     color : "black",
    //     backgroundColor : 'white'
    // })

    // const [btnText, setBtnText] = useState('Enable Dark Mode')

    // function toggleColor(){
    //     if(myStyle.backgroundColor==='white'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black'
    //         })
    //         setBtnText('Disable Dark Mode')
    //     }else{
    //         setMyStyle({
    //             color : "black",
    //             backgroundColor : "white"
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    // }