let tbody = document.getElementById("tbody");


const ApiCall = () => {

    fetch('https://api.rootnet.in/covid19-in/stats/history').then((res) => res.json()).
        then((data) => {
            // console.log("data " + JSON.stringify(data));

            const history = data.data;

            console.log(history);

            history.slice(0, 5).forEach(ele => {

                const formattedDate = new Date(ele.day).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                });

                tbody.innerHTML += `
                <tr style='text-align:center;'>
                    <th scope="row">${formattedDate}</th>
                    <td>${ele.summary.confirmedCasesForeign}</td>
                    <td>${ele.summary.confirmedCasesIndian}</td>
                    <td>${ele.summary.deaths}</td>
                    <td>${ele.summary.discharged}</td>
                    <td>${ele.summary.total}</td>
                </tr>`;
            });




        }).catch((err) => {
            console.log("Error : " + err);

        });

};

ApiCall();