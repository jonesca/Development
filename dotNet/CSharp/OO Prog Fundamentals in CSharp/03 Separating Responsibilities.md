#Separating Responsibilities
##Separation of Concerns
- An application should be decomposed into parts with minimal overlap and each part should be responsible for a separate concern
- <b class="highlight">Minimizes coupling</b>
 - Coupling is the degree to which classes are dependent on each other - the fewer dependencies the easier it is to maintain, update, test
 - For example each class in our example project has Retrieve and Save methods couple them to the Data Access Layer; it would be better to remove them to their own class
- <b class="highlight">Maximizes cohesion</b>
 - Cohesion is the measure of how related everything in a class is to the purpose of the class
 - Items not related to the purpose of the class should be moved to another class
- <b class="highlight">Simplifies Maintenance</b>
- <b class="highlight">Improves Testability</b>