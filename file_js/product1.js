document.addEventListener("DOMContentLoaded", function(event) {
    initData();
});
const initData = function() {
    var e;
    (e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function(resp) {
        if (e.readyState === XMLHttpRequest.DONE) {
            if (e.status === 200) {
                //template string
                // console.log(resp);//kiểm tra đường dẫn
                // console.log(resp.srcElement.response);//kiểm tra xem đã load tất cả những gì có trong json
                let data = JSON.parse(resp.srcElement.response); //JSON.parse dùng để convert string biểu diễn JSON thành JavaScript Object.
                let divHtml = ' ';
                for (let products of data) {
                    divHtml += `
                    <div class="col-9 prod">
                        <div class="row">
                            <div class="col-4 prod__detail">
                                <div class="wrap-content"><img src="../build/images/3.jpg">
                                    <div class="price"><span></span> Đ</div>
                                    <div class="name">Máy khoan Black Decker</div>
                                    <div class="vote">
                                        <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
                                        <div class="text">(<i></i> Đánh giá)</div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="button"><a href=""><button>MUA NGAY</button></a><a href="../file_pug/detail.html"><button>XEM CHI TIẾT </button></a></div>
                                </div>
                            </div>
                            <div class="col-4 prod__detail">
                                <div class="wrap-content"><img src="../build/images/4.jpg">
                                    <div class="price"><span></span> Đ</div>
                                    <div class="name">Máy khoan Black Decker</div>
                                    <div class="vote">
                                        <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
                                        <div class="text">(<i></i> Đánh giá)</div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="button"><a href=""><button>MUA NGAY</button></a><a href="../file_pug/detail.html"><button>XEM CHI TIẾT </button></a></div>
                                </div>
                            </div>
                            <div class="col-4 prod__detail">
                                <div class="wrap-content"><img src="../build/images/5.jpg">
                                    <div class="price"><span></span> Đ</div>
                                    <div class="name">Máy khoan Black Decker</div>
                                    <div class="vote">
                                        <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
                                        <div class="text">(<i></i> Đánh giá)</div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="button"><a href=""><button>MUA NGAY</button></a><a data-id="${products.id}" onclick="addToCart(this)" ><button>XEM CHI TIẾT </button></a></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 prod__detail">
                                <div class="wrap-content"><img src="../build/images/6.jpg">
                                    <div class="price"><span></span> Đ</div>
                                    <div class="name">Máy khoan Black Decker</div>
                                    <div class="vote">
                                        <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
                                        <div class="text">(<i></i> Đánh giá)</div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="button"><a href=""><button>MUA NGAY</button></a><a href="../file_pug/detail.html"><button>XEM CHI TIẾT </button></a></div>
                                </div>
                            </div>
                            <div class="col-4 prod__detail">
                                <div class="wrap-content"><img src="../build/images/7.jpg">
                                    <div class="price"><span></span> Đ</div>
                                    <div class="name">Máy khoan Black Decker</div>
                                    <div class="vote">
                                        <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
                                        <div class="text">(<i></i> Đánh giá)</div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="button"><a href=""><button>MUA NGAY</button></a><a href="../file_pug/detail.html"><button>XEM CHI TIẾT </button></a></div>
                                </div>
                            </div>
                            <div class="col-4 prod__detail">
                                <div class="wrap-content"><img src="../build/images/8.jpg">
                                    <div class="price"><span></span> Đ</div>
                                    <div class="name">Máy khoan Black Decker</div>
                                    <div class="vote">
                                        <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div>
                                        <div class="text">(<i></i> Đánh giá)</div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="button"><a href=""><button>MUA NGAY</button></a><a href="../file_pug/detail.html"><button>XEM CHI TIẾT </button></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                }
                console.log(data)
                document.getElementById('container-product').innerHTML = divHtml;
            }
        }
        e.open('GET', "http://localhost:3000/products", true);
        e.send(null);
    }
}

function addToCart(btn) {
    let id = btn.getAttribute('data-id');
    console.log(id);
    window.location = 'http://127.0.0.1:5500/file_pug/detail.html?id=' + id;
}