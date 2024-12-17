const employees = [
    [
      {
        "id": 1,
        "email": "john.doe@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Prepare monthly report",
            "taskDescription": "Compile sales and marketing data for the monthly report.",
            "taskDate": "2024-12-18",
            "category": "Reports"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Team meeting",
            "taskDescription": "Participate in the quarterly team meeting.",
            "taskDate": "2024-12-10",
            "category": "Meetings"
          },
          {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Client follow-up",
            "taskDescription": "Reach out to client regarding project updates.",
            "taskDate": "2024-12-12",
            "category": "Client Relations"
          }
        ]
      },
      {
        "id": 2,
        "email": "jane.smith@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Create marketing strategy",
            "taskDescription": "Draft a new strategy for Q1 marketing campaigns.",
            "taskDate": "2024-12-20",
            "category": "Marketing"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Email campaign",
            "taskDescription": "Send out newsletters to the mailing list.",
            "taskDate": "2024-12-19",
            "category": "Communications"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Budget review",
            "taskDescription": "Analyze last month's expenditures.",
            "taskDate": "2024-12-15",
            "category": "Finance"
          }
        ]
      },
      {
        "id": 3,
        "email": "michael.brown@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "System upgrade",
            "taskDescription": "Coordinate with IT team to upgrade internal systems.",
            "taskDate": "2024-12-22",
            "category": "IT"
          },
          {
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Employee survey analysis",
            "taskDescription": "Evaluate feedback from the recent employee survey.",
            "taskDate": "2024-12-21",
            "category": "HR"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Product demo",
            "taskDescription": "Prepare and deliver a demo for the new product.",
            "taskDate": "2024-12-14",
            "category": "Sales"
          }
        ]
      },
      {
        "id": 4,
        "email": "emily.davis@example.com",
        "password": "123",
        "tasks": [
          {
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Website redesign",
            "taskDescription": "Collaborate with the design team to update the website.",
            "taskDate": "2024-12-25",
            "category": "Design"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Social media campaign",
            "taskDescription": "Plan and execute the holiday campaign.",
            "taskDate": "2024-12-24",
            "category": "Marketing"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Staff training",
            "taskDescription": "Organize and lead training for new employees.",
            "taskDate": "2024-12-13",
            "category": "HR"
          }
        ]
      },
      {
        "id": 5,
        "email": "william.johnson@example.com",
        "password": "123",
        "tasks": [
          {
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Inventory check",
            "taskDescription": "Audit and update the inventory records.",
            "taskDate": "2024-12-27",
            "category": "Operations"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Supplier meeting",
            "taskDescription": "Negotiate new terms with key suppliers.",
            "taskDate": "2024-12-26",
            "category": "Procurement"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Policy review",
            "taskDescription": "Revise company policies for 2025.",
            "taskDate": "2024-12-11",
            "category": "Admin"
          }
        ]
      }
    ]
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  export const setLocalStorage = () => {
    try {
      localStorage.setItem('employees', JSON.stringify(employees));
      localStorage.setItem('admin', JSON.stringify(admin));
      console.log('Data successfully stored in local storage.');
    } catch (error) {
      console.error('Error storing data in local storage:', error);
    }
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
console.log(employees , admin)
  };
  
  // Ensure to call the function after defining it
  setLocalStorage(); // To store data in local storage
  
  