M.Page.IndexPage = M.createClass();
M.extend(M.Page.IndexPage.prototype, {
    context: {},
    datepickeraction: null,
    roomstatus: [],
    roomprice: {},
    dateprice: {},
    formatedateprice: {},
    switchdata: {},
    index: 0,
    options: {
        fromtime: null,
        endtime: null
    },
    submittext: "处理中...",
    hotelroomtype: {},
    object: {},
    droplist: {},
    orderdata: {},
    otahotellist: {},
    initclientwidth: '',
    initdata: {
        width: ''
    },
    tpl_serarchorder: '<div class="single">' + ' <div>' + '<span class="name">${guestname}</span>' + '<span class="phone">${phone}</span>' + '<span class="status">已预订</span>' + '</div>' + '<div>' + '<span>${fromdate}</span>, ' + '<span>${roomname}</span>, ' + '<span>住${nights}晚</span>' + '</div>' + '<div>' + '<span>${channelname}</span>, ' + '<span>订单金额：&yen;${totalprice}</span>' + '</div>' + '<div class="note">${remark}</div>' + '<div class="other" style="${showstatus}">订单来自&lt;<a href="/book/index?innid=${innid}">${innname}</a>&gt;<br/>请切换到该客栈查找才可查看订单详情。</div>' + '</div>',
    roomtypeoption_tpl: '<option value="${roomcode}" t="room">${roomname}</option>',
    switchhistory_tpl: '<tr tag="h">' + '<td>${roomtypename}</td>' + '<td>${daterange}</td>' + '<td >${targetstatus}</td>' + '<td>${createon}</td>' + '<td class="${statusclass}">${opstatus}</td>' + '</tr>',
    hoteltab: '<div value="${innid}"><a href="javascript:;">${innname}</a></div>',
    roomtpl: '<td class="${styleclass}" hotelcode="${hotelcode}" tip="${hotelroomtypename}" tag="${tag}" roomtypeid="${roomtypeid}" roomtypecode="${hotelroomtypecode}" day="${date}">${roomnum}</td>',
    roomtypetpl: '<label class="mr10" style="white-space:nowrap;"><input name="checkbox" type="checkbox" value="${hotelroomtypecode}">${hotelroomtypename}</label>',
    _getdatetime: function() {
        var date = M.getTime();
        return date;
    },
    init: function() {
        this.initDOM();
        this.initEvent();
        this.resetroomtypecount();
        if ($.cookie('example') == '0') {
            this.context.turnover_toggle.click();
        }
        this.initjieji();
    },
    win_resize: function() {
        return;
    },
    initDOM: function() {
        this.context.pickerarea = $("#pickerarea");
        this.context.right = $("#rightpanel");
        this.context.roomlist = $("#roomlist");
        this.context.roomtype = $("#roomtype");
        this.context.roomtypeswitchform = $("#roomtypeswitchform");
        this.context.roomtypeswitch_btn = $("#roomtypeswitch_btn");
        this.context.switchtable = $("#switchtable");
        this.context.page = $("#formdaypage");
        this.context.fromdate = $("#fromdate");
        this.context.enddate = $("#enddate");
        this.context.switchroomtype = $("#switchroomtype") this.context.remind_message = $("#remind_message");
        this.context.tipmessageform = $("#tipmessageform");
        this.context.innidlist = $("#innidlist");
        this.context.batchswitch = $("#batchswitch");
        this.context.batchform = $("#batchform");
        this.context.batch_fromdate = $("#batch_fromdate");
        this.context.batch_enddate = $("#batch_enddate");
        this.context.saveswitch_btn = $("#saveswitch_btn");
        this.context.batchswitch_btn = $("#batchswitch_btn");
        this.context.turnover_toggle = $("#turnover_toggle");
        this.context.turnover_toggle.css("display", '');
        this.context.header = $("#header");
        this.context.foot = $(".foot");
        this.context.otalist = $("#otalist");
        this.context.otainnlist = $("#otainnlist");
        this.context.roomswitchhistory = $("#roomswitchhistory");
        this.context.switchhistorylist = $("#switchhistorylist");
        this.context.qunarroomswitchhistory = $("#qunarroomswitchhistory");
        this.context.meituanroomswitchhistory = $("#meituanroomswitchhistory");
        this.context.searchswitchhistory_btn = $("#searchswitchhistory_btn");
        this.context.s_fromdate = $("#s_fromdate");
        this.context.s_enddate = $("#s_enddate");
        this.context.batch_fromdate.datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });
        this.context.batch_enddate.datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });
        this.context.s_fromdate.datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });
        this.context.s_enddate.datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });
        this.context.menu_search = $("#menu_search");
        this.context.searchorderlist = $("#searchorderlist");
        this.context.innroomdate = $("#innroomdate");
        this.context.searchkeyword = $("#searchkeyword");
        this.context.mains = $('#mains');
        this.context.footer = $('#footer');
        this.context.switchroomneedlogin = $("#switchroomneedlogin");
        this.object.order = order;
        this.context.jiejiform = $("#jiejiform");
    },
    initEvent: function() {
        this.context.roomtypeswitch_btn.bind("click", this.roomtypeswitch_click.toEventHandler(this));
        this.context.page.bind("click", this.page_click.toEventHandler(this));
        this.context.roomtypeswitchform.bind("click", this.roomtypeswitchform_click.toEventHandler(this));
        this.context.switchroomtype.bind("click", this.switchroomtype_click.toEventHandler(this));
        this.context.tipmessageform.bind("click", this.tipmessageform_click.toEventHandler(this));
        this.context.remind_message.bind("click", this.remind_messages.toEventHandler(this));
        this.context.batchswitch.bind("click", this.batchswitch_click.toEventHandler(this));
        this.context.batchswitch_btn.bind("click", this.batchswitch_btn.toEventHandler(this));
        this.context.turnover_toggle.bind("click", this.togglestatistics_btn.toEventHandler(this));
        this.context.roomswitchhistory.bind("click", this.roomswitchhistory_btn.toEventHandler(this));
        this.context.searchswitchhistory_btn.bind("click", this.roomswitchhistory_search.toEventHandler(this));
        this.context.qunarroomswitchhistory.bind("click", this.roomswitchhistory_btn.toEventHandler(this));
        this.context.meituanroomswitchhistory.bind("click", this.roomswitchhistory_btn.toEventHandler(this));
        this.context.menu_search.bind("click", this.menu_search.toEventHandler(this));
        this.context.searchorderlist.bind("click", this.searchorderlist_click.toEventHandler(this));
        this.context.searchkeyword.bind("keydown", this.searchkeyword_keydown.toEventHandler(this));
        this.context.jiejiform.bind("click", this.jiejiform_click.toEventHandler(this));
    },
    initjieji: function() {
        var jieji = $.cookie('jiejitip');
        if (M.isEmpty(jieji) || jieji == 1) {
            this.context.jiejiform.show();
        } else if (jieji == -1) {
            this.context.jiejiform.hide();
        }
    },
    jiejiform_click: function(e) {
        var ele = M.EventEle(e);
        var tag = ele.attr('tag');
        switch (tag) {
        case 'showdetail':
            this.context.jiejiform.hide();
            this.showjiejidetail();
            break;
        case 'close':
            $.cookie('jiejitip', -1, {
                expires: 3600 * 360 * 24
            });
            this.context.jiejiform.hide();
            break;
        }
    },
    showjiejidetail: function() {
        window.open('http://dxd.yunzhanggui.net/Activity/Actbus/ljindex');
    },
    reqbusy: function() {
        alert("请求处理中，请稍后再试");
    },
    req_before: function(btn) {
        var busy = btn.attr("busy");
        if (busy == "1") {
            this.reqbusy();
            return false;
        }
        btn.html(this.submittext).attr("busy", "1");
        btn.attr("class", btn.attr("tempclass") + " disabled");
        return true;
    },
    req_end: function(btn) {
        btn.html(btn.attr("text")).attr("busy", "");
        btn.attr("class", btn.attr("tempclass"));
    },
    menu_search: function() {
        this.context.searchorderlist.children("div[tag=error]").hide();
        this.context.searchorderlist.toggle();
        var length = this.context.header.find("div.tool").children("a").length;
        var left = 0;
        if (length == 1) {
            left = 229;
        }
        if (length == 2) {
            left = 213;
        }
        if (length == 3) {
            left = 178;
        }
        if (length == 4) {
            left = 146;
        }
        if (length == 5) {
            left = 113;
        }
        this.context.searchorderlist.children("i.arrow").css("left", left + 'px');
        this.context.searchorderlist.children("i.arrow-b").css("left", left + 'px');
    },
    searchkeyword_keydown: function(evt) {
        this.context.searchorderlist.children("div[tag=error]").hide();
        var evt = evt ? evt: (window.event ? window.event: null);
        if (evt.keyCode == 13) {
            this.searchorder();
        }
    },
    searchorderlist_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == "search") {
            this.searchorder();
            return;
        }
        if (t == "close") {
            this._closesearchform();
            return;
        }
        if (t == "loadmore") {
            this.loadmoreorder(ele);
        } else {
            var tpl = ele.parents("div[tag=o]");
            var showstatus = ele.parents("div[tag=o]").children("div[tag=other]").css("display");
            if (showstatus != 'none') return;
            if (tpl.length > 0) {
                pickeraction.searchorderdetail(tpl);
            }
        }
    },
    _closesearchform: function() {
        M.emptyVal(this.context.searchorderlist.children().find("input[name=keyword]"));
        this.context.searchorderlist.children("div[tag=error]").hide();
        this.context.searchorderlist.children().find("div[tag=list]").children("div[tag=o]").remove();
        this.context.searchorderlist.children("div[tag=listform]").hide();
        this.context.searchorderlist.children("div[tag=listform]").children("div[tag=total]").hide();
        this.context.searchorderlist.children("div[tag=listform]").children("div[tag=list]").hide().children("a[tag=loadmore]").hide();
        this.context.searchorderlist.hide();
    },
    loadmoreorder: function(ele) {
        ele.html('<i class="loading16"></i>');
        var keyword = M.getVal(this.context.searchorderlist.children().find("input[name=keyword]"));
        var innid = this.context.roomtype.attr("innid");
        M._getjson("/book/searchorder", {
            "a": "searchorder",
            "innid": innid,
            "keyword": keyword,
            "index": this.index
        },
        this.searchorder_finished.toEventHandler(this));
    },
    searchorder: function() {
        this.page = 0;
        var keyword = M.getVal(this.context.searchorderlist.children().find("input[name=keyword]"));
        this.context.searchorderlist.children("div[tag=error]").hide();
        if (M.isEmpty(keyword)) {
            this.context.searchorderlist.children("div[tag=error]").show();
            this.context.searchorderlist.children("div[tag=listform]").hide();
            return;
        }
        this.context.searchorderlist.children("div[tag=listform]").show();
        this.context.searchorderlist.children("div[tag=listform]").children("div[tag=total]").hide();
        this.context.searchorderlist.children("div[tag=listform]").children("div[tag=list]").hide().children("a[tag=loadmore]").hide();
        this.context.searchorderlist.children("div[tag=listform]").children("div[tag=loading]").show();
        this.context.searchorderlist.children().find("div[tag=list]").children("div[tag=o]").remove();
        var innid = this.context.roomtype.attr("innid");
        M._getjson("/book/searchorder", {
            "innid": innid,
            "keyword": keyword
        },
        this.searchorder_finished.toEventHandler(this));
    },
    searchorder_finished: function(d) {
        if (d.status == "success") {
            var list = d.d.list;
            this.index = d.d.minid;
            var total = d.d.total;
            var target = this.context.searchorderlist.children().find("div[tag=list]");
            if (list.length < 7) {
                target.children("a[tag=loadmore]").hide();
            } else {
                target.children("a[tag=loadmore]").show();
            }
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                this._showorderlist(item, target);
            }
            if (total <= 0) {
                target.hide();
            } else {
                target.show();
            }
            this.context.searchorderlist.children("div[tag=listform]").show();
            target.children("a[tag=loadmore]").html("加载更多");
            this.context.searchorderlist.children("div[tag=listform]").children("div[tag=total]").show().children("strong").html(total);
            this.context.searchorderlist.children("div[tag=listform]").children("div[tag=loading]").hide();
            this.context.searchorderlist.children("div[tag=listform]").show();
            this._resizeorderlist();
        } else {
            if (d.status == 'hasswitch') {
                M.confirmmessage(d.msg, this.reload.toEventHandler(this));
            }
        }
    },
    reload: function() {
        location.reload('/book/index');
    },
    _resizeorderlist: function() {
        var headheight = this.context.header.outerHeight();
        var footheight = this.context.foot.outerHeight();
        var roomtypeheight = this.context.roomtype.outerHeight();
        var searchconditionheight = this.context.searchorderlist.children("div[tag=condition]").outerHeight();
        var list_offet = this.context.searchorderlist.children().children("div[tag=list]").offset();
        var page_offset = this.context.searchorderlist.children().children("div[tag=page]").offset();
        var winheight = this.getWindowHeight();
        var heigth = winheight - list_offet.top - footheight - headheight - 40;
        this.context.searchorderlist.children().find("div[tag=list]").css("height", heigth);
    },
    getWindowHeight: function() {
        var de = document.documentElement;
        return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
    },
    _showorderlist: function(item, target) {
        var tpl = target.children("div[tag=tpl]").clone(true).attr("tag", "o").attr("oid", item.orderid).attr("uniqid", item.orderuniqid).attr("cid", item.checkingroupid).attr("status", item.ischeckin).attr("checkindate", item.fromdate).show();
        tpl.children("div").children("span[tag=name]").html(item.guestname);
        tpl.children("div").children("span[tag=phone]").html(item.phone);
        tpl.children("div").children("span[tag=orderstatus]").html(item.orderstatusmsg);
        tpl.children("div").children("span[tag=checkindate]").html(item.fromdate);
        tpl.children("div").children("span[tag=roomname]").html(item.roomname);
        tpl.children("div").children("span[tag=nights]").html('住' + item.nights + '晚');
        tpl.children("div").children("span[tag=orderfrom]").html(item.channelname);
        tpl.children("div").children("span[tag=totalprice]").html("订单金额：&yen;" + item.totalprice);
        tpl.children("div[tag=remark]").html(item.remark);
        tpl.children("div[tag=other]").css("display", item.showstatus).children("a").attr("href", "/book/index?innid=" + item.innid).text(item.innname);
        target.children("a[tag=loadmore]").before(tpl);
        if (M.isEmpty(item.showstatus)) {
            tpl.addClass("cursor-d");
        }
    },
    roomswitchhistory_search: function() {
        var tpl = this.context.roomtypeswitchform.children().find("ul").children("li[class=active]");
        var innid = tpl.children("a[tag=switchinn]").attr("innid");
        var hotelfrom = this.context.roomtypeswitchform.attr("hotelfrom");
        var fromdate = this.context.s_fromdate.val();
        var enddate = this.context.s_enddate.val();
        var room = this.context.switchhistorylist.children().find("select[tag=roomtypelist]").val();
        M._getjson("/Ota/closeRoomHistory", {
            "act": "roomswitchhistory",
            "hotelfrom": hotelfrom,
            "innid": innid,
            "startdate": fromdate,
            "enddate": enddate,
            "room": room
        },
        this.switchhistorylist_finished.toEventHandler(this));
    },
    roomswitchhistory_btn: function() {
        var tpl = this.context.roomtypeswitchform.children().find("ul").children("li[class=active]");
        var innid = tpl.children("a[tag=switchinn]").attr("innid");
        var hotelfrom = this.context.roomtypeswitchform.attr("hotelfrom");
        var now = M.getTime();
        var enddate = M.timeformat(now);
        var fromdate = M.timeformat(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1));
        this.context.s_fromdate.val(fromdate);
        this.context.s_enddate.val(enddate);
        var room = '';
        this.context.switchhistorylist.children().find("select[tag=roomtypelist]").children('option:first').attr('selected', 'selected');
        M._getjson("/Ota/closeRoomHistory", {
            "act": "roomswitchhistory",
            "hotelfrom": hotelfrom,
            "innid": innid,
            "startdate": fromdate,
            "enddate": enddate,
            "room": room
        },
        this.switchhistorylist_finished.toEventHandler(this));
    },
    switchhistorylist_finished: function(d) {
        if (d.status == "success") {
            var room = d.req.room;
            var historylist = d.historylist;
            var h_tpl = $.tmpl(this.switchhistory_tpl, historylist);
            var target_tpl = this.context.switchhistorylist.children().find("table[tag=historylist]").children("tbody");
            target_tpl.children("tr[tag=h]").remove();
            target_tpl.append(h_tpl);
            var roomtypelist = d.roomtypelist;
            var r_tpl = $.tmpl(this.roomtypeoption_tpl, roomtypelist);
            this.context.switchhistorylist.children().find("select[tag=roomtypelist]").children("option[t=room]").remove();
            this.context.switchhistorylist.children().find("select[tag=roomtypelist]").append(r_tpl);
            this.context.switchhistorylist.children().find("select[tag=roomtypelist]").val(room);
            if (historylist.length > 0) {
                target_tpl.show();
                this.context.switchhistorylist.children().find("div[tag=nohistory]").hide();
            } else {
                target_tpl.hide();
                this.context.switchhistorylist.children().find("div[tag=nohistory]").show();
            }
            var otahotel = d.otahotel;
            if (otahotel.needlogin == 1) {
                this.context.switchroomneedlogin.show();
            } else {
                this.context.switchroomneedlogin.hide();
            }
            this.context.switchroomneedlogin.attr("hotelfrom", otahotel.hotelfrom).attr("innid", otahotel.innid);
            M.Popup(this.context.switchhistorylist, {
                "hideclass": "modal setotaroom fade ",
                "showclass": "modal setotaroom fade  in"
            });
        }
    },
    page_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        var fromtime = M.strtotime(this.context.fromdate.val());
        if (!M.isEmpty(t)) {
            this.getroomtypeswitch(t, fromtime);
        }
    },
    switchroomtype_click: function(e) {
        var ele = M.EventEle(e).parent();
        var t = ele.attr("tag");
        switch (t) {
        case "open":
            ele.addClass("switch-off");
            ele.attr("tag", "close");
            break;
        case "close":
            ele.removeClass("switch-off");
            ele.attr("tag", "open");
            break;
        case "saveswitch":
            this.saveswitch();
            break;
        }
    },
    batchswitch_btn: function() {
        this.req_before(this.context.batchswitch_btn);
        var data = this._getbatchdata();
        M._getjson("/Ota/batchSwitchRoom", data, this.batchswitch_finished.toEventHandler(this));
    },
    _getbatchdata: function() {
        var tpl_roomtype = this.context.batchform.children().find("li div[tag=roomtype] label input:checked");
        var hotelcode = this.context.batchswitch_btn.attr("hotelcode");
        var fromdate = this.context.batch_fromdate.val();
        var enddate = this.context.batch_enddate.val();
        var tpl = this.context.roomtypeswitchform.children().find("ul").children("li[class=active]");
        var innid = tpl.children("a[tag=switchinn]").attr("innid");
        var status = this.context.batchswitch_btn.attr("status");
        var hotelfrom = this.context.roomtypeswitchform.attr("hotelfrom");
        var data = {
            "act": "batchswitchroom",
            "hotelcode": hotelcode,
            "fromdate": fromdate,
            "enddate": enddate,
            "innid": innid,
            "status": status,
            "hotelfrom": hotelfrom
        };
        var i = 0;
        tpl_roomtype.each(function() {
            var roomtypecode = $(this).val();
            data['roomtypecode' + i] = roomtypecode;
            i++;
        });
        data.length = i;
        return data;
    },
    batchswitch_finished: function(d) {
        this.req_end(this.context.batchswitch_btn);
        if (d.status == "success") {
            var data = d.data;
            var fromdate = data.fromdate;
            var enddate = data.enddate;
            var status = d.req.status;
            var roomtypelist = data.roomtypecodelist;
            var fromtime = M.strtotime(fromdate);
            var endtime = M.strtotime(enddate);
            var tpl = this.context.switchtable.children("table").children("tbody");
            while (fromtime <= endtime) {
                date = M.timeformat(fromtime, 'Y-m-d');
                for (var i = 0; i < roomtypelist.length; i++) {
                    var roomtypecode = roomtypelist[i];
                    if (status == "close") {
                        tpl.children("tr[tag=d_ota]").children("td[roomtypecode=" + roomtypecode + "][day=" + date + "]").removeClass("editable").addClass("closed").text("已关闭");
                    } else {
                        var roomnum = tpl.children("tr[tag=d]").children("td[roomtypecode=" + roomtypecode + "][day=" + date + "]").text();
                        if (roomnum != 0) {
                            tpl.children("tr[tag=d_ota]").children("td[roomtypecode=" + roomtypecode + "][day=" + date + "]").removeClass("closed").addClass("editable").text(roomnum);
                        }
                    }
                }
                fromtime.setDate(fromtime.getDate() + 1);
            }
            M.CloseLast();
        } else {
            alert(d.msg);
        }
    },
    batchswitch_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "batch_open":
            this.batchroomtype(t);
            break;
        case "batch_close":
            this.batchroomtype(t);
            break;
        }
        this.context.batchswitch.children("div").toggle();
    },
    togglestatistics_btn: function() {
        this.context.pickerarea.children("table").children("tbody").children("tr").children("td[tag=total]").toggle();
        this.context.roomlist.children("tbody").children("tr").children("td[tag=watertotal]").toggle();
        var show = this.context.roomlist.children("tbody").children("tr").children("td[tag=watertotal]").attr("show");
        if (show == '0') {
            this.context.roomlist.children("tbody").children("tr").children("td[tag=watertotal]").attr("show", "1");
        } else {
            this.context.roomlist.children("tbody").children("tr").children("td[tag=watertotal]").attr("show", "0");
        }
        pickeraction.transform.win_resize();
        if (show == '0') {
            this.context.turnover_toggle.children("div").removeClass("switch-off").addClass("switch-on");
            $.cookie("example", "1", {
                expires: 3600
            });
        } else {
            this.context.turnover_toggle.children("div").removeClass("switch-on").addClass("switch-off");
            $.cookie("example", "0", {
                expires: 3600
            });
        }
    },
    batchroomtype: function(t) {
        if (t == 'batch_close') {
            this.context.batchswitch_btn.attr("status", "close");
            this.context.batchform.children("div").children("h4[tag=title]").html("批量关闭房型");
            var tpl = this.context.batchform.children().find("ul[tag=cntlist]");
            tpl.children("li").children("tt[tag=time_tip]").html('选择关闭时间段：');
            tpl.children("li").children("tt[tag=roomtype_tip]").html('选择关闭的房型：');
            this.context.batchswitch_btn.html('确认关闭');
            this.context.batchswitch_btn.attr('text', '确认关闭');
        } else {
            this.context.batchswitch_btn.attr("status", "open");
            this.context.batchform.children("div").children("h4[tag=title]").html("批量开启房型");
            var tpl = this.context.batchform.children().find("ul[tag=cntlist]");
            tpl.children("li").children("tt[tag=time_tip]").html('选择开启时间段：');
            tpl.children("li").children("tt[tag=roomtype_tip]").html('选择开启的房型：');
            this.context.batchswitch_btn.html('确认开启');
            this.context.batchswitch_btn.attr('text', '确认开启');
        }
        var now = this._getdatetime();
        var date = M.timeformat(now, 'Y-m-d');
        this.context.batch_fromdate.val(date);
        this.context.batch_enddate.val(date);
        var roomtypelist = this.hotelroomtype.list;
        var html = $.tmpl(this.roomtypetpl, roomtypelist);
        this.context.batchswitch_btn.attr("hotelcode", this.hotelroomtype.hotelcode);
        this.context.batchform.children().find("ul[tag=cntlist] li div[tag=roomtype]").html(html);
        this.context.batchform.children().find("ul[tag=cntlist] li div[tag=roomtype] label").after(' ');
        M.Popup(this.context.batchform, {
            "hideclass": "bootbox modal view fade",
            "showclass": "bootbox modal view fade in",
            "dragable": true
        },
        function() {}.toEventHandler(this));
    },
    saveswitch: function() {
        this.req_before(this.context.saveswitch_btn);
        var data = this.switchdata;
        var status = this.context.switchroomtype.children().find("div[tag=switch]").children("div").attr("tag");
        data.status = status;
        data.act = "switchroomtype";
        var tpl = this.context.roomtypeswitchform.children().find("ul").children("li[class=active]");
        data.innid = tpl.children("a[tag=switchinn]").attr("innid");
        M._getjson("/Ota/switchRoom", data, this.saveswitch_finished.toEventHandler(this));
    },
    saveswitch_finished: function(d) {
        if (d.status == 'success') {
            var req = d.req;
            var roomtypecode = req.roomtypecode;
            var date = req.fromdate;
            var status = req.status;
            var tpl = this.context.switchtable.children("table").children("tbody");
            if (status == "close") {
                tpl.children("tr[tag=d_ota]").children("td[roomtypecode=" + roomtypecode + "][day=" + date + "]").removeClass("editable").addClass("closed").text("已关闭");
            } else {
                var roomnum = tpl.children("tr[tag=d]").children("td[roomtypecode=" + roomtypecode + "][day=" + date + "]").text();
                tpl.children("tr[tag=d_ota]").children("td[roomtypecode=" + roomtypecode + "][day=" + date + "]").removeClass("closed").addClass("editable").text(roomnum);
            }
        } else {
            alert(d.msg);
        }
        this.req_end(this.context.saveswitch_btn);
        M.CloseLast();
    },
    roomtypeswitchform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        var styleclass = ele.attr("class");
        switch (t) {
        case "switch":
            this.switchroomtype(ele);
            break;
        }
        this._handleCloaseSelect(ele);
    },
    _handleCloaseSelect: function(ele) {
        var style = ele.attr("tag");
        if ((M.isEmpty(style) || style != 'dropdownlist')) {
            var tpl_parents = ele.parents("div[t=otainnlist]");
            if (tpl_parents.length == 0) {
                this.context.otainnlist.find(".ip-dropdown").hide();
            }
            tpl_parents = ele.parents("div[t=otalist]");
            if (tpl_parents.length == 0) {
                this.context.otalist.find(".ip-dropdown").hide();
            }
        }
    },
    switchroomtype: function(ele) {
        var roomname = ele.attr("tip");
        var roomtypeid = ele.attr("roomtypeid");
        var roomtypecode = ele.attr("roomtypecode");
        var hotelcode = ele.attr("hotelcode");
        var fromdate = ele.attr("day");
        var styleclass = ele.attr("class");
        var roomnum = ele.text();
        if (styleclass == "closed") {
            this.context.switchroomtype.children().find("div[tag=switch]").children("div").addClass("switch-off").attr("tag", "close");
        } else {
            this.context.switchroomtype.children().find("div[tag=switch]").children("div").removeClass("switch-off").attr("tag", "open");
        }
        var hotelfrom = this.context.roomtypeswitchform.attr("hotelfrom");
        if (hotelfrom == 'meituan') {
            return;
        }
        this.switchdata = {
            "roomtypeid": roomtypeid,
            "roomtypecode": roomtypecode,
            "roomtypename": roomname,
            "hotelcode": hotelcode,
            "fromdate": fromdate,
            "enddate": fromdate,
            "hotelfrom": hotelfrom
        };
        this.context.switchroomtype.children("div").children("h4").children("span[tag=roomtypename]").text(roomname).css("padding-left", '0');
        if (hotelfrom == "booking") {
            this.context.switchroomtype.children("div").children("h4").children("span[tag=title]").html('开启/关闭Booking');
        } else {
            this.context.switchroomtype.children("div").children("h4").children("span[tag=title]").html('开启/关闭艺龙');
        }
        M.Popup(this.context.switchroomtype, {
            "hideclass": "bootbox modal sm fade",
            "showclass": "bootbox modal sm fade in",
            "dragable": true
        },
        function() {}.toEventHandler(this));
    },
    otalist_change: function(ele) {
        var tpl = ele.parents("div[t=otalist]");
        var hotelfrom = tpl.children("span").attr("value");
        this.context.roomtypeswitchform.attr("hotelfrom", hotelfrom);
        var innid = this.context.otainnlist.attr('value');
        this.getroomtypeswitch('', '', innid);
    },
    roomtypeswitch_click: function() {
        this.context.roomtypeswitchform.children('div[tag=content]').hide();
        var html_loading = '<div class="tc" tag="loading" style="padding: 50px 0px; display: none;"><i class="loading32"></i></div>';
        if (this.context.roomtypeswitchform.children('div[tag=loading]').length < 1) {
            this.context.roomtypeswitchform.append(html_loading);
        }
        this.context.roomtypeswitchform.children('div[tag=content]').hide();
        this.context.roomtypeswitchform.children('div[tag=loading]').show();
        M.Popup(this.context.roomtypeswitchform, {
            "hideclass": "modal setotaroom setotaroomWide fade",
            "showclass": "modal setotaroom setotaroomWide fade in",
            "dragable": true
        },
        function() {}.toEventHandler(this));
        this.getroomtypeswitch();
    },
    getroomtypeswitch: function(t, fromtime, innid) {
        var now = this._getdatetime();
        var nowdate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (t == 'prev') {
            if (nowdate >= fromtime) {
                return;
            }
            var fromtime = M.strtotime(this.context.fromdate.val());
            var fromtime = new Date(fromtime.getFullYear(), fromtime.getMonth(), fromtime.getDate() - 14);
            var endtime = new Date(fromtime.getFullYear(), fromtime.getMonth(), fromtime.getDate() + 13);
        } else if (t == 'next') {
            nowdate.setDate(nowdate.getDate() + 90);
            var fromtime = M.strtotime(this.context.fromdate.val());
            var fromtime = new Date(fromtime.getFullYear(), fromtime.getMonth(), fromtime.getDate() + 14);
            var endtime = new Date(fromtime.getFullYear(), fromtime.getMonth(), fromtime.getDate() + 13);
            if (nowdate <= endtime) {
                return;
            }
        } else {
            var fromtime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            var endtime = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 13);
        }
        if (M.isEmpty(innid)) {
            innid = this.context.roomtype.attr("innid");
        }
        var fromdate = M.timeformat(fromtime, 'Y-m-d');
        var enddate = M.timeformat(endtime, 'Y-m-d');
        this.context.fromdate.val(fromdate);
        this.context.enddate.val(enddate);
        this.context.s_fromdate.val(fromdate);
        this.context.s_enddate.val(enddate);
        var hotelfrom = this.context.roomtypeswitchform.attr("hotelfrom");
        M._getjson("/book/getroomtypeswitch", {
            "innid": innid,
            "fromdate": fromdate,
            "enddate": enddate,
            "hotelfrom": hotelfrom
        },
        this.getroomtypeswitch_finished.toEventHandler(this));
    },
    getroomtypeswitch_finished: function(d) {
        if (d.status == "success") {
            var req_innid = d.req.innid;
            this.context.switchtable.children("table").children("tbody").children("tr[tag=d]").remove();
            this.context.switchtable.children("table").children("tbody").children("tr[tag=d_ota]").remove();
            this.context.roomtypeswitchform.children().find("a[tag=switchinn]").parent().removeClass("active");
            var defaultllist = d.d.defaultroomlist;
            this.hotelroomtype = {
                "list": defaultllist,
                "hotelcode": d.d.hotelcode
            };
            var roomswitchlist = d.d.roomswitchlist;
            var roomnumlist = d.d.roomnum;
            var hotelfrom = d.d.hotelfrom;
            this.context.roomtypeswitchform.attr("hotelfrom", hotelfrom);
            this.context.batchswitch.hide();
            this.context.switchtable.children("div[tag=quarfrom]").hide();
            this.context.switchtable.children("div[tag=ctripfrom]").hide();
            this.context.switchtable.children("div[tag=elong]").hide();
            this.context.switchtable.children("div[tag=meituanfrom]").hide();
            if (hotelfrom == "ctrip") {
                this.context.roomtypeswitchform.children().find("h3[tag=title]").html("房态对照表<span>(提供90天的房态对照)</span>");
                this.context.switchtable.children("div[tag=ctripfrom]").show();
            } else if (hotelfrom == "elong") {
                this.context.batchswitch.show();
                this.context.roomtypeswitchform.children().find("h3[tag=title]").html("设置开关房");
                this.context.switchroomtype.find("h4").children("span[tag=title]").html('开启/关闭艺龙');
            } else if (hotelfrom == "tujia") {
                this.context.roomtypeswitchform.children().find("h3[tag=title]").html("房态对照表<span>(提供90天的房态对照)</span>");
            } else if (hotelfrom == "booking") {
                this.context.batchswitch.show();
                this.context.roomtypeswitchform.children().find("h3[tag=title]").html("设置开关房");
                this.context.switchroomtype.find("h4").children("span[tag=Booking]").html('开启/关闭Booking');
            } else if (hotelfrom == "agoda") {
                this.context.roomtypeswitchform.children().find("h3[tag=title]").html("房态对照表<span>(提供90天的房态对照)</span>");
            } else if (hotelfrom == "meituan") {
                this.context.roomtypeswitchform.children().find("h3[tag=title]").html("房态对照表<span>(提供90天的房态对照)</span>");
                this.context.switchtable.children("div[tag=meituanfrom]").show();
            } else {
                this.context.roomtypeswitchform.children().find("h3[tag=title]").html("房态对照表<span>(提供90天的房态对照)</span>");
                this.context.switchtable.children("div[tag=quarfrom]").show();
            }
            this.otahotellist = d.otahotellist[hotelfrom];
            var hoteltab = $.tmpl(this.hoteltab, this.otahotellist);
            this.context.otainnlist.attr('value', req_innid);
            this.context.otainnlist.find('div[tag=innlist]').children().html(hoteltab);
            M.DropdownList(this.context.otainnlist, this.otainnlist_change.toEventHandler(this), {});
            var otatpl = this.context.otalist.children("div[t=otalist]").attr("value", hotelfrom);
            if (M.isEmpty(this.droplist.otatpl)) {
                this.droplist.otatpl = M.DropdownList(otatpl, this.otalist_change.toEventHandler(this), {});
            }
            this.context.otalist.find("div[tag=option]").hide();
            this.context.otalist.find("div[value=" + hotelfrom + "][tag=option]").show();
            var tablist = d.tablist;
            for (var type in tablist) {
                var typestatus = tablist[type];
                if (typestatus == 1) {
                    this.context.otalist.find("div[value=" + type + "][tag=option]").show();
                }
            }
            this.inittabledata(defaultllist, hotelfrom);
            var tpl = this.context.switchtable.children("table").children("tbody");
            if (!M.isEmpty(roomnumlist)) {
                for (var r in roomnumlist) {
                    var room = roomnumlist[r];
                    var roomtypecode = room.hotelroomtypecode;
                    var fromtime = M.strtotime(this.context.fromdate.val());
                    var endtime = M.strtotime(this.context.enddate.val());
                    var roomname = room.hotelroomtypename;
                    var status = room.status;
                    tpl.children("tr[tag=d][roomtypecode=" + roomtypecode + "]").children("td[tag=roomname]").html(roomname);
                    while (fromtime <= endtime) {
                        var date = M.timeformat(fromtime, 'Y-m-d');
                        var num = status[date];
                        tpl.children("tr[tag=d]").children("td[roomtypecode=" + roomtypecode + "][day=" + date + "]").html(num);
                        if (hotelfrom == "ctrip" || hotelfrom == "qunar" || hotelfrom == "tujia" || hotelfrom == "agoda") {
                            tpl.children("tr[tag=d_ota]").children("td[roomtypecode=" + roomtypecode + "][day=" + date + "]").html(num).hide();;
                        } else {
                            tpl.children("tr[tag=d_ota]").children("td[roomtypecode=" + roomtypecode + "][day=" + date + "]").html(num).show();
                        }
                        fromtime.setDate(fromtime.getDate() + 1);
                    }
                }
            }
            if (!M.isEmpty(roomswitchlist)) {
                for (var i in roomswitchlist) {
                    var roomtypecode = roomswitchlist[i].roomtypecode;
                    var fromdate = roomswitchlist[i].fromdate;
                    var enddate = roomswitchlist[i].enddate;
                    var status = roomswitchlist[i].status;
                    if (status == 0) {
                        var fromdatetime = M.strtotime(fromdate);
                        var enddatetime = M.strtotime(enddate);
                        while (fromdatetime <= enddatetime) {
                            var date = M.timeformat(fromdatetime, 'Y-m-d');
                            tpl.children("tr[tag=d_ota]").children("td[roomtypecode=" + roomtypecode + "][day=" + date + "]").removeClass("editable").addClass("closed").text("已关闭");
                            fromdatetime.setDate(fromdatetime.getDate() + 1);
                        }
                    }
                }
            }
        } else {
            alert(d.msg);
        }
        this.context.roomtypeswitchform.children('div[tag=loading]').hide();
        this.context.roomtypeswitchform.children('div[tag=content]').show();
    },
    otainnlist_change: function(ele) {
        var innid = ele.attr('value');
        if (M.isEmpty(innid)) {
            alert('参数错误');
            return;
        }
        this.getroomtypeswitch('', '', innid);
    },
    inittabledata: function(defaultllist, hotelfrom) {
        var fromtime = M.strtotime(this.context.fromdate.val());
        var endtime = M.strtotime(this.context.enddate.val());
        var html = '<th style="width:80px;"></th><th>渠道</th>';
        var datestr = M.timeformat(fromtime, 'm/d');
        var enddatestr = M.timeformat(endtime, 'm/d');
        var year = M.timeformat(fromtime, 'Y');;
        this.context.page.children("div[class=range]").children("p").text(datestr + '~' + enddatestr);
        this.context.page.children("div[class=range]").children("b").text(year);
        while (fromtime <= endtime) {
            datestr = M.timeformat(fromtime, 'm/d');
            html += '<th >' + datestr + '</th>';
            fromtime.setDate(fromtime.getDate() + 1);
        }
        this.context.switchtable.children("table").children("thead").children("tr").html(html);
        var tmpl = this.context.switchtable.children("table").children("tbody").children("tr[tag=tmpl]");
        var tmplnext = this.context.switchtable.children("table").children("tbody").children("tr[tag=tmplnext]");
        var channelname = '';
        if (hotelfrom == 'elong') {
            channelname = '艺龙';
        } else if (hotelfrom == 'booking') {
            channelname = 'Booking';
        } else if (hotelfrom == 'meituan') {
            channelname = '美团';
        } else if (hotelfrom == 'ctrip') {
            channelname = '携程';
        } else if (hotelfrom == 'agoda') {
            channelname = 'Agoda';
        } else if (hotelfrom == 'qunar') {
            channelname = '去哪儿';
        } else if (hotelfrom == 'tujia') {
            channelname = '途家';
        }
        if (M.isEmpty(defaultllist)) {
            return false;
        }
        for (var i = 0; i < defaultllist.length; i++) {
            var datarow = tmpl.clone(true).show().attr('tag', 'd');
            datarow.children("td[tag=roomname]").text(defaultllist[i].hotelroomtypename).attr("rowspan", "2");
            if (hotelfrom == "ctrip" || hotelfrom == "qunar" || hotelfrom == "tujia" || hotelfrom == "agoda") {
                datarow.children("td[tag=roomname]").removeAttr("rowspan");
            }
            datarow.attr("roomtypeid", defaultllist[i].roomtypeid);
            datarow.children("td[tag=innname]").text('云掌柜');
            datarow = this.showitem(datarow, defaultllist[i], '', '');
            datarow.insertBefore(tmpl);
            var row = tmplnext.clone(true).show().attr('tag', 'd_ota');
            row.children("td[tag=innname]").text(channelname);
            row = this.showitem(row, defaultllist[i], 'editable', 'switch');
            if (hotelfrom == "ctrip" || hotelfrom == "qunar" || hotelfrom == "tujia" || hotelfrom == "agoda") {
                row.hide();
            } else {
                row.show();
            }
            row.insertBefore(tmpl);
        }
    },
    showitem: function(tpl, room, stylecalss, t) {
        var fromtime = M.strtotime(this.context.fromdate.val());
        var endtime = M.strtotime(this.context.enddate.val());
        while (fromtime <= endtime) {
            room.date = M.timeformat(fromtime, 'Y-m-d');
            room.styleclass = stylecalss;
            room.tag = t;
            var html = $.tmpl(this.roomtpl, room);
            tpl.append(html);
            fromtime.setDate(fromtime.getDate() + 1);
        }
        return tpl;
    },
    resetroomtypecount: function() {
        var i = count = 0;
        this.context.roomtype.children("table").children("tbody").find("td").each(function() {
            i = $(this).attr("i");
            if (i == undefined) {
                $(this).attr("i", count);
                count = count * 1 + 1;
            } else {
                count = i * 1 + 1;
            }
        });
    },
    tipmessageform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case 'checkoutuser':
            this.getcheckoutuser(ele);
            break;
        case 'checkinuser':
            this.getcheckinuser(ele);
            break;
        case 'changedate':
            this.changedate(ele);
            break;
        case 'closebtn':
            this.context.tipmessageform.hide();
            this.context.mains.find('div[tag=tomorrow]').children('table').find('tbody').children('tr[tag=o]').remove();
            this.context.mains.find('div[tag=today]').children('table').find('tbody').children('tr[tag=o]').remove();
            this.changetipmessagemenu('tab_remind');
            break;
        case 'tab_finance':
            this.changetipmessagemenu('tab_finance');
            break;
        case 'tab_remind':
            this.changetipmessagemenu('tab_remind');
            break;
        }
    },
    changetipmessagemenu: function(t) {
        this.context.tipmessageform.find("h4[tag=tabmenu]").hide();
        if (t == 'tab_finance') {
            this.context.mains.find("div[tag=total]").show();
            this.context.mains.find("div[tag=remind]").hide();
            this.context.tipmessageform.find("div[tag=empty]").hide();
            this.context.tipmessageform.find("h4[tag=tabmenu]").find("a[tag=tab_remind]").parents("h4").show();
        } else {
            var isempty = this.context.tipmessageform.attr("isempty");
            this.context.mains.find("div[tag=total]").hide();
            if (isempty == 1) {
                this.context.tipmessageform.find("div[tag=empty]").show();
            } else {
                this.context.mains.find("div[tag=remind]").show();
            }
            this.context.tipmessageform.find("h4[tag=tabmenu]").find("a[tag=tab_finance]").parents("h4").show();
        }
    },
    remind_messages: function() {
        var innid = this.context.roomtype.attr("innid");
        var orderview = this.context.roomtype.attr('orderview');
        var t = this.context.remind_message.attr("tag");
        if (t == 'tool-alert-unread') {
            this.context.remind_message.removeClass("tool-alert-unread");
            this.context.remind_message.attr("tag", "tool-alert-unread");
            M._getjson("/book/alertread", {
                "a": "alertread"
            },
            function() {});
        }
        if (orderview != 1) {
            M.error('对不起，您没有该权限，请联系客栈管理员');
            return;
        }
        this.account = {};
        M._getjson("/book/getCheckInAndOutUser", {
            "innid": innid
        },
        this.remind_messages_finished.toEventHandler(this));
        M.Popup(this.context.tipmessageform, {
            "hideclass": "modal fade",
            "showclass": "modal fade in",
            "dragable": true
        },
        function() {}.toEventHandler(this));
    },
    changedate: function(ele) {
        var value = ele.attr("value");
        ele.parents("ul").children("li").removeClass("active");
        ele.parents("li").addClass("active");
        this.showfindetail(value);
    },
    showfindetail: function(date) {
        var data = this.orderdata.account[date];
        var tpl = this.context.mains.find('div[tag=total]').children('div');
        if (M.isEmpty(data.account) || M.isEmpty(data.account.total)) {
            data.account = {
                "total": 0
            };
        }
        var waterstatus = this.orderdata.waterstatus;
        if (date == 'after') {
            var checkinrate = this.orderdata.afercheckinrate;
            var checkincount = this.orderdata.aftercheckincount;
            tpl.find('span[tag=title]').text('昨日实住');
            var watertotal = parseInt(this.orderdata.afterwater.incommetotal) - parseInt(this.orderdata.afterwater.outcometotal);;
            var msg = '（订单收入<span>' + data.account.total + '</span>元';
            if (!M.isEmpty(waterstatus) && waterstatus == 1) {
                msg += '，记一笔<span>' + watertotal + '</span>元';
            }
            msg += '）';
            tpl.find("span[tag=findetail]").html(msg);
        } else {
            var checkinrate = this.orderdata.checkinrate;
            var checkincount = this.orderdata.checkincount;
            tpl.find('span[tag=title]').text('今日实住');
            var watertotal = parseInt(this.orderdata.water.incommetotal) - parseInt(this.orderdata.water.outcometotal);
            var msg = '（订单收入<span>' + data.account.total + '</span>元';
            if (!M.isEmpty(waterstatus) && waterstatus == 1) {
                msg += '，记一笔<span>' + watertotal + '</span>元';
            }
            msg += '）';
            tpl.find("span[tag=findetail]").html(msg);
        }
        var total = parseInt(data.account.total);
        if (!M.isEmpty(waterstatus) && waterstatus == 1) {
            total += parseInt(watertotal);
        }
        tpl.find("span[tag=accounttotal]").html(total);
        tpl.find('span[tag=percent]').text(checkinrate + '%');
        tpl.find('span[tag=rooms]').text(checkincount);
    },
    showremind: function(remindlist) {
        if (M.isEmpty(remindlist) || remindlist.length == 0) {
            return;
        }
        var target = this.context.tipmessageform.find("div[tag=remindlist]");
        target.find("div[tag=add]").remove();
        for (var i = 0; i < remindlist.length; i++) {
            var tpl = target.find("div[tag=tpl]").clone().show().attr("tag", "add");
            var item = remindlist[i];
            tpl.find("div[tag=date]").html(item.time);
            tpl.find("span[tag=typename]").html(item.typename);
            tpl.find("p[tag=orderinfo]").show().children("span").html(item.orderinfo);
            tpl.find("p[tag=remark]").children("span").html(item.remark);
            target.children("div").append(tpl);
        }
    },
    remind_messages_finished: function(d) {
        if (d.status == "success") {
            var account = d.account;
            var needcarpluginstatus = d.needcarpluginstatus;
            this.orderdata = d;
            var water = d.water;
            this.showfindetail('today');
            this.showremind(d.remindlist);
            var tpl = this.context.mains.find('div[tag=total]').children('div');
            var tpl1 = this.context.mains.find('div[tag=tomorrow]').children('h3');
            var tpl2 = this.context.mains.find('div[tag=today]').children('h3');
            tpl.find('span[tag=rooms]').text(d.checkincount);
            var roomlength = this.context.roomlist.find("td[tag=room]").length;
            var checkinrate = d.checkinrate;
            tpl.find('span[tag=percent]').text(checkinrate + '%');
            this.context.tipmessageform.find("ul[tag=tablist]").children("li").removeClass("active");
            this.context.tipmessageform.find("ul[tag=tablist]").find("a[value=today]").parent().addClass("active");
            tpl1.children('span[tag=date]').text(d.tomorrowdate);
            tpl1.children('span[tag=tomorrowperson]').text(d.checkinuser.userlist.length);
            tpl1.children('span[tag=tomorrowcar]').text(d.checkinuser.needcarcount);
            tpl2.children('span[tag=todayperson]').text(d.checkoutuser.userlist.length);
            tpl2.children('span[tag=todaycar]').text(d.checkoutuser.needcarcount);
            if (M.isEmpty(d.checkoutuser.userlist)) {
                this.context.mains.find('div[tag=today]').hide();
                this.context.mains.find('div[tag=todayempty]').show();
            } else {
                this.context.mains.find('div[tag=today]').show();
                this.context.mains.find('div[tag=todayempty]').hide();
            }
            if (M.isEmpty(d.checkinuser.userlist)) {
                this.context.mains.find('div[tag=tomorrow]').hide();
                this.context.mains.find('div[tag=tomorrowempty]').show();
            } else {
                this.context.mains.find('div[tag=tomorrow]').show();
                this.context.mains.find('div[tag=tomorrowempty]').hide();
            }
            var html = '';
            var html1 = '';
            var checkinuserlist = d.checkinuser.userlist;
            for (var i = 0; i < checkinuserlist.length; i++) {
                html += '<tr tag="o">';
                html += '<td>' + checkinuserlist[i]['guestname'] + '</td>';
                if (M.isEmpty(checkinuserlist[i]['phone'])) {
                    checkinuserlist[i]['phone'] = '-';
                }
                html += '<td>' + checkinuserlist[i]['phone'] + '</td>';
                html += '<td>' + checkinuserlist[i]['roomname'] + '-' + checkinuserlist[i]['roomtypename'] + '</td>';
                html += '<td>' + checkinuserlist[i]['channelname'] + '</td>';
                var needcartpl = '<span>-</span>';
                if (checkinuserlist[i]['needcar'] != 0) {
                    needcartpl = '<span class="car-red"></span>';
                }
                html += '<td tag="needcar">' + needcartpl + '</td></tr>';
            }
            this.context.mains.find('div[tag=tomorrow]').children('table').find('tbody').append(html);
            var checkoutuserlist = d.checkoutuser.userlist;
            for (var j = 0; j < checkoutuserlist.length; j++) {
                var user = checkoutuserlist[j];
                html1 += '<tr tag="o"><td>' + user['guestname'] + '</td>';
                if (M.isEmpty(user['phone'])) {
                    user['phone'] = '-';
                }
                html1 += '<td>' + user['phone'] + '</td>';
                html1 += '<td>' + user['roomname'] + '-' + user['roomtypename'] + '</td>';
                html1 += '<td>' + user['channelname'] + '</td>';
                var needcartpl = '<span>-</span>';
                if (user['needcar2'] != 0) {
                    needcartpl = '<span class="car-red"></span>';
                }
                html1 += '<td tag="needcar">' + needcartpl + '</td>+</tr>';
            }
            this.context.mains.find('div[tag=today]').children('table').find('tbody').append(html1);
            if (M.isEmpty(needcarpluginstatus)) {
                this.context.mains.find('div[tag=tomorrow]').find("th[tag=needcar]").remove();
                this.context.mains.find('div[tag=tomorrow]').find("td[tag=needcar]").remove();
                this.context.mains.find('div[tag=today]').find("th[tag=needcar]").remove();
                this.context.mains.find('div[tag=today]').find("td[tag=needcar]").remove();
            }
            var h4 = this.context.tipmessageform.find("h4");
            if (h4.length == 1) {
                h4.show();
            }
            var remindtpl = h4.children("span[tag=remind]");
            if (remindtpl.length != 0) {
                if (d.remindlist.length == 0 && d.checkoutuser.userlist.length == 0 && d.checkinuser.userlist.length == 0) {
                    this.context.tipmessageform.attr("isempty", "1").find("div[tag=remind]").hide();
                    this.context.tipmessageform.find("div[tag=empty]").show();
                } else {
                    this.context.tipmessageform.attr("isempty", "0").find("div[tag=remind]").show();
                    this.context.tipmessageform.find("div[tag=empty]").hide();
                }
            } else {
                this.context.mains.find("div[tag=total]").show();
                this.context.tipmessageform.attr("isempty", "0").find("div[tag=remind]").hide();
                this.context.tipmessageform.find("div[tag=empty]").hide();
            }
        }
    },
    close_click: function(e) {
        M.CloseLast();
    },
    _managecell: function(tdele) {
        $(tdele).css({
            "border-left": "none"
        });
    },
    zerosize: function(value, length) {
        if (!length) length = 2;
        value = String(value);
        for (var i = 0,
        zeros = ''; i < (length - value.length); i++) {
            zeros += '0';
        }
        return zeros + value;
    },
    timeformat: function(date, format) {
        if (M.isEmpty(format)) {
            format = "Y-m-d";
        }
        var year = date.getFullYear();
        var month = this.zerosize(date.getMonth() + 1 + "", 2);
        var day = this.zerosize(date.getDate() + "", 2);
        var time = format.replace("Y", year).replace("m", month).replace("d", day);
        return time;
    },
    NoUndefined: function(str) {
        return M.isEmpty(str) ? "": str;
    },
    datepicker_scrollhandler: function() {},
    _closepopup: function() {
        M.ClosePopup();
    },
    destroy: function() {}
});
