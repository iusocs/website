<!--
// Preload images
if(document.images) {
img1on = new Image();           // Active images
img1on.src = "home_on.jpg";  
img2on = new Image(); 
img2on.src = "contact_on.jpg";  
img3on = new Image();
img3on.src = "board_on.jpg";
img4on = new Image();
img4on.src = "links_on.jpg";
img5on = new Image();
img5on.src = "events_on.jpg";
img6on = new Image();
img6on.src = "people_on.jpg";


img1off = new Image();          // Inactive images
img1off.src = "home_off.jpg"; 
img2off = new Image();
img2off.src = "contact_off.jpg";  
img3off = new Image();
img3off.src = "board_off.jpg";
img4off = new Image();
img4off.src = "links_off.jpg";
img5off = new Image();
img5off.src = "events_off.jpg";
img6off = new Image();
img6off.src = "people_off.jpg";
}

// Use a different style sheet for Netscape 4.x
if(document.layers) {
    document.write('<link rel="stylesheet" type="text/css" href="socsnn.css">')
}

function openPhotoWin(page) {
    window.open(page,"photowin","width=550,height=500,scrollbars,resizable");
}
//-->
