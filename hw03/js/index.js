
// This variable will always hold the "active" photo element (the div)
let activeCard = null;

// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
    // Hint: figure out which element the user clicked from the event object:
    activeCard = e.target;
    const imgURL = activeCard.style.backgroundImage;
    document.querySelector(".featured_image").style.backgroundImage = imgURL;
    document.querySelector("#preview").classList.toggle("active");
    console.log('the active element is:', activeCard);

    // Hint: figure out what its background image is:
    console.log('the background image of the active element is:', imgURL);

    // Your turn:
    // 1. set the .featured_image's background image to the imgURL (above), and
    // 2. update the .preview_box's class to include the "active" class.
};

// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
const cards = document.querySelectorAll('.card');
for (card of cards) {
   card.onclick = showPhoto;
}


// PART 3: Close functionality
const close = () => {
  document.querySelector("#preview").classList.toggle("active");
};

document.querySelector('#close').onclick = close;

// PART 4: Next functionality:
// a. Modify the “next” function (below) so that that it replaces
//    the “.featured_image” background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.
const next = () => {
    activeCard = activeCard.nextElementSibling;
    imgURL = activeCard.style.backgroundImage;
    document.querySelector(".featured_image").style.backgroundImage = imgURL;
    console.log(activeCard.nextElementSibling);
}

document.querySelector('#next').onclick = next;

const prev = () => {
    activeCard = activeCard.previousElementSibling;
    imgURL = activeCard.style.backgroundImage;
    document.querySelector(".featured_image").style.backgroundImage = imgURL;
}

document.querySelector('#prev').onclick = prev;
