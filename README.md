

# YourHR

YourHR is a job search service designed to help job seekers find ideal job roles based on their qualifications and preferences. This project includes a functional web application where users can sign up and upload their resumes.

## Project Overview

This project consists of a full-stack web application with the following features:
- A signup form for job seekers to enter their personal information.
- Resume upload functionality.
- A backend system to securely store user information and resumes.

## Requirements

- **Frontend**: Basic responsive design with at least 2 pages.
- **Backend**: Secure storage of user data and resumes in a database.
- **Database**: Stores user information and resumes.

## Features

1. **Signup Form**:
   - Allows users to fill out personal information.
   - Users can upload their resumes.

2. **Backend**:
   - Securely stores user information and resumes.
   - Handles file uploads and stores resume files in a database.

3. **Responsive Design**:
   - Basic responsive layout to ensure usability on different devices.

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/yourhr.git
    cd yourhr
    ```

2. **Backend Setup**:

    - Navigate to the `backend` directory.
    - Install dependencies:

      ```bash
      cd backend
      npm install
      ```

    - Configure the database connection in `config/db.js`.
    - Start the server:

      ```bash
      npm start
      ```

3. **Frontend Setup**:

    - Navigate to the `frontend` directory.
    - Install dependencies:

      ```bash
      cd frontend
      npm install
      ```

    - Start the frontend development server:

      ```bash
      npm start
      ```

4. **Database Setup**:

    - Use the provided example database file to set up your database.
    - Import the data into your local or cloud database.

## Usage

- **Frontend**: Access the web application by visiting `http://localhost:3000` (or your deployed URL).
- **Backend**: The backend API will be accessible at `http://localhost:5000` (or your deployed URL).

## Deployment

The application is hosted on a free hosting service. You can access it at the following URL:

[YourHR Live Demo](https://yourhr-jainam.vercel.app) *(replace with your actual deployed URL)*

## Documentation

For detailed information about the application's architecture and functionality, refer to the documentation in the `docs` folder.

## Source Code

The source code can be found in the GitHub repository:

[YourHR GitHub Repository](https://github.com/jainam-b/yourhr)



## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

