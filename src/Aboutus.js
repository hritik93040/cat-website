import React from 'react'
import Header from "./Component/Header"
import Footer from './Component/Footer'
import './Aboutus.css'

const Aboutus = () => {
    return (
        <div>
            <Header />

            
                    <img className="aboutCat" src="/images/gallery22.jpg" alt="" />
                
            <br /><br/>
            <h1 className="aboutcatHeading">About Cat</h1>
            <hr className="aboutcatLine" /><br />
            <div className="container">
                <p className="aboutcatParagraph">The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey. Its night vision and sense of smell are well developed. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling and grunting as well as cat-specific body language. A predator that is most active at dawn and dusk (crepuscular), the cat is a solitary hunter but a social species. It can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small mammals. It secretes and perceives pheromones.Female domestic cats can have kittens from spring to late autumn, with litter sizes often ranging from two to five kittens. Domestic cats are bred and shown at events as registered pedigreed cats, a hobby known as cat fancy. Failure to control breeding of pet cats by spaying and neutering, as well as abandonment of pets, resulted in large numbers of feral cats worldwide, contributing to the extinction of entire bird, mammal, and reptile species, and evoking population control.</p>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img className="maineCat" src="/images/gallery23.jpg" alt="" />
                    </div>
                    <div className="col-sm-6"><br />
                        <h1 className="maincatHeadind">Maine Coon</h1><br />
                        <p className="mainecatparagraph">The Maine Coon is a large domesticated cat breed. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America, specifically native to the US state of Maine, where it is the official state cat. </p>
                        <p className="mainecatparagraph">No records of the Maine Coon's exact origins and date of introduction to the United States exist, so several competing hypotheses have been suggested, the most credible suggestion being that it is closely related to the Norwegian Forest cat and the Siberian. The breed was popular in cat shows in the late 19th century, but its existence became threatened when long-haired breeds from overseas were introduced in the early 20th century. The Maine Coon has since made a comeback and is now one of the most popular cat breeds in the United States.</p>
                    </div></div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6"><br />
                            <h1 className="maincatHeadind">Siamese</h1><br />
                            <p className="mainecatparagraph">The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cat native to Thailand (formerly known as Siam), the original Siamese became one of the most popular breeds in Europe and North America in the 19th century. The carefully refined, more extreme-featured, modern-style Siamese is characterized by blue almond-shaped eyes; a triangular head shape; large ears; an elongated, slender, and muscular body; and various forms of point colouration. </p>
                            <p className="mainecatparagraph">The Siamese (sometimes in the traditional form) is among the foundation stock of several other breeds developed by crossbreeding with other cats; some examples are the Oriental Shorthair and Colourpoint Shorthair, developed to expand the range of coat patterns; the long-haired variant most often dubbed the Himalayan; and hair-mutation breeds, including the Cornish Rex, Sphynx, Peterbald, and blue-point Siamese cat. </p>
                        </div>
                        <div className="col-sm-6">
                            <img className="maineCat" src="/images/gallery24.jpg" alt="" />
                        </div>


                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="maineCat" src="/images/gallery25.jpg" alt="" />
                        </div>
                        <div className="col-sm-6"><br />
                            <h1 className="maincatHeadind">Scottish Fold</h1><br />
                            <p className="mainecatparagraph">The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to "fold", bending forward and down towards the front of the head, which gives the cat what is often described as an "owl-like" appearance. </p>
                            <p className="mainecatparagraph">Originally called lop-eared or lops after the lop-eared rabbit, Scottish Fold became the breed's name in 1966. Depending on registries, longhaired Scottish Folds are varyingly known as Highland Fold, Scottish Fold Longhair, Longhair Fold and Coupari.</p>
                        </div>

                    </div>
                </div>




            </div>




            <Footer />

        </div>
    )
}

export default Aboutus
