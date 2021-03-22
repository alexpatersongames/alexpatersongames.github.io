hasRunBefore = false; // Observe a wild hack in it's natural habitat.

function ShowGameMenu ()
{
	var element = document.getElementById ("Dropdown");
	var arrow = document.getElementById ("Arrow");
	
	if (!hasRunBefore)
	{
		element.style.visibility = "visible";
		arrow.style.writingMode = "vertical-rl";
		
	}
	else
	{
		if (element.style.visibility === "hidden")
		{
			element.style.visibility = "visible";
			arrow.style.writingMode = "vertical-rl";
		}
		else
		{
			element.style.visibility = "hidden";
			arrow.style.writingMode = "horizontal-tb";
		}
	}
	
	hasRunBefore = true;
}