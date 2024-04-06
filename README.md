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
- **utils:** Contains utility functions for email notifications and other tasks.
- **config:** Holds configuration settings for the database and other services.
- **app.js:** The main application file that initializes the Express app, middleware, and routes.
