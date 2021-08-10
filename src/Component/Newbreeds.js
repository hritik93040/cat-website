import React from 'react'
import './Newbreeds.css'

const Newbreeds = () => {
    return (
        <div>
            <br /><br />
            <h1 className="breeds">New Breeds</h1>
            <hr className="breedsLine"></hr><br />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="breedsCard">
                            <img className="cutcat1" src="/images/cutcat1.jpg" alt="" />


                        </div><br />

                    </div>
                    <div className="col-sm-6">
                        <div className="breedsCard1">
                            <img className="cutcat2" src="/images/cutcat2.jpg" alt="" />



                        </div><br />

                    </div>




                </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="breedsCard2">
                            <img className="cutcat3" src="/images/cutcat3.jpg" alt="" />

                        </div><br/>
                    </div>

                    <div className="col-sm-6">
                        <div className="breedsCard3">
                            <img className="cutcat4" src="/images/cutcat4.jpg" alt="" />

                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default Newbreeds
