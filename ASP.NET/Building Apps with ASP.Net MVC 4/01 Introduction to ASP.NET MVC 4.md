#Install VS Express
This course uses Visual Studio Express 2012; other versions of Visual Studio work as well.  Update the version to be the newest version available  
- In a Browser search for Web Platform Installer (Free Download)
 - We will install Visual Studio Express.  A local web (to host my application) and sql (to save data) server will also be installed.
 - After Web Platform Installer initiallized search for 2012 web (update 2012 to the latest version)
 - Choose Visual Studio Express 2012 for Web with Windows Azure SDK
 
 #Get Started
 1. New Project...
 2. ASP.NET MVC 4 Web Application
   - can use Visual Basic; the course uses C#
 3. Give the project a name that is meaningful and useful.  <b>It is important to get this right at the start</b>
 4. Select the <i>Location</i> to store the project
 5. Choose the template for building your app.  Empty is great if you know exactly what you need; otherwise, choose the most appropriate template
 6. Choose the <i>View Engine</i>.  The View Engine helps create the HTML needed to send back to the clients browser.
 7. Visual Studio will create the project and include all the librarys etc... needed to run the project.
 8. After the project has been created you can run the application and see the default / blank application  

   ![MVC Model](img/MVC.jpg)  
   
#MVC Model
 The ASP.NET MVC framework derives its name from the model view controller design pattern. This design pattern has been present in software applications for several decades at this point and it's a design pattern to follow when you want to separate the responsibilities of the components in your user interface layer. 
 
 The C in MVC is for <b>controller</b>. A controller is a software component that will be the target for some external stimulus. In the case of a web application that external stimulus is usually an incoming HTTP request. So, when someone launches a web browser and points it to the slash home slash about location of my application. That incoming request needs to go to a controller that is in my application.  
 
 When the controller receives the request, it's responsible for building a <b>model</b> the M in MVC. It's the model that contains all the information that you need to present to the user to satisfy that incoming request. In the case, of slash home slash about, the model might just be some information about the website or about the company or the people behind the website.  
 
  The controller then selects a <b>view</b> to display the model. Views in the MVC design pattern are very simple objects. Think of them as templates. They take pieces of data from the model and they place them into a proper location on the page.
  
##Making Changes
- Insert a Break point then press <b>F10</b> to step through the code.
- Hover over code to view the values and other useful information
- Pressing <b>F5</b> will continue running the app
- Razor views have a default extension of <i>.cshtml</i>
- The <b>Layout View</b> contains information that is common to the whole application not just certain views

One approach have the controller pass information to the view is by using the ViewBag and properties.  <b>ViewBag</b> is a dynamically typed object in C sharp. That means you can add any sort of property to the ViewBag and it will be available inside of the view to pull out and retrieve and display.  Examples of properties might be Message or Location (`ViewBag.Message` or `ViewBag.Location`).  In the view you would then reference this by entering something like `<div>Location: @ViewBag.Location</div>`.  The <b>@</b> symbol tells the Razor View engine "here is a C# expression, evaluate it and write the response right here"

Another approach using a <b>strongly typed model</b>.  A strongly typed model declares properties in the Controller and then uses them in the view.

[Ode To Food Source Code](http://odetofoodmvc4.codeplex.com)

