import React from 'react';
import { AiOutlineAudit, AiOutlineSchedule, AiTwotoneCalendar, AiOutlineUserAdd, AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { BsCardList, BsShieldLock,} from 'react-icons/bs';
import { BiSpreadsheet } from 'react-icons/bi';
import { RiContactsLine, RiAiGenerate } from 'react-icons/ri';
import { MdPeopleOutline } from 'react-icons/md';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { TiContacts } from 'react-icons/ti';
import { GiBank } from 'react-icons/gi';
import { GrLocation, GrCheckboxSelected, GrHistory } from 'react-icons/gr';


import avatar from './avatar.jpg';


// sidebar Lists

export const links = [
  {
    title: 'Roster',
    links: [
      {
        name: 'scheduler',
        icon: <AiOutlineSchedule />,
        
      },
      {
        name: 'create',
        icon: <FiEdit />,
        
      },
    ],
  },


  {
    title: 'Invoices',
    links: [
      {
        name: 'list',
        icon: <BsCardList />,
      },
      {
        name: 'generate',
        icon: <RiAiGenerate />,
      },
      
    ],
  },


  {
    title: 'Timesheets',
    links: [
      {
        name: 'approve',
        icon: <GrCheckboxSelected />,
      },
      {
        name: 'History',
        icon: <GrHistory />,
      },
      
    ],
  },


  {
    title: 'Reports',
    links: [
      {
        name: 'shifts',
        icon: <AiTwotoneCalendar />,
      },
      {
        name: 'finance',
        icon: <GiBank />,
      },

      {
        name: 'timesheet',
        icon: <BiSpreadsheet />,
      },
      {
        name: 'audit-logs',
        icon: <AiOutlineAudit />,
      },
      {
        name: 'system-access',
        icon: <BsShieldLock />,
      },
    ],
  },
  
     

      {
        title: 'Contacts',
        links: [
          {
            name: 'clients',
            icon: < RiContactsLine />,
          },
          {
            name: 'employees',
            icon: <MdPeopleOutline />,
          },
          {
            name: 'third-party',
            icon: <TiContacts />,
          },
        ],
      },

      {
        title: 'Settings',
        links: [
          {
            name: 'user',
            icon: <AiOutlineUserAdd />,
          },
          {
            name: 'system',
            icon: <HiOutlineDesktopComputer />,
          },
          
        ],
      },
]

// CreateGrids
export const createGrid = [
  {
    headerText: 'Order ID',
    field: 'OrderID',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'Freight',
    headerText: 'Freight',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'EmployeeID',
    headerText: 'Employee ID',
    textAlign: 'Center',
    width: '150',
  },
  {
    headerText: 'Ship Country',
    field: 'ShipCountry',
    textAlign: 'Center',
    width: '120',
  },
  
];

export const createData=[
  
  {

    OrderID: 10248,
    CustomerID: 'VINET',
    Freight: 32.38,
    EmployeeID: 5,
    ShipCountry: 'France',

  },

  {
    
    OrderID: 10249,
    CustomerID: 'TOMSP',
    Freight: 11.61,
    EmployeeID: 6,
    ShipCountry: 'Germany',

  },

  {
    
    OrderID: 10250,
    CustomerID: 'HANAR',
    Freight: 65.83,
    EmployeeID: 4,
    ShipCountry: 'Brazil',

  },

  {
    
    OrderID: 10252,
    CustomerID: 'SUPRD',
    Freight: 51.3,
    EmployeeID: 3,
    ShipCountry: 'Belgium',

  },

  {
    
    OrderID: 10254,
    CustomerID: 'CHOPS',
    Freight: 22.98,
    EmployeeID: 2,
    ShipCountry: 'Switzerland',

  },

  {
    
    OrderID: 10258,
    CustomerID: 'ERNSH',
    Freight: 140.51,
    EmployeeID: 1,
    ShipCountry: 'Austria',

  },




]
