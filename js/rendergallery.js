
async function MakeGallery ()
{
	let response = await fetch ("json/cutcontent.json");
	let jsonObject =  await response.json(); // Convert response to JSON.
	
	var gallery = document.getElementById ("Gallery");

	for (i in jsonObject) // Itterate through all the JSON objects.
	{
		var container = document.createElement ("DIV"); // Create a box for our stuff.
		container.className += "GalleryBox";
		gallery.appendChild (container);
		
		var link = document.createElement ("A"); // Create a link to the image.
		link.setAttribute ("href", jsonObject [i].path);
		container.appendChild (link);
		
		var image = document.createElement ("IMG"); // Add the image.
		image.setAttribute ("src", jsonObject [i].path);
		image.setAttribute ("alt", jsonObject [i].caption);
		image.setAttribute ("width", "100%");
		image.setAttribute ("title", jsonObject [i].caption);
		link.appendChild (image);
		
		container.innerHTML += "<p>" + jsonObject [i].caption + "</p>"; // Add the caption.
	}
}

MakeGallery (); // Call the function on page load.