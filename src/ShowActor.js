import { gsap } from "gsap";

class ShowActor{
    constructor(data) {
        // ---- MENU ----
        // For at skifte mellem enemies 
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
            menuItem.addEventListener("click", (e) => this.changeContent(e, el));
        });
        // ---- END MENU ----



        // ---- CARD UI ----
        const cardContainer = document.createElement("section");
        cardContainer.id = "cardContainer";
        document.body.appendChild(cardContainer);

        const card = document.createElement("div");
        card.id = "card";
        cardContainer.appendChild(card);
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
        //---- END CARD INHOLD ----


        
        //---- FOOTER ----
        const footer = document.createElement("footer");
        footer.id = "footer";
        document.body.appendChild(footer);
        // ---- END FOOTER ----
        
        
    }//END constructor
    
     // ---- CHANGE CONTENT ----
     changeContent(e, data) {
        // this.getData(e, data)

        // ---- GSAP animation ----
        let elem = document.querySelector("#cardContainer");
        let cardAnim = gsap.to(elem, {
            duration: 0.3,
            scaleX: -1,
            alpha: 0,
            repeat: 1,
            yoyo: true,
        })
        cardAnim.vars.onRepeat = () => {
            if (cardAnim.iteration() % 2 == 0)
            this.getData(e, data)
        }
     }
     getData(e, data) {
        this.currentDataIndex = e.target.dataset.index;

        let mHeadline = document.querySelector("#headline");
        mHeadline.textContent = data.name;

        const imageSrc = data.img;
        const img = "../assets/images/" + imageSrc;

        let mImg = document.querySelector("#showImg");
        mImg.src = img;
        
        let mContent = document.querySelector("#content");
        mContent.textContent = data.text;
     }
}

export default ShowActor;