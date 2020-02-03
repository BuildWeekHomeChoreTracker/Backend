# Chore Tracker team

## Endpoints




                                 
   # Register Parent
   
  ### EndPoint :




| Method        | EndPoint           | 
| ------------- |:-------------:| 
| POST      | api/auth/register|



                        
                                                              
  ### New Parent Object: 
   
   
   
   
   | field        | metadata           | 
   | -------------|:-------------:| 
   |   firstname    |  Required   |
   |   lastname    |  Required   |
   |    email       |  Required and Unique |
   |  username   | Required and Unique
   |   password    |  Required   |
   

  ### New Child Object: 
   
   
   
   
   | field        | metadata           | 
   | -------------|:-------------:| 
   |   name    |  Required   |
   |   username    |  Required   |
   |   password    |  Required   |
   |   parent_id   |  Required   |
   |   chore_id    |  Required   |
   

    | Method        | EndPoint           | 
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
   |   family_id   |       |
   
   #### Family Object :


   
   | field        | metadata          | 
   | -------------|:-------------:| 
   |   name        |  Required   |
   |   parent_id    |  Required   |
   |   child_id     |  Required   |
  



 
## Update/Delete 
 * make a request with the id of the recipe to update or delete recipe.
 
 
 
 Method        |       EndPoint | Description
 | -------------|:-------------:| ----------|
 | PUT         |  api/chore/:id|  Update chore
  | DELETE         |  api/chore/:id|   Delete recipe

   


### BackEnd Build with Node.js
   ### Libraries:
   * express
   * knex
   * bcryptjs
   * jsonwebtoken