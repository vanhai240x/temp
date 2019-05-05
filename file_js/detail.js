// Các hàm được gọi vào thực thi sau khi load xong trang
window.onload = showDetail();

// Hàm load các sản phẩm hiển thị lên trang web
function showDetail() {
    // Khai báo XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var ourData = JSON.parse(xhttp.responseText);
        var i = localStorage.getItem("id_in_detail") - 1;
        console.log(i);
        let divHtml = '';
        // Xây dựng khối sản phẩm
        divHtml += `<div class="img">
                        <div class="img__large">
                            <img src="${ourData[i].image}" id="image">
                        </div>
                        <div class="img__small">
                            <img src="../build/images/6.jpg" alt="">
                            <img src="../build/images/36.jpg" alt="">
                            <img src="../build/images/37.jpg" alt="">
                            <img src="../build/images/38.jpg" alt="">
                            <img src="../build/images/11.jpg" alt="">
                        </div>
                    </div>
                    <div class="content">
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
                            <a href="">Gửi bình luận của bạn</a>
                        </div>
                        <div class="price">GNY:
                            <span id="price">${ourData[i].price}</span> Đ
                        </div>
                        <div class="info">
                            <h4>Thông tin sản phẩm:</h4>
                            <p>${ourData[i].info}</p>
                        </div>
                        <div class="row select">
                            <div class="col-6">
                                <p>Size:</p>
                                <select name="size">
                                    <option value="0">--Chọn size--</option>
                                    <option value="1">35</option>
                                    <option value="2">36</option>
                                    <option value="3">37</option>
                                    <option value="4">38</option>
                                    <option value="5">39</option>
                                </select>
                            </div>
                            <div
                                class="col-6">
                                <p>Màu sắc:</p>
                                <select name="size">
                                    <option value="0">--Chọn màu--</option>
                                    <option value="1">Màu đỏ</option>
                                    <option value="2">Màu vàng</option>
                                    <option value="3">Màu xanh</option>
                                    <option value="4">Màu bạc</option>
                                    <option value="5">Màu đen</option>
                                </select>
                            </div>
                    </div>
                    <div class="button">
                        <input type="number" name="" min="1" max="10" value="1">
                        <button data-id="${ourData[i].id}" onclick="addToCart(this)">MUA NGAY</button>
                    </div>
                    <div class="share">
                        <i class="fab fa-facebook-square">Like</i>
                        <div class="talkbubble">0</div>
                        <i class="fab fa-twitter">Tweet</i>
                        <i class="fab fa-google-plus-g">1</i>
                        <div class="talkbubble">0</div>
                        <i class="fas fa-plus-square">Share</i>
                    </div>
                </div>
                <div class="clearfix"></div>`;
        document.getElementById("content__right__top").innerHTML = divHtml;
    }
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