﻿M.Page.recodeSumPage = M.createClass();
M.extend(M.Page.recodeSumPage.prototype, {
    context: {},
    submittext: "处理中...",
    typelist: {},
    innlist: {},
    consumedetail: {},
    innid: '',
    cashierinnid: '',
    sendstatus: 0,
    tabmenu: {
        "income": "收入",
        "pay": "支出"
    },
    tabexamp: {
        "income": "备注，如：201客人肖万凯买13号普洱茶饼一个。",
        "pay": "备注，如：大床房卫生间花洒换新"
    },
    tpl_type: '<div value="${id}" t="${tag}"><a href="javascript:;">${name}</a></div>',
    tpl_inn: ' <div value="${innid}"><a href="javascript:;" class="on">${innname}</a></div>',
    tpl_pay: '<div value="${paytypecode}"><a href="javascript:;">${paytypename}</a></div>',
    init: function() {
        this.initDOM();
        this.initEvent();
    },
    initDOM: function() {
        this.context.fromdate = $("#fromdate");
        this.context.enddate = $("#enddate");
        this.context.searchbtn = $("#searchbtn");
        this.context.addstatistics = $("#addstatistics");
        this.context.incomestatisticsform = $("#incomestatisticsform");
        this.context.paystatisticsform = $("#paystatisticsform");
        this.context.incometypelist = $("#incometypelist");
        this.context.paytypelist = $("#paytypelist");
        this.context.incomedate = $("#incomedate");
        this.context.paydate = $("#paydate");
        this.context.hide_data = $("#hide_data");
        this.context.detail = $("#detail");
        this.context.innidlist = $("#innidlist");
        this.context.searchbtn = $("#searchbtn");
        this.context.searchform = $("#searchform");
        this.context.edititem = $("#addstatistics").find("a");
        this.context.editpop = $("#editPop");
        this.context.incometypeitem = $("#incometypeitem");
        this.context.paytypeitem = $("#paytypeitem");
        var innid = this.context.searchform.attr("innid");
        this.context.innidlist.val(innid);
        this.context.add_incomeitem = $("#add_incomeitem");
        this.context.add_payitem = $("#add_payitem");
        this.context.pickerarea = $("#pickerarea");
        this.context.consumecashierform = $("#consumecashierform");
        this.context.consumehiddedata = $("#consumehiddedata");
        this.context.cashierqrcodedownload = $("#cashierqrcodedownload");
        this.context.men_recodesum = $("#men_recodesum");
        this.context.recodesumform = $("#recodesumform");
        this.context.addrecodedate = $("#addrecodedate");
        this.context.recodetypelist = $("#recodetypelist");
        this.context.recodesum_hidedata = $("#recodesum_hidedata");
        this.context.body = $("body");
        this.context.addrecodedate.datetimepicker({
            timeFormat: "HH:mm",
            dateFormat: "yy-mm-dd"
        });
        this.context.recodelist = $("#recodelist");
    },
    initEvent: function() {
        this.context.men_recodesum.bind("click", this.recodesum_click.toEventHandler(this));
        this.context.edititem.bind("click", this.edititem_click.toEventHandler(this));
        this.context.recodesumform.bind("click", this.recodesumform_click.toEventHandler(this));
        this.context.recodetypelist.bind("click", this.recodetypelist_click.toEventHandler(this));
        this.context.consumecashierform.bind('click', this.cashierform_click.toEventHandler(this));
    },
    cashierform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'pos' || t == 'qrcode' || t == "msg") {
            this.context.body.find("div.graylayer").removeClass("deepgraylayer");
            this.qrOpened = false;
            this._handlecashiertypeform(t);
        } else if (t == "close") {
            this.context.body.find("div.graylayer").removeClass("deepgraylayer");
            this._closepopup();
            this.qrOpened = false;
        } else if (t == "sendmsg") {
            this.context.consumehiddedata.attr("channel", 'msg');
            this.cashiermsg(ele);
            this.channelstatus(t);
        }
        if (t == 'qrcode') {
            this.context.body.find("div.graylayer").addClass("deepgraylayer");
            this.context.consumehiddedata.attr("channel", 'qrcode');
            this.channelstatus(t);
            this.qrOpened = true;
            this._longPolling();
        }
        if (t == 'pos') {
            this.context.consumehiddedata.attr("channel", 'pos');
            this.channelstatus(t);
        }
    },
    channelstatus: function(t) {
        var innid = this.context.recodesumform.find("div[t=innlist]").children("span").attr("value");
        var cstatus = this.context.consumehiddedata.attr("channel");
        var accountid = this.context.consumehiddedata.attr("cashierid");
        if (this.cashierinnid > 0) {
            innid = this.cashierinnid;
        }
        var data = {
            "op": 'updatechannel',
            "innid": innid,
            "accountid": accountid,
            "channel": cstatus
        };
        M._getjson("/pay/updatecashierchannel", data, this.updatecashiergateway_finished.toEventHandler(this));
    },
    updatecashiergateway_finished: function(d) {
        if (d.status == "success") {
            this.context.consumehiddedata.attr("posstatus", 1);
        } else {
            M.error(d.msg)
        }
    },
    _handlecashiertypeform: function(type) {
        var tpl = this.context.consumecashierform.find("div[tag=paytypelist]");
        tpl.find("li").removeClass("checked");
        tpl.find("i[tag=" + type + "]").parents("li").addClass("checked");
        this.context.consumecashierform.find("div[tag=msg]").hide();
        this.context.consumecashierform.find("div[tag=qrcode]").hide();
        this.context.consumecashierform.find("div[tag=pos]").hide();
        this.context.consumecashierform.find("div[tag=" + type + "]").show();
    },
    _longPolling: function() {
        if (!this.qrOpened) {
            return;
        }
        var aid = this.context.consumehiddedata.attr("cashierid");
        var trade_no = this.context.consumehiddedata.attr("trade_no");
        var data = {
            "op": "getpaystatus",
            "out_trade_no": aid,
            "trade_no": trade_no
        };
        M._getjson("/pay/getpaystatus", data, this.getpaystatus_finished.toEventHandler(this));
    },
    getpaystatus_finished: function(d) {
        var data = d.info;
        if ('202' == data.code) {
            this._longPolling();
        } else {
            this.context.body.find("div.graylayer").removeClass("deepgraylayer");
            this.context.consumecashierform.find("div[tag=pay]").hide();
            var tpl = this.context.consumecashierform.find("div[tag=payresult]").show();
            tpl.find("span[tag=gateway]").html(data.gateway);
            tpl.find("span[tag=totalprice]").html(data.total_fee);
            if ('200' == data.code) {
                tpl.find("div[tag=success]").show();
                tpl.find("div[tag=fail]").hide();
            } else {
                tpl.find("div[tag=success]").hide();
                tpl.find("div[tag=fail]").show();
            }
        }
    },
    _handlepaytype: function(innid) {
        var inn = {};
        var innlist = this.innlist;
        for (var i = 0; i < innlist.length; i++) {
            if (innlist[i].innid == innid) {
                inn = innlist[i];
            }
        }
        if (M.isEmpty(inn.box) || inn.box.length == 0) {
            this.context.consumecashierform.find("div[tag=paytypelist]").find("li[tag=pos]").attr("status", 0).hide();
        } else {
            this.context.consumecashierform.find("div[tag=paytypelist]").find("li[tag=pos]").attr("status", 1).show();
        }
    },
    cashier: function() {
        var innid = this.context.recodesumform.find("div[t=innlist]").children("span").attr("value");
        this._handlepaytype(innid);
        var detail = this.consumedetail;
        this.context.consumecashierform.find("div[tag=pay]").show();
        this.context.consumecashierform.find("div[tag=payresult]").hide();
        var paytype = 'qrcode';
        var posstatus = this.context.consumecashierform.find("div[tag=paytypelist]").find("li[tag=pos]").attr("status");
        if (posstatus == 1) {
            paytype = 'pos';
            this.context.consumecashierform.find("div[tag=paytypelist]").find("li[tag=qrcode]").parents("div[tag=paytypelist]").attr("style", "");
        } else {
            this.context.consumecashierform.find("div[tag=paytypelist]").find("li[tag=qrcode]").parents("div[tag=paytypelist]").attr("style", "width:260px");
        }
        this.context.consumecashierform.find("div[tag=qrcode]").show();
        this.context.consumehiddedata.attr("posstatus", 0);
        var data = {
            "op": "getpayinfo",
            "paytype": paytype
        };
        data.accountid = detail.cashierid;
        data.innid = detail.innid;
        this.cashierinnid = data.innid;
        data.desc = '其他消费';
        data.appendmoney = detail.amount;
        data.innname = this.context.recodesumform.find("div[t=innlist]").children("span").text();
        var li_len = this.context.recodelist.children("li[t=recode]").length;
        for (var i = 0; i < li_len; i++) {
            var span_value = this.context.recodelist.children("li[t=recode]").eq(i).find('div[t=paytypelist]').children('span').attr('value');
            if (span_value == 'shouyintai') {
                data.innname = this.context.recodelist.children("li[t=recode]").eq(i).find('div[t=innlist]').children("span").text();
            }
        }
        if (data.appendmoney == 0) {
            return;
        }
        M._getjson("/pay/getPayInfo", data, this.getpay_finished.toEventHandler(this));
    },
    getpay_finished: function(d) {
        if (d.status == "success") {
            var info = d.info;
            var data = info.data;
            var paytype = d.req.paytype;
            this._handlecashiertypeform(paytype);
            this.context.consumehiddedata.attr("trade_no", data.trade_no) this.context.consumecashierform.find("img[tag=qrcode]").attr("src", data.pay_qr);
            this.context.consumecashierform.find("div[tag=msgdesc]").children("a").attr("href", data.pay_url);
            var innname = d.req.innname;
            var appendmoney = d.req.appendmoney;
            var msgtpl = this.context.consumecashierform.find("div[tag=msgdesc]");
            var msg = '您在&lt;' + innname + '&gt的消费需支付' + appendmoney + '元，请点击以下链接以完成支付[支持支付宝和信用卡支付]。';
            msgtpl.find("span").html(msg);
            msgtpl.find("a").html("href", data.pay_url).html(data.pay_url);
            M.Popup(this.context.consumecashierform, {
                "hideclass": "modal cashier fade",
                "showclass": "modal cashier fade in",
                "dragable": true
            });
            if (paytype == 'qrcode') {
                this.context.body.find("div.graylayer").addClass("deepgraylayer");
            }
            if (paytype == 'qrcode' || paytype == 'pos') {
                this.qrOpened = true;
                this._longPolling();
            }
            if (paytype == 'pos') {
                this.context.consumehiddedata.attr("channel", 'pos');
                this.channelstatus(paytype);
            }
        } else {
            M.error(d.msg);
        }
    },
    _showcashiermsg: function() {},
    cashiermsg: function(ele) {
        var phone = this.context.consumecashierform.find("input[name=phone]").val();
        var msg = this.context.consumecashierform.find("div[tag=msgdesc]").children("span").text();
        var href = this.context.consumecashierform.find("div[tag=msgdesc]").children("a").attr("href");
        var msgcon = msg + href;
        if (!M.isEmpty(phone)) {
            var re = /^(13|14|15|16|17|18)[0-9]{9}$/;
            if (!re.test(phone)) {
                alert("请输入正确的手机号");
                return false;
            } else {
                alert("短信已发送，客人成功支付后，您会在房态页收到提醒。");
            }
        } else {
            alert('手机号不能为空');
            return;
        }
        M._getjson("/pay/sendmsg", {
            "op": "sendpaymsg",
            "phone": phone,
            "msgcon": msgcon,
            "other": '记一笔',
            "type": '2'
        },
        this.cashiermsg_finished.toEventHandler(this));
        this._closepopup();
    },
    cashiermsg_finished: function(d) {
        if (d.status == "success") {
            var data = d.data;
        } else {
            M.error((d.msg));
        }
    },
    saverecodesum: function(ele, msg) {
        var data = {};
        var tpl_type = this.context.recodesumform.find("li[tag=typelist]");
        var tpl_pay = tpl_type.find("div[t=paytypelist]");
        var tpl_consume = tpl_type.find("div[t=consumelist]");
        data.typeid = tpl_consume.children("span").attr("value");
        data.typename = tpl_consume.children("span").text();
        data.paytypecode = tpl_pay.children("span").attr("value");
        data.paytypename = tpl_pay.children("span").text();
        data.type = this.context.recodesum_hidedata.attr("recodetype");
        data.innid = this.context.recodesumform.children().find("div[t=innlist]").children("span").attr("value");
        data.date = this.context.addrecodedate.val();
        data.money = M.getVal(this.context.recodesumform.children().find("input[name=money]"));
        data.remark = M.getVal(this.context.recodesumform.children().find("textarea[name=remark]"));
        var tab = this.tabmenu[data.type];
        if (M.isEmpty(data.typeid)) {
            alert("请选择" + tab + "项目");
            return;
        }
        if (isNaN(data.money) || data.money == 0) {
            alert("请输入" + tab + "金额");
            return;
        }
        if (M.isEmpty(data.paytypecode)) {
            alert("请选择支付方式");
            return;
        }
        if (this.sendstatus == 1) {
            M.error("处理中请稍等....");
        }
        this.sendstatus = 1;
        M._getjson("/Recodesum/saveRecodeSum", data, this.saverecodesum_finished.toEventHandler(this));
    },
    saverecode: function(ele) {
        var recodelist = this.context.recodelist.children("li[t=recode]");
        var list = [];
        var tabmenu = this.tabmenu;
        var checkstatus = 1;
        var msg = '';
        recodelist.each(function() {
            var innid = $(this).children("div[t=innlist]").children("span").attr("value");
            var type = $(this).children("div[t=typelist]").children("span").attr("value");
            var consumetypeid = $(this).children("div[t=consumelist]").children("span").attr("value");
            var consumetypename = $(this).children("div[t=consumelist]").children("span").html();
            var paytype = $(this).children("div[t=paytypelist]").children("span").attr("value");
            var paytypename = $(this).children("div[t=paytypelist]").children("span").html();
            var date = $(this).children("input[name=addrecodedate]").val();
            var amount = $(this).children("input[name=amount]").val();
            var remark = M.getVal($(this).children("textarea[name=remark]"));
            if (M.isEmpty(consumetypeid)) {
                msg = '请选择' + tabmenu[type] + '项目';
                checkstatus = 0;
                return false;
            }
            if (M.isEmpty(date)) {
                msg = '请选择' + tabmenu[type] + '项目日期';
                checkstatus = 0;
                return false;
            }
            if (isNaN(amount) || amount == 0) {
                msg = "请输入" + tabmenu[type] + "金额";
                checkstatus = 0;
                return false;
            }
            var tmp = {
                'innid': innid,
                "type": type,
                "consumetypeid": consumetypeid,
                "paytypecode": paytype,
                "date": date,
                "amount": amount,
                "remark": remark,
                "consumetypename": consumetypename,
                "paytypename": paytypename
            };
            list.push(tmp)
        });
        if (checkstatus == 0) {
            alert(msg);
            return;
        }
        var datastr = JSON.stringify(list);
        ele.attr('tag', 'nosaverecode');
        this.cache_ele = ele;
        M._getjson("/Recodesum/saveRecodeSumList", {
            'data': datastr
        },
        this.saverecodesum_finished.toEventHandler(this));
    },
    saverecodesum_finished: function(d) {
        this.sendstatus = 0;
        if (d.status == "success") {
            this.context.recodesumform.children().find("a[tag=closebtn]").click();
            if (!M.isEmpty(d.cashier)) {
                var cashier = d.cashier;
                this.consumedetail = cashier;
                this.context.consumehiddedata.attr("cashierid", cashier.cashierid).attr("innid", cashier.innid);
                this.context.consumecashierform.find("span[tag=totalprice]").html("&yen;" + cashier.amount);
                this.context.consumecashierform.find("input[name=phone]").val('');
                this.cashierinnid = 0;
                this.cashier();
            } else {
                M.success("添加成功");
            }
        } else {
            alert(d.msg);
        }
        this.cache_ele.attr('tag', 'saverecode');
    },
    recodesum_click: function() {
        var tpl_inn = this.context.recodesumform.children().find("div[t=innlist]").attr("value", "");
        this.sendstatus = 0;
        var datetime = this.getdatetime();
        var nowdate = M.timeformat(datetime, 'Y-m-d h:i');
        this.context.addrecodedate.val(nowdate);
        this.context.recodesum_hidedata.attr("recodetype", "income");
        this.context.recodesumform.find('input[tag=tab_income]').attr("checked", "checked");
        this.context.recodesumform.find('input[tag=tab_pay]').attr("checked", false);
        M.emptyVal(this.context.recodesumform.find("input[name=money]"));
        M.emptyVal(this.context.recodesumform.find("textarea[name=remark]"));
        this.context.recodelist.children("li[tag=addtpl]").remove();
        if (M.isEmpty(this.typelist.income)) {
            M._getjson("/Recodesum/getWaterTypeList", {},
            this.getuserwatertypelist_finished.toEventHandler(this));
        } else {
            var target = this.context.recodelist.children("li[tag=r]");
            this.inittpl(target);
            M.Popup(this.context.recodesumform, {
                "hideclass": "modal large fade larger-greater",
                "showclass": "modal large fade larger-greater in",
                "dragable": true,
                "drag": this.dragincome.toEventHandler(this)
            });
        }
    },
    innchange: function(ele) {
        var target = ele.parents("li");
        var tpl_inn = target.children("div[t=innlist]");
        var innid = tpl_inn.children("span").attr("value");
        var type = target.children("div[t=typelist]").children("span").attr("value");
        var tpl_paytype = target.children("div[t=paytypelist]");
        var recodelist = this.context.recodelist.children("li[t=recode]").children("div[t=paytypelist]");
        var isselshouyintai = 0;
        recodelist.each(function() {
            var value = $(this).children("span").attr("value");
            if (value == 'shouyintai') {
                isselshouyintai = 1;
            }
        });
        if (type == 'income' && isselshouyintai == 0) {
            tpl_paytype.find("div[tag=option][value=shouyintai]").show();
        }
    },
    getuserwatertypelist_finished: function(d) {
        if (d.status == "success") {
            var list = d.typelist;
            this.typelist = list;
            var innlist = d.innlist;
            this.innlist = innlist;
            this.innid = d.innid;
            var checkowner = d.checkowner;
            if (checkowner == 1) {
                this.context.cashierqrcodedownload.show();
            } else {
                this.context.cashierqrcodedownload.hide();
            }
            var html = $.tmpl(this.tpl_inn, innlist);
            var tpl_inn = this.context.recodelist.children("li[tag=r]").children("div[t=innlist]").attr("value", this.innid);
            tpl_inn.children("div").hide().children("div").html(html);
            var tpl_paytype = this.context.recodelist.find("li[tag=r]").children("div[t=paytypelist]").attr("value", "cash");
            var paytypelist = d.paytypelist;
            var html_pay = $.tmpl(this.tpl_pay, paytypelist);
            tpl_paytype.children("div").hide().children("div[tag=paytypelist]").html(html_pay);
            var tpl_typelist = this.context.recodelist.find("li[tag=r]").children("div[t=typelist]").attr("value", "income");
            var tpl_consume = this.context.recodelist.find("li[tag=r]").children("div[t=consumelist]");
            var type_html = $.tmpl(this.tpl_type, this.typelist);
            tpl_consume.find("div[tag=list]").html(type_html);
            var tpl_consume_span = this.context.recodelist.children('li[tag=r]').children('div[t=typelist]').children('span');
            this.inittpl(this.context.recodelist.find("li[tag=r]"));
            M.Popup(this.context.recodesumform, {
                "hideclass": "modal large fade larger-greater",
                "showclass": "modal large fade larger-greater in",
                "dragable": true
            });
            this.ontypechange(tpl_consume_span);
        } else {
            M.error(d.msg);
        }
    },
    dragincome: function() {
        var display = this.context.recodetypelist.css("display");
        var ele = this.context.recodesumform.children().find("div[tag=buttons]");
        if (display == "none") {
            return;
        }
        var top = ele.offset().top + ele.outerHeight() + 2;
        var left = ele.offset().left;
        this.context.recodetypelist.css({
            "top": top,
            "left": left,
            "z-index": 1060
        }).show();
        M.stopevent(ele);
    },
    recodesumform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        var elet = ele.attr("t");
        if (M.isEmpty(elet)) elet = '';
        var parents = ele.parents("div[t=innlist]");
        if (parents.length == 0 && elet != 'innlist') {
            var tpl = this.context.recodesumform.children().find("div[t=innlist]");
            tpl.removeClass("droplist_on").children("div").hide();
        }
        var parents = ele.parents("div[t=consumelist]");
        if (parents.length == 0 && elet != 'consumelist') {
            var tpl = this.context.recodesumform.children().find("div[t=consumelist]");
            tpl.removeClass("droplist_on").children("div").hide();
        }
        var parents = ele.parents("div[t=paytypelist]");
        if (parents.length == 0 && elet != 'paytypelist') {
            var tpl = this.context.recodesumform.children().find("div[t=paytypelist]");
            tpl.removeClass("droplist_on").children("div").hide();
        }
        var parents = ele.parents("div[t=typelist]");
        if (parents.length == 0 && elet != 'typelist') {
            var tpl = this.context.recodesumform.children().find("div[t=typelist]");
            tpl.removeClass("droplist_on").children("div").hide();
        }
        switch (t) {
        case 'add':
            this.addtpl();
            break;
        case 'del':
            this.deltpl(ele);
            break;
        case 'saverecode':
            this.saverecode(ele);
            break;
        }
        if (t == "addsave") {
            this.saverecodesum();
        }
    },
    deltpl: function(ele) {
        var length = this.context.recodelist.children("li[t=recode]").length;
        if (length == 1) {
            M.confirmmessage('亲，就剩一个了再删就没法记录了！');
            return;
        }
        ele.parents('li').remove();
        this.initpaytype();
        this.handlerecodeoperate();
    },
    initpaytype: function() {
        var paytypelist = this.context.recodelist.children("li[t=recode]").children("div[t=paytypelist]");
        paytypelist.find("div[tag=option][value=shouyintai]").hide();
        var isselshouyintai = 0;
        paytypelist.each(function() {
            var value = $(this).children("span").attr("value");
            if (value == 'shouyintai') {
                isselshouyintai = 1;
                $(this).find("div[tag=option][value=shouyintai]").show();
            }
        });
        if (isselshouyintai == 0) {
            var tpl_list = this.context.recodelist.children("li[t=recode]").children("div[t=typelist]").children("span[value=income]");
            tpl_list.parents("li").children().find("div[tag=option][value=shouyintai]").show();
        }
    },
    addtpl: function() {
        var length = this.context.recodelist.children("li[t=recode]").length;
        if (length >= 5) {
            M.confirmmessage('亲，每次最多只能添加5笔记录噢！');
            return;
        }
        var target = this.context.recodelist.children("li[t=recode]:last");
        var i = target.attr('i');
        var tpl = target.clone().attr("tag", 'addtpl');
        i = parseInt(i) + 1;
        tpl.attr('i', i);
        target.after(tpl);
        this.inittpl(tpl);
        this.initpaytype();
    },
    inittpl: function(tpl) {
        var i = tpl.attr("i");
        var addrecodedate = 'addrecodedate' + i;
        var date = M.getTime();
        var datestr = M.timeformat(date, 'Y-m-d h:i');
        tpl.find("input[name=addrecodedate]").attr("id", addrecodedate).val(datestr).removeClass('hasDatepicker');
        tpl.find("input[name=addrecodedate]").datetimepicker({
            timeFormat: "HH:mm",
            dateFormat: "yy-mm-dd"
        });
        var tpl_inn = tpl.children("div[t=innlist]");
        this.inn = M.DropdownList(tpl_inn, null, {});
        var tpl_paytype = tpl.children("div[t=paytypelist]").attr("value", "cash");
        M.DropdownList(tpl_paytype, this.onpaytypechange.toEventHandler(this), {});
        var tpl_typelist = tpl.children("div[t=typelist]");
        tpl_typelist.find("div[tag=option]").show();
        M.DropdownList(tpl_typelist, this.ontypechange.toEventHandler(this), {});
        var tpl_consume = tpl.children("div[t=consumelist]");
        M.DropdownList(tpl_consume, null, {});
        tpl_consume.children("span").attr("value", '').html('选择收入项目');
        tpl.children("textarea[name=remark]").attr("placeholder", this.tabexamp.income).val('');
        tpl.children("input[name=amount]").val('');
        this.handlerecodeoperate();
    },
    handlerecodeoperate: function() {
        var length = this.context.recodelist.children("li[t=recode]").length;
        this.context.recodelist.children("li[t=recode]").find("a[tag=add]").hide();
        this.context.recodelist.children("li[t=recode]").find("a[tag=del]").show();
        if (length == 1) {
            this.context.recodelist.children("li[t=recode]:first").find("a[tag=del]").hide();
            this.context.recodelist.children("li[t=recode]").find("a[tag=add]").show();
            this.context.recodelist.children("li[t=recode]:first").attr('tag', 'r')
        } else {
            this.context.recodelist.children("li[t=recode]:last").find("a[tag=add]").show();
        }
    },
    onpaytypechange: function(ele) {
        var value = ele.attr("value");
        var paytypelist = this.context.recodelist.children("li[t=recode]").children("div[t=paytypelist]");
        if (value == 'shouyintai') {
            paytypelist.find("div[tag=option][value=shouyintai]").hide();
            ele.parent().children("div[tag=option][value=shouyintai]").show();
        } else {
            var isselshouyintai = 0;
            paytypelist.each(function() {
                var value = $(this).children("span").attr("value");
                if (value == 'shouyintai') {
                    isselshouyintai = 1;
                }
            });
            if (isselshouyintai == 0) {
                var tpl_list = this.context.recodelist.children("li[t=recode]").children("div[t=typelist]").children("span[value=income]");
                tpl_list.parents("li").children().find("div[tag=option][value=shouyintai]").show();
            }
        }
        if (value == "pay") {
            var paytype = ele.parents("li").children("div[t=paytypelist]").children("span").attr("value");
            if (paytype == 'shouyintai') {
                ele.parents("li").children("div[t=paytypelist]").children("span").attr("value", "cash").html('现金');
            }
        }
    },
    ontypechange: function(ele) {
        var value = ele.attr("value");
        var tipmsg = this.tabexamp[value];
        ele.parents("li").children("textarea[name=remark]").attr("placeholder", tipmsg).val('');
        ele.parents("li").children("div[t=consumelist]").children("span").attr("value", '').html('选择' + this.tabmenu[value] + '项目');
        ele.parents("li").children("div[t=consumelist]").find("div[tag=option]").hide();
        ele.parents("li").children("div[t=consumelist]").find("div[tag=option][t=" + value + "]").show();
        var paytype = ele.parents("li").children("div[t=paytypelist]").children("span").attr("value");
        if (paytype == "shouyintai" && value == 'pay') {
            ele.parents("li").children("div[t=paytypelist]").children("span").attr("value", "cash").html('现金');
        }
        this.initpaytype();
    },
    initrecodesumform: function(type, tabmsg) {
        this.context.recodesum_hidedata.attr("recodetype", type);
        this.context.recodesum_hidedata.attr("typeid", "");
        this.context.recodesum_hidedata.attr("typename", "");
        var tpl_type = this.context.recodesumform.find("li[tag=r]");
        var tpl_consume = tpl_type.find("div[t=consumelist]");
        var tpl_pay = tpl_type.find("div[t=paytypelist]");
        tpl_consume.find("div[tag=list]").children("div").hide();
        tpl_consume.find("div[tag=list]").children("div[t=" + type + "]").show();
        tpl_consume.children("span").attr("value", "").html('选择' + tabmsg + '项目');
        var msg = this.tabexamp[type];
        var tpl = this.context.recodesumform.find("textarea[name=remark]");
        var remark = M.getVal(tpl);
        if (type == 'pay') {
            var value = tpl_pay.children("span").attr("value");
            if (!M.isEmpty(value) && value == 'shouyintai') {
                tpl_pay.children("span").attr("value", "cash").text('现金');
            }
            tpl_pay.find("div[tag=option][value=shouyintai]").hide();
        } else {
            tpl_pay.find("div[tag=option][value=shouyintai]").show();
        }
        if (M.isEmpty(remark)) {
            tpl.attr("placeholder", msg);
            M.emptyVal(tpl);
        }
    },
    recodetypelist_click: function(e) {
        var ele = M.EventEle(e);
        var id = ele.attr("tid");
        var name = ele.text();
        this.context.recodesum_hidedata.attr("typename", name).attr("typeid", id);
        this.context.recodesumform.children().find("span[tag=selecttype]").html(name);
        this.context.recodetypelist.css("display", "none");
    },
    edititem_click: function(e) {
        this.context.editpop.find("ul[class=nav-tabs]").children("li:first").attr("class", "active");
        this.context.editpop.find("ul[class=nav-tabs]").children().eq(1).attr("class", "");
        this.context.paytypeitem.css("display", "none");
        this.context.incometypeitem.css("display", "block");
        this.context.editpop.css("display", "block");
    },
    getdatetime: function() {
        var date = M.getTime();
        return date;
    },
    editpop_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == "closebtn") {
            this.context.editpop.css("display", "none");
        }
        if (t == "incomeitem") {
            this.context.editpop.find("ul[class=nav-tabs]").children("li:first").attr("class", "active");
            this.context.editpop.find("ul[class=nav-tabs]").children().eq(1).attr("class", "");
            this.context.paytypeitem.css("display", "none");
            this.context.incometypeitem.css("display", "block");
        }
        if (t == "payitem") {
            this.context.editpop.find("ul[class=nav-tabs]").children("li:first").attr("class", "");
            this.context.editpop.find("ul[class=nav-tabs]").children().eq(1).attr("class", "active");
            this.context.incometypeitem.css("display", "none");
            this.context.paytypeitem.css("display", "block");
        }
        if (t == "incomedelete") {
            this.delincomeitem(ele);
        }
        if (t == "paydelete") {
            this.delpayitem(ele);
        }
        if (t == "incomeedit") {
            this.editincomeitem(ele);
        }
        if (t == "payedit") {
            this.editpayitem(ele);
        }
        if (t == "saveincome") {
            this.saveincome(ele);
        }
        if (t == "savepay") {
            this.savepay(ele);
        }
    },
    addincomeitem_finished: function(e) {
        if (e.status == "success") {
            var data = e.data;
            var id = data.typeid;
            var html = '<li id="' + data.typeid + '"><label>' + data.typename + '</label><a href="javascript:;" tag="incomeedit" title="修改" class="edit">修改</a><a href="javascript:;"  tag="incomedelete" title="删除" class="delete"></a></li>';
            var list = '<li id="' + data.typeid + '"><a tag="type" typeid="45" href="javascript:;">' + data.typename + '</a></li>';
            this.context.incometypeitem.children("ul").children("li:last").before(html);
            this.context.incometypelist.children("ul").children("li:last").before(list);
        } else {
            alert(e.msg);
        }
    },
    addpayitem_finished: function(e) {
        if (e.status == "success") {
            var data = e.data;
            var id = data.typeid;
            var html = '<li id="' + data.typeid + '"><label>' + data.typename + '</label><a href="javascript:;"  tag="payedit" title="修改" class="edit">修改</a><a href="javascript:;"  tag="paydelete" title="删除" class="delete"></a></li>';
            var list = '<li id="' + data.typeid + '"><a tag="type" typeid="45" href="javascript:;">' + data.typename + '</a></li>';
            this.context.paytypeitem.children("ul").children("li:last").before(html);
            this.context.paytypelist.children("ul").children("li:last").before(list);
        } else {
            alert(e.msg);
        }
    },
    NoUndefined: function(str) {
        return M.isEmpty(str) ? "": str;
    },
    _closepopup: function() {
        M.ClosePopup();
    },
    destroy: function() {}
});
var recodesum;
M.ready(function() {
    recodesum = new M.Page.recodeSumPage();
    return recodesum;
});