import pustaka from '../assets/images/projects/pustaka.png';
import event_unpam from '../assets/images/projects/event-unpam.png';
import gotech from '../assets/images/projects/gotech.png';
import niagahoster from '../assets/images/projects/niagahoster.png';
import faultpoint from '../assets/images/projects/faultpoint.png';

const project = [
    {
      name: 'PUSTAKA',
      photo: pustaka,
      category: 'React',
      text: 'PUSTAKA is a website developed to increase the efficiency of activities in libraries which still use the traditional book lending system This project provides an opportunity to contribute to increasing community literacy and knowledge through the use of technology that is easily accessible to everyone. Through the development of a lending system website, PUSTAKA can be a solution in managing resources more effectively',
      tech: ['React', 'Express', 'Mysql', 'Bootstrap'],
      property: ['CRUD USER: User management system for library staff and members',
        'CRUD BOOK: Book management system for library staff',
        'BOOK LENDING: Book lending system for library members',
        'BOOK RETURN: Book return system for library members',
      ],
      date: 'Jun 2024',
      link: 'https://github.com/Agusprab/Pustaka_Capstone',
      learn: ['Advanced knowledge and experience in web development using React.js', 
        'Understanding of RESTful API development and integration', 
        'Experience in database management and SQL query optimization']
    },
    {
      name: 'Event Universitas Pamulang',
      photo: event_unpam,
      category: 'bootstrap',
      text: 'I took the initiative to build the Unpam website using the Bootstrap framework as the main foundation. This project was born from my desire to provide a modern and responsive web solution for Pamulang University, with a focus on ease of navigation and optimal user experience. In developing this website, I utilized various Bootstrap features to ensure a consistent appearance across various devices, as well as integrating interactive components such as carousels, navbars, and easy-to-use forms. The result is a website that is not only visually attractive but also functional, meeting the information needs of students, staff and university visitors.',
      tech: ['Bootstrap', 'Javascript'],
      property: ['Responsive Design: Website design that adapts to various screen sizes and devices',
        'Interactive Components: Integration of Bootstrap components such as carousels, navbars, and forms',
        'User Experience: Focus on ease of navigation and information accessibility',
      ],
      date: '2023',
      link: 'https://github.com/Agusprab/web-event-unpam',
      learn: [ 'Advanced knowledge and experience in web development using Bootstrap',
        'Responsive design principles and best practices',
        'User experience design and usability principles'
      ]
    },
    {
      name: 'Gotech',
      photo: gotech,
      category: 'Bootstrap',
      text: 'GoTech is a platform that provides a variety of professional IT services to meet your business needs. Through this website, we offer a variety of services, including website development, network management, application development, and IT consulting. Each service is designed to help companies improve the efficiency, security and performance of their technology. The GoTech website is designed with a user-friendly interface, allowing visitors to easily find services that suit their needs. We also provide detailed information about each service, project portfolio, as well as direct contact options to facilitate fast and responsive communication. With a team of experienced IT experts, GoTech is ready to become a trusted partner in the digital transformation of your business.',
      tech: ['Php', 'Bootstrap', 'Javascript'],
      property: ['Service Listing: Detailed listing of services offered by GoTech',
        'Project Portfolio: Showcase of previous projects and client testimonials',
        'Contact Form: Easy-to-use form for direct communication with GoTech',
      ],
      date: '2020',
      link: 'https://github.com/Agusprab/web-gotech',
      learn: [ 'Advanced knowledge and experience in web development using Bootstrap',
        'Responsive design principles and best practices',
        'User experience design and usability principles'
      ]
    },
    {
      name: 'Sistem Penjualan Cafe',
      
      category: 'Laravel',
      text: 'This system is built with an approach that focuses on seamless user experience and guaranteed data security. Using Laravel, this project leverages modern features such as Eloquent ORM, routing, and middleware to ensure optimal performance and scalability.',
      tech: ['Laravel','Bootstrap'],
      property: ['User Management: System for managing employee and customer accounts',
        'Product Management: System for managing product inventory and pricing',
        'Sales Management: System for processing and recording sales transactions',
        'Report Generation: System for generating reports on sales performance and inventory',
      ],
      date: '2019',
      link: 'https://github.com/Agusprab/Laravel-SistemPenjualan-Cafe',
      learn: [
        'Advanced knowledge and experience in web development using Laravel',
        'Understanding of RESTful API development and integration',      
      ]
    },
    {
      name: 'FaultPoint',
      photo: faultpoint,
      category: 'PHP',
      text: 'I developed a points system for schools aimed at monitoring and evaluating student behavior and achievement. The system is designed to award positive or negative points based on certain criteria, such as attendance, participation in extracurricular activities, discipline, and academic achievement.',
      tech: ['PHP', 'Mysql','Bootstrap'],
      property: ['User Management: System for managing student and teacher accounts',
        'Point System: Automated system for awarding points based on predefined criteria',
        'Report Generation: System for generating reports on student performance and behavior',
      ],
      date: '2019',
      link: 'https://github.com/Agusprab/faultpoint',
      learn: [
       'Advanced knowledge and experience in web development using PHP',
       'Experience in database management and SQL query optimization',     
      ]
    },
    {
      name: 'LandingPage Niagahoster',
      photo: niagahoster,
      category: 'Copy Porject',
      text: 'I worked on the Niagahoster landing page replication project as an exercise to deepen my skills in web development. In this project, I imitated the design and function of Niagahoster landing page, including important elements such as layout, use of color, typography, and interactivity. I used Bootstrap to replicate the look and feel of the page, and ensure its responsiveness across devices. This project helped me understand more about effective UI/UX design and how to implement best practices in modern web development. Apart from that, this is also an opportunity for me to improve my technical skills and analytical abilities in dismantling and reconstructing existing web pages.',
      tech: ['Bootstrap'],
      property: ['Responsive Design: Website design that adapts to various screen sizes and devices',
        'Interactive Components: Integration of Bootstrap components such as carousels, navbars, and forms',
        'User Experience: Focus on ease of navigation and information accessibility',
      ],
      date: '2019',
      link: 'https://github.com/Agusprab/Niagahoster',
      learn: [
        'Advanced knowledge and experience in web development using Bootstrap',      
      ]
    },

  ]

  export default project;