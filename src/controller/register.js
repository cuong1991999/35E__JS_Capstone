var validation = new Validation();

document.querySelector("#btnTaoTK").addEventListener("click", function (e) {
    e.preventDefault();
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var rePassword = document.querySelector("#rePassword").value;
    var name = document.querySelector("#name").value;
    var phone = document.querySelector("#phone").value;
    // var gender = document.querySelector("input[name='Gender']:checked").value;
    var isValid = true;
    isValid &=
        validation.checkEmpty(email, "#errorEmail", "(*) Nhập email") &&
        validation.checkEmail(email, "#errorEmail", "(*) Email không đúng định dạng");
    isValid &= validation.checkEmpty(
        password,
        "#errorPassword",
        "(*) Nhập mật khẩu"
    );

    isValid &=
        validation.checkEmpty(
            rePassword,
            "#errorRePassword",
            "(*) Nhập lại mật khẩu"
        ) &&
        validation.checkRepeatPassword(
            rePassword,
            "#errorRePassword",
            "(*) Mật khẩu không trùng"
        );
    isValid &=
        validation.checkEmpty(name, "#errorName", "(*) Nhập họ và tên") &&
        validation.checkStringName(name, "#errorName", "(*) Vui lòng nhập tên đúng định dạng");
    isValid &=
        validation.checkEmpty(phone, "#errorPhone", "(*) Nhập số điện thoại") &&
        validation.checkPhone(phone, "#errorPhone", "(*) Vui lòng nhập đúng số điện thoại");

    if (isValid) {
        var sign = new SignUp();
        sign.email = email;//document.querySelector("#register-email").value;
        sign.password = password;//document.querySelector("#register-password").value;
        sign.name = name;//document.querySelector("#register-name").value;
        sign.gender = document.querySelector("input[name='radio']:checked").value;
        sign.phone = phone;//document.querySelector("#register-phone").value;

        var promise = axios({
            url: "https://shop.cyberlearn.vn/api/Users/signup",
            method: "POST",
            data: sign,
        });
        promise.then(function (result) {
            console.log(result.data.content);
            alert("Success");
        });
        promise.catch(function (error) {

            console.log("Fail", error);
            alert("Fail");
        });
    }
});
