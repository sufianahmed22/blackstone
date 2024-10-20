# BlackStone LogIn + Admin + Student Pages

Design Choices and Thought Process

User-Centric Design:
Focused on creating a straightforward login flow that minimizes user friction. The interface clearly indicates where users should go based on their roles, making it intuitive for them to navigate.

Role-Based Access Control:
Implemented role-based routing to enhance security and usability. By restricting access to certain routes based on the user's role, the application ensures that sensitive information is only visible to authorized personnel.

Use of Mock Data:
Employed a mock data approach for user authentication to simplify development and testing without a backend. This choice allowed for rapid iterations and a focus on frontend functionality.

Clear Error Messaging:
Implemented meaningful error messages to guide users during the login process. This helps users understand what went wrong and how they can correct it, improving the overall experience.

Separation of Concerns:
Kept the code modular by separating components like Login, AdminDashboard, and StudentDashboard. This enhances maintainability and allows for easier updates and testing of individual components.




Challenges Encountered and How They Were Resolved

User Authentication Logic:
Challenge: Implementing a seamless login flow with role-based access without a backend service.
Resolution: Used mock data in a JSON file to simulate user credentials. This allowed for simple client-side validation, facilitating the role-based redirection.

Routing Setup:
Challenge: Configuring React Router for conditional rendering based on user roles while maintaining a clean URL structure.
Resolution: Utilized the Navigate component from React Router to redirect users to the login page when trying to access unauthorized routes. This ensured that only authorized users could access their respective dashboards.

Styling and Responsiveness:
Challenge: Designing a user-friendly and visually appealing interface that is also responsive across devices.
Resolution: Used CSS to create a modern layout and incorporated flexbox for responsive designs. Emphasized on accessibility and readability, ensuring elements like buttons and inputs were easily navigable.

State Management:
Challenge: Managing user roles and ensuring that the state persists across components.
Resolution: Used React's useState to manage the role of the user and passed the role as a prop to child components. This kept the logic simple and localized within the App component.

Logout Functionality:
Challenge: Implementing logout functionality that resets the application state.
Resolution: Created a logout function that sets the role back to an empty string and redirected the user to the login page.


Using AI Tools:
GitHub Copilot: Generate component code for repetitive tasks like form creation, dashboards.
Figma with AI plugins: Design wireframes, export CSS or React code directly.
ChatGPT: Troubleshoot or optimize code logic, generate documentation, and brainstorm ideas for UX improvements.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
