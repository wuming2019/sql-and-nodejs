$(function () {
    // 注册点击新增事件
    $('#sub').on('click', function () {
        // 收集数据
        let data = $('form').serialize();
        // 发送ajax请求
        $.ajax({
            type: 'post',
            url: 'http://127.0.0.1:8080/addNewHero',
            data,
            success : function(res){
                if(res.code === 200) {
                    alert(res.msg);
                    location.href = '/index';
                }
            }
        });
    });
});