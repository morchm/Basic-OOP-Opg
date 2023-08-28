import ShowActor from "./ShowActor";
import "../css/style.scss";
import data from "../assets/data.json";


(() => {

  //Henter data fra data.json
  new ShowActor(data.content);



})();
