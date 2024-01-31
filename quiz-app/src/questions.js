export default [
    {
        id: 'q1',
        text: 'Which of the following definitions best describes React.js?',
        answers: [
            'A library to build user interfaces with the help of declarative code.',
            'A library for managing state in web applications.',
            'A framework to build user interfaces with the help of imperative code.',
            'A library used for building mobile applications only.',
        ],
    },
    {
        id: 'q2',
        text: 'What purpose do React hooks serve?',
        answers: [
            'Enabling the use of state and other React features in functional components.',
            'Creating responsive layouts in React applications.',
            'Handling errors within the application.',
            'Part of the Redux library for managing global state.',
        ],
    },
    {
        id: 'q3',
        text: 'Can you identify what JSX is?',
        answers: [
            'A JavaScript extension that adds HTML-like syntax to JavaScript.',
            'A JavaScript library for building dynamic user interfaces.',
            'A specific HTML version that was explicitly created for React.',
            'A tool for making HTTP requests in a React application.',
        ],
    },
    {
        id: 'q4',
        text: 'What is the most common way to create a component in React?',
        answers: [
            'By defining a JavaScript function that returns a renderable value.',
            'By defining a custom HTML tag in JavaScript.',
            'By creating a file with a .jsx extension.',
            'By using the "new" keyword followed by the component name.',
        ],
    },
    {
        id: 'q5',
        text: 'What does the term "React state" imply?',
        answers: [
            'An object in a component that holds values and may cause the component to render on change.',
            'The lifecycle phase a React component is in.',
            'The overall status of a React application, including all props and components.',
            'A library for managing global state in React applications.',
        ],
    },
    {
        id: 'q6',
        text: 'How do you typically render list content in React apps?',
        answers: [
            'By using the map() method to iterate over an array of data and returning JSX.',
            'By using the for() loop to iterate over an array of data and returning JSX.',
            'By using the forEach() method to iterate over an array of data and returning JSX.',
            'By using the loop() method to iterate over an array of data and returning JSX.',
        ],
    },
    {
        id: 'q7',
        text: 'Which approach can NOT be used to render content conditionally?',
        answers: [
            'Using the #if template syntax.',
            'Using a ternary operator.',
            'Using the && operator.',
            'Using an if-else statement.',
        ],
    },
    {
        id: 'q8',
        text: 'What is the purpose of the React Router library?',
        answers: [
            'Enabling navigation and routing in a React application.',
            'Managing state in a Redux store.',
            'Creating animations and transitions in React components.',
            'Handling asynchronous operations in React.',
        ],
    },
    {
        id: 'q9',
        text: 'In React, what is the significance of keys when rendering lists?',
        answers: [
            'Keys help React identify which items have changed, are added, or are removed.',
            'Keys are used to encrypt sensitive information in React components.',
            'Keys define the order in which elements appear in a list.',
            'Keys are required for all React components to function properly.',
        ],
    },
    {
        id: 'q10',
        text: 'What is the purpose of the useEffect hook in React?',
        answers: [
            'Managing side effects in functional components.',
            'Defining event handlers for user interactions.',
            'Creating reusable custom hooks.',
            'Handling form submissions in React applications.',
        ],
    },
    {
        id: 'q11',
        text: 'What is the virtual DOM in React?',
        answers: [
            'A lightweight copy of the actual DOM used for efficient updates.',
            'A separate DOM used for testing React components.',
            'A virtual space where React components exist before being rendered.',
            'A browser feature that enhances the performance of React applications.',
        ],
    },
    {
        id: 'q12',
        text: 'How does React handle data flow between components?',
        answers: [
            'Through props and state.',
            'By using a global Redux store.',
            'By directly modifying the DOM.',
            'Data flow is not supported in React.',
        ],
    },
    {
        id: 'q13',
        text: 'What is the purpose of the Context API in React?',
        answers: [
            'To share state and avoid prop drilling between components.',
            'To create animations and transitions in React components.',
            'To handle HTTP requests in a React application.',
            'To manage global state using Redux.',
        ],
    },
    {
        id: 'q14',
        text: 'What is the significance of the React Fragment?',
        answers: [
            'It allows grouping multiple elements without adding extra nodes to the DOM.',
            'It is used to create fragments of code for better code organization.',
            'It defines a specific HTML element in React components.',
            'It is a deprecated feature in React.',
        ],
    },
    {
        id: 'q15',
        text: 'What is the purpose of the PureComponent in React?',
        answers: [
            'It performs a shallow comparison of props and state to optimize rendering.',
            'It enhances the security of React applications.',
            'It is used for creating pure functions in React components.',
            'It is a replacement for class components in React.',
        ],
    },
    {
        id: 'q16',
        text: 'How does React support accessibility in web applications?',
        answers: [
            'By providing ARIA attributes and encouraging semantic HTML.',
            'By automatically generating accessible components.',
            'By using external libraries for accessibility.',
            'React does not support accessibility features.',
        ],
    },
    {
        id: 'q17',
        text: 'What is the role of the "key" prop in React lists?',
        answers: [
            'It helps React identify which items have changed, are added, or are removed.',
            'It sets the initial value for each element in the list.',
            'It defines the styling for each element in the list.',
            'The "key" prop is not required for rendering lists in React.',
        ],
    },
    {
        id: 'q18',
        text: 'What is the purpose of the React DevTools browser extension?',
        answers: [
            'To inspect, debug, and profile React applications.',
            'To enhance the performance of React components.',
            'To create React components directly from the browser.',
            'React DevTools is not a recommended tool for React development.',
        ],
    },
    {
        id: 'q19',
        text: 'How can you prevent the default behavior of an event in React?',
        answers: [
            'By calling the preventDefault() method on the event object.',
            'By setting the event.preventDefault property to true.',
            'Preventing default behavior is not possible in React.',
            'By using the stopPropagation() method on the event object.',
        ],
    },
    {
        id: 'q20',
        text: 'What is the purpose of the React memoization technique?',
        answers: [
            'To optimize the rendering of functional components by memoizing their results.',
            'To create memoized copies of state in class components.',
            'To improve the performance of React applications during server-side rendering.',
            'Memoization is not a technique used in React.',
        ],
    }
];
