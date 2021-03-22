
async function MakeDevlog (isArchive)
{
	let response = await fetch ("json/devlogs.json");
	let jsonObject =  await response.json(); // Convert response to JSON.
	
	var container = document.getElementById ("DevlogContainer");
	
	if (isArchive === "true") // Use this on archive.html.
	{
		for (i in jsonObject)
		{
			container.innerHTML += "<p><h3>" + jsonObject [i].title + " - " + jsonObject [i].date + "</h3></p><br>"; // Put the title on.
			container.innerHTML += "<p>" + jsonObject [i].body + "</p>"; // Put the body text on.
			
			if (jsonObject [i].useImage === "true") // Check if we need an image.
			{
				container.innerHTML += "<img src = " + jsonObject [i].imagePath + " alt = '" + jsonObject [i].caption + "' class = 'DevlogImage'></img>"; // Put the image on.
				container.innerHTML += "<p>" + jsonObject [i].caption + "</p>"; // Put the caption on.
			}
			
			container.innerHTML += "<br><br><hr><br><br>"; // Put the link on the bottom.
		}
	}
	else // Use this on the main Canalside page.
	{	
		container.innerHTML += "<p><h3>" + jsonObject [0].title + " - " + jsonObject [0].date + "</h3></p><br>"; // Put the title on.
		container.innerHTML += "<p>" + jsonObject [0].body + "</p>"; // Put the body text on.
		
		if (jsonObject [0].useImage === "true") // Check if we need an image.
		{
			container.innerHTML += "<img src = " + jsonObject [0].imagePath + " alt = '" + jsonObject [0].caption + "' class = 'DevlogImage'></img>"; // Put the image on.
			container.innerHTML += "<p>" + jsonObject [0].caption + "</p>"; // Put the caption on.
		}
		
		container.innerHTML += "<br><br><a href = 'archive.html'> Click here to view previous logs.</a>"; // Put the link on the bottom.
	}
}

MakeDevlog (document.getElementsByName ("DevlogMeta") [0].content); // Call the function on page load.