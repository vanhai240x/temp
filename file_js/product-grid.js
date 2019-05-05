// Các hàm được gọi vào thực thi sau khi load xong trang
window.onload = loadProduct();

// Hàm load các sản phẩm hiển thị lên trang web
function loadProduct() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var ourData = JSON.parse(xhttp.responseText);
        let divHtml = '';
        // Xây dựng khối sản phẩm
        for (let i = 0; i < 18; i++) {
            divHtml += `<div class="col-4 prod__detail">
                            <div class="wrap-content">
                                <img id="image" src="${ourData[i].image}">
                                <div class="price">
                                    <span id="price">${ourData[i].price}</span> Đ
                                </div>
                                <div id=${ourData[i].id} class="name">${ourData[i].name}</div>
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
                                <div class="button">
                                    <button data-id="${ourData[i].id}" onclick="addToCart(this)">MUA NGAY</button>
                                    <button data-id="${ourData[i].id}" onclick="showDetail(this)">XEM CHI TIẾT</button>
                                </div>
                            </div>
                        </div>`;
        }
        document.getElementById("content__right__content").innerHTML = divHtml;
    }
    xhttp.open('GET', 'http://localhost:3000/products');
    xhttp.send();
}

// Hàm xử lý sự kiện khi click vào button MUA NGAY
let click = 0;

function addToCart(button) {
    let id = button.getAttribute('data-id');
    let name = document.getElementById(id).innerHTML;
    // Thêm id sản phẩm vừa click vào Local Storage
    if (localStorage) {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
    }
    // Đếm só lần click button
    click += 1;
    document.getElementById("countProduct").innerHTML = click;
    setTimeout(function() { alert("Bạn đã thêm " + name + " vào giỏ hàng !") }, 100);
}

// Hàm xử lý sự kiện khi click vào button XEM CHI TIẾT
function showDetail(button) {
    let id = button.getAttribute('data-id');
    console.log(id);
    window.location = 'http://127.0.0.1:5500/file_pug/detail.html?id=' + id;
}