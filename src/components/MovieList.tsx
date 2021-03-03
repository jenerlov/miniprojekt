import React, { Component, CSSProperties } from 'react';
import movie1 from '../assets/movies/movie1.jpg';
import movie2 from '../assets/movies/movie2.jpg';
import movie3 from '../assets/movies/movie3.jpg';
import movie4 from '../assets/movies/movie31.jpg';
import movie5 from '../assets/movies/movie32.jpg';
import movie6 from '../assets/movies/movie4.jpg';
import movie7 from '../assets/movies/movie5.jpg';
import movie8 from '../assets/movies/movie6.jpg';
import movie9 from '../assets/movies/movie7.jpg';
import movie10 from '../assets/movies/movie8.jpg';
import movie11 from '../assets/movies/movie9.jpg';
import movie12 from '../assets/movies/coming.jpg';
import MovieModal from './MovieModal';
import '../style.css'

interface Props{
    movies: Movie[]
}
interface State {
    selectedMovie?: string;
}
class MovieList extends Component<Props, State> {

    state: State = {
        selectedMovie: undefined
    }

    showInfo = (title: string) => {
        this.setState({ selectedMovie: title })
    }

    hideInfo = () => {
        this.setState({ selectedMovie: undefined })
    }

    render() {
        
        return(
            <div style={rootStyle}>
                <div style={centerDiv}>
                    {movies.map((movie) => (
                        <div style={imgDiv}>
                            <img onClick={() => this.showInfo(movie.info)} style={imgStyle} src={movie.img} alt=""/>
                            {this.state.selectedMovie === movie.info ? (
                                <MovieModal removeInfo={this.hideInfo}>
                                    <div>
                                    <h1 className="hover" style={exitButton}>X</h1>
                                    <p style={textStyle}>{movie.info}</p>
                                    </div>
                                </MovieModal>
                            ): null}
                        </div>
                    ))}
                </div> 
            </div>
        )
    }
}

const rootStyle:CSSProperties = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5rem',
    overflowY: 'auto'
}

const centerDiv:CSSProperties = {
    width: '70%',
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
}

const imgDiv:CSSProperties={
    height: '15rem',
    width: '10rem',
}

const imgStyle:CSSProperties = {
    height: '15rem',
    width: '9rem',
    objectFit: 'cover',
    border: '2px solid #472C73',
    borderRadius: 10,
    boxShadow: '0 0 1rem #472C73'
}

const textStyle:CSSProperties = {
    fontFamily: 'Helvetica'
}

const exitButton:CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    padding: '1rem'
}

export default MovieList;

interface Movie {
    img: string;
    info: string;
}

