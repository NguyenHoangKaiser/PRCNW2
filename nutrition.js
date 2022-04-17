function BMR(){
var w=document.getElementById('weight').value;
var h=document.getElementById('height').value;
var a=document.getElementById('age').value;
if(document.getElementById('gender').value="Nam"){
    var bmr= 66 + (13.7*w) + (5*h)-(6.8*a) ;
    var bmro=(bmr.toFixed(2));
    document.getElementById("result1").innerHTML="Chỉ số BMR của bạn là: " + bmro +" calories";
}
if(document.getElementById('gender').value="Nu"){
    var bmr= 655 + (9.6*w) + (1.8*h)-(4.7*a) ;
    var bmro=(bmr.toFixed(2));
    document.getElementById("result1").innerHTML="Chỉ số BMR của bạn là: " + bmro +" calories";
}
}


function TDEE(){
    var bmr=document.getElementById('bmr').value;
    if(document.getElementById('dot1').checked==true){
        var tdee= bmr*1.2;
        var tdeeo=(tdee.toFixed(2));
    }
    if(document.getElementById('dot2').checked==true){
        var tdee= bmr*1.4;
        var tdeeo=(tdee.toFixed(2));
    }
    if(document.getElementById('dot3').checked==true){
        var tdee= bmr*1.6;
        var tdeeo=(tdee.toFixed(2));
    }
    if(document.getElementById('dot4').checked==true){
        var tdee= bmr*1.75;
        var tdeeo=(tdee.toFixed(2));
    }
    if(document.getElementById('dot1goal').checked==true){
        var result=tdeeo - 150;
        document.getElementById('result2').innerHTML="TDEE 1 ngày để bạn giảm cân: " + result + " calories";
    }
    if(document.getElementById('dot2goal').checked==true){
        var result=tdeeo;
        document.getElementById('result2').innerHTML="TDEE 1 ngày để bạn tăng cân: " + result + " calories";
    }
    if(document.getElementById('dot3goal').checked==true){
        var result=tdeeo + 150;
        document.getElementById('result2').innerHTML="TDEE 1 ngày để bạn duy trì cân: " + result + " calories";
    }

}

document.getElementById("bmr_exp").innerHTML="BMR là từ viết tắt của Basal Metabolic Rate có nghĩa là tỉ lệ trao đổi chất cơ bản trong cơ thể con người. Chỉ số này cho ta biết mức năng lượng tối thiểu (calo) mà cơ thể bạn cần để đảm bảo duy trì các hoạt động bình thường. Ở trạng thái nghỉ ngơi kể cả khi đang ngủ, cũng như các hoạt động của các cơ quan hô hấp, tuần hoàn, hệ thống thần kinh và các bộ phận khác vẫn hoạt động để duy trì sự sống, tất cả các hoạt động của tim, não bộ, gan, thận,… đều tiêu tốn calories, tổng hợp tất cả các hoạt động cần thiết duy trì sự sống từ bên trong cơ thể (không tính vận động bên ngoài) đều được gọi chung là BMR."
document.getElementById("tdee_exp").innerHTML="TDEE (là viết tắt của Total Daily Energy Expenditure) là chỉ số calo cần thiết cho cơ thể trong 1 ngày bao gồm tất cả hoạt động ăn chơi ngủ nghỉ mà bạn có trong ngày."