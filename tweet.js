let OUT = document.getElementById("OUT");
let txt_id = document.getElementById("txt_id");
let txt_msg = document.getElementById("txt_msg");

const ipt = () => {
    if (confirm("Are you tweet?")) {
        let date = new Date();
        if (txt_id.value.length > 16) {
            alert("Id`s max length is 16 :)");
        } else if (txt_msg.value.length > 200) {
            alert("Message`s max length is 200 :)");
        } else {
            tweet(txt_id.value, txt_msg.value, date.format());
            txt_id.value = "";
            txt_msg.value = "";
            lenchk();
        }
    } else {
        0;
    }
}
const tweet = (id, msg, dt) => {
    let div = document.createElement("div");
    div.className = "cmt";

    div.append(set_id(id));
    div.append(set(msg));
    div.append(set(dt));
    OUT.prepend(div);
}
const set = (txt) => {
    let div = document.createElement("div");
    div.append(txt);
    return div;
}
const lenchk = () => {
    let tweet = document.getElementById("TWEET");
    if (txt_msg.value) {
        tweet.firstElementChild.innerHTML = "Message " + " length:" + txt_msg.value.length;
    } else {
        tweet.firstElementChild.innerHTML = "Message";
    }
}
const set_id = (txt) => {
    let div = document.createElement("div");
    div.onclick = () => {
        let cmt = document.getElementsByClassName("cmt");
        for (let i = 0; i < cmt.length; i++) {
            if(txt !== cmt[i].firstElementChild.innerHTML) {
                cmt[i].style.display = "none";
            } else {
                0;
            }
        }
    }
    div.append(txt);
    return div;
}
Date.prototype.format = () => {
    let date = new Date();

    let year = date.getYear() + 1900;
    let month = (date.getMonth() < 9 ? "0" + date.getMonth() + 1 : date.getMonth() + 1);
    let day = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    let hour = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours());
    let minute = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());

    return year + "-" + month + "-" + day + " " + hour + ":" + minute;
}
const test_txt = [
    "Nobis doloribus debitis temporibus sed tenetur facere explicabo. Assumenda, doloremque exercitationem porro hic beatae ab rem repellat. Distinctio recusandae iusto odio veritatis.",
    "Doloribus beatae eos quos expedita aperiam nisi in quia incidunt iste totam praesentium vel provident eaque aspernatur, similique quo ducimus tempore molestias!",
    "Est, laborum? Nobis deleniti, deserunt modi perspiciatis nemo numquam ex? Maiores eum minima soluta voluptatem quos, eligendi qui laboriosam dolores explicabo rem.",
    "Neque placeat libero officia necessitatibus laboriosam rem soluta optio tempora repellendus. Voluptates maiores odit dolor. Qui, ipsa rerum. Ratione, vero. Exercitationem, perferendis.",
    "Suscipit qui officiis blanditiis sequi totam minus optio vero quisquam explicabo quod, beatae necessitatibus libero doloribus quia ea laboriosam. Et, sequi sunt."
];
const test_id = ["msize", "roudly", "dreike", "rillite", "LOL"];
const test_date = ["2019-12-26 16:40", "2019-12-25 23:55", "2019-12-25 16:40", "2019-12-24 03:03", "2019-12-23 10:11"];
(() => {
    let i = 4;
    while (i >= 0) {
        let cnt1 = Math.floor(Math.random() * (4.9 - 0) + 0);
        let cnt2 = Math.floor(Math.random() * (4.9 - 0) + 0);
        tweet(test_id[cnt1], test_txt[cnt2], test_date[i]);
        i--;
    }
})();