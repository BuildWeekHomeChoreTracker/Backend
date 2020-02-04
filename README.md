# Chore Tracker team

## All Endpoints should include this :

-- https://chore-tracker1.herokuapp.com




                                 
   # Register Parent
   
  ### EndPoint :




| Method        | EndPoint           | 
| ------------- |:-------------:| 
| POST      | api/auth/register|



                        
                                                              
  ### New Parent Object: 
   
   
   
   
   | field        | metadata           | 
   | -------------|:-------------:| 
   |   fname    |  Required   |
   |   lname    |  Required   |
   |    email       |  Required and Unique |
   |  username   | Required and Unique
   |   password    |  Required   |
   

  ### New Child Object: 
   
   
   
   
   | field        | metadata           | 
   | -------------|:-------------:| 
   |   fstname    |  Required   |
   |   lstname    |  Required   |
   |   username    |  Required   |
   |   password    |  Required   |
    |   parent_id    |  Required   |

   

  ### EndPoint :


| Method        | EndPoint              | 
| ------------- |:-------------:| 
| POST      | api/auth/register/child |

   
                       
   
  ### Login Parent Object: 
   
   
   
   | field        | metadata           | 
   | -------------|:-------------:| 
   | username     |     Required  | 
   | password     |     Required   |


   ### EndPoint
   
   
   Method        |           EndPoint
   | -------------|:-------------:| 
   | POST         |  api/auth/login|


   ### Login Child Object: 
   
   
   
   | field        | metadata           | 
   | -------------|:-------------:| 
   | username     |     Required  | 
   | password     |     Required   |


   ### EndPoint
   
   
   Method        |           EndPoint
   | -------------|:-------------:| 
   | POST         |  api/auth/login/child|
   
   
 # APIs with authorization:
 
 ### must LogIn and have a token to make these requests:
 
 
 * make a request with the id of the user to get all the Chores of the Parent and add Child.
 
 
  Method        |       EndPoint | Description
 | -------------|:-------------:| ----------|
 | GET         |  api/chore |  get all chores
  | POST         |  api/chore|  add new chore
  
  
  
  ### Chore Object:
  
  
  | field        | metadata           | 
   | -------------|:-------------:| 
   |  name        | Required 
   |   description       |  Required  |
   |   Comments   |        |
   |   Completed      |        |
   |   due_date   |         |
   |   chore_score    |   Required  |
   |   bonus_pts    |       |
   |   clean_strk  |        |
   |   photo_obj   |      |
   |   child_id   |  Required     |
   |   parent_id   |  Required    |
   
   #### Family Object :


   




 
## Update/Delete 

 
 
 
 Method        |       EndPoint | Description
 | -------------|:-------------:| ----------|
 | PUT         |  api/chore/:id|  Update chore
  | DELETE         |  api/chore/:id|   Delete recipe

   


### BackEnd Built with Node.js
   ### Libraries:
   * express
   * knex
   * bcryptjs
   * jsonwebtoken