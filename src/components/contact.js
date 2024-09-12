import React from "react";

const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="backdrop-color">
                    <div className="content">

                        <div className="signUp">
                            <p>Feel you've got it in you <span className= "question">?</span></p>
                            <p>Record a video of yourself being special and send to us</p>
                            <p>theAvengers@gmail.com</p>
                        </div>

                        <div className="report">
                            <p>See any thing strange <span>?</span></p>
                            <p id="call">call 123</p>
                            <p><span id="or">or</span> you can message us directly</p>
                            <form>
                                <input type="text" placeholder="name"></input>
                                <input type="address" placeholder="address"></input>
                                <textarea placeholder="type report" cols={30} rows={10}></textarea>
                                <input type="submit" value="send"></input>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact