const btnthaphuong = document.getElementsByClassName("btnthaphuong");
const btnlay = document.getElementsByClassName("btnlay")

const gifThaphuong = document.getElementsByClassName("gifThaphuong");
const gifLay = document.getElementsByClassName("gifLay");
document.getElementsByTagName("audio")[0].play();
document.getElementsByTagName("audio")[0].load();

function showGif() {
    // console.log(event.target === btnlay[0]);
    // console.log(event.target === btnthaphuong[0]);
    if (event.target === btnlay[0]){
        gifLay[0].setAttribute('style', 'display:inline !important');
        setTimeout(() => {
            gifLay[0].setAttribute('style', 'display:none !important');
        }, 3000);
    } else if (event.target === btnthaphuong[0]) {
        gifThaphuong[0].setAttribute('style', 'display:inline !important');
        setTimeout(() => {
            gifThaphuong[0].setAttribute('style', 'display:none !important');
        }, 3000);
    }
}
