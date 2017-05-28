function ManagerMenuResponsive(menuMobileLateralId){

    const HIDDEN = "hidden";

    let menuMobileLateral ;

    this.toogle = function(){
        if(!menuMobileLateral){
            menuMobileLateral = document.getElementById(menuMobileLateralId);
        }

        if(menuMobileLateral) {

            if (isShowMenuMobile()) {
                setTimeout(() => menuMobileLateral.classList.add(HIDDEN), 300);
                menuMobileLateral.style.width = "0";
            } else {
                menuMobileLateral.classList.remove(HIDDEN);
                setTimeout(() => menuMobileLateral.style.width = "60%", 200);
            }
        }
    };

    function isShowMenuMobile() {
        return !menuMobileLateral.classList.contains(HIDDEN);
    }
}

export default ManagerMenuResponsive;