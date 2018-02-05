# TFS Release Management

<p class='tip'><strong class='green'>In continuous delivery we strive to separate releasing from deployment</strong>.  This provides better stability to the deployment, better validation of the deployment and makes releasing a feature a functional operation, preferably done by the "business" at the moment they prefer</p>

### First you build the software

* And validate product quality

### Then you deploy the software

* And validate runtime stability

### Then you release the feature

* And validate feature usage

### Clean separation in the different stages of delivery

<strong class='green'>TFS provides release management</strong>

<p class='tip'>With release management we pick up the artifacts we build in the build pipeline, and then we provision environments on which we deploy our software.  After deployment we then release the feature and monitor closely the behavior of our system</p>

<strong class='green'>Provisioning</strong> 

<p class='tip'>Prepare the environment on which we can deploy our new version of the software.</p>

<strong class='green'>Azure Resource Manager (ARM)</strong>

<p class='tip'>ARM is used to define a template for the environment you want to provision.  You use a template together with a set of parameters, to create a new instance of the template</p>

<strong class='green'>PowerShell & DSC</strong>

<p class='tip'>We use PowerShell and PowerShell DSC as the scripting language to configure our provisioned machines aswe need with the featuresandroles we need.</p>

<strong class='green'>Deployment</strong>

<p class='tip'>This is where we actually install the software on an environment.  This is also often doen using PowerShell or other scripting solutions</p>