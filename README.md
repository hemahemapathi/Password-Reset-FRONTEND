
#PASSWORD RESET FLOW - FRONTEND 

  
   1. The ForgetPassword.jsx component renders a form where users can input their email address to receive a password reset link.

   2. Make sure to import and use the necessary React and Bootstrap components for form handling and styling.

   3. The form triggers an API call (POST /api/auth/forgot-password) to the backend server when submitted.

   4. Include client-side form validation to ensure valid email inputs.

   5. The UI should display success or error messages based on the response from the backend.

   6. Include error handling to manage scenarios where the email is not found or the backend is unreachable.
