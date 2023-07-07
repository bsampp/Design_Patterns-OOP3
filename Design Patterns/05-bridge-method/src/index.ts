import Facebook from "./platforms/Facebook";
import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import Youtube from "./platforms/Youtube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform){
    console.log("Aguarde...");
    const live = new Live(platform);
    setTimeout(() => {
        live.broadcasting();
        live.result();
    }, 2000);
}

function startAdvancedLive(platform: IPlatform){
    const live = new AdvancedLive(platform);
    live.subtitles();
    live.comments();
    console.log("Aguarde...");
    setTimeout(() => {
        live.broadcasting();
        live.result();
    }, 3000);
}

startAdvancedLive(new Facebook());
