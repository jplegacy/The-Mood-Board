$(".pics").hide();

$(".main h2").click(function(){
    $(".main h2").css("animation","zoom 5s linear infinite normal");
    });
    
$(".main h1").click(function(){
    $(".main h1").css("animation","zoom 5s linear infinite normal");
    });


$(".enter").click(function(){  
    
    var boi = $(".moodInput").val();
    var boi1 = boi.toLowerCase();
    
//If else statements so that something specifically happens when its type in the input field.

    if(boi1 === "happy"|| boi1 === "cheerful" || boi1 === "joyful"){
        happyMood(400);
        }
    else if(boi1 === "sad" || boi1 === "blue"){
        sadMood();
    }
    else if(boi1 === "mad" || boi1 === "angry" || boi1 === "furious"){
        madMood();
    } 
    else if(boi1 === "sick" || boi1 === "ill"){
        sickMood();
    }
    else if(boi1 === "crazy" || boi1 === "insane"){
        crazyMood();
    } 
    else if(boi1 === "confused" || boi1 === "demented"){
        confusedMood();
    } 
    else if(boi1 === "bored" || boi1 === "dull"){
        boredMood();
    } 
    else{
        alert("Please Enter Another Mood");
        $("body").css("background","url(https://media.giphy.com/media/riw3K0D2h4klG/giphy.gif)");
        $("body img").fadeOut(300);
        $(".pics").fadeOut(300);
        }
        
        $(".moodInput").val("");
        
});
//This is where all of the pictures are stored, in arrays so that it can be easier to display.

var happyPics = ["https://excellence-it.co.uk/wp-content/uploads/2018/12/1e.png","https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/Happy_smiley_face.png",];

var sadPics = ["https://media.giphy.com/media/Q8Zs9xIPTpmZq/giphy.gif","https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif"];

var sickPics = ["https://cdn.shopify.com/s/files/1/1061/1924/products/Sick_Emoji_Icon_2_large.png?v=1542436001","https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidphelan%2Ffiles%2F2017%2F07%2Femoji_update_2017_10.jpg"];

var madPics = ["https://media3.giphy.com/media/ntjBjvfnakKJ2/giphy.gif","https://media3.giphy.com/media/11tTNkNy1SdXGg/giphy.gif"];

var crazyPics = ["https://media3.giphy.com/media/69warOL5MBhyzjAMov/giphy.gif","https://data.whicdn.com/images/55043385/original.gif"];

var confusedPics = ["https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Thinking.png?v=1485573434 "];
 
var boredPics = ["https://media2.giphy.com/media/l2JhpjWPccQhsAMfu/giphy.gif", "https://cdn.ebaumsworld.com/mediaFiles/picture/2363319/85330804.gif"];

function happyMood(){
    $("body img").hide();
    $(".pics").fadeIn();
    $("body").css("background","gold");
    $(".main ").css("background","gold");
    happyPics.forEach(function(pic){
            $(".pics").append("<img class='placement'src='"+pic+"'>");
        });
/*  An example of a function to save space; This one in particular changes the 
    background and makes pictures appear on the page.
*/
    }
function sickMood(){
    $(".pics").fadeIn();
    $("body img").hide();
    $("body").css("background","limegreen");
    $(".main").css("background","limegreen");
    
    sickPics.forEach(function(pic){
            $(".pics").append("<img class='placement'src='"+pic+"'>");
        });
    }
function sadMood(){
    $(".pics").fadeIn();
    $("body img").hide();
    $("body").css("background","#0065ff");
    $(".main").css("background","#0065ff");
    
    sadPics.forEach(function(pic){
            $(".pics").append("<img width: 75%; margin:20 auto; src='"+pic+"'>");
        });
    }
function confusedMood(){
    $(".pics").fadeIn();
        $("body img").hide();
    $("body").css("background","grey");
    $(".main").css("background","grey");
    
    confusedPics.forEach(function(pic){
            $(".pics").append("<img class='placement'src='"+pic+"'>");
        });
    
    }
function crazyMood(){
    $(".pics").fadeIn();
        $("body img").hide();
    $("body").css("background","purple");
    $(".main").css("background","purple");
    
    crazyPics.forEach(function(pic){
            $(".pics").append("<img style='width: 75%; margin:20 auto;' src='"+pic+"'>");
        });
    
    }
function boredMood(){
    $(".pics").fadeIn();
        $("body img").hide();
    $("body").css("background","skyblue");
    $(".main").css("background","skyblue");
    
    boredPics.forEach(function(pic){
            $(".pics").append("<img style='width: 75%; margin:20 auto;' src='"+pic+"'>");
        });
    
    }
function madMood(){
    $(".pics").fadeIn();
        $("body img").hide();
    $("body").css("background","#f23232");
    $(".main").css("background","#f23232");
    
    madPics.forEach(function(pic){
            $(".pics").append("<img style='width: 75%; margin:20 auto;' src='"+pic+"'>");
        });
    
    }