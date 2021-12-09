var displayContainer = document.getElementById("display");
var anotherDisplay = document.getElementById("anotherDisplay");




function onClick(){
    var subreddit = document.getElementById("subreddit");
    let value = subreddit.value;
    console.log(value);
    const promise = fetch("https://www.reddit.com/r/"+ value + "/.json")
    .then(response => response.json());

    promise.then(data=>{
        for(i=0; i<data.data.children.length; i++){
         const img = new Image();
         img.classList.add("image");

         const div = document.createElement("div");
         div.classList.add("div");

        const link = document.createElement("a");
        link.classList.add("link");

        console.log(data.data.children[i])

        div.innerHTML = data.data.children[i].data.title;
        img.src = data.data.children[i].data.thumbnail;

        link.innerHTML = "A link to this cutie!"; 
        link.href = "https://www.reddit.com" + data.data.children[i].data.permalink;

        displayContainer.appendChild(div);
        displayContainer.appendChild(img);
        displayContainer.appendChild(link);
    }
})
}
