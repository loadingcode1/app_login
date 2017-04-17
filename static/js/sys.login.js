;(function(jzfq,doc,$,undefined){
    jzfq.sysLogin = {
        loginSubmit: $('#submit-btn'),
        inputEle: $('.input-required'),
        init: function(){
            this.formSubmit();
        },
        formSubmit: function(){
            var _this = this;
            var myreg =/^1[34578]\d{9}$/;
            _this.loginSubmit.on('click',function(e){
                e.preventDefault();
                if(_this.inputEle.eq(0).val() == "" || _this.inputEle.eq(0).val().length == 0){
                    _this.removeTips();
                    _this.addError(0,'手机号不能为空！');
                    return false;
                }else if(!(myreg.test( _this.inputEle.eq(0).val()))){
                    _this.removeTips();
                    _this.addError(0,'请输入正确的手机号！');
                    return false;
                }else if(_this.inputEle.eq(1).val() == "" || _this.inputEle.eq(1).val().length == 0){
                    _this.removeTips();
                    _this.addError(1,'密码不能为空！');
                    return false;
                }else if(_this.inputEle.eq(1).val().length < 6){
                    _this.removeTips();
                    _this.addError(1,'密码不能小于6位！');
                    return false;
                }else{
                    //_this.removeTips();
                    return true;
                }
            });
        },
        addError: function(item,txt){
            var _this = this;
            var ctimeout;
            var item = Math.abs(item) || 0;
            _this.inputEle.eq(item).focus();
            $('.errorspan').html(txt);
            // clearTimeout(ctimeout);
            ctimeout = setTimeout(function(){
                _this.removeTips();
            },1000);
            ctimeout = null;
        },
        removeTips: function(){
            $('.errorspan').html('');
        }
    }
    $(function(){
        jzfq.sysLogin.init();
    });
})(window,document,jQuery);