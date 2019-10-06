$(function(){
    Object.values(header).forEach(element => {
        $('#dataTable thead tr').append(`
            <th scope="col">${element}</th>
        `);
    });
    
    data.forEach(element => {            
        $('#dataTable tbody').append(`
            <tr>
                <td><span class="rounded-circle status unknown"></span>Unknown</th>
                <td>${element.name}</td>
                <td><a class="text-light1" href="${element.url}">${element.url}</a></td>
                <td>${element.description}</td>
            </tr>
        `);
    });

    $('#dataTable a').each(() => {
    
    });
});
