
window.onload=function(){
    showHeart();

    function isIpad(){
        var ua = navigator.userAgent.toLowerCase();
        if(/ipad/i.test(ua)) {
            return true;
        }
        else{
            return false;
        }
    }

    function showHeart(){
        var self=this;
        var heart_w=$(window).width(),
            heart_h=$('#heart').parent().height(),
            heart_count=200,// 数量
            heart_font=55,//改变心形大小
            heart_speed=80,//动画速度
            heart_color="rgba(216,29,41,",//初始颜色
            heart_tr_color=90;//动画颜色渐变,越大颜色变化越浅


        if(isIpad()){
            heart_font=30;
        }

        $('#heart').css({
            position:"absolute",
            top:0,
            left:0,
            width:heart_w,
            height:heart_h,
            zIndex:-1
        });

        var cav_w=heart_w;
        var cav_h=heart_h;
        var c = document.getElementsByTagName('canvas')[0];
        var a = c.getContext('2d');
        var M = Math,
            PI=Math.PI,
            n = M.pow,
            d = M.cos,
            z = M.sin,
            i,
            E = 2,
            L = 1,
            F = heart_color,
            w = c.width = cav_w,
            h = c.height = cav_h,
            r = function() {
                return M.random() * 2 - 1//令系统随机选取大于等于 0.0 且小于 1.0 的伪随机 double 值
            },
            y = "px Arial",
            q = "♥",
            X = w / 2,
            Y = h / 2,
            p = function() {
                var e = this;
                e.g = function() {
                    e.x = X;
                    e.y = Y;
                    e.k = 0;
                    e.l = 0;
                    e.t = M.random() * 19000;
                    e.c = e.t;
                    e.rx= e.x;
                    e.ry= e.y;
                };
                e.d = function() {
                    a.fillStyle = F + (e.c / e.t) + ")";
                    a.fillText(q, e.x, e.y);
                    e.c -= heart_tr_color;
                    e.rx += e.k;
                    e.ry += e.l;
                    //控制角度或,不加if就是360度都出现
                    if(e.ry< w/4){
                        e.x= e.rx;
                        e.y= e.ry;
                    }
                    e.k = e.k + r();
                    e.l = e.l + r();
                    if (e.c < 0 || e.x > w || e.x < 0 || e.y > h || e.y < 0) {
                        e.g()
                    }
                };
                e.g()
            },
            A,
            B;
        a.textAlign = "center";
        a.strokeStyle = "#000";
        a.lineWidth = 2;
        for (i = 0; i < heart_count; i++) {
            M[i] = new p()
        }
        setInterval(function() {
                a.clearRect(0, 0, w, h);//清空画布
                a.font = heart_font+y;//字体大小
                for (i = 0; i < heart_count; i++) {
                    M[i].d()
                }
            },
            heart_speed);
    }
};





