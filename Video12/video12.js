// switch case thác nước
let a = 1;
switch (a) {
    case 0:
    case 1:
        console.log("Monday");
        break;
    // nếu a = 0 hoặc a = 1 đều in ra Monday, dạng thác nước, vì case 0 không có break, nên mặc nhiên chạy tiếp xuống case 1.
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Friday")

}