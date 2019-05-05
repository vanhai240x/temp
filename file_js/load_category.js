// Kết nối đến server để lấy dữ liệu về
var xhttp = new XMLHttpRequest();
xhttp.onload = function connect() {
    var ourData = JSON.parse(xhttp.responseText);
    // In dữ liệu vừa lấy được và kiểu dữ liệu  từ server ra màn hình console
    console.log(ourData);
    console.log("ourData là kiểu: " + typeof ourData);

    // Load sản phẩm lên page
    for (let i = 0; i < 10; i++) {}
};
xhttp.open('GET', 'http://localhost:3000/category');
xhttp.send();