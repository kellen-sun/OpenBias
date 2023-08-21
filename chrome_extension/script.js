async function fetchData(link, title) { 
    fetch("http://localhost:5001/articles/").then(response=> response.json())
    .then(sample=>{
        var linkFound = false;
        console.log(sample);
        for (let i=0; i<sample.length; i++) {
            //console.log(sample[i].url);
            if (sample[i].url==link){
                linkFound = true;
                var ratings = sample[i]["reviews"];
                var sum = 0;
                var length = 0;
                for (var key2 in ratings) {
                    sum += parseInt(key2)*ratings[key2];
                    length += ratings[key2];
                }
                var avg = Math.round(sum/length * 100) / 100;
                
                console.log(avg);
                document.getElementById("average").innerHTML="&#x25CF";
                document.getElementById("average").style.paddingLeft = 45*avg + "px";
                document.getElementById("rate").innerHTML="Average Ratings";
                data = {
                    "document": {
                      "content": title,
                      "type": "PLAIN_TEXT"
                    }
                  };
                axios.post('https://language.googleapis.com/v1/documents:moderateText?key=AIzaSyAAFBGhuP1QwijXBky9-L8blKewIVr2zNc', data)
                .then((res) => {
                    var confidence = res.data["moderationCategories"][13]["confidence"];
                    if (confidence>0.4) {
                        document.getElementById("political").innerHTML="This article is likely political.";
                    } else {
                        document.getElementById("political").innerHTML="This article is likely NOT political.";
                    }
                }).catch((err) => {
                    console.error(err);
                });
                break;
            }
        }
        if (! linkFound){
            //recursively call fetchData after adding the new website to the database
            //make it not numerical but with a nice scale
            console.log(linkFound);
            obj = {"title": title, "url": link, "reviews":{"1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0}};
            axios.post("http://localhost:5001/articles/add", obj).then(function (response) {
                console.log(response);
            });
            fetchData(link, title).then(res => {return res});
            //document.getElementById("average").innerHTML="Average bias: "+ "Link not found";
        }
    });
        
}

async function rated(n, link, title) {
    fetch("http://localhost:5001/articles/").then(response=> response.json())
    .then(sample=>{
        var linkFound = false;
        console.log(sample);
        for (let i=0; i<sample.length; i++) {
            //console.log(sample[i].url);
            if (sample[i].url==link){
                linkFound = true;
                var ID = sample[i]._id;
                var obj = sample[i];
                break;
            }
        }
        if (linkFound){
            obj["reviews"][n] += 1;
            axios.post("http://localhost:5001/articles/update/"+ID, obj).then(function (response) {
            console.log(response)
            });
        //give fetched data on a scale instead of just number
            fetchData(link, title).then(res => {return res});
            document.getElementById("rating").style.display = "none";
            document.getElementById("average").style.display = "block";
            document.getElementById("average2").style.display = "block";
        } else {
            fetchData(link, title).then(res => {return res});
            rated(n, link, title).then(res => {return res});
        }
    })
    
    //what if link not found
    console.log(n);
}




//fetchData();
var link;
chrome.tabs.query({active: true, lastFocusedWindow: true}, async tabs => {
    link = tabs[0].url;
    console.log(tabs);
    title = tabs[0].title;
    

    document.getElementById("b1").onclick = function() {rated(1, link, title)};
    document.getElementById("b2").onclick = function() {rated(2, link, title)};
    document.getElementById("b3").onclick = function() {rated(3, link, title)};
    document.getElementById("b4").onclick = function() {rated(4, link, title)};
    document.getElementById("b5").onclick = function() {rated(5, link, title)};
    document.getElementById("b6").onclick = function() {rated(6, link, title)};
    document.getElementById("b7").onclick = function() {rated(7, link, title)};
    document.getElementById("b8").onclick = function() {rated(8, link, title)};
    document.getElementById("b9").onclick = function() {rated(9, link, title)};

    //return link;
});

document.getElementById("average").style.display = "none";
document.getElementById("average2").style.display = "none";