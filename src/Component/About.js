import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
        
        <h1 className="cat">About Cats</h1>
        <hr className="line"/>

        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h1>Cat-astrophe Averted</h1>
                    <p>The cat (Felis catus) is a domestic species of small carnivorous mammal.[1][2] It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.[4] A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.[6]</p>

                    <p>The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey. Its night vision and sense of smell are well developed. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling and grunting as well as cat-specific body language. A predator that is most active at dawn and dusk (crepuscular), the cat is a solitary hunter but a social species. It can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small mammals.[7] It secretes and perceives pheromones.[8]</p>

                </div>
                <div className="col-sm-6">
                    <img className="aboutCat" src="/images/catImg.jpg" alt=""/>
                </div>
            </div>
        </div>
    
            
        </>
    )
}

export default About
