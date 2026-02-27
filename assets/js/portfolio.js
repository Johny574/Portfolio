const portfolioprojects = {
   "opensource": [      
	],
	"closed":[
		{
			"name":"2D Racing",
			"cover":"./images/projects/2DRacer/1.png",
			"description":"2D racing game made as a learning experience",
            "url":"https://www.google.com",
			"image1":"./images/projects/2DRacer/1.png",
			"image2":"./images/projects/2DRacer/2.png",
			"image3":"./images/projects/2DRacer/3.png"
		},
        {
			"name":"Barberian",
			"cover":"./images/projects/Billards/1.png",
			"description":"Console game made as an idea. Inspiration take from a game that used to run on mxit on mobile.",
			"url":"",
			"image1":"./images/projects/Billards/1.png",
			"image2":"./images/projects/Billards/2.png",
			"image3":"./images/projects/Billards/3.png"
		},
        {
			"name":"Billards",
			"cover":"./images/projects/Billards/1.png",
			"description":"Top down 2D billards game. Challenged myself to make it in 24 hours.",
			"url":"",
			"image1":"./images/projects/Billards/1.png",
			"image2":"./images/projects/Billards/2.png",
			"image3":"./images/projects/Billards/3.png"
		},
        {
			"name":"Chess",
			"cover":"./images/projects/Chess/1.PNG",
			"description":"2D chess game with integrated stockfish. Challenged myself to make it in a couple of hours.",
			"url":"",
			"image1":"./images/projects/Chess/1.PNG",
			"image2":"./images/projects/Chess/2.PNG",
			"image3":"./images/projects/Chess/3.PNG"
		},
        {
			"name":"Halloween Scramble",
			"cover":"./images/projects/HalloweenScramble/1.PNG",
			"description":"Isometric 3D game made for the halloween jam of 2025.",
			"url":"",
			"image1":"./images/projects/HalloweenScramble/1.PNG",
			"image2":"./images/projects/HalloweenScramble/2.PNG",
			"image3":"./images/projects/HalloweenScramble/3.PNG"
		},
        {
			"name":"Isometric Racing",
			"cover":"./images/projects/Isometric Racing/1.PNG",
			"description":"Game made as a learning experience.",
			"url":"",
			"image1":"./images/projects/Isometric Racing/1.PNG",
			"image2":"./images/projects/Isometric Racing/2.PNG",
			"image3":"./images/projects/Isometric Racing/3.PNG"
		},
        {
			"name":"My Tiny Adventure",
			"cover":"./images/projects/MyTinyAdventure/2.PNG",
			"description":"Top down 2D rpg.",
			"url":"",
			"image1":"./images/projects/MyTinyAdventure/1.PNG",
			"image2":"./images/projects/MyTinyAdventure/2.PNG",
			"image3":"./images/projects/MyTinyAdventure/3.PNG"
		},
        {
			"name":"Street Racing League",
			"cover":"",
			"description":"One of my very first projects. 3D game.",
			"url":"",
			"image1":"",
			"image2":"",
			"image3":""
		},
        {
			"name":"Supermark Defense",
			"cover":"",
			"description":"Isometric game made as a learning experience.",
			"url":"",
			"image1":"",
			"image2":"",
			"image3":""
		},
        {
			"name":"Tiny Ranch",
			"cover":"",
			"description":"Mobile game made as a learning experience.",
			"url":"",
			"image1":"",
			"image2":"",
			"image3":""
		},
	],
	"open":[
		{
			"name":"Tribal Realms",
			"cover":"",
			"description":"",
			"url":"",
			"image1":"",
			"image2":"",
			"image3":""
		},
	]
};

window.onload = function() {
    toggleAllProjects();
};


function toggleProjects(projects)
{
    document.getElementById("projects").children[0].innerHTML = "";
    portfolioprojects[projects].forEach(item => {
        const cardcontainer = document.createElement("div");
        cardcontainer.className = "col-lg-4 col-md-6"
        const card = document.createElement("div");
        card.className = "portfolio-box shadow";
        card.innerHTML = `
        <img src="${item.cover}" alt="${item.name}" class="img-fluid">
        <div class="portfolio-info">
            <div class="caption">
            <h4>${item.name}</h4>
            <p>${projects}</p>
            </div>
        </div>
        `;
        card.addEventListener("click", () => {
            localStorage.setItem("project", JSON.stringify(item));
            window.location.href = "project.html";
        });
        cardcontainer.appendChild(card);
        document.getElementById("projects").children[0].appendChild(cardcontainer);
    });
}

function toggleAllProjects()
{ 
    document.getElementById("projects").children[0].innerHTML = "";
    portfolioprojects["open"].forEach(item => {
        const cardcontainer = document.createElement("div");
        cardcontainer.className = "col-lg-4 col-md-6"
        const card = document.createElement("div");
        card.className = "portfolio-box shadow";
        card.innerHTML = `
        <img src="${item.cover}" alt="${item.name}" class="img-fluid">
        <div class="portfolio-info">
            <div class="caption">
            <h4>${item.name}</h4>
            <p>Open</p>
            </div>
        </div>
        `;
        card.addEventListener("click", () => {
            localStorage.setItem("project", JSON.stringify(item));
            window.location.href = "project.html";
        });
        cardcontainer.appendChild(card);
        document.getElementById("projects").children[0].appendChild(cardcontainer);
    });
   
    portfolioprojects["closed"].forEach(item => {
        const cardcontainer = document.createElement("div");
        cardcontainer.className = "col-lg-4 col-md-6"
        const card = document.createElement("div");
        card.className = "portfolio-box shadow";
        card.innerHTML = `
        <img src="${item.cover}" alt="${item.name}" class="img-fluid">
        <div class="portfolio-info">
            <div class="caption">
            <h4>${item.name}</h4>
            <p>Closed</p>
            </div>
        </div>
        `;
        card.addEventListener("click", () => {
            localStorage.setItem("project", JSON.stringify(item));
            window.location.href = "project.html";
        });
        cardcontainer.appendChild(card);
        document.getElementById("projects").children[0].appendChild(cardcontainer);
    });
     
    portfolioprojects["opensource"].forEach(item => {
        const cardcontainer = document.createElement("div");
        cardcontainer.className = "col-lg-4 col-md-6"
        const card = document.createElement("div");
        card.className = "portfolio-box shadow";
        card.innerHTML = `
        <img src="${item.cover}" alt="${item.name}" class="img-fluid">
        <div class="portfolio-info">
            <div class="caption">
            <h4>${item.name}</h4>
            <p>Open Source</p>
            </div>
        </div>
        `;
        card.addEventListener("click", () => {
            localStorage.setItem("project", JSON.stringify(item));
            window.location.href = "project.html";
        });
        cardcontainer.appendChild(card);
        document.getElementById("projects").children[0].appendChild(cardcontainer);
    });
}