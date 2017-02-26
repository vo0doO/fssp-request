var request = require('request');

module.exports = fssp;

function fssp(data, callback) {

    var url = "https://api.fssprus.ru/api/search?region_id="
        + data.region + "&first_name="
        + data.name + "&last_name="
        + data.surname + "&date="
        + data.birthday + "&type=form&patronymic="
        + data.patronymic + "&udid=&ver=11";

    var list = [];
    sendToFssp(data, list, url, function (response) {
        callback(response);
    });
}

function sendToFssp(data, list, url, callback) {

    request(url, function (error, response, bodyResponse) {
        if(error)
            console.log(error)
        else
            if (!error && response.statusCode == 200) {
                try {
                    list = JSON.parse(bodyResponse).data.list;
                    callback(list);
                } catch (e) {
                    setTimeout(function () {
                        sendToFssp(data, list, url, callback);
                    }, 1000);
                }
            }
    });
}