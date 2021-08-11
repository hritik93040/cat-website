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
                            <h4 className="breedsHeading">Cats</h4>
                            <p className="breedsPara">The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey.
                              </p>
                              <button type="button" class="btn btn-warning">View more</button>
                            


                        </div><br />

                    </div>
                    <div className="col-sm-6">
                        <div className="breedsCard1">
                            <img className="cutcat2" src="/images/cutcat2.jpg" alt="" />
                            <h4 className="breedsHeading">Cats</h4>
                            <p className="breedsPara">The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey.
                              </p>
                              <button type="button" class="btn btn-warning">View more</button>



                        </div><br />

                    </div>




                </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="breedsCard2">
                            <img className="cutcat3" src="/images/cutcat3.jpg" alt="" />
                            <h4 className="breedsHeading1">Cats</h4>
                            <p className="breedsPara">The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey.
                              </p>
                              <button type="button" class="btn btn-primary">View more</button>
                            

                        </div><br/>
                    </div>

                    <div className="col-sm-6">
                        <div className="breedsCard3">
                            <img className="cutcat4" src="/images/cutcat4.jpg" alt="" />
                            <h4 className="breedsHeading1">Cats</h4>
                            <p className="breedsPara">The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey.
                              </p>
                              <button type="button" class="btn btn-primary">View more</button>

                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default Newbreeds
