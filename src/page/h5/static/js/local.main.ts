import "../../config/local.conf.ts";
import "../../../../common/static/js/global.main.ts";
require("../../../../common/static/css/layout/h5.scss");
require("../../../../common/static/css/motion/animate.scss");
require("../../../../common/static/css/block/swiper.scss");
$.ajax({
    url:'/api/dynamic',
    type:'get',
    // dataType:'json',
    data:{},
    contentType:'application/x-www-form-urlencoded',
    timeout:1000,
    headers:{},
    cache:false,
    // username&password
    success:function(x){
        console.log(x);
    }
});
$.ajax({
    url:'/api/proxy',
    type:'get',
    // dataType:'json',
    data:{},
    contentType:'application/x-www-form-urlencoded',
    timeout:1000,
    headers:{},
    cache:false,
    // username&password
    success:function(x){
        console.log(x);
    },
    error:function(x){
        console.error(x);
    }
});