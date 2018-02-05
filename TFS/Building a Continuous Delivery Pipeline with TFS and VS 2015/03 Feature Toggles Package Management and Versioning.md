# Feature Toggles Package Management and Versioning

<h2 class="green">Feature Toggles</h2>

Feature Toggles are a mechanism to separate feature deployment from feature exposure.

* Feature toggles are also known as feature flippers, feature flags, feature switch, conditional feature, etc...
* A Feature toggle is an alternative for using branches
* Using Feature Toggles puts code behind conditional logic. After code is tested it is immediately merged with the Dev branch so all developers can use it. Even if it gets put in Prod it is ok since the conditional logic insulates the new code until turned on.
* Feature Toggles enable the developer to give control back to the business on when to release the feature

<h2 class="green">Dependency & Package Management</h2>

Dependencies are managed with package management solutions

* For Web front end we use *Bower*
* For Web server node & tools we use *Npm* (Node Package Manager)
* For .Net artifacts we use *NuGet*

<h2 class="green">Versioning</h2>

<p class="quote">"Version numbers are an engineering artifact and should never be dictated from elsewhere" -- Marcel de Vries</p>

<p class="quote">"In the world of software management there exists a dreaded place called 'dependency hell'." --Tom Preston-Werner</p>

### Semantic Versioning

Given a version number <span class="darkorange">MAJOR</span>**.**<span class="darkorange">MINOR</span>**.**<span class="darkorange">PATCH</span>, increment the:

* <span class="darkorange">MAJOR</span> version whenyou make incompatible API changes
* <span class="darkorange">MINOR</span> version when you add functionality in a backwards-compatible manner
* <span class="darkorange">PATCH</span> version when you make backwards-compatible bug fixes
* Additional labels for pre-release and build metadata are availabe as extensions to the <span class="darkorange">MAJOR</span>**.**<span class="darkorange">MINOR</span>**.**<span class="darkorange">PATCH</span> format