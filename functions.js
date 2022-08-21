//Funciones de Planes

//Desde recommendedCard
function showBasicCard() {
    document.getElementById("basicPlanCard").style.display="block";
    document.getElementById("recommendedPlanCard").style.display="none";
}
function showUnlimitedCard() {
    document.getElementById("unlimitedPlanCard").style.display="block";
    document.getElementById("recommendedPlanCard").style.display="none";
}
//Desde unlimitedCard
function showRecommendedCard() {
    document.getElementById("recommendedPlanCard").style.display="block";
    document.getElementById("unlimitedPlanCard").style.display="none";
}
function showBasicCard2() {
    document.getElementById("basicPlanCard").style.display="block";
    document.getElementById("unlimitedPlanCard").style.display="none";
}
//Desde basicCard
function showRecommendedCard2() {
    document.getElementById("recommendedPlanCard").style.display="block";
    document.getElementById("basicPlanCard").style.display="none";
}
function showUnlimitedCard2() {
    document.getElementById("unlimitedPlanCard").style.display="block";
    document.getElementById("basicPlanCard").style.display="none";
}