import React from "react";

const Footer = () => {

    return (
        <>
        <footer className="">
            <div className="container-fluid bg-dark text-light fixed-bottom">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <h6 className="text-center" style={{fontSize: 'var(--font-size-md)' }}>Why did the banana go to the doctor?</h6>
                                <p className="text-center" style={{fontSize: 'var(--font-size-sm)'}}>
                                Bananaville hosted a Banana Comedy Festival, uniting bananas in laughter. Even the apples couldn't resist. A night where bananas showed they're not just fruits but comedic legends.
                                </p>
                            </div>
                            <div className="col-md-4 col-12">
                                <h1 className="text-center" >Contact Us</h1>
                             </div>
                             </div>
                             </div>
                             </div>
                                </div>
        </footer>

        </>
    )
}

export default Footer;