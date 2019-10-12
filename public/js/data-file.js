$(function(){
    let columnKeys = Object.keys(header);
    Object.values(header).forEach(element => {
        $('#dataTable thead tr').append(`
            <th scope="col">${element}</th>
        `);
    });
    
    data.forEach(element => {  
        let html = `
            <tr>
                <td>
                    <span class="rounded-circle status unknown"></span>
                    <span class="statusText">Unknown</span>
                </td>
        `;
        let elementKeys = Object.keys(element);
        // Loop through the column keys in header.js to make sure data will be generated to the correct column
        columnKeys.forEach(columnKey =>{
            //  Only render data that are defined in both files
            if(elementKeys.includes(columnKey)){
                // Use object for links
                if(typeof element[columnKey] === 'object' && element[columnKey] !== null){
                    if(typeof element[columnKey].href === 'undefined'){
                        html += `<td></td>`;
                    }else{
                        let aText = (typeof element[columnKey].text === 'undefined') ? 
                            element[columnKey].href : element[columnKey].text;
                        html += `
                            <td>
                                <a class="text-light1" href="${element[columnKey].href}">${aText}</a>
                            </td>`;
                    }
                }else{
                    html += `<td>${element[columnKey]}</td>`;
                }
            }
        });
        html += '</tr>';
        $('#dataTable tbody').append(html);
    });

    updateStatus();
});
