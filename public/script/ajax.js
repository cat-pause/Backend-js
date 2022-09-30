$(function(){
    // 예약확인 버튼 클릭하면
    $("#checkForm").submit(function(e){
        e.preventDefault(); //form 이 submit을 발생
        // ajax로 통신
        const query = {
            guest_name : $("#guest_name").val(),
            guest_phone : $("#guest_phone").val()
        }
        $.ajax({
            url:"/send_reserve",
            method: "post",
            data: query,
            // dataType: "json",
            success:function(data){
                alert("post 전송 [성공], 메인페이지로 이동합니다")
                location.href="/";
                // console.log(data);
            },
            error:function(data){
                alert("에러 발생! ")
                console.log(data);
            }
        })
    })
})