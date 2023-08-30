import { gsap } from "gsap";
import ChangeContents from "./ChangeContent";

class ShowActor{
    constructor(data) {

        const CC = new ChangeContents();

        // ---- MENU ----
        // For at skifte mellem enemies (nav)
        const menuContainer = document.createElement("nav");
        menuContainer.id = "menuContainer";
        document.body.appendChild(menuContainer);
       
        const menuItemContainer = document.createElement("ul");
        menuItemContainer.id = "menuItemContainer";
        menuContainer.appendChild(menuItemContainer);

        data.forEach((el, index) => {
            const menuItem = document.createElement("li");
            menuItem.setAttribute("data-index", `${index}`);
            menuItem.className = "menuItem";
            menuItem.textContent = el.name; 
            menuItemContainer.appendChild(menuItem);
            //Eventlistener til changeContent:
            menuItem.addEventListener("click", (e) => CC.getData(e, el));
        });
        // ---- END MENU ----



        // ---- CARD UI ----
        const cardContainer = document.createElement("section");
        cardContainer.id = "cardContainer";
        document.body.appendChild(cardContainer);

        const card = document.createElement("div");
        card.id = "card";
        cardContainer.appendChild(card);

        card.addEventListener("click", (e) => {
            if (CC.currentDataIndex > -1) {
                document.querySelector("#info").style.display = "block";
                gsap.to("#info", {
                    duration: 0.3,
                    scaleX: -1,
                    alpha: 0,
                    repeat: 1,
                    yoyo: true,
                });
                
                let addInfo = data[CC.currentDataIndex].information;

                let mStrength = document.querySelector("#strength");
                
                let mLives = document.querySelector("#lives");
                mLives.textContent = addInfo.lives;
            }
        });
        // ---- END CARD UI ----



        //---- CARD INDHOLD ----
        //forEach loop 
        const childCardArray = ["headline", "imagecon", "content", "info"];
        childCardArray.forEach((elementId, index) => {
            const cardChild = document.createElement("div");
            cardChild.id = elementId;
            card.appendChild(cardChild);
        })//END forEach loop

        const showImg = document.createElement("img");
        showImg.id = "showImg";
        showImg.src = "../assets/images/ninja.png";
        document.querySelector("#imagecon").appendChild(showImg);



        const infoChild = document.createElement("div");
        infoChild.id = "infoChild";
        document.querySelector("#info").appendChild(infoChild);

        const strength = document.createElement("div");
        strength.id = "strength";
        document.querySelector("#infoChild").appendChild(strength);

        const lives = document.createElement("div");
        lives.id = "lives";
        document.querySelector("#infoChild").appendChild(lives);

        card.addEventListener("click", (e) => {
        console.log("card clicked");
        })
        //---- END CARD INHOLD ----


        
        //---- FOOTER ----
        const footer = document.createElement("footer");
        footer.id = "footer";
        document.body.appendChild(footer);
        // ---- END FOOTER ----
        
        
    }//END constructor

    
};

export default ShowActor;