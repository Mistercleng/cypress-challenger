
*Challenge Tasks*

 **1.Basic API Check Instructions:** Write a TypeScript script to send a GET request to the endpoint /api/products to retrieve a list of products., Check that the response status is 200. Verify that the response contains an array of products (no need for detailed field validation). 

 **Expected Outcome:** A concise script that verifies the API response status and checks if products are returned as an array. 

 **2. UI Search Test Instructions:** Open the homepage of the web application. ⁃ Locate the search bar and type the keyword headphones - Press Enter to trigger the search and wait for results. ⁃ Verify that there is at least one search result displayed. 

 **Expected Outcome:** A Ul automation script that performs a simple search and confirms that results appear. 

Challenge Duration This challenge should take no longer than 30 minutes to complete

Present my personal application’s core functionalities, emphasizing the API integration between the frontend (AngularJS) and backend (Node.js). Highlight API structure, response handling, and verification processes.

Steps:

Create a folder utils to create an Auth class to make the login via API and handle the tasks using OOP.

- I create a resquest with POST method to create the idtoken usin email and password. This auth return the idToken

- I create a seccond fucntion to call Auth.login to reuse the token and call the end point /api/materials

- I create a function to validate the material property getting the material by name

On apiAdvancedTest
Created a step to verify the login directly
Create a step using the OOP Auth class
Create a step with the required test showing the material is an array list and also validating the properties all using OOP 

Improviments we can crteate a BuilderPattern class to test multple scenarios of properties to validate data

Ui test 
Create a Page Objective ou FacadePattern to extract the elements page and actions 

On test I call the PageObjective elements/functions 
Create the step to check if the page is able to search an item "headphone"
and create an assertion to verify the expected result
