// 共通パーツ用
$(function() {
    // 横767px以下もしくはユーザがiPhoneまたはAndroidスマートフォンからの接続の場合、モバイル向けを適用する
    if (window.innerWidth <=767 || navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        $("#header").load("../contents/header_m.html");
        $("#footer").load("../contents/footer_m.html")
    }
    else {
        $("#header").load("../contents/header.html");
        $("#footer").load("../contents/footer.html")
    }
    // ウィンドウサイズの変更を行った場合

    window.addEventListener('resize', function(){
        if (window.innerWidth <= 767 || navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
            $("#header").load("../contents/header_m.html");
            $("#footer").load("../contents/footer_m.html")
        }
        else {
            $("#header").load("./contents/header.html");
            $("#footer").load("./contents/footer.html");
        };
    });
});