
let tbody = document.getElementById("tbody");
let tfoot = document.getElementById("tfoot");

let year = document.getElementById("year");
year.innerText = new Date().getFullYear();
// let search = document.getElementById("search").value.trim();

let tableLength = 11;
let start = 0;
let end = 11;
let StartPage = 1;





const ApiCall = () => {


    fetch('https://api.rootnet.in/covid19-in/stats/history').then((res) => res.json()).
        then((data) => {

            if (!localStorage.getItem("COVID-19")) {
                localStorage.setItem("COVID-19", JSON.stringify(data));
                DisplayData(0, 5);
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


    let total = history.length;

    history.slice(start, end).forEach(ele => {


        const formattedDate = new Date(ele.day).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });

        if (tbody) {
            tbody.innerHTML += `
            <tr style='text-align:center;'>
                <th scope="row">${formattedDate}</th>
                <td>${ele.summary.confirmedCasesForeign}</td>
                <td>${ele.summary.confirmedCasesIndian}</td>
                <td>${ele.summary.discharged}</td>
                <td>${ele.summary.deaths}</td>
                <td>${ele.summary.total}</td>
                <td><button class='btn btn-outline-secondary'>View Details</button></td>
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

const Search = () => {


}

ApiCall();
DisplayData(start, end, StartPage);




