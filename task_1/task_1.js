const parser = new DOMParser();

const xmlString = `
  <list>
      <student>
          <name lang="en">
              <first>Ivan</first>
              <second>Ivanov</second>
          </name>
          <age>35</age>
          <prof>teacher</prof>
      </student>
      <student>
          <name lang="ru">
              <first>Петр</first>
              <second>Петров</second>
          </name>
          <age>58</age>
          <prof>driver</prof>
      </student>
  </list>`;
  
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
  
const list = {};
let j = 0;
function getStudent(obj) {
const studentList = obj.querySelector('list');
  for (const student of studentList.querySelectorAll('student')) {
    const name = student.querySelector("name");
    const firstName = student.querySelector("first");
    const secondName = student.querySelector("second");
    const age = student.querySelector("age");
    const prof = student.querySelector("prof");
    const langAttr = name.getAttribute('lang');
    list[j] = [{ 
      name: firstName.textContent + " " + secondName.textContent, 
      age: Number(age.textContent), 
      prof: prof.textContent, 
      lang: langAttr
    },
  ];
  j++;
}
  return list;
};
getStudent(xmlDOM);
console.log("list", list);


