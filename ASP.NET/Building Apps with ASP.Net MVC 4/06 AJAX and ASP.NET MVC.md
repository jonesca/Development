<b><i>AJAX</i></b>: Asynchronous JavaScript and XML.  In a nutshell, it is the u se of the XMLHttpRequest object to communicate with server-side scripts.  It can send as well as receive information in a variety of formats including JSON, XML, HTML, and even text files.  

#AJAX Helpers
```razor
@using(Ajax.BeginForm(
	new AjaxOptions{
		HttpMethod="get",
		InsertionMode=InsertionMode.Replace,
		UpdateTargetID="restaurantList"}))
		
{
	<input type="search" name"seartTerm" />
	<input type="submit" value="Search By Name" />
}
```