// 필요한 것
// 아이디
// 본문
// 글쓴 시간

const ipt = () => {
    // 여기서 해야하는 것
    // 1. 아이디 가져오기 => para = ID
    // 2. 메시지 가져오기 => para = Message
    // 3. 아래 트윗에 출력하기
    let txt_id = document.getElementById("txt_id");
    let txt_msg = document.getElementById("txt_msg");
    let OUT = document.getElementById("OUT");
    let date = new Date();
    let div = document.createElement("div");
    div.className = "cmt";

    div.append(set_id(txt_id.value));
    div.append(set_msg(txt_msg.value));
    div.append(set_date(date.format()));
    OUT.append(div);
}
const set_id = (txt) => {
    let div = document.createElement("div");
    div.className = "set_id";
    div.append(txt);
    return div;
}
const set_msg = (txt) => {
    let div = document.createElement("div");
    div.className = "set_msg";
    div.append(txt);
    return div;
}
const set_date = (date) => {
    let div = document.createElement("div");
    div.className = "set_date";
    div.append(date);
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

/*
<header>Tweet</header>
    <section id="IN">
        <div id="ID">
            <div>Id</div>
            <textarea id="txt_id" placeholder="Id"></textarea>
        </div>
        <div id="TWEET">
            <div>Message</div>
            <textarea id="txt_msg" placeholder="Message"></textarea>
        </div>
        <input onclick="ipt();" type="button" value="tweet!"/>
    </section>
    <section id="OUT">
        트윗출력
    </section>
*/