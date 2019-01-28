
$.ajax({
    type: "GET",
    url:'../getIsOvertime',
    contentType:'application/json',
    async:'false',
    success:function (data) {
        console.log(data);
        if(data.code == 888){
            localStorage.setItem('otime','1');
            alert('登陆失效');
            // window.location.href='login.html';
            window.top.location = 'login.html'
        }
    }
})
