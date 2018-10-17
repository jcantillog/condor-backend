# Running the project
 - Download the code
- Using the terminal, go to the project folder
- Run 'npm install' for installing all the project dependencies
- Run 'npm start' to get the app running on localhost
 # Endpoints
   ## GET /courses
  
  Return the entire list of courses.
   ## GET /courses/{page}
  
  Return a list of courses with the given name.
 # Courses collection
 ```json
      {
          "id": "Number",
          "name": "String",
          "imageUrl": "String",
          "imageText": "String",
          "dateAdded": "Date",
          "maximumCredits": "Number",
          "price": "Number",
          "description": "String",
          "payBeforeTakingCourse": "Boolean",
          "popularity": "Number",
          "rating": "Number",
          "numberOfReviews": "Number",
          "numberOfContentPages": "Number",
          "providerId": "Number",
          "completions": "Number",
          "totalEarned": "Number"
      }
```
  
  The JSON above stands for the structure used for the data to be
  stored in and retrieved from the database.