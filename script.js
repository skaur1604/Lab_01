window.addEventListener("DOMContentLoaded", function () {
  const directoryData = [
    {
      department: "Administration",
      staff: [
        { given: "Rahim", family: "Aly" },
        { given: "Norma", family: "Cardia" }
      ]
    },
    {
      department: "Audit",
      staff: [
        { given: "Amanda", family: "Josh" },
        { given: "Ely", family: "Basily" }
      ]
    },
    {
      department: "Banking Operations",
      staff: [
        { given: "Lanie", family: "Churco" },
        { given: "Priya", family: "Ray" },
        { given: "Sid", family: "Kelly" },
      ]
    }
  ];

  const container = document.querySelector("#employee-directory");

  for (const group of directoryData) {
    const wrapper = document.createElement("section");

    const title = document.createElement("h2");
    title.innerText = group.department;
    wrapper.appendChild(title);

    const employeeList = document.createElement("ul");

    group.staff.forEach(person => {
      const item = document.createElement("li");
      item.innerText = `${person.given} ${person.family}`;
      employeeList.appendChild(item);
    });

    wrapper.appendChild(employeeList);
    container.appendChild(wrapper);
  }

  const currentYear = new Date().getFullYear();
  const footerText = document.getElementById("copyright");
  footerText.textContent = `Copyright Pixell River Financial ${currentYear}`;
});
