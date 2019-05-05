// Các hàm được gọi vào thực thi sau khi load xong trang
window.onload = loadCart();

// Hàm load các sản phẩm hiển thị lên trang web
function loadCart() {
    let id = localStorage.getItem("id"); // Lấy ra Id từ Localstorage
    let arrayId = id.split(" "); // Chuyển chuỗi Id vừa lấy ra thành mảng > mỗi phần tử là 1 Id sản phẩm
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var ourData = JSON.parse(xhttp.responseText); // Lấy danh sách sản phẩm lên từ server
        var divHtml = '';
        var numOrder = 0; // Khai báo biến đếm số thứ tự
        for (let i = 1; i < arrayId.length; i++) {
            let showProduct = ourData[Number(arrayId[i] - 1)]; // Khai báo biến chứa dữ liệu sản phẩm đang truy cập
            let amount = 1; // Khai báo biến số lượng
            numOrder++;
            // Xây dựng khối giỏ hàng
            divHtml += `<tr>
                            <td>
                                <div class="wrap" id="numOrder">${numOrder}</div>
                            </td>
                            <td>
                                <div class="wrap">
                                    <img src="${showProduct.image}">
                                </div>
                            </td>
                            <td>
                                <div class="wrap">${showProduct.name}</div>
                            </td>
                            <td>
                                <div class="wrap">${showProduct.price} Đ</div>
                            </td>
                            <td>
                                <div class="wrap">${amount}</div>
                            </td>
                            <td>
                                <div class="wrap"><span class="intoMoney" id="priceProduct${numOrder}">${showProduct.price * amount}</span> Đ</div>
                            </td>
                            <td>
                                <div class="wrap" onclick="del(this)" data-id="${numOrder}">
                                    <i class="fas fa-times"></i>
                                </div>
                            </td>
                        </tr>`;
        }
        document.getElementById("cart__table").innerHTML = divHtml;
        document.getElementById("countProduct").innerHTML = numOrder; // Hiển thị số sản phẩm trên icon shopping cart
        localStorage.setItem("count_product_in_cart", numOrder); // Lưu biến số thứ tự vào Localstorage để hiển thị lên icon shopping cart
        // Tính tiền - Thuế - Thanh toán
        var intoMoney = 0;
        var objIntoMoney = document.getElementsByClassName("intoMoney");
        for (let i = 0; i < objIntoMoney.length; i++) {
            intoMoney += Number(objIntoMoney[i].innerHTML);
        }
        var tax = intoMoney * 10 / 100;
        var pay = intoMoney + tax;
        document.getElementById("intoMoney").innerHTML = intoMoney;
        document.getElementById("tax").innerHTML = tax;
        document.getElementById("pay").innerHTML = pay;
    }
    xhttp.open('GET', 'http://localhost:3000/products');
    xhttp.send();
}

// Xóa 1 sản phẩm trong giỏ hàng khi nhấn vào icon delete
function del(button) {
    let id = button.getAttribute('data-id'); // Khai báo biến id = attr data-id của button chứa func addToCart
    console.log(id); // Kiểm tra id lấy được hay không
}