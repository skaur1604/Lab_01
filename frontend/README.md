# Pixell River Financial Employee App

This project is a simple full-stack application built with React, TypeScript, and Vite. It allows users to view employees and organization roles, and add new entries when logged in.

---

## Lab 5.2 - Server Data Management Update

### What change I wanted to make in my application
For this lab, I wanted to improve how my application handles data from the server. In earlier labs, I used useEffect and manual fetch calls to load employee and role data. While this approach worked, it required extra code and manual updates whenever new data was added. I wanted to simplify this process and reduce repetition by using a better method for managing server data.

### What tool or tools I made use of to make this change
To implement this change, I used TanStack Query in my frontend. This tool helps manage server data such as fetching, caching, and updating. I used useQuery to retrieve employee and role data, and useMutation for creating new entries. I also added QueryClientProvider at the root of my app so queries can be shared across components. Clerk is still used for authentication, and React Router handles navigation.

### How this change affects the user experience
This update improves the user experience by making the application more responsive. Data now loads with proper loading states and error messages. When a new employee or role is added, the list updates automatically without needing a page refresh. This makes the app feel smoother and more reliable for users.

### How this change affects my understanding or conceptualization of the app
This lab helped me understand the difference between client-side state and server-side data. Before, I was managing everything manually using React state, which made the code more complex. By using TanStack Query, I learned how server data can be handled more efficiently with built-in tools for caching and updating. This improved my understanding of how frontend applications interact with backend systems.

---

## Running the Project

Install dependencies:

```bash
npm install