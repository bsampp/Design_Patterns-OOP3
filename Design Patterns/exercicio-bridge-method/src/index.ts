import IConsole from "./consoles/IConsole";
import AdvancedPlay from "./gaming/AdvancedPlay";
import Play from "./gaming/Play";
import Playstation from "./consoles/Playstation";
import XBox from "./consoles/XBox";

function startGame(consoleType: IConsole){
    console.log("Aguarde...");
    const play = new Play(consoleType)
    setTimeout(() => {
        play.playing();
        play.result();
    }, 2000);
}

function startAdvancedplay(consoleType: IConsole){
    const play = new AdvancedPlay(consoleType);
    play.challenge();
    console.log("Aguarde...");
    setTimeout(() => {
        play.playing();
        play.result();
    }, 3000);
}

startAdvancedplay(new XBox())