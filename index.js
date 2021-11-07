
        /* this is an event */
       alert("Jay's week 1 assignment. Hit Enter! "); 

        var username = prompt("Enter a famous musicians name in full (lowercase) to win a prize.");
        var prize = new Array("a trip to Liverpool,UK!","a cutting of Ringo's hair!","a Rolls Royce!","VIP tickets to see Paul McCartney live!","");
        var carpictures = new Array("cavern.jpg","hair.jpg","rr.jpg","tix.jpg")



if(username==="george harrison"){
    document.write("<h3>"+ username +", is correct. You've won "+prize[0]+" </h3>",  );
    document.write("<img src=\"" + carpictures[0] + "\">");
   } 

else if(username==="ringo star"){
    document.write("<h3>"+ username +", is correct. You've won "+prize[1]+" </h3>", );
    document.write("<img src=\"" + carpictures[1] + "\">");
    
}

else if(username==="john lennon"){
    document.write("<h3>"+ username +", is correct. You've won "+prize[2]+" </h3>", );
    document.write("<img src=\"" + carpictures[2] + "\">");
    
}

else if(username==="paul mccartney"){
    document.write("<h3>"+ username +", is correct. You've won "+prize[3]+" </h3>", );
    document.write("<img src=\"" + carpictures[3] + "\">");
    
}

else{
    document.write("Sorry, "+ username +" is incorrect. Think Liverpool, UK. Refresh");
    
}

