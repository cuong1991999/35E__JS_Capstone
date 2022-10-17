function Validation() {
    this.checkEmpty = function (value, divError, mess) {
        if (value.trim() === "") {
            document.querySelector(divError).innerHTML = mess;
            document.querySelector(divError).style.display = "block";
            return false;
        }
        document.querySelector(divError).innerHTML = "";
        document.querySelector(divError).style.display = "none";
        return true;
    };
    this.checkPhone = function (value, divError, mess) {
        var letter = /^[0-9]+$/;
        if (value.match(letter)) {
            document.querySelector(divError).innerHTML = "";
            document.querySelector(divError).style.display = "none";
            return true;
        }
        document.querySelector(divError).innerHTML = mess;
        document.querySelector(divError).style.display = "block";
        return false;
    };
    this.checkStringName = function (value, divError, mess) {
        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

        if (value.match(letter)) {
            document.querySelector(divError).innerHTML = "";
            document.querySelector(divError).style.display = "none";
            return true;
        }
        document.querySelector(divError).innerHTML = mess;
        document.querySelector(divError).style.display = "block";
        return false;
    };
    this.checkEmail = function (value, divError, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(letter)) {
            document.querySelector(divError).innerHTML = "";
            document.querySelector(divError).style.display = "none";
            return true;
        }
        document.querySelector(divError).innerHTML = mess;
        document.querySelector(divError).style.display = "block";
        return false;
    };
    this.checkRepeatPassword = function (value, divError, mess) {
        if (value === document.querySelector("#rePassword").value) {
            document.querySelector(divError).innerHTML = "";
            document.querySelector(divError).style.display = "none";
            return true;
        }
        document.querySelector(divError).innerHTML = mess;
        document.querySelector(divError).style.display = "block";
        return false;
    };
    // this.checkRepeat = function (value, divError, mess, arr) {
    //   var isExist = false;
    //   for (var i = 0; i < arr.length; i++) {
    //     var account = arr[i];
    //     if (account.email === value) {
    //       isExist = true;
    //       break;
    //     }
    //     if (isExist) {
    //       document.querySelector(divError).innerHTML = mess;
    //       document.querySelector(divError).style.display = "block";
    //       return false;
    //     }

    //     document.querySelector(divError).innerHTML = "";
    //     document.querySelector(divError).style.display = "none";
    //     return true;
    //   }
    // };
}