const movies: Movie[] = [
    {
        img: movie1,
        info: "The Trade Federation upsets order in the Galactic Republic by blockading the planet Naboo in preparation for a full-scale invasion. The Republic's leader, Supreme Chancellor Finis Valorum, dispatches Jedi Knight Qui-Gon Jinn and his apprentice, Obi-Wan Kenobi, to negotiate with Trade Federation Viceroy Nute Gunray. Darth Sidious, a Sith Lord and the Trade Federation's secret benefactor, orders the Viceroy to kill the Jedi and begin their invasion with an army of battle droids. The Jedi escape and flee to Naboo. During the invasion, Qui-Gon saves the life of a Gungan outcast, Jar Jar Binks. Indebted to Qui-Gon, Jar Jar leads the Jedi to Otoh Gunga, the Gungans' underwater city. The Jedi fail to persuade the Gungan leader, Boss Nass, to help the planet's surface dwellers, but manage to obtain Jar Jar's guidance and underwater transport to Theed, the capital city of Naboo. After rescuing Queen Padmé Amidala, the group make their escape from Naboo aboard her Royal Starship, intending to reach the Republic capital planet of Coruscant."
    },
    {
        img: movie2,
        info: "Ten years after the battle at Naboo,[a] the Galactic Republic is threatened by a Separatist movement organized by former Jedi Master Count Dooku. Senator Padmé Amidala comes to Coruscant to vote on a motion to create an army to assist the Jedi against the threat. Narrowly avoiding an assassination attempt upon her arrival, she is placed under the protection of Jedi Master Obi-Wan Kenobi and his apprentice Anakin Skywalker. The pair thwart a second attempt on Padmé's life and subdue the assassin, Zam Wesell, who is killed by her employer, a bounty hunter, before she can reveal his identity. The Jedi Council instructs Obi-Wan to find the bounty hunter, while Anakin is tasked to protect Padmé and escort her back to Naboo, where the two fall in love in spite of the Jedi Code that forbids relationships."
    },
    {
        img: movie3,
        info: "Above Coruscant, Obi-Wan Kenobi and Anakin Skywalker lead a mission to rescue the kidnapped Supreme Chancellor Palpatine from the cyborg Separatist commander General Grievous. After infiltrating Grievous' flagship, the Jedi battle Sith Lord Count Dooku, whom Anakin overpowers and decapitates at Palpatine's urging. Grievous escapes the battle-torn ship, which the Jedi crash-land on Coruscant. There, Anakin reunites with his wife, Padmé Amidala, who reveals that she is pregnant. While initially excited, Anakin soon begins to have nightmares about Padmé dying in childbirth."
    },
    {
        img: movie4,
        info: "On the planet Corellia, orphans Han and Qi'ra escape a local gang. They bribe an Imperial officer with stolen starship fuel, known as coaxium, for passage on a transport, but Qi'ra is captured before she can board. Han vows to return for her and joins the Imperial Navy as a flight cadet, being given the surname 'Solo'."
    },
    {
        img: movie5,
        info: "Research scientist Galen Erso and his family are in hiding on the planet Lah'mu when Imperial weapons developer Orson Krennic arrives to press him into completing the Death Star, a space station-based superweapon capable of destroying entire planets. Galen's wife, Lyra, is killed in the confrontation while their daughter, Jyn, escapes and is rescued by rebel extremist Saw Gerrera."
    },
    {
        img: movie6,
        info: "Amid a galactic civil war, Rebel Alliance spies have stolen plans to the Galactic Empire's Death Star, a massive space station capable of destroying an entire planet. Imperial Senator Princess Leia of Alderaan, secretly one of the Rebellion's leaders, has obtained its schematics, but her starship is intercepted by an Imperial Star Destroyer under the command of the ruthless Darth Vader. Before she is captured, Leia hides the plans in the memory of astromech droid R2-D2, who flees in an escape pod to the desert planet Tatooine accompanied by protocol droid C-3PO."
    },
    {
        img: movie7,
        info: "Three years after the destruction of the Death Star, the Rebel Alliance, led by Princess Leia, has set up a new base on the ice planet Hoth. The Imperial fleet, led by a merciless Darth Vader, hunts for the new Rebel base by dispatching probe droids across the galaxy. Luke Skywalker is captured by a wampa while investigating one such probe and dragged into the creature's cave, but manages to escape after using the Force to retrieve his lightsaber. Before Luke succumbs to hypothermia, the Force spirit of his deceased mentor, Obi-Wan Kenobi, instructs him to go to the swamp planet Dagobah to train under Jedi Master Yoda. Han Solo discovers Luke and manages to keep him alive by placing him inside the body of his dead Tauntaun mount, until the two are rescued by a search party the following morning."
    },
    {
        img: movie8,
        info: "A year after Han Solo's capture, C-3PO and R2-D2 are sent to crime lord Jabba the Hutt's palace on Tatooine in a trade bargain made by Luke Skywalker to rescue Han. Disguised as the bounty hunter Boushh, Princess Leia infiltrates the palace under the pretense of collecting the bounty on Chewbacca and unfreezes Han, but is caught and enslaved. Luke soon arrives to bargain for his friends' release, but Jabba drops him through a trapdoor to be eaten by a rancor. After Luke kills it, Jabba sentences him, Han, and Chewbacca to death by being fed to the Sarlacc, a huge, carnivorous plant-like desert beast. Having hidden his new lightsaber inside R2-D2, Luke frees himself and his friends, and they battle Jabba's men. During the chaos, Boba Fett falls into the Sarlacc after Han inadvertently damages his jetpack, and Leia strangles Jabba to death with her chains. The group then destroy Jabba's sail barge and escape before it explodes."
    },
    {
        img: movie9,
        info: "Thirty years after the Galactic Civil War,the First Order has risen from the fallen Galactic Empire and seeks to end the New Republic. The Resistance, backed by the Republic and led by General Leia Organa, opposes the First Order. Leia searches for her brother, Luke Skywalker, who has gone missing. On the desert planet Jakku, Resistance pilot Poe Dameron receives a map to Luke's place from Lor San Tekka. Stormtroopers commanded by Kylo Ren raid the village and capture Poe, while Kylo kills San Tekka. Poe's droid, BB-8, escapes with the map and encounters a scavenger named Rey. Kylo tortures Poe using the Force and learns of BB-8. Stormtrooper FN-2187, disillusioned by the First Order, frees Poe, and they escape in a stolen TIE fighter. Upon learning that FN-2187 has no other name, Poe gives him the name 'Finn'. As they head to Jakku to retrieve BB-8, a First Order Star Destroyer shoots them, and they crash-land. Finn survives and assumes that Poe died in the crash. He encounters Rey and BB-8, but the First Order tracks them and launches an airstrike. Rey, Finn, and BB-8 steal the Millennium Falcon and escape the planet."
    },
    {
        img: movie10,
        info: "Shortly after the battle of Starkiller Base, General Leia Organa is leading the Resistance forces in evacuating their base when the First Order fleet arrives. Against Leia's orders, Poe Dameron leads a costly counterattack that destroys a First Order dreadnought. The remaining Resistance escapes into hyperspace, but the First Order uses a device to track them, and attacks again. Kylo Ren hesitates to fire on the lead Resistance ship after sensing his mother Leia's presence on board, but his wingmen destroy the bridge, killing most of the Resistance's leaders. Leia is dragged into space but survives by using the Force. While Leia recovers, Vice-Admiral Holdo assumes command of the Resistance. Running low on fuel, the remaining fleet is pursued by the First Order."
    },
    {
        img: movie11,
        info: "Following a threat of revenge by the revived Emperor Palpatine, Kylo Ren obtains a Sith Wayfinder, leading him to the uncharted planet Exegol. There, he finds Palpatine, who reveals that he created Snoke as a puppet to control the First Order and lure Kylo to the dark side. Palpatine unveils the Final Order—a secret armada of Star Destroyers—and tells Kylo to find and kill Rey, who is continuing her Jedi training under Resistance leader Leia Organa. Finn and Poe Dameron deliver intelligence from a spy that Palpatine is on Exegol; Rey has learned from Luke Skywalker's notes that a Sith Wayfinder can lead them there. Rey, Finn, Poe, Chewbacca, BB-8, and C-3PO depart in the Millennium Falcon to Pasaana, where a clue to a Wayfinder is hidden."
    },
    {
        img: movie12,
        info: "Rogue Squadron, December 22, 2023"
    }
];