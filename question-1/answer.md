# Node.js Architecture and Internals

## Node.js Architecture
Node.js is a javascript runtime built to execute javascript outside the browser.It is designed for non-blocking,asynchronous and event-driven applications.
 # JavaScript Engine
 -v8 is the javascript engine developed by Google.
 -It converts javascript code into machine-level code so the system can execute it.
 -v8 is responsible only for:
    -Parsing javascript
    -Compling it
    -Executing it
  -It does not handle file systems,networking,or timers.

  ## Node.js Core APIs

   # Q1 Role of Frontend 
     The frontend is the part of a web application that users directly see and interact with in their browser.Its main role is to present information clearly and allow users to perform actions easily.

   # User Interface
     The frontend is responsible for designing and displaying the user interface.This includes layouts,buttons,forms,colors,fonts,and overall visual structure.A good UI makes the application easy to understand and visually appealing.

   # Communication with Backend
      The frontend communicates with the backend using HTTP requests (GET,POST,PUT,DELETE).It sends user data to the backend and recieves responses such as JSON data,which is then displayed to the user.


   # Q2. Role of Backend
     The backend is the part of a web application that works behind the scenes.It manages data, processes requests,and ensures the application works securely and correctly.

   # Server-side Processing
     Backend handles all server-side logic.It processes requests coming from the frontend,applies rules and caculations,and prepares the correct response to send back.

   # Database Handling
      Backend is responsible for storing,retrieving,updating,and deleting data from databases.It ensures data consistency and manages complex quieres effeciently.

   # Security and Authentication
      Backend manages user authentication and authorization.It verifies user credentials,protects sensitive data,prevents unauthorized access, and implements security measures like encryption and access control.


  ## Q3. Business Logic
     Business Logic refers to the rules and decision-making processes that define how a business operates within a web application.It determines what should hsappen when certain actions are performed.Business logic is usually implemented in the backend and ensures that the application follows real-world business rules.
       
   # E-commerce Website
      Calculating total price after applying discounts,taxes and shipping charges.Preventing checkout if the product is out of stock.

   # Banking Application
      Checking minimum balance before allowing a money transfer.Applying transction limits based on account type.

   # Online Learning Platform
      Allowing access to paid courses only after successful payment.Tracking course completion before issuing certificates.

   ## Q4. Client-server Model
      The client-server model is a communication structure where tasks are divided between service providers (servers)
      and service requesters(clients).

   # Who is the Client
     The client is the users device or application,usually a web browser or mobile app. It sends requests and displays responses.

   #  Who is the Server
      The server is a system that recieves client requests,processes them,accesses databases if needed, and sends back
      responses.

   #  How Communication Happens
       Communication happens using HTTP or HTTPS protocols.The client sends a request to server,the server processes it,and then sends a response back to the client.

  ## Q5. Three-Tier Architecture
      3-Tier Architecture is a software design pattern tht divides a web application into three layers to improve scalability,security, and maintainbility.

   # Presentation Layer
      This is the frontend layer.It handles user interface and user interaction.Technologies like HTML,CSS, and javascript are used here.

   # Application (Business) Layer
      This layer contains the business logic.It processes user requests,applies rules,and controls the flow of data between the presentation and data players.

   # Data Layer
     This layer manages the database.It stores and retrieves data using database systems like MySQL,PostgreSQL,or MongoDB.

   ## Q6.Javascript as a backend language
      Javascript is widely used as a backend language because of its speed,flexibility,and strong ecosystem.

   # Performance
      Javascript uses non-blocking,event-driven architecture,which makes it efficient for handling multiple requests simultaneosly.

   # Ecosystem
      Javascript has a large ecosystem with thousands of librariew and tools available through npm.This helps developers build applications faster.

   # Popular Backend Frameworks
      Node.js-Runtime environment for executing javascript on the server.
      Express.js-Lightweight framework for building APIs.
      NestJS-Structured and scalable backend framework.             