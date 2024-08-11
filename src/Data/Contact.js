import {  MdLocationOn   } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";



const contact = [
    {
      title: 'Birthday Date',
      value: 'Aug 3, 2003',
      dateTime: '2003-03-08',
      icon: <FaCalendar  size={25}/>
    },
    {
      title: 'Address',
      value: 'Jakarta, Indonesia',
      icon: <MdLocationOn size={25}/>
    },
    {
      title: 'Hobby',
      value: 'Football',
      icon: <IoIosFootball size={25} />
    },

  ];

  export default contact;