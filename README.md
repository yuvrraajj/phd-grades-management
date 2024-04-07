Website project is hosted at : phd-gms.netlify.app

Team : Null Pointers
Akshat Ajmera
Ayush Malik
Joydeep Saha
Ayush Malik



# PhD Grade Management System - Backend

This repository contains the backend code for a web-based PhD grade management system developed for the CSIS department. The system facilitates the process of submitting, approving, and accessing PhD grades for students, supervisors, and the Head of Department (HOD).

### Technologies

- **Node.js:** Server-side runtime environment
- **Express.js:** Web framework for building APIs
- **MongoDB:** NoSQL database for data storage
- **Mongoose:** Object modeling for MongoDB
- **Passport.js:** Authentication middleware
- **Google OAuth:** Authentication with Google accounts
- **Multer:** File upload middleware
- **PDFKit:** PDF generation library
- **Nodemailer:** Email sending library

### Functionalities

**Authentication:**

- Users can log in using their Google accounts.
- User roles (admin, supervisor, HOD, student) are determined based on email domains.
- Unauthorized login attempts are redirected to an error page.

**Admin Dashboard:**

- Provides an overview of user and grade statistics.
- Allows admins to create, view, update, and delete users.
- Enables admins to view all PhD grades.

**Supervisor/Mentor:**

- Can view a dashboard with student and grade summaries.
- Can access a list of students under their supervision.
- Can create, update, and sign PhD grade entries for their students.

**HOD:**

- Has access to a dashboard displaying grade statistics.
- Can view a list of all PhD students and their grades.
- Can view and approve pending PhD grades submitted by supervisors.
- Upon approval, an email notification is sent to the respective student.

**Student:**

- Can view their dashboard with their current PhD grade status.
- Can download a PDF of their signed PhD grade report if both supervisor and HOD have signed.
- Can view and update their profile information.
- Can upload their signature for use in the grade report.

### Code Structure

The code is organized into the following files and folders:

- **models:** Contains Mongoose schemas for User, UserRole, and PhdGrade.
- **routes:** Defines API endpoints for different user roles and functionalities.
- **controllers:** Implements the logic for handling API requests.
- **middlewares:** Provides middleware functions for authentication and authorization.
- **utils:** Contains utility functions for email notifications.
- **config:** Holds configuration settings for the database and other services.
- **app.js:** The main application file that initializes the Express app, middleware, and routes.








# PhD Grade Management System - Frontend

## Overview

This React application aims to provide a platform for managing student grades and academic information within a university setting. The system caters to different user roles, each with specific functionalities and access levels.

## Technology Stack


*   React: For building the user interface and managing component states.
*   React Router: For handling navigation between different pages/components.
*   HTML/CSS: For structuring and styling the application.
*   JavaScript: For adding interactivity and dynamic behavior.


## Code Structure

*   **App.js:** The main component that defines the overall structure of the application and sets up routes using React Router.
*   **Home.jsx:** The home page component with login options for different user roles.
*   **Student.jsx:** The student home page component with options to access grades, courses, projects, and thesis information (some under development).
*   **Admin.js:** The admin home page component providing access to user management, role-based access control, system management, and settings (some under development).
*   **Faculty.js:** The faculty home page component with options for grade management, student management, and academic progress tracking (some under development).
*   **GradeManagement.js:** A component for faculty to enter and manage student grades for various components like TP/PLS, seminars, and thesis.
*   **StudentGrades.js:** A component that displays the student's grades for different courses.
*   **UserManagement.js:** A component that allows admins to view and manage users (currently only displays user information).
*   **UnderConstruction.js:** A placeholder component for features that are still under development.

## Application Flow

1.  **Home Page (Home.jsx):** The user selects their role (Admin, Faculty, Student, or HoD).
2.  **Role-Based Redirection:** Based on the selected role, the user is redirected to the corresponding home page.
3.  **Home Pages (Student.jsx, Admin.js, Faculty.js):** Each role has a dedicated home page with options relevant to their responsibilities.
4.  **Grade Management (GradeManagement.js):** Faculty can enter and manage student grades.
5.  **Student Grades (StudentGrades.js):** Students can view their grades for different courses.

## Future Implementations

*   **Backend Integration:** Develop the backend infrastructure using Node.js, Express.js, and a suitable database to store and manage data.
*   **User Authentication and Authorization:** Implement a secure system for user login, registration, and role-based access control.
*   **Complete Under Construction Features:** Finalize the development of features such as course materials access, project management, thesis management, role-based access control, system management, and settings configuration.
*   **Enhanced User Management:** Allow admins to create, edit, and delete user accounts.
*   **Downloadable Marksheets:** Enable students to download their grades as PDF or other formats.
*   **Academic Progress Tracking:** Provide faculty and students with tools to monitor academic progress.
*   **Communication Tools:** Implement features for communication between students, faculty, and admins.
*   **Reporting and Analytics:** Generate reports and insights on student performance and other academic data.
