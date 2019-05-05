// Các hàm được gọi vào thực thi sau khi load xong trang
window.onload = loadProduct();

// Hàm load các sản phẩm hiển thị lên trang web
function loadProduct() {
    // Khai báo XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
            var ourData = JSON.parse(xhttp.responseText); //Lấy sản phẩm lên từ Json-server lưu vào object ourData
            let divHtml = '';
            // Xây dựng khối sản phẩm
            for (let i = 0; i < 9; i++) {
                divHtml += `<div class="detail">
                            <div class="col-3 img">
                                <img id="image" src="${ourData[i].image}">
                            </div>
                            <div class="col-9 info">
                                <div class="name" id=${ourData[i].id}>${ourData[i].name}</div>
                                <div class="vote">
                                    <div class="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <div class="text">(
                                        <i id='vote'>${ourData[i].vote}</i> Đánh giá)
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="text" id="info">${ourData[i].info}</div>
                                <div class="price">
                                    <span id="price">${ourData[i].price}</span> Đ
                                </div>
                                <div class="button">
                                    <button data-id="${ourData[i].id}" onclick="addToCart(this)">MUA NGAY</button>
                                    <button data-id="${ourData[i].id}" onclick="showDetail(this)">XEM CHI TIẾT</button>
                                </div>
                            </div>
                        </div>`;
            }
            document.getElementById("content__right__content").innerHTML = divHtml;
        }
        // Gửi yêu cầu lên server
    xhttp.open('GET', 'http://localhost:3000/products');
    xhttp.send();
}

/*  Hiển thị số sản phẩm đã được thêm vào giỏ hàng
    Số sản phẩm hiển thị lên được lấy ra từ biến click  */
if (localStorage.getItem("count_product_in_cart")) {
    var click = Number(localStorage.getItem("count_product_in_cart"));
    document.getElementById("countProduct").innerHTML = click;
} else var click = 0;

/*  Khai báo biến products_list để hiển thị danh sách ID các sản phẩm được thêm vào khi click vào button MUA NGAY   */
if (localStorage.getItem("id")) {
    var products_list_exist = localStorage.getItem("id");
    var products_list = products_list_exist;
} else var products_list = '';

// Hàm xử lý sự kiện khi click vào button MUA NGAY
function addToCart(button) {
    let id = button.getAttribute('data-id'); // Khai báo biến id = attr data-id của button chứa func addToCart
    console.log(id); // Kiểm tra id lấy được hay không
    let name = document.getElementById(id).innerHTML; // Khai báo biến name (tên sản phẩm có id vừa được click)
    console.log(name); // Kiểm tra name lấy được hay không
    products_list = products_list + ' ' + id;
    // Thêm id sản phẩm vừa click vào Local Storage
    if (localStorage) {
        localStorage.setItem('id', products_list);
    }
    // Hiển thị số sản phẩm đã thêm vào giỏ hàng
    click += 1;
    document.getElementById("countProduct").innerHTML = click;
    // Hiển thị thông báo
    setTimeout(function() { alert("Bạn đã thêm " + name + " vào giỏ hàng !") }, 100);
}

// Hàm xử lý sự kiện khi click vào button XEM CHI TIẾT
function showDetail(button) {
    let id = button.getAttribute('data-id');
    // Thêm id sản phẩm vừa click vào Local Storage
    if (localStorage) {
        localStorage.setItem('id_in_detail', id);
    }
    window.location = 'http://127.0.0.1:5500/file_pug/detail.html?id=' + id;
}