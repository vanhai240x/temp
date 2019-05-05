// Khai báo xhttp và hàm connect()
var xhttp = new XMLHttpRequest();
var ourData;
xhttp.onload = function connect() {
    ourData = JSON.parse(xhttp.responseText);
    // In dữ liệu vừa lấy được và kiểu dữ liệu  từ server ra màn hình console để kiểm tra thử có kết nối đc ko ?
    console.log(ourData);
    console.log("ourData là kiểu: " + typeof ourData);

    // Load sản phẩm nổi bật lên page
    for (let i = 0; i < 6; i++) {
        let detail = document.getElementsByClassName("prod__detail")[i];
        detail.setAttribute('id', ourData[i].id);
        detail.setAttribute('data-id', ourData[i].id);
        detail.getElementsByTagName("img")[0].src = ourData[i].image;
        detail.getElementsByClassName("name")[0].innerHTML = ourData[i].name;
        detail.getElementsByTagName("i")[5].innerHTML = ourData[i].vote;
        detail.getElementsByTagName("span")[0].innerHTML = ourData[i].price;
    }
    // Load sản phẩm mới lên page
    for (let i = 0; i < 3; i++) {
        let detail = document.getElementsByClassName("prod__detail")[i + 6];
        detail.setAttribute('data-id', ourData[i + 6].id);
        detail.getElementsByTagName("img")[0].src = ourData[i + 6].image;
        detail.getElementsByClassName("name")[0].innerHTML = ourData[i + 6].name;
        detail.getElementsByTagName("i")[5].innerHTML = ourData[i + 6].vote;
        detail.getElementsByTagName("span")[0].innerHTML = ourData[i + 6].price;
    }
    // Load sản phẩm bán chạy lên page
    for (let i = 0; i < 5; i++) {
        let detail = document.getElementsByClassName("prod-detail")[i];
        detail.setAttribute('data-id', ourData[i + 9].id);
        detail.getElementsByTagName("img")[0].src = ourData[i + 9].image;
        detail.getElementsByClassName("name")[0].innerHTML = ourData[i + 9].name;
        detail.getElementsByTagName("i")[5].innerHTML = ourData[i + 9].vote;
        detail.getElementsByTagName("span")[0].innerHTML = ourData[i + 9].price;
    }
    // Load hàng mới về  lên page
    for (let i = 0; i < 4; i++) {
        let detail = document.getElementsByClassName("prod-detail2")[i];
        detail.setAttribute('data-id', ourData[i].id);
        detail.getElementsByTagName("img")[0].src = ourData[i].image;
        detail.getElementsByClassName("name")[0].innerHTML = ourData[i].name;
        detail.getElementsByTagName("i")[5].innerHTML = ourData[i].vote;
        detail.getElementsByClassName("text")[1].innerHTML = ourData[i].info;
        detail.getElementsByTagName("span")[0].innerHTML = ourData[i].price;
    }
};
// Kết nối đến server để lấy dữ liệu về
xhttp.open('GET', 'http://localhost:3000/products');
xhttp.send();