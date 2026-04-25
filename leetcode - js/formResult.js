/* 

generate the given output for the following input 

OUTPUT:
 {
  HR: {
    Recruiting: {
      employees: ["Bob"],
      avgSalary: 40000
    }
  },
  Finance: {
    Excel: {
      employees: ["David"],
      avgSalary: 60000,
    }
  },
  IT: {
    JS: {
      employees: ["Alice", "Charlie"],
      avgSalary: 60000,
    },
    React: {
      employees: ["Alice", "Eve"],
      avgSalary: 47500
    },
    Node: {
      employees: ["Charlie"],
      avgSalary: 70000
    }
  },
}
*/

// INPUT:
const users = [
  { id: 1, name: "Alice", dept: "IT", salary: 50000, skills: ["JS", "React"] },
  { id: 2, name: "Bob", dept: "HR", salary: 40000, skills: ["Recruiting"] },
  { id: 3, name: "Charlie", dept: "IT", salary: 70000, skills: ["JS", "Node"] },
  { id: 4, name: "David", dept: "Finance", salary: 60000, skills: ["Excel"] },
  { id: 5, name: "Eve", dept: "IT", salary: 45000, skills: ["React"] },
];

function generateReport(users) {
  const result = users.reduce((acc, curr) => {
    const {dept, name, salary, skills} = curr;

    if(!acc[dept]){
      acc[dept] = {};
    }

    skills.forEach(skill => {
        if(!acc[dept][skill]){
            acc[dept][skill] = {
                employees: [],
                totalSalary: 0,
                count: 0,
            }
        }

        acc[dept][skill].employees.push(name);
        acc[dept][skill].totalSalary += salary;
        acc[dept][skill].count += 1;
    })

    for(const skill in acc[dept]){
        const averageSalary = Math.floor(acc[dept][skill].totalSalary / acc[dept][skill].count);
        acc[dept][skill].avgSalary = averageSalary;
    }

    return acc;

  }, {});

  return result;
  // Calculate average salary
}

console.log(generateReport(users));
