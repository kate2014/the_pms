M.Page.ReportForm = M.createClass();
M.extend(M.Page.ReportForm.prototype, {
    context: {},
    droplist: {},
    dropdownliststa: {
        "innidlist": null
    },
    datelist: {},
    dropdownliststaa: {
        "datelist": null
    },
    submittext: "处理中...",
    init: function() {
        this.initDOM();
        this.initEvent();
    },
    initDOM: function() {
        this.context.fromdate = $("#fromdate");
        this.context.enddate = $("#enddate");
        this.context.dateval = $("#dateval");
        this.context.datevallist = $("#datevallist");
        this.context.datelist = $("#datelist");
        this.context.reloadbtn = $("#reloadbtn");
        this.context.daterange = $("#daterange");
        this.context.body = $(document.body);
        this.context.innid = $("#innid");
        this.context.papersBox = $("#papersBox");
        this.context.papersBox2 = $("#papersBox2");
        this.context.fromdate.datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });
        this.context.enddate.datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });
        this.context.hide_innid = $("#hide_innid");
        this.context.date = $("#date");
        this.droplist.innidlist = M.DropdownList(this.context.innid, this.channel_change.toEventHandler(this), {});
        this.datelist.innidlist = M.DropdownList(this.context.datelist, this.channel_change.toEventHandler(this), {});
        var datevalue = this.context.datelist.attr("value");
        if (M.isEmpty(datevalue)) {
            this.context.datelist.children("span").attr("value", "").html('快捷日期');
        }
    },
    initEvent: function() {
        this.context.reloadbtn.bind("click", this.reloadbtn_click.toEventHandler(this));
        this.context.daterange.bind("click", this.daterange_click.toEventHandler(this));
        this.context.innid.bind("change", this.inn_change.toEventHandler(this));
        $(document.body).bind("click", this.document_click.toEventHandler(this));
        this.context.dateval.bind("focus", this.dateval_focus.toEventHandler(this));
        this.context.datelist.bind("change", this.datelist_change.toEventHandler(this));
    },
    datelist_change: function(e) {
        this.context.fromdate.val();
        this.context.enddate.val();
        document.forms[0].submit();
    },
    channel_change: function(ele) {
        var innid = this.droplist.innidlist._getval();
        this.context.hide_innid.val(innid);
        var date = this.datelist.innidlist._getval();
        this.context.date.val(date);
        var f = "";
        this.context.fromdate.val(f);
        this.context.enddate.val(f);
        document.forms[0].submit();
    },
    document_click: function(e) {
        var ele = M.EventEle(e);
        var style = ele.attr("tag");
        if (M.isEmpty(style) || style != 'dropdownlist') {
            var tpl = ele.parents("th[tag=filter]");
            var hf = ele.parents("div[tag=filter]");
            var tpl2 = ele.parents("th[tag=filter2]");
            var hf2 = ele.parents("div[tag=filter2]");
            var value = ele.parents("span[tag=value]");
            if (tpl.length + hf.length == 0) {}
            if (tpl2.length + hf2.length == 0) {
                $("#filtercreator2").hide();
            }
            var box = ele.parents('div[tag=dateval]');
            var df = ele.parents(".ui-datepicker-header");
            var df1 = ele.parents(".ui-datepicker-calendar");
            var df2 = ele.parents(".ui-timepicker-div");
            var df3 = ele.parents(".ui-datepicker-buttonpane");
            var df4 = ele.hasClass("ui-datepicker");
            if (box.length == 0 && df.length == 0 && df1.length == 0 && df2.length == 0 && df3.length == 0 && df4 == false) {
                this.context.datevallist.hide();
            }
            var channel_innid = ele.parents("div[tag=channel_innid]");
            if (channel_innid.length + value.length == 0 && style != 'value') {
                this.context.papersBox.hide();
                this.context.papersBox.parents().removeClass("droplist_on");
            }
            var date_list = ele.parents("div[tag=date_list]");
            if (date_list.length == 0 && style != 'value') {
                this.context.papersBox2.hide();
                this.context.papersBox2.parents().removeClass("droplist_on");
            }
        }
    },
    inn_change: function(e) {
        document.forms[0].submit();
    },
    reloadbtn_click: function(e) {
        var innid = M.getDroplistVal(this.context.innid);
        this.context.hide_innid.val(innid);
        var date = "";
        this.context.date.val(date);
        document.forms[0].submit();
    },
    dateval_focus: function(e) {
        this.context.datevallist.show();
    },
    daterange_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == "showlist" || t == "filter") {
            M.stopevent(e);
            this.context.daylist.show();
        }
        if (t == "date") {}
    },
    _closepopup: function() {
        M.ClosePopup();
    },
    destroy: function() {}
});
M.ready(function() {
    page = new M.Page.ReportForm();
    return page;
});