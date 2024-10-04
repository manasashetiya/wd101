document.addEventListener("DOMContentLoaded",function(){
    var Today = new Date();
    var mxDate = new Date(Today);
    mxDate.setFullYear(mxDate.getFullYear()-18);
    var mnDate=new Date(Today);
    mnDate.setFullYear(mnDate.getFullYear()-56);
    const dobinput=document.getElementById("dob");
    dobinput.setAttribute("max",mxDate.toISOString().slice(0,10));
    dobinput.setAttribute("min",mnDate.toISOString().slice(0,10));
    popTable();
});

function popTable() {
    const tableInfo = JSON.parse(localStorage.getItem("details")) || [];
    let table = document.getElementById('table').getElementsByTagName('tbody')[0];

    tableInfo.forEach(element => {
        let newRow = table.insertRow(); // Insert new row into table

        newRow.innerHTML = `
        <tr class="border-3 border-gray-200 bg-gray-200">
            <td class="py-3 px-6 text-center">${element.name}</td>
            <td class="py-3 px-6 text-center">${element.email}</td>
            <td class="py-3 px-6 text-center">${element.password}</td>
            <td class="py-3 px-6 text-center">${element.dob}</td>
            <td class="py-3 px-6 text-center">${element.acceptterms ? 'True' : 'False'}</td>
        </tr>`;
    });
}

document.getElementById("btn").addEventListener("click", submit);
function submit() {
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        dob: document.getElementById("dob").value,
        acceptterms: document.getElementById("acceptterms").checked
    };

    let arr = JSON.parse(localStorage.getItem("details")) || [];
    arr.push(user);
    localStorage.setItem("details", JSON.stringify(arr));
  
    // Add only the latest user to the table without reloading all data
    let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    newRow.innerHTML = `
    <tr class="border-3 border-black-300 bg-black-300">
        <td class="border border-3 border-black-300 py-3 px-6 text-center">${user.name}</td>
        <td class="border border-3 border-black-300 py-3 px-6 text-center">${user.email}</td>
        <td class="border border-3 border-black-300 py-3 px-6 text-center">${user.password}</td>
        <td class="border border-3 border-black-300 py-3 px-6 text-center">${user.dob}</td>
        <td class="border border-3 border-black-300 py-3 px-6 text-center">${user.acceptterms ? 'True' : 'False'}</td>
    </tr>`;
}
