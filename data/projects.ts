
export interface Project {
  id: string;
  name: string;
  image: string;
  brief: string;
  details: string;
  technologies: string[];
  link1: string;
  link2: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'E-Commerce - Full Stack',
    image: '/nextEcommerce.webp', // Directly in public/
    brief: 'A responsive Web with Next.js and Tailwind CSS.',
    details: 'Built using Next.js and Tailwind CSS. Features include user authentication and product listing with my own API.',
    technologies: ['Next.js', 'Tailwind CSS', 'Custom CSS', 'Clerk for AUTH', 'Google Captcha', 'Supabase for PostgreSQL database', 'Resend.com for Email', 'Heroicons for icons', 'Sweetalert2 for toast & popup'],
    link1: 'https://ecommerce-web-next.netlify.app/',
    link2: 'https://github.com/chandrajit19/NextEcommerce'
  },
  {
    id: 'project-2',
    name: 'Weather App - Full Stack',
    image: '/nextWeather.webp',
    brief: 'A responsive website built with Next.js and CSS.',
    details: 'A dynamic web application built with Next.js, Tailwind CSS, and custom CSS for a polished, responsive UI. Users input their city, and based on real-time temperature data fetched via an API, the app recommends appropriate clothing and travel essentials. Integrated Supabase for database management to store user preferences and Clerk for secure user authentication. Sweetalert2 is used for interactive user notifications, and Resend handles email confirmations. The app is optimized for performance and accessibility, ensuring a seamless experience across devices.',
    technologies: ['Next.js', 'Custom CSS', 'Clerk for AUTH', 'Supabase for PostgreSQL database', 'Sweetalert2 for toast & popup', 'Resend.com for Email'],
    link1: 'https://weatherappnextjsfullweb.netlify.app/',
    link2: 'https://github.com/chandrajit19/nextJsWeatherAapp'
  },
  {
    id: 'project-3',
    name: 'Rest-API for CRUD',
    image: '/api.webp',
    brief: 'A Rest-API build for CRUD operation.',
    details: 'NinjaTech API is a free, educational RESTful API designed for students and developers to perform full CRUD (Create, Read, Update, Delete) operations on user records, accessible at https://ninjatech.space/api/users. Built with Next.js and Supabase, leveraging a single shared PostgreSQL table for efficient user data management (storing ID, name, age, and country for all users). This optimized design simplifies database operations while maintaining scalability. The API supports JSON-based requests/responses and integrates seamlessly with tools like Postman or fetch API.',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase for PostgreSQL database'],
    link1: 'https://ninjatech.space/',
    link2: 'https://github.com/chandrajit19/api-building'
  },
  {
    id: 'project-4',
    name: 'Figma to Bootstrap',
    image: '/delish.webp',
    brief: 'A Figma design converted to Bootstrap and CSS.',
    details: 'Converted a Figma prototype into production-ready HTML using Bootstrap’s grid for reliable layout and custom CSS for pixel-accurate styling. Added polished UX with lightweight JavaScript and jQuery, prioritizing accessibility and performance.',
    technologies: ['HTML', 'BOOTSTRAP', 'Custom CSS', 'JQuery', 'JavaScript'],
    link1: 'https://chandrajit19.github.io/Delish/',
    link2: 'https://github.com/chandrajit19/Delish'
  },
  {
    id: 'project-5',
    name: 'PSD to HTML & CSS',
    image: '/coronaa.webp',
    brief: 'PSD converted to HTML and Custom CSS.',
    details: 'Converted a Photoshop (PSD) design into a pixel-accurate, fully responsive website using a 12-column grid system with pure HTML and CSS, and added interactive behavior with jQuery. This project is a front-end implementation of a PSD mockup. I translated visual layers, spacing, and typography from the PSD into semantic HTML and CSS, structured with a 12-column grid, so the layout stays consistent and predictable across screen sizes. For interactivity (menu toggle, sliders, modals, forms, and other UI behaviors), I used lightweight jQuery.',
    technologies: ['HTML', 'CSS', 'JQuery'],
    link1: 'https://chandrajit19.github.io/CORONA/',
    link2: 'https://github.com/chandrajit19/CORONA'
  },
  {
    id: 'project-6',
    name: 'PSD to HTML & CSS',
    image: '/idoo.webp',
    brief: 'PSD converted to HTML and Custom CSS.',
    details: 'Converted a Photoshop (PSD) design into a pixel-accurate, fully responsive website using a 12-column grid system with pure HTML and CSS, and added interactive behavior with jQuery. This project is a front-end implementation of a PSD mockup. I translated visual layers, spacing, and typography from the PSD into semantic HTML and CSS, structured with a 12-column grid, so the layout stays consistent and predictable across screen sizes. For interactivity (menu toggle, sliders, modals, forms, and other UI behaviors), I used lightweight jQuery.',
    technologies: ['HTML', 'CSS', 'JQuery'],
    link1: 'https://chandrajit19.github.io/IDDO/',
    link2: 'https://github.com/chandrajit19/IDDO'
  },
  {
    id: 'project-7',
    name: 'E-commerce with JavaScript',
    image: '/ecomerce-js.webp',
    brief: 'Built an e-commerce site with JavaScript.',
    details: 'I developed a responsive E-Commerce Website using HTML, CSS, and JavaScript. The website features an interactive product display and a fully functional shopping cart system. Users can add products to the cart, view their selections, and remove items as needed. The layout is fully responsive, ensuring a smooth experience across all devices. This project highlights my skills in front-end development, responsive design, and implementing interactive features.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link1: 'https://commercewebpro.netlify.app/',
    link2: 'https://github.com/chandrajit19/E-commerce-Website'
  },
  {
    id: 'project-8',
    name: 'Weather App with JavaScript',
    image: '/weather-1.webp',
    brief: 'A Weather App created using JavaScript and CSS.',
    details: 'I developed a Weather App using HTML, CSS, and JavaScript. The app fetches real-time weather data from an API and displays it to the user. It is fully responsive, ensuring a smooth experience on all devices. This project highlights my ability to integrate APIs and handle asynchronous data fetching in a user-friendly interface.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API with async/await'],
    link1: 'https://chandrajit19.github.io/Weather-project/',
    link2: 'https://github.com/chandrajit19/Weather-project'
  },
  {
    id: 'project-9',
    name: 'Calculator with React',
    image: '/reactCa.webp',
    brief: 'A calculator made with React and CSS.',
    details: 'I developed a Calculator App using React and CSS. The app allows users to perform basic arithmetic operations with a user-friendly interface. It is fully responsive, providing a seamless experience across all devices. This project highlights my skills in React components, state management, and responsive design.',
    technologies: ['React', 'CSS'],
    link1: 'https://chandrajit19.github.io/calculatorReact/',
    link2: 'https://github.com/chandrajit19/calculatorReact'
  },
  {
    id: 'project-10',
    name: 'Tech Web with JavaScript',
    image: '/cTechWeb.webp',
    brief: 'A tech web template designed using JavaScript.',
    details: 'I built a fully responsive website using HTML, CSS, and JavaScript. The site adapts to various screen sizes, offering a smooth user experience across desktops, tablets, and mobile devices. It features a clean, modern design with optimized performance and interactive elements, demonstrating my skills in front-end web development.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link1: 'https://chandrajit19.github.io/C-Technology/',
    link2: 'https://github.com/chandrajit19/C-Technology'
  },
  {
    id: 'project-11',
    name: 'Timer Web App',
    image: '/to-do.webp',
    brief: 'A Timer Web App with JavaScript.',
    details: 'I developed a Timer App using HTML, CSS, and JavaScript. The app allows users to start, stop, and reset the timer. It uses setInterval() for counting the time and provides a smooth, interactive user experience. The app is fully responsive and demonstrates my skills in handling time-based functionality and user interaction.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link1: 'https://chandrajit19.github.io/Timer-project/',
    link2: 'https://github.com/chandrajit19/Timer-project'
  },
  {
    id: 'project-12',
    name: 'To-Do with React',
    image: '/to-do-1.webp',
    brief: 'Using React, developed a To-Do Web App.',
    details: 'I developed a To-Do List App using React, Bootstrap, and Custom CSS. The app allows users to add, edit, and delete tasks, with all tasks stored in local storage to ensure data persistence. The project features a clean, responsive design and showcases my skills in React components, state management, and integrating local storage for functionality.',
    technologies: ['React', 'Bootstrap', 'Custom CSS'],
    link1: 'https://chandrajit19.github.io/reactToDo/',
    link2: 'https://github.com/chandrajit19/reactToDo'
  },
  {
    id: 'project-13',
    name: 'Get A Joke',
    image: '/getJoke.webp',
    brief: 'Using fetch API, created a Web App.',
    details: 'I developed a Joke Generator using HTML, CSS, and JavaScript. The app fetches random jokes from an API and displays them in a user-friendly interface. It is fully responsive and provides a smooth user experience across all devices, demonstrating my skills in integrating APIs and creating interactive web applications.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link1: 'https://chandrajit19.github.io/joke-generator/',
    link2: 'https://github.com/chandrajit19/joke-generator'
  },
  {
    id: 'project-14',
    name: 'Background Generator',
    image: '/bg-gen.webp',
    brief: 'A Background Generator Web App.',
    details: 'I developed a Linear Gradient Background Generator using HTML, CSS, and JavaScript. It allows users to generate custom linear gradient backgrounds and view the corresponding CSS code instantly. The app features real-time updates and is fully responsive, ensuring smooth performance across all devices. This project highlights my skills in interactive web development.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link1: 'https://chandrajit19.github.io/Background-color-generator/',
    link2: 'https://github.com/chandrajit19/Background-color-generator'
  },
  {
    id: 'project-15',
    name: 'YouTube Clone',
    image: '/youtube.webp',
    brief: 'Using HTML and CSS, created a YouTube clone.',
    details: 'This YouTube clone project exemplifies my dedication to web development and my capability to recreate modern, professional interfaces. It serves as a testament to my proficiency in front-end development and my keen eye for design detail.',
    technologies: ['HTML', 'CSS'],
    link1: 'https://chandrajit19.github.io/Youtube-clone/',
    link2: 'https://github.com/chandrajit19/Youtube-clone'
  },
  {
    id: 'project-16',
    name: 'Calculator with JS',
    image: '/jsCal.webp',
    brief: 'A calculator made using JavaScript.',
    details: 'Check out the calculator to see my proficiency in combining HTML, CSS, and JavaScript to build interactive web applications.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link1: 'https://chandrajit19.github.io/Calculator.v2/',
    link2: 'https://github.com/chandrajit19/Calculator.v2'
  },
  {
    id: 'project-17',
    name: 'Fingers Play with JS',
    image: '/finger-game.webp',
    brief: 'A small game made with JavaScript.',
    details: 'The Fingers Play game is an entertaining web application created using HTML, CSS, and JavaScript. Utilizing Math.random, this game demonstrates my skills in creating dynamic and interactive experiences. Try the Fingers Play game to experience my ability to create engaging and interactive web applications using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link1: 'https://chandrajit19.github.io/FingerGame/',
    link2: 'https://github.com/chandrajit19/FingerGame'
  },
  {
    id: 'project-18',
    name: 'To-Do List Application',
    image: '/to-do.webp',
    brief: 'A To-Do Web App with JavaScript.',
    details: 'The To-Do List application is a practical web application designed to help users manage their tasks efficiently. Created using HTML, CSS, and JavaScript, this project highlights my skills in building functional and user-friendly web applications.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link1: 'https://chandrajit19.github.io/to-do-website/',
    link2: 'https://github.com/chandrajit19/to-do-website'
  },
];