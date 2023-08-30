import { gsap } from "gsap";
 
class ChangeContents {
    constructor(){
        
        this.currentDataIndex=-1;

    } //END constructor

    getData(e, data) {

        this.currentDataIndex = e.currentTarget.dataset.index;

        let mHeadline = document.querySelector("#headline");
        mHeadline.textContent = data.name;

        const imageSrc = data.img;
        const img = "../assets/images/" + imageSrc;

        let mImg = document.querySelector("#showImg");
        mImg.src = img;
        
        let mContent = document.querySelector("#content");
        mContent.textContent = data.text;

            let cardAnim = gsap.to("#cardContainer", {
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

     get currentIndex() {
        return this.currentDataIndex;
     }

     
}
export default ChangeContents;