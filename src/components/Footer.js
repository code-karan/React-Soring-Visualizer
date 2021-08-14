import React from 'react'

const Footer = () => {
    
    return (
        <section style={footerStyle}>
        <div className="container">
        <div className="row">
           <div className="col-md-6">
                <p>Karan Singhasane</p>
                </div>
           <div className="col-md-6">
           <p>Samarth Gaikwad</p>
                </div>
           </div>
        </div>
          
        </section>
    )
}



// Styles
const footerStyle = {
    backgroundColor : "#423F3E",
    color: "white",
    position: "absolute",
    bottom: 0,
    width : "100%"
    
}

export default Footer
