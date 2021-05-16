import '../scss/App.scss';
import Screen from "./Screen"
import Play from "./Play"

//Let init the necessary classes.
let b = new Screen(3)
let play = new Play(b)
play.play()
