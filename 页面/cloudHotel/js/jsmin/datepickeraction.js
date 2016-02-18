M.Page.DatePickerAction = M.createClass();
M.extend(M.Page.DatePickerAction.prototype, {
    context: {},
    transform: null,
    roomstatus: [],
    roomprice: {},
    formatedateprice: {},
    tempavarooms: null,
    temporderdetail: null,
    tempcheckdetail: null,
    orderdetail: null,
    editCheckinRootPop: null,
    targetidtype: null,
    tpl_del: null,
    addordertpl: null,
    caneditaccount: 0,
    canvisitlog: 0,
    reducedstate: 0,
    pid: 0,
    isfirst: 0,
    checkonwer: 0,
    haspluginid: 0,
    markScrollTop: 0,
    accounttarget: null,
    pricelist: {},
    phonelist: {},
    target_movearea: {
        'idx': '-1',
        'i': '-1'
    },
    orderstatus: '',
    search_tpl: null,
    pushlistcenter: {},
    object: {},
    multiguest: [],
    plugin: {
        "needcar": 0
    },
    searchguestlist: {},
    defaultcolor: {
        "order": "ofreshgreen",
        "checkin": "ofreshorange",
        "checkout": "ogray"
    },
    droplist: {
        "order": {},
        "checkin": {},
        "checkout": {},
        "del": {}
    },
    submittext: "处理中...",
    submitcss: "btn disabled",
    channelico: {
        "self": "ico-self",
        "familiar": "ico-familiar",
        "taobao": "ico-taobao",
        "ctrip": "ico-ctrip",
        "elong": "ico-elong",
        "qunar": "ico-qunar",
        "tongcheng": "ico-tongcheng",
        "qingmangguo": "ico-qingmangguo",
        "songguo": "ico-songguo",
        "tuniu": "ico-tuniu",
        "xuzhu": "ico-xuzhu",
        "booking": "ico-booking",
        "agoda": "ico-agoda",
        "other": "ico-other",
        "empty": "ico-nochoice",
        "weixin": "ico-weixin",
        "wkz": "ico-wkz",
        "miot": "ico-miot"
    },
    channelname: {
        "self": "自来客",
        "familiar": "熟客及推荐",
        "taobao": "淘宝",
        "ctrip": "携程",
        "elong": "艺龙",
        "qunar": "去哪儿",
        "tongcheng": "同程",
        "qingmangguo": "青芒果",
        "songguo": "松果",
        "tuniu": "途牛",
        "xuzhu": "续住",
        "booking": "Booking",
        "agoda": "Agoda",
        "other": "其它",
        "empty": "未选择"
    },
    ota_channel: {
        'elong': '艺龙',
        'tujia': '途家'
    },
    idtypelist: {
        "1": '身份证',
        "2": "护照",
        "3": "港澳通行证",
        "4": "军官证",
        "5": "其它"
    },
    arrivetimedata: {
        "before18:00": "18:00前",
        "before20:00": "20:00前",
        "before22:00": "22:00前",
        "before24:00": "24:00前",
        "after24:00": "24:00后"
    },
    tpl_divinfo: '',
    tpl_otherinfo: '<p class="t12 light">${arrivedate}入住</p>' + '<p class="t12 light">${nights}晚</p>',
    tpl_nopay: '<span class="nopay"></span>',
    tpl_car: '<span class="car"></span>',
    tpl_remind: '<span class="ico-bell"></span>',
    tpl_checkedin: '<div class="demand_top"><span class="ico-slept"></span></div>',
    typename: {
        "1": "身份证号",
        "2": "护照",
        "3": "港澳通行证",
        "4": "军官证",
        "5": "其它"
    },
    tpl_ota: '<span class="ota"></span>',
    tpl_otamsg: '${guestname}${phone}，${confirmdate}入住，住${nights}晚，${roomtypename}，${roomnum}间，订单金额￥${amount};${guaranteetype}；约${arrivedate}前到店。',
    tpl_tujiamsg: '${guestname}${phone}，${confirmdate}入住，住${nights}晚，${roomtypename}，${roomnum}间，订单金额￥${totalprice}。',
    tpl_winxinmsg: '${guestname}，${phone}，${indate}入住，住${nights}晚，${roomtypename}，${roomnum}间，${remark}。',
    tpl_watertype: ' <li><a href="javascript:;" typeid="${id}" tag="type">${name}</a></li>',
    tpl_roomrate: '<tr><td>${roomname}</td><td>￥${price}</td></tr>',
    tpl_account: '<div class="mb5 clx" style="display:none;">' + '<div class="fr">' + '<span class="label-input li-pay fl">预订时支付房费300元[支付宝]</span>' + '<a href="#?" class="li-edit">修改</a>' + '</div>' + '<div class="fr" style="display:none;">' + ' <span class="label-input fl">预订时支付房费300元[支付宝]</span>' + ' <input type="text" class="fl" style="width:30px; margin-right:0;" value="300"/>' + ' <div class="droplist fl" tag="payments" style="width:58px; margin-left:-1px;">' + ' <span class="value">支付方式</span>' + ' </div>' + ' <a class="btn btn-primary" href="javascript:;" style="padding:4px 10px; font-size:12px;">保存</a>' + '</div>' + '</div>',
    tpl_checkout: '<div class="demand_top sortorder"><span class="ico-checkout"></span></div>',
    tpl_log: '<div class="node">' + '<div class="title clx">' + '<span class="fl" tag="date"></span>' + '<span class="fr"><span tag="username"></span> <span tag="ua"></span></span>' + '</div>' + '<div class="content">' + '<p>${detail}</p>' + ' </div>' + '</div>',
    sorttable: {},
    tooltipmsg: {},
    maxnights: 10,
    orderdays: 10,
    constaynights: 3,
    addcolumn: 0,
    canmoveorder: 0,
    ordermanage: 0,
    printset: {
        "checkin": 0,
        "checkout": 0
    },
    jumpauth: 0,
    jump_order: {
        roomlist: [],
        daylist: [],
        datelist: []
    },
    color: {
        ordercolor: null,
        checkincolor: null
    },
    inf: {},
    ctripvcode: {},
    qrOpened: false,
    tpl_pushmessage_sys: '<div class="otaMsg"><p>云掌柜提醒您：</p>' + '<p>${msg}</p>' + '<span class="date">${newdate}</span></div>',
    tpl_pushmessage_wkz: '<div class="otaMsg">' + '<p tag="title">${title}</p>' + '<p>(确认时间${confirmdate})</p>' + '<p>${msg}。</p>' + '<p>${other}</p>' + '<span class="date">${newdate}</span>' + '</div>',
    tpl_pushmessage_ota: '<div class="otaMsg">' + '<p>您有来自“${jschannelname}-${innname}”的新订单，已确认</p>' + '<p>(确认时间${confirmdate})</p>' + '<p>${guestname}${phone}，${confirmdate}入住，住${nights}晚，${roomtypename}，${roomnum}间，订单金额￥${amount};${guaranteetype}；约${arrivedate}前到店。' + '<p><span class="fr light">${newdate}</span>已为您暂时安排到&lt;${roomtypename}&gt;${roomname}，您可以重新安排房间。</p>' + '</div>',
    tpl_pushmessage_otadel: '<div class="otaMsg">' + '<p>您有来自“${jschannelname}-${innname}”的删除订单，已确认</p>' + '<p>(确认时间${confirmdate})</p>' + '<p><span class="fr light">${newdate}</span>${guestname}${phone}，${confirmdate}入住，住${nights}晚，${roomtypename}，${roomnum}间，订单金额￥${amount};${guaranteetype}；约${arrivedate}前到店。' + '</div>',
    tpl_pushmessage_otaedit: '<div class="otaMsg">' + '<p>您有来自“${jschannelname}-${innname}”的订单修改。</p>' + '<p>(确认时间${confirmdate})</p>' + '<p>${guestname}${phone}，${confirmdate}入住，住${nights}晚，${roomtypename}，${roomnum}间，订单金额￥${amount};${guaranteetype}；约${arrivedate}前到店。' + '<p><span class="fr light">${newdate}</span>已为您暂时安排到&lt;${roomtypename}&gt;${roomname}，您可以重新安排房间。</p>' + '</div>',
    tpl_pushmessage_otaswtichroomfail: '<div class="otaMsg">' + '<p class="bold red t14">去“${otaname}”关房失败。</p>' + '<p>${content}</p>' + '<p>我们已经尝试了3次，依然没有成功将您的房态变化同步到${otaname}，请做如下尝试：</p>' + '<p>1、在分销->${otaname}页面中检查${otaname}的帐号信息是否正确。</p>' + '<p>2、如果都没有问题，请暂时从${otaname}后台操作，以免引起客人误订。</p>' + '<div class="mt10 clx">' + '<a class="ml10" href="${url}" target="_blank">到${otaname}后台管理房态</a>' + '</div>' + '</div>',
    tpl_pushmessage_otaswtichroomsuccess: '<div class="otaMsg">' + '<p>到${otaname}关房成功</p>' + '<p>${content}</p>' + '</div>',
    tpl_pushmessage_otaloginstimeout: '<div class="otaMsg">' + '<p class="bold red t14">重要提醒</p>' + '<p class="mt10">到${otaname}关房失败, 失败原因: ${otaname}登录过期，请重新登录。</p>' + '<div class="mt10 clx">' + '<a class="ml10" href="${url}" target="_blank">到${otaname}后台管理房态</a>' + '</div>' + '</div>',
    tpl_pushmessage_wkzgoods: '<div class="otaMsg">' + '<p>您有来自“${channelname}-${innname}”的其它商品订单，</p>' + '<p>${goodsname}，${num}件，${guestname}，${guestphone}，已使用${paytypename}支付全款${totalprice}元。</p>' + '<p>您可以在微客栈设置-其它商品中查看此订单。</p>' + '<span class="date">${newdate}</span>' + '</div>',
    tpl_pushmessage_cashier: '<div class="otaMsg" tag="cashier" cid="${id}">' + '<p tag="title">${title}</p>' + '<p>${msg}</p>' + '<span class="date">${newdate}</span>' + '</div>',
    getdatetime: function() {
        var date = M.getTime();
        return date;
    },
    init: function() {
        this.initDOM();
        this.initEvent();
        this.init_datepickerevent();
        this.initordercallback();
        this._getroomstatus();
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
    initDOM: function() {
        this.context.main = $('.main');
        this.context.body = $("body");
        this.context.pickerarea = $("#pickerarea");
        this.context.pickerdate = $("#pickerdate");
        this.context.page = $("#page");
        this.context.orderform = $("#orderform");
        this.context.roomtype = $("#roomtype");
        this.inf.ov = this.context.roomtype.attr("ov");
        this.inf.tp = this.context.roomtype.attr("tp");
        this.context.scroll_top = $("#roomtype");
        this.context.scroll_left = $("#pickerdate");
        this.context.roomlist = $("#roomlist");
        this.context.opennewurl = $("#opennewurl");
        this.context.innhiddendata = $("#innhiddendata");
        this.context.scroller = $(".datepicker");
        this.context.submitlayer = $("#submitlayer");
        this.context.searchorderlist = $("#searchorderlist");
        this.context.ot_hidden = $("#ot_hidden");
        this.context.selecttime = $("#selecttime");
        this.context.datedesc = $("#datedesc");
        this.context.selecttime.datepicker({
            onSelect: this.onselect.toEventHandler(this)
        });
        this.context.inputtime = $("#datepickers");
        this.context.selectdate = $("#selectdate");
        this.context.savebtn = $("#r_savebtn");
        this.context.otamsgbox = $("#otamsgbox");
        this.context.header = $("#header");
        this.context.roomratedetail = $("#roomratedetail");
        this.context.footer = $("#footer");
        this.context.ordercolor = $("#ordercolor");
        this.context.findetailform = $("#findetailform");
        this.context.orderlogform = $("#orderlogform");
        this.context.delform = $('#delform');
        this.context.delhidden = $("#delhidden");
        var now = this.getdatetime();
        var fromdate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 3);
        var enddate = new Date(fromdate.getFullYear(), fromdate.getMonth() + 1, fromdate.getDate());
        var ordermanage = this.context.roomtype.attr("ordermanage");
        if (ordermanage == 1) {
            this.ordermanage = ordermanage;
        }
        var jumpauth = this.context.roomtype.attr("jumpauth");
        if (jumpauth == 1) {
            this.jumpauth = jumpauth;
        }
        var checkonwer = this.context.roomtype.attr("checkonwer");
        if (checkonwer == 1) {
            this.checkonwer = 1;
        }
        var caneditaccount = this.context.roomtype.attr("caneditaccount");
        if (caneditaccount == 1) {
            this.caneditaccount = 1;
        }
        var haspluginid = this.context.roomtype.attr("haspluginid");
        if (haspluginid == 1) {
            this.haspluginid = 1;
        }
        var canvisitlog = this.context.roomtype.attr("canvisitlog");
        if (canvisitlog == 1) {
            this.canvisitlog = 1;
        }
        var printcheckin = this.context.roomtype.attr("printcheckin");
        if (printcheckin == 1) {
            this.printset.checkin = 1
        }
        var printcheckout = this.context.roomtype.attr("printcheckout");
        if (printcheckout == 1) {
            this.printset.checkout = 1
        }
        var needcar = this.context.roomtype.attr("needcar");
        if (needcar == 1) {
            this.plugin.needcar = 1
        }
        var reducedstate = this.context.roomtype.attr("reducedstate");
        if (reducedstate == 1) {
            this.reducedstate = 1
        }
        var isreverse = M.isEmpty(this.transform) ? 0 : this.transform.isreverse;
        this.context.mainpicker = new M.DatePicker(this.context.pickerdate, this.context.pickerarea, {
            "fromdate": fromdate,
            "enddate": enddate,
            "now": now,
            "transform": this.transform,
            "isreverse": isreverse
        },
        this.datepicker_convert.toEventHandler(this), null);
        this.context.mainpicker.transform = this.transform;
        var rows = this.transform.getpickerrows();
        this.context.mainpicker.setrows(rows);
        this.context.pickertbody = this.context.pickerarea.children("table").children(":first");
        this.context.pickerheader = this.context.pickerdate.children("table").children(":first");
        this._pagedesc();
        this.context.selectcolor = $("#o_channel");
        this.context.inroom = $("#inroom");
        this.context.warnota = $("#warnota");
        this.tpl_divinfo = this.transform.gettpl_divinfo();
        this.context.roomstatusthumb = $("#roomstatusthumb");
        this.context.showroomthumb = $("#showroomthumb");
        this.context.roomstatusdetail = $("#roomstatusdetail");
        this.context.roomstatustime = $("#roomstatustime");
        this.context.roomstatusscroll = $("#roomstatusscroll");
        this.context.loginQunar = $("#loginQunar");
        this.context.qunarLoginBtn = $("#loginqunarbtn");
        this.context.rightbox = $('#rightboxf');
        this.context.rnsBox = $('#rnsBox');
        this.context.IEbrowser = $("#IEbrowser");
        this.context.loginCtripFrom = $("#loginCtripFrom");
        this.context.loginctripbtn = $("#loginctripbtn");
        this.context.needpayform = $("#needpayform");
        this.context.switchroomneedlogin = $("#switchroomneedlogin");
        this.context.pointTips = $("#pointTips");
        this.context.showPoints = $("#showPoints");
        this.context.showPoints.show();
        this.context.paymentmsgbox = $("#paymentmsgbox");
        this.context.pushmessage = $('#pushmessage');
        this.context.msgcenterpop = $('#msgCenterPop');
        this.context.uid = $('#uniqid');
        this.context.doorlockform = $("#doorlockform");
        this.context.doorlock = $("#doorlock");
        this.context.pointTips = $("#pointTips");
        this.context.hotelpoints = $("#hotelpoints");
        this.context.ordertooltip = $("#ordertooltip");
    },
    initEvent: function() {
        this.context.mainpicker.setcontent_clickhandler(this.datepicker_click.toEventHandler(this));
        this.context.page.bind("click", this.page_click.toEventHandler(this));
        this.context.savebtn.bind("click", this.savebtn_click.toEventHandler(this));
        this.initpickermousemove();
        this.context.main.bind('click', this.main_click.toEventHandler(this));
        this.context.otamsgbox.bind('click', this.shownextotamsg.toEventHandler(this));
        this.context.roomtype.bind('click', this.hightcol.toEventHandler(this));
        this.context.pickerdate.bind('click', this.hightrow.toEventHandler(this));
        this.context.inroom.bind("change", this.editcheck_change.toEventHandler(this));
        this.context.warnota.bind("click", this.warnota_click.toEventHandler(this));
        this.context.showroomthumb.bind("click", this.showroomthumb_click.toEventHandler(this));
        this.context.body.bind("click", this.body_click.toEventHandler(this));
        this.context.loginQunar.bind('click', this.loginQunar_click.toEventHandler(this));
        this.context.qunarLoginBtn.bind('click', this.relogin_click.toEventHandler(this));
        this.context.loginctripbtn.bind('click', this.reloginctrip_click.toEventHandler(this));
        this.context.roomlist.bind("click", this.roomlist_click.toEventHandler(this));
        this.context.IEbrowser.bind("click", this.IEbrowserclick.toEventHandler(this));
        this.checkroomlength();
        this.checkieversion();
        this.transform.win_resize();
        this.context.loginCtripFrom.bind('click', this.loginCtripFrom_click.toEventHandler(this));
        this.context.switchroomneedlogin.bind("click", this.switchroomneedlogin_click.toEventHandler(this));
        this.context.showPoints.bind("click", this.showPoints_click.toEventHandler(this));
        this.context.pushmessage.bind('click', this.pushmessage_click.toEventHandler(this));
        this.context.msgcenterpop.bind('click', this.msgcenterpop_click.toEventHandler(this));
        this.context.doorlock.bind('click', this.doorlock_click.toEventHandler(this));
        this.context.hotelpoints.bind("click", this.hotelpoints_click.toEventHandler(this));
    },
    hotelpoints_click: function() {
        this.context.pointTips.toggle();
    },
    doorlock_click: function() {
        var innid = this.context.roomtype.attr("innid");
        M._getjson("/Doorlock/getdooropenhistory", {
            "innid": innid
        },
        this.getdooropenhistory_finished.toEventHandler(this));
    },
    getdooropenhistory_finished: function(d) {
        if (d.status == "success") {
            var list = d.list;
            this.context.doorlockform.find("ul[tag=roomlist]").children("li").hide();
            var roomlist = this.context.doorlockform.find("ul[tag=roomlist]");
            for (var i in list) {
                var item = list[i];
                var roomid = item.roomid;
                var historylist = item.list;
                var msg = '';
                var tpl = roomlist.children("li[roomid=" + roomid + "]").show();
                var roomname = tpl.find("div[tag=name]").attr("value");
                for (var j in historylist) {
                    var h = historylist[j];
                    msg += h.open_time + ' ' + h.pwd_user_name + '打开过<br/>';
                }
                if (item.online == 1) {
                    if (msg != '') {
                        msg = roomname + '-今日开锁记录：<br/>' + msg;
                        tpl.find("div[tag=lockstatus]").show().children("i").addClass("ico-key").removeClass("ico-lockoff");
                    } else {
                        tpl.find("div[tag=lockstatus]").hide();
                        msg = '该房间今日还未有人进入过。';
                    }
                } else {
                    tpl.find("div[tag=lockstatus]").show().children("i").removeClass("ico-key").addClass("ico-lockoff");
                    msg = "门锁已掉线，请检查网络或基站和门锁电源。";
                }
                tpl.attr("title", "").tooltip({
                    position: {
                        my: "left+15 top+20",
                        at: "left bottom"
                    },
                    track: 1,
                    content: msg,
                    show: {
                        delay: 100
                    },
                    hide: false
                });
            }
            M.Popup(this.context.doorlockform, {
                "hideclass": "modal viewguest fade",
                "showclass": "modal viewguest fade fade in",
                "dragable": true
            });
        } else {
            if (!M.isEmpty(d.msg)) {
                M.error(d.msg);
            } else {
                M.error('暂未获取到开门记录，请稍后再试');
            }
        }
    },
    initpickermousemove: function() {
        this.context.highlight = this.context.pickerarea.children("table").children("tbody").children("tr").children("td");
        this.context.highlight.bind("mousemove", this.mousemovechange.toEventHandler(this));
        this.context.highlight.bind("mouseleave", this.mouseleavechange.toEventHandler(this));
    },
    initordercallback: function() {
        order.ordercallback = this.editorder_finished.toEventHandler(this);
        order.checkincallback = this.editcheckin_finished.toEventHandler(this);
        var innid = this.context.roomtype.attr("innid");
        order.innid = innid;
        order.userliststatus = 0;
        order.inituserauth();
        order.from = 'book';
        this.object.order = order;
    },
    editorder_finished: function(d) {
        if (d.status == "success") {
            if (!M.isEmpty(d.action) && d.action == 'delete') {
                this.delorder_finished(d);
            } else {
                var type = "ordered";
                var detail = d.orderlist;
                var items = d.orderlist;
                if (!M.isEmpty(d.req.setid)) {
                    this._clearitembyset(d.req.setid, "ordered");
                }
                if (d.req.op == "saveorder") {
                    var olddata = d.olddata.orders;
                }
                var itemdate = this._getitemdate();
                this._showitems(items);
                this._clear_jumpselected();
            }
            this.calc_leftrooms();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
    },
    editcheckin_finished: function(d) {
        if (d.status == "success") {
            if (!M.isEmpty(d.action) && d.action == 'delete') {
                this.checkindelete_finished(d);
            } else {
                this._clearitembyset(d.req.setid, "checkedout");
                var itemdate = this._getitemdate();
                var items = d.data;
                this._showitems(items);
            }
            this.calc_leftrooms();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
    },
    delorder_finished: function(d) {
        if (d.status == "success") {
            if (!M.isEmpty(d.delfrom) && d.delfrom == 'groupbookorder') {
                this._clearitembyset(d.order.ordersetid, "ordered");
            } else {
                var orderid = d.req.orderid;
                var coordata = this._getcoordedatabyorderid(orderid);
                var row = coordata.row;
                var cols = coordata.cols;
                var target = this._getpickercell(row, cols);
                this._clearitembycoordinate(cols, row);
            }
            var olddata = d.olddata;
            if (!M.isEmpty(d.orderset.orders) && d.deleteall != 1) {
                items = d.orderset.orders;
                this._showitems(items);
            }
            this.calc_leftrooms();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        this.sortorders();
    },
    checkindelete_finished: function(d) {
        if (d.status == "success") {
            if (!M.isEmpty(d.delfrom) && d.delfrom == 'groupbookorder') {
                this._clearitembyset(d.orderset.id, "checkedin");
            } else {
                var gid = d.req.gid;
                var coordata = this._getcoordedatabygid(gid);
                var row = coordata.row;
                var cols = coordata.cols;
                this._clearitembycoordinate(cols, row);
            }
            var olddata = d.olddata;
            this.calc_leftrooms();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        this.sortorders();
    },
    _checkinoption: function(tdele) {
        var datehave = tdele.children(".date-have");
        var rid = datehave.attr("rid");
        var gid = datehave.attr("gid");
        var cid = datehave.attr("cid");
        var setid = datehave.attr("setid");
        data = {
            "gid": gid,
            "cid": cid,
            "setid": setid,
            "rid": rid
        };
        var innid = this.context.roomtype.attr("innid");
        this.object.order.doeditcheckingroup(data, innid);
    },
    showPoints_click: function(e) {
        var ele = M.EventEle(e);
        var offset = ele.offset();
        var left = offset.left;
        var top = offset.top;
        this.context.pointTips.css("top", top + 18).css("left", left + 4);
        this.context.pointTips.toggle();
    },
    loginCtripFrom_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == "nextlink") {
            this.tryloginctrip();
        }
        if (t == "changevcode") {
            this.ctripchangevcode();
        }
    },
    tryloginctrip: function() {
        var innid = this.context.loginCtripFrom.attr("innid");
        var username = this.context.loginCtripFrom.attr("username");
        var password = this.context.loginCtripFrom.find("input[name=password]").val();
        var inputvcode = this.context.loginCtripFrom.find("li[tag=vcode]").find("input[name=vcode]").val();
        var vcode = this.ctripvcode;
        var data = {
            "op": "tryloginctrtp",
            "innid": innid,
            "username": username,
            "password": password,
            "needcap": vcode.needcap,
            "vcode": inputvcode,
            "param0": vcode.param0,
            "param1": vcode.param1,
            "param2": vcode.param2
        };
        M._getjson("/Ota/tryloginctrtp", data, this.tryloginctrtp_finished.toEventHandler(this));
    },
    tryloginctrtp_finished: function(d) {
        if (d.status == "success") {
            M.CloseLast();
            this.context.switchroomneedlogin.hide();
            this.context.msgcenterpop.find("div[tag=messagelist]").children("div[tag=ctripneedlogin]").remove();
            M.success('登录成功，正在到携程关房，请稍候。')
        } else {
            var vcode = d.vcode;
            if (vcode.needcap == 1) {
                this.context.loginCtripFrom.find("li[tag=vcode]").show();
                this.context.loginCtripFrom.find("li[tag=vcode]").find("img[tag=changevcode]").attr("src", vcode.base64);
            } else {
                this.context.loginCtripFrom.find("li[tag=vcode]").hide();
            }
            this.ctripvcode = vcode;
            alert(d.msg);
        }
    },
    ctripchangevcode: function() {
        var innid = this.context.loginCtripFrom.attr("innid");
        var username = this.context.loginCtripFrom.attr("username");
        M._getjson("/Ota/getVerifyCtrip", {
            "op": "getctripvcode",
            "innid": innid,
            "username": username
        },
        this.ctripchangevcode_finished.toEventHandler(this));
    },
    ctripchangevcode_finished: function(d) {
        if (d.status == "success") {
            var vcode = d.vcode;
            this.ctripvcode = vcode;
            this.context.loginCtripFrom.find("li[tag=vcode]").find("img[tag=changevcode]").attr("src", vcode.base64);
        } else {
            alert(d.msg);
        }
    },
    reloginctrip_click: function(e) {
        var ele = M.EventEle(e);
        var innid = ele.attr("data-innid");
        M._getjson("/Ota/getctriplinkuser", {
            "op": "getctriplinkuser",
            "innid": innid
        },
        this.reloginctrip_finished.toEventHandler(this));
    },
    reloginctrip_finished: function(d) {
        if (d.status == "success") {
            var hotel = d.hotel;
            var vcode = hotel.vcode;
            if (M.isEmpty(vcode)) {
                vcode = {
                    'needcap': '',
                    "param0": '',
                    "param1": '',
                    "param2": ''
                };
            }
            this.ctripvcode = vcode;
            if (!M.isEmpty(vcode) && vcode.needcap == 1) {
                this.context.loginCtripFrom.find("li[tag=vcode]").show();
                this.context.loginCtripFrom.find("li[tag=vcode]").find("img[tag=changevcode]").attr("src", vcode.base64);
            } else {
                this.context.loginCtripFrom.find("li[tag=vcode]").hide();
            }
            this.context.loginCtripFrom.attr("innid", hotel.innid).attr("username", hotel.username);
            this.context.loginCtripFrom.find("span[tag=username]").text(hotel.username) this.context.loginCtripFrom.find("input[name=password]").val(hotel.password);
            M.Popup(this.context.loginCtripFrom, {
                "hideclass": "modal sm fade",
                "showclass": "modal sm fade in",
                "dragable": true
            });
            this.context.loginCtripFrom.css("z-index", "1060");
        } else {
            alert(d.msg);
        }
    },
    IEbrowserclick: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'close') {
            this.context.IEbrowser.hide();
        }
    },
    checkieversion: function() {
        var browser = navigator.appName
        var b_version = navigator.appVersion
        var version = b_version.split(";");
        if (M.isEmpty(version[1])) return;
        var trim_Version = version[1].replace(/[ ]/g, "");
        var iebrowser = '';
        if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
            iebrowser = 1;
        } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
            iebrowser = 1;
        } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
            iebrowser = 1;
        }
        if (iebrowser == 1) {
            this.context.IEbrowser.show();
        }
    },
    checkroomlength: function() {
        var length = this.transform.getroomlength();
        if (length == 0) {
            var isowner = this.context.roomtype.attr("isowner");
            if (isowner == 1) {
                var innid = this.context.roomtype.attr("innid");
                var url = '/RoomType/index?innid=' + innid;
                this.context.pickerarea.html('<div class="datepickerempty">您还没有添加房间，请进入<a href="' + url + '">设置-客栈及房型</a>，为您的客栈你添加房间吧。</div>');
            } else {
                this.context.pickerarea.html('<div class="datepickerempty">您还没有添加房间，请联系管理员进入“设置-客栈及房型”添加。</div>');
            }
        }
    },
    roomlist_click: function(e) {
        var ele = M.EventEle(e);
        this.transform.roomlist_click(ele);
        this.transform.win_resize();
    },
    switchroomneedlogin_click: function() {
        var hotelfrom = this.context.switchroomneedlogin.attr("hotelfrom");
        var innid = this.context.switchroomneedlogin.attr("innid");
        if (hotelfrom == 'ctrip') {
            M._getjson("/Ota/getctriplinkuser", {
                "op": "getctriplinkuser",
                "innid": innid
            },
            this.reloginctrip_finished.toEventHandler(this));
        } else {
            M._getjson("/Ota/getqunarlinkuser", {
                "op": "getuserinfo",
                "innid": innid
            },
            this.relogin_finished.toEventHandler(this));
        }
    },
    relogin_click: function(e) {
        var ele = M.EventEle(e);
        var innid = ele.attr("data-innid");
        M._getjson("/Ota/getqunarlinkuser", {
            "op": "getuserinfo",
            "innid": innid
        },
        this.relogin_finished.toEventHandler(this));
    },
    relogin_finished: function(d) {
        if (d.status == "success") {
            var hotelinfo = d.hotel;
            var hotelcode = hotelinfo.hotelcode;
            var username = hotelinfo.username;
            var password = hotelinfo.password;
            var cid = hotelinfo.id;
            var vcode = hotelinfo.vcode;
            this.context.loginQunar.find("tt[name=username]").attr("value", username);
            this.context.loginQunar.find("span[tag=username]").text(username) this.context.loginQunar.find("input[name=password]").val(password);
            this.context.loginQunar.find("input[tag=hidedata]").attr("hotelcode", hotelcode).attr("cid", cid);
            this.context.loginQunar.find("img[tag=changevcode]").attr("src", vcode);
            this.context.loginQunar.find("img[tag=vcode]").val('');
            M.Popup(this.context.loginQunar, {
                "hideclass": "modal sm fade",
                "showclass": "modal sm fade in",
                "dragable": true
            });
            this.context.loginQunar.css("z-index", "1060");
        } else {
            alert(d.msg);
        }
    },
    loginQunar_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == "nextlink") {
            this.trylogin();
        }
        if (t == "changevcode") {
            this.changevcode();
        }
    },
    trylogin: function() {
        var hotelcode = this.context.loginQunar.find("input[tag=hidedata]").attr("hotelcode");
        var cid = this.context.loginQunar.find("input[tag=hidedata]").attr("cid");
        var innid = this.context.roomtype.attr("innid");
        var username = this.context.loginQunar.find("tt[name=username]").attr("value");
        var password = this.context.loginQunar.find("input[name=password]").val();
        var vcode = this.context.loginQunar.find("input[name=vcode]").val();
        M._getjson("/Ota/qunarrelogin", {
            "op": "editqunarpassword",
            "cid": cid,
            "innid": innid,
            "hotelcode": hotelcode,
            "username": username,
            "password": password,
            "vcode": vcode
        },
        this.savepassword_finished.toEventHandler(this));
    },
    savepassword_finished: function(d) {
        if (d.status == "success") {
            M.CloseLast();
            this.context.switchroomneedlogin.hide();
            this.context.msgcenterpop.find("div[tag=messagelist]").children("div[tag=qunarpneedlogin]").remove();
            M.success('登录成功，正在到去哪儿关房，请稍候。')
        } else {
            alert(d.msg);
            this.changevcode();
        }
    },
    changevcode: function() {
        var innid = this.context.roomtype.attr("innid");
        M._getjson("/Ota/getvcode", {
            "op": "getvcode",
            "innid": innid
        },
        this.changevcode_finished.toEventHandler(this));
    },
    changevcode_finished: function(d) {
        if (d.status == "success") {
            var vcodepath = d.d;
            this.context.loginQunar.find("img[tag=changevcode]").attr("src", vcodepath);
        }
    },
    msgPopclose: function(e) {
        this.qrOpened = false;
        this._closepopup();
    },
    searchorderdetail: function(tpl) {
        var oid = tpl.attr("oid");
        var cid = tpl.attr("cid");
        var status = tpl.attr("status");
        var checkindate = tpl.attr("checkindate");
        var daterange = this.transform.getdaterange();
        var inrange = 0;
        var celldata = {
            "row": -1,
            "col": -1,
            "roomid": '',
            "gid": '',
            "setid": '',
            "cid": ''
        };
        var oid = tpl.attr("oid");
        var cid = tpl.attr("cid");
        if (checkindate <= daterange.enddate && checkindate >= daterange.fromdate) {
            var type = "order";
            var id = oid;
            if (!M.isEmpty(cid) && cid != 0) {
                type = "checkin";
                id = cid;
            }
            celldata = this.transform.getcelldatabydateandid(checkindate, id, type);
        } else {
            celldata.oid = oid;
            celldata.cid = cid;
        }
        celldata.checkindate = checkindate;
        if (status == 0) {
            this._searcheditorder(tpl, celldata, oid);
        } else if (status == 1) {
            this._searcheditcheckorder(tpl, celldata, cid);
        } else {
            this._serachdelorder(tpl);
        }
    },
    _serachdelorder: function(tpl) {
        this.search_tpl = tpl;
        if (this.canvisitlog == 0) {
            M.confirmmessage("该订单已被删除", this._cancleseelog.toEventHandler(this), "关闭");
        } else {
            M.confirm("该订单已被删除", this._showorderlog.toEventHandler(this), this._cancleseelog.toEventHandler(this), "查看日志", "关闭");
        }
    },
    _showorderlog: function() {
        M.closeMessage();
        this.context.submitlayer.show();
        var uniqid = this.search_tpl.attr("uniqid");
        var status = 0;
        var oid = this.search_tpl.attr("oid");
        var cid = this.search_tpl.attr("cid");
        if (!M.isEmpty(cid) && cid != 0) {
            status = 1;
        }
        var orderstatus = this.search_tpl.attr("status");
        M._getjson("/Log/getOrderLog", {
            "uniqid": uniqid,
            "status": status,
            "orderstatus": orderstatus
        },
        this._showorderlog_finished.toEventHandler(this));
    },
    _showorderlog_finished: function(d) {
        $("a[tag=showlog]").removeClass('btn-orderhistory-loading').html('');
        this.context.submitlayer.hide();
        if (d.status == "success") {
            var list = d.list;
            var html = '';
            if (list.length == 0 || M.isEmpty(list)) {
                M.error("该订单暂时没有相关历史记录，请进入日志频道查看。");
                return;
            }
            var status = d.req.status;
            var orderlist = '';
            var orderstatus = d.req.orderstatus;
            if (!M.isEmpty(orderstatus) && orderstatus == -1) {
                orderlist = d.orderlist;
            } else {
                if (status == 0) {
                    orderlist = this.temporderdetail.orderset.orders;
                } else {
                    orderlist = this.tempcheckdetail.checkinset.orders;
                }
            }
            for (var j = 0; j < orderlist.length; j++) {
                var order = orderlist[j];
                if (M.isEmpty(order.checkindate)) {
                    var checkintime = M.strtotime(order.d);
                } else {
                    var checkintime = M.strtotime(order.checkindate);
                }
                var checkindate = M.timeformat(checkintime, 'm/d');
                html += '<p>' + order.roomname + ',' + checkindate + '入住,' + order.nights + '晚,¥' + order.totalprice;
                if (order.status == 0) {
                    html += ',[已删除]';
                } else {
                    if (status == 1) {
                        html += ',[已入住]';
                    }
                }
                html += '</p>';
            }
            this.context.orderlogform.children().find("div[tag=ordermsg]").html(html);
            this.context.orderlogform.children().find("div[tag=log]").remove();
            var tpl = this.context.orderlogform.children().find("div[tag=tpl]");
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var log_tpl = tpl.clone(true).attr("tag", "log").show();
                log_tpl.children("div[tag=date]").html(item.date);
                var loglist = item.log;
                for (var k = 0; k < loglist.length; k++) {
                    var log_html = this.context.orderlogform.children("div[tag=logdetail_tpl]").clone(true).show();
                    var l = loglist[k];
                    log_html.children("div").children("span[tag=date]").html(l.time);
                    log_html.children("div").children("span").children("span[tag=username]").html(l.username);
                    log_html.children("div").children("span").children("span[tag=ua]").html(l.ua);
                    l.detail = l.detail.replace(/\n/ig, "<br/>");
                    log_html.children("div[tag=content]").children("p").html(l.detail);
                    log_tpl.append(log_html);
                }
                tpl.before(log_tpl);
            }
            M.Popup(this.context.orderlogform, {
                "hideclass": "modal orderhistory fade",
                "showclass": "modal orderhistory fade in",
                "dragable": true
            });
        } else {
            var uniqid = d.req.uniqid;
            if (M.isEmpty(uniqid)) {
                M.error("该订单暂时没有相关历史记录，请进入日志频道查看。");
            } else {
                M.error("网络错误");
            }
        }
    },
    _cancleseelog: function() {
        M.closeMessage();
    },
    _searcheditorder: function(tpl, celldata, oid) {
        var rid = celldata.roomid;
        var cols = celldata.col;
        var row = celldata.row;
        var data = {
            'oid': oid,
            "rid": rid,
            "checkindate": celldata.checkindate
        };
        this.object.order.doeditorder(data);
    },
    _searcheditcheckorder: function(tpl, celldata, gid) {
        var rid = celldata.roomid;
        var cid = celldata.cid;
        var setid = celldata.setid;
        var cols = celldata.col;
        var row = celldata.row;
        var data = {
            "gid": gid,
            "cid": cid,
            "rid": rid,
            "setid": setid
        };
        this.object.order.doeditcheckingroup(data);
    },
    body_click: function(e) {
        var ele = M.EventEle(e);
        var style = ele.attr("tag");
        var id = ele.attr("id");
        if (!M.isEmpty(id) && id != 'hotelpoints') {
            this.context.pointTips.hide();
        }
        tpl = ele.parents("div[id=hotelpoints]");
        if (tpl.length == 0) {
            if (!M.isEmpty(id)) {
                if (id != 'hotelpoints') {
                    this.context.pointTips.hide();
                }
            } else {
                this.context.pointTips.hide();
            }
        }
    },
    showroomthumb_click: function() {
        var d = this.context.innhiddendata.attr("d");
        window.open("/Public/roomthumb?d=" + d);
    },
    warnota_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'closebtn') {
            this.context.warnota.css("display", "none");
        }
    },
    editcheck_change: function(e) {
        var style = this.context.inroom.children("option:selected").attr("color");
        this.context.c_hiddencell.attr("color", style);
        var colorfield = this.context.editcheck.children(".modal-body").find('li[tag=ordercolor]');
        var selected = colorfield.children("span[ison=1]");
        selected.attr('ison', "0");
        selected.attr("class", selected.attr("val"));
        if (style == 'ofreshgreen') {
            var first = colorfield.children("span:first");
            var flag = first.is(':visible');
            if (!flag) {
                var first = colorfield.children().eq(1);
            }
        } else {
            var first = colorfield.children("span[class=" + style + "]");
        }
        first.attr("ison", "1");
        first.attr("class", first.attr("val") + " checked");
    },
    hightcol: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "setcleanstatus":
            this.setcleanstatus(ele);
            break
        default:
            this.transform.hightcol(e);
            break;
        }
    },
    setcleanstatus: function(ele) {
        var roomid = ele.attr("rid");
        var innid = this.context.roomtype.attr("innid");
        var status = ele.attr("status");
        var data = {
            "innid": innid,
            "roomid": roomid,
            "status": status
        };
        M._getjson("/book/changeroomcleanstatus", data, this.changeroomcleanstatus_finished.toEventHandler(this));
    },
    changeroomcleanstatus_finished: function(d) {
        if (d.status == "success") {
            var status = d.roomcleanstatus;
            var rid = d.req.roomid;
            var target = this.context.roomtype.find("td[rid=" + rid + "]").find("i");
            target.attr("status", status);
            if (status == 1) {
                target.removeClass("clean-in").attr("title", "设为脏房");
            } else {
                target.addClass("clean-in").attr("title", "设为干净房");
            }
        } else {
            M.error(d.msg);
        }
    },
    hightrow: function(e) {
        this.transform.hightrow(e);
    },
    init_datepickerevent: function() {
        var highlight = this.context.pickerarea.children("table").find("div");
        highlight.bind("mousemove", this.mousemovechange.toEventHandler(this));
        highlight.bind("mouseleave", this.mouseleavechange.toEventHandler(this));
    },
    ordertooltip_mouselevel: function() {
        this.context.ordertooltip.hide();
    },
    main_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'datedesc' || t == 'yeardesc' || t == 'range') {
            return;
        }
        var display = this.context.selecttime.css('display');
        if (display == 'block') {
            this.context.selecttime.hide();
        }
        return;
    },
    onselect: function(a) {
        var fromdate = a;
        var enddate = a;
        var formtime = M.strtotime(fromdate);
        this.context.mainpicker.selectday(fromdate, enddate);
        this._pagedesc();
        this._getroomstatus();
        this.init_datepickerevent();
        this.transform.expand_room();
        this.context.selecttime.hide();
        var width = this.transform._getorderwidth();
        var css = this.context.roomlist.children("tbody").children("tr").children("td[tag=watertotal]").css("display");
        this.context.pickerarea.children("table").children("tbody").children("tr").children("td[tag=total]").css("display", css).children("div");
        this.context.pickerarea.children("table").children("tbody").children("tr").children("td[tag=day]").children("div").css("width", width);
        this.jump_order = {
            roomlist: [],
            daylist: [],
            datelist: []
        };
    },
    mousemovechange: function(e) {
        var ele = M.EventEle(e);
        if (ele[0].tagName != 'TD') {
            var target = ele.parents("td");
        } else {
            var target = ele;
        }
        var idx = target.attr("idx");
        var i = target.parent().attr("i");
        var sta = ele.parent().attr("sta");
        this.context.roomtype.children("table").children("tbody").children("tr").children("td").removeClass("on");
        this.context.pickerdate.children("table").children("tbody").children("tr").children("td").removeClass('on');
        this.context.pickerarea.children("table").children("tbody").children("tr").children("td").children("div").children("div").removeClass("olink");
        if (M.isEmpty(sta) || sta == "unordered") {
            if (!M.isEmpty(i) && !M.isEmpty(idx)) {
                var room = this.transform.getcellbycoordinate('', idx);
                var date = this.transform.getcellbycoordinate(i, '');
                room.addClass("on");
                date.children().addClass("on");
            }
        } else {
            var setid = ele.parents("td").children("div").attr("setid");
            if (sta == "ordered") {
                var targetlist = this.context.pickerarea.children("table").children("tbody").children("tr").children("td[sta=" + sta + "]").children("div[setid=" + setid + "]");
                if (targetlist.length > 1) {
                    targetlist.children("div").addClass("olink");
                }
            } else {
                this.context.pickerarea.children("table").children("tbody").children("tr").children("td[sta=checkedout]").children("div[setid=" + setid + "]").children("div").addClass("olink");
                this.context.pickerarea.children("table").children("tbody").children("tr").children("td[sta=checkedin]").children("div[setid=" + setid + "]").children("div").addClass("olink");
            }
            this.transform.enlargeordersize(ele.parents("td"));
        }
        this._showordertip(ele, e);
        var t = ele.parent().attr("tag");
        if (t == 'total') return;
    },
    _showordertip: function(ele, e) {
        if (this.inf.ov != '1' || this.inf.tp != '1') {
            return;
        }
        if (ele[0].tagName != 'td') {
            ele = ele.parents('td');
        }
        var offset = ele.offset();
        if (M.isEmpty(offset)) {
            return;
        }
        var i = ele.parent().attr('i');
        var idx = ele.attr("idx");
        if (this.target_movearea.idx == idx && this.target_movearea.i == i) {
            return;
        } else {
            this.target_movearea.idx = idx;
            this.target_movearea.i = i;
        }
        var footoffset = this.context.footer.offset();
        var orderwidth = this.transform._getorderwidth();
        var width = $(window).width();
        var height = $(window).height();
        var sta = ele.attr("sta");
        var bottom = 'auto';
        var right = 'auto';
        var left = 'auto';
        var top = "auto";
        if (M.isEmpty(sta) || sta == "unordered") {
            if (width - e.clientX < 200) {
                right = width - e.clientX;
            } else {
                left = e.clientX + 10;
            }
            if (footoffset.top - e.clientY < 200) {
                bottom = height - e.clientY;
            } else {
                top = e.clientY + 20;
            }
            var msg = ele.attr("msg");
            if (M.isEmpty(msg)) {
                var data = this.transform.getdata_bycoordinate(i, idx);
                msg = data.roomtypename + "-" + data.roomname + ",¥" + data.price;
                if (M.isEmpty(msg) || data.price == 0) {
                    return;
                }
                ele.attr("price", data.price).attr("msg", msg);
            }
            var html = '<p>' + msg + '</p>';
        } else {
            if (sta == "ordered") {
                var key_tip = ele.children("div").attr("oid") + "ordered";
            } else if (sta == 'checkedin') {
                var key_tip = ele.children("div").attr("cid") + "checkedin";
            } else if (sta == 'checkedout') {
                var key_tip = ele.children("div").attr("cid") + "checkedout";
            }
            var msg = this.tooltipmsg[key_tip];
            if (M.isEmpty(msg)) {
                return;
            }
            if (width - e.clientX < 260) {
                right = width - e.clientX;
            } else {
                left = e.clientX + 10
            }
            if (footoffset.top - e.clientY < 200) {
                bottom = height - e.clientY + 10;
            } else {
                top = e.clientY + 20;
            }
            var html = '<p>' + msg + '</p>';
        }
        this.context.ordertooltip.html(html);
        this.context.ordertooltip.css({
            "top": top,
            "bottom": bottom,
            "right": right,
            "left": left
        }).show();
    },
    mouseleavechange: function(e) {
        var ele = M.EventEle(e);
        var sta = ele.parent().attr("sta");
        this.context.pickerarea.children("table").children("tbody").children("tr").children("td").children("div").children("div").removeClass("olink");
        this.context.roomtype.children("table").children("tbody").children("tr").children("td").removeClass("on");
        this.context.pickerdate.children("table").children("tbody").children("tr").children("td").removeClass('on');
        if (!M.isEmpty(sta) && sta != "unordered") {
            this.transform.resizeorder(ele.parents("td"));
        }
        this.target_movearea.idx = -1;
        this.target_movearea.i = -1;
        this.context.ordertooltip.hide();
    },
    savebtn_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'savetime') {
            this.savebtn();
        }
    },
    savebtn: function() {
        var selecttime = this.context.selectdate.val();
        var startdate = M.strtotime(selecttime);
        startdate.setDate(startdate.getDate() + 30);
        startdate = M.timeformat(startdate);
        this.context.mainpicker.currentday(selecttime, startdate);
        this._pagedesc();
        this._getroomstatus();
        M.CloseLast();
    },
    close_click: function(e) {
        M.CloseLast();
    },
    newrow: function(newindex) {
        this.context.mainpicker.newrow(newindex);
    },
    removerow: function(index) {
        this.context.mainpicker.removerow(index);
    },
    nights_change: function(e) {
        this.showorderprice(this.contex.orderform);
    },
    convertprice: function(price) {
        var nprice = Number(price);
        nprice = nprice.toFixed(2);
        nprice = Number(nprice);
        return nprice;
    },
    _pagedesc: function() {
        var btime = this.context.mainpicker.getbegindate();
        var etime = this.context.mainpicker.getenddate();
        var datedesc = this.timeformat(btime, "m/d") + "~" + this.timeformat(etime, "m/d");
        var year = this.timeformat(etime, "Y");
        this.context.page.children("div[tag=range]").children("p[tag=datedesc]").html(datedesc).next().html(year);
    },
    showpush: function(pushlist) {
        var innid = this.context.roomtype.attr("innid");
        for (var i = 0; i < pushlist.length; i++) {
            var item = pushlist[i];
            var orderlist = item.orderlist;
            var ordersetid = item.ordersetid;
            if (!M.isEmpty(orderlist)) {
                this._clearitembyset(ordersetid, "ordered");
                for (var j = 0; j < orderlist.length; j++) {
                    var order = orderlist[j];
                    var itemdate = this._getitemdate();
                    if (innid == order.innid) {
                        this._showitem(order, itemdate);
                    }
                }
            } else if (item.showorder == 1 && !M.isEmpty(ordersetid)) {
                this._clearitembyset(ordersetid, "ordered");
            }
            if (item.push == 6) {
                this.servicemsgbox(item);
            } else {
                this._showpush(item);
            }
        }
        this.calc_leftrooms();
    },
    _showservicemsg: function(item) {
        var mytpl = null;
        if (item.data.ordersetid == '1') {
            mytpl = this.context.otamsgbox.children("div[tag=ctripservicesuccess]").clone(true).show().attr('tag', 'otamsg');
        } else if (item.data.ordersetid == '2') {
            mytpl = this.context.otamsgbox.children("div[tag=ctripservicelogin]").clone(true).show().attr('tag', 'otamsg');
            mytpl.find(".qunarLoginBtn").attr('data-innid', item.data.other);
        } else {
            mytpl = this.context.otamsgbox.children("div[tag=ctripservicefail]").clone(true).show().attr('tag', 'otamsg');
        }
        mytpl.attr("orderid", item.id);
        mytpl.children("p[tag=roominfo]").html(item.content);
        mytpl.find("a[tag=otanextmsg]").attr("pid", item.id);
        this.context.otamsgbox.append(mytpl);
        setTimeout('clealtpl(' + item.id + ')', 60000);
    },
    _showpush: function(item) {
        if (M.isEmpty(item.pid)) {
            return;
        }
        if (item.pushfrom == "21") {
            var data = item.data;
            if (data.roomstatus == 1) {
                this.context.roomlist.find("i[rid=" + item.data.roomid + "]").attr('status', '1').removeClass("clean-in");
                if (item['createon']) item.msg = item.msg + '(' + M.timeformat(M.strtotime(item['createon']), 'Y-m-d h:i') + ')';
            } else if (data.roomstatus == 0) {
                this.context.roomlist.find("i[rid=" + item.data.roomid + "]").attr('status', '0').addClass("clean-in");
                item.msg = item.msg + '(' + M.timeformat(M.strtotime(item['createon']), 'Y-m-d h:i') + ')';
            }
            var uid = this.context.uid.val();
            if (data.refuseuid == uid) {
                return;
            }
        }
        var tpl = this.context.otamsgbox.children("div[tag=tpl_push]").clone(true).show().attr('tag', 'otamsg').attr("orderid", item.pid);
        if (item.showconfirmtime == 1) {
            var confirmtime = M.strtotime(item.createon);
            confirmdate = M.timeformat(confirmtime, 'm/d h:i:s');
            item.title = item.title + '(确认时间' + confirmdate + ')';
        }
        tpl.children("p[tag=title]").html(item.title);
        if (item.pushfrom == "9") {
            tpl.children("p[tag=title]").addClass("bold green t14");
        }
        if (item.pushfrom == '7') {
            tpl.children("p[tag=title]").addClass("bold t14");
        }
        if (!M.isEmpty(item.msg2)) {
            tpl.children("p[tag=msg2]").html(item.msg2);
        }
        tpl.children("p[tag=msg]").html(item.msg);
        tpl.children("p[tag=other]").html(item.other);
        tpl.children().find("a[tag=otanextmsg]").attr("pid", item.pid);
        this.context.otamsgbox.append(tpl);
        var id = item.pid;
        this.context.otamsgbox.show();
        if (!M.isEmpty(item.autohide) && item.autohide == 1) {
            setTimeout('clealtpl(' + id + ')', 60000);
        }
    },
    _clearelongorder: function(preordersetid) {
        if (M.isEmpty(preordersetid)) {
            return;
        }
        this._clearitembyset(preordersetid, "ordered");
    },
    servicemsgbox: function(servicelist) {
        for (var i = 0; i < servicelist.length; i++) {
            var item = servicelist[i];
            var mytpl = null;
            if (item.data.ordersetid == '1') {
                mytpl = this.context.otamsgbox.children("div[tag=ctripservicesuccess]").clone(true).show().attr('tag', 'otamsg');
            } else if (item.data.ordersetid == '2') {
                mytpl = this.context.otamsgbox.children("div[tag=ctripservicelogin]").clone(true).show().attr('tag', 'otamsg');
                mytpl.find(".qunarLoginBtn").attr('data-innid', item.data.other);
            } else {
                mytpl = this.context.otamsgbox.children("div[tag=ctripservicefail]").clone(true).show().attr('tag', 'otamsg');
            }
            mytpl.attr("orderid", item.id);
            mytpl.children("p[tag=roominfo]").html(item.content);
            mytpl.find("a[tag=otanextmsg]").attr("pid", item.id);
            this.context.otamsgbox.append(mytpl);
            setTimeout('clealtpl(' + item.id + ')', 60000);
        }
        this.context.otamsgbox.show();
    },
    qunarmsgbox: function(qunarlist) {
        for (var i = 0; i < qunarlist.length; i++) {
            var item = qunarlist[i];
            var mytpl = null;
            if (item.data.ordersetid == '1') {
                mytpl = this.context.otamsgbox.children("div[tag=qunarservicesuccess]").clone(true).show().attr('tag', 'otamsg');
                mytpl.children("p[tag=roominfo]").html(item.content);
            } else if (item.data.ordersetid == '2') {
                mytpl = this.context.otamsgbox.children("div[tag=qunarservicelogin]").clone(true).show().attr('tag', 'otamsg');
                mytpl.find(".qunarLoginBtn").attr('data-innid', item.data.other);
            } else {
                mytpl = this.context.otamsgbox.children("div[tag=qunarservicefail]").clone(true).show().attr('tag', 'otamsg');
                mytpl.children("p[tag=roominfo]").html(item.content);
            }
            mytpl.attr("orderid", item.id);
            mytpl.find("a[tag=otanextmsg]").attr("pid", item.id);
            this.context.otamsgbox.append(mytpl);
            setTimeout('clealtpl(' + item.id + ')', 60000);
        }
        this.context.otamsgbox.show();
    },
    ysymsgbox: function(cashierlist, pid) {
        for (var i = 0; i < cashierlist.length; i++) {
            var cashier = cashierlist[i];
            pid = cashier.pid;
            this.context.paymentmsgbox.find("p[tag=success]").hide();
            this.context.paymentmsgbox.find("p[tag=fail]").hide();
            var tpl = this.context.paymentmsgbox.clone(true).show().attr('tag', 'otamsg').attr("orderid", pid);;
            tpl.find("p[tag=title]").html(cashier.title);
            tpl.find("p[tag=msg]").text(cashier.msg);
            tpl.find("a[tag=otanextmsg]").attr("pid", pid);
            this.context.otamsgbox.show().append(tpl);
            data = cashier.order;
            this._showitems(data);
            setTimeout('clealtpl(' + pid + ')', 60000);
        }
    },
    shownextotamsg: function(e) {
        var ele = M.EventEle(e);
        var pid = ele.attr("pid");
        var tag = ele.attr("tag");
        switch (tag) {
        case 'otanextmsg':
            this.otanextmsg(ele);
            break;
        case 'remindread':
            this.remindread(ele);
            break;
        }
    },
    remindread: function(ele) {
        var rid = ele.parent().parent("div[tag=otamsg]").attr("orderid");
        ele.parent().parent("div[tag=otamsg]").slideUp("normal",
        function() {
            ele.parent().parent("div[tag=otamsg]").remove();
        });
        M._getjson("/Book/readremind", {
            "rid": rid
        },
        this.shownextotamsg_finished.toEventHandler(this));
    },
    otanextmsg: function(ele) {
        var pid = ele.attr("pid");
        ele.parent().parent("div[tag=otamsg]").slideUp("normal",
        function() {
            ele.parent().parent("div[tag=otamsg]").remove();
        });
        var cachepush_noticenum = parseInt(this.context.pushmessage.children().text()) - 1;
        if (cachepush_noticenum == 0) {
            this.context.pushmessage.children("i").hide();
        }
        this.context.pushmessage.children().html(cachepush_noticenum);
        M._getjson("/Book/readpush", {
            "pid": pid
        },
        this.shownextotamsg_finished.toEventHandler(this));
    },
    shownextotamsg_finished: function(d) {
        if (M.isEmpty(d)) {
            alert("网络错误");
        }
    },
    _getinnnamebyinnid: function(innid) {
        return this.context.footer.find("li[innid=" + innid + "]").children("a").text();
    },
    gettujiamsginfo: function(data, item) {
        data.phone = '';
        if (!M.isEmpty(item.phone)) {
            data.phone = "，" + item.phone;
        }
        if (!M.isEmpty(item.guestphone)) {
            data.phone = "，" + item.guestphone;
        }
        var confirmtime = M.strtotime(data.fromdate);
        data.confirmdate = M.timeformat(confirmtime, 'm/d');
        return data;
    },
    getmsginfo: function(data, item) {
        if (!M.isEmpty(item.phone)) {
            data.phone = "，" + item.phone;
        }
        if (!M.isEmpty(data.arrivetimelate)) {
            var arrvetime = M.strtotime(data.arrivetimelate);
            data.arrivedate = M.timeformat(arrvetime, 'm/d h:i');
        }
        var confirmtime = M.strtotime(data.fromdate);
        data.confirmdate = M.timeformat(confirmtime, 'm/d');
        return data;
    },
    page_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "prev":
            this.context.mainpicker.premonth();
            this.init_datepickerevent();
            this._pagedesc();
            this._getroomstatus();
            this.transform.expand_room();
            var date = this.context.mainpicker.getbegindate();
            var datestr = this.timeformat(date, 'Y-m-d');
            this.context.selecttime.datepicker("setDate", date);
            this.jump_order = {
                roomlist: [],
                daylist: [],
                datelist: []
            };
            break;
        case "next":
            this.context.mainpicker.nextmonth();
            this.init_datepickerevent();
            this._pagedesc();
            this._getroomstatus();
            this.transform.expand_room();
            var date = this.context.mainpicker.getbegindate();
            var datestr = this.timeformat(date, 'm/d/Y');
            this.context.selecttime.datepicker("setDate", date);
            this.jump_order = {
                roomlist: [],
                daylist: [],
                datelist: []
            };
            break;
        case "datedesc":
        case "yeardesc":
        case "range":
            var date = this.context.mainpicker.getbegindate();
            var datestr = this.timeformat(date, 'm/d/Y');
            this.context.selecttime.datepicker("setDate", date);
            this.context.selecttime.show();
            break;
        }
    },
    colse_form: function() {
        this.context.multiguesttip.attr("status", 0).hide();
        this.context.findetailform.hide();
        this._closepopup();
    },
    _toggle: function(ele, style) {
        var select = ele.attr("class");
        if (!M.isEmpty(select) && (select.indexOf(style) >= 0 || select == style)) {
            ele.removeClass(style);
        } else {
            ele.addClass(style);
        }
    },
    msgtpl_change: function() {
        var tplid = this.context.msgtpl.val();
        var tpl = this.context.msgtpl.parent().find("input[type=hidden][tplid=" + tplid + "]").val();
        this.context.msgform.children(".modal-body").find(".cntlist").children("li[tag=msg]").children("textarea").val(tpl);
        this.msg_keydown();
    },
    msg_keydown: function(e) {
        var msg = M.getVal(this.context.msg);
        var len = msg.length;
        var maxlen = parseInt(this.context.leftwords.attr("val"));
        this.context.leftwords.html(len);
    },
    _getpickercell: function(row, col) {
        var target = this.context.pickertbody.children("tr[i=" + row + "]").children("td[idx=" + col + "]:first");
        return $(target);
    },
    _getpickercells: function(setid, type) {
        if (type == "checkedin" || type == "checkedout") {
            var target = this.context.pickertbody.children("tr").children("td[setid=" + setid + "][sta!=ordered]");
            return target;
        } else {
            var target = this.context.pickertbody.children("tr").children("td[setid=" + setid + "][sta=ordered]");
            return target;
        }
    },
    pickervalue: function() {
        var date = this.context.mainpicker.getcurrentdate();
        var str = date.getFullYear() + "年" + (date.getMonth() + 1) + "月";
        return str;
    },
    _getroomstatus: function() {
        var selecttime = this.context.selectdate.val();
        var btime = this.context.mainpicker.getbegindate();
        var etime = this.context.mainpicker.getrealenddate();
        var fromdate = this.timeformat(btime);
        var enddate = this.timeformat(etime);
        var addcolum = this.addcolumn;
        this.context.submitlayer.show();
        M._getjson("/Book/getstatus", {
            "fromdate": fromdate,
            "enddate": enddate,
            "watistics": addcolum
        },
        this._getroomstatus_finished.toEventHandler(this));
    },
    _getroomstatus_finished: function(d) {
        this.context.submitlayer.hide();
        if (d.status == "success") {
            var rstatus = d.data.roomstatus;
            this.roomstatus = rstatus;
            this.canmoveorder = 0;
            this.initpickerstatus();
            if (this.ordermanage == 1) {
                setTimeout(this.sortorders.toEventHandler(this), 10);
                this.canmoveorder = 1;
            } else {
                var tpl = this.context.pickerarea.children("table").children("tbody").children("tr");
                tpl.children("td").children("div").children("div").children().removeClass("sortorder");
            }
            if (this.isfirst == 0) {
                this.context.pickerdate.children().find("td.today").children("b").click();
                this.isfirst = 1;
            }
        }
        this.initpickermousemove();
        setTimeout(this.getallrooms.toEventHandler(this), 2000);
    },
    getallrooms: function() {
        var btime = this.context.mainpicker.getbegindate();
        var etime = this.context.mainpicker.getrealenddate();
        var fromdate = this.timeformat(btime);
        var enddate = this.timeformat(etime);
        var innid = this.context.roomtype.attr("innid");
        if (M.isEmpty(innid)) {
            return;
        }
        if (M.isEmpty(fromdate)) {
            return;
        }
        if (M.isEmpty(enddate)) {
            return;
        }
        M._getjson("/Book/getroompickerlist", {
            "innid": innid,
            "fromdate": fromdate,
            "enddate": enddate
        },
        this._getallrooms_finished.toEventHandler(this));
    },
    _getallrooms_finished: function(d) {
        if (d.status == 'success') {
            var roomtypelist = d.data;
            this.transform._setpricelist(roomtypelist);
        }
    },
    print_array: function(arr) {
        for (var key in arr) {
            if (typeof(arr[key]) == 'array' || typeof(arr[key]) == 'object') {
                print_array(arr[key]);
            } else {
                document.write(key + ' = ' + arr[key] + '<br>');
            }
        }
    },
    sortorders: function() {
        if (this.ordermanage != 1) {
            var tpl = this.context.pickerarea.children("table").children("tbody").children("tr");
            tpl.children("td").children("div").children("div").children().removeClass("sortorder");
            return;
        }
        var tpl = this.context.pickerarea.children("table").children("tbody").children("tr");
        tpl.children("td[sta=checkedout]").children("div").children("div").children().removeClass("sortorder");
        tpl.children("td[tag=day]").children().sortable({
            connectWith: "div",
            handle: ".sortorder",
            tolerance: "pointer",
            disabled: false,
            receive: this.receive_handle.toEventHandler(this),
            start: this.start_handle.toEventHandler(this),
            stop: this.stop_handle.toEventHandler(this)
        }).disableSelection();
    },
    disablesortorders: function() {
        var tpl = this.context.pickerarea.children("table").children("tbody").children("tr");
        tpl.children("td").children().sortable({
            disabled: true
        });
    },
    receive_handle: function(event, ui) {
        var target = $(event.target);
        var mappingg = this.context.page.children('div[tag=prev]').attr('val');
        var hotelf = this.context.page.children('div[tag=prev]').attr('hot');
        target.removeClass("date-day").addClass("date-have");
        var pretd_idx = this.sorttable.pretd_idx;
        var pretr_i = this.sorttable.pretr_i;
        var target_sta = target.parent().attr("sta");
        var target_setid = target.parent().attr("setid");
        this.sorttable.target_setid = target_setid;
        this.sorttable.target_sta = target_sta;
        var target_oid = target.attr("oid");
        var target_cid = target.attr("cid");
        var from = target.attr("from");
        this.sorttable.target_rows = 0;
        var bookallroom = target.children("div[setid=" + target_setid + "]").attr("bookallroom");
        if (bookallroom == 1 || this.sorttable.bookallroom == 1) {
            M.error("包场订单不允许拖动换房");
            this.context.pickerarea.children("table").children("tbody").children("tr").children("td[tag=day]").children().sortable("cancel");
            return;
        }
        var rid = this.context.roomlist.find('tbody').children('tr').children('td').attr('rid');
        if (this.sorttable.sta == 'checkedout' || target_sta == 'checkedout') {
            M.error("已退房的订单不允许换房");
            this.context.pickerarea.children("table").children("tbody").children("tr").children("td[tag=day]").children().sortable("cancel");
        } else {
            canshifted = this.canshifted(target, this.sorttable.pre_rows, {
                "oid": this.sorttable.oid,
                "cid": this.sorttable.cid
            });
            if (canshifted) {
                var length = target.children("div").length;
                if (length > 1) {
                    if (!M.isEmpty(this.sorttable.oid)) {
                        var tpl = target.children().not("div[oid=" + this.sorttable.oid + "]");
                    } else {
                        var tpl = target.children().not("div[cid=" + this.sorttable.cid + "]");
                    }
                    var rows = target.parent().attr("n");
                    this.sorttable.target_rows = rows;
                    if (rows > this.sorttable.pre_rows) {
                        var pre_target = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + pretr_i + "]").children("td[idx=" + pretd_idx + "]").children("div");
                        canshifted = this.canshifted(pre_target, rows, {
                            "oid": target_oid,
                            "cid": target_cid
                        });
                    } else {
                        canshifted = true;
                    }
                }
            }
            if (canshifted) {
                if (!M.isEmpty(this.sorttable.oid)) {
                    var tpl = target.children().not("div[oid=" + this.sorttable.oid + "]");
                    target.children().not("div[oid=" + this.sorttable.oid + "]").remove();
                } else {
                    var tpl = target.children().not("div[cid=" + this.sorttable.cid + "]");
                    target.children().not("div[cid=" + this.sorttable.cid + "]").remove();
                }
                this.transform.resizeorder(target);
                var pre_tpl = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + pretr_i + "]").children("td[idx=" + pretd_idx + "]");
                if (!M.isEmpty(target_setid)) {
                    pre_tpl.children().removeClass("date-day").addClass("date-have").html(tpl);
                    this.transform.resizeorder(pre_tpl);
                    this.sorttable.target_tpl = tpl;
                    var target_id = tpl.attr("oid");
                    if (M.isEmpty(target_id)) {
                        target_id = tpl.attr("cid");
                    }
                    this.sorttable.target_id = target_id;
                }
                var target_idx = target.parent().attr("idx");
                var target_i = target.parent().parent().attr("i");
                this.sorttable.target_i = target_i;
                this.sorttable.target_idx = target_idx;
                var msg = "是否进行换房";
                this.context.ordertooltip.hide();
                M.confirm(msg, this.save_moveorders.toEventHandler(this), this.cancle_moveorders.toEventHandler(this));
            } else {
                if (this.inf.ov == '1' && this.inf.tp == '1') {
                    this.sorttable.pre_tpl.tooltip({
                        disabled: false
                    });
                }
                this.context.pickerarea.children("table").children("tbody").children("tr").children("td[tag=day]").children().sortable("cancel");
                M.error("剩余房间不够");
            }
        }
    },
    save_moveorders: function() {
        this.disablesortorders();
        M.closeMessage();
        this.context.submitlayer.show();
        if (M.isEmpty(this.sorttable.oid)) {
            var orderid = this.sorttable.cid;
        } else {
            var orderid = this.sorttable.oid;
        }
        var innid = this.context.roomtype.attr("innid");
        var data = {
            "orderid": orderid,
            "ordertype": this.sorttable.sta,
            "innid": innid
        };
        var target_idx = this.sorttable.target_idx;
        var target_i = this.sorttable.target_i;
        var target_setid = this.sorttable.target_setid;
        var target_tpl = this.sorttable.target_tpl;
        if (!M.isEmpty(target_setid) && this.sorttable.target_id != this.sorttable.orderid) {
            data.torderid = this.sorttable.target_id;
            data.tordertype = this.sorttable.target_sta;
        } else {
            var coordinatedata = this.transform.getdata_bycoordinate(target_i, target_idx, '');
            var roomid = coordinatedata.roomid;
            var date = coordinatedata.date;
            data.roomid = roomid;
            data.fromdate = date;
        }
        M._getjson("/Book/moveorder", data, this.shiftedorders_finished.toEventHandler(this));
    },
    cancle_moveorders: function() {
        M.closeMessage();
        this.revert_orders();
        M.success("操作已取消");
        this.sortorders();
    },
    revert_orders: function() {
        var target_id = this.sorttable.target_id;
        if (!M.isEmpty(target_id)) {
            var target = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + this.sorttable.target_i + "]").children("td[tag=day][idx=" + this.sorttable.target_idx + "]");
            target.children("div").html(this.sorttable.target_tpl);
            this.transform.resizeorder(target);
        }
        var pre = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + this.sorttable.pretr_i + "]").children("td[tag=day][idx=" + this.sorttable.pretd_idx + "]");
        pre.children("div").html(this.sorttable.pre_tpl);
        this.transform.resizeorder(pre);
    },
    shiftedorders_finished: function(d) {
        this.context.submitlayer.hide();
        if (d.status == 'success') {
            M.success("操作成功");
            var length = this.sorttable.pre_rows;
            if (typeof(this.sorttable.target_rows) != 'undefined' && this.sorttable.target_rows > length) {
                length = this.sorttable.target_rows;
            }
            this.clearitem(this.sorttable.target_idx, this.sorttable.target_i, this.sorttable.target_rows);
            this.clearitem(this.sorttable.pretd_idx, this.sorttable.pretr_i, length);
            var pre_data = d.before;
            var current_data = d.after;
            var itemdate = this._getitemdate();
            this._showitem(current_data, itemdate);
            if (!M.isEmpty(d.targetbefore)) {
                var targetbefor = d.targetbefore;
                var targetafter = d.targetafter;
                this._showitem(targetafter, itemdate);
            }
            this.calc_leftrooms();
        } else {
            if (M.isEmpty(d.msg)) {
                d.msg = '操作失败';
            }
            M.error(d.msg);
            this.revert_orders();
        }
        this.sortorders();
        this.transform.win_resize();
    },
    clearitem: function(col, row, length) {
        this.transform.clearitem(col, row, length);
        this.init_datepickerevent();
        this.sortorders();
    },
    canshifted: function(ele, rows, data) {
        return this.transform.canshiftedorders(ele, rows, data);
    },
    start_handle: function(event) {
        this.sorttable = {};
        this._clear_jumpselected();
        var tpl = $(event.target);
        this.sorttable.tpl = tpl.children().clone();
        var td_idx = tpl.parent().attr("idx");
        var tr_i = tpl.parent().parent().attr("i");
        var sta = tpl.parent().attr("sta");
        var setid = tpl.parent().attr("setid");
        var oid = tpl.children("div").attr("oid");
        var cid = tpl.children("div").attr("cid");
        var orderfrom = tpl.attr("from");
        var rows = tpl.parent().attr("n");
        this.sorttable.pre_tpl = tpl.children();
        tpl.children().tooltip({
            disabled: true
        });
        this.sorttable.bookallroom = tpl.children("div").attr("bookallroom");
        this.sorttable.orderfrom = orderfrom;
        this.sorttable.oid = oid;
        this.sorttable.cid = cid;
        this.sorttable.setid = setid;
        this.sorttable.sta = sta;
        this.sorttable.pre_rows = rows;
        this.sorttable.pretd_idx = td_idx;
        this.sorttable.pretr_i = tr_i;
    },
    stop_handle: function() {
        if (M.isEmpty(this.sorttable.target_i) && M.isEmpty(this.sorttable.target_idx)) {
            var pre = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + this.sorttable.pretr_i + "]").children("td[idx=" + this.sorttable.pretd_idx + "]");
            pre.children("div").children("div").tooltip({
                disabled: false
            });
        }
    },
    getrows: function(ele, type) {
        var oneheight = $(".date-day").css("height").replace("px", "");
        var height = ele.css("height").replace("px", "");
        var rows = Math.ceil(height / oneheight);
        return rows;
    },
    sorttable_receive: function(event) {
        var tpl = $(event.target);
    },
    checkmaxi: function(idx, i) {
        if (idx == this.sorttable.pretd_idx) {
            var maxi = this.sorttable.pre_rows * 1 + this.sorttable.pretr_i * 1 - 1;
            if (i > maxi) {
                return false;
            } else {
                return true;
            }
        } else {}
        return false;
    },
    _clearitem: function(row, cols) {
        var target = this._getpickercell(row, cols);
        var datehave = target.children(".date-have");
        var n = datehave.attr("n");
        var nights = parseInt(n);
        if (!M.isEmpty(target)) {
            var datehave = target.children(".date-have");
            if (datehave.length > 0) {
                var n = datehave.attr("n");
                var nights = parseInt(n);
                var html = '<div class="date-day"></div>';
                target.html(html);
                target.attr("sta", "").attr("setid", "");
                for (var j = 0; j < nights - 1; j++) {
                    target = target.parent().next().children("td[idx=" + cols + "]");
                    target.html(html).attr("sta", "");
                }
                this.init_datepickerevent();
            }
        }
        this.sortorders();
    },
    _clearitembyset: function(setid, type) {
        if (M.isEmpty(type)) type = "ordered";
        var targets = this._getpickercells(setid, type);
        this.transform._clearitembyset(targets, type);
        this.sortorders();
        this.init_datepickerevent();
    },
    _showitems: function(items) {
        var itemdate = this._getitemdate();
        if (!M.isEmpty(items)) {
            for (var i = 0; i < items.length; i++) {
                this._showitem(items[i], itemdate);
            }
        }
    },
    _showitem: function(item, itemdate) {
        var statuscss = {
            "checkedin": "date-day-checkedin",
            "checkedout": "date-day-checkedout",
            "ordered": "date-day-ordered"
        };
        if (typeof(item.status) != 'undefined' && item.status == 0) {
            return;
        }
        var tpl_divinfo = $.template(null, this.tpl_divinfo);
        var tpl_otherinfo = $.template(null, this.tpl_otherinfo);
        var tpl_nopay = this.tpl_nopay;
        var tpl_car = this.tpl_car;
        var tpl_checkedin = this.tpl_checkedin;
        var type = item.type;
        var d = item.d;
        var roomid = item.roomid;
        var nights = parseInt(item.nights);
        var arrivetime = item.arrivetime;
        if (!M.isEmpty(arrivetime)) {
            arrivetime = this.arrivetimedata[arrivetime];
        }
        var coordinate = this.transform.getcoordinate_bydata(d, roomid, '');
        var row = coordinate.date_i;
        var cols = coordinate.roomid_idx;
        var cols = M.isEmpty(cols) ? -1 : parseInt(cols);
        var d_date = M.strtotime(d);
        var e_date = new Date(d_date.getFullYear(), d_date.getMonth(), d_date.getDate() + parseInt(nights));
        var e_datestr = this.timeformat(e_date);
        var e_date_yes = new Date(d_date.getFullYear(), d_date.getMonth(), d_date.getDate() + parseInt(nights) - 1);
        var hidedays = 0;
        var isdaybeforeyes = false;
        if (e_datestr == itemdate.pickerbegindatestr && type == "checkedout") {}
        if (d_date < itemdate.pickerbegindate) {
            if (isdaybeforeyes) {
                row = 0;
                nights = 1;
            } else {
                if (this.transform.isreverse == 1) {
                    cols = itemdate.pickerbegincolindex;
                } else {
                    row = itemdate.pickerbegincolindex;
                }
                var date = M.strtotimeSetDefaultHour(d);
                var ts = itemdate.nowtime - date;
                var days = Math.floor(ts / (24 * 3600 * 1000));
                hidedays = days;
                nights = nights - days;
            }
            if (nights <= 0) {
                return;
            }
        }
        if (e_date_yes > itemdate.pickerenddate) {
            var ts = e_date_yes - itemdate.pickerenddate;
            var days = Math.floor(ts / (24 * 3600 * 1000));
            hidedays = days;
            nights = nights - days;
        }
        if (isNaN(row) || isNaN(cols)) {
            return;
        }
        row = parseInt(row);
        cols = parseInt(cols);
        if (row < 0 || cols < 0) {
            return;
        }
        var target = this._getpickercell(row, cols);
        if (target.attr('ut') == item.updateon) {}
        if (nights == 0) {
            return;
        }
        var width = nights * 81 - 6;
        if (this.reducedstate == 0) {
            var height = nights * 36 - 5;
        } else {
            var height = nights * 24 - 5;
        }
        var guestname = item.guestname;
        var channelname = this.channelname[item.channelcode];
        channelname = M.isEmpty(channelname) ? item.channelname: channelname;
        var setid = item.setid == "0" ? "": item.setid;
        var arrivedate = this.timeformat(d_date, "m/d");
        var needcar = "";
        if (type == "ordered") {
            needcar = item.needcar;
        } else {
            needcar = item.needcar2;
        }
        var oid = type == "ordered" ? item.id: "";
        var cid = type == "checkedin" || type == "checkedout" ? item.id: "";
        var css = statuscss[type];
        css = M.isEmpty(css) ? "date-day-ordered": css;
        if (!M.isEmpty(item.style)) {
            css += " " + item.style;
        }
        if (hidedays > 0) {
            css += " date-day-exceptive";
        }
        var info = {
            "css": css,
            "height": height,
            "width": width,
            "guestname": guestname,
            "channel": channelname,
            "need": needcar,
            "arrivedate": arrivedate,
            "nights": parseInt(item.nights)
        };
        var divinfo = $.tmpl(tpl_divinfo, info);
        if (nights > 1) {
            if (this.transform.isreverse != 1 && this.reducedstate == 0) {
                divinfo.children("div").append($.tmpl(tpl_otherinfo, info));
            }
        }
        var amount = parseInt(item.deposit);
        if (!M.isEmpty(item.appendmoney)) {
            amount = parseInt(item.appendmoney) + parseInt(item.deposit);
        }
        if (item.paystatus == 1) {
            amount = item.totalprice;
        }
        if (needcar == "1" && item.type != "checkedout" && this.plugin.needcar == 1 && this.reducedstate == 0) {
            divinfo.children("div").children(".demand").append($(tpl_car));
        }
        if (item.remind == 1 && item.type != "checkedout" && this.reducedstate == 0) {
            if (item.type == 'ordered' && needcar != 1) {
                divinfo.children("div").children(".demand").append(this.tpl_remind);
            } else if (item.type == 'checkedin' && needcar != 1) {
                divinfo.children("div").children(".demand").append(this.tpl_remind);
            }
        }
        if (amount <= 0 && this.reducedstate == 0) {
            divinfo.children("div").children(".demand").append($(tpl_nopay));
        }
        if (item.type == 'checkedin') {
            divinfo.children("div").append($(tpl_checkedin));
        }
        tpl_checkedout = this.tpl_checkout;
        if (item.type == 'checkedout') {
            divinfo.children("div").append($(tpl_checkedout));
        }
        if (item.orderfrom == 'gpbook') {
            item.bookallroom = 1;
        } else {
            item.bookallroom = 0;
        }
        target.html("").append(divinfo);
        divinfo.attr("uniqid", item.orderuniqid).attr("sta", type).attr("oid", oid).attr("from", item.orderfrom).attr("cid", cid).attr("gid", item.gid).attr("rid", roomid).attr("n", nights).attr("hidedays", hidedays).attr("setid", setid);
        divinfo.children("div").attr("oid", oid).attr("cid", cid).attr("setid", setid).attr("sta", type).attr("n", nights).attr("bookallroom", item.bookallroom);
        if (this.inf.ov == '1' && this.inf.tp == '1') {
            var showmsg = this._showtip(item);
            var key_tip = item.id + item.type;
            this.tooltipmsg[key_tip] = showmsg;
        }
        target.attr("sta", type);
        target.attr("n", nights);
        target.attr("hidedays", hidedays);
        target.attr("setid", setid);
        this.transform.changeorderstatus_moredays(target, nights, type, cols);
        this.transform.resizeorder(target);
        if (this.canmoveorder == 1) {
            var move_tpl = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + row + "]").children("td[idx=" + cols + "]");
            this.sortorders();
        }
    },
    _showtip: function(item) {
        var html = '';
        var indatetime = M.strtotime(item.indate);
        var inday = M.timeformat(indatetime, 'm/d');
        var roomtype = this.context.roomlist.children("tbody").children("tr").children("td[rid=" + item.roomid + "]").children("div").attr('title');
        var amount = parseInt(item.deposit);
        if (!M.isEmpty(item.appendmoney)) {
            amount = parseInt(item.appendmoney) + parseInt(item.deposit);
        }
        if (item.type != 'ordered') {
            if (!M.isEmpty(item.checkoutappendmoney)) {
                amount = amount + parseInt(item.checkoutappendmoney);
            }
            if (!M.isEmpty(item.returnmoney)) {
                amount = amount - parseInt(item.returnmoney);
            }
        }
        if (item.paystatus == 1) {
            if (M.isEmpty(amount) || amount == 0) {
                amount = item.totalprice;
            }
        }
        html += '<p>' + item.guestname + '&lt;' + item.channelname + '&gt' + item.phone + '<br />';
        html += item.roomname + "(" + item.roomtypename + ")，";
        html += inday + '入住，住' + item.nights + '晚，';
        if (!M.isEmpty(item.type) && item.type == 'ordered') {
            html += '未入住';
        }
        if (!M.isEmpty(item.type) && item.type == 'checkedin') {
            html += '已入住';
        }
        if (!M.isEmpty(item.type) && item.type == 'checkedout') {
            html += '已退房';
        }
        html += '<br />';
        if (!M.isEmpty(item.type) && item.type == 'checkedout') {
            var payedtotal = parseInt(item.appendmoney);
        } else {
            if (M.isEmpty(item.realdeposit)) {
                item.realdeposit = 0;
            }
            var payedtotal = parseInt(item.appendmoney) + parseInt(item.realdeposit);
        }
        if (payedtotal > 0) {
            html += '已收款￥' + payedtotal;
            if (item.realdeposit > 0) {
                html += '(含押金￥' + item.realdeposit + ')，';
            } else {
                html += '，';
            }
        } else {
            html += '未付款，';
        }
        html += '订单金额￥' + item.totalprice;
        if (item.type == 'order') {
            if (item.paystatus == '3') {
                html += "，已担保。";
            }
        }
        if (item.remark !== '') html += '<br />' + item.remark;
        html += '。</p>';
        return html;
    },
    _getitemdate: function() {
        var now_str = this.timeformat(this.getdatetime());
        var now_h = this.getdatetime().getHours();
        var pickerbegindate = this.context.mainpicker.getbegindate();
        var pickerenddate = this.context.mainpicker.getenddate();
        var daybeforeyes = new Date(pickerbegindate.getFullYear(), pickerbegindate.getMonth(), pickerbegindate.getDate() - 1);
        var pickerbegindate_str = this.timeformat(pickerbegindate);
        var pickerenddate_str = this.timeformat(pickerenddate);
        var nowtime = M.strtotimeSetDefaultHour(pickerbegindate_str);
        var pickerbegincolindex = this.context.mainpicker.getbeginindex();
        return {
            "nowstr": now_str,
            "nowh": now_h,
            "pickerbegindate": pickerbegindate,
            "pickerbegindatestr": pickerbegindate_str,
            "pickerenddate": pickerenddate,
            "pickerenddatestr": pickerenddate_str,
            "nowtime": nowtime,
            "daybeforeyes": daybeforeyes,
            "pickerbegincolindex": pickerbegincolindex
        };
    },
    initpickerstatus: function() {
        if (this.roomstatus == undefined || this.roomstatus == null) return;
        var tempgid = null;
        var tempoid = null;
        var itemdate = this._getitemdate();
        for (var i = 0; i < this.roomstatus.length; i++) {
            var item = this.roomstatus[i];
            this._showitem(item, itemdate);
        }
        this.calc_leftrooms();
        this.transform.win_resize();
    },
    calc_leftrooms: function() {
        this.transform.resetroomamount_remain();
    },
    datepicker_headerconverter: function(name) {
        return '<div class="week-desc">' + name + '</div>';
    },
    datepicker_convert: function(date) {
        if (date == undefined || date == null || true) {
            return '<div class="date-day">&nbsp;</div>';
        }
        var time = "" + date.getFullYear() + "-" + this.zerosize(date.getMonth() + 1 + "", 2) + "-" + this.zerosize(date.getDate() + "", 2);
        var templ = ' <div class="date-day" time="' + time + '"></div>';
        return templ;
    },
    datepicker_click: function(e) {
        var ele = M.EventEle(e);
        var tdele = ele.parents("td");
        var t = tdele.attr("tag");
        this.transform.selectedreset();
        if (t == "day") {
            var target = tdele.parents("table").find(".tdon");
            var sta = tdele.attr("sta");
            var datehave = tdele.children(".date-have");
            if (datehave.length > 0) {
                sta = datehave.attr("sta");
            }
            var ov = this.context.roomtype.attr("orderview");
            if (ov != 1) {
                this.auth_failed();
                return;
            }
            if (sta == "ordered") {
                if (this.inf.ov != '1') {
                    this.auth_failed();
                    return;
                }
                this._doeditorder(tdele);
                this._clear_jumpselected();
            } else if (sta == "checkedin") {
                if (this.inf.ov != '1') {
                    this.auth_failed();
                    return;
                }
                this._checkinoption(tdele);
                this._clear_jumpselected();
            } else if (sta == "checkedout") {
                if (this.inf.ov != '1') {
                    this.auth_failed();
                    return;
                }
                this._checkinoption(tdele);
                this._clear_jumpselected();
            } else {
                if (this.jumpauth == 1) {
                    var order = ele.attr("order");
                    var om = this.context.roomtype.attr("ordermanage");
                    if (om == "1") {
                        if (order == "1") {
                            this.context.orderform.attr('bookallroom', 0);
                            this._jump_doorder();
                        } else {
                            this._jump_selected(tdele);
                        }
                    }
                } else {
                    var om = this.context.roomtype.attr("ordermanage");
                    if (om == "1") {
                        this.context.orderform.attr('bookallroom', 0);
                        this._doorder(tdele);
                    }
                }
            }
        }
        if (t == 'c') {
            var rtid = tdele.attr("rtid");
            this.context.roomlist.find("tr[tag=roomtypes]").find("td[tag=roomtype][rtid=" + rtid + "]").click();
        }
    },
    _clear_jumpselected: function() {
        this.jump_order = {
            roomlist: [],
            daylist: [],
            datelist: []
        };
        var tpl = this.context.pickerarea.children("table").children("tbody").children().find(".td-selected");
        tpl.removeClass("td-selected");
        tpl.children("div").children("a[class=day-selected]").remove();
        this.context.pickerarea.children("table").children("tbody").children().find("a[class=day-selected]").remove();
    },
    _jump_selected: function(ele) {
        var style = ele.attr("class");
        var idx = ele.attr('idx');
        var i = ele.parent().attr("i");
        if (typeof(style) != 'undefined' && style.indexOf('td-selected') >= 0) {
            ele.removeClass("td-selected");
            var daylist = this.jump_order.daylist;
            this.jump_order.daylist = [];
            for (var k = 0; k < daylist.length; k++) {
                var data = daylist[k];
                if (data.num != i || data.idx != idx) {
                    if (!this.in_array({
                        "idx": idx,
                        "num": i
                    },
                    this.jump_order.daylist)) {
                        this.jump_order.daylist.push(data);
                    }
                }
            }
            var order = ele.children("div").children("a").attr("order");
            if (!M.isEmpty(order)) {
                if (this.jump_order.daylist.length > 0) {
                    var key = this.jump_order.daylist.length - 1;
                    var select_i = this.jump_order.daylist[key].num;
                    var select_idx = this.jump_order.daylist[key].idx;
                    var tpl = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + select_i + "]").children("td[idx=" + select_idx + "]");
                    tpl.children("div").append('<a order="1" href="javascript:;" class="day-selected" tag="day"></a>');
                }
                ele.children("div").children("a[class=day-selected]").remove();
            }
        } else {
            this.context.pickerarea.children("table").children("tbody").children().find("a[class=day-selected]").remove();
            ele.children("div").append('<a href="javascript:;" order="1" class="day-selected" tag="day"></a>');
            ele.addClass("td-selected");
            if (!this.in_array(idx, this.jump_order.roomlist)) {
                this.jump_order.roomlist.push(idx);
            }
            if (!this.in_array(i, this.jump_order.datelist)) {
                this.jump_order.datelist.push(i);
            }
            if (!this.in_array({
                "idx": idx,
                "num": i
            },
            this.jump_order.daylist)) {
                this.jump_order.daylist.push({
                    "idx": idx,
                    "num": i
                });
            }
        }
    },
    in_array: function(needle, haystack) {
        for (key in haystack) {
            if (haystack[key] == needle) {
                return true;
            }
        }
        return false;
    },
    _jump_getdata: function() {
        var orderdata = [];
        var roomlist = this.jump_order.roomlist;
        var datelist = this.jump_order.datelist;
        orderdata = this.transform.getjumpselected_data(roomlist, datelist, orderdata);
        return orderdata;
    },
    _jump_doorder: function() {
        var weekofday = {
            "0": "周日",
            "1": "周一",
            "2": "周二",
            "3": "周三",
            "4": "周四",
            "5": "周五",
            "6": "周六"
        };
        this.temporderdetail = null;
        this.tempcheckdetail = null;
        this.orderstatus = '';
        var innid = this.context.roomtype.attr("innid");
        var data = this._jump_getdata();
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                var tr_i = data[i].start_i;
                var idx = data[i].idx;
                var coordinate = this.transform.getdata_bycoordinate(tr_i, idx);
                data[i].coordinate = coordinate;
            }
        }
        this.object.order._jump_doorder(data, this.transform.isreverse, innid);
    },
    dis: function() {
        this.context.cashierdetailBox.css("z-index", "1060");
        M.Popup(this.context.cashierdetailBox, {
            "hideclass": "modal fade",
            "showclass": "modal fade in"
        });
        this.context.syt.hide();
    },
    room_change: function(e) {
        var val = this.context.droplist.val();
    },
    getorderdate: function(item) {
        var date = item['d'];
        if (M.isEmpty(date)) {
            date = item['arrivedate'];
        }
        if (M.isEmpty(date)) {
            date = item['checkindate'];
        }
        return date;
    },
    _getroom: function(roomid) {
        var ele = this.context.roomlist.children("tbody").find("tr>td[rid=" + roomid + "]");
        var roomname = ele.text().trim();
        var rtid = ele.attr("rtid");
        var p = parseFloat(ele.attr("p"));
        var i = ele.attr("i");
        var room = {
            "roomid": roomid,
            "roomname": roomname,
            "rtid": rtid,
            "p": p,
            "i": i
        };
        return room;
    },
    _getrooms: function(roomtpyeid) {
        var rooms = new Array();
        var roomlist = this.transform.getroomlistbyroomtype(roomtpyeid);
        roomlist.each(function() {
            var ele = $(this);
            var roomid = ele.attr("rid");
            var roomname = ele.text().trim();
            var rtid = ele.attr("rtid");
            var p = parseFloat(ele.attr("p"));
            var i = ele.attr("i");
            var room = {
                "roomid": roomid,
                "roomname": roomname,
                "rtid": rtid,
                "p": p,
                "i": i
            };
            rooms.push(room);
        });
        return rooms;
    },
    _generateorderdates: function(fromdate) {
        var fromdatestr = this.timeformat(fromdate);
        var nfromdate = new Date(fromdate.getFullYear(), fromdate.getMonth(), fromdate.getDate() - this.orderdays);
        var begindate = this.timeformat(nfromdate);
        var options = '<div style="max-height:170px; overflow-y:auto;">';
        for (var i = 0; i < this.orderdays * 2 + 1; i++) {
            var d = this.timeformat(nfromdate);
            var t = this.timeformat(nfromdate, "m/d");
            if (d == fromdatestr) {
                options += "<div value='" + d + "'><a href='javascript:;'>" + t + "入住</a></div>";
            } else {
                options += "<div value='" + d + "'><a href='javascript:;'>" + t + "</a></div>";
            }
            nfromdate.setDate(nfromdate.getDate() + 1);
        }
        options += '</div>';
        var enddatestr = this.timeformat(nfromdate);
        return {
            "options": options,
            "fromdate": begindate,
            "enddate": enddatestr
        };
    },
    _doorder: function(tdele) {
        var weekofday = {
            "0": "周日",
            "1": "周一",
            "2": "周二",
            "3": "周三",
            "4": "周四",
            "5": "周五",
            "6": "周六"
        };
        this.temporderdetail = null;
        this.tempcheckdetail = null;
        var todayrdx = this.context.pickerdate.find("td[class=today]").parent().attr("i");
        if (!todayrdx) {
            todayrdx = this.context.pickerdate.find("td[class=today]").attr("i");
        }
        this.orderstatus = '';
        var rdx = tdele.parent().attr("i");
        var idx = tdele.attr("idx");
        var price = tdele.attr("price");
        var coordinatedata = this.transform.getdata_bycoordinate(rdx, idx, '');
        if (!M.isEmpty(price)) {
            coordinatedata.price = price;
        }
        var innid = this.context.roomtype.attr("innid");
        this.object.order._doorder(coordinatedata, innid);
    },
    _formatpricesource: function(pricesource) {
        var formated = {};
        for (var i = 0; i < pricesource.length; i++) {
            var item = pricesource[i];
            var d = item.date;
            d = d.substr(0, 10);
            var p = item.price;
            formated[d] = p;
        }
        return formated;
    },
    _getroomid: function(target, val) {
        var rtid = '';
        var tpl = target.children("div").find("div[tag=option]");
        tpl.each(function() {
            var value = $(this).attr("value");
            if (value == val) {
                rtid = $(this).attr("rtid");
            }
        });
        return rtid;
    },
    _setval: function(ele, value) {
        var list = ele.children("div").find("div[tag=option]");
        var span_tpl = ele.children("span");
        var name = '';
        list.each(function() {
            var val = $(this).attr("value");
            if (val == value) {
                name = $(this).children("a").text();
            }
        });
        span_tpl.attr("value", value).html(name);
    },
    _gettimetomorrow: function(tdele) {
        var cols = tdele.attr("idx");
        var row = tdele.parent().attr("i");
        var coordinate = this.transform.getdata_bycoordinate(row, cols);
        var time = coordinate.date;
        var date = M.strtotimeSetDefaultHour(time);
        var datetomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 6, 0, 0);
        return datetomorrow;
    },
    _doeditorder: function(tdele) {
        var datehave = tdele.children(".date-have");
        var rid = datehave.attr("rid");
        var oid = datehave.attr("oid");
        var cols = tdele.attr("idx");
        var row = tdele.parent().attr("i");
        var coordinatedata = this.transform.getdata_bycoordinate(row, cols, '');
        var innid = this.context.roomtype.attr("innid");
        var data = {
            "oid": oid,
            "rid": rid,
            "checkindate": coordinatedata.date
        };
        this.object.order.doeditorder(data, innid);
    },
    _handledelformpaytype: function(ele) {
        var target = ele.parents("div[t=channellist]");
        var channel = target.children("span").attr("value");
        if (channel == 1) {
            target.parent().children("div[t=paytype]").find("div[tag=option][value=shouyintai]").show();
        } else {
            target.parent().children("div[t=paytype]").find("div[tag=option][value=shouyintai]").hide();
        }
    },
    _getcoordedatabyorderid: function(orderid) {
        var target = this.context.pickerarea.find("div[oid=" + orderid + "]:first");
        var cols = target.parents("td").attr("idx");
        var row = target.parents("tr").attr("i");
        return {
            "row": row,
            "cols": cols
        }
    },
    _clearitembycoordinate: function(col, row) {
        var night = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + row + "]").children("td[idx=" + col + "]").attr("n");
        this.transform.clearitem(col, row, night);
    },
    _getcheckindate: function(ele) {
        var tpl = ele.children("div[tag=order]").children("div[id=selectDay]");
        var date = '';
        tpl.each(function() {
            var select_date = $(this).children("span").attr("value");
            if (select_date < date || date == '') {
                date = select_date;
            }
        });
        return date;
    },
    _getcoordedatabygid: function(gid) {
        var target = this.context.pickerarea.find("div[cid=" + gid + "]");
        var cols = target.parents("td").attr("idx");
        var row = target.parents("tr").attr("i");
        return {
            "row": row,
            "cols": cols
        }
    },
    auth_failed: function() {
        alert('对不起，您没有该权限，请联系客栈管理员');
        return;
    },
    destroyorderform: function() {
        this._clearorderform();
        this.formatedateprice = {};
        this.tempavarooms = null;
        this.temporderdetail = null;
    },
    setordercolor: function(ele) {
        var selected = ele.parent().children("span[ison=1]");
        selected.attr('ison', "0");
        selected.attr("class", selected.attr("val"));
        ele.attr("class", ele.attr("val") + " checked").attr("ison", "1");
        var value = ele.attr("val");
        ele.parents("div[tag=color]").children("span").attr("class", value + " checked");
        ele.parents("div[tag=colorlist]").hide();
    },
    pushmessage_click: function(e) {
        var ele = M.EventEle(e);
        var uid = this.context.uid.val();
        var oid = this.context.uid.attr("oid");
        var p = 1;
        var data = {
            'uid': uid,
            'p': p,
            "oid": oid
        };
        M._getjson('/Book/getmessagelist', data, this.pushmessage_callback.toEventHandler(this));
        this.context.msgcenterpop.find('div[tag=nodata]').hide();
        this.context.msgcenterpop.find('div[tag=messagelist]').hide();
        this.context.msgcenterpop.find("div[tag=loading]").show();
        M.Popup(this.context.msgcenterpop, {
            "hideclass": "modal large fade",
            "showclass": "modal large fade in"
        });
    },
    msgcenterpop_click: function(e) {
        var uid = this.context.uid.val();
        var ele = M.EventEle(e);
        var tag = ele.attr('tag');
        var pageindex = this.pushlistcenter.pageindex;
        var p = 1;
        if (tag == 'prev') {
            p = pageindex - 1;
        } else if (tag == 'next') {
            p = pageindex + 1;
        } else if (tag == 'ctrip') {
            this.reloginctrip_click(e);
            return;
        } else if (tag == 'qunar') {
            this.relogin_click(e);
            return;
        } else {
            return;
        }
        if (!M.isEmpty(this.pushlistcenter.pageindex)) {
            var maxpage = this.pushlistcenter.pagemax;
            if (maxpage < p) {
                return;
            }
        }
        if (p <= 0) {
            return;
        }
        var oid = this.context.uid.attr("oid");
        var data = {
            'uid': uid,
            'p': p,
            "oid": oid
        };
        this.context.msgcenterpop.find('div[tag=messagelist]').hide();
        this.context.msgcenterpop.find("div[tag=loading]").show();
        M._getjson('/Book/getmessagelist', data, this.pushmessage_callback.toEventHandler(this));
    },
    pushmessage_callback: function(d) {
        this.context.msgcenterpop.find('div[tag=messagelist]').empty();
        if (d.status == 'error') {
            this.context.msgcenterpop.find('div[tag=nodata]').html(d.msg).show();
            this.context.msgcenterpop.find('div[tag=messagelist]').hide();
            this.context.msgcenterpop.find('div[tag=messagepage]').hide();
            this.context.msgcenterpop.find("div[tag=loading]").hide();
            this.context.pushmessage.children().hide();
            return;
        } else {
            this.context.msgcenterpop.find('div[tag=nodata]').hide();
            this.context.msgcenterpop.find('div[tag=messagepage]').show();
        }
        this.context.msgcenterpop.find('div[tag=messagelist]').html('');
        this.pushlistcenter = d;
        var list = d.list;
        var list_count = list.length;
        var pageindex = d.pageindex;
        var pagemax = d.pagemax;
        var otaswitchlist = d.otaswitchlist;
        this._showotaneedloginpush(otaswitchlist);
        var href = 'javascript:void(0);';
        var val = '';
        for (var i = 0; i < list_count; i++) {
            var item = list[i];
            item['newdate'] = M.timeformat(M.strtotime(item['createon']), 'm月d日 h:i');
            this._systemmsg(item);
        }
        if (pageindex > 1) {
            this.context.msgcenterpop.find('a[tag=prev]').attr('href', href).removeClass('light cursor-d');
        } else {
            this.context.msgcenterpop.find('a[tag=prev]').removeAttr('href').addClass('light cursor-d');
        }
        if (pageindex == pagemax) {
            this.context.msgcenterpop.find('a[tag=next]').removeAttr('href').addClass('light cursor-d');
        } else {
            this.context.msgcenterpop.find('a[tag=next]').attr('href', href).removeClass('light cursor-d');
        }
        this.context.msgcenterpop.find('div[tag=messagepage]').attr('p', pageindex).attr('pagemax', pagemax);
        this.context.msgcenterpop.find("div[tag=loading]").hide();
        this.context.msgcenterpop.find('div[tag=messagelist]').show();
        this.context.pushmessage.children().html('0').hide();
        cachepush_noticenum = 0;
    },
    _systemmsg: function(val) {
        var html_div = this.context.msgcenterpop.find('div[tag=messagelist]');
        var type = val.pushfrom;
        var mark = val.mark;
        if (!M.isEmpty(val.msgtype) && val.msgtype == 'system') {
            var tpl = this.context.otamsgbox.children("div[tag=tpl_pushmsg]").clone(true).show();
            var confirmtime = M.strtotime(val.createon);
            val.confirmdate = M.timeformat(confirmtime, 'm/d h:i:s');
            val.newdate = M.timeformat(confirmtime, 'm月d日 h:i');
            if (!M.isEmpty(val.showconfirmtime) && val.showconfirmtime == 1) {
                tpl.children("p[tag=confirmtime]").show().html('(确认时间' + val.confirmdate + ")");
            }
            tpl.children("p[tag=title]").html(val.title);
            tpl.children("p[tag=msg]").html(val.msg);
            tpl.children("p[tag=other]").html(val.other);
            tpl.children("span[tag=date]").html(val.newdate);
            if (!M.isEmpty(val.msg2)) {
                tpl.children("p[tag=msg2]").html(val.msg2);
            }
            html_div.append(tpl);
        } else {
            if (!M.isEmpty(type)) {
                if (type == 6) {
                    val['otaname'] = '携程';
                    val['otatype'] = 'ctrip';
                    val['url'] = 'https://ebooking.ctrip.com';
                    if (val.data.ordersetid == '1') {
                        html_div.append($.tmpl(this.tpl_pushmessage_otaswtichroomsuccess, val));
                    } else if (val.data.ordersetid == '2') {
                        html_div.append($.tmpl(this.tpl_pushmessage_otaloginstimeout, val));
                    } else {
                        html_div.append($.tmpl(this.tpl_pushmessage_otaswtichroomfail, val));
                    }
                } else if (type == 8) {
                    val['otaname'] = '去哪儿';
                    val['otatype'] = 'qunar';
                    val['url'] = 'http://ebooking.qunar.com';
                    if (val.data.ordersetid == '1') {
                        html_div.append($.tmpl(this.tpl_pushmessage_otaswtichroomsuccess, val));
                    } else if (val.data.ordersetid == '2') {
                        html_div.append($.tmpl(this.tpl_pushmessage_otaloginstimeout, val));
                    } else {
                        html_div.append($.tmpl(this.tpl_pushmessage_otaswtichroomfail, val));
                    }
                }
            }
        }
    },
    _showotaneedloginpush: function(list) {
        if (M.isEmpty(list)) {
            return;
        }
        var html_div = this.context.msgcenterpop.find('div[tag=messagelist]');
        for (var i = 0; i < list.length; i++) {
            var data = list[i];
            if (data.pushfrom == 11) {
                var tpl = this.context.msgcenterpop.find('div[tag=ctripneedlogin]').clone().show();
                var timenow = M.strtotime(data.createon);
                var datestr = M.timeformat(timenow, 'm月d h:i');
                tpl.find("span[tag=date]").html(datestr);
                tpl.find("a[tag=ctrip]").attr('data-innid', data.data.other);
                html_div.append(tpl);
            } else if (data.pushfrom == 12) {
                var tpl = this.context.msgcenterpop.find('div[tag=qunarpneedlogin]').clone().show();
                var timenow = M.strtotime(data.createon);
                var datestr = M.timeformat(timenow, 'm月d h:i');
                tpl.find("span[tag=date]").html(datestr);
                tpl.find("a[tag=qunar]").attr('data-innid', data.data.other);
                html_div.append(tpl);
            }
        }
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
    _closepopup: function() {
        M.ClosePopup();
    },
    _initdateprice: function() {
        return;
    },
    destroy: function() {}
});
function clealtpl(id) {
    $("#otamsgbox").children("div[tag=otamsg][orderid=" + id + "]").remove();
}
