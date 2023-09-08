
// key : AIzaSyDgv-ToqwoVeH_iMBouKnpnuMXWjqXbK8I

// list : PLboMi2lmGKuASt2pNcNqdEgXbbOkKHR3y

let vidList = document.querySelector(".vidList");
let key = "AIzaSyDgv-ToqwoVeH_iMBouKnpnuMXWjqXbK8I";
let playListId = "PLboMi2lmGKuASt2pNcNqdEgXbbOkKHR3y";

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}`;

fetch(url)
    .then((data)=>{
        // console.log(data);
        return data.json();
    })
    .then((json)=>{
        console.log(json);
        let items = json.items;
        console.log(items); //객체배열

        let result = "";
        items.map((el,index)=>{

            let title = el.snippet.title;
            if(title.length > 30){
                title = title.substr(0,30) + "...";
            }

            let des = el.snippet.description;
            if(des.length > 100){
                des = des.substr(0,100) + "...";
            }

            let date = el.snippet.publishedAt;
            date = date.split("T")[0];
        
            // [2023-08-29,06:16:12Z]
            result += `
                <article>
                    <a href="${el.snippet.resourceId.videoId}" class="pic">
                        <img src="${el.snippet.thumbnails.medium.url}">
                    </a>

                    <div class="con">
                        <h2>${title}</h2>    
                        <p>${des}</p>
                        <span>${date}</span>
                    </div>
                </article>
            `
        });
        vidList.innerHTML = result;
    })
