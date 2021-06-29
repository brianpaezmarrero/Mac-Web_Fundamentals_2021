function hide(element) {
    element.remove();
}
var likes_arr = 13;
function likesCounter(likes){
    console.log(likes);
    likes_arr++
    likes.innerHTML = `likes ${likes_arr}`
    alert("Ninja was Liked")
}
var likes2_arr = 37
function likesCounter2(likes2){
    likes2_arr++
    likes2.innerHTML = `likes ${likes2_arr}`
}
function logOut(toglle){
    toglle.innerText = "Log Out";
}
