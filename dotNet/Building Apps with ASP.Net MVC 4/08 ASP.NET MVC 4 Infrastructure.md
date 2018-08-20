#Caching
Output caching allows you store the output of a particular controller action in memory.  ASPNET can then response to future requests for the same action by giving back the same result.  This avoids running the same code over and over to get the same response as applicable.
```csharp
public class CachedController : controller
{
	[OutputCache(Duration=60, VaryByParam="none")]
	//duration is the one required parameter; it is specified in seconds.  The Duration parameter specifies how long to hold the cache 
	public ActionResult Index()
	{
		Return View();
	}	
}
```
#Cache Settings
- <b>VarybyParam</b>
 - Vary by "*" to cache for every permutation of all parameters.  This is the default setting
 - Vary by "none" to always cache the same content
 - Vary by "name" to cache for every value of name parameter  
- <b>Location</b>
 - Cache on server, client, client and server
- <b>VaryByHeader</b>
 - Vary on an HTTP header, like Accept-Language
- <b>VaryByCustom</b>
 - Implement custom method in global.asax
- <b>SqlDependency</b>
 - Cache until data in a SQL Server table changes
 
 ###Example
 ```csharp
 [OutputCache(Duration = 350, VaryByHeader = "X-Requested-With", Location = OutputCacheLocation.Server]
 ```
#Cache Profiles
###Example
```csharp
//This code is in the controller
[OutputCache(CacheProfile="Aggresive",. VaryByParam="firstName")]
public ActionResult Index(sring firstName)
{
	// ...
	
	Return View();
} 
```
###Acompanying HTML in the Web.config file.
Suggest using cache profiles and calling them by name.  Any changes can be made in one location rather than having to search out all the places to make changes
```html
<caching>
	<outputCacheSettings>
		<outCacheProfiles>
			<add name="Aggressive" duration="300" />
			<add name="Mild" duration="10" />
		</outCacheProfiles>
	</outputCacheSettings>
</caching>
```

#Localization
#Resources
- Resx files can store localized text and binary assets
 - Strings.resx will store default resources
 - Strings.es.resx will store resource for Spanish culture
- Resource manager will load appropriate file
- Visual Studio generates strongly-typed class
#Diagnostics
-<b>Logging options</b>
 - ASP.NET Health Monitoring
 - log4net (http://logging.apache.org/log4net/index.html)
 - elmah (http://code.google.com/p/elmah)
 - P&P Application Logging Block
 
#Health MOntiroing and ELMAH