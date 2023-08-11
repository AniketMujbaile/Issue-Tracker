
# ⚠️Issue Tracker

Created an Issue Tracker Web Application.

### 🔗 Hosted link: [Employee review system](https://issue-tracker-rhhe.onrender.com/)

## ✨Features

● Home Page
 
  * Shows a list of projects
  * Given a button to create a new Project (On creating a new project it
    appear in the list)
    
● Create Project Page
  * Accepts the following fields to create a project
    * Name
    * Description
    * Author
  
● Project Detail Page
  * When the user clicks on a project (in home page) it redirects the user to this
    page which shows bugs related to that project
  * User is able to perform following actions on this page
    * Filter by multiple labels i.e. able to filter by 2 or more
      labels at the same time
    * Filter by author
    * Search by title and description
  * A button to create an issue

● Create issue page
  * User able to create an issue for a project
  * Accept the following fields
    * Title
    * Description
    * Labels (multiple labels can be added to a project)
    * Author


## 🛠️ Tools Used
<img align="left" src="https://user-images.githubusercontent.com/18380165/224329335-3cdf989b-bdce-41e6-82dc-7d4c50d5f283.png" width="100" height="100">
<img align="left" src="https://user-images.githubusercontent.com/18380165/224329345-7363d693-4f27-4a58-8c9e-086d8a3fa420.png" width="100" height="100">
<img align="left" src="https://user-images.githubusercontent.com/18380165/224332427-426a3fbb-e25d-4deb-a832-666ae2e2e418.png" width="100" height="100">
<img align="left" src="https://user-images.githubusercontent.com/18380165/224741719-3887a83f-9041-49b5-b1d3-a4b636147582.png" width="120" height="100">
<img align="left" src="https://user-images.githubusercontent.com/18380165/224742317-8448ec1f-c35e-4fa3-99bf-5075da765c1a.png" width="100" height="100">
<img align="left" src="https://user-images.githubusercontent.com/18380165/224742804-66cd82b1-fedd-40a1-ad43-6cd2a7b91e46.png" width="100" height="100">
<br>
<img  src="https://user-images.githubusercontent.com/18380165/224329339-a5174b23-1a5c-4ae4-95c8-ead20a29d77e.png" width="100" height="100">

## 📐Installation
 1)Download Zip and Extract it and then run following commands in directory

 2)Install my-project by running below command in console
```bash
  npm install
```
 3)execute below command to run the server on localhost
```bash
  npm start
```

## 🧑‍💻 Preview...
Main Page
![Main page](Images/Image1.png)

Create Project Page
![create project](Images/Image2.png)

All Issues
![All Issues](Images/Image3.png)

Filter Issues
![Filter Issues](Images/Image4.png)

Search Issues
![Search Issues](Images/Image5.png)


## Folder Structure

* assets
    1. css
        - footer.css
        - header.css
        - home.css
        - issue_page.css
        - layout.css
        - project_page.css
    2. images
    3. js
        - delete_issue.js
        - delete_project.js
        - filterIssue.js
        - searchIssue.js
* config
    - middleware.js
    - mongoose.js
* controllers
    - home_controller.js
    - project_controller.js
* models
    - create_issue.js
    - create_project.js
* routes
    - index.js
    - project.js
* views
   1. partials
        - _footer.ejs
        - _header.ejs
        - _issue_form.ejs
        - _issue_page.ejs
        - _project_form.ejs
    - home.ejs
    - layout.ejs
    - project_page.ejs
- .gitignore
- index.js
- package-lock.json
- package.json






