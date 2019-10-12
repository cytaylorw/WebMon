let updateStatus = () => {
    $('#dataTable span.status').each((index, element) => {
        let url = $(element).parent().siblings().find('a').eq(0).attr('href');
        let origin = $(this)[0].location.origin;
        $.get(origin+'/api/status?url='+url,(data) => {
            let statusTD = $(element).parent();
            let bulb = $(element).removeClass('unknown');
            if(data.ok){
                statusTD.find('.statusText').addClass('text-triad').text(data.statusText);
                bulb.addClass('ok');
            }else{
                statusTD.find('.statusText').addClass('text-accent').text(data.statusText);
                bulb.addClass('error');

            }
            console.log(data);
        })
    });
}

if(updateInterval && updateInterval >= minInterval) setInterval(updateStatus,updateInterval*1000);