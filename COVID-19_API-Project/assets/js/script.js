
let tbody = document.getElementById("tbody");
let tfoot = document.getElementById("tfoot");

// input field
let searchStart = document.getElementById("searchStart");

let year = document.getElementById("year");
year.innerText = new Date().getFullYear();

let tableLength = 11;
let start = 0;
let end = 11;
let StartPage = 1;

const ApiCall = () => {


    fetch('https://api.rootnet.in/covid19-in/stats/history').then((res) => res.json()).
        then((data) => {

            if (!localStorage.getItem("COVID-19")) {
                localStorage.setItem("COVID-19", JSON.stringify(data));
                DisplayData(start, end, StartPage);
                console.log("Data is stored in localStorage");
            } else {
                console.log(JSON.parse(localStorage.getItem("COVID-19")));

            }

        }).catch((err) => {
            console.log("Error : " + err);

        });

};

const DisplayData = (start, end, StartPage) => {

    tbody.innerHTML = "";

    const history = JSON.parse(localStorage.getItem("COVID-19")).data;
    // console.log(history);



    let total = history.length;

    history.slice(start, end).forEach(ele => {

        const formattedDate = new Date(ele.day).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });

        // console.log(formattedDate);


        if (tbody) {
            tbody.innerHTML += `
            <tr style='text-align:center;'>
                <th scope="row">${formattedDate}</th>
                <td>${ele.summary.confirmedCasesIndian}</td>
                <td>${ele.summary.discharged}</td>
                <td>${ele.summary.deaths}</td>
                <td>${ele.summary.total}</td>
                <td><button class='btn btn-outline-secondary' data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='return ViewModal("${ele.day}")'>View Details</button></td>
            </tr>`;
        }

    });
    tfoot.innerHTML = `
        <div class='d-flex justify-content-between'>
            <span>Showing ${StartPage}  of ${Math.ceil(total / tableLength)} entries</span>
            <div>
                <button class='btn' id='previous' onclick='return previous(${start},${end},${StartPage})' ${start == 0 ? 'disabled' : ''}><</button>
                <button class='btn' id='next' onclick='return next(${start},${end},${total},${StartPage})' ${end >= total ? 'disabled' : ''}>></button>
            </div>
        </div>
    `;

}

const next = (start, end, total, StartPage) => {
    let Next = document.getElementById('next');

    start += tableLength;
    end += tableLength;
    StartPage += 1;

    DisplayData(start, end, StartPage);
}

const previous = (start, end, StartPage) => {
    let Previous = document.getElementById('previous');

    start -= tableLength;
    end -= tableLength;
    StartPage -= 1;

    DisplayData(start, end, StartPage);
}

const ViewModal = (date) => {

    let modalBody = document.getElementById("modal-table-body");
    let exampleModalLabel = document.getElementById("exampleModalLabel");

    const history = JSON.parse(localStorage.getItem("COVID-19")).data;

    const data = history.find((ele) => date == ele.day);

    modalBody.innerHTML = '';

    exampleModalLabel.innerHTML = `${new Date(data.day).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })}`;

    data.regional.forEach((ele) => {


        modalBody.innerHTML += `
            <tr>
                <td>${ele.loc}</td>
                <td>${ele.confirmedCasesIndian}</td>
                <td>${ele.discharged}</td>
                <td>${ele.deaths}</td>
            </tr>
        `;
    });

}

const Search = () => {

    event.preventDefault();

    let searchStart = document.getElementById("searchStart").value;
    let searchEnd = document.getElementById("searchEnd").value;
    console.log("Search Start :" + searchStart);
    console.log("Search End :" +searchEnd);

    const history = JSON.parse(localStorage.getItem("COVID-19")).data;

    document.getElementById("searchStart").value = '';
    document.getElementById("searchEnd").value = '';
}

// this is used to make sure that startDate < endDate
searchStart.addEventListener("change",function(){
    let searchStart = document.getElementById("searchStart").value;
    let searchEnd = document.getElementById("searchEnd");

    searchEnd.min = searchStart;

});

ApiCall();
DisplayData(start, end, StartPage);




