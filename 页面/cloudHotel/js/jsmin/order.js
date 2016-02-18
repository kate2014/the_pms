M.Page.OrderAction = M.createClass();
M.extend(M.Page.OrderAction.prototype, {
    context: {},
    transform: null,
    roomstatus: [],
    roomprice: {},
    formatedateprice: {},
    tempavarooms: null,
    temporderdetail: null,
    tempcheckdetail: null,
    orderdetail: null,
    ordercallback: null,
    checkincallback: null,
    editCheckinRootPop: null,
    hotelguestliststatus: 0,
    usersetpricelist: {},
    userliststatus: 1,
    from: 'order',
    orderdata: {},
    printset: {},
    userlist: {},
    targetidtype: null,
    target_price: null,
    tpl_del: null,
    addordertpl: null,
    caneditaccount: 0,
    roomtypepricelist: {},
    formatedateprice: {},
    usersetdateprice: {},
    canvisitlog: 0,
    pid: 0,
    innid: '',
    userauth: {},
    plugin: {},
    isfirst: 0,
    checkonwer: 0,
    phonelist: {},
    haspluginid: 0,
    hotelguestlist: [],
    hotelguestindex: 0,
    accounttarget: null,
    orderstatus: '',
    search_tpl: null,
    memberstatus: 0,
    multiguest: [],
    searchguestlist: {},
    roomlist: {},
    innlist: {},
    bookallroom: 0,
    targetattn: null,
    weektext: {
        "1": "一",
        "2": "二",
        "3": "三",
        "4": "四",
        "5": "五",
        "6": "六",
        "0": "日"
    },
    txt_title: {
        'edit': '修改订单',
        'bookallroom': '修改包场订单'
    },
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
    tpl_winxinmsg: '${guestname}，${phone}，${indate}入住，住${nights}晚，${roomtypename}，${roomnum}间，${remark}。',
    tpl_watertype: ' <li><a href="javascript:;" typeid="${id}" tag="type">${name}</a></li>',
    tpl_roomrate: '<tr><td>${roomname}</td><td>￥${price}</td></tr>',
    tpl_account: '<div class="mb5 clx" style="display:none;">' + '<div class="fr">' + '<span class="label-input li-pay fl">预订时支付房费300元[支付宝]</span>' + '<a href="#?" class="li-edit">修改</a>' + '</div>' + '<div class="fr" style="display:none;">' + ' <span class="label-input fl">预订时支付房费300元[支付宝]</span>' + ' <input type="text" class="fl" style="width:30px; margin-right:0;" value="300"/>' + ' <div class="droplist fl" tag="payments" style="width:58px; margin-left:-1px;">' + ' <span class="value">支付方式</span>' + ' </div>' + ' <a class="btn btn-primary" href="javascript:;" style="padding:4px 10px; font-size:12px;">保存</a>' + '</div>' + '</div>',
    tpl_checkout: '<div class="demand_top sortorder"><span class="ico-checkout"></span></div>',
    tpl_log: '<div class="node">' + '<div class="title clx">' + '<span class="fl" tag="date"></span>' + '<span class="fr"><span tag="username"></span> <span tag="ua"></span></span>' + '</div>' + '<div class="content">' + '<p>${detail}</p>' + ' </div>' + '</div>',
    color_order: '<span tag="color"  val="ofreshgreen" ison="1" class="ofreshgreen checked" title="默认：清新绿"></span><span tag="color"  val="osapphireblue" class="osapphireblue" title="宝石蓝"></span><span tag="color"  val="oblue" class="oblue" title="蓝色"></span><span tag="color"  val="ocyan" class="ocyan" title="青绿色"></span><span tag="color"  val="ogreen" class="ogreen" title="绿色"></span><span tag="color"  val="oyellow" class="oyellow" title="黄色"></span><span tag="color"  val="oorange" class="oorange" title="橙色"></span><span tag="color"  val="ored" class="ored" title="红色"></span><span tag="color"  val="oluxuryred" class="oluxuryred" title="奢华红"></span><span tag="color"  val="opurple" class="opurple" title="紫色"></span>',
    color_checkin: '<span tag="color" ison="1"  val="ofreshorange"  for="checkedin" class="ofreshorange checked" title="默认：鲜橙多"></span><span tag="color"  val="ogray" for="checkedout" class="ogray" title="默认：高级灰"></span><span tag="color"  val="osapphireblue" class="osapphireblue" title="宝石蓝"></span><span tag="color"  val="oblue" class="oblue" title="蓝色"></span><span tag="color"  val="ocyan" class="ocyan" title="青绿色"></span><span tag="color"  val="ogreen" class="ogreen" title="绿色"></span><span tag="color"  val="oyellow" class="oyellow" title="黄色"></span><span tag="color"  val="oorange" class="oorange" title="橙色"></span><span tag="color"  val="ored" class="ored" title="红色"></span><span tag="color"  val="oluxuryred" class="oluxuryred" title="奢华红"></span><span tag="color"  val="opurple" class="opurple" title="紫色"></span>',
    nationlist: {
        "01": "汉族",
        "02": "蒙古族",
        "03": "回族",
        "04": "藏族",
        "05": "维吾尔族",
        "06": "苗族",
        "07": "彝族",
        "08": "壮族",
        "09": "布依族",
        "10": "朝鲜族",
        "11": "满族",
        "12": "侗族",
        "13": "瑶族",
        "14": "白族",
        "15": "土家族",
        "16": "哈尼族",
        "17": "哈萨克族",
        "18": "傣族",
        "19": "黎族",
        "20": "僳僳族",
        "21": "佤族",
        "22": "畲族",
        "23": "高山族",
        "24": "拉祜族",
        "25": "水族",
        "26": "东乡族",
        "27": "纳西族",
        "28": "景颇族",
        "29": "柯尔克孜族",
        "30": "土族",
        "31": "达斡尔族",
        "32": "仫佬族",
        "33": "羌族",
        "34": "布朗族",
        "35": "撒拉族",
        "36": "毛难族",
        "37": "仡佬族",
        "38": "锡伯族",
        "39": "阿昌族",
        "40": "普米族",
        "41": "塔吉克族",
        "42": "怒族",
        "43": "乌孜别克族",
        "44": "俄罗斯族",
        "45": "鄂温克族",
        "46": "崩龙族",
        "47": "保安族",
        "48": "裕固族",
        "49": "京族",
        "50": "塔塔尔族",
        "51": "独龙族",
        "52": "鄂伦春族",
        "53": "赫哲族",
        "54": "门巴族",
        "55": "珞巴族",
        "56": "基诺族"
    },
    sexlist: {
        "1": "男",
        "2": "女"
    },
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
    account: {},
    cache_ele: '',
    avgpricestatus: {},
    cache_thisdate: {},
    tpl_checkindate: '<div value="${date}"><a class="cursor-n light" style="background:none;" href="javascript:;">${datemd}${msg}</a></div>',
    tpl_roomlock: '<tr orderid="${orderid}">' + '<td>${roomname}</td>' + '<td>${arrivedate}</td>' + '<td>${enddate}</td>' + '<td tag="password">${password}</td>' + '<td><input type="text" class="text" tag="fromtime" value="${fromtime}" style="width:70px;"> - <input type="text" class="text" tag="endtime" value="${endtime}" style="width:70px;"><a href="javascript:;" tag="save" class="btn btn-primary" style="padding:4px 8px;display:none" tag="save">保存</a></td>' + '<td><a class="table-btn" href="#?" tag="sendpassword">重发短信</a><a class="table-btn table-btn-alt ml10" href="#?" tag="resetpw">重设密码</a></td>' + '</tr>',
    tpl_remind: '<li class="over" tag="list" remind="${id}">' + '<div class="droplist fl" t="remindtype" style="width:63px;">' + '<span class="value">车接</span>' + '<div class="ip-dropdown" style="display:none; width:89px; z-index: 1000;">' + '<div>' + '<div value="needcar"><a href="javascript:;">车接</a></div>' + '<div value="needcar2"><a href="javascript:;">车送</a></div>' + '<div value="remind"><a href="javascript:;">普通提醒</a></div>' + '</div></div></div>' + '<input type="text" class="fl" style="width:136px; margin:0 -1px;" name="datetime" placeholder="设置提醒时间" />' + '<input class="fl" style="width:346px;" type="text" value="${remark}" placeholder="添加提醒内容，最多30字" name="remark" />' + '<a href="javascript:;" class="del-book ml5 mt5" title="删除该提醒" tag="del"></a>' + '</li>',
    reminddata: '',
    cache_discount: 0,
    tpl_i_discount: '<i tag="discount" class="sale-num">${discount}折</i>',
    tpl_discount: '<tr>' + '<td>${roomname}</td>' + '<td>￥${orgprice}</td>' + '<td class="no-line">￥${totalprice}</td>' + '</tr>',
    getdatetime: function() {
        var date = M.getTime();
        return date;
    },
    init: function() {
        this.initDOM();
        this.initEvent();
    },
    initDOM: function() {
        this.context.main = $('.main');
        this.context.body = $("body");
        this.context.orderform = $("#orderform");
        this.context.roomtype = $("#roomtype");
        this.inf.ov = this.context.roomtype.attr("ov");
        this.inf.tp = this.context.roomtype.attr("tp");
        this.context.scroll_top = $("#roomtype");
        this.context.scroll_left = $("#pickerdate");
        this.context.roomlist = $("#roomlist");
        this.context.opennewurl = $("#opennewurl");
        this.context.innhiddendata = $("#innhiddendata");
        this.context.orderformbody = $("#orderformbody");
        this.context.o_nights = $("#o_nights");
        this.context.o_guestname = $("#o_guestname");
        this.context.o_phone = $("#o_phone");
        this.context.o_arrivetime = $("#o_arrivetime");
        this.context.o_remark = $("#o_remark");
        this.context.o_channel = $("#o_channel");
        this.context.ordercell = $("#ordercell");
        this.context.o_totalprice = $("#o_totalprice");
        this.context.o_paystatus = $("#o_paystatus");
        this.context.o_deposit = $("#o_deposit");
        this.context.o_needcar = $("#o_needcar");
        this.context.o_needcar2 = $("#o_needcar2");
        this.context.orderandcheckinbtn = $("#orderandcheckinbtn");
        this.context.depositBox = $("#depositBox");
        this.context.scroller = $(".datepicker");
        this.context.idnum = $("#idnum");
        this.context.idtype = $("#idtype");
        this.context.idtypeoption = $("#idtypeoption");
        this.context.checkin_idnum = $("#checkin_idnum");
        this.context.checkin_idtype = $("#checkin_idtype");
        this.context.idnuminfo = $("#idnuminfo");
        this.context.checkin_idnuminfo = $("#checkin_idnuminfo");
        this.context.hidemultiguesttip = $("#hidemultiguesttip");
        this.context.multiguestform = $("#multiguestform");
        this.context.e_orderdetail = $("#orderdetail");
        this.context.e_guestname = $("#e_guestname");
        this.context.e_guestphone = $("#e_guestphone");
        this.context.e_orderinfo = $("#e_orderinfo");
        this.context.e_remark = $("#e_remark");
        this.context.idtypelist = $("#idtypelist");
        this.context.e_idnum = $("#e_idnum");
        this.context.e_logo = $("#e_logo");
        this.context.e_ordercell = $("#e_ordercell");
        this.context.e_needcar = $("#e_needcar");
        this.context.e_checkinbtn = $("#e_checkinbtn");
        this.context.e_line = $("#e_line");
        this.context.submitlayer = $("#submitlayer");
        this.context.checkin = $("#checkin");
        this.context.ck_logo = $("#ck_logo");
        this.context.ck_guestname = $("#ck_guestname");
        this.context.ck_phone = $("#ck_phone");
        this.context.ck_info = $("#ck_info");
        this.context.ck_appendmoney = $("#ck_appendmoney");
        this.context.ck_remark = $("#ck_remark");
        this.context.checkinoption = $("#checkinoption");
        this.context.c_logo = $("#c_logo");
        this.context.c_guestname = $("#c_guestname");
        this.context.c_phone = $("#c_phone");
        this.context.c_info = $("#c_info");
        this.context.c_needcar = $("#c_needcar");
        this.context.c_remark = $("#c_remark");
        this.context.c_hiddencell = $("#c_hiddencell");
        this.context.c_checkoutbtn = $("#c_checkoutbtn");
        this.context.c_editbtn = $("#c_editbtn");
        this.context.c_paystatus = $("#c_paystatus");
        this.context.editcheck = $("#editcheck");
        this.context.editcheckbody = this.context.editcheck.children(".modal-body").find('.cntlist');
        this.context.ed_paystatus = $("#ed_paystatus");
        this.context.ed_deposit = $("#ed_deposit");
        this.context.msgform = $("#msgform");
        this.context.msg_hidden = $("#msg_hidden");
        this.context.msgtpl = $("#msgtpl");
        this.context.msg = $("#msg");
        this.context.leftwords = $("#leftwords");
        this.context.msgrole = $("#msgrole");
        this.context.searchorderlist = $("#searchorderlist");
        this.context.checkoutform = $("#checkoutform");
        this.context.ot_logo = $("#ot_logo");
        this.context.ot_guestname = $("#ot_guestname");
        this.context.ot_phone = $("#ot_phone");
        this.context.ot_body = this.context.checkoutform.children(".modal-body").find(".cntlist");
        this.context.ot_hidden = $("#ot_hidden");
        this.context.selecttime = $("#selecttime");
        this.context.datedesc = $("#datedesc");
        this.context.inputtime = $("#datepickers");
        this.context.selectdate = $("#selectdate");
        this.context.savebtn = $("#r_savebtn");
        this.context.otamsgbox = $("#otamsgbox");
        this.context.watertypelist = $("#watertypelist");
        this.context.header = $("#header");
        this.context.roomratedetail = $("#roomratedetail");
        this.context.multiguesttip = $("#multiguesttip");
        this.context.multiguestinfo = $("#multiguestinfo");
        this.context.footer = $("#footer");
        this.context.ordercolor = $("#ordercolor");
        this.context.findetailform = $("#findetailform");
        this.context.orderlogform = $("#orderlogform");
        this.context.datepickerpriceform = $("#datepickerpriceform");
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
        this.context.selectcolor = $("#o_channel");
        this.context.inroom = $("#inroom");
        this.context.warnota = $("#warnota");
        this.context.roomstatusthumb = $("#roomstatusthumb");
        this.context.showroomthumb = $("#showroomthumb");
        this.context.roomstatusdetail = $("#roomstatusdetail");
        this.context.roomstatustime = $("#roomstatustime");
        this.context.roomstatusscroll = $("#roomstatusscroll");
        this.context.droplist = $("#droplist");
        this.context.selectDay = $("#selectDay");
        this.context.selectRoom = $("#selectRoom");
        this.context.selectNights = $("#selectNights");
        this.context.payments = $("#payments");
        this.context.depositpayment = $("#depositpayment");
        this.context.roomcost = $("#roomcost");
        this.context.roompaytype = $("#roompaytype");
        this.context.depositcost = $("#depositcost");
        this.context.depositpaytype = $("#depositpaytype");
        this.context.rmpayBox = $("#rmpayBox");
        this.context.dtpayBox = $("#dtpayBox");
        this.context.checkincolor = $("#checkincolor");
        this.context.cashiermsgPop = $("#cashiermsgPop");
        this.context.cashierPop = $("#cashierPop");
        this.context.cashiermsg = $("#cashiermsg");
        this.context.cashierResult = $("#cashierResult");
        this.context.switchPaytype = $("#switchPaytype");
        this.context.payinfo = $("#payinfo");
        this.context.paymentmsgbox = $("#paymentmsgbox");
        this.context.canPopDetail = false;
        this.context.printform = $("#printform");
        this.context.cashierform = $("#cashierform");
        this.context.cashierhiddedata = $("#cashierhiddedata");
        this.context.cashierdetailBox = $("#cashierdetailBox");
        this.context.syt = $('#syt');
        this.context.rightbox = $('#rightboxf');
        this.context.rnsBox = $('#rnsBox');
        this.context.needpayform = $("#needpayform");
        this.context.editdelorderform = $("#editdelorderform");
        this.context.delorderbody = $("#delorderbody");
        this.context.blockbookingpop = $('#blockbookingpop');
        this.context.roompasswordpop = $('#roompasswordPop');
        this.context.attnlist = $("#attnlist");
        this.context.remindsettingtpl = $('#remindsettingtpl');
        this.context.idcardscaner = $("idcardscaner");
        this.context.idscanertipform = $("#idscanertipform");
        this.context.discountpop = $('#discountPop');
    },
    initEvent: function() {
        this.context.orderform.bind("click", this.orderform_click.toEventHandler(this));
        this.context.orderformbody.children("li[tag=orderroomlist]").children("div[tag=order]").children("input[tag=price]").bind("input propertychange", this.orderprice_blur.toEventHandler(this));
        this.context.orderform.find('li[tag=blockbookinglist]').find('input[tag=bookallroom_input]').bind("input propertychange", this.orderprice_blur.toEventHandler(this));
        this.context.editcheck.find('li[tag=blockbookinglist]').find('input[tag=bookallroom_input]').bind("input propertychange", this.orderprice_blur.toEventHandler(this));
        this.context.editcheck.bind("click", this.editcheck_click.toEventHandler(this));
        this.context.editcheckbody.children("li[tag=orderroomlist]").children("div[tag=order]").children("input[tag=price]").bind("input propertychange", this.orderprice_blur.toEventHandler(this));
        this.context.delorderbody.children("li[tag=orderroomlist]").children("div[tag=o]").children("input[name=price]").bind("input propertychange", this.orderprice_blur.toEventHandler(this));
        this.context.o_guestname.bind("input propertychange", this.guestname_change.toEventHandler(this));
        this.context.o_phone.bind("input propertychange", this.phone_change.toEventHandler(this));
        this.context.o_nights.bind("change", this.nights_change.toEventHandler(this));
        this.context.e_orderdetail.bind("click", this.orderdetail_click.toEventHandler(this));
        this.context.checkinoption.bind("click", this.checkinoption_click.toEventHandler(this));
        this.context.checkin.bind("click", this.checkin_click.toEventHandler(this));
        this.context.o_paystatus.bind("change", this.opaystatus_change.toEventHandler(this));
        this.context.msgtpl.bind("change", this.msgtpl_change.toEventHandler(this));
        this.context.msgform.bind("click", this.msgform_click.toEventHandler(this));
        this.context.msg.bind("keyup", this.msg_keydown.toEventHandler(this));
        this.context.msg.bind("blur", this.msg_keydown.toEventHandler(this));
        this.context.checkoutform.bind('click', this.checkoutform_click.toEventHandler(this));
        this.context.savebtn.bind("click", this.savebtn_click.toEventHandler(this));
        this.context.main.bind('click', this.main_click.toEventHandler(this));
        this.context.delform.bind('click', this.delform_click.toEventHandler(this));
        this.context.selectcolor.bind("change", this.channel_change.toEventHandler(this));
        this.context.inroom.bind("change", this.editcheck_change.toEventHandler(this));
        this.context.warnota.bind("click", this.warnota_click.toEventHandler(this));
        this.context.body.bind("click", this.body_click.toEventHandler(this));
        this.context.hidemultiguesttip.bind("click", this.hidemultiguesttip.toEventHandler(this));
        this.context.multiguestform.bind("click", this.multiguestform_click.toEventHandler(this));
        this.context.o_guestname.bind("keydown", this.guestchange.toEventHandler(this));
        this.context.ordercolor.children("div[tag=color]").bind("mousemove", this.color_mousemove.toEventHandler(this));
        this.context.ordercolor.children("div[tag=color]").bind("mouseleave", this.color_mouseleave.toEventHandler(this));
        this.context.checkincolor.children("div[tag=color]").bind("mousemove", this.color_mousemove.toEventHandler(this));
        this.context.checkincolor.children("div[tag=color]").bind("mouseleave", this.color_mouseleave.toEventHandler(this));
        this.context.orderformbody.children("li[tag=paystatus]").find("div[tag=addoption]").children("input[class=btn]").bind("click", this.addpaytype_click.toEventHandler(this));
        this.context.findetailform.bind('click', this.findetailform.toEventHandler(this));
        this.context.cashiermsg.bind('click', this.cashiermsg.toEventHandler(this));
        this.context.switchPaytype.bind('click', this.switchPaytype_click.toEventHandler(this));
        this.context.cashiermsgPop.find("a[class=close]").bind('click', this.msgPopclose.toEventHandler(this));
        this.context.cashierPop.find("a[class=close]").bind('click', this.msgPopclose.toEventHandler(this));
        this.context.idtypelist.bind('click', this.idtypelist_click.toEventHandler(this));
        this.context.multiguestform.children("div[tag=list]").scroll(this.idtypelist_scroll.toEventHandler(this));
        this.context.printform.bind('click', this.printform_click.toEventHandler(this));
        this.context.cashierform.bind('click', this.cashierform_click.toEventHandler(this));
        this.context.syt.find('a[tag=dis]').bind('click', this.dis.toEventHandler(this));
        this.context.syt.find('div[tag=close]').bind('click', this.closesyt.toEventHandler(this));
        this.context.cashierdetailBox.find('a[tag=closebtn]').bind('click', this.closesdetail.toEventHandler(this));
        this.context.orderform.find('a[tag=close]').bind('click', this.closesyt.toEventHandler(this));
        this.context.checkin.find('a[tag=closebtn]').bind('click', this.closesyt.toEventHandler(this));
        this.context.syt.bind('click', this.syt_click.toEventHandler(this));
        this.context.orderform.find("div[tag=consumeform_tpl]").bind("mousemove", this.consume_mousemove.toEventHandler(this));
        this.context.editcheck.find("div[tag=consumeform_tpl]").bind("mousemove", this.consume_mousemove.toEventHandler(this));
        this.context.needpayform.find("div[tag=consumelist]").bind("mousemove", this.consume_mousemove.toEventHandler(this));
        this.context.needpayform.bind("click", this.needpayform_click.toEventHandler(this));
        this.context.orderform.find("div[tag=roomrateform]").find("input[name=roomrate]").bind("input propertychange", this.roomrate_change.toEventHandler(this));
        this.context.orderform.find("div[tag=consumeform_tpl]").find("input[name=consume]").bind("input propertychange", this.roomrate_change.toEventHandler(this));
        this.context.orderform.find("div[tag=depositform]").find("input[name=deposit]").bind("input propertychange", this.roomrate_change.toEventHandler(this));
        this.context.editcheck.find("div[tag=roomrateform]").find("input[name=roomrate]").bind("input propertychange", this.roomrate_change.toEventHandler(this));
        this.context.editcheck.find("div[tag=consumeform_tpl]").find("input[name=consume]").bind("input propertychange", this.roomrate_change.toEventHandler(this));
        this.context.editcheck.find("div[tag=depositform]").find("input[name=deposit]").bind("input propertychange", this.roomrate_change.toEventHandler(this));
        this.context.editdelorderform.bind("click", this.editdelorderform_click.toEventHandler(this));
        this.context.roompasswordpop.bind("click", this.roompasswordpop_click.toEventHandler(this));
        this.context.attnlist.bind("click", this.attnlist_click.toEventHandler(this));
        this.context.remindsettingtpl.bind('click', this.remindsettingtpl_click.toEventHandler(this));
        this.context.idscanertipform.bind('click', this.idscanertipform_click.toEventHandler(this));
        setTimeout(this.searchguest.toEventHandler(this), 5000);
        this.context.datepickerpriceform.bind('click', this.datepickerpriceform_click.toEventHandler(this));
        this.context.datepickerpriceform.find("input[name=avgprice]").bind('keydown', this.avgprice_avgprice.toEventHandler(this));
    },
    idscanertipform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "close":
            M.CloseLast();
            break;
        }
    },
    inituserauth: function() {
        var innid = this.innid;
        var data = {
            "innid": innid,
            "userliststatus": this.userliststatus
        };
        M._getjson("/Book/getuserauth", data, this.getuserauth_finished.toEventHandler(this));
    },
    getuserauth_finished: function(d) {
        if (d.status == "success") {
            this.userauth = d.auth;
            this.plugin = d.plugin;
            this.printset = d.printset;
            this.userlist = d.userlist;
        }
    },
    needpayform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "edit":
            this.editconsume(ele);
            break;
        case "showconsumetype":
            this.showconsumetype(ele);
            break;
        case "consumeform":
            this.showconsumetype(ele.children("span"));
            break;
        case "save":
            this.saveconsume(ele);
            break;
        case "consumetype":
            this.setconsumetype(ele);
            break;
        case "delete":
            this.deleteconsume(ele);
            break;
        }
    },
    deleteconsume: function(ele) {
        var r = confirm("该操作不可恢复，确认要删除吗？");
        if (!r) {
            return;
        }
        var target = ele.parent();
        var cid = target.attr("cid");
        var innid = this.context.roomtype.attr("innid");
        var orderstatus = this.orderstatus;
        var data = {
            "cid": cid,
            "innid": innid,
            "orderstatus": orderstatus
        };
        M._getjson("/Book/deleteconsume", data, this.deleteconsume_finished.toEventHandler(this));
    },
    deleteconsume_finished: function(d) {
        if (d.status == "success") {
            var detail = d.detail;
            var consumetotal = d.consumetotal;
            this.context.needpayform.find("div[tag=edit_tpl][cid=" + detail.id + "]").remove();
            this.context.needpayform.find("div[tag=tpl][cid=" + detail.id + "]").remove();
            var length = this.context.needpayform.find("div[tag=tpl][type=add]").length;
            if (length == 0) {
                this.context.needpayform.find("div[t=consumelist]").hide();
            }
            this.context.needpayform.attr("consumetotal", consumetotal);
            if (this.orderstatus == "order") {
                var orderroomlist = this.context.orderformbody.children("li[tag=orderroomlist]");
            } else {
                var orderroomlist = this.context.editcheckbody.children("li[tag=orderroomlist]");
            }
            if (!M.isEmpty(orderroomlist)) {
                this._sumorderprice(orderroomlist);
            }
            M.success("删除成功");
        } else {
            alert(d.msg);
        }
    },
    saveconsume: function(ele) {
        var target = ele.parent();
        var cid = target.attr("cid");
        var p = target.children("div[tag=consumeform]").children("span").attr("p");
        var pname = target.children("div[tag=consumeform]").children("span").attr("pname");
        var consumecode = target.children("div[tag=consumeform]").children("span").attr("consumecode");
        var consumename = target.children("div[tag=consumeform]").children("span").text();
        var amount = target.children("input[name=amount]").val();
        var innid = this.context.roomtype.attr("innid");
        var orderstatus = this.orderstatus;
        var data = {
            "innid": innid,
            "cid": cid,
            "amount": amount,
            "p": p,
            "pname": pname,
            "consumecode": consumecode,
            "consumename": consumename,
            "orderstatus": orderstatus
        };
        M._getjson("/Book/editconsume", data, this.saveconsume_finished.toEventHandler(this));
    },
    saveconsume_finished: function(d) {
        if (d.status == "success") {
            var detail = d.detail;
            var consumetotal = d.consumetotal;
            var edittpl = this.context.needpayform.find("div[tag=edit_tpl][cid=" + detail.id + "]");
            edittpl.hide();
            var tpl = this.context.needpayform.find("div[tag=tpl][cid=" + detail.id + "]");
            var content = detail.date + ',' + detail.amount + '元[' + detail.consumename1 + ']';
            tpl.show().children("span[tag=content]").html(content);
            this.context.needpayform.attr("consumetotal", consumetotal);
            if (this.orderstatus == "order") {
                var orderroomlist = this.context.orderformbody.children("li[tag=orderroomlist]");
            } else {
                var orderroomlist = this.context.editcheckbody.children("li[tag=orderroomlist]");
            }
            if (!M.isEmpty(orderroomlist)) {
                this._sumorderprice(orderroomlist);
            }
        } else {
            alert(d.msg);
        }
    },
    editconsume: function(ele) {
        var cid = ele.parent().hide().attr("cid");
        ele.parents("div[tag=list]").children("div[tag=edit_tpl][type=add][cid=" + cid + "]").show();
    },
    showaddconsume_mouseleave: function(e) {
        var ele = M.EventEle(e);
        ele.parents("div[tag=finlist]").children("div").removeClass('addfinance_on');
    },
    consume_mousemove: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'consume') {
            var p = ele.attr("value");
            this.showconsumetypelist(ele);
        }
    },
    showconsumetypelist: function(ele) {
        var p = ele.attr("value");
        ele.parent().children("div").removeClass("cur");
        ele.addClass("cur");
        var target = ele.parents("div[tag=consumelist]").children("div[t=typelist]");
        target.find("div[tag=consumetype]").hide();
        target.find("div[p=" + p + "]").show();
    },
    syt_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'kt') {
            var isowner = this.context.roomtype.attr('checkonwer');
            if (isowner != 1) {
                this.auth_failed();
                return false;
            } else {
                this.context.syt.css("display", "none");
                $.cookie('opencashier', 1, {
                    expires: 3600
                });
                window.open('/pluginmanage.php#syt12');
            }
        }
    },
    closesdetail: function() {
        this.context.cashierdetailBox.hide();
        this.context.syt.show();
    },
    closesyt: function() {
        this.context.syt.css("display", "none");
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
            this.cashiermsg(ele);
        }
        if (t == 'qrcode') {
            this.context.body.find("div.graylayer").addClass("deepgraylayer");
            this.context.cashierhiddedata.attr("channel", 'qrcode');
            this.qrOpened = true;
            this.channelstatus();
            this._longPolling();
        }
        if (t == 'pos') {
            this.context.cashierhiddedata.attr("channel", 'pos');
            this.qrOpened = true;
            this.channelstatus();
            this._longPolling();
        }
        if (t == "msg") {
            this.context.cashierhiddedata.attr("channel", 'msg');
            this.channelstatus();
        }
    },
    channelstatus: function() {
        var innid = this.context.roomtype.attr("innid");
        var cstatus = this.context.cashierhiddedata.attr("channel");
        var ouniqid = this.context.cashierhiddedata.attr("unqid");
        var tradeno = this.context.cashierform.attr("trade_no");
        var data = {
            "op": 'updatechannel',
            "innid": innid,
            "channel": cstatus,
            "orderuniqid": ouniqid,
            "tradingcode": tradeno
        };
        M._getjson("/pay/updatechannel", data, this.channelstatus_finished.toEventHandler(this));
    },
    channelstatus_finished: function(d) {
        if (d.status == "success") {
            this.context.cashierhiddedata.attr("status", 1);
        } else {
            M.error(d.msg)
        }
    },
    updatecashiergateway: function() {
        var accountid = this.context.cashierhiddedata.attr("accountid");
        var unqid = this.context.cashierhiddedata.attr("unqid");
        var posstatus = this.context.cashierhiddedata.attr("posstatus");
        if (!M.isEmpty(posstatus) && posstatus == 1) {
            return;
        }
        var innid = this.context.roomtype.attr("innid");
        var data = {
            "accountid": accountid,
            "unqid": unqid,
            "innid": innid,
            "type": 1
        };
        M._getjson("/pay/updatecashiergateway", data, this.updatecashiergateway_finished.toEventHandler(this));
    },
    updatecashiergateway_finished: function(d) {
        if (d.status == "success") {
            this.context.cashierhiddedata.attr("posstatus", 1);
        } else {
            M.error(d.msg)
        }
    },
    _handlecashiertypeform: function(type) {
        var tpl = this.context.cashierform.find("div[tag=paytypelist]");
        tpl.find("li").removeClass("checked");
        tpl.find("i[tag=" + type + "]").parents("li").addClass("checked");
        this.context.cashierform.find("div[tag=msg]").hide();
        this.context.cashierform.find("div[tag=qrcode]").hide();
        this.context.cashierform.find("div[tag=pos]").hide();
        this.context.cashierform.find("div[tag=" + type + "]").show();
    },
    _longPolling: function() {
        if (!this.qrOpened) {
            return;
        }
        var aid = this.context.cashierform.attr("aid");
        var trade_no = this.context.cashierform.attr("trade_no");
        var data = {
            "op": "getpaystatus",
            "out_trade_no": aid,
            "trade_no": trade_no
        };
        M._getjson("/pay/getpaystatus", data, this.getpaystatus_finished.toEventHandler(this));
    },
    getpaystatus_finished: function(d) {
        if (!this.qrOpened) {
            return;
        }
        var data = d.info;
        if ('202' == data.code) {
            var showstatus = this.context.cashierform.css("display");
            if (showstatus != 'none') {
                this._longPolling();
            }
        } else {
            this.context.body.find("div.graylayer").removeClass("deepgraylayer");
            this.context.cashierform.find("div[tag=pay]").hide();
            var tpl = this.context.cashierform.find("div[tag=payresult]").show();
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
    cashier: function() {
        var detail = this.orderdetail;
        var paydetail = detail.paydetail;
        if (M.isEmpty(paydetail.accountid)) {
            return;
        }
        this.context.cashierform.find("div[tag=pay]").show();
        this.context.cashierform.find("div[tag=payresult]").hide();
        this._showcashiermsg();
        var action = this.orderdetail.a;
        var paytype = '';
        var typemsg = "收款";
        if (action == "saveorder") {
            typemsg = "收款";
        }
        if (action == "submitorder" || action == "saveorder") {
            paytype = 'msg';
            this.context.cashierform.find("div[tag=msg]").show();
        } else {
            typemsg = "收款";
            var posstatus = this.context.cashierform.find("div[tag=paytypelist]").find("li[tag=pos]").parent().attr("status");
            if (M.isEmpty(posstatus)) {
                paytype = 'pos';
                this.context.cashierform.find("div[tag=pos]").show();
            } else {
                paytype = 'qrcode';
                this.context.cashierform.find("div[tag=qrcode]").show();
            }
        }
        this.context.cashierhiddedata.attr("accountid", paydetail.accountid).attr("posstatus", 0);
        var data = {
            "paytype": paytype
        };
        data.innid = this.context.roomtype.attr("innid");
        data.accountid = paydetail.accountid;
        var items = detail.items;
        var desc = '';
        var comm = '';
        if (!M.isEmpty(paydetail.bookallroom) && paydetail.bookallroom == 1) {
            var item = items[0];
            var datetime = M.strtotime(item.indate);
            var datestr = M.timeformat(datetime, 'm/d');
            desc += '包场，' + datestr + '入住，住' + item.nights + '晚';
        } else {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var datetime = M.strtotime(item.indate);
                var datestr = M.timeformat(datetime, 'm/d');
                desc += comm + item.roomname + '(' + item.roomtypename + ')，' + datestr + '入住，住' + item.nights + '晚';
                comm = ';';
            }
        }
        data.desc = desc;
        data.guestname = item.guestname;
        data.appendmoney = paydetail.appendmoney;
        data.innname = this.context.footer.find("div[tag=inn_div]").find("li.on").children("a").text();
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
            this.context.cashierform.attr("trade_no", data.trade_no) this.context.cashierform.find("img[tag=qrcode]").attr("src", data.pay_qr);
            this.context.cashierform.find("div[tag=msgdesc]").children("a").attr("href", data.pay_url).html(data.pay_url);
            this.context.cashierhiddedata.attr("channel", paytype);
            M.Popup(this.context.cashierform, {
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
                this.channelstatus();
            }
        } else {
            M.error(d.msg);
        }
    },
    _showcashiermsg: function() {
        var action = this.orderdetail.a;
        var detail = this.orderdetail;
        var paydetail = detail.paydetail;
        var items = detail.items;
        var tpl_info = this.context.cashierform.find("div[tag=info]");
        tpl_info.find("span[tag=totalprice]").html('&yen;' + paydetail.appendmoney);
        var order = items[0];
        if (!M.isEmpty(order.indate)) {
            var datetime = M.strtotime(order.indate);
        } else {
            var datetime = M.strtotime(order.arrivedate);
        }
        var datestr = M.timeformat(datetime, 'm/d');
        if (!M.isEmpty(paydetail.bookallroom) && paydetail.bookallroom == 1) {
            var orderinfo = "包场，" + datestr + "入住，住" + order.nights + "晚";
        } else {
            var orderinfo = order.roomname + "(" + order.roomtypename + ")," + datestr + "入住，住" + order.nights + "晚";
            if (items.length > 1) {
                orderinfo += "...<i class='ico-question' tag='desctip'></i>";
            }
        }
        var action = this.orderdetail.a;
        var typemsg = "收款";
        if (action == "submitorder" || action == "hisadd" || action == "orderandcheckin") {
            typemsg = "收款";
        }
        orderinfo += "</br>" + order.guestname + "，" + typemsg;
        tpl_info.find("span[tag=desc]").html(orderinfo);
        var innname = this.context.footer.find("div[tag=inn_div]").find("li.on").children("a").text();
        var msgdesc = '';
        if (action == 'submitorder' || action == "hisadd" || action == "orderandcheckin") {
            msgdesc = '您已预订&lt;' + innname + '&gt';
        } else {
            msgdesc = '您有一笔来自&lt;' + innname + '&gt';
        }
        this.context.cashierform.find("div[tag=payresult]").find("span[tag=guestname]").html(order.guestname);
        this.context.cashierform.find("div[tag=payresult]").find("span[tag=totalprice]").html(paydetail.appendmoney);
        var roomtypelist = [];
        var tipmsg = '';
        var unqid = 0;
        var phone = '';
        if (!M.isEmpty(paydetail.bookallroom) && paydetail.bookallroom == 1) {
            var item = items[0];
            if (!M.isEmpty(order.indate)) {
                var datetime = M.strtotime(item.indate);
            } else {
                var datetime = M.strtotime(item.arrivedate);
            }
            tipmsg += '包场，' + datestr + '入住，住' + item.nights + '晚';
            unqid = item.orderuniqid;
            if (!M.isEmpty(item.phone)) {
                phone = item.phone;
            }
        } else {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (!M.isEmpty(item.phone)) {
                    phone = item.phone;
                }
                var roomtypeid = item.roomtypeid;
                var has = 0;
                for (var j = 0; j < roomtypelist.length; j++) {
                    if (roomtypelist[j] == item.roomtypename) {
                        has = 1;
                    }
                }
                if (has == 0) {
                    roomtypelist.push(item.roomtypename);
                }
                if (!M.isEmpty(order.indate)) {
                    var datetime = M.strtotime(item.indate);
                } else {
                    var datetime = M.strtotime(item.arrivedate);
                }
                var datestr = M.timeformat(datetime, 'm/d');
                tipmsg += item.roomname + "(" + item.roomtypename + ")," + datestr + "入住，住" + item.nights + "晚<br/>";
                unqid = item.orderuniqid;
            }
        }
        if (items.length > 1) {
            tpl_info.find("i[tag=desctip]").attr("title", "").tooltip({
                position: {
                    my: "left+15 top+20",
                    at: "left bottom"
                },
                track: 1,
                content: tipmsg,
                show: {
                    delay: 100
                }
            });
        }
        var roomtypestr = roomtypelist.join("，");
        this.context.cashierhiddedata.attr("rtmsg", roomtypestr).attr("unqid", unqid);
        if (action == 'submitorder' || action == "hisadd" || action == "orderandcheckin") {
            msgdesc += roomtypestr + '，需要您支付' + paydetail.appendmoney + '元定金，请点击以下链接以完成支付。';
        } else {
            msgdesc = '您有一笔来自&lt;' + innname + '&gt的交易，需支付' + paydetail.appendmoney + '元，请点击以下链接以完成支付。';
        }
        this.context.cashierform.find("div[tag=msgdesc]").children("span").html(msgdesc);
        this.context.cashierform.find("input[name=phone]").val(phone);
        this.context.cashierform.attr("oid", paydetail.accountid);
        this.context.cashierform.attr("aid", paydetail.accountid)
    },
    cashiermsg: function(ele) {
        var name = this.orderdetail.items[0].guestname;
        var phone = this.context.cashierform.find("input[name=phone]").val();
        var msg = this.context.cashierform.find("div[tag=msgdesc]").children("span").text();
        var href = this.context.cashierform.find("div[tag=msgdesc]").children("a").attr("href");
        var msgcon = msg + href;
        var other = this.context.cashierhiddedata.attr("rtmsg");
        var orderstatus = this.context.cashierhiddedata.attr("orderstatus");
        if (M.isEmpty(orderstatus)) {
            orderstatus = 'ordered';
        }
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
        var uniqid = this.context.cashierhiddedata.attr("unqid");
        M._getjson("/pay/sendmsg", {
            "uniqid": uniqid,
            "name": name,
            "phone": phone,
            "msgcon": msgcon,
            "other": other,
            "orderstatus": orderstatus,
            "type": 1
        },
        this.cashiermsg_finished.toEventHandler(this));
        this._closepopup();
    },
    cashiermsg_finished: function(d) {
        if (d.status == "success") {
            var orderstatus = this.orderstatus;
        } else {
            M.error((d.msg));
        }
    },
    printform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case 'A4':
            this.context.printform.attr("printtype", "A4");
            this.print();
            break;
        case 'memo':
            this.context.printform.attr("printtype", "memo");
            this.print();
            break;
        }
    },
    print: function() {
        var operate = this.context.printform.attr("operate");
        var unqid = this.context.printform.attr("unqid");
        var innid = this.innid;
        var cidstr = this.context.printform.attr("cidstr");
        if (M.isEmpty(cidstr)) {
            cidstr = '';
        }
        M.CloseLast();
        var href = "/Print/index?innid=" + innid + "&type=op&operate=" + operate + "&unqid=" + unqid + "&cidstr=" + cidstr;
        this.context.opennewurl.attr("href", href);
        var msg = "";
        if (operate == 'checkin') {
            msg = "您已开启打印入住单功能，确认打印吗？";
        } else {
            msg = "您已开启打印退房单功能，确认打印吗？";
        }
        var domsg = '确定';
        var canclemsg = '取消';
        M.confirm(msg, this.print_confirm.toEventHandler(this), this.print_cancle.toEventHandler(this), domsg, canclemsg);
    },
    print_confirm: function() {
        var href = this.context.opennewurl.attr("href");
        window.open(href);
        M.closeMessage();
    },
    print_cancle: function() {
        M.closeMessage();
    },
    msgPopclose: function(e) {
        this.qrOpened = false;
        this._closepopup();
    },
    switchPaytype_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == "qrcode") {
            this.context.cashierPop.find("div[tag=qrcodeinfo]").show();
            this.context.cashierPop.find("div[tag=qrcodedesc]").show();
            this.context.cashierPop.find("div[tag=boxpayinfo]").hide();
            this.context.cashierPop.find("li[tag=qrcode]").attr("class", "checked");
            this.context.cashierPop.find("li[tag=boxpay]").attr("class", "");
            var accountid = this.context.payinfo.attr("oid");
            M._getjson("ajax.php", {
                "a": "updategateway",
                "accountid": accountid,
                'flag': "qrcode"
            });
        }
        if (t == "boxpay") {
            this.context.cashierPop.find("div[tag=qrcodeinfo]").hide();
            this.context.cashierPop.find("div[tag=qrcodedesc]").hide();
            this.context.cashierPop.find("div[tag=boxpayinfo]").show();
            this.context.cashierPop.find("li[tag=qrcode]").attr("class", "");
            this.context.cashierPop.find("li[tag=boxpay]").attr("class", "checked");
            var accountid = this.context.payinfo.attr("oid");
            M._getjson("ajax.php", {
                "a": "updategateway",
                "accountid": accountid,
                'flag': "boxpay"
            });
        }
    },
    showfindetail: function(ele, type) {
        var account = this.account;
        if (M.isEmpty(account.depositlist) && M.isEmpty(account.appendmoney)) {
            return;
        }
        this.context.findetailform.attr("ordertype", type);
        M.Popup(this.context.findetailform, {
            "hideclass": "modal w500 fade",
            "showclass": "modal w500 fade in",
            "dragable": true
        });
    },
    findetailform: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "editaccount":
            this.editaccount(ele);
            break;
        case "saveaccount":
            this.saveaccount(ele);
            break;
        case "paysyt":
            this.paysyt(ele);
            break;
        }
        t = ele.attr("t");
        if (t == 'editaccount') {
            ele.children("div").show();
        }
    },
    paysyt: function(ele) {
        this.context.cashierform.find("div[tag=pay]").show();
        this.context.cashierform.find("div[tag=payresult]").hide();
        var remarkguest = ele.parents('div[tag=re]').find('div[tag=remark]').find('span:first').text();
        var remarktpl = ele.parents('div[tag=re]').find('div[tag=remark]').children('span');
        var remark = '';
        var i = 1;
        remarktpl.each(function() {
            if (i > 1) {
                remark += $(this).text();
                remark += '，' + remarkguest + '<br />';
            }
            i++;
        });
        var accountid = this.context.cashierhiddedata.attr("accountid");
        var trade_no = ele.parents('div[tag=re]').find('span[class=red]').attr('tradingcode');
        var out_trade_no = ele.parents('div[tag=re]').find('span[class=red]').attr('id');
        var total_fee = ele.parents('div[tag=re]').find('span[class=red]').attr('total_fee');
        this.context.cashierform.attr("aid", out_trade_no);
        this.context.cashierform.find('span[tag=totalprice]').text('￥' + total_fee);
        this.context.cashierform.find('span[tag=desc]').html(remark);
        var innname = this.context.footer.find("div[tag=inn_div]").find("li.on").children("a").text();
        var operate = ele.parents("div[t=account]").attr("operate");
        var operatetype = ele.parents("div[t=account]").attr("operatetype");
        var msgdesc = '您有一笔来自&lt;' + innname + '&gt的交易，需支付' + total_fee + '元，请点击以下链接以完成支付。';
        this.context.cashierform.find('div[tag=msgdesc]').find('span').html(msgdesc);
        this.context.cashierhiddedata.attr("accountid", out_trade_no).attr("posstatus", 0).attr("operate", operate).attr("operatetype", operatetype);
        var data = {
            "tradingcode": trade_no,
            "cashierid": out_trade_no,
            "payfee": total_fee,
            "accountid": accountid
        };
        M._getjson("/pay/getrepayinfo", data, this.paysyt_finished.toEventHandler(this));
    },
    paysyt_finished: function(d) {
        if (d.status == "success") {
            M.ClosePopup();
            var info = d.info;
            var data = info.data;
            this.context.cashierform.attr("trade_no", data.trade_no);
            this.context.cashierform.find("img[tag=qrcode]").attr("src", data.pay_qr);
            this.context.cashierform.find("div[tag=msgdesc]").children("a").attr("href", data.pay_url).html(data.pay_url);
            this._handlerepayorderinfo(d);
            M.Popup(this.context.cashierform, {
                "hideclass": "modal cashier fade",
                "showclass": "modal cashier fade in"
            });
            if (this.context.cashierform.find('li[tag=msg]').attr('class') == 'checked') {
                this.context.cashierform.find("div[tag=msg]").show();
            } else if (this.context.cashierform.find('li[tag=qrcode]').attr('class') == 'checked') {
                this.context.cashierform.find("div[tag=qrcode]").show();
                this.context.body.find("div.graylayer").addClass("deepgraylayer");
            } else {
                this.context.cashierform.find("div[tag=pos]").show();
            }
            this.qrOpened = true;
            this._longPolling();
        } else {
            M.error(d.msg);
        }
    },
    _handlerepayorderinfo: function(d) {
        var ordertype = this.context.findetailform.attr("ordertype");
        var tpl_info = this.context.cashierform.find("div[tag=info]");
        var items = '';
        var bookallroom = 0;
        if (this.orderstatus == "order") {
            items = this.temporderdetail.orderset.orders;
            bookallroom = this.temporderdetail.bookallroom;
        } else {
            items = this.tempcheckdetail.checkinset.orders;
            bookallroom = this.tempcheckdetail.bookallroom;
        }
        var appendmoney = d.req.payfee;
        var accountid = d.req.trade_no;
        var payname = {
            "appendmoney": appendmoney,
            "accountid": accountid,
            "bookallroom": bookallroom
        };
        var operate = this.context.cashierhiddedata.attr("operate");
        var operatetype = this.context.cashierhiddedata.attr("operatetype");
        var a = "editorder";
        if (operatetype == '1') {
            a = "submitorder";
        }
        this.orderdetail = {
            "a": a,
            "items": items,
            "paydetail": payname
        };
        this._showcashiermsg();
    },
    editaccount: function(ele) {
        ele.parents("div[t=account]").children("div[tag=editform]").find('input[name=datetime]').datetimepicker({
            timeFormat: "HH:mm:ss",
            dateFormat: "yy-mm-dd"
        });
        ele.parent("div[tag=d]").hide();
        ele.parents("div[t=account]").children("div[tag=editform]").show();
    },
    saveaccount: function(ele) {
        var innid = this.context.roomtype.attr("innid");
        var id = ele.parents("div[t=account]").attr("aid");
        var money = ele.parent().children("input[name=money]").val();
        var date = ele.parent().children("input[name=datetime]").val();
        var paytype = ele.parent().children("div[t=editaccount]").children("span").attr("value");
        this.accounttarget = ele.parents("div[t=account]");
        if (M.isEmpty(paytype)) {
            M.error("支付方式不能为空");
            return;
        }
        var ordertype = this.orderstatus;
        M._getjson("/Book/editaccount", {
            "op": "editaccount",
            "innid": innid,
            "id": id,
            "date": date,
            "money": money,
            "paytype": paytype,
            "ordertype": ordertype
        },
        this.saveaccount_finished.toEventHandler(this));
    },
    saveaccount_finished: function(d) {
        if (d.status == "success") {
            var id = d.req.id;
            var data = d.data;
            var olddata = d.olddata;
            var account = d.account;
            var ordertype = d.req.ordertype;
            var account_tpl = this.accounttarget;
            account_tpl.children("div[tag=d]").children("span").html(data.title);
            account_tpl.children("div[tag=editform]").children("span[tag=title]").html(data.edittitle);
            account_tpl.children("div[tag=d]").show();
            account_tpl.children("div[tag=editform]").hide();
            if (ordertype == "order") {
                var temp = this.temporderdetail;
                var setid = temp.ordersetid;
                var orderlist = temp.orderset.orders;
                var totalprice = temp.orderset.totalprice;
                var tpl = this.context.orderformbody.children("li[tag=paytype]").children("div[tag=paystatistics]");
            } else if (ordertype == "delete") {} else {
                var temp = this.tempcheckdetail;
                var setid = temp.checkinsetid;
                var orderlist = temp.checkinset.orders;
                var totalprice = temp.checkinset.totalprice;
                tpl = this.context.editcheck.find("div[tag=paystatistics]");
            }
            this.context.needpayform.attr("payedtotal", account.payedtotal);
            if (data.type == 2) {
                var deposit = this.context.needpayform.attr("payeddeposit");
                var deposittotal = parseInt(deposit) + parseInt(data.amount) - parseInt(olddata.amount);
                this.context.needpayform.attr("payeddeposit", deposittotal);
            }
            if (this.orderstatus == "order") {
                var orderroomlist = this.context.orderformbody.children("li[tag=orderroomlist]");
            } else {
                var orderroomlist = this.context.editcheckbody.children("li[tag=orderroomlist]");
            }
            if (!M.isEmpty(orderroomlist)) {
                this._sumorderprice(orderroomlist);
            }
            M.success("保存成功");
        } else {
            alert(d.msg);
        }
    },
    color_mousemove: function(e) {
        var ele = M.EventEle(e);
        var style = ele.parents("div[tag=color]").children("span").attr("class");
        if (M.isEmpty(style)) return;
        var value = style.replace(/(^\s*)|(\s*$)/g, "").replace("checked", "");
        var selected = ele.parents("div[tag=color]").children("div[tag=colorlist]").children("span[ison=1]");
        selected.attr('ison', "0");
        selected.attr("class", selected.attr("val"));
        var tpl = ele.parents("div[tag=color]").children("div[tag=colorlist]").show().children("span[val=" + value + "]");
        tpl.attr("ison", "1");
        tpl.attr("class", tpl.attr("val") + " checked");
        ele.parents("div[tag=color]").children("div[tag=colorlist]").children("span[tag=color]:last").css("margin-right", 0);
        this.context.attnlist.hide();
    },
    color_mouseleave: function(e) {
        var ele = M.EventEle(e);
        var tag = ele.attr("tag");
        if (tag == "colorlist") ele.hide();
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
            var bookallroom = 0;
            var orderdetail = '';
            if (!M.isEmpty(orderstatus) && orderstatus == -1) {
                orderlist = d.orderlist;
            } else {
                if (status == 0) {
                    bookallroom = this.temporderdetail.bookallroom;
                    orderdetail = this.temporderdetail.orderset;
                    orderlist = this.temporderdetail.orderset.orders;
                } else {
                    bookallroom = this.tempcheckdetail.bookallroom;
                    orderdetail = this.tempcheckdetail.checkinset;
                    orderlist = this.tempcheckdetail.checkinset.orders;
                }
            }
            if (bookallroom == 1) {
                for (var j = 0; j < 1; j++) {
                    var order = orderlist[j];
                    if (M.isEmpty(order.checkindate)) {
                        var checkintime = M.strtotime(order.d);
                    } else {
                        var checkintime = M.strtotime(order.checkindate);
                    }
                    var checkindate = M.timeformat(checkintime, 'm/d');
                    html += '<p>【包场】' + checkindate + '入住,' + order.nights + '晚,¥' + orderdetail.totalprice;
                    if (order.status == 0) {
                        html += ',[已删除]';
                    } else if (status == 1) {
                        if (order.groupstatus == 1) {
                            html += ',[已入住]';
                        } else {
                            html += ',[已退房]';
                        }
                    }
                    html += '</p>';
                }
            } else {
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
                    } else if (status == 1) {
                        if (order.groupstatus == 1) {
                            html += ',[已入住]';
                        } else {
                            html += ',[已退房]';
                        }
                    }
                    html += '</p>';
                }
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
        this.context.e_guestname.children("span").html("");
        this.context.e_guestphone.html("");
        this.context.e_orderinfo.children("span[tag=price]").html("");
        this.context.e_orderinfo.children("h2[tag=roomname]").html("");
        this.context.e_orderinfo.children("p[tag=time]").html("");
        this.context.e_orderinfo.children("p[tag=nights]").html("");
        this.context.idnuminfo.html("");
        this.context.e_remark.html("");
        this.context.e_logo.attr("class", "ico-own fl mr10");
        this.context.e_ordercell.attr("oid", oid).attr("cols", cols).attr("rid", rid).attr("row", row).attr("setid", "");
        this.context.e_checkinbtn.show();
        this.context.e_orderdetail.children(".modal-footer").children("a[tag=editorder]").show();
        this.context.e_guestphone.parent().children("a[tag=sendmsg]").hide();
        this.temporderdetail = null;
        this.context.submitlayer.show();
        M._getjson("/Book/orderdetail", {
            "op": "orderdetail",
            "orderid": oid,
            "rid": rid
        },
        this.odetail_finished.toEventHandler(this));
    },
    _searcheditcheckorder: function(tpl, celldata, gid) {
        this.context.c_guestname.children("span").html("");
        this.context.c_guestname.children("a").hide();
        this.context.c_phone.html("");
        this.context.c_remark.html("");
        this.context.c_needcar.html("");
        this.context.c_checkoutbtn.show().attr("action", "");;
        this.context.c_editbtn.show().attr("action", "");
        this.context.c_checkoutbtn.html("办理退房").hide();
        this.context.c_phone.parent().children("a[tag=sendmsg]").hide();
        this.context.checkin_idnuminfo.html("");
        var rid = celldata.roomid;
        var cid = celldata.cid;
        var setid = celldata.setid;
        var cols = celldata.col;
        var row = celldata.row;
        this.context.c_hiddencell.attr("rid", rid).attr("gid", gid).attr("cid", cid).attr("cols", cols).attr("row", row).attr("setid", setid);
        this.context.submitlayer.show();
        M._getjson("/Book/checkindetail", {
            "op": "checkindetail",
            "gid": gid,
            "roomid": rid
        },
        this.checkindetail_finished.toEventHandler(this));
    },
    body_click: function(e) {
        var ele = M.EventEle(e);
        var style = ele.attr("tag");
        if ((M.isEmpty(style) || style != 'dropdownlist')) {
            if (M.isEmpty(style) || (!M.isEmpty(style) && style != 'showconsumetype')) {
                var tpl_parents = ele.parents("div[tag=popform]");
                if (tpl_parents.length > 0) {
                    var tpl = ele.parents("div[tag=dropdownlist]");
                    if (tpl.length == 0) {
                        tpl_parents.children().find(".droplist_on").removeClass("droplist_on").children("div").hide();
                    }
                } else {
                    var tpl = ele.parents("div[t=sex]");
                    if (tpl.length == 0) {
                        this.context.multiguestform.find("div[t=sex]").children("div").hide();
                    }
                }
            }
        }
        if (style != 'showaddconsume') {
            var tpl = ele.parents("div[tag=finlist]");
            if (tpl.length == 0) {
                this.context.orderformbody.children("li[tag=paytype]").find("div[tag=finlist]").children("div").removeClass('addfinance_on');
                this.context.editcheckbody.children("li[tag=paytype]").find("div[tag=finlist]").children("div").removeClass('addfinance_on');
            }
        }
        var tpl = ele.parents("div[t=consume]");
        if (tpl.length == 0 && style != 'consumeform') {
            this.context.needpayform.find("div[t=consume]").find("div[tag=consumelist]").hide();
        }
        var tpl = ele.parents("div[t=editaccount]");
        if (tpl.length == 0 && style != 'dropdownlist') {
            this.context.findetailform.find("div[t=editaccount]").children("div").hide();
        }
        if (ele.parents("div[tag=attnmenu]").length == 0) {
            this.context.attnlist.hide();
        }
        tpl = ele.parents("div[t=remindtype]");
        if (tpl.length == 0 && style != 'dropdownlist') {
            this.context.remindsettingtpl.find("div[t=remindtype]").children("div").hide();
        }
        if (ele.parents("div[id=datepickerpriceform]").length == 0) {
            if (! (!M.isEmpty(style) && style == 'price')) {
                this.context.datepickerpriceform.hide();
            }
        }
    },
    hidemultiguesttip: function() {
        this.context.multiguesttip.attr("status", "0").hide();
    },
    addpaytype_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'rm_type') {
            var rm_typename = this.context.orderformbody.children("li[tag=paystatus]").find("div[tag=addoption]").children("input[tag=rm_name]").val();
            this.addrm_type(rm_typename);
        }
        if (t == 'dt_type') {
            var dt_typename = this.context.orderformbody.children("li[tag=paystatus]").find("div[tag=addoption]").children("input[tag=dt_name]").val();
            this.addrm_type(dt_typename);
        }
    },
    addrm_type: function(typename) {
        if (M.isEmpty(typename)) {
            alert('支付方式不能为空');
            return;
        }
        M._getjson("/ajaxsetting2.php", {
            "a": "addpaymethod",
            "payname": typename
        },
        this.addnew_finished.toEventHandler(this));
    },
    addnew_finished: function(d) {
        if (d.status == "success") {
            var paytypecode = d.paytypecode;
            var id = d.id;
            var paytyppname = d.paytyppname;
            var channel_tpl = '<div value="${paytypecode}" tag="option"><a  id="${id}" class="" href="javascript:;" tag="option">${paytyppname}</a></div>';
            $.tmpl(channel_tpl, {
                "id": id,
                "paytyppname": paytyppname,
                "paytypecode": paytypecode
            }).insertBefore(this.context.orderformbody.children("li[tag=paystatus]").find("div[tag=addoption]"));
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        M.emptyVal(this.context.orderformbody.children("li[tag=paystatus]").find("div[tag=addoption]").children("input[tag=rm_name]"));
        M.emptyVal(this.context.orderformbody.children("li[tag=paystatus]").find("div[tag=addoption]").children("input[tag=dt_name]"));
    },
    _resetroomstatus: function() {
        var time_sh = this.context.roomstatustime.parents("div[tag=time]").css("width");
        var detail_sh = this.context.roomstatusdetail.css("width");
        var scrollHeight = this.context.roomstatusscroll[0].scrollHeight;
        var clientHeight = this.context.roomstatusscroll[0].clientHeight;
        if (scrollHeight > clientHeight) {
            this.context.roomstatustime.parents("div[tag=time]").css("overflow-y", "scroll");
        } else {
            this.context.roomstatustime.parents("div[tag=time]").css("overflow-y", "hidden");
            this.context.roomstatustime.parent().parent().css("width", time_sh);
        }
    },
    _handleroomstatusthumb: function(length) {
        var order_tpl = this.context.roomstatusdetail.children("tbody").children("tr[tag=roomtype]");
        var time_tpl = this.context.roomstatustime;
        var html_arr = new Array();
        var index = 0;
        for (var i = 0; i < length; i++) {
            html_arr.push('<td i="' + i + '"><div class=""></div></td>');
        }
        var html = html_arr.join('');
        order_tpl.each(function() {
            $(this).append(html);
        });
        var fromdate = time_tpl.children("th[i=0]").attr("t");
        var enddate = time_tpl.children("th:last").attr("t");
        M._getjson("ajax2.php", {
            "a": "getstatus",
            "fromdate": fromdate,
            "enddate": enddate,
            "watistics": 0
        },
        this._getthumbroomstatus_finished.toEventHandler(this));
    },
    _getthumbroomstatus_finished: function(d) {
        if (d.status == 'success') {
            var order_tpl = this.context.roomstatusdetail.children("tbody").children("tr[tag=roomtype]");
            var time_tpl = this.context.roomstatustime;
            var roomstatusdata = d.roomstatus;
            var length = roomstatusdata.length;
            var startdate = time_tpl.children("th[i=0]").attr("t");
            var starttime = M.strtotime(startdate);
            for (var k = 0; k < length; k++) {
                var data = roomstatusdata[k];
                var nights = data.nights;
                var roomid = data.roomid;
                var date = data.d;
                var date_i = time_tpl.children("th[t=" + date + "]").attr("i");
                if (M.isEmpty(date_i)) {
                    if (date < startdate) {
                        var datetime = M.strtotime(date);
                        var ts = starttime - datetime;
                        var days = Math.floor(ts / (24 * 3600 * 1000));
                        nights = nights - days;
                        date_i = time_tpl.children("th[t=" + startdate + "]").attr("i");
                    }
                }
                var target_tr = this.context.roomstatusdetail.children("tbody").children("tr[rid=" + roomid + "]");
                for (var j = 0; j < nights; j++) {
                    target_tr.children("td[i=" + date_i + "]").children("div").addClass("block");
                    date_i++;
                }
            }
        } else {
            alert("网络错误");
        }
    },
    _clearroomstatusthumb: function() {
        var time_tpl = this.context.roomstatustime;
        time_tpl.children("th:first").nextAll().remove();
        var order_tpl = this.context.roomstatusdetail.children("tbody").children("tr[tag=roomtype]");
        order_tpl.each(function() {
            var tpl = $(this).children("td:first").nextAll().remove();
        });
    },
    warnota_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'closebtn') {
            this.context.warnota.css("display", "none");
        }
    },
    channel_change: function(ele) {
        var style = ele.children("a").attr("color");
        if (M.isEmpty(style)) {
            style = 'ofreshgreen';
        }
        if (style === "ofreshgreen" || style == "ofreshorange" || style == "ogray") {
            var tpl_form = ele.parents("div[tag=popform]");
            var orderstatus = tpl_form.attr("orderstatus");
            if (!M.isEmpty(orderstatus)) {
                style = this.defaultcolor[orderstatus];
            }
        }
        this.context.ordercell.attr("color", style);
        this.context.editcheck.children(".modal-footer").find("input[type=hidden]").attr("color", style);
        var tpl = ele.parents("ul[tag=orderform]");
        var colorfield = tpl.children("li[tag=ordercolor]").find("div[tag=colorlist]");
        var selected = colorfield.children("span[ison=1]");
        selected.attr('ison', "0");
        selected.attr("class", selected.attr("val"));
        var first = colorfield.children("span[val=" + style + "]");
        first.attr("ison", "1");
        first.attr("class", first.attr("val") + " checked");
        tpl.children("li[tag=ordercolor]").children("div[tag=color]").children("span").attr("class", first.attr("val") + " checked");
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
        this.transform.expand_room();
        this.context.selecttime.hide();
        var width = this.transform.gettopwidth();
        var css = this.context.roomlist.children("tbody").children("tr").children("td[tag=watertotal]").css("display");
        this.context.pickerarea.children("table").children("tbody").children("tr").children("td[tag=total]").css("display", css).children("div");
        this.context.pickerarea.children("table").children("tbody").children("tr").children("td[tag=day]").children("div").css("width", width);
        this.jump_order = {
            roomlist: [],
            daylist: [],
            datelist: []
        };
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
    _getinnnamebyinnid: function(innid) {
        return this.context.footer.find("li[innid=" + innid + "]").children("a").text();
    },
    msgform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == "send") {
            this.savemsg();
        }
        if (t == "msgrole") {
            M.Popup(this.context.msgrole, {
                "hideclass": "bootbox modal view fade",
                "showclass": "bootbox modal view fade in"
            });
        }
    },
    opaystatus_change: function(e) {
        var paystatus = this.context.o_paystatus.val();
        if (paystatus == 2) {
            this.context.o_deposit.show();
        } else {
            this.context.o_deposit.hide();
        }
    },
    editdelorderform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "showfindetail":
            this.showfindetail(ele, this.context.editdelorderform.attr("ordertype"));
            break;
        case "consumetotal":
            this.showneedpaydetail("delete");
            break;
        case "editorder":
            this.savedeletedorder();
            break;
        case "editgpbookorder":
            this.savegpbookorder();
            break;
        case "discount":
            this.discountdetail(this.context.editdelorderform);
            break;
        }
    },
    savegpbookorder: function() {
        var guestname = this.context.delorderbody.find("input[name=guestname]").val();
        var phone = this.context.delorderbody.find("input[name=phone]").val();
        var channel = this.context.delorderbody.find("div[t=channllist]").children("span").attr("value");
        var channelname = this.context.delorderbody.find("div[t=channllist]").children("span").html();
        var remark = M.getVal(this.context.delorderbody.children("li[tag=remark]").children("textarea"));
        var totalprcie = this.context.delorderbody.children("li[tag=bookallroom]").find("input[name=price]").val();
        var data = {
            "guestname": guestname,
            "phone": phone,
            "channel": channel,
            "remark": remark,
            "channelname": channelname,
            "bookallroom": 1,
            "totalprcie": totalprcie
        };
        data.uniqid = this.context.editdelorderform.attr("uniqid");
        var ordertype = this.context.editdelorderform.attr("ordertype");
        var url = '/Book/editdeleteorder';
        if (ordertype != "order") {
            url = '/Book/editdeletecheckingroup';
        }
        M._getjson(url, data, this.editdeleteorder_finished.toEventHandler(this));
    },
    savedeletedorder: function() {
        var guestname = this.context.delorderbody.find("input[name=guestname]").val();
        var phone = this.context.delorderbody.find("input[name=phone]").val();
        var channel = this.context.delorderbody.find("div[t=channllist]").children("span").attr("value");
        var channelname = this.context.delorderbody.find("div[t=channllist]").children("span").html();
        var remark = M.getVal(this.context.delorderbody.children("li[tag=remark]").children("textarea"));
        var orderlist = this.context.delorderbody.children("li[tag=orderroomlist]").children("div[tag=order]");
        var orderdata = [];
        orderlist.each(function() {
            var tpl = $(this);
            var oid = tpl.attr("oid");
            var totalprice = tpl.children("input[name=price]").val();
            var temp = {
                "id": oid,
                "totalprice": totalprice
            };
            orderdata.push(temp);
        });
        var data = {
            "guestname": guestname,
            "phone": phone,
            "channel": channel,
            "remark": remark,
            "channelname": channelname,
            "bookallroom": 0
        };
        data.orderdata = JSON.stringify(orderdata);
        data.uniqid = this.context.editdelorderform.attr("uniqid");
        var ordertype = this.context.editdelorderform.attr("ordertype");
        var url = '/Book/editdeleteorder';
        if (ordertype != "order") {
            url = '/Book/editdeletecheckingroup';
        }
        M._getjson(url, data, this.editdeleteorder_finished.toEventHandler(this));
    },
    editdeleteorder_finished: function(d) {
        if (d.status == "success") {
            this.ordercallback.call(this, d);
            M.ClosePopup();
        } else {
            alert(d.msg);
        }
    },
    orderform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        var tpl = ele.parents("div[tag=guest]");
        if (tpl.length == 0) {
            if (t == "guest") {
                tpl = ele;
            } else {
                this.context.orderformbody.children().find("div[tag=guestlist]").hide();
            }
        }
        var ele_t = ele.attr("t");
        if (ele_t == 'consume') {
            ele = ele.children("span");
            t = 'showconsumetype';
        }
        switch (t) {
        case "title":
            this.normalorder();
            break;
        case "blockbooking":
            this.blockbooking();
            break;
        case "addroom":
            var orderroomlist = this.context.orderform.children(".modal-body").find(".cntlist").children("li[tag=orderroomlist]");
            this.addroomtpl(orderroomlist);
            break;
        case "removeroom":
            this.removeroomtpl(ele);
            break;
        case "suborder":
            this.submitorder();
            break;
        case "checkin":
            this.orderandcheckin();
            break;
        case "color":
            this.setordercolor(ele);
            break;
        case "multiguest":
            this.addmultiguest(ele, "order");
            break;
        case "close":
            this.colse_form();
            break;
        case "searchguest":
            this.searchguest();
            break;
        case "showfindetail":
            this.showfindetail(ele, "order");
            break;
        case "addroomrate":
            this.addroomrate(ele);
            break;
        case "adddeposit":
            this.adddeposit(ele);
            break;
        case "addconsume":
            this.addconsume(ele);
            break;
        case "showconsumetype":
            this.showconsumetype(ele);
            break;
        case "consumetype":
            this.setconsumetype(ele);
            break;
        case "showneedpaydetail":
            this.showneedpaydetail();
            break;
        case "showaddconsume":
            this.showaddconsumeform(ele);
            break;
        case "roompay":
            if (ele.val() == "0") {
                ele.select();
            }
            break;
        case "roomdeposit":
            if (ele.val() == "0") {
                ele.select();
            }
            break;
        case "input_consume":
            if (ele.val() == "0") {
                ele.select();
            }
            break;
        case "bookallroom_input":
            if (ele.val() == "0") {
                ele.select();
            }
            break;
        case "delpayform":
            this.delpayform(ele);
            break;
        case "showattn":
            this.showattn(ele);
            break;
        case "checkbox":
            this.checkboxtoggle(ele);
            break;
        case "checkboxlabel":
            this.checkboxtoggle(ele.children("span[tag=checkbox]"));
            break;
        case "remind":
            this.remindsetting(ele);
            break;
        case "discount":
            this.discountdetail(this.context.orderform);
            break;
        case 'price':
            this.showdateprice(ele);
            break;
        default:
            if (tpl.length > 0) {
                this.selectguest(tpl);
            }
            break;
        }
    },
    showdateprice: function(ele) {
        if (this.bookallroom == 1) {
            return;
        }
        var t = ele.attr("t");
        if (!M.isEmpty(t) && t == 'del') {
            return;
        }
        this.target_price = ele;
        var tpl = ele.parents("div[tag=order]");
        var roomlist = tpl.find("div[t=rooms]");
        var roomid = roomlist.children("span").attr("value");
        var rtid = roomlist.find("div[tag=option][value=" + roomid + "]").attr("rtid");
        roomlist.children("span").attr("rtid", rtid);
        var input_price = ele.val();
        var offset = ele.offset();
        if (this.from == 'book') {
            var top = offset.top + 38;
            var left = offset.left - 220;
        } else {
            var top = offset.top - 5;
            var left = offset.left - 220;
        }
        var nights = tpl.find("div[t=nights]").children("span").attr("value");
        if (nights == 0) {
            this.context.datepickerpriceform.hide();
            return;
        }
        this.context.datepickerpriceform.css("top", top).css("left", left);
        this.context.datepickerpriceform.find("a[tag=saveavgprice]").hide();
        if (M.isEmpty(input_price)) {
            input_price = 0;
        }
        this._handelprice(ele, input_price);
        this.context.datepickerpriceform.show();
    },
    _handelprice: function(ele, input_price) {
        var tpl_p = ele.parents("div[tag=order]");
        var i = tpl_p.attr("i");
        var rtid = tpl_p.find("div[t=rooms]").children("span").attr("rtid");
        var checkindate = tpl_p.find("div[id=selectDay]").children("span").attr("value");
        var nights = tpl_p.find("div[t=nights]").children("span").attr("value");
        var checkintime = M.strtotime(checkindate);
        checkintime.setDate(checkintime.getDate() + parseInt(nights));
        var checkoutdate = M.timeformat(checkintime, 'Y-m-d');
        this._handledatepricelist(checkindate, checkoutdate, i, input_price, nights, rtid);
    },
    _handledatepricelist: function(checkindate, checkoutdate, i, input_price, nights, rtid) {
        var checkintime = M.strtotime(checkindate);
        var checkouttime = M.strtotime(checkoutdate);
        checkouttime.setDate(checkouttime.getDate() - 1);
        var totalprice = this._gettotalprice(checkindate, checkoutdate, i, rtid);
        var difprice = 0;
        this._showavprice(input_price, nights);
        if (totalprice != input_price) {
            totalprice = parseInt(totalprice);
            input_price = parseInt(input_price);
            var iprice = (totalprice - input_price) / nights;
            difprice = parseInt(iprice * 100 / 100);
        }
        this.context.datepickerpriceform.attr("index", i);
        var targetpricelist = this.context.datepickerpriceform.find("tr[tag=pricelisttpl]");
        this.context.datepickerpriceform.find("tr[tag=pricelist]").remove();
        var targetmenu = this.context.datepickerpriceform.find("tr[tag=menutpl]");
        this.context.datepickerpriceform.find("tr[tag=pricelist]").remove();
        this.usersetdateprice[i] = {};
        var index = 0;
        this.context.datepickerpriceform.find("tbody[tag=pricelist]").find("tr[tag=tpl_price]").before('<tr tag="pricelist"></tr>');
        var target = this.context.datepickerpriceform.find("tr[tag=pricelist]:last");
        var tpl = this.context.datepickerpriceform.find("td[tag=tpl_dateprice]");
        while (checkintime <= checkouttime) {
            var html = tpl.clone().attr("s", "0");
            var arrivedate = M.timeformat(checkintime, 'Y-m-d');
            var price = this._getprice(arrivedate, i, difprice, rtid);
            price = parseInt(price);
            var datestr = M.timeformat(checkintime, 'm-d');
            var date = M.timeformat(checkintime, 'Y-m-d');
            var wk = checkintime.getDay();
            var wkname = this.weektext[wk];
            html.find("div[tag=date]").attr("date", date).html(datestr + ' ' + wkname);
            html.find("a[tag=price]").html(price + '元');
            html.find("input[name=price]").val(price);
            target.append(html);
            this.usersetdateprice[i][arrivedate] = price;
            index++;
            if (index >= 3) {
                index = 0;
                this.context.datepickerpriceform.find("tr[tag=tpl_price]").before('<tr tag="pricelist"></tr>');
                target = this.context.datepickerpriceform.find("tr[tag=pricelist]:last");
            }
            checkintime.setDate(checkintime.getDate() + 1);
        }
        if (nights > 3 && index != 0) {
            for (var i = index; i < 3; i++) {
                var html = tpl.clone();
                html.attr("s", "1").find("div[tag=date]").attr("date", '').html('');
                html.find("a[tag=price]").html('');
                target.append(html);
            }
        }
        this.context.datepickerpriceform.find("input[name=price]").bind("blur", this.pickerpriceinputblur.toEventHandler(this));
    },
    pickerpriceinputblur: function(e) {
        var ele = M.EventEle(e);
        var price = ele.val();
        var reg = /^[0-9]*$/;
        if (!reg.test(price)) {
            alert('价格只能是整数');
            return false;
        }
        ele.hide();
        ele.parent().children("a").html(price + '元').show();
        var index = this.context.datepickerpriceform.attr("index");
        if (this.orderstatus == "addorder" || this.orderstatus == 'order' || this.orderstatus == '') {
            var ordertpl = this.context.orderformbody.children("li[tag=orderroomlist]").children("div[i=" + index + "]");
        } else {
            var ordertpl = this.context.editcheckbody.children("li[tag=orderroomlist]").children("div[i=" + index + "]");
        }
        var rtid = ordertpl.find("div[t=rooms]").children("span").attr("rtid");
        this._setavgpricestatus(0, 0, index, rtid);
        var nights = ordertpl.find("div[t=nights]").children("span").attr("value");
        var data = this._getpickerpricelist(rtid);
        this.roomtypepricelist[index] = data.list;
        ordertpl.find("input[tag=price]").val(data.total);
        this._showavprice(data.total, nights);
        var orderroomlist = ordertpl.parents("li[tag=orderroomlist]");
        this._sumorderprice(orderroomlist);
    },
    _setavgpricestatus: function(status, price, index, rtid) {
        this.avgpricestatus[index] = {};
        this.avgpricestatus[index][rtid] = {
            "status": status,
            "price": price
        };
    },
    _showavprice: function(total, nights) {
        var avprice = Math.round(parseInt(total) / parseInt(nights));
        this.context.datepickerpriceform.find("input[name=avgprice]").val(avprice);
    },
    _getpickerpricelist: function(rtid) {
        var list = this.context.datepickerpriceform.find("tr[tag=pricelist]").children("td");
        var temp = [];
        var total = 0;
        list.each(function() {
            var tpl = $(this);
            var price = tpl.find("input").val();
            var date = tpl.find("div[tag=date]").attr("date");
            if (!M.isEmpty(price) && !M.isEmpty(date)) {
                price = parseInt(price);
                if (price >= 0) {
                    total += parseInt(price);
                    var data = {
                        "date": date,
                        "price": price,
                        "rtid": rtid
                    };
                    temp.push(data);
                }
            }
        });
        return {
            "total": total,
            "list": temp
        };
    },
    datepickerpriceform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case 'price':
            ele.hide();
            ele.parent().children("input").show().focus();
            break;
        case 'saveavgprice':
            this.saveavgprice(ele) break;
        }
    },
    avgprice_avgprice: function() {
        this.context.datepickerpriceform.find("a[tag=saveavgprice]").show();
    },
    saveavgprice: function(ele) {
        ele.hide();
        var price = ele.parent().children("input").val();
        var index = this.context.datepickerpriceform.attr("index");
        if (this.orderstatus == "addorder" || this.orderstatus == 'order') {
            var ordertpl = this.context.orderformbody.children("li[tag=orderroomlist]").children("div[i=" + index + "]");
        } else {
            var ordertpl = this.context.editcheckbody.children("li[tag=orderroomlist]").children("div[i=" + index + "]");
        }
        var rtid = ordertpl.find("div[t=rooms]").children("span[tag=value]").attr("rtid");
        if (M.isEmpty(price) && price !== 0) {
            if (confirm("如果均价设置为空，每晚单价将按照系统默认价格重新计算?")) {
                this.avgpricestatus[index] = {};
                var orderroomlist = ordertpl.parents("li[tag=orderroomlist]");
                this.roomtypepricelist[index] = {};
                this.showorderprice(orderroomlist, index);
                this.showdateprice(ordertpl.find("input[tag=price]"));
                this._sumorderprice(orderroomlist);
            }
            return;
        }
        var reg = /^[0-9]*$/;
        if (!reg.test(price)) {
            alert('价格只能是整数');
            return false;
        }
        var nights = ordertpl.find("div[t=nights]").children("span").attr("value");
        var totalprice = nights * parseInt(price);
        this.avgpricestatus[index] = {}
        this.avgpricestatus[index][rtid] = {
            "status": 1,
            "price": price
        };
        ordertpl.find("input[tag=price]").val(totalprice);
        this.context.datepickerpriceform.find("tr[tag=pricelist]").find("td[s=0]").find("a[tag=price]").html(price + '元');
        this.context.datepickerpriceform.find("tr[tag=pricelist]").find("td[s=0]").find("input[name=price]").val(price);
        var orderroomlist = ordertpl.parents("li[tag=orderroomlist]");
        var data = this._getpickerpricelist('');
        this.roomtypepricelist[index] = data.list;
        this._sumorderprice(orderroomlist);
    },
    _gettotalprice: function(checkindate, checkoutdate, index, rtid) {
        var checkintime = M.strtotime(checkindate);
        var checkouttime = M.strtotime(checkoutdate);
        var total = 0;
        checkouttime.setDate(checkouttime.getDate() - 1);
        while (checkintime <= checkouttime) {
            var arrivedate = M.timeformat(checkintime, 'Y-m-d');
            var price = this._getprice(arrivedate, index, 0, rtid);
            total += parseInt(price);
            checkintime.setDate(checkintime.getDate() + 1);
        }
        return total;
    },
    _getprice: function(date, index, difprice) {
        var pricesource = this.roomtypepricelist[index];
        pricesource = this._setroomtypeprice(index);
        this.roomtypepricelist[index] = pricesource;
        var p = 0;
        for (var i = 0; i < pricesource.length; i++) {
            if (pricesource[i].date == date) {
                p = pricesource[i].price;
                if (!M.isEmpty(difprice) || difprice == 0) {
                    p = p - difprice;
                    this.roomtypepricelist[index][i].price = p;
                }
            }
        }
        return p;
    },
    _setroomtypeprice: function(index) {
        if (this.orderstatus == "addorder" || this.orderstatus == 'order' || this.orderstatus == '') {
            var tpl = this.context.orderformbody.children("li[tag=orderroomlist]").children("div[tag=order][i=" + index + "]");
        } else {
            var tpl = this.context.editcheckbody.children("li[tag=orderroomlist]").children("div[i=" + index + "]");
        }
        var roomlist = tpl.find("div[t=rooms]");
        var roomid = roomlist.children("span").attr("value");
        var rtid = roomlist.find("div[tag=option][value=" + roomid + "]").attr("rtid");
        var oid = tpl.attr("oid");
        if (M.isEmpty(this.formatedateprice)) {
            return false;
        }
        var formatedateprice = this.formatedateprice;
        var arrivedate = tpl.find("div[t=datelist]").children("span").attr("value");
        var nights = tpl.find("div[t=nights]").children("span").attr("value");
        var checkintime = M.strtotime(arrivedate);
        checkintime.setDate(checkintime.getDate() + parseInt(nights));
        var enddate = M.timeformat(checkintime, 'Y-m-d');
        var spricelist = [];
        if (!M.isEmpty(this.usersetpricelist)) {
            var o_spricelist = this.usersetpricelist[oid];
            if (!M.isEmpty(o_spricelist)) {
                spricelist = o_spricelist[rtid];
            }
        }
        var avgstatus = this._getavgstatus(index, rtid);
        var i = tpl.attr("i");
        var arrivetime = M.strtotime(arrivedate);
        var endtime = M.strtotime(enddate);
        endtime.setDate(endtime.getDate() - 1);
        var pricesource = [];
        if (!M.isEmpty(formatedateprice)) {
            pricesource = formatedateprice[rtid];
        }
        var temp = [];
        var input_price = tpl.find("input[tag=price]").val();
        var discount = this._getdiscount();
        var bookallroom = this.bookallroom;
        if (M.isEmpty(bookallroom)) {
            bookallroom = 0;
        }
        var c_discount = 10;
        if (bookallroom == 0) {
            if (discount > 0) {
                c_discount = discount;
            }
        }
        while (arrivetime <= endtime) {
            var date = M.timeformat(arrivetime, 'Y-m-d');
            var p = '';
            if (!M.isEmpty(spricelist)) {
                p = spricelist[date];
            }
            if (avgstatus.status == 1) {
                p = avgstatus.price;
            }
            if (M.isEmpty(p)) {
                if (!M.isEmpty(pricesource)) {
                    p = pricesource[date];
                    if (M.isEmpty(p)) {
                        p = 0;
                    }
                    p = parseInt((c_discount * p) / 10)
                }
            }
            if (!M.isEmpty(this.roomtypepricelist[index])) {
                var datelist = this.roomtypepricelist[index];
                for (d in datelist) {
                    if (datelist[d].date == date && datelist[d].rtid == rtid) {
                        p = datelist[d].price;
                    }
                }
            }
            if (M.isEmpty(p)) p = 0;
            if (isNaN(p)) p = 0;
            if (input_price == 0) p = 0;
            p = parseInt(p);
            var data = {
                "date": date,
                "price": p,
                "rtid": rtid
            };
            var has = 0;
            for (var i = 0; i < temp.length; i++) {
                if (temp[i] == date) {
                    has = 1;
                }
            }
            if (has == 0) {
                temp.push(data);
            }
            arrivetime.setDate(arrivetime.getDate() + 1);
        }
        return temp;
    },
    discountdetail: function(target) {
        var list = '';
        var html_tbody = this.context.discountpop.find('table').children('tbody');
        var tpl_discount = this.tpl_discount;
        html_tbody.children('tr[tag!=title]').remove();
        if (!M.isEmpty(target)) {
            var discount = this._getdiscount();
            var data = {};
            var i = 0;
            target.find('li[tag=orderroomlist]').children('div[tag=order]').each(function() {
                var price = $(this).children('input[tag=price]').val();
                var orgprice = $(this).children('input[tag=price]').attr('orgprice');
                var roomname = $(this).children('div[t*=room]').children('span').html();
                data['roomname'] = roomname;
                data['totalprice'] = price;
                data['orgprice'] = orgprice;
                html_tbody.append($.tmpl(tpl_discount, data));
            });
        } else if (!M.isEmpty(this.temporderdetail) && !M.isEmpty(this.temporderdetail.orderset)) {
            orderset = this.temporderdetail.orderset;
            list = orderset.orders;
        } else if (!M.isEmpty(this.tempcheckdetail) && !M.isEmpty(this.tempcheckdetail.checkinset)) {
            orderset = this.tempcheckdetail.checkinset;
            list = orderset.orders;
        }
        if (!M.isEmpty(list)) {
            html_tbody.append($.tmpl(tpl_discount, list));
        }
        M.Popup(this.context.discountpop, {
            "hideclass": "modal member-sale fade",
            "showclass": "modal member-sale fade in"
        },
        function() {}.toEventHandler(this));
    },
    discountcheckoutdetail: function() {
        var html_tbody = this.context.discountpop.find('table').children('tbody');
        var tpl_discount = this.tpl_discount;
        html_tbody.children('tr[tag!=title]').remove();
        var realpricedetail = this.tempcheckdetail.checkoutinfo.realpricedetail;
        var len = realpricedetail.length;
        var data = {};
        for (var i = 0; i < len; i++) {
            var value = realpricedetail[i];
            data['roomname'] = value.roomname;
            data['orgprice'] = value.realorgprice;
            data['totalprice'] = value.realtotalprice;
            html_tbody.append($.tmpl(tpl_discount, data));
        }
        M.Popup(this.context.discountpop, {
            "hideclass": "modal member-sale fade",
            "showclass": "modal member-sale fade in"
        },
        function() {}.toEventHandler(this));
    },
    remindsettingtpl_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr('tag');
        var orderstatus = this.context.remindsettingtpl.attr('orderstatus');
        if (t == 'add') {
            this.remindadd(ele, orderstatus);
        } else if (t == 'del') {
            var tpl_ul = this.context.remindsettingtpl.find('ul');
            ele.parent().remove();
            tpl_ul.children('li:last').show();
            this.remindtypedefault('');
        } else if (t == 'save') {
            this.remindsave(ele);
        }
    },
    remindsave: function(ele) {
        var tpl_ul = this.context.remindsettingtpl.find('ul');
        var orderstatus = this.context.remindsettingtpl.attr('orderstatus');
        var unidiq = '';
        if (orderstatus == 'order' && this.temporderdetail) {
            unidiq = this.temporderdetail.orderuniqid;
        } else if ((orderstatus == 'checkin' || orderstatus == 'checkout') && this.tempcheckdetail) {
            unidiq = this.tempcheckdetail.orderuniqid;
        }
        var data = {
            'uniqid': unidiq
        };
        var tpl_li_len = tpl_ul.children('li[tag=list]').length;
        var tpl_li_this = '';
        var j = 0;
        var remindlist = [];
        var needcar1 = needcar2 = 0;
        for (var i = 0; i < tpl_li_len; i++) {
            tpl_li_this = tpl_ul.children('li').eq(i);
            data['remindid' + i] = tpl_li_this.attr('remindid');
            var type = tpl_li_this.find('span[tag=value]').attr('value');
            var datetime = tpl_li_this.find('input[name=datetime]').val();
            var remark = tpl_li_this.find('input[name=remark]').val();
            data['type' + i] = type;
            data['datetime' + i] = datetime;
            data['remark' + i] = remark;
            if (type == 'remind') {
                if (M.isEmpty(datetime)) {
                    alert('普通提醒的时间和内容不能为空');
                    return;
                }
                if (M.isEmpty(remark)) {
                    alert('普通提醒的时间和内容不能为空');
                    return;
                }
            }
            if (remark && M.getstrlength(remark) > 60) {
                alert('提醒内容最多30字');
                return;
            }
            if (type == 'needcar') {
                needcar1 = 1;
            } else if (type == 'needcar2') {
                needcar2 = 1;
            }
            remindlist.push({
                "type": type,
                "datetime": datetime,
                "remark": remark
            });
            j++;
        }
        data['length'] = j;
        data['verifyneedcar1'] = needcar1;
        data['verifyneedcar2'] = needcar2;
        if (unidiq > 0) {
            this.cache_ele = ele;
            this.cache_ele.attr('tag', 'nosave').html('处理中...');
            M._getjson('/Book/remindsave', data, this._remindsave_finish.toEventHandler(this));
        } else {
            this.reminddata = remindlist;
            if (M.isEmpty(remindlist)) {
                this.context.orderform.find('label[tag=remindlabel]').children('span').removeClass('circle-btn-green').addClass('circle-btn');
            } else {
                this.context.orderform.find('label[tag=remindlabel]').children('span').removeClass('circle-btn').addClass('circle-btn-green');
            }
            this.context.ordercell.attr("needcar1", 0);
            this.context.ordercell.attr("needcar2", 0);
            if (needcar1 == 1) {
                this.context.ordercell.attr("needcar1", 1);
            }
            if (needcar2 == 1) {
                this.context.ordercell.attr("needcar2", 1);
            }
            M.CloseLast();
        }
    },
    _remindsave_finish: function(d) {
        if (d.status == 'success') {
            M.success('保存成功');
            var verifyneedcar1 = d.req.verifyneedcar1;
            var verifyneedcar2 = d.req.verifyneedcar2;
            var orderstatus = this.context.remindsettingtpl.attr('orderstatus');
            var detail = '';
            if (orderstatus == 'order') {
                this.temporderdetail.remindlist = d.data;
                detail = this.temporderdetail;
                if (M.isEmpty(d.data)) {
                    this.context.orderform.find('label[tag=remindlabel]').children('span').removeClass('circle-btn-green').addClass('circle-btn');
                } else {
                    this.context.orderform.find('label[tag=remindlabel]').children('span').removeClass('circle-btn').addClass('circle-btn-green');
                }
            } else {
                this.tempcheckdetail.remindlist = d.data;
                detail = this.tempcheckdetail;
                if (M.isEmpty(d.data)) {
                    this.context.editcheck.find('label[tag=remindlabel]').children('span').removeClass('circle-btn-green').addClass('circle-btn');
                } else {
                    this.context.editcheck.find('label[tag=remindlabel]').children('span').removeClass('circle-btn').addClass('circle-btn-green');
                }
            }
            this._create_remindtpl_li(detail, '');
            this.context.ordercell.attr("needcar1", 0);
            this.context.ordercell.attr("needcar2", 0);
            if (verifyneedcar1 == 1) {
                this.context.ordercell.attr("needcar1", 1);
            }
            if (verifyneedcar2 == 1) {
                this.context.ordercell.attr("needcar2", 1);
            }
            M.CloseLast();
        } else {
            this.cache_ele.attr('tag', 'save').html('保存');
            alert(d.msg);
        }
        this.cache_ele = '';
    },
    remindadd: function(ele, orderstatus) {
        var tpl_ul = this.context.remindsettingtpl.find('ul');
        var defaultdata = {
            'remark': ''
        };
        tpl_ul.children('li:last').before($.tmpl(this.tpl_remind, defaultdata));
        if (tpl_ul.children('li[tag=list]').length >= 5) {
            tpl_ul.children('li:last').hide();
        }
        this.remindtypedefault(orderstatus);
    },
    remindtype_change: function(ele) {
        var value = ele.attr('value');
        this.remindtypedefault('');
    },
    remindtypedefault: function(orderstatus) {
        var needcar = 0;
        var needcar2 = 0;
        var tpl_ul = this.context.remindsettingtpl.find('ul');
        var tpl_lilen = tpl_ul.children('li[tag=list]').length;
        tpl_ul.find('div[t=remindtype]').find('div[value=needcar]').hide();
        tpl_ul.find('div[t=remindtype]').find('div[value=needcar2]').hide();
        for (var i = 0; i < tpl_lilen; i++) {
            var div_remindtype = tpl_ul.children('li').eq(i).find('div[t=remindtype]');
            var span_value = div_remindtype.children('span[tag=value]').attr('value');
            if (span_value == 'needcar') {
                needcar = 1;
                div_remindtype.find('div[value=needcar]').show();
            } else if (span_value == 'needcar2') {
                needcar2 = 1;
                div_remindtype.find('div[value=needcar2]').show();
            }
        }
        if (!M.isEmpty(orderstatus)) {
            var remindtype = 'remind';
            var this_eq = tpl_lilen - 1;
            if (orderstatus == 'order' && needcar == 0) {
                remindtype = 'needcar';
                tpl_ul.children('li').eq(this_eq).find('div[value=needcar]').show();
            } else if (orderstatus == 'checkin' && needcar2 == 0) {
                remindtype = 'needcar2';
                tpl_ul.children('li').eq(this_eq).find('div[value=needcar2]').show();
            }
            tpl_ul.children('li').eq(this_eq).find('input[name=datetime]').datetimepicker({
                timeFormat: "HH:mm",
                dateFormat: "yy-mm-dd"
            });
            var slt_tpl = tpl_ul.children('li').eq(this_eq).find('div[t=remindtype]').attr('value', remindtype);
            M.DropdownList(slt_tpl, this.remindtype_change.toEventHandler(this), {});
        }
        if (needcar != 1) {
            tpl_ul.find('div[t=remindtype]').find('div[value=needcar]').show();
        }
        if (needcar2 != 1) {
            tpl_ul.find('div[t=remindtype]').find('div[value=needcar2]').show();
        }
    },
    remindsetting: function(ele) {
        var orderstatus = ele.parents('div[tag=popform]').attr('orderstatus');
        if (this.orderstatus == 'addorder') {
            this._create_remindtpl_li('', '');
        }
        var tpl_ul = this.context.remindsettingtpl.find('ul');
        if (tpl_ul.children('li[tag=list]').length < 5) {
            tpl_ul.children('li:last').show();
        } else {
            tpl_ul.children('li:last').hide();
        }
        this.context.remindsettingtpl.attr('orderstatus', orderstatus);
        this.context.remindsettingtpl.find('a[tag=nosave]').attr('tag', 'save').html('保存');
        M.Popup(this.context.remindsettingtpl, {
            "hideclass": "modal large fade",
            "showclass": "modal large fade in"
        },
        function() {}.toEventHandler(this));
    },
    _create_remindtpl_li: function(orderdetail, orderstatus) {
        var remindlist = orderdetail.remindlist;
        var tpl_ul = this.context.remindsettingtpl.find('ul');
        tpl_ul.children('li[tag=list]').remove();
        if (!M.isEmpty(remindlist)) {
            var typearray = {
                1 : 'needcar',
                2 : 'needcar2',
                3 : 'remind'
            };
            tpl_ul.children('li:last').before($.tmpl(this.tpl_remind, remindlist));
            var tpl_lilen = tpl_ul.children('li[tag=list]').length;
            for (var i = 0; i < tpl_lilen; i++) {
                var typename = typearray[remindlist[i]['type']];
                var remindid = remindlist[i]['id'];
                var datetime = '';
                if (remindlist[i]['datetime']) {
                    datetime = remindlist[i]['datetime'];
                    datetime = M.timeformat(M.strtotime(datetime), 'Y-m-d h:i');
                }
                tpl_ul.children('li').eq(i).attr('remindid', remindid);
                tpl_ul.children('li').eq(i).find('input[name=datetime]').val(datetime).datetimepicker({
                    timeFormat: "HH:mm",
                    dateFormat: "yy-mm-dd"
                });
                var slt_tpl = tpl_ul.children('li').eq(i).find('div[t=remindtype]').attr('value', typename);
                M.DropdownList(slt_tpl, this.remindtype_change.toEventHandler(this), {});
            }
            this.remindtypedefault('');
        } else if (this.orderstatus == 'addorder' && !M.isEmpty(this.reminddata)) {
            tpl_ul.children('li:last').before($.tmpl(this.tpl_remind, this.reminddata));
            var tpl_lilen = tpl_ul.children('li[tag=list]').length;
            var remindlist = this.reminddata;
            for (var i = 0; i < tpl_lilen; i++) {
                var typename = remindlist[i]['type'];
                var remindid = remindlist[i]['remindid'];
                var datetime = '';
                if (remindlist[i]['datetime']) {
                    datetime = remindlist[i]['datetime'];
                    datetime = M.timeformat(M.strtotime(datetime), 'Y-m-d h:i');
                }
                tpl_ul.children('li').eq(i).attr('remindid', remindid);
                tpl_ul.children('li').eq(i).find('input[name=datetime]').val(datetime).datetimepicker({
                    timeFormat: "HH:mm",
                    dateFormat: "yy-mm-dd"
                });
                var slt_tpl = tpl_ul.children('li').eq(i).find('div[t=remindtype]').attr('value', typename);
                M.DropdownList(slt_tpl, this.remindtype_change.toEventHandler(this), {});
            }
        } else {
            var defaultdata = {
                'remark': ''
            };
            if (orderdetail.needcar == 1) {
                var tpl_li = $.tmpl(this.tpl_remind, defaultdata);
                tpl_ul.children('li:last').before(tpl_li);
                var tpl_lilen = tpl_ul.children('li[tag=list]').length;
                var this_eq = tpl_lilen - 1;
                tpl_ul.children('li').eq(this_eq).find('input[name=datetime]').val('').datetimepicker({
                    timeFormat: "HH:mm",
                    dateFormat: "yy-mm-dd"
                });
                var slt_tpl = tpl_ul.children('li').eq(this_eq).find('div[t=remindtype]').attr('value', 'needcar');
                M.DropdownList(slt_tpl, this.remindtype_change.toEventHandler(this), {});
            }
            if (orderdetail.needcar2 == 1) {
                var tpl_li = $.tmpl(this.tpl_remind, defaultdata);
                tpl_ul.children('li:last').before(tpl_li);
                var tpl_lilen = tpl_ul.children('li[tag=list]').length;
                var this_eq = tpl_lilen - 1;
                tpl_ul.children('li').eq(this_eq).find('input[name=datetime]').val('').datetimepicker({
                    timeFormat: "HH:mm",
                    dateFormat: "yy-mm-dd"
                });
                var slt_tpl = tpl_ul.children('li').eq(this_eq).find('div[t=remindtype]').attr('value', 'needcar2');
                M.DropdownList(slt_tpl, this.remindtype_change.toEventHandler(this), {});
            }
            var remindtype = 'needcar2';
            if (orderstatus == 'order' || this.orderstatus == 'addorder') {
                remindtype = 'needcar';
            }
            if (M.isEmpty(orderdetail) || (orderdetail.needcar == 0 && orderdetail.needcar2 == 0)) {
                var defaultdata = {
                    'remark': ''
                };
                var tpl_li = $.tmpl(this.tpl_remind, defaultdata);
                tpl_ul.children('li:last').before(tpl_li);
                tpl_ul.children('li').eq(0).find('input[name=datetime]').val('').datetimepicker({
                    timeFormat: "HH:mm",
                    dateFormat: "yy-mm-dd"
                });
                var slt_tpl = tpl_ul.children('li').eq(0).find('div[t=remindtype]').attr('value', remindtype);
                M.DropdownList(slt_tpl, this.remindtype_change.toEventHandler(this), {});
            }
        }
    },
    checkboxtoggle: function(ele) {
        var input_checked = ele.parent().children("input[type=checkbox]").attr("checked");
        if (!M.isEmpty(input_checked) || input_checked == 'checked' || input_checked == true) {
            ele.removeClass('circle-btn-green').addClass('circle-btn');
        } else {
            ele.removeClass('circle-btn').addClass('circle-btn-green');
        }
    },
    attnlist_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == "value") {
            if (ele.parents("div[t=attoption]").length == 0) {
                var target = ele;
            } else {
                var target = ele.parents("div[t=attoption]");
            }
            var value = target.attr("value");
            var username = target.children("a").children("span").html();
            this.targetattn.children("p[tag=showattn]").attr("value", value).html(username);
            if (!M.isEmpty(value)) {
                this.targetattn.children("span").addClass('circle-btn-green').removeClass('circle-btn');
            } else {
                this.targetattn.children("span").removeClass('circle-btn-green').addClass('circle-btn');
            }
        }
    },
    showattn: function(ele) {
        if (M.isEmpty(this.context.attnlist)) {
            return;
        }
        if (this.userauth.isowner != 1 && (!M.isEmpty(this.temporderdetail) || !M.isEmpty(this.tempcheckdetail))) {
            M.error('对不起，业绩归属只有管理员才能修改');
            return;
        }
        var target = ele.parents("div[tag=attnmenu]");
        var value = target.children("p[tag=showattn]").attr("value");
        this.targetattn = target;
        this.context.attnlist.find('div[tag=value]').children("a").removeClass('selected_color');
        if (!M.isEmpty(value)) {
            this.context.attnlist.find('div[value=' + value + ']').children("a").addClass('selected_color');
        } else {
            this.context.attnlist.find('div[tag=value]:first').children("a").addClass('selected_color');
        }
        var offset = target.offset();
        var top = offset.top;
        var left = offset.left;
        this.context.attnlist.css("top", top - 2).css('left', left - 20);
        this.context.attnlist.show();
    },
    showneedpaydetail: function(type) {
        if (M.isEmpty(type)) {
            type = "order";
        }
        var consumetotal = this.context.needpayform.attr("consumetotal");
        if (M.isEmpty(consumetotal) || consumetotal == 0) {
            return;
        }
        this.context.needpayform.find("div[tag=roomrate]").show();
        this.context.needpayform.css('z-index', 1060);
        if (type == "delete" || type == "checkout") {
            this.context.needpayform.find("div[tag=roomrate]").hide();
            this.context.needpayform.find("h4[tag=title]").html('其他消费');
            this.context.needpayform.find("div[t=consumelist]").attr("style", "").removeClass('pt15');
        } else {
            this.context.needpayform.find("h4[tag=title]").html('待收款');
            this.context.needpayform.find("div[t=consumelist]").attr("style", "border-top: 1px dotted rgb(204, 204, 204)").addClass('pt15');
        }
        M.Popup(this.context.needpayform, {
            "hideclass": "modal w500 fade",
            "showclass": "modal w500 fade in"
        },
        function() {}.toEventHandler(this));
    },
    showconsumelist: function() {
        this.context.needpayform.find("div[tag=roomrate]").hide();
        M.Popup(this.context.needpayform, {
            "hideclass": "modal w500 fade",
            "showclass": "modal w500 fade in"
        },
        function() {}.toEventHandler(this));
    },
    setconsumetype: function(ele) {
        var consumename = ele.text();
        var p = ele.attr("p");
        var pname = ele.parents("div[tag=consumelist]").find("div[tag=consume][value=" + p + "]").text();
        var consumecode = ele.attr("value");
        var target = ele.parents("div[t=consume]").children("span[tag=showconsumetype]");
        target.attr("p", p).attr("pname", pname).attr("consumecode", consumecode).html(consumename);
        ele.parents("div[tag=consumelist]").hide();
    },
    delpayform: function(ele) {
        var target = ele.parents("li[tag=paytype]");
        ele.parent().parent().remove();
        this._handlefinitemform(target);
        if (M.isEmpty(this.orderstatus) || this.orderstatus == "order") {
            var orderroomlist = this.context.orderformbody.children("li[tag=orderroomlist]");
        } else {
            var orderroomlist = this.context.editcheckbody.children("li[tag=orderroomlist]");
        }
        this._sumorderprice(orderroomlist);
    },
    _handlefinitemform: function(target) {
        var checklength = target.children("div[type=addtpl]").length;
        var roomrate_tpl = target.children("div[tag=roomrateform]:first");
        if (roomrate_tpl.css("display") != 'none') {
            checklength = checklength + 1;
        }
        if (checklength > 1 || this.orderstatus != '') {
            target.children("div[type=addtpl]").find("a[tag=delpayform]").hide();
            target.children("div[type=addtpl]:last").find("a[tag=delpayform]").show();
        }
    },
    showaddconsumeform: function(ele) {
        var target = ele.parents().find("div[tag=consumelistform]");
        var typelength = target.find("div[tag=option]").length;
        if (typelength > 1) {
            ele.parent().addClass('addfinance_on');
        } else {
            this.addroomrate(ele);
        }
    },
    addroomrate: function(ele) {
        var target = ele.parents('div[tag=finlist]');
        var roomrate_tpl = ele.parents("li[tag=paytype]").children("div[tag=roomrateform]:first");
        var tpl = roomrate_tpl.clone(true).attr("type", "addtpl").show().removeClass("mt10");
        if (roomrate_tpl.css("display") == 'none') {
            tpl.addClass('pop-booking-finance-bt');
        }
        var paytype = roomrate_tpl.attr("vlaue");
        tpl.find("div[t=roomrate]").children("span").attr("value", '');
        tpl.find("input[name=roomrate]").val('0');
        M.DropdownList(tpl.find("div[t=roomrate]"), null, {});
        target.before(tpl);
        target.children("div").removeClass("addfinance_on");
        this._handlefinitemform(ele.parents("li[tag=paytype]"));
    },
    adddeposit: function(ele) {
        var target = ele.parents('div[tag=finlist]');
        var deposit_tpl = ele.parents("li[tag=paytype]").children("div[tag=depositform]:first");
        var paytype = deposit_tpl.attr("vlaue");
        var tpl = deposit_tpl.clone(true).attr("type", "addtpl").show();
        var roomrate_tpl = ele.parents("li[tag=paytype]").children("div[tag=roomrateform]:first");
        if (roomrate_tpl.css("display") == 'none') {
            tpl.addClass('pop-booking-finance-bt');
        }
        tpl.find("div[t=deposit]").children("span").attr("value", '');
        tpl.find("input[name=deposit]").val('0');
        M.DropdownList(tpl.find("div[t=deposit]"), null, {});
        target.before(tpl);
        target.children("div").removeClass("addfinance_on");
        this._handlefinitemform(ele.parents("li[tag=paytype]"));
    },
    addconsume: function(ele) {
        var target = ele.parents('div[tag=finlist]');
        var tpl = ele.parents("li[tag=paytype]").children("div[tag=consumeform_tpl]").clone(true).attr("type", "addtpl").attr("tag", "consumeform").show();
        var consumetypelenth = tpl.find("div[tag=consumelist]").find("div[tag=consume]").length;
        if (consumetypelenth == 0) {
            M.confirmmessage('您还没有添加挂账其它消费项目，请进入设置-高级设置中添加。');
            return;
        }
        var roomrate_tpl = ele.parents("li[tag=paytype]").children("div[tag=roomrateform]:first");
        if (roomrate_tpl.css("display") == 'none') {
            tpl.addClass('pop-booking-finance-bt');
        }
        tpl.find("input[name=consume]").val('0');
        target.before(tpl);
        target.children("div").removeClass("addfinance_on");
        this._handlefinitemform(ele.parents("li[tag=paytype]"));
    },
    showconsumetype: function(ele) {
        var target = ele.parents("div[tag=consumeform]");
        target.find("div[tag=consumelist]").show();
        var p = target.find("span[tag=showconsumetype]").attr("p");
        var consumecode = target.find("span[tag=showconsumetype]").attr("consumecode");
        if (M.isEmpty(p)) {
            p = target.find("div[tag=consumelist]").find("div[tag=consume]:first").attr("value");
            target.find("div[tag=consumelist]").find("div[tag=consumetype]").removeClass("cur");
        }
        target.find("div[tag=consumelist]").find("div[tag=consume]").removeClass("cur");
        target.find("div[tag=consumelist]").find("div[tag=consume][value=" + p + "]").addClass("cur");
        target.find("div[tag=consumelist]").find("div[tag=consumetype]").hide();
        target.find("div[tag=consumelist]").find("div[tag=consumetype][p=" + p + "]").show();
        if (!M.isEmpty(consumecode)) {
            target.find("div[tag=consumelist]").find("div[tag=consumetype]").removeClass("cur");
            target.find("div[tag=consumelist]").find("div[tag=consumetype][value=" + consumecode + "]").addClass("cur");
        }
        target.find("div[t=consume]").addClass("droplist_on");
    },
    nightsinputs_keydown: function(e) {
        var e = e || window.event;
        if (e.keyCode == 13) {
            this.nightsinputs_blur(e);
        }
        var target = M.EventEle(e);
        var n = M.getVal(target);
        target.val(n.replace(/\D/gi, ""));
    },
    nightsinputs_blur: function(e) {
        var target = M.EventEle(e);
        var n = M.getVal(target);
        var reg = /^[0-9]*$/;
        if (!reg.test(n)) {
            alert('您好，住几晚需要输入整数！');
            return false;
        }
        var nights = parseInt(n);
        target.parents("div[t=nights]").children("div").hide();
        if (nights == 0 || M.isEmpty(nights) || isNaN(nights)) return;
        target.val('');
        var maxnights = target.parents("div[tag=nights]").children("div[tag=option]").attr("value");
        var moreniths = parseInt(target.parents("div[tag=nights]").attr("morenights"));
        if (nights > 400) {
            alert('请输入小于400的数字。');
            return;
        }
        if (moreniths < nights) {
            alert('房间房量不足，最多可住' + moreniths + '晚，请重新输入');
            return;
        }
        if (moreniths < 30) {
            return;
        }
        if (nights > 30) {
            var length = target.parents("div[tag=nights]").children("div[tag=option]").length;
            if (length == 30) {
                target.parents("div[tag=nights]").children("div[tag=option]:last").after('<div value="' + nights + '" tag="option"><a href="javascript:;" tag="option">' + nights + '晚</a></div>');
            } else {
                target.parents("div[tag=nights]").children("div[tag=option]:last").attr("value", nights).children("a").html(nights + '晚');
            }
        }
        var nightstpl = target.parents("div[t=nights]").children("span").attr("value", nights).html(nights + '晚');
        var i = target.parents("div[tag=order]").attr("i");
        var orderroomlist = target.parents("li[tag=orderroomlist]");
        this.showorderprice(orderroomlist, i);
    },
    selectguest: function(tpl) {
        var id = tpl.attr("gid");
        var guest = this.searchguestlist[id];
        this.context.o_guestname.val(guest.guestname);
        this.context.orderformbody.children().find("input[name=phone]").val(guest.phone);
        if (!M.isEmpty(guest.idnum)) {
            this.context.orderformbody.children().find("div[t=idcardform]").children("span").attr("value", guest.idtype).html(guest.typename);
            this.context.orderformbody.children().find("input[name=idcard]").val(guest.idnum);
        }
        this.context.orderformbody.children().find("div[tag=guestlist]").hide();
        if (!M.isEmpty(guest.phone)) {
            this.phonelist[guest.phone] = guest;
        }
        if (guest.discount > 0) {
            this.memberstatus = 1;
            this._discountprice_change(this.context.orderformbody.children(), guest.discount);
        } else {
            this.memberstatus = 0;
        }
        this.showmembermark(this.context.orderformbody.children(), guest)
    },
    guestname_change: function() {
        if (!M.isEmpty(this.temporderdetail)) {
            return;
        }
        if (M.isEmpty(this.hotelguestlist)) {
            return;
            this.searchguest();
        } else {
            var guestname = this.context.o_guestname.val();
            this.showguestlist('guestname', guestname);
        }
    },
    phone_change: function(e) {
        var ele = M.EventEle(e);
        var phone = this.context.o_phone.val();
        if (phone.length < 4) {
            this.context.orderformbody.children().find("div[tag=guestlist]").hide();
            return;
        }
        if (!M.isEmpty(this.temporderdetail)) {
            return;
        }
        if (M.isEmpty(this.hotelguestlist)) {
            return;
            this.searchphone();
        } else {
            this.showguestlist('phone', phone);
            this.showmembermark(ele.parents("ul"), phone);
        }
    },
    searchphone: function() {
        var innid = this.context.roomtype.attr("innid");
        var guestname = this.context.o_guestname.val();
        M._getjson("/Book/getallguestlist", {
            "innid": innid,
            "keyword": guestname,
            "type": "phone"
        },
        this.searchguest_finished.toEventHandler(this));
    },
    searchguest: function() {
        if (this.hotelguestliststatus == 1) {
            return;
        }
        var innid = this.innid;
        var guestname = this.context.o_guestname.val();
        M._getjson("/Book/getallguestlist", {
            "innid": innid,
            "keyword": guestname,
            "type": "guest",
            "hotelguestindex": this.hotelguestindex
        },
        this.searchguest_finished.toEventHandler(this));
    },
    searchguest_finished: function(d) {
        if (d.status == "success") {
            var list = d.list;
            var type = d.req.type;
            if (this.hotelguestlist.length > 0) {
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    this.hotelguestlist.push(item);
                }
            } else {
                this.hotelguestlist = list;
            }
            this.innlist = d.innlist;
            this.hotelguestliststatus = 1;
            this.hotelguestindex = d.index;
            if (!M.isEmpty(d.index) && d.index > 0) {
                this.hotelguestliststatus = 0;
                setTimeout(this.searchguest.toEventHandler(this), 5000);
            }
        } else {
            M.error(d.msg);
        }
    },
    showguestlist: function(type, keyword) {
        if (M.isEmpty(keyword)) {
            return;
        }
        var list = [];
        var count = 0;
        var guestlist = this.hotelguestlist;
        if (!M.isEmpty(guestlist)) {
            for (i = 0; i < guestlist.length; i++) {
                var str = '';
                if (type == "guestname") {
                    str = guestlist[i].guestname;
                } else {
                    str = guestlist[i].phone;
                }
                if (str.indexOf(keyword) == 0) {
                    list.push(guestlist[i]);
                }
                if (list.length >= 5) {
                    break;
                }
            }
        }
        var target = this.context.orderformbody.children().find("div[tag=guestlist]");
        target.children("div[tag=guest]").remove();
        var target_tpl = target.children("div[tag=tpl]");
        if (!M.isEmpty(list)) {
            for (var i = 0; i < list.length; i++) {
                var guestlevel = '';
                var guest = list[i];
                var tpl = target_tpl.clone(true).attr("tag", "guest").attr("gid", guest.id).show();
                this.searchguestlist[guest.id] = guest;
                if (!M.isEmpty(guest.guestlevel)) {
                    guestlevel = '[' + guest.guestlevel + ']';
                }
                var html = "";
                html += '<span tag="guestname">' + guestlevel + guest.guestname + '</span>';
                if (!M.isEmpty(guest.phone)) {
                    html += '，<span tag="phone">' + guest.phone + '</span>';
                }
                if (!M.isEmpty(guest.idnum)) {
                    html += '，<span tag="phone">' + guest.idnum + '</span>';
                }
                tpl.children("p[tag=guestinfo]").html(html);
                html = '共住过' + guest.ordercount + '次，消费' + guest.totalprice + '元，平均单价<strong class="red">' + guest.avgprice + '</strong>元';
                tpl.children("p[tag=orderinfo]").html(html);
                if (this.innid != guest.innid) {
                    var innname = this._getinnname(this.innlist, guest.innid);
                    tpl.append('<p>来自&lt;<span tag="innfrom">' + innname + '</span>&gt;</p>');
                }
                target.append(tpl);
            }
            if (type == "guestname") {
                target.css("left", 0);
            } else {
                var left = this.context.o_phone.offset().left - this.context.o_guestname.offset().left - 12;
                target.css("left", left);
            }
            target.show();
        } else {}
    },
    _getinnname: function(list, innid) {
        for (i in list) {
            var item = list[i];
            if (item.innid == innid) {
                return item.innname;
            }
        }
        return '';
    },
    showmembermark: function(target, member) {
        this.cache_discount = 0;
        if (target.length == 0) {
            return;
        }
        if (!M.isEmpty(member.levelname) && this.plugin.memberstatus == 1) {
            target.find("i[tag=memberremark]").attr("title", member.levelname).show();
            this.cache_discount = member.discount;
            this._discountshow_change(target, member.discount);
        } else {
            target.find("i[tag=memberremark]").hide();
            this._discountshow_change(target, 0);
            this.memberstatus = 0;
            this._discountprice_change(target, 0);
        }
    },
    _discountshow_change: function(target, discount) {
        var html_i_discount = target.find('i[tag=discount]');
        if (discount > 0) {
            html_i_discount.html(discount + '折').show();
        } else {
            html_i_discount.hide();
        }
    },
    _discountprice_change: function(target, discount) {
        var html_order = target.find('div[tag=order]');
        var len = html_order.length;
        var price = 0;
        var total = 0;
        html_order.each(function() {
            var price = $(this).find('input[tag=price]').val();
            if (discount > 0) {
                var disprice = parseInt(parseInt(price) * discount / 10);
            } else {
                var disprice = parseInt($(this).find('input[tag=price]').attr("orgprice"));
            }
            total += disprice;
            $(this).find('input[tag=price]').val(disprice);
        });
        target.find('strong[tag=totalprice]').html('¥' + total);
    },
    _getdiscount: function() {
        var discount = 0;
        if (!M.isEmpty(this.temporderdetail) && !M.isEmpty(this.temporderdetail.orderset)) {
            discount = this.temporderdetail.orderset.discount;
        } else if (!M.isEmpty(this.tempcheckdetail) && !M.isEmpty(this.tempcheckdetail.checkinset)) {
            discount = this.tempcheckdetail.checkinset.discount;
        } else {
            discount = this.cache_discount;
        }
        return discount;
    },
    _setdiscount: function(discount) {
        if (!M.isEmpty(this.temporderdetail) && !M.isEmpty(this.temporderdetail.orderset)) {
            this.temporderdetail.orderset.discount = discount;
        } else if (!M.isEmpty(this.tempcheckdetail) && !M.isEmpty(this.tempcheckdetail.checkinset)) {
            this.tempcheckdetail.checkinset.discount = discount;
        } else {
            this.cache_discount = discount;
        }
    },
    _getmemberinfo: function(phone) {
        if (M.isEmpty(phone) || phone.length < 11) {
            return {
                'levelid': '',
                "levelname": ''
            };
        }
        var guest = this.phonelist[phone];
        if (!M.isEmpty(guest)) {
            return guest;
        }
        return {
            'levelid': '',
            "levelname": ''
        };
    },
    _ismember: function(phone) {
        if (M.isEmpty(phone) || phone.length < 11) {
            return {
                'levelid': '',
                "levelname": ''
            };
        }
        var guestlist = this.hotelguestlist;
        if (!M.isEmpty(guestlist)) {
            var member = '';
            for (i = 0; i < guestlist.length; i++) {
                var str = '';
                var item = guestlist[i];
                str = item.phone;
                if (str == phone && !M.isEmpty(item.levelid) && item.levelid != 0) {
                    member = item;
                    break;
                }
            }
        }
        if (!M.isEmpty(member)) {
            return member;
        } else {
            return {
                'levelid': '',
                "levelname": ''
            };
        }
    },
    guestchange: function(e) {
        var evt = e ? e: (window.event ? window.event: null);
        if (evt.keyCode == 13) {
            this.searchguest();
        }
        var ele = M.EventEle(e);
        var guestname = ele.val();
        var action = this.context.ordercell.attr("action");
        if (action == "add" || action == "hisadd") {
            if (!M.isEmpty(guestname)) {
                ele.parents("li").children("a[tag=searchguest]").show();
            } else {
                ele.parents("li").children("a[tag=searchguest]").hide();
            }
        } else {
            ele.parents("li").children("a[tag=searchguest]").hide();
        }
    },
    colse_form: function() {
        this.context.multiguesttip.attr("status", 0).hide();
        this.context.findetailform.hide();
        this.context.datepickerpriceform.hide();
        this._closepopup();
    },
    idtypelist_scroll: function() {
        this.context.idtypelist.hide();
    },
    idtypelist_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'option') {
            var value = ele.parent().attr("value");
            var text = ele.text();
            this.targetidtype.attr("value", value).html(text);
            this.context.idtypelist.hide();
        }
    },
    addmultiguest: function(ele, type) {
        this.context.multiguestform.attr("z-index", 999);
        this.context.multiguestform.children().find("ul[tag=guest]").children("li").not(":first").remove() if (type == 'docheckin') {
            var idtype_tpl = this.context.multiguestform.children().find("div[t=idcardform]");
            var tpl = ele.parents("li[tag=idcard]");
            var guestname = tpl.children("div").children("input[name=guestname]").val();
            var phone = tpl.children("div").children("input[name=phone]").val();
            var idnum = tpl.children("div").children("input[name=idcard]").val();
            var idtpl = tpl.children("div").children("div[t=idcardform]");
            var idtype = idtpl.children("span").attr("value");
            var idtypetext = idtpl.children("span").text();
        } else {
            this.hidemultiguesttip();
            var parents_tpl = ele.parents("ul[tag=orderform]");
            var guestname = parents_tpl.children("li:first").children("input[name=guestname]").val();
            var phone = parents_tpl.children("li").children("input[name=phone]").val();
            var idtype = parents_tpl.children("li[tag=idcard]").children("div").children("div[t=idcardform]").children("span").attr("value");
            var idtypetext = parents_tpl.children("li[tag=idcard]").children("div").children("div[t=idcardform]").children("span").text();
            var idnum = parents_tpl.children("li[tag=idcard]").children("div").children("input[name=idcard]").val();
            var idtype_tpl = this.context.multiguestform.children().find("div[t=idcardform]").attr("value", idtype);
            idtype_tpl.children("span").attr("value", idtype).text(idtypetext);
        }
        var tpl = this.context.multiguestform.children().find("ul[tag=guest]").children("li:first");
        M.emptyVal(tpl.children("div").children("input[name=guest]"));
        M.emptyVal(tpl.children("div").children("input[name=phone]"));
        M.emptyVal(tpl.children("div").children("input[name=idnum]"));
        M.emptyVal(tpl.children("div").children("input[name=nation]"));
        M.emptyVal(tpl.children("div").children("input[name=address]"));
        if (guestname) {
            if (this.multiguest.length == 0) {
                this.multiguest.push({
                    "guestname": guestname,
                    "phone": phone,
                    "idnum": idnum,
                    "idtype": idtype,
                    "idtypetext": idtypetext,
                    "sex": 1
                });
            } else {
                this.multiguest[0].guestname = guestname;
                this.multiguest[0].phone = phone;
                this.multiguest[0].idnum = idnum;
                this.multiguest[0].idtype = idtype;
                this.multiguest[0].idtypetext = idtypetext;
            }
        } else {
            tpl.find("div[t=sex]").children("span").attr("value", "1").html('男');
            var sextpl = tpl.find("div[t=sex]").attr("value", "1");
            this.droplist.order.typedroplist = M.DropdownList(sextpl, null, {});
        }
        this._initmultiguestform();
        this.context.multiguestform.attr("t", type);
        M.Popup(this.context.multiguestform, {
            "hideclass": "modal viewguest fade",
            "showclass": "modal viewguest fade in"
        },
        function() {}.toEventHandler(this));
    },
    _initmultiguestform: function() {
        this.context.multiguestform.children().find("ul[tag=guest]").children("li");
        var guestlist = this.multiguest;
        for (var i = 0; i < guestlist.length; i++) {
            var guest = guestlist[i];
            if (i > 0) {
                this.addgusettpl("init");
            }
            this._setguestval(guest);
        }
        this._resetguesthandle();
    },
    _setguestval: function(guest, tpl) {
        if (M.isEmpty(tpl)) {
            var tpl = this.context.multiguestform.children().find("ul[tag=guest]").children("li:last");
        }
        guest.id && tpl.attr("id", guest.id);
        guest.guestname && tpl.children("div").children("input[name=guest]").val(guest.guestname);
        guest.phone && tpl.children("div").children("input[name=phone]").val(guest.phone);
        guest.idnum && tpl.children("div").children("input[name=idnum]").val(guest.idnum);
        guest.nation && tpl.children("div").children("input[name=nation]").val(guest.nation);
        guest.address && tpl.children("div").children("input[name=address]").val(guest.address);
        guest.sex && tpl.find("div[t=sex]").children("span").attr("value", guest.sex).html(this.sexlist[guest.sex]);
        var idtypename = this.idtypelist[guest.idtype];
        tpl.children("div").children("div[t=idcardform]").children("span").attr("value", guest.idtype).text(idtypename);
        var sextpl = tpl.find("div[t=sex]").attr("value", guest.sex);
        this.droplist.order.typedroplist = M.DropdownList(sextpl, null, {});
    },
    addgusettpl: function(status) {
        var tpl = this.context.multiguestform.children().find("ul[tag=guest]");
        var length = tpl.children("li").length;
        var tpl_tmp = tpl.children("li:first");
        var guest = tpl_tmp.clone(true).attr("tag", "guest").attr("id", "");
        M.emptyVal(guest.children("div").children("input[name=guest]"));
        M.emptyVal(guest.children("div").children("input[name=phone]"));
        M.emptyVal(guest.children("div").children("input[name=idnum]"));
        M.emptyVal(guest.children("div").children("input[name=nation]"));
        M.emptyVal(guest.children("div").children("input[name=address]"));
        guest.find("div[t=idcardform]").children("span").attr("value", "1").text("身份证");
        var sextpl = guest.find("div[t=sex]").attr("value", "1");
        this.droplist.order.typedroplist = M.DropdownList(sextpl, null, {});
        tpl.append(guest);
        this._resetguesthandle();
    },
    delguesttpl: function(ele) {
        ele.parents("li").remove();
        this._resetguesthandle();
    },
    _resetguesthandle: function() {
        var tpl = this.context.multiguestform.children().find("ul[tag=guest]");
        tpl.children("li").children("div").children("a[tag=delguest]").remove();
        tpl.children("li").children("div").children("a[tag=addguest]").remove();
        if (tpl.children("li").length > 1) {
            tpl.children("li").children("div").append('<a href="javascript:;" tag="delguest" class="del-book mr5" title="删除该入住人"></a>');
            tpl.children("li:last").children("div").append('<a href="javascript:;" tag="addguest" class="add-book" title="添加入住人"></a>');
            tpl.children("li:first").children("div").children("a[tag=delguest]").remove();
        } else {
            tpl.children("li").children("div").append('<a href="javascript:;" tag="addguest" class="add-book" title="添加入住人"></a>');
        }
    },
    multiguestform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t != 'idtypespan' && t != 'idtype') {
            this.context.idtypelist.hide();
        }
        switch (t) {
        case "addguest":
            var orderroomlist = this.context.orderform.children(".modal-body").find(".cntlist").children("li[tag=orderroomlist]");
            this.addgusettpl('add');
            break;
        case "delguest":
            this.delguesttpl(ele);
            break;
        case "save":
            this.saveguest();
            break;
        case "idtypespan":
            this.showidtype(ele);
            break;
        case "idtype":
            this.showidtype(ele.children("span"));
            break;
        case "scaner":
            this.scaner();
            break;
        }
    },
    showscanererror: function(type) {
        this.context.idscanertipform.find("div[tag=nothas]").hide();
        this.context.idscanertipform.find("div[tag=noaccess]").hide();
        if (type == "nothas") {
            this.context.idscanertipform.find("div[tag=nothas]").show();
        } else {
            this.context.idscanertipform.find("div[tag=noaccess]").show();
        }
        M.Popup(this.context.idscanertipform, {
            "hideclass": "modal w500 fade",
            "showclass": "modal w500 fade in"
        },
        function() {}.toEventHandler(this));
    },
    scaner: function() {
        var i = 0;
        var flag = 0;
        if ($("#idcardscaner").length == 0) {
            this.showscanererror('nothas');
            return;
        }
        if (typeof(idcardscaner) == "undefined" || typeof(idcardscaner.OpenComm) == "undefined") {
            this.showscanererror('noaccess');
            return;
        }
        for (i = 1; i < 3; i++) {
            if (idcardscaner.OpenComm(i) == 1) {
                flag = 1;
                break;
            }
        }
        if (i == 3) {
            var msg = '';
            for (i = 1001; i < 1003; i++) {
                if (idcardscaner.OpenComm(i) == 1) {
                    flag = 1;
                    break;
                } else {
                    msg = "打开端口失败";
                    var tpl = this.context.body.find("object[id=idcardscanerJL]");
                    if (tpl.length != 0) {
                        this.sanerjl();
                        return;
                    }
                }
            }
            if (!M.isEmpty(msg)) {
                alert(msg);
                return;
            }
        }
        var user = {};
        if (flag == 1) {
            if (idcardscaner.Authen() == 1) {
                if (idcardscaner.ReadCardPath("", 2) == 1) {
                    user.guestname = idcardscaner.sName;
                    user.sex = idcardscaner.sSex;
                    user.national = idcardscaner.sNation;
                    user.birthday = idcardscaner.sBornDate;
                    user.address = idcardscaner.sAddress;
                    user.idnum = idcardscaner.sIDNo;
                    user.qfjg = idcardscaner.sSignGov;
                    idcardscaner.ReadCard(3) user.newaddress = idcardscaner.sNewAddress;
                    this.showscaneruser(user);
                } else {
                    alert("读卡错误！" + idcardscaner.ReadCardPath("", 1));
                }
            } else {
                alert("未识别信息，请重新放卡！");
            }
        }
        idcardscaner.EndComm();
    },
    sanerjl: function() {
        var ret = idcardscanerJL.ReadCard();
        var user = {};
        if (ret == "0") {
            user.guestname = idcardscanerJL.Name;
            if (idcardscanerJL.Sex == 0) {
                user.sex = 2;
            } else {
                user.sex = 1;
            }
            user.nation = idcardscanerJL.Nation;
            user.birthday = idcardscanerJL.Born;
            user.address = idcardscanerJL.Address;
            user.idnum = idcardscanerJL.CardNo;
            user.newaddress = idcardscanerJL.Address;
            this.showscaneruser(user);
        } else {
            alert("读卡错误,错误原因:" + ret);
        }
    },
    showscaneruser: function(user, type) {
        user.idtype = 1;
        user.ditypename = "身份证";
        if (M.isEmpty(user.nation)) {
            user.nation = this.nationlist[user.national];
        }
        var tpllist = this.context.multiguestform.children().find("ul[tag=guest]").children("li");
        var tpl = null;
        tpllist.each(function() {
            var idnum = M.getVal($(this).find("input[name=idnum]"));
            if (M.isEmpty(idnum) && M.isEmpty(tpl)) {
                tpl = $(this);
            }
        });
        if (M.isEmpty(tpl)) {
            this.addgusettpl("init");
        }
        this._setguestval(user, tpl);
    },
    showidtype: function(ele) {
        var selectcount = ele.attr("count");
        if (M.isEmpty(selectcount) || selectcount == '0') {
            this.context.idtypelist.find("div[t=idcardform]").children("span").attr("count", 0);
            ele.attr("count", '1');
        } else {
            ele.attr("count", '0');
        }
        this.targetidtype = ele;
        var value = ele.attr("value");
        this.context.idtypelist.find("a[tag=option]").removeClass("on");
        this.context.idtypelist.find("div[value=" + value + "]").children("a").addClass("on");
        var top = ele.offset().top + ele.outerHeight() + 2;
        var left = ele.offset().left - 6;
        if (M.isEmpty(selectcount) || selectcount == '0') {
            this.context.idtypelist.css({
                "top": top,
                "left": left,
                "z-index": 1060
            }).show();
        } else {
            this.context.idtypelist.css({
                "top": top,
                "left": left,
                "z-index": 1060
            }).toggle();
        }
    },
    saveguest: function() {
        var tpl = this.context.multiguestform.children().find("ul[tag=guest]").children("li");
        var guestlist = [];
        var status = true;
        var idstatus = true;
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        var index = 0;
        var that = this;
        tpl.each(function() {
            index++;
            var id = $(this).attr("id");
            var guest = M.getVal($(this).children("div").children("input[name=guest]"));
            var phone = M.getVal($(this).children("div").children("input[name=phone]"));
            var idnum = M.getVal($(this).children("div").children("input[name=idnum]"));
            var nation = M.getVal($(this).children("div").children("input[name=nation]"));
            var address = M.getVal($(this).children("div").children("input[name=address]"));
            var sex = $(this).find("div[t=sex]").children("span").attr("value");
            var idtype = $(this).find("div[t=idcardform]").children("span").attr("value");
            var idtypetext = $(this).find("div[t=idcardform]").children("span").text();
            if (!M.isEmpty(idnum) && idtype == 1 && reg.test(idnum) === false) {
                idstatus = false;
            }
            if (guest) {
                if (index == 1) {
                    idnum = M.isEmpty(idnum) ? '': idnum;
                    idtypetext = M.isEmpty(idtypetext) ? '身份证': idtypetext;
                }
                var member = that._ismember(phone);
                guestlist.push({
                    "id": id,
                    "guestname": guest,
                    "phone": phone,
                    "idnum": idnum,
                    "idtype": idtype,
                    "idtypetext": idtypetext,
                    "sex": sex,
                    "address": address,
                    "nation": nation,
                    "levelid": member.levelid,
                    "levelname": member.levelname
                });
            } else {
                if (phone || idnum) {
                    status = false;
                }
            }
        });
        if (idstatus == false) {
            M.error("请输入正确的身份证号");
            return;
        }
        if (guestlist.length == 0) {
            M.error("入住人不能为空");
            return;
        }
        if (status == false) {
            M.error("客人姓名不能为空");
            return;
        } else {
            var guest = guestlist[0];
            var type = this.context.multiguestform.attr("t");
            if (type == "order") {
                var tpl_ul = this.context.orderform.children().find("ul[tag=orderform]");
                tpl_ul.children("li").children("input[name=guestname]").val(guest.guestname);
                tpl_ul.children("li").children("input[name=phone]").val(guest.phone);
                tpl_ul.children("li").children("div").children("input[name=idcard]").val(guest.idnum);
                tpl_ul.children("li").children("div").children("div[t=idcardform]").children("span").attr("value", guest.idtype).text(guest.idtypetext);
            }
            if (type == "docheckin") {
                var tpl = this.context.checkin.children().find("li[tag=idcard]");
                tpl.children("div").children("input[name=guestname]").val(guest.guestname);
                tpl.children("div").children("input[name=phone]").val(guest.phone);
                tpl.children("div").children("input[name=idcard]").val(guest.idnum);
                tpl.children("div").children("div[t=idcardform]").children("span").attr("value", guest.idtype).text(guest.idtypetext);
            }
            if (type == "checkin") {
                var tpl_ul = this.context.editcheck.children().find("ul[tag=orderform]");
                tpl_ul.children("li").children("input[name=guestname]").val(guest.guestname);
                tpl_ul.children("li[tag=phone]").children("input").val(guest.phone);
                tpl_ul.children("li").children("div").children("input[name=idcard]").val(guest.idnum);
                tpl_ul.children("li").children("div").children("div[t=idcardform]").children("span").attr("value", guest.idtype).text(guest.idtypetext);
            }
        }
        this.multiguest = guestlist;
        var uniqid = this.context.multiguestform.attr("uniqid");
        var innid = this.context.roomtype.attr("innid");
        if (!M.isEmpty(uniqid)) {
            var orderstatus = this.context.multiguestform.attr("orderstatus");
            var data = {
                "op": "savemultiorder",
                "innid": innid,
                "uniqid": uniqid,
                "orderstatus": orderstatus
            };
            if (guestlist.length > 0) {
                for (var i = 0; i < guestlist.length; i++) {
                    var guest = guestlist[i];
                    data['id' + i] = guest.id;
                    data['guestname' + i] = guest.guestname;
                    data['phone' + i] = guest.phone;
                    data['idnum' + i] = guest.idnum;
                    data['idtype' + i] = guest.idtype;
                    data['nation' + i] = guest.nation;
                    data['levelid' + i] = guest.levelid;
                    data['levelname' + i] = guest.levelname;
                    data['address' + i] = guest.address;
                    data['sex' + i] = guest.sex;
                }
                data.guestlength = guestlist.length;
            }
            M._getjson("/book/savemultiguest", data, this.savemultiorder_finished.toEventHandler(this));
        } else {
            M.success("已成功登记多个入住人");
            this.closemultiguestform();
        }
    },
    savemultiorder_finished: function(d) {
        if (d.status == "success") {
            this.multiguest = d.guestlist;
            this.ordercallback(d);
            M.success("已成功登记多个入住人");
            this.closemultiguestform();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            } else {
                alert("保存多个入住人失败");
            }
        }
    },
    closemultiguestform: function() {
        var tpl = this.context.multiguestform.children().find("ul[tag=guest]").children("li");
        var total = this.multiguest.length;
        var type = this.context.multiguestform.attr("t");
        if (type == "order") {
            total > 0 && this.context.orderform.children().find("a[tag=multiguest]").append('<i class="count" tag="count">' + total + '</i>')
        }
        if (type == "checkin") {
            total > 0 && this.context.editcheck.children().find("a[tag=multiguest]").append('<i class="count" tag="count">' + total + '</i>')
        }
        if (type == "docheckin") {
            total > 0 && this.context.checkin.children().find("a[tag=multiguest]").append('<i class="count" tag="count">' + total + '</i>')
        }
        M.CloseLast();
        this.context.idtypelist.hide();
    },
    _delorder: function(type, order) {
        if (order.orderfrom == 'gpbook') {
            this.beforeremoveorderallroom(type, order);
        } else {
            this.beforeremoveorder(type, order);
        }
    },
    orderdetail_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "removeorder":
            this._delorder('ordered', this.temporderdetail);
            break;
        case "checkin":
            this.checkin_option(ele);
            break;
        case "editorder":
            this.editorder(ele);
            break;
        case "editdeleteorder":
            this.editdeleteorder('order');
            break;
        case "sendmsg":
            this.sendmsg(ele, "ordered");
            break;
        case "closebtn":
            this.destroyorderform();
            break;
        case "guesttotal":
            this.showmultiguestinfo("order");
            break;
        case "showlog":
            this._showlog(this.temporderdetail.orderset.orderuniqid, 0);
            break;
        case "setpassword":
            var orderstatus = 1;
            this.setpassword(orderstatus);
            break;
        case "discount":
            this.discountdetail();
            break;
        }
    },
    showmultiguestinfo: function(type) {
        if (type == 'order') {
            var guestlist = this.temporderdetail.guestlist;
        }
        if (type == "checkin") {
            var guestlist = this.tempcheckdetail.guestlist;
        }
        var html = '';
        for (var i = 0; i < guestlist.length; i++) {
            var guest = guestlist[i];
            html += '<p>' + guest.guestname;
            if (!M.isEmpty(guest.sex) && guest.sex != 0) html += '，' + this.sexlist[guest.sex];
            if (!M.isEmpty(guest.nation)) html += '，' + guest.nation;
            if (!M.isEmpty(guest.phone)) html += '，' + guest.phone;
            if (!M.isEmpty(guest.idnum)) html += '，' + guest.idtypename + '：' + guest.idnum;
            if (!M.isEmpty(guest.address)) html += '，' + guest.address;
            html += '</p>';
        }
        this.context.multiguestinfo.children().find("div[tag=info]").html(html);
        M.Popup(this.context.multiguestinfo, {
            "hideclass": "modal viewguest fade",
            "showclass": "modal viewguest fade in"
        },
        function() {}.toEventHandler(this));
    },
    editorder_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "save":
            this.saveorder(e);
            break;
        case "checkin":
            this.saveorderandcheckin(e);
            break;
        case "closebtn":
            this.temporderdetail = null;
            break;
        case "addroom":
            var orderroomlist = this.context.editorder.children(".modal-body").find(".cntlist").children("li[tag=orderroomlist]");
            this.addroomtpl(orderroomlist);
            break;
        case "removeroom":
            this.removeroomtpl(ele);
            break;
        }
    },
    checkinoption_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "checkout":
            this.docheckout();
            break;
        case "constay":
            this.doconstay();
            break;
        case "addnight":
            this.addnight_click();
            break;
        case "edit":
            this.doeditcheckin(this.context.c_hiddencell, "checkedin");
            break;
        case "editdeleteorder":
            this.editdeleteorder('checkin');
            break;
        case "delete":
            this._delorder('checkin', this.tempcheckdetail);
            break;
        case "sendmsg":
            this.sendmsg(ele, "checkedin");
            break;
        case "guesttotal":
            this.showmultiguestinfo("checkin");
            break;
        case "showlog":
            this._showlog(this.tempcheckdetail.checkinset.orderuniqid, 1);
            break;
        case "print":
            var status = this.context.c_info.find('p[tag=arrivetime]').children('span:last').html();
            if (status == "[已退房]") {
                this.checkoutprint();
                break;
            } else {
                this.checkinprint();
                break;
            }
        case "setpassword":
            var orderstatus = 2;
            this.setpassword(orderstatus);
            break;
        case "discount":
            this.discountdetail();
            break;
        }
    },
    setpassword: function(orderstatus) {
        var orderdetail = '';
        if (orderstatus == 1) {
            orderdetail = this.temporderdetail;
        } else {
            orderdetail = this.tempcheckdetail;
        }
        var roomlocklist = orderdetail.roomlocklist;
        var length = roomlocklist.length;
        var tpl_table = this.context.roompasswordpop.find('table');
        var tpl_tr_1 = tpl_table.find('tr:eq(0)').clone();
        tpl_table.attr('uniqid', orderdetail.orderuniqid).attr('orderstatus', orderstatus);
        tpl_table.empty().append(tpl_tr_1);
        if (length >= 1) {
            var tpl_trlist = $.tmpl(this.tpl_roomlock, roomlocklist);
            tpl_table.append(tpl_trlist);
            for (var i = 1; i <= length; i++) {
                var tpl_td = tpl_table.find('tr').eq(i);
                var order = roomlocklist[i - 1];
                tpl_td.find('input[tag=fromtime]').datetimepicker({
                    timeFormat: "HH:mm",
                    dateFormat: "mm/dd",
                    minDate: order.fromtime,
                    maxDate: order.fromtime
                });
                tpl_td.find('input[tag=endtime]').datetimepicker({
                    timeFormat: "HH:mm",
                    dateFormat: "mm/dd",
                    minDate: order.endtime,
                    maxDate: order.endtime
                });
                tpl_td.find('input[tag=fromtime]').bind("change", this.changedates.toEventHandler(this));
                tpl_td.find('input[tag=endtime]').bind("change", this.changedates.toEventHandler(this));
            }
        }
        M.Popup(this.context.roompasswordpop, {
            "hideclass": "modal viewguest fade",
            "showclass": "modal viewguest fade in"
        },
        function() {}.toEventHandler(this));
    },
    changedates: function(e) {
        var ele = M.EventEle(e);
        ele.parent().children("a[tag=save]").show();
    },
    roompasswordpop_click: function(e) {
        var ele = M.EventEle(e);
        var tag = ele.attr('tag');
        switch (tag) {
        case 'sendpassword':
            this.sendpassword(ele, tag);
            break;
        case 'resetpw':
            this.resetpw(ele, tag);
            break;
        case 'save':
            this.savepw(ele);
            break;
        }
    },
    savepw: function(ele) {
        var target = ele.parent();
        var fromtime = target.children("input[tag=fromtime]").val();
        var endtime = target.children("input[tag=endtime]").val();
        var orderid = ele.parents("tr").attr("orderid");
        var data = {
            'innid': this.innid,
            'fromtime': fromtime,
            'endtime': endtime,
            'orderid': orderid
        };
        M._getjson('/Doorlock/savepassword', data, this.savepassword_finished.toEventHandler(this));
    },
    savepassword_finished: function(d) {
        if (d.status == "success") {
            var orderid = d.orderid;
            var fromtime = d.fromtime;
            var endtime = d.endtime;
            var password = d.password;
            var orderstatus = this.context.roompasswordpop.find('table').attr('orderstatus');
            if (orderstatus == 1) {
                orderdetail = this.temporderdetail;
            } else {
                orderdetail = this.tempcheckdetail;
            }
            var roomlocklist = orderdetail.roomlocklist;
            for (var i = 0; i < roomlocklist.length; i++) {
                var order = roomlocklist[i];
                if (order.orderid == orderid) {
                    roomlocklist[i]['fromtime'] = fromtime;
                    roomlocklist[i]['endtime'] = endtime;
                    roomlocklist[i]['password'] = password;
                }
            }
            if (orderstatus == 1) {
                this.temporderdetail.roomlocklist = roomlocklist;
            } else {
                this.tempcheckdetail.roomlocklist = roomlocklist;
            }
            var act = d.act;
            if (!M.isEmpty(act) && act == "reset") {
                this.context.roompasswordpop.find("tr[orderid=" + orderid + "]").children("td[tag=password]").html(password);
                M.success('重设成功');
            } else {
                this.context.roompasswordpop.find("tr[orderid=" + orderid + "]").find("a[tag=save]").hide();
                M.success('保存成功');
            }
        } else {
            alert(d.msg);
        }
    },
    resetpw: function(ele) {
        var res = confirm("确定要重置密码吗？");
        if (!res) {
            return;
        }
        var orderid = ele.parents('tr').attr('orderid');
        var data = {
            'innid': this.innid,
            'orderid': orderid
        };
        M._getjson('/Doorlock/resetpassword', data, this.savepassword_finished.toEventHandler(this));
    },
    sendpassword: function(ele, tag) {
        var uniqid = this.context.roompasswordpop.find('table').attr('uniqid');
        var parent_tr = ele.parents('tr');
        var orderid = parent_tr.attr('orderid');
        var data = {
            'uniqid': uniqid,
            'orderid': orderid
        };
        M._getjson('/Doorlock/sendpassword', data, this.sendpassword_finished.toEventHandler(this));
    },
    sendpassword_finished: function(d) {
        if (d.status == 'success') {
            M.success('发送成功');
        } else {
            alert(d.msg);
        }
    },
    _sendpassword_callback: function(d) {
        if (d.status == 'success') {
            var tag = this.cache_ele.attr('cachetag');
            if (tag == 'save') {
                M.CloseLast();
            }
            var datalist = d.data;
            var orderdetail = '';
            var orderstatus = this.context.roompasswordpop.find('table').attr('orderstatus');
            if (orderstatus == 1) {
                orderdetail = this.temporderdetail;
            } else {
                orderdetail = this.tempcheckdetail;
            }
            var roomlocklist = orderdetail.roomlocklist;
            var leng = roomlocklist.length;
            for (var i = 0; i < leng; i++) {
                var order = roomlocklist[i];
                if (!M.isEmpty(datalist[order.orderid])) {
                    roomlocklist[i]['fromtime'] = datalist[order.orderid]['fromtime'];
                    roomlocklist[i]['endtime'] = datalist[order.orderid]['endtime'];
                }
            }
            if (orderstatus == 1) {
                this.temporderdetail.roomlocklist = roomlocklist;
            } else {
                this.tempcheckdetail.roomlocklist = roomlocklist;
            }
            if (!M.isEmpty(d.msg)) {
                M.success(d.msg);
            } else {
                M.success('发送成功');
            }
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            } else {
                M.error('发送失败');
            }
        }
        this.cache_ele.attr('tag', this.cache_ele.attr('cachetag'));
        return;
    },
    _showlog: function(orderuniqid, status) {
        $("a[tag=showlog]").addClass('btn-orderhistory-loading').html('<i class="loading16 mt5"></i>');
        var uniqid = orderuniqid;
        M._getjson("/Log/getOrderLog", {
            "uniqid": uniqid,
            "status": status
        },
        this._showorderlog_finished.toEventHandler(this));
    },
    checkin_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "checkin":
            this.checkin(ele);
            break;
        case "value":
            break;
        case "multiguest":
            this.addmultiguest(ele, "docheckin");
            break;
        case "roomratemoney":
            if (ele.val() == 0) {
                ele.select();
            }
            break;
        case "depositmoney":
            if (ele.val() == 0) {
                ele.select();
            }
            break;
        case "discount":
            this.discountdetail();
            break;
        }
    },
    ktsyt: function(ele) {
        if (ele.parents('div').attr('t') == 'roomrate') {
            var showstatus = this.context.syt.css("display");
            if (!M.isEmpty(showstatus) && showstatus != 'none') {
                return;
            }
            var n = $.cookie('cashtipcount');
            if (!M.isEmpty(n) && n >= 3) {
                return;
            }
            if (M.isEmpty(n)) {
                n = 1;
            } else {
                n = parseInt(n) + 1;
            }
            $.cookie('cashtipcount', n, {
                expires: 3600 * 360 * 24
            });
            this.context.syt.show();
        }
    },
    checkoutform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        switch (t) {
        case "checkout":
            if (this.tempcheckdetail.bookallroom == 1) {
                this.checkoutgroupbook();
            } else {
                this.checkout();
            }
            break;
        case "orderselect":
            this._toggle(ele, "selected");
            break;
        case "input_deposit":
            if (ele.val() == 0) {
                ele.select();
            }
            break;
        case "input_roomrate":
            if (ele.val() == 0) {
                ele.select();
            }
            break;
        case "guesttotal":
            this.showmultiguestinfo("checkin");
            break;
        case "discount":
            this.discountcheckoutdetail();
            break;
        }
    },
    _toggle: function(ele, style) {
        var select = ele.attr("class");
        if (!M.isEmpty(select) && (select.indexOf(style) >= 0 || select == style)) {
            ele.removeClass(style);
        } else {
            ele.addClass(style);
        }
    },
    orderroom_change: function(ele) {
        var orderroomlist = ele.parents("li[tag=orderroomlist]");
        var rtid = ele.attr("rtid");
        rtid = parseInt(rtid);
        var i = ele.parents("div[tag=order]").attr("i");
        i = M.isEmpty(i) ? "": i;
        if (!M.isEmpty(this.formatedateprice[rtid])) {
            var targetli = ele.parents("div[tag=order]");
            this.showordernights(targetli, i);
            this.showorderprice(orderroomlist, i);
        }
    },
    ordernight_change: function(ele) {
        var orderroomlist = ele.parents("li[tag=orderroomlist]");
        var orderfield = ele.parent();
        var nights = ele.val();
        ele.parents("div[tag=order]").children("div[id=selectNights]").attr("value", nights);
        var i = ele.parents("div[tag=order]").attr("i");
        var oid = orderfield.attr("oid");
        var action = this.context.ordercell.attr("action");
        this.showorderprice(orderroomlist, i);
    },
    input_click: function() {
        var nightselect = this.context.selectNights.find("div[tag=nights]");
        var keywords = nightselect.children("div[tag=input]").children("input").val();
        if (keywords) {
            keywords = parseInt(keywords);
            nightselect.children("div[tag=input]").remove();
            if (keywords > 30) {
                var option = '<div value="' + keywords + '"><a href="javascript:;" class="on">' + keywords + '晚</a></div>';
                option += '<div tag="input"><input type="text" style="width: 31px; margin-right: 0; padding-left: 9px;" placeholder="输入"></div>';
            } else {
                option = '<div tag="input"><input type="text" style="width: 31px; margin-right: 0; padding-left: 9px;" placeholder="输入"></div>';
            }
            nightselect.append(option);
            nightselect.children("div[tag=input]").children("input").bind("keydown", this.nightsinput_keydown.toEventHandler(this));
            this.context.rnsBox.hide();
            this.context.selectNights.children('span').attr('value', keywords).text(keywords + '晚');
            var orderroomlist = this.context.orderformbody.children('li[tag=orderroomlist]');
            var i = this.context.orderformbody.children('li[tag=orderroomlist]').children("div[tag=order]").attr("i");
            this.showorderprice(orderroomlist, i);
        }
    },
    inputs_click: function() {
        var selectNights = this.context.orderform.find('ul').children('li[tag=orderroomlist]').children('div[tag=order]').children('div[id=selectNights]');
        var nightselect = selectNights.find("div[tag=nights]");
        this.context.selectNights = selectNights;
        this.context.rnsBox = selectNights.children('div[id=rnsBox]');
        var keywords = nightselect.children("div[tag=input]").children("input").val();
        if (keywords) {
            keywords = parseInt(keywords);
            nightselect.children("div[tag=input]").remove();
            if (keywords > 30) {
                var option = '<div value="' + keywords + '"><a href="javascript:;" class="on">' + keywords + '晚</a></div>';
                option += '<div tag="input"><input type="text" style="width: 31px; margin-right: 0; padding-left: 9px;" placeholder="输入"></div>';
            } else {
                option = '<div tag="input"><input type="text" style="width: 31px; margin-right: 0; padding-left: 9px;" placeholder="输入"></div>';
            }
            nightselect.append(option);
            nightselect.children("div[tag=input]").children("input").bind("keydown", this.nightsinput_keydown.toEventHandler(this));
            this.context.rnsBox.hide();
            this.context.selectNights.children('span').attr('value', keywords).text(keywords + '晚');
            var orderroomlist = this.context.editcheckbody.children('li[tag=orderroomlist]');
            var i = this.context.editcheckbody.children('li[tag=orderroomlist]').children("div[tag=order]").attr("i");
            this.showorderprice(orderroomlist, i);
        }
    },
    _orderdate_change: function(orderroomlist) {
        var checkindates = orderroomlist.children("div[tag=order]").children("div[id=selectDay]");
        var cancheckin = false;
        var arrivedate = '';
        for (var i = 0; i < checkindates.length; i++) {
            var checkinselect = checkindates[i];
            var date = $(checkinselect).children("span").attr("value");
            var datetime = M.strtotime(date);
            if (M.isEmpty(arrivedate) || arrivedate > datetime) {
                arrivedate = datetime;
            }
            var cancheckin = this._checkinable(datetime);
            if (cancheckin) {
                cancheckin = true;
                break;
            }
        }
        var checkinbtn = orderroomlist.parents(".modal-body").next().children("a[tag=checkin]").attr("cancheckin", cancheckin ? "1": "0");
        if (this.context.ordercell.attr("action") != 'hisadd') {
            if (cancheckin) {
                checkinbtn.show();
                orderroomlist.parent().children("li[tag=paytype]").find("div[tag=paystatistics]").css("top", "top:25px;");
                orderroomlist.parent().children("li[tag=idcard]").show();
                orderroomlist.parent().children("li[tag=paytype]").children().find("div[t=roomrate]").children("span").attr("value", "cash").text("现金");
                orderroomlist.parent().children("li[tag=paytype]").find("div[tag=roomrateform]").children("span").text("收款：");
            } else {
                checkinbtn.hide();
                orderroomlist.parent().children("li[tag=paytype]").find("div[tag=paystatistics]").css("top", "");
                orderroomlist.parent().children("li[tag=idcard]").hide();
                this.context.multiguesttip.hide();
                orderroomlist.parent().children("li[tag=paytype]").children().find("div[t=roomrate]").children("span").attr("value", "alipay").text("支付宝");
                orderroomlist.parent().children("li[tag=paytype]").find("div[tag=roomrateform]").children("span").text("收款：");
            }
        } else {
            if (this.orderstatus == 'order') {
                orderroomlist.parent().children("li[tag=idcard]").hide();
            }
        }
        var roomratetpl = orderroomlist.parent().children("li[tag=paytype]").find("div[t=roomrate]");
        M.DropdownList(roomratetpl, null, {});
        checkinbtn.attr("cancheckin", cancheckin ? "1": "0");
    },
    orderdate_change: function(ele) {
        var i = ele.parents("div[tag=order]").attr("i");
        i = M.isEmpty(i) ? "": i;
        var fromdate = ele.attr("value");
        var status = this.context.ordercell.attr("status");
        var ordersetid = this.context.ordercell.attr("ordersetid");
        var checkinsetid = this.context.ordercell.attr("checkinsetid");
        var setid = "";
        var id = "";
        if (status == "addorder" || status == "editorder") {
            setid = ordersetid;
            id = ele.parents("div[tag=order]").attr("oid");
            var orderroomlist = ele.parents("li[tag=orderroomlist]");
            this._orderdate_change(orderroomlist);
        } else if (status == "editcheckin") {
            setid = checkinsetid;
            id = ele.parents("div[tag=order]").attr("gid");
        }
        this._getavailablerooms(status, fromdate, i, setid, id);
    },
    orderprice_blur: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        var i = ele.parent().attr("i");
        i = M.isEmpty(i) ? "": i;
        var price = ele.val();
        var roomid = ele.parent().find("div[t=rooms]").children("span").attr("value");
        var nights = ele.parent().find("div[t=nights]").children("span").attr("value");
        var rtid = ele.parent().find("div[t=rooms]").find("div[tag=option][value=" + roomid + "]").attr("rtid");
        var avgstatus = this._getavgstatus(i, rtid);
        if (avgstatus.status == 1) {
            var setprice = avgstatus.price;
            var avgp = parseInt(price) / parseInt(nights);
            if (setprice != avgp) {
                this._setavgpricestatus(0, 0, i, rtid);
            }
        }
        var orderroomlist = ele.parents("li[tag=orderroomlist]");
        this.showdateprice(ele);
        this._sumorderprice(orderroomlist);
    },
    editcheck_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        var formlist = this.context.editcheck.children(".modal-body").find(".cntlist");
        var paytype = formlist.children("li[tag=paytype]");
        var ele_t = ele.attr("t");
        if (ele_t == 'consume') {
            ele = ele.children("span");
            t = 'showconsumetype';
        }
        switch (t) {
        case "save":
            this.savechecked(ele);
            break;
        case "addroom":
            var orderroomlist = this.context.editcheck.find("li[tag=orderroomlist]");
            this.addroomtpl(orderroomlist);
            break;
        case "removeroom":
            this.removeroomtpl(ele);
            break;
        case "color":
            this.setordercolor(ele);
            break;
        case "showfindetail":
            this.showfindetail(ele, "checkin");
            break;
        case "multiguest":
            this.addmultiguest(ele, "checkin");
            break;
        case "addroomrate":
            this.addroomrate(ele);
            break;
        case "adddeposit":
            this.adddeposit(ele);
            break;
        case "addconsume":
            this.addconsume(ele);
            break;
        case "showaddconsume":
            this.showaddconsumeform(ele);
            break;
        case "showconsumetype":
            this.showconsumetype(ele);
            break;
        case "consumetotal":
            this.showconsumelist(ele);
            break;
        case "consumetype":
            this.setconsumetype(ele);
            break;
        case "delpayform":
            this.delpayform(ele);
            break;
        case "showneedpaydetail":
            this.showneedpaydetail();
            break;
        case "roomrate":
            if (ele.val() == '0') {
                ele.select();
            }
            break;
        case "input_consume":
            if (ele.val() == '0') {
                ele.select();
            }
            break;
        case "showattn":
            this.showattn(ele);
            break;
        case "attnoption":
            this.changeattn(ele);
            break;
        case "checkbox":
            this.checkboxtoggle(ele);
            break;
        case "checkboxlabel":
            this.checkboxtoggle(ele.children("span[tag=checkbox]"));
            break;
        case "deposit":
            if (ele.val() == '0') {
                ele.select();
            }
            break;
        case 'remind':
            this.remindsetting(ele);
            break;
        case 'discount':
            this.discountdetail(this.context.editcheck);
            break;
        case 'price':
            this.showdateprice(ele);
            break;
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
    delform_click: function(e) {
        var ele = M.EventEle(e);
        var t = ele.attr("tag");
        if (t == 'delete') {
            var ordertype = this.context.delhidden.attr('ordertype');
            var ownprice = this.context.delform.find('.modal-body').find('.cntlist').children('li[tag=income]').find('input:first').val();
            if (M.isEmpty(ownprice)) {
                ownprice = 0;
            } else {
                if (isNaN(ownprice)) {
                    alert('所得收入输入格式不正确');
                    return;
                }
                ownprice = parseInt(ownprice);
            }
            this.delorder_action(ordertype, ownprice);
        }
        if (t == 'input_deposit') {
            if (ele.val() == 0) {
                ele.select();
            }
        }
        if (t == 'guesttotal') {
            var orderstatus = ele.attr("orderstatus");
            this.showmultiguestinfo(orderstatus);
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
            var roomlist = this.transform.getroomlist();
            var fromdate = d.req.fromdate;
            var enddate = d.req.enddate;
            var fromtime = M.strtotime(fromdate);
            var endtime = M.strtotime(enddate);
            var pickerarea = this.context.pickerarea.find("tr[tag=o]");
            while (fromtime <= endtime) {
                var date = M.timeformat(fromtime, 'Y-m-d');
                for (var i = 0; i < roomlist.length; i++) {
                    var tpl = $(roomlist[i]);
                    var rtid = tpl.attr("rtid");
                    var rid = tpl.attr("rid");
                    var roomname = tpl.children("div").html();
                    var roomtype = roomtypelist[rtid];
                    var price = roomtype['pricelist'][date];
                    showmsg = roomtype.roomtypename + "-" + roomname + ",¥" + price.price;
                    var targetcoordinate = this.transform.getcoordinate_bydata(date, rid);
                    var row = targetcoordinate.date_i;
                    var cols = targetcoordinate.roomid_idx;
                    var target = this._getpickercell(row, cols);
                    var sta = target.attr("sta");
                    target.attr("msg", showmsg);
                    if (M.isEmpty(sta) || sta == "unordered") {
                        if (this.inf.ov == '1' && this.inf.tp == '1') {
                            target.children("div").attr("title", '').tooltip({
                                position: {
                                    my: "left+15 top+20",
                                    at: "left bottom"
                                },
                                track: 1,
                                content: showmsg,
                                show: {
                                    delay: 100
                                },
                                hide: false
                            });
                        }
                    }
                }
                fromtime.setDate(fromtime.getDate() + 1);
            }
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
        var rid = this.context.roomlist.find('tbody').children('tr').children('td').attr('rid');
        if (this.sorttable.sta == 'checkedout' || target_sta == 'checkedout') {
            if (this.inf.ov == '1' && this.inf.tp == '1') {
                this.sorttable.pre_tpl.tooltip({
                    disabled: false
                });
            }
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
                var pre_tpl = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + pretr_i + "]").children("td[idx=" + pretd_idx + "]");
                if (!M.isEmpty(target_setid)) {
                    pre_tpl.children().removeClass("date-day").addClass("date-have").html(tpl);
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
        var data = {
            "orderid": orderid,
            "ordertype": this.sorttable.sta
        };
        var target_idx = this.sorttable.target_idx;
        var target_i = this.sorttable.target_i;
        var target_setid = this.sorttable.target_setid;
        var target_tpl = this.sorttable.target_tpl;
        if (!M.isEmpty(target_setid) && target_setid != this.sorttable.setid) {
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
            var target_key = target_id + this.sorttable.target_sta;
            var target_htm = this.tooltipmsg[target_key];
            target.children("div").attr("title", '').tooltip({
                position: {
                    my: "left+15 top+20",
                    at: "left bottom"
                },
                track: 1,
                content: target_htm,
                show: {
                    duration: 100
                }
            });
        }
        var pre = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + this.sorttable.pretr_i + "]").children("td[tag=day][idx=" + this.sorttable.pretd_idx + "]");
        pre.children("div").html(this.sorttable.pre_tpl);
        var id = M.isEmpty(this.sorttable.cid) ? this.sorttable.oid: this.sorttable.cid;
        var key = id + this.sorttable.sta;
        var showmsg = this.tooltipmsg[key];
        pre.children("div").attr("title", '').tooltip({
            position: {
                my: "left+15 top+20",
                at: "left bottom"
            },
            track: 1,
            content: showmsg,
            show: {
                duration: 100
            }
        });
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
            }
        }
        this.sortorders();
    },
    _clearitembyset: function(setid, type) {
        if (M.isEmpty(type)) type = "ordered";
        var targets = this._getpickercells(setid, type);
        this.transform._clearitembyset(targets, type);
        this.sortorders();
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
        var height = nights * 36 - 5;
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
            if (this.transform.isreverse != 1) {
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
        if (needcar == "1" && item.type != "checkedout") {
            divinfo.children("div").children(".demand").append($(tpl_car));
        }
        if (amount <= 0) {
            divinfo.children("div").children(".demand").append($(tpl_nopay));
        }
        if (item.type == 'checkedin') {
            divinfo.children("div").children(".demand").after($(tpl_checkedin));
        }
        tpl_checkedout = this.tpl_checkout;
        if (item.type == 'checkedout') {
            divinfo.children("div").children(".demand").after($(tpl_checkedout));
        }
        target.html("").append(divinfo);
        divinfo.attr("sta", type).attr("oid", oid).attr("from", item.orderfrom).attr("cid", cid).attr("gid", item.gid).attr("rid", roomid).attr("n", nights).attr("hidedays", hidedays).attr("setid", setid);
        divinfo.children("div").attr("oid", oid).attr("cid", cid).attr("setid", setid);
        if (this.inf.ov == '1' && this.inf.tp == '1') {
            var showmsg = this._showtip(item);
            var key_tip = item.id + item.type;
            this.tooltipmsg[key_tip] = showmsg;
            divinfo.children("div").attr("title", '').tooltip({
                position: {
                    my: "left+15 top+20",
                    at: "left bottom"
                },
                track: 1,
                content: showmsg,
                show: {
                    delay: 100
                },
                hide: false
            });
        }
        target.attr("sta", type);
        target.attr("n", nights);
        target.attr("hidedays", hidedays);
        target.attr("setid", setid);
        this.transform.changeorderstatus_moredays(target, nights, type, cols);
        var orderwidth = this.transform.getorderwidth();
        if (orderwidth != 0 && !M.isEmpty(orderwidth)) {
            target.children("div").css("width", orderwidth + 'px');
        }
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
            var checkmaxnights = this.transform.checkmaxnights(idx, i);
            if (parseInt(checkmaxnights) >= 400) {
                M.error("每个房间最多只能定400晚");
                return false;
            }
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
    _jump_doorder: function(data, isreverse, innid, type) {
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
        if (!M.isEmpty(innid)) {
            this.innid = innid;
        }
        this.orderstatus = '';
        this._clearorderform();
        this.memberstatus = 0;
        this.roomtypepricelist = {};
        this.avgpricestatus = {};
        var orderroomlist = this.context.orderformbody.children("li[tag=orderroomlist]");
        var tpl = orderroomlist.children("div[tag=order]:first");
        var earliest_i = 0,
        earliest_idx = 0;
        var earliest_date = '';
        if (type != 1 && data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                if (i > 0) {
                    var ordertpl = tpl.clone(true).attr("i", i);
                    orderroomlist.children("div[tag=orderinfo]").before(ordertpl);
                }
                var tr_i = data[i].start_i;
                var nights = data[i].nights;
                var price = data[i].price;
                var idx = data[i].idx;
                var coordinate = data[i].coordinate;
                var time = coordinate.date;
                this.cache_thisdate = time;
                var roomid = coordinate.roomid;
                this.roomlist[roomid] = coordinate;
                if (isreverse == 1) {
                    if (idx * 1 < earliest_idx * 1 || i == 0) {
                        earliest_i = tr_i;
                        earliest_idx = idx;
                        earliest_date = time;
                    }
                } else {
                    if (tr_i * 1 < earliest_i * 1 || i == 0) {
                        earliest_i = tr_i;
                        earliest_idx = idx;
                        earliest_date = time;
                    }
                }
                var arrivedate = M.strtotimeSetDefaultHour(time);
                var arrivedateStr = this.timeformat(arrivedate);
                var dateoptions = this._generateorderdates(arrivedate);
                var order_tpl = orderroomlist.children("div[tag=order][i=" + i + "]");
                order_tpl.find("div[tag=room]").attr("roomid", roomid);
                order_tpl.find("div[tag=nights]").attr("nights", nights);
                order_tpl.find("div[id=selectNights]").attr("value", nights).children("span").attr("value", nights).text(nights + '晚');
                order_tpl.find("div[t=datelist]").attr("value", arrivedateStr).children("span").attr("value", arrivedateStr);
                order_tpl.find("div[id=selectRoom]").attr("value", roomid).children("span").attr("value", roomid).html(coordinate.roomname);
                order_tpl.find("div[tag=checkindate]").html(dateoptions.options).val(time);
                order_tpl.find("input[tag=price]").val(price);
                this._getavailablerooms("addorder", arrivedateStr, i, "");
            }
            this.orderroomtpl_change(orderroomlist);
        }
        var ishis = false;
        var datetomorrow = this._gettimetomorrow(earliest_date);
        var now = this.getdatetime();
        if (now >= datetomorrow) {
            ishis = true;
        }
        this.avgpricestatus = {};
        var arrivedate = earliest_date;
        arrivedate_time = M.strtotime(arrivedate);
        var cancheckin = this._checkinable(arrivedate_time);
        var paytype = 'alipay';
        var paytype_tpl = this.context.orderformbody.children("li[tag=paytype]");
        paytype_tpl.children("div[tag=roomrateform]:first").show();
        if (type != 1) {
            if (cancheckin) {
                var paytype = 'cash';
                this.context.orderformbody.children("li[tag=idcard]").show();
                this.context.dtpayBox.addClass("ip-right");
                this.context.orderandcheckinbtn.show().attr("cancheckin", "1");
                this.context.orderformbody.children("li[tag=paytype]").find("div[tag=roomrateform]").children("span").text("收款：");
            } else {
                paytype_tpl.find("div[tag=depositform]").hide();
                this.context.multiguesttip.hide();
                this.context.orderformbody.children("li[tag=idcard]").hide();
                this.context.rmpayBox.addClass("ip-right");
                this.context.orderandcheckinbtn.hide().attr("cancheckin", "0");
                this.context.orderformbody.children("li[tag=paytype]").find("div[tag=roomrateform]").children("span").text("收款：");
            }
            if (ishis) {
                var paytype = 'cash';
                this.context.orderandcheckinbtn.hide();
                this.context.dtpayBox.removeClass("").addClass("ip-dropdown ip-right");
                this.context.o_needcar.attr("checked", false).parent().hide();
                this.context.ordercell.attr("action", "hisadd");
                this.context.orderform.children("div[tag=head]").children("h4").attr("type", "bulu").children("span[tag=title]").html("补录订单");
                this.context.orderform.children(".modal-footer").children("a[tag=suborder]").html("补录订单").attr("text", "补录订单");
                var obj = this.context.orderformbody.children("li[tag=channel]").children().find("div[id=o_channel]").children("div:first").children("a").attr("color");
                if (obj == '') {
                    obj = "ofreshgreen";
                }
                this.context.ordercell.attr("color", obj);
                var colorfield = this.context.orderformbody.children("li[tag=ordercolor]");
                var selected = colorfield.find("div[tag=colorlist]").children("span[ison=1]");
                selected.attr('ison', "0");
                selected.attr("class", selected.attr("val"));
                var first = colorfield.find("div[tag=colorlist]").children("span[val=" + obj + "]");
                first.attr("ison", "1");
                first.attr("class", first.attr("val") + " checked");
                colorfield.find("div[tag=color]").children("span").attr("class", first.attr("val") + " checked");
                this.context.orderform.find("span[tag=blockbooking]").hide();
            } else {
                M.emptyVal(this.context.o_deposit);
                var date = M.timeformat(now, 'Y-m-d');
                this.context.o_deposit.show();
                this.context.o_needcar.attr("checked", false).parent().show();
                this.context.o_paystatus.show();
                this.opaystatus_change();
                this.context.ordercell.attr("action", "add");
                this.context.orderform.children(".modal-footer").children("a[tag=suborder]").html("提交订单").attr("text", "提交订单");
                var obj = this.context.orderformbody.children("li[tag=channel]").children().find("div[id=o_channel]").children("div:first").children("a").attr("color");
                if (obj == '') {
                    obj = "ofreshgreen";
                }
                this.context.ordercell.attr("color", obj);
                var colorfield = this.context.orderformbody.children("li[tag=ordercolor]");
                var selected = colorfield.find("div[tag=colorlist]").children("span[ison=1]");
                selected.attr('ison', "0");
                selected.attr("class", selected.attr("val"));
                var first = colorfield.find("div[tag=colorlist]").children("span[val=" + obj + "]");
                first.attr("ison", "1");
                first.attr("class", first.attr("val") + " checked");
                colorfield.find("div[tag=color]").children("span").attr("class", first.attr("val") + " checked");
                this.context.orderform.find("span[tag=blockbooking]").show();
            }
            var date = coordinate.date;
            var datetime = M.strtotime(date);
            var name = M.timeformat(datetime, 'm/d');
            var obj1 = this.context.orderformbody.children("li[tag=orderroomlist]").children("div").children("div[id=selectDay]");
            this.droplist.order.daydroplist = M.DropdownList(obj1, this.orderdate_change.toEventHandler(this), {});
            this.context.orderform.find('li[tag=blockbookinglist]').hide();
            this.context.orderform.find('li[tag=orderroomlist]').show();
            this.context.orderform.attr('bookallroom', '0');
        }
        var channel_tpl = this.context.orderformbody.children("li[tag=channel]").children("div");
        this.droplist.order.typedroplist = M.DropdownList(channel_tpl, this.channel_change.toEventHandler(this), {});
        paytype_tpl.children("div[tag=paystatistics]").hide();
        var roomrate_tpl = paytype_tpl.find("div[t=roomrate]");
        roomrate_tpl.attr("value", paytype);
        this.droplist.order.paymentsdroplist = M.DropdownList(roomrate_tpl, null, {});
        var deposit_tpl = paytype_tpl.find("div[t=deposit]");
        deposit_tpl.attr("value", "cash");
        this.droplist.order.depositBoxdroplist = M.DropdownList(deposit_tpl, null, {});
        var idcard_tpl = this.context.orderformbody.children("li[tag=idcard]").children("div").children("div[t=idcardform]");
        if (idcard_tpl.length > 0) {
            this.droplist.order.idcard = M.DropdownList(idcard_tpl, null, {});
        }
        this.context.orderform.find('label[tag=remindlabel]').children('span').removeClass('circle-btn-green').addClass('circle-btn');
        this._create_remindtpl_li('', 'order');
        this.context.orderform.attr("orderstatus", "order");
        this.orderstatus = 'addorder';
        this.reminddata = '';
        M.Popup(this.context.orderform, {
            "hideclass": "bootbox modal fade",
            "showclass": "bootbox modal fade in",
            "drag": this.dragorder.toEventHandler(this)
        },
        function() {
            this.context.o_guestname.focus();
        }.toEventHandler(this));
    },
    blockbookingcheckindate_change: function(ele) {
        var todaydate = M.timeformat(this.getdatetime(), 'Y-m-d');
        var day = ele.attr('day');
        var thisdate = ele.attr('value');
        var tpl_order = ele.parents('div[tag=popform]');
        var n = tpl_order.find('li[tag=blockbookinglist]').find('div[t=selectcheckinnights]').children("span").attr("value");
        if (parseInt(day) < parseInt(n)) {
            n = parseInt(day);
        }
        if (todaydate >= thisdate) {
            this.context.orderformbody.children("li[tag=idcard]").show();
        } else {
            this.context.orderformbody.children("li[tag=idcard]").hide();
        }
        this.tpl_nigthslist(day, n, tpl_order);
    },
    tpl_nigthslist: function(day, nights, tpl_order) {
        var html_nights = '';
        for (var i = 1; i <= day; i++) {
            html_nights += '<div value="' + i + '"><a href="javascript:;">' + i + '晚</a></div>';
        }
        if (day < 1) {
            html_nights = '<div value="' + 0 + '"><a href="javascript:;">' + 0 + '晚</a></div>';
        }
        tpl_order.find('li[tag=blockbookinglist]').find('div[tag=tpllist]').empty().html(html_nights);
        var nights_tpl = tpl_order.find('li[tag=blockbookinglist]').find('div[t=selectcheckinnights]');
        nights_tpl.attr('value', nights);
        M.DropdownList(nights_tpl, null, {});
    },
    dis: function() {
        this.context.cashierdetailBox.css("z-index", "1060");
        M.Popup(this.context.cashierdetailBox, {
            "hideclass": "modal fade",
            "showclass": "modal fade in"
        });
        this.context.syt.hide();
    },
    _multiguesttip: function() {
        if (this.plugin.idcard == 0) {
            return;
        }
        var status = this.context.multiguesttip.attr("status");
        if (status == 0) {
            return;
        }
        var tip = this.context.orderformbody.children("li[tag=idcard]").children("div").children("a[tag=multiguest]");
        var offset = tip.offset();
        this.context.multiguesttip.show().css("top", offset.top - 30).css("left", offset.left);
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
    _doorder: function(coordinatedata, innid) {
        if (!M.isEmpty(innid)) {
            this.innid = innid;
        }
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
        this.memberstatus = 0;
        var time = coordinatedata.date;
        this.context.orderform.attr("time", time);
        this.cache_thisdate = time;
        this.context.orderform.find('li[tag=blockbookinglist]').hide();
        this.context.orderform.find('li[tag=orderroomlist]').show();
        this.avgpricestatus = {};
        var arrivedate = M.strtotimeSetDefaultHour(time);
        var arrivedateStr = this.timeformat(arrivedate);
        var ishis = false;
        var datetomorrow = this._gettimetomorrow(time);
        var now = this.getdatetime();
        if (now >= datetomorrow) {
            ishis = true;
        }
        this._clearorderform();
        this.roomtypepricelist = {};
        this.formatedateprice = {};
        this.temporderdetail = null;
        this.tempcheckdetail = null;
        var rid = coordinatedata.roomid;
        var rtid = coordinatedata.rtid;
        rid = M.isEmpty(rid) ? "": rid;
        rtid = M.isEmpty(rtid) ? "": rtid;
        var dateoptions = this._generateorderdates(arrivedate);
        this.context.o_channel.attr("disabled", false);
        this.context.o_paystatus.attr("disabled", false);
        var orderroomlist = this.context.orderformbody.children("li[tag=orderroomlist]");
        var firstorder = orderroomlist.children("div");
        var firstroomdates = firstorder.find("div[tag=checkindate]").html(dateoptions.options).attr("disabled", false).val(arrivedateStr);
        firstorder.find("div[tag=room]").attr("roomid", rid).children("span").attr("roomid", rid).html(coordinatedata.roomname).attr("disabled", false);
        firstorder.find("div[id=selectDay]").attr("value", arrivedateStr);
        firstorder.find("div[id=selectRoom]").attr("value", rid);
        firstorder.find("div[id=selectNights]").attr("value", 1);
        firstorder.find("div[tag=nights]").attr("disabled", false);
        firstorder.find("input[tag=price]").val(coordinatedata.price);
        var paytype_tpl = this.context.orderformbody.children("li[tag=paytype]");
        paytype_tpl.children("div[tag=roomrateform]:first").show();
        this._getavailablerooms("addorder", arrivedateStr, 0, "");
        var today = this.getdatetime();
        var arrivedate_time = M.strtotimeSetDefaultHour(arrivedateStr);
        var cancheckin = this._checkinable(arrivedate_time);
        var paytype = 'alipay';
        if (cancheckin) {
            var paytype = 'cash';
            this.context.orderformbody.children("li[tag=idcard]").show();
            this.context.dtpayBox.addClass("ip-right");
            this.context.orderandcheckinbtn.show().attr("cancheckin", "1");
        } else {
            paytype_tpl.find("div[tag=depositform]").hide();
            this.context.orderformbody.children("li[tag=idcard]").hide();
            this.context.multiguesttip.hide();
            this.context.rmpayBox.addClass("ip-right");
            this.context.orderandcheckinbtn.hide().attr("cancheckin", "0");
        }
        var fromdate = dateoptions.fromdate;
        var enddate_time = M.strtotime(dateoptions.enddate);
        enddate_time.setDate(enddate_time.getDate() + this.maxnights);
        var enddate = this.timeformat(enddate_time);
        this.context.ordercell.attr("fromdate", fromdate).attr("enddate", enddate);
        this.formatedateprice = {};
        var i = 0;
        if (ishis) {
            this.context.orderandcheckinbtn.hide();
            this.context.dtpayBox.removeClass("").addClass("ip-dropdown ip-right");
            paytype = "cash";
            M.emptyVal(this.context.o_deposit);
            this.context.o_deposit.hide();
            this.context.o_needcar.attr("checked", false).parent().hide();
            this.context.ordercell.attr("action", "hisadd");
            this.context.orderform.children("div[tag=head]").children("h4").attr("type", "bulu").children("span[tag=title]").html("补录订单");
            this.context.orderform.children(".modal-footer").children("a[tag=suborder]").html("补录订单").attr("text", "补录订单");
            var obj = this.context.orderformbody.children("li[tag=channel]").children().find("div[id=o_channel]").children("div:first").children("a").attr("color");
            if (obj == '') {
                obj = "ofreshgreen";
            }
            this.context.ordercell.attr("color", obj);
            var colorfield = this.context.orderformbody.children("li[tag=ordercolor]");
            var selected = colorfield.find("div[tag=colorlist]").children("span[ison=1]");
            selected.attr('ison', "0");
            selected.attr("class", selected.attr("val"));
            var first = colorfield.find("div[tag=colorlist]").children("span[val=" + obj + "]");
            first.attr("ison", "1");
            first.attr("class", first.attr("val") + " checked");
            colorfield.find("div[tag=color]").children("span").attr("class", first.attr("val") + " checked");
            this.context.orderform.find("span[tag=blockbooking]").hide();
        } else {
            var date = M.timeformat(now, 'Y-m-d');
            M.emptyVal(this.context.o_deposit);
            this.context.o_deposit.show();
            this.context.o_needcar.attr("checked", false).parent().show();
            this.context.o_paystatus.show();
            this.opaystatus_change();
            this.context.ordercell.attr("action", "add");
            this.context.orderform.children("div[tag=head]").children("h4").children("span[tag=title]").html("预订");
            this.context.orderform.children(".modal-footer").children("a[tag=suborder]").html("提交订单").attr("text", "提交订单");
            var obj = this.context.orderformbody.children("li[tag=channel]").children().find("div[id=o_channel]").children("div:first").children("a").attr("color");
            if (obj == '') {
                obj = "ofreshgreen";
            }
            this.context.ordercell.attr("color", obj);
            var colorfield = this.context.orderformbody.children("li[tag=ordercolor]");
            var selected = colorfield.find("div[tag=colorlist]").children("span[ison=1]");
            selected.attr('ison', "0");
            selected.attr("class", selected.attr("val"));
            var first = colorfield.find("div[tag=colorlist]").children("span[val=" + obj + "]");
            first.attr("ison", "1");
            first.attr("class", first.attr("val") + " checked");
            colorfield.find("div[tag=color]").children("span").attr("class", first.attr("val") + " checked");
            this.context.orderform.find("span[tag=blockbooking]").show();
        }
        var channel_tpl = this.context.orderformbody.children("li[tag=channel]").children("div");
        this.droplist.order.typedroplist = M.DropdownList(channel_tpl, this.channel_change.toEventHandler(this), {});
        var date = coordinatedata.date;
        var datetime = M.strtotime(date);
        var name = M.timeformat(datetime, 'm/d');
        var obj1 = orderroomlist.children("div").children("div[id=selectDay]");
        this.droplist.order.daydroplist = M.DropdownList(obj1, this.orderdate_change.toEventHandler(this), {});
        this.droplist.order.daydroplist._setval({
            'value': date,
            "name": name
        });
        this.droplist.order.idtypedroplist = M.DropdownList(this.context.idtypeoption, null, {});
        paytype_tpl.children("div[tag=paystatistics]").hide();
        var roomrate_tpl = paytype_tpl.find("div[t=roomrate]");
        roomrate_tpl.attr("value", paytype);
        this.droplist.order.paymentsdroplist = M.DropdownList(roomrate_tpl, null, {});
        var deposit_tpl = paytype_tpl.find("div[t=deposit]");
        deposit_tpl.attr("value", "cash");
        this.droplist.order.depositBoxdroplist = M.DropdownList(deposit_tpl, null, {});
        var idcard_tpl = this.context.orderformbody.children("li[tag=idcard]").children("div").children("div[t=idcardform]");
        if (idcard_tpl.length > 0) {
            this.droplist.order.idcard = M.DropdownList(idcard_tpl, null, {});
        }
        this.orderstatus = 'addorder';
        this.context.orderform.find('label[tag=remindlabel]').children('span').removeClass('circle-btn-green').addClass('circle-btn');
        this._create_remindtpl_li('', 'order');
        this.context.orderform.attr("orderstatus", "order");
        M.Popup(this.context.orderform, {
            "hideclass": "bootbox modal fade",
            "showclass": "bootbox modal fade in",
            "drag": this.dragorder.toEventHandler(this)
        },
        function() {
            this.context.o_guestname.focus();
        }.toEventHandler(this));
    },
    dragorder: function() {
        this.context.attnlist.hide();
        this.context.datepickerpriceform.hide();
    },
    _getavailablerooms: function(status, fromdate, index, setid, oid) {
        var innid = this.innid;
        var data = {
            "act": "getroomsta",
            "innid": innid,
            "fromdate": fromdate,
            "i": index,
            "from": status
        };
        if (status == "addorder" || status == "editorder") {
            data["ordersetid"] = setid;
            data["orderid"] = oid;
            this.context.ordercell.attr("status", status).attr("ordersetid", setid).attr('checkinsetid', "");
            this.context.ordercell.attr("status", status).attr("ordersetid", setid).attr('checkinsetid', "");
        } else {
            data["checkinsetid"] = setid;
            data["gid"] = oid;
            this.context.ordercell.attr("status", status).attr("ordersetid", '').attr('checkinsetid', setid);
        }
        M._getjson("/Book/getroomsta", data, this.getroomlist_finished.toEventHandler(this));
    },
    getroomlist_finished: function(d) {
        if (d.status == "success") {
            var roomlist = d.roomlist;
            var pricelist = d.pricelist;
            var index = d.req.i;
            var setpricelist = d.setorderpricelist;
            if (!M.isEmpty(setpricelist)) {
                this.usersetpricelist[setpricelist.oid] = {};
                this.usersetpricelist[setpricelist.oid][setpricelist.rtid] = setpricelist.pricelist;
            }
            var orderroomlist = null;
            switch (d.req.from) {
            case "addorder":
                orderroomlist = this.context.orderform.children(".modal-body").find(".cntlist").children("li[tag=orderroomlist]");
                break;
            case "editorder":
                orderroomlist = this.context.orderform.children(".modal-body").find(".cntlist").find("li[tag=orderroomlist]");
                break;
            case "editcheckin":
                orderroomlist = this.context.editcheck.children(".modal-body").find(".cntlist").find("li[tag=orderroomlist]");
                break;
            default:
                orderroomlist = this.context.orderform.children(".modal-body").find(".cntlist").children("li[tag=orderroomlist]");
                break;
            }
            var pricelist = this._getdateprice(pricelist);
            for (var p in pricelist) {
                var rtprice = pricelist[p];
                var formatedprice = this._formatpricesource(rtprice);
                if (!M.isEmpty(this.formatedateprice[p])) {
                    for (var k in formatedprice) {
                        this.formatedateprice[p][k] = formatedprice[k];
                    }
                } else {
                    this.formatedateprice[p] = formatedprice;
                }
            }
            var oid = d.req.orderid;
            if (!M.isEmpty(oid)) {
                this.tempavarooms[oid] = roomlist;
            }
            this.showorderrooms(orderroomlist, roomlist, d.req.i);
        } else {
            if (d.status == 'hasswitch') {
                M.confirmmessage(d.msg, this.reload.toEventHandler(this));
            }
        }
    },
    _getdateprice: function(roomtypelist) {
        var list = {};
        for (var rtid in roomtypelist) {
            var roomtype = roomtypelist[rtid];
            var defaultprice = roomtype["price"];
            var weekendprice = roomtype["weekendprice"];
            var weekendpricelist = roomtype['weekendpricestr'];
            var weekenddays = roomtype["weekenddays"];
            var priceList = roomtype.pricelist;
            var fromtime = M.strtotime(roomtype.fromdate);
            var endtime = M.strtotime(roomtype.enddate);
            var p = 0;
            var temp_pricelist = [];
            while (fromtime <= endtime) {
                var time = M.timeformat(fromtime, 'Y-m-d');
                var dayofweek = fromtime.getDay();
                var has = 0;
                var tempprice = null;
                var length = 0;
                if (!M.isEmpty(priceList)) {
                    length = priceList.length;
                }
                for (j = 0; j < length; j++) {
                    var price = priceList[j];
                    var datestr = price["date"];
                    var datetime = M.strtotime(datestr);
                    datestr = M.timeformat(datetime, 'Y-m-d');
                    if (time == datestr) {
                        has = 1;
                        tempprice = price;
                        break;
                    }
                }
                if (has) {
                    var temp = {
                        "roomtypeid": roomtype["id"],
                        "roomtypename": roomtype["roomtypename"],
                        "price": tempprice["price"],
                        "type": tempprice["pricetype"],
                        "pricefrom": "calendar",
                        "date": time
                    };
                    temp_pricelist.push(temp);
                } else {
                    p = defaultprice;
                    if (weekenddays.indexOf(dayofweek) >= 0) {
                        if (!M.isEmpty(weekendpricelist)) {
                            p = weekendpricelist[dayofweek];
                        } else {
                            p = weekendprice;
                        }
                    }
                    var temp = {
                        "roomtypeid": roomtype["id"],
                        "roomtypename": roomtype["roomtypename"],
                        "price": p,
                        "type": "0",
                        "pricefrom": "default",
                        "date": time
                    };
                    temp_pricelist.push(temp);
                }
                fromtime.setDate(fromtime.getDate() + 1);
            }
            list[rtid] = temp_pricelist;
        }
        return list;
    },
    reload: function() {
        location.reload('/book/index');
    },
    getprice_finished: function(d) {
        if (d.status == "success") {
            if (!M.isEmpty(d.pricelist)) {
                if (!M.isEmpty(d.pricelist)) {
                    this.formatedateprice[d.req.roomtypeid] = this._formatpricesource(d.pricelist);
                    var orderroomlist = null;
                    switch (d.req.from) {
                    case "addorder":
                        orderroomlist = this.context.orderform.children(".modal-body").find(".cntlist").children("li[tag=orderroomlist]");
                        break;
                    case "editorder":
                        orderroomlist = this.context.orderform.children(".modal-body").find(".cntlist").children("li[tag=orderroomlist]");
                        break;
                    default:
                        orderroomlist = this.context.orderform.children(".modal-body").find(".cntlist").children("li[tag=orderroomlist]");
                        break;
                    }
                    this.showorderprice(orderroomlist, d.req.i);
                }
            }
        }
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
    _sumorderprice: function(orderroomlist) {
        var sum = 0;
        var sum_orgprice = 0;
        var bookallroom = this.bookallroom;
        if (M.isEmpty(bookallroom)) {
            bookallroom = 0;
        }
        var tpl = '';
        var discount = this._getdiscount();
        if (bookallroom == 0) {
            var c_discount = 1;
            if (discount > 0) {
                c_discount = discount / 10;
            }
            targetli = orderroomlist.children("div[tag=order]").each(function() {
                var price = $(this).children("input[type=text][tag=price]").val();
                var orgprice = $(this).children("input[type=text][tag=price]").attr('orgprice');
                if (M.isEmpty(price) || isNaN(price)) price = 0;
                price = parseInt(price);
                orgprice = parseInt(orgprice);
                sum += price;
                if (!M.isEmpty(orgprice) && !isNaN(orgprice)) {
                    sum_orgprice += orgprice;
                }
            });
            tpl = orderroomlist.parents("ul").children("li[tag=paytype]").children("div[tag=paystatistics]");
            if (sum_orgprice > 0 && this.memberstatus == 1) {
                var new_discount = Math.round(parseInt(sum * 100 / sum_orgprice)) / 10;
                this._setdiscount(new_discount);
                this._discountshow_change(orderroomlist, new_discount);
            }
        } else {
            if (this.orderstatus == 'checkin' || this.orderstatus == 'checkout') {
                sum = parseInt(this.context.editcheck.find('li[tag=blockbookinglist]').find('input[tag=bookallroom_input]').val());
                tpl = this.context.editcheckbody.children("li[tag=paytype]").children("div[tag=paystatistics]");
            } else {
                sum = parseInt(this.context.orderform.find('li[tag=blockbookinglist]').find('input[tag=bookallroom_input]').val());
                tpl = this.context.orderformbody.children("li[tag=paytype]").children("div[tag=paystatistics]");
            }
        }
        orderroomlist.find("strong[tag=totalprice]").html("¥" + sum);
        var orderstatus = orderroomlist.parents("div[tag=popform]").attr("orderstatus");
        var payedtotal = this.context.needpayform.attr("payedtotal");
        var payeddeposit = this.context.needpayform.attr("payeddeposit");
        var consumetotal = this.context.needpayform.attr("consumetotal");
        var newroomratetotal = this._getnewroomratetotal(orderroomlist);
        var newdeposittotal = this._getnewdepositetotal(orderroomlist);
        var newconsumetotal = this._getnewdeconsumetotal(orderroomlist);
        var payedalltotal = parseInt(payedtotal) + parseInt(newroomratetotal) + parseInt(payeddeposit) + parseInt(newdeposittotal);
        var needpay = 0;
        tpl.find("a[tag=showfindetail]").html("&yen;" + payedalltotal);
        if (!M.isEmpty(orderstatus) && orderstatus == "checkout") {
            var consumealltotal = parseInt(consumetotal) + parseInt(newconsumetotal);
            tpl.find("a[tag=consumetotal]").html("&yen;" + consumealltotal);
        } else {
            needpay = parseInt(sum) + parseInt(consumetotal) + parseInt(newconsumetotal) - parseInt(payedalltotal);
            tpl.find("a[tag=showneedpaydetail]").html("&yen;" + needpay);
        }
    },
    _getnewroomratetotal: function(orderroomlist) {
        var li_paytype = orderroomlist.parents("ul").children("li[tag=paytype]");
        var roomratelist = li_paytype.children("div[tag=roomrateform]");
        var roomratetotal = 0;
        roomratelist.each(function() {
            var tpl = $(this);
            var amount = tpl.find("input[name=roomrate]").val();
            if (!M.isEmpty(amount)) {
                roomratetotal = parseInt(roomratetotal) + parseInt(amount);
            }
        });
        return roomratetotal;
    },
    _getnewdepositetotal: function(orderroomlist) {
        var li_paytype = orderroomlist.parents("ul").children("li[tag=paytype]");
        var tpl_list = li_paytype.children("div[tag=depositform][type=addtpl]");
        var total = 0;
        tpl_list.each(function() {
            var tpl = $(this);
            var amount = tpl.find("input[name=deposit]").val();
            if (!M.isEmpty(amount)) {
                total = parseInt(total) + parseInt(amount);
            }
        });
        return total;
    },
    _getnewdeconsumetotal: function(orderroomlist) {
        var li_paytype = orderroomlist.parents("ul").children("li[tag=paytype]");
        var tpl_list = li_paytype.children("div[tag=consumeform][type=addtpl]");
        var total = 0;
        tpl_list.each(function() {
            var tpl = $(this);
            var amount = tpl.find("input[name=consume]").val();
            if (!M.isEmpty(amount)) {
                total = parseInt(total) + parseInt(amount);
            }
        });
        return total;
    },
    roomrate_change: function(e) {
        var ele = M.EventEle(e);
        var value = ele.val();
        var orderroomlist = ele.parents("ul").children('li[tag=orderroomlist]');
        this._sumorderprice(orderroomlist);
    },
    showorderrooms: function(orderroomlist, roomlist, i) {
        var targetli = null;
        if (M.isEmpty(i) && i != 0) {
            targetli = orderroomlist.find("div[tag=order]");
        } else {
            i = parseInt(i);
            if (i == -1) return;
            targetli = orderroomlist.children("div[tag=order][i=" + i + "]");
        }
        var roomselect = targetli.find("div[tag=room]");
        var options = "";
        var roomid = targetli.children("div[id=selectRoom]").attr("value");
        var orderdetail = this.temporderdetail;
        if (M.isEmpty(orderdetail)) {
            orderdetail = this.tempcheckdetail;
        }
        if (roomlist.length > 0) {
            roomselect.parents("div[id=selectRoom]").children("span").attr("optionlength", 1).attr("style", "");
            var selectroomstatus = 0;
            for (var j = 0; j < roomlist.length; j++) {
                var r = roomlist[j];
                if (r.id == roomid) {
                    selectroomstatus = 1;
                    options += '<div value="' + r.id + '" rtid="' + r.roomtypeid + '" morenights="' + r.morenights + '" maxnights="' + r.maxnights + '" tag="option" ><a href="javascript:;" class="on">' + r.roomname + '</a></div>';
                } else {
                    options += '<div value="' + r.id + '" rtid="' + r.roomtypeid + '" morenights="' + r.morenights + '" maxnights="' + r.maxnights + '" tag="option"><a href="javascript:;">' + r.roomname + '</a></div>';
                }
            }
            if (selectroomstatus == 0) {
                var room = this.roomlist[roomid];
                if (!M.isEmpty(room)) {
                    options = '<div value="' + room.roomid + '" rtid="' + room.rtid + '" morenights="0" maxnights="0" tag="option" ><a href="javascript:;" class="on">' + room.roomname + '-已被占</a></div>' + options;
                }
            }
        } else {
            roomselect.parents("div[id=selectRoom]").children("span").attr("optionlength", 0).attr("style", "background:#eeeeee");
            options += '<div value="0" tag="option"><a href="javascript:;">无可用房间</a></div>';
        }
        roomselect.html(options);
        var obj2 = targetli.children("div[id=selectRoom]");
        this.droplist.order.roomdroplist = M.DropdownList(obj2, this.orderroom_change.toEventHandler(this), {});
        this.roomtypepricelist = {};
        this.showordernights(targetli, i);
        this.showorderprice(orderroomlist, i);
    },
    showorderprice: function(orderroomlist, i) {
        var targetli = null;
        var orderdetail = this.temporderdetail;
        if (M.isEmpty(orderdetail)) {
            orderdetail = this.tempcheckdetail;
        }
        if (M.isEmpty(i) && i != 0) {
            targetli = orderroomlist.children("div[tag=order]");
        } else {
            i = parseInt(i);
            if (i == -1) return;
            targetli = orderroomlist.children("div[tag=order][i=" + i + "]");
        }
        var priceinput = targetli.children("input[type=text][tag=price]");
        if (priceinput.attr("isfirst") == "1") {
            priceinput.attr("isfirst", "");
            return;
        }
        var index = i;
        var value = targetli.children("div[id=selectRoom]").children("span").attr("value");
        var rtid = this._getroomid(targetli.children("div[id=selectRoom]"), value);
        var checkindate = targetli.children("div[id=selectDay]").children("span").attr("value");
        var nights = targetli.children("div[id=selectNights]").children("span").attr("value");
        var oid = targetli.attr("oid");
        var n = parseInt(nights);
        var arrivedate = M.strtotimeSetDefaultHour(checkindate);
        var total = 0;
        var orgpricetotal = 0;
        var pricesource = this.formatedateprice[rtid];
        var discount = this._getdiscount();
        var bookallroom = this.bookallroom;
        if (M.isEmpty(bookallroom)) {
            bookallroom = 0;
        }
        var c_discount = 10;
        if (bookallroom == 0) {
            if (discount > 0) {
                c_discount = discount;
            }
        }
        if (M.isEmpty(pricesource) || pricesource.length == 0) {
            total = "";
        } else {
            var orgprice = 0;
            for (var i = 0; i < n; i++) {
                var d = this.timeformat(arrivedate);
                var p = pricesource[d];
                var orgprice = pricesource[d];
                p = parseInt(parseInt(p) * c_discount / 10);
                var avgstatus = this._getavgstatus(index, rtid);
                if (avgstatus.status == 1) {
                    p = avgstatus.price;
                } else {
                    var o_spricelist = this.usersetpricelist[oid];
                    if (!M.isEmpty(o_spricelist)) {
                        spricelist = o_spricelist[rtid];
                        if (!M.isEmpty(spricelist) && !M.isEmpty(spricelist[d])) {
                            p = spricelist[d];
                        }
                    }
                    var t_pricelist = this.roomtypepricelist[index];
                    if (!M.isEmpty(t_pricelist)) {
                        for (j in t_pricelist) {
                            if (t_pricelist[j]['rtid'] == rtid && t_pricelist[j]['date'] == d) {
                                p = t_pricelist[j]['price'];
                                break;
                            }
                        }
                    }
                }
                if (M.isEmpty(p)) p = 0;
                if (isNaN(p)) p = 0;
                p = parseInt(p);
                total += p;
                if (M.isEmpty(orgprice)) orgprice = 0;
                if (isNaN(orgprice)) orgprice = 0;
                orgpricetotal += parseInt(orgprice);
                arrivedate.setDate(arrivedate.getDate() + 1);
            }
        }
        priceinput.attr("orgprice", orgpricetotal).val(total).attr("isfirst", "");
        this._sumorderprice(orderroomlist);
    },
    _getavgstatus: function(i, rtid) {
        var avgstatus = this.avgpricestatus[i];
        if (!M.isEmpty(avgstatus)) {
            if (!M.isEmpty(avgstatus[rtid])) {
                return avgstatus[rtid];
            } else {
                return {
                    'status': 0,
                    "price": 0
                };
            }
        } else {
            return {
                'status': 0,
                "price": 0
            };
        }
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
    _showordernights: function(targetli) {
        var nightselect = targetli.find("div[id=rnsBox]");
        var nightInitVal = targetli.find("div[id=roomnights]");
        var maxnight = this.maxnights;
        if (M.isEmpty(maxnight) || isNaN(maxnight)) {
            nightselect.html("");
            return;
        }
        maxnight = parseInt(maxnight);
        var nightsval = targetli.attr("nights");
        var options = "";
        for (var i = 1; i <= maxnight; i++) {
            if (!M.isEmpty(nightsval) && i == nightsval) {
                options += '<div value="' + i + '"  tag="option" selected="selected"><a href="javascript:;">' + i + '晚</a></div>';
            } else {
                options += '<div value="' + i + '" tag="option"><a href="javascript:;"  >' + i + '晚</a></div>';
            }
        }
        nightselect.html(options);
        this.context.nightdroplists = M.DropdownList(nightInitVal, null, {});
        this.context.nightdroplists._setval({
            'value': nightsval,
            "name": nightsval + '晚'
        });
    },
    showordernights: function(targetli, i) {
        var value = targetli.children("div[id=selectRoom]").children("span").attr("value");
        var nightselect = targetli.children("div[id=selectNights]").find("div[tag=nights]");
        var maxnight = targetli.children("div[id=selectRoom]").children("div[id=roomsBox]").children("div[tag=room]").find("div[value=" + value + "]").attr("maxnights");
        if (M.isEmpty(maxnight) || isNaN(maxnight)) {
            nightselect.html("");
            return;
        }
        var morenights = targetli.children("div[id=selectRoom]").children("div[id=roomsBox]").children("div[tag=room]").find("div[value=" + value + "]").attr("morenights");
        maxnight = parseInt(maxnight);
        var nightsval = targetli.children("div[id=selectNights]").attr("value");
        var options = "";
        for (var i = 1; i <= maxnight; i++) {
            if (!M.isEmpty(nightsval) && i == nightsval) {
                options += '<div value="' + i + '"><a href="javascript:;" class="on">' + i + '晚</a></div>';
            } else {
                options += '<div value="' + i + '"><a href="javascript:;">' + i + '晚</a></div>';
            }
        }
        if (nightsval > 30) {
            options += '<div value="' + nightsval + '"  tag="option" selected="selected"><a href="javascript:;">' + nightsval + '晚</a></div>';
        }
        nightselect.html(options).attr("morenights", morenights);
        nightselect.find('div[tag=input]').remove();
        var nights = nightsval;
        var checktype = this.context.checkinoption.attr('checktype');
        this.droplist.order.nightsdroplist = M.DropdownList(targetli.children("div[id=selectNights]"), this.ordernight_change.toEventHandler(this), {});
        var editclass = this.context.orderform.children('div[tag=head]').children('h4').text();
        if (editclass == "修改订单") {
            if (nights > 30) {
                var selectNights = targetli.children("div[id=selectNights]");
                var nightselect = selectNights.find("div[tag=nights]");
                opt = '<div tag="input"><input type="text" tag="morenigths" setplaceholder style="width: 31px; margin-right: 0; padding-left: 9px;" placeholder="输入"></div>';
                nightselect.append(opt);
                nightselect.children("div[tag=input]").children("input").bind("blur", this.nightsinputs_blur.toEventHandler(this));
                nightselect.children("div[tag=input]").children("input").bind("keyup", this.nightsinputs_keydown.toEventHandler(this));
            } else {
                if (morenights > 30) {
                    option = '<div tag="input"><input type="text" tag="morenigths" setplaceholder style="width: 31px; margin-right: 0; padding-left: 9px;" placeholder="输入"></div>';
                    nightselect.append(option);
                    nightselect.children("div[tag=input]").children("input").bind("blur", this.nightsinputs_blur.toEventHandler(this));
                    nightselect.children("div[tag=input]").children("input").bind("keyup", this.nightsinputs_keydown.toEventHandler(this));
                }
            }
        } else {
            if (morenights > 30) {
                option = '<div tag="input"><input type="text" tag="morenigths" setplaceholder style="width: 31px; margin-right: 0; padding-left: 9px;" placeholder="输入"></div>';
                nightselect.append(option);
                nightselect.children("div[tag=input]").children("input").bind("blur", this.nightsinputs_blur.toEventHandler(this));
                nightselect.children("div[tag=input]").children("input").bind("keyup", this.nightsinputs_keydown.toEventHandler(this));
            }
        }
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
    _gettimetomorrow: function(time) {
        var date = M.strtotimeSetDefaultHour(time);
        var datetomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 6, 0, 0);
        return datetomorrow;
    },
    doeditdeleteorder: function(data) {
        this.orderdata = data;
        var rid = data.rid;
        var oid = data.oid;
        this.context.e_line.hide();
        this.context.e_checkinbtn.hide();
        this.context.e_guestname.children("span").html("");
        this.context.e_guestphone.html("");
        this.context.e_orderinfo.children("span[tag=price]").html("");
        this.context.e_orderinfo.children("h2[tag=roomname]").html("");
        this.context.e_orderinfo.children("p[tag=time]").html("");
        this.context.e_orderinfo.children("p[tag=nights]").html("");
        this.context.idnuminfo.html("");
        this.context.e_remark.html("");
        this.context.e_logo.attr("class", "ico-own fl mr10");
        this.context.e_ordercell.attr("oid", oid).attr("rid", rid).attr("setid", "");
        this.context.e_checkinbtn.show();
        this.context.e_orderdetail.children(".modal-footer").children("a[tag=editorder]").show();
        this.context.e_guestphone.parent().children("a[tag=sendmsg]").hide();
        this.temporderdetail = null;
        this.context.e_orderdetail.children().find("a[tag=removeorder]").html('删除订单');
        this.context.submitlayer.show();
        M._getjson("/Book/getdeleteorderdetail", {
            "orderid": oid,
            "rid": rid,
            "op": 'getalldeleteorder'
        },
        this.odetail_finished.toEventHandler(this));
    },
    doeditorder: function(data, innid) {
        if (!M.isEmpty(innid)) {
            this.innid = innid;
        }
        this.orderdata = data;
        var rid = data.rid;
        var oid = data.oid;
        var datetomorrow = this._gettimetomorrow(data.checkindate);
        var now = this.getdatetime();
        if (now >= datetomorrow) {
            this.context.e_line.hide();
            this.context.e_checkinbtn.hide();
        } else {
            this.context.e_line.show();
            this.context.e_checkinbtn.show();
        }
        this.context.e_guestname.children("span").html("");
        this.context.e_guestphone.html("");
        this.context.e_orderinfo.children("span[tag=price]").html("");
        this.context.e_orderinfo.children("h2[tag=roomname]").html("");
        this.context.e_orderinfo.children("p[tag=time]").html("");
        this.context.e_orderinfo.children("p[tag=nights]").html("");
        this.context.idnuminfo.html("");
        this.context.e_remark.html("");
        this.context.e_logo.attr("class", "ico-own fl mr10");
        this.context.e_ordercell.attr("oid", oid).attr("rid", rid).attr("setid", "");
        this.context.e_checkinbtn.show();
        this.context.e_orderdetail.children(".modal-footer").children("a[tag=editorder]").show();
        this.context.e_guestphone.parent().children("a[tag=sendmsg]").hide();
        this.temporderdetail = null;
        this.context.e_orderdetail.children().find("a[tag=removeorder]").html('删除订单');
        this.context.submitlayer.show();
        this.roomtypepricelist = {};
        M._getjson("/Book/orderdetail", {
            "orderid": oid,
            "rid": rid,
            "innid": innid
        },
        this.odetail_finished.toEventHandler(this));
    },
    _checkinable: function(date) {
        var now = this.getdatetime();
        var cancheckin = true;
        var date_tomorrow6 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 6, 0, 0);
        if (date_tomorrow6 < now) {
            var type = this.context.orderform.children("div[tag=head]").children("h4").attr("type");
            if (type == 'bulu') {
                cancheckin = false;
            }
        }
        var date_8hour = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 6, 0, 0);
        if (now < date_8hour) {
            cancheckin = false;
        }
        return cancheckin;
    },
    _resetorderdiscount: function(orderlist) {
        var sum_orgprice = 0;
        var sum = 0;
        for (i in orderlist) {
            var item = orderlist[i];
            var price = item.totalprice;
            var orgtotalprice = item.orgprice;
            sum += parseInt(price);
            sum_orgprice += parseInt(orgtotalprice)
        }
        var new_discount = Math.round(parseInt(sum * 100 / sum_orgprice)) / 10;
        return new_discount;
    },
    odetail_finished: function(d) {
        this.context.submitlayer.hide();
        this.context.orderform.children("div[tag=head]").children("h4").attr("type", "");
        if (d.status == "success") {
            if (!M.isEmpty(d.orderchange) && d.orderchange == 1) {
                d.req.setid = d.d.ordersetid;
                this.checkincallback.call(this, d);
                d.req.setid = d.d.checkinsetid;
                this.checkindetail_finished(d);
                return;
            }
            var o = d.data;
            if (!M.isEmpty(d.bookallroom)) {
                o.bookallroom = d.bookallroom;
                this.bookallroom = d.bookallroom;
            }
            this.tempcheckdetail = {};
            this.temporderdetail = o;
            var h_discount = o.orderset.discount;
            if (h_discount > 0) {
                o.orderset.discount = h_discount / 10;
                this.temporderdetail = o;
            }
            var orderset = o.orderset;
            var orders = orderset.orders;
            var remindlist = o.remindlist;
            var op = d.req.op;
            if (!M.isEmpty(op) && op == 'getalldeleteorder') {
                for (var i = 0; i < orders.length; i++) {
                    if (orders[i].status == 1) {
                        M.confirmmessage('该订单为关联订单，暂不能查看和修改，请选择其它的子订单尝试。');
                        return;
                    }
                }
            }
            this.context.e_ordercell.attr("rid", o.roomid);
            this.context.e_guestname.children("span").html(o.guestname);
            var guestlist = o.guestlist;
            if (guestlist.length > 1) {
                this.context.e_guestname.children("a").show().html(guestlist.length);
            } else {
                this.context.e_guestname.children("a").hide()
            }
            var phonedesc = o.phone;
            if (!M.isEmpty(o.cityname)) {
                phonedesc += '<tt>(' + o.cityname + ')</tt>';
            }
            if (!M.isEmpty(o.idnum)) {
                this.context.idnuminfo.html(this.typename[o.idtype] + '：' + o.idnum);
            }
            if (M.isEmpty(phonedesc) || (!M.isEmpty(d.orderstatus) && d.orderstatus == 'delete')) {
                this.context.e_guestphone.parent().children("a[tag=sendmsg]").hide();
            } else {
                this.context.e_guestphone.parent().children("a[tag=sendmsg]").show();
            }
            this.context.e_guestphone.html(phonedesc);
            this.multiguest = o.guestlist;
            if (!M.isEmpty(this.multiguest[0]['levelname']) && this.plugin.memberstatus == 1) {
                this.context.e_guestname.children("i[tag=memberremark]").attr("title", this.multiguest[0]['levelname']).show();
            } else {
                this.context.e_guestname.children("i[tag=memberremark]").hide();
            }
            var pricedesc = "￥" + o.totalprice;
            var account = o.account;
            var paddingstyle = '';
            if ((!M.isEmpty(account.cashiertotal) && account.cashiertotal > 0) || account.payedtotal > 0) {
                paddingstyle = 'style="padding-right:21px;"';
            }
            if (o.paystatus == 3) {
                pricedesc += '<b ' + paddingstyle + '>已担保</b>';
            }
            pricedesc += '<b>已收款¥' + account.payedtotal + '<i class="ico-info" style="display:none" tag="account" id="info-price"></i></b>';
            if (!M.isEmpty(account.deposit)) {
                pricedesc += '<b ' + paddingstyle + '>押金 ¥' + account.deposit + '</b>';
            }
            if (!M.isEmpty(account.consumetotal) && account.consumetotal > 0) {
                pricedesc += '<b >其它消费 ¥' + account.consumetotal + '<i tag="consume" style="display:none" class="ico-info" style="" title=""></i></b>';
            }
            this.context.e_orderinfo.children("span[tag=price]").html(pricedesc);
            this.memberstatus = 0;
            if (orderset.discount > 0) {
                orderset.discount = this._resetorderdiscount(orders);
                this.context.e_orderinfo.children("span[tag=price]").append($.tmpl(this.tpl_i_discount, orderset));
                this.memberstatus = 1;
                this.temporderdetail.orderset.discount = orderset.discount;
            }
            if (!M.isEmpty(account.consume)) {
                var consumelist = account.consume;
                var consumemsg = '';
                for (var i = 0; i < consumelist.length; i++) {
                    consumemsg += '<p>' + consumelist[i].title + '<p>';
                }
                var tpl_consume = this.context.e_orderinfo.children("span[tag=price]").children("b").children("i[tag=consume]");
                tpl_consume.show().attr("title", '').tooltip({
                    position: {
                        my: "left+15 top+20",
                        at: "left bottom"
                    },
                    track: 1,
                    content: consumemsg,
                    show: {
                        duration: 100
                    }
                });
            }
            var tipmsg = '';
            if (!M.isEmpty(account.appendmoney)) {
                var appendmoney = account.appendmoney;
                for (var i = 0; i < appendmoney.length; i++) {
                    if (appendmoney[i].amount != 0) {
                        var paystatusStr = '';
                        if ('shouyintai' == appendmoney[i].paytypecode) {
                            if ('1' == appendmoney[i].paystatus) {
                                paystatusStr = ' <span class="green">[已付款]</span>';
                            } else if ('2' == appendmoney[i].paystatus) {
                                paystatusStr = ' <span>[已关闭]</span>';
                            } else {
                                paystatusStr = '<span class="red">[待付款]</span><p>';
                            }
                        }
                        tipmsg += '<p>' + appendmoney[i].msg + paystatusStr + '<p>';
                    }
                }
            }
            if (tip != '') {
                var tip = this.context.e_orderinfo.children("span[tag=price]").children("b").children("i[tag=account]");
                tip.show().attr("title", '').tooltip({
                    position: {
                        my: "left+15 top+20",
                        at: "left bottom"
                    },
                    track: 1,
                    content: tipmsg,
                    show: {
                        duration: 100
                    }
                });
            }
            this.context.e_orderinfo.children("h2[tag=roomname]").html('<span class="ico-roomname16"></span>' + o.roomname + "(" + o.roomtypename + ")");
            var date = M.strtotimeSetDefaultHour(o.arrivedate);
            var datestr = this.timeformat(date, "m月d日");
            var arrtime = M.isEmpty(o.arrivetime) ? "": o.arrivetime;
            this.context.e_orderinfo.children("p[tag=time]").html('<span class="ico-date16"></span>' + datestr + "&nbsp;" + arrtime + "入住");
            var enddatestr = this.timeformat(M.strtotime(o.enddate), "m月d日");
            this.context.e_orderinfo.children("p[tag=nights]").html('<span class="ico-night16"></span>' + enddatestr + "退房，住" + o.nights + "晚");
            if (!M.isEmpty(o.orderguidattr) && !M.isEmpty(o.orderguidattr.attnid) && o.orderguidattr.attnid != 0) {
                this.context.e_orderinfo.children("p[tag=attn]").show().html('<span class="ico-achievement16"></span>业绩归属：' + o.orderguidattr.attnname);
            } else {
                this.context.e_orderinfo.children("p[tag=attn]").hide();
            }
            this._showremind(this.context.e_needcar, o, remindlist, 'ordered');
            if (this.userauth.logvisit == 1) {
                this.context.e_orderdetail.children().children("a[tag=showlog]").show();
            } else {
                this.context.e_orderdetail.children().children("a[tag=showlog]").hide();
            }
            var remark2 = '';
            if (!M.isEmpty(o.remark2)) {
                var pos = o.remark2.indexOf("订单总额");
                var rep = "";
                if (pos < 0) {
                    rep += "订单总额￥" + orderset.totalprice + "，";
                }
                remark2 = '<p class="pl20"><span class="ico-related16 minus20"></span>' + o.remark2.replace("\n", rep).replace(/‖/g, '<br/>').replace(':', ':<br/>') + "</p>";
            }
            this.context.e_remark.html(remark2);
            var remark = M.isEmpty(o.remark) ? "": '<p class="pl20"><span class="ico-remark16 minus20"></span>备注：' + o.remark + "</p>";
            this.context.e_remark.parent().children("li[tag=remark2]").html(remark);
            var cancheckin = false;
            if (!M.isEmpty(orderset)) {
                for (var i = 0; i < orders.length; i++) {
                    var order = orders[i];
                    var date = order.arrivedate;
                    var datetime = M.strtotime(date);
                    var cancheckin = this._checkinable(datetime);
                    if (cancheckin) {
                        cancheckin = true;
                        break;
                    }
                }
            }
            var target = this.context.e_orderdetail.children("div[tag=operatelist]");
            if (!M.isEmpty(d.orderstatus) && d.orderstatus == 'delete') {
                target.children("a[tag=removeorder]").hide();
                target.children("a[tag=editorder]").hide();
                target.children("a[tag=editdeleteorder]").show();
                target.children("span[tag=hasdelete]").show();
                this.context.e_checkinbtn.hide();
            } else {
                target.children("a[tag=removeorder]").show();
                target.children("a[tag=editorder]").show();
                target.children("a[tag=editdeleteorder]").hide();
                target.children("span[tag=hasdelete]").hide();
                if (cancheckin && this.userauth.checkinandcheckout == 1) {
                    this.context.e_checkinbtn.show();
                } else {
                    this.context.e_checkinbtn.hide();
                }
            }
            if (o.bookallroom == 1) {
                target.children('a').attr('bookallroom', 1);
            } else {
                target.children('a').attr('bookallroom', 0);
            }
            if (M.isEmpty(o.roomlocklist)) {
                this.context.e_orderdetail.children().children("a[tag=setpassword]").hide();
            } else {
                this.context.e_orderdetail.children().children("a[tag=setpassword]").css('right', '55px').show();
            }
            this.context.e_ordercell.attr("setid", o.ordersetid);
            var channel = M.isEmpty(o.channelcode) ? "": o.channelcode;
            var channelico = this.channelico[channel];
            if (M.isEmpty(channelico)) {
                this.context.e_logo.attr("class", "ico-custom fl mr10").html(o.channelname);
            } else {
                this.context.e_logo.attr("class", channelico + " fl mr10").html("");
            }
            this.context.e_orderdetail.attr('nights', o.nights);
            target.children("a[tag=editorder]").hide();
            target.children("a[tag=removeorder]").hide();
            target.children("a[tag=editdeleteorder]").hide();
            if (d.orderstatus == 'delete') {
                if (this.userauth.orderupdate == 1) {
                    target.children("a[tag=editdeleteorder]").show();
                }
            } else {
                if (this.userauth.orderupdate == 1) {
                    target.children("a[tag=editorder]").show();
                }
                if (this.userauth.orderdelete == 1) {
                    target.children("a[tag=removeorder]").show();
                }
            }
            M.Popup(this.context.e_orderdetail, {
                "hideclass": "bootbox modal view fade",
                "showclass": "bootbox modal view fade in",
                "dragable": true
            },
            function() {
                this.context.e_idnum.focus();
            }.toEventHandler(this));
        } else {
            if (!M.isEmpty(d.msg)) {
                M.error(d.msg);
            } else {
                M.error("请求错误，请刷新页面后重试");
            }
        }
    },
    _showremind: function(target, order, list, orderstatus) {
        var html = '';
        if (M.isEmpty(this.plugin.needcar) || this.plugin.needcar != 1) {
            return;
        }
        if (M.isEmpty(list) || M.isEmpty(list.length)) {
            if (orderstatus == 'ordered' && order.needcar == 1) {
                html = '<span class="ico-car16"></span>需要车接';
            }
            if (orderstatus == 'checkined' && order.needcar2 == 1) {
                html = '<span class="ico-car16"></span>需要车送';
            }
            target.html(html);
        } else {
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                if (item.type == 1) {
                    if (orderstatus == 'ordered') {
                        html += '<p><span class="ico-car16"></span>需要车接';
                        if (item['type'] == 1) {
                            html += '<span class="green" tag="r' + item.id + '" style="display:none">(' + item.date + '提醒)</span>';
                        }
                        html += '</p>';
                    } else {
                        if (item['type'] == 1 && (!M.isEmpty(item['date']) || !M.isEmpty(item.remark))) {
                            html += '<p><span class="ico-car16" ></span>需要车接<span class="green" style="display:none" tag="r' + item.id + '">(' + item.date + '提醒)</span></p>';
                        }
                    }
                }
                if (item.type == 2) {
                    if (orderstatus == 'ordered') {
                        if (item['type'] == 2 && (!M.isEmpty(item['date']) || !M.isEmpty(item.remark))) {
                            html += '<p><span class="ico-car16" ></span>需要车送<span class="green" tag="r' + item.id + '" style="display:none">(' + item.date + '提醒)</span></p>';
                        }
                    } else {
                        html += '<p><span class="ico-car16"></span>需要车送';
                        if (item['type'] == 2) {
                            html += '<span class="green" tag="r' + item.id + '" style="display:none">(' + item.date + '提醒)</span>';
                        }
                        html += '</p>';
                    }
                }
                if (item['type'] == 3) {
                    html += '<p title="' + item.remark + '"><span class="ico-remind"></span>普通提醒<span class="green" tag="r' + item.id + '" style="display:none">(' + item.date + '提醒)</span></p>';
                }
            }
            target.html(html);
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var tpl = target.find("span[tag=r" + item.id + "]");
                if (!M.isEmpty(item.date)) {
                    tpl.show();
                }
                if (!M.isEmpty(item.remark)) {
                    tpl.parents('p').attr("title", "").tooltip({
                        position: {
                            my: "left+15 top+20",
                            at: "left bottom"
                        },
                        track: 1,
                        content: '提醒内容：' + item.remark,
                        show: {
                            delay: 100
                        },
                        hide: false
                    });
                }
            }
        }
    },
    delorder_action: function(ordertype, ownedprice) {
        if (ordertype == 'ordered') {
            this.removeorder(ownedprice);
        } else {
            this.checkindelete(ownedprice);
        }
    },
    beforeremoveorderallroom: function(ordertype, order) {
        this.context.delhidden.attr('ordertype', ordertype);
        if (ordertype == 'ordered' || 1 == 1) {
            var o = order;
            var temp = ordertype == 'ordered' ? order.orderset: order.checkinset;
            var orderfrom = temp.orderfrom;
            var account = ordertype == 'ordered' ? this.temporderdetail.account: this.tempcheckdetail.account;
            var guestlist = ordertype == 'ordered' ? this.temporderdetail.guestlist: this.tempcheckdetail.guestlist;
            var orderstatus = ordertype == 'ordered' ? 'order': 'checkin';
            this.context.delform.find("i[tag=memberremark]").hide();
            var arrivetimelate = temp.arrivetimelate;
            if (M.isEmpty(arrivetimelate)) {
                arrivetimelate = order.arrivetimelate;
            }
            var header = this.context.delform.children('div[tag=header]');
            var cntlist = this.context.delform.children('.modal-body').find('.cntlist');
            var descfield = cntlist.children('li[tag=desc]');
            var incomefield = cntlist.children('li[tag=income]').show();
            incomefield.children("div[tag=roomrate]").children("input[name=amount]").val('');
            incomefield.children("div[tag=deposit]").children("input[name=deposit]").val('');
            var vouchtip_tpl = cntlist.children('li[tag=vouchtip]').hide();
            var vouch_tpl = cntlist.children('li[tag=vouch]').hide();
            vouch_tpl.children("div").children("input[name=ownprice]").val("");
            vouch_tpl.children("div").children("input[name=ownprice]").attr('placeholder', '金额');
            var remarkfield = cntlist.children('li[tag=remark]');
            var channellogo = header.children('div[tag=logo]');
            var channel = M.isEmpty(temp.channelcode) ? "": temp.channelcode;
            var channelico = this.channelico[channel];
            if (M.isEmpty(channelico)) {
                channellogo.attr("class", "ico-custom fl mr10").html(temp.channelname);
            } else {
                channellogo.attr("class", channelico + " fl mr10").html("");
            }
            var info = temp.guestname;
            var guest_tpl = this.context.delform.children().find("h3[tag=userinfo]");
            guest_tpl.children("b[tag=guestname]").children("span").html(guestlist[0].guestname);
            guest_tpl.children("span[tag=phone]").html(guestlist[0].phone);
            guest_tpl.children("p[tag=idnum]").html(guestlist[0].idnum);
            guest_tpl.children("b[tag=guestname]").children("a").attr("orderstatus", orderstatus).html(guestlist.length).hide();
            if (guestlist.length > 1) {
                guest_tpl.children("b[tag=guestname]").children("a").html(guestlist.length).show();
            }
            var appendmoney = account.payedtotal;
            if (ordertype == 'ordered' && appendmoney == 0 && temp.paystatus == 3) {
                incomefield.hide();
                vouch_tpl.show();
                vouchtip_tpl.show();
                this.context.delform.attr("ischeckout", 1);
                var fromdate = ordertype == 'ordered' ? o.arrivedate: o.checkindate;
                var t = M.strtotime(fromdate);
                var ft = this.timeformat(t, 'm/d');
                var desc = "<p>" + o.roomname + "，" + ft + "入住，住" + o.nights + "晚，订单总额<span class='t16 red'>¥" + temp.totalprice + "</span></p>";
                descfield.html(desc);
                var payedprice = ordertype == 'ordered' ? 0 : o.payedprice;
                incomefield.find('input').val("");
            } else {
                this.context.delform.attr("ischeckout", 1);
                var payalltotal = parseInt(account.payedtotal) + parseInt(account.deposit);
                var desc = "该订单已收款<span class='t16 red'>¥" + payalltotal + "</span>";
                if (!M.isEmpty(account.deposit)) {
                    desc += '<span class="t14">（含￥' + account.deposit + '押金）</span>';
                }
                desc += "，删除订单可能会导致账目不准确。<br />请核算删除该订单所需退款。";
                descfield.html(desc);
                if (account.payedtotal == 0) {
                    incomefield.children("div[tag=roomrate]").children("input").val(0).attr("t", "needreturn");
                } else {
                    incomefield.children("div[tag=roomrate]").children("input").val("").attr("placeholder", "金额");
                    incomefield.children("div[tag=roomrate]").children("input").val("").attr("t", "needreturn");
                }
                if (account.deposit == 0) {
                    incomefield.children("div[tag=deposit]").children("input").val(0);
                } else {
                    incomefield.children("div[tag=deposit]").children("input").val("").attr("placeholder", "金额");
                    incomefield.children("div[tag=deposit]").children("input").val("");
                }
            }
            var channel_tpl = incomefield.children("div[tag=roomrate]").children("div[t=channellist]");
            channel_tpl.attr("2");
            M.DropdownList(channel_tpl, null, {});
            var tpl = vouch_tpl.children("div").children("div[t=vouch]").attr("value", "alipay");
            this.droplist.del.roomrate = M.DropdownList(tpl, this._handledelformpaytype.toEventHandler(this), {});
            var roomratepaytype = "alipay";
            if (order.type == "checkedin") {
                roomratepaytype = "cash";
            }
            var tpl = incomefield.children("div[tag=roomrate]").children("div[t=paytype]").attr("value", roomratepaytype);
            this.droplist.del.roomrate = M.DropdownList(tpl, null, {});
            var tpl = incomefield.children("div[tag=deposit]").children("div[t=paytype]").attr("value", "cash");
            this.droplist.del.deposit = M.DropdownList(tpl, null, {});
            if (!M.isEmpty(temp['orders']['0']['remark'])) {
                remarkfield.find('textarea').val(temp['orders']['0']['remark']);
            } else {
                M.emptyVal(remarkfield.find('textarea'));
            }
        }
        this.context.delform.attr("bookallroom", 1);
        M.CloseLast();
        M.Popup(this.context.delform, {
            "hideclass": "modal view fade",
            "showclass": "modal view fade in"
        });
    },
    beforeremoveorder: function(ordertype, order) {
        this.context.delhidden.attr('ordertype', ordertype);
        if (ordertype == 'ordered' || 1 == 1) {
            var o = order;
            var temp = ordertype == 'ordered' ? order.orderset: order.checkinset;
            var orderfrom = temp.orderfrom;
            var account = ordertype == 'ordered' ? this.temporderdetail.account: this.tempcheckdetail.account;
            var guestlist = ordertype == 'ordered' ? this.temporderdetail.guestlist: this.tempcheckdetail.guestlist;
            var orderstatus = ordertype == 'ordered' ? 'order': 'checkin';
            var arrivetimelate = temp.arrivetimelate;
            if (M.isEmpty(arrivetimelate)) {
                arrivetimelate = order.arrivetimelate;
            }
            var header = this.context.delform.children('div[tag=header]');
            var cntlist = this.context.delform.children('.modal-body').find('.cntlist');
            var descfield = cntlist.children('li[tag=desc]');
            var incomefield = cntlist.children('li[tag=income]').show();
            incomefield.children("div[tag=roomrate]").children("input[name=amount]").val('');
            incomefield.children("div[tag=deposit]").children("input[name=deposit]").val('');
            var vouchtip_tpl = cntlist.children('li[tag=vouchtip]').hide();
            var vouch_tpl = cntlist.children('li[tag=vouch]').hide();
            vouch_tpl.children("div").children("input[name=ownprice]").val("");
            vouch_tpl.children("div").children("input[name=ownprice]").attr('placeholder', '金额');
            var remarkfield = cntlist.children('li[tag=remark]');
            var channellogo = header.children('div[tag=logo]');
            var channel = M.isEmpty(temp.channelcode) ? "": temp.channelcode;
            var channelico = this.channelico[channel];
            if (M.isEmpty(channelico)) {
                channellogo.attr("class", "ico-custom fl mr10").html(temp.channelname);
            } else {
                channellogo.attr("class", channelico + " fl mr10").html("");
            }
            var info = temp.guestname;
            var guest_tpl = this.context.delform.children().find("h3[tag=userinfo]");
            guest_tpl.children("b[tag=guestname]").children("span").html(guestlist[0].guestname);
            guest_tpl.children("span[tag=phone]").html(guestlist[0].phone);
            guest_tpl.children("p[tag=idnum]").html(guestlist[0].idnum);
            guest_tpl.children("b[tag=guestname]").children("a").attr("orderstatus", orderstatus).html(guestlist.length).hide();
            if (guestlist.length > 1) {
                guest_tpl.children("b[tag=guestname]").children("a").html(guestlist.length).show();
            }
            var appendmoney = account.payedtotal;
            if (ordertype == 'ordered' && appendmoney == 0 && temp.paystatus == 3) {
                incomefield.hide();
                vouch_tpl.show();
                vouchtip_tpl.show();
                this.context.delform.attr("ischeckout", 1);
                var fromdate = ordertype == 'ordered' ? o.arrivedate: o.checkindate;
                var t = M.strtotime(fromdate);
                var ft = this.timeformat(t, 'm/d');
                var desc = "<p>" + o.roomname + "，" + ft + "入住，住" + o.nights + "晚，订单总额<span class='t16 red'>¥" + order.totalprice + "</span></p>";
                descfield.html(desc);
                var payedprice = ordertype == 'ordered' ? 0 : o.payedprice;
                incomefield.find('input').val("");
            } else {
                if (temp.orders.length > 1) {
                    var payedtotal = parseInt(account.payedtotal) + parseInt(account.deposit);
                    var desc = "该订单含有多个子订单，已收款<span class='t16 red'>¥" + payedtotal + "</span>";
                    if (!M.isEmpty(account.deposit)) {
                        desc += '<span class="t14">（含￥' + account.deposit + '押金）</span>，删除该子订单后将在最后处理已收款。';
                    } else {
                        desc += "，删除该子订单后将在最后处理已收款。";
                    }
                    this.context.delform.attr("ischeckout", 0);
                    descfield.html(desc);
                    incomefield.hide();
                } else {
                    this.context.delform.attr("ischeckout", 1);
                    var payalltotal = parseInt(account.payedtotal) + parseInt(account.deposit);
                    var desc = "该订单已收款<span class='t16 red'>¥" + payalltotal + "</span>";
                    if (!M.isEmpty(account.deposit)) {
                        desc += '<span class="t14">（含￥' + account.deposit + '押金）</span>';
                    }
                    desc += "，删除订单可能会导致账目不准确。<br />请核算删除该订单所需退款。";
                    descfield.html(desc);
                    if (account.payedtotal == 0) {
                        incomefield.children("div[tag=roomrate]").children("input").val(0).attr("t", "needreturn");
                    } else {
                        incomefield.children("div[tag=roomrate]").children("input").val("").attr("placeholder", "金额");
                        incomefield.children("div[tag=roomrate]").children("input").val("").attr("t", "needreturn");
                    }
                    if (account.deposit == 0) {
                        incomefield.children("div[tag=deposit]").children("input").val(0);
                    } else {
                        incomefield.children("div[tag=deposit]").children("input").val("").attr("placeholder", "金额");
                        incomefield.children("div[tag=deposit]").children("input").val("");
                    }
                }
            }
            if (!M.isEmpty(guestlist[0]['levelname']) && this.plugin.memberstatus == 1) {
                guest_tpl.children("b[tag=guestname]").children("i[tag=memberremark]").show();
            } else {
                guest_tpl.children("b[tag=guestname]").children("i[tag=memberremark]").hide();
            }
            var channel_tpl = incomefield.children("div[tag=roomrate]").children("div[t=channellist]");
            channel_tpl.attr("2");
            M.DropdownList(channel_tpl, null, {});
            var tpl = vouch_tpl.children("div").children("div[t=vouch]").attr("value", "alipay");
            this.droplist.del.roomrate = M.DropdownList(tpl, this._handledelformpaytype.toEventHandler(this), {});
            var roomratepaytype = "alipay";
            if (order.type == "checkedin") {
                roomratepaytype = "cash";
            }
            var tpl = incomefield.children("div[tag=roomrate]").children("div[t=paytype]").attr("value", roomratepaytype);
            this.droplist.del.roomrate = M.DropdownList(tpl, null, {});
            var tpl = incomefield.children("div[tag=deposit]").children("div[t=paytype]").attr("value", "cash");
            this.droplist.del.deposit = M.DropdownList(tpl, null, {});
            if (!M.isEmpty(temp['orders']['0']['remark'])) {
                remarkfield.find('textarea').val(temp['orders']['0']['remark']);
            } else {
                M.emptyVal(remarkfield.find('textarea'));
            }
        }
        M.CloseLast();
        this.context.delform.attr("bookallroom", 0);
        M.Popup(this.context.delform, {
            "hideclass": "modal view fade",
            "showclass": "modal view fade in"
        });
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
    removeorder: function(ownedprice) {
        var temp = this.temporderdetail.orderset;
        var orderfrom = temp.orderfrom;
        var arrivetimelate = temp.arrivetimelate;
        var account = this.temporderdetail.account;
        if (account.unpaid > 0) {
            M.error("订单未支付，不能删除");
            return false;
        }
        if (M.isEmpty(arrivetimelate)) {
            arrivetimelate = this.temporderdetail.arrivetimelate;
        }
        var bookallroom = this.context.delform.attr("bookallroom");
        if (temp.orders.length <= 1 || bookallroom == 1) {
            if (temp.paystatus != 3) {
                var paymoney = this.context.delform.children().find("input[name=amount]").val();
                var deposit = this.context.delform.children().find("input[name=deposit]").val();
                if (M.isEmpty(paymoney)) {
                    alert("请输入房费");
                    return;
                }
                if (M.isEmpty(deposit) && !M.isEmpty(this.plugin.deposit)) {
                    alert("请输入押金");
                    return;
                }
            } else {
                if (account.payedtotal != 0) {
                    var paymoney = this.context.delform.children().find("input[name=amount]").val();
                    var deposit = this.context.delform.children().find("input[name=deposit]").val();
                    if (M.isEmpty(paymoney)) {
                        alert("请输入房费");
                        return;
                    }
                    if (M.isEmpty(deposit) && !M.isEmpty(this.plugin.deposit)) {
                        alert("请输入押金");
                        return;
                    }
                } else {
                    var ownprice = this.context.delform.children().find("input[name=ownprice]").val();
                    if (M.isEmpty(ownprice)) {
                        alert('请输入所得收入');
                        return;
                    }
                }
            }
        }
        if (temp.orders.length > 1 && temp.paystatus == 3 && this.temporderdetail.account.payedtotal == 0) {
            var ownprice = this.context.delform.children().find("input[name=ownprice]").val();
            if (M.isEmpty(ownprice)) {
                alert('请输入所得收入');
                return;
            }
        }
        var res = confirm("确认删除吗");
        if (!res) {
            return;
        }
        var remark = M.getVal(this.context.delform.children('.modal-body').find('textarea'));
        var oid = this.context.e_ordercell.attr("oid");
        if (M.isEmpty(oid)) {
            return;
        }
        oid = parseInt(oid);
        var data = {
            "op": "delorder",
            "orderid": oid,
            'remark': remark
        };
        var paymoney_tpl = this.context.delform.children().find("input[name=amount]");
        var paymoney = paymoney_tpl.val();
        var rm_paytype = this.droplist.del.roomrate._getval();
        var rm_paytypename = this.context.delform.children().find("div[type=roomrate]").children("span").text();
        data.rm_paytypename = rm_paytypename;
        paymoney = M.isEmpty(paymoney) ? 0 : paymoney;
        if (isNaN(paymoney)) {
            alert('房费金额输入格式不正确');
            return;
        }
        var channel = this.context.delform.find("div[t=channellist]").children("span").attr("value");
        if (channel == '2') {
            data.needappend = 2;
            data.returnmoney = paymoney;
        } else {
            data.needappend = 1;
            data.appendmoney = paymoney;
        }
        data.rm_paytype = rm_paytype;
        var deposit_tpl = this.context.delform.children().find("input[name=deposit]");
        var dt_paytypename = this.context.delform.children().find("div[tag=deposit]").children("div").children("span").text();
        data.dt_paytypename = dt_paytypename;
        var dt_paytype = this.droplist.del.deposit._getval();
        var deposit = deposit_tpl.val();
        deposit = M.isEmpty(deposit) ? 0 : deposit;
        if (M.isEmpty(this.plugin.deposit)) {
            deposit = 0;
            dt_paytype = rm_paytype;
        } else {
            if (isNaN(deposit)) {
                alert('押金金额输入格式不正确');
                return;
            }
        }
        data.deposit = deposit;
        data.dt_paytype = dt_paytype;
        var vouch_tpl = this.context.delform.children().find("div[t=vouch]");
        var vouch_paytype = vouch_tpl.children("span").attr("value");
        var vouch_paytypename = vouch_tpl.children("span").text();
        var vouch_amount = this.context.delform.children().find("input[name=ownprice]").val();
        data.vouch_paytype = vouch_paytype data.vouch_amount = vouch_amount;
        data.vouch_paytypename = vouch_paytypename;
        var btn = this.context.e_orderdetail.children(".modal-footer").children("a[tag=removeorder]");
        data.ischeckout = this.context.delform.attr("ischeckout");
        if (!this.req_before(btn)) {
            return;
        }
        if (bookallroom != 1) {
            M._getjson("/Book/deleteorder", data, this.delorder_finished.toEventHandler(this));
        } else {
            M._getjson("/Book/deletegroupbookorder", data, this.delgroupbookorder_finished.toEventHandler(this));
        }
    },
    _getcoordedatabyorderid: function(orderid) {
        var target = this.context.pickerarea.find("div[oid=" + orderid + "]");
        var cols = target.parents("td").attr("idx");
        var row = target.parents("tr").attr("i");
        return {
            "row": row,
            "cols": cols
        }
    },
    delgroupbookorder_finished: function(d) {
        if (d.status == "success") {
            d.action = "delete"d.delfrom = 'groupbookorder'this.ordercallback.call(this, d);
            var olddata = d.olddata;
            this._closepopup();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        this.temporderdetail = null;
        var btn = this.context.e_orderdetail.children(".modal-footer").children("a[tag=removeorder]");
        this.req_end(btn);
    },
    delorder_finished: function(d) {
        if (d.status == "success") {
            d.action = "delete"this.ordercallback.call(this, d);
            var olddata = d.olddata;
            this._closepopup();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        this.temporderdetail = null;
        var btn = this.context.e_orderdetail.children(".modal-footer").children("a[tag=removeorder]");
        this.req_end(btn);
    },
    _clearitembycoordinate: function(col, row) {
        var night = this.context.pickerarea.children("table").children("tbody").children("tr[i=" + row + "]").children("td[idx=" + col + "]").attr("n");
        this.transform.clearitem(col, row, night);
    },
    _getorderformdata: function() {
        var hiddencell = this.context.ordercell;
        var roomnum = 1;
        var guestname = M.getVal(this.context.o_guestname);
        var phone = M.getVal(this.context.o_phone);
        var channel = M.getVal(this.context.o_channel);
        var channelname = this.context.o_channel.children("div").children("a[class=on]").text();
        var remark = this.NoUndefined(M.getVal(this.context.o_remark));
        var idnum = "";
        var paystatus = this.context.o_paystatus.is(':checked');
        var deposit = M.getVal(this.context.o_deposit);
        var needcar = this.context.o_needcar.attr("checked");
        needcar = needcar == "checked" ? 1 : 0;
        var needcar2 = this.context.o_needcar2.attr("checked");
        needcar2 = needcar2 == "checked" ? 1 : 0;
        var idnum = M.getVal(this.context.idnum);
        var idtype = M.getVal(this.context.idtype);
        var roomcost = M.getVal(this.context.roomcost);
        var depositcost = M.getVal(this.context.depositcost);
        var roompaytype = this.droplist.order.paymentsdroplist._getval();
        var depositpaytype = this.droplist.order.depositBoxdroplist._getval();
        var rmpayname = this.context.roompaytype.text();
        var dtpayname = this.context.depositpaytype.text();
        var cols = hiddencell.attr("col");
        var rows = hiddencell.attr("row");
        if (paystatus) {
            paystatus = 3;
        } else {
            paystatus = 4;
        }
        var orderdata = {
            "guestname": guestname,
            "phone": phone,
            "remark": remark,
            "channel": channel,
            "channelname": channelname,
            "rows": rows,
            "cols": cols,
            "idnum": idnum,
            "paystatus": paystatus,
            "deposit": deposit,
            "needcar": needcar,
            "needcar2": needcar2,
            "idnum": idnum,
            "idtype": idtype,
            "appendmoney": roomcost,
            "rm_paytype": roompaytype,
            "rm_payname": rmpayname,
            "deposit": depositcost,
            "dt_paytype": depositpaytype,
            "dt_payname": dtpayname
        };
        var colorfield = this.context.orderformbody.children("li[tag=ordercolor]");
        var style = colorfield.children("span[ison=1]").attr("val");
        if (M.isEmpty(style)) {
            orderdata["style"] = hiddencell.attr("color");
        } else {
            orderdata["style"] = style;
        }
        var orderroomlist = this.context.orderformbody.children("li[tag=orderroomlist]");
        var i = 0;
        var valid = true;
        var totalprice = 0;
        orderroomlist.children("div[tag=order]").each(function() {
            i++;
            var roomfield = $(this).children("div[id=selectRoom]");
            var roomid = roomfield.find("a[class=on]").parent().parent().attr("roomid");
            var roomname = roomfield.find("a[class=on]").text().trim();
            var checkindate = this.context._daydroplist;
            var nights = $(this).children("div[id=selectNights]").find("a[class=on]").parent().attr("value");
            var price = $(this).children("input[type=text][tag=price]").val();
            var oid = $(this).attr("oid");
            if (M.isEmpty(price)) {
                alert("价格不能为空");
                valid = false;
                return;
            }
            if (isNaN(price)) {
                alert("价格格式不正确");
                valid = false;
                return;
            }
            price = parseInt(price);
            totalprice += price;
            orderdata["roomid" + i] = roomid;
            orderdata["roomname" + i] = roomname;
            orderdata["nights" + i] = nights;
            orderdata["price" + i] = price;
            orderdata["checkindate" + i] = checkindate;
            orderdata["oid" + i] = oid;
        });
        orderdata["totalprice"] = totalprice;
        orderdata["orderlength"] = i;
        orderdata["valid"] = valid;
        return orderdata;
    },
    _getorderform: function() {
        var hiddencell = this.context.ordercell;
        var roomnum = 1;
        var tpl_channel = this.context.orderformbody.children("li[tag=channel]").children("div").children("span");
        var channel = tpl_channel.attr("value");
        var channelname = tpl_channel.text();
        var remark = this.NoUndefined(M.getVal(this.context.o_remark));
        var idnum = "";
        var paystatus = this.context.o_paystatus.is(':checked');
        var deposit = M.getVal(this.context.o_deposit);
        var needcar = this.context.o_needcar.attr("checked");
        needcar = (needcar == "checked" || needcar == true) ? 1 : 0;
        var needcar2 = this.context.o_needcar2.attr("checked");
        needcar2 = (needcar2 == "checked" || needcar2 == true) ? 1 : 0;
        var paytype = this.context.orderformbody.children("li[tag=paytype]");
        var roomratetpl = this.context.orderformbody.children("li[tag=paytype]").children("div[tag=roomrateform]");
        var roomratedata = this.getroomratedata(roomratetpl);
        var isvolid = 1;
        var errormessage = '';
        if (roomratedata.isvolid != 1) {
            isvolid = 0;
            errormessage = '支付方式不能为空';
        }
        var roomrate = JSON.stringify(roomratedata.list);
        var deposittpl = this.context.orderformbody.children("li[tag=paytype]").children("div[tag=depositform][type=addtpl]");
        var depositdata = this.getdepositdata(deposittpl);
        if (depositdata.isvolid != 1) {
            isvolid = 0;
            errormessage = '支付方式不能为空';
        }
        var deposit = JSON.stringify(depositdata.list);
        var consumetpl = this.context.orderformbody.children("li[tag=paytype]").children("div[tag=consumeform][type=addtpl]");
        var consumedata = this.getconsumedata(consumetpl);
        if (consumedata.isvolid != 1) {
            isvolid = 0;
            errormessage = '请选择其它消费项目。';
        }
        var consume = JSON.stringify(consumedata.list);
        var shouyintaicount = parseInt(roomratedata.shouyintaicount) + parseInt(depositdata.shouyintaicount) + parseInt(consumedata.shouyintaicount);
        if (shouyintaicount > 1) {
            isvolid = 0;
            errormessage = '一次不能添加多条支付方式为收银台的收款哦～。';
        }
        var cols = hiddencell.attr("col");
        var rows = hiddencell.attr("row");
        if (paystatus) {
            paystatus = 3;
        } else {
            paystatus = 4;
        }
        if (!channel) {
            channel = 'self';
        }
        if (!channelname) {
            channelname = '自来客';
        }
        var orderfrom = this.context.ordercell.attr("orderfrom");
        var setid = this.context.ordercell.attr("setid");
        if (!M.isEmpty(setid) && M.isEmpty(this.plugin.needcar)) {
            needcar = this.context.ordercell.attr("needcar1");
            needcar2 = this.context.ordercell.attr("needcar2");
        }
        if (!M.isEmpty(setid) && M.isEmpty(this.plugin.guarantee)) {
            paystatus = this.context.ordercell.attr("paystatus");
        }
        needcar = this.context.ordercell.attr("needcar1");
        needcar2 = this.context.ordercell.attr("needcar2");
        var orderdata = {
            "remark": remark,
            "channel": channel,
            "channelname": channelname,
            "rows": rows,
            "cols": cols,
            "paystatus": paystatus,
            "deposit": deposit,
            "needcar": needcar,
            "needcar2": needcar2,
            "roomrate": roomrate,
            "consume": consume,
            "orderfrom": orderfrom,
            "isvolid": isvolid,
            "errormessage": errormessage
        };
        var guestlist = this.multiguest;
        orderdata.guestname = M.getVal(this.context.o_guestname);
        orderdata.phone = M.getVal(this.context.o_phone);
        var member = this._getmemberinfo(orderdata.phone);
        orderdata.levelid = member.levelid;
        orderdata.levelname = member.levelname;
        if (this.plugin.idcard == 1) {
            idcard_tpl = this.context.orderformbody.children("li[tag=idcard]");
            orderdata.idnum = idcard_tpl.children().find("input[name=idcard]").val();
            orderdata.idtype = idcard_tpl.children("div").children("div[t=idcardform]").children("span").attr("value");
        } else {
            if (!M.isEmpty(guestlist) && guestlist.length > 0) {
                orderdata['idnum'] = guestlist[0].idnum;
                orderdata['idtype'] = guestlist[0].idtype;
            }
        }
        if (!M.isEmpty(guestlist) && guestlist.length > 0) {
            orderdata['address'] = guestlist[0].address;
            orderdata['sex'] = guestlist[0].sex;
            orderdata['nation'] = guestlist[0].nation;
        }
        orderdata['guestlength'] = 1;
        if (this.multiguest.length > 1) {
            orderdata['guestlength'] = this.multiguest.length;
            for (var i = 1; i < guestlist.length; i++) {
                var guest = guestlist[i];
                orderdata['guestname' + i] = guest.guestname;
                orderdata['phone' + i] = guest.phone;
                orderdata['memberstatus' + i] = guest.memberstatus;
                orderdata['idnum' + i] = guest.idnum;
                orderdata['idtype' + i] = guest.idtype;
                orderdata['address' + i] = guest.address;
                orderdata['sex' + i] = guest.sex;
                orderdata['nation' + i] = guest.nation;
            }
        }
        var remindlength = this.reminddata.length;
        if (remindlength >= 1) {
            var reminddata = this.reminddata;
            orderdata['remindlength'] = remindlength;
            for (var i = 0; i < remindlength; i++) {
                var remind = reminddata[i];
                orderdata['remindtype' + i] = remind.type;
                orderdata['reminddatetime' + i] = remind.datetime;
                orderdata['remindremark' + i] = remind.remark;
            }
        }
        var colorfield = this.context.orderformbody.children("li[tag=ordercolor]");
        var style = colorfield.find("div[tag=colorlist]").children("span[ison=1]").attr("val");
        var styleshowstatus = colorfield.children("div[tag=color]").css("display");
        if (M.isEmpty(style) || styleshowstatus == 'none') {
            orderdata["style"] = hiddencell.attr("color");
        } else {
            orderdata["style"] = style;
        }
        var attnid = colorfield.children("div[t=attnlist]").children("p[tag=showattn]").attr("value");
        var attnusername = colorfield.children("div[t=attnlist]").children("p[tag=showattn]").html();
        orderdata['attnid'] = attnid;
        var i = 0;
        var valid = true;
        var totalprice = 0;
        if (this.bookallroom == 1) {
            var blockbookinglist = this.context.orderform.find('li[tag=blockbookinglist]');
            orderdata['checkindate'] = blockbookinglist.find('div[t=selectcheckin]').children('span').attr('value');
            orderdata['nights'] = blockbookinglist.find('div[t=selectcheckinnights]').children('span').attr('value');
            totalprice = blockbookinglist.find('div[tag=totalprice]').children('input').val();
            if (orderdata['nights'] == 0) {
                var nighttpl = this.context.orderform.find('li[tag=blockbookinglist]').find('div[t=selectcheckinnights]').find("div[tag=option]");
                if (nighttpl.length == 1) {
                    if (nighttpl.attr("value") == 0) {
                        isvolid = 0;
                        errormessage = '当前日期不可包场';
                    }
                }
            }
            if (totalprice < 1) {
                isvolid = 0;
                errormessage = '总价不能为0';
            }
        } else {
            var indexlist = [];
            var orderroomlist = this.context.orderformbody.children("li[tag=orderroomlist]");
            orderroomlist.children("div[tag=order]").each(function() {
                i++;
                var index = $(this).attr("i");
                indexlist.push(index);
                var room_tpl = $(this).children("div[id=selectRoom]").children("span");
                var roomid = room_tpl.attr("value");
                var roomname = room_tpl.text().trim();
                var checkindate = $(this).children("div[id=selectDay]").children("span").attr("value");
                var nights = $(this).children("div[id=selectNights]").children("span").attr("value");
                var price = $(this).children("input[type=text][tag=price]").val();
                var oid = $(this).attr("oid");
                if (M.isEmpty(price)) {
                    errormessage = "价格不能为空";
                    isvolid = 0;
                }
                if (isNaN(price)) {
                    errormessage = "价格格式不正确";
                    isvolid = 0;
                }
                if (roomid == 0 || room_tpl.length == 0) {
                    var arrivatetime = M.strtotime(checkindate);
                    var arrivatedate = M.timeformat(arrivatetime, 'm/d');
                    errormessage = "对不起，" + arrivatedate + "日没有可预订的房间，请重新选择其它日期。";
                    isvolid = 0;
                }
                price = parseInt(price);
                totalprice += price;
                orderdata["roomid" + i] = roomid;
                orderdata["roomname" + i] = roomname;
                orderdata["nights" + i] = nights;
                orderdata["price" + i] = price;
                orderdata["checkindate" + i] = checkindate;
                orderdata["oid" + i] = oid;
                orderdata['index' + i] = index;
            });
            orderdata["orderlength"] = i;
        }
        orderdata['indexlist'] = indexlist;
        orderdata["totalprice"] = totalprice;
        orderdata["isvolid"] = isvolid;
        orderdata["errormessage"] = errormessage;
        orderdata['discount'] = this._getdiscount();
        return orderdata;
    },
    getroomratedata: function(roomrateformlist) {
        var roomratelist = [];
        var isvolid = 1;
        var shouyintaicount = 0;
        roomrateformlist.each(function() {
            var tpl = $(this);
            var amount = tpl.find("input[name=roomrate]").val();
            if (amount > 0) {
                var paytypecode = tpl.find("div[t=roomrate]").children("span").attr("value");
                var paytyename = tpl.find("div[t=roomrate]").children("span").text();
                if (M.isEmpty(paytypecode)) {
                    isvolid = 0;
                }
                if (paytypecode == 'shouyintai') {
                    shouyintaicount++;
                }
                roomratelist.push({
                    "amount": amount,
                    "paytypecode": paytypecode,
                    "paytypename": paytyename
                });
            }
        });
        return {
            "list": roomratelist,
            "isvolid": isvolid,
            "shouyintaicount": shouyintaicount
        };
    },
    getdepositdata: function(depositformlist) {
        var depositlist = [];
        var isvolid = 1;
        var shouyintaicount = 0;
        depositformlist.each(function() {
            var tpl = $(this);
            var amount = tpl.find("input[name=deposit]").val();
            if (amount > 0) {
                var paytypecode = tpl.find("div[t=deposit]").children("span").attr("value");
                var paytyename = tpl.find("div[t=deposit]").children("span").text();
                if (M.isEmpty(paytypecode)) {
                    isvolid = 0;
                }
                if (paytypecode == 'shouyintai') {
                    shouyintaicount++;
                }
                depositlist.push({
                    "amount": amount,
                    "paytypecode": paytypecode,
                    "paytypename": paytyename
                });
            }
        });
        return {
            "list": depositlist,
            "isvolid": isvolid,
            "shouyintaicount": shouyintaicount
        };
    },
    getconsumedata: function(consumeformlist) {
        var consumelist = [];
        var isvolid = 1;
        var shouyintaicount = 0;
        consumeformlist.each(function() {
            var tpl = $(this);
            var amount = tpl.find("input[name=consume]").val();
            if (amount > 0) {
                var consume = tpl.find("div[t=consume]").children("span");
                var p = consume.attr("p");
                var pname = consume.attr("pname");
                var consumecode = consume.attr("consumecode");
                var consumename = consume.text();
                if (M.isEmpty(consumecode)) {
                    isvolid = 0;
                }
                var tem = {
                    "amount": amount,
                    "p": p,
                    "pname": pname,
                    "consumecode": consumecode,
                    "consumename": consumename
                };
                consumelist.push(tem);
            }
        });
        return {
            "list": consumelist,
            "isvolid": isvolid,
            "shouyintaicount": shouyintaicount
        };
    },
    orderandcheckin: function() {
        var orderdata = this._getorderform();
        if (M.isEmpty(orderdata.guestname)) {
            alert("请输入姓名");
            return;
        }
        if (orderdata.isvolid != 1) {
            alert(orderdata.errormessage);
            return;
        }
        var action = this.context.ordercell.attr("action");
        var url = '/Book/orderandcheckin';
        if (action == "add") {
            orderdata["op"] = "orderandcheckin";
        } else if (action == "edit") {
            orderdata["op"] = "saveorderandcheckin";
            url = '/Book/editorderandcheckin';
            var setid = this.context.ordercell.attr("setid");
            var oid = this.context.ordercell.attr("oid");
            orderdata["setid"] = setid;
            orderdata["orderid"] = oid;
        }
        if (orderdata.idnum != "" && orderdata.idtype == "1") {
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (reg.test(orderdata.idnum) === false) {
                alert("请输入正确的身份证号");
                return;
            }
        }
        this.context.multiguesttip.hide();
        var indexlist = orderdata['indexlist'];
        var roomtypepricelist = this.getroomtypepricelist(indexlist);
        orderdata['pricelist'] = JSON.stringify(roomtypepricelist);
        orderdata['avgpricestatus'] = JSON.stringify(this.avgpricestatus);
        var btn = this.context.orderform.children(".modal-footer").children("a[tag=checkin]");
        if (!this.req_before(btn)) {
            return;
        }
        M._getjson(url, orderdata, this.orderandcheckin_finished.toEventHandler(this));
    },
    orderandcheckin_finished: function(d) {
        if (d.status == "success") {
            this.ordercallback.call(this, d);
            var items = d.orderlist;
            this._closepopup();
            var payname = d.payname;
            var action = d.req.a;
            payname.action = action;
            payname.a = "getpayinfo";
            this.orderdetail = {
                "a": action,
                "items": items,
                "paydetail": payname
            };
            this.cashier();
            var printcheckinset = this.printset.checkin;
            if (printcheckinset == 1 && (d.req.op == "orderandcheckin" || d.req.op == "saveorderandcheckin")) {
                this.context.printform.attr("operate", "checkin").attr("unqid", items[0].orderuniqid);
                this.print();
            }
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        var btn = this.context.orderform.children(".modal-footer").children("a[tag=checkin]");
        this.req_end(btn);
    },
    _geteditform: function() {
        var hiddencell = this.context.ed_hiddencell;
        var oid = hiddencell.attr("oid");
        var roomid = M.getVal(this.context.ed_room);
        var roomname = this.context.ed_room.children(":selected").text().trim();
        var checkindate = M.getVal(this.context.ed_checkindate);
        var nights = M.getVal(this.context.ed_nights);
        var totalprice = M.getVal(this.context.ed_totalprice);
        var paystatus = M.getVal(this.context.ed_paystatus);
        var deposit = M.getVal(this.context.ed_deposit);
        var guestname = M.getVal(this.context.ed_guestname);
        var phone = M.getVal(this.context.ed_phone);
        var channel = M.getVal(this.context.ed_channel);
        var needcar = this.context.ed_needcar.attr("checked");
        needcar = needcar == "checked" ? 1 : 0;
        var needcar2 = this.context.ed_needcar2.attr("checked");
        needcar2 = needcar2 == "checked" ? 1 : 0;
        var remark = M.getVal(this.context.ed_remark);
        var cols = hiddencell.attr("cols");
        var rows = hiddencell.attr("row");
        nights = parseInt(nights);
        var orderdata = {
            "orderid": oid,
            "roomid": roomid,
            "roomname": roomname,
            "totalprice": totalprice,
            "guestname": guestname,
            "n": nights,
            "phone": phone,
            "date": checkindate,
            "arrivetime": "",
            "remark": remark,
            "channel": channel,
            "rows": rows,
            "cols": cols,
            "idnum": "",
            "paystatus": paystatus,
            "deposit": deposit,
            "needcar": needcar,
            "needcar2": needcar2
        };
        return orderdata;
    },
    saveorder: function() {
        var orderdata = this._geteditform();
        if (M.isEmpty(orderdata.guestname)) {
            alert("请输入姓名");
            return;
        }
        if (M.isEmpty(orderdata.paystatus)) {
            alert("请选择付款状态");
            return;
        }
        orderdata["a"] = "saveorder";
        var btn = this.context.editorder.children(".modal-footer").children("a[tag=save]");
        if (!this.req_before(btn)) {
            return;
        }
        M._getjson("ajax.php", orderdata, this.saveorder_finished.toEventHandler(this));
    },
    saveorder_finished: function(d) {
        if (d.status == "success") {
            var row = this.context.ed_hiddencell.attr("row");
            var cols = this.context.ed_hiddencell.attr("cols");
            var detail = d.data;
            this._clearitem(row, cols);
            var itemdate = this._getitemdate();
            var item = d.data;
            this._showitem(item, itemdate);
            this._closepopup();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        this.temporderdetail = null;
        var btn = this.context.editorder.children(".modal-footer").children("a[tag=save]");
        this.req_end(btn);
    },
    saveorderandcheckin: function() {
        var orderdata = this._geteditform();
        if (M.isEmpty(orderdata.guestname)) {
            alert("请输入姓名");
            return;
        }
        if (M.isEmpty(orderdata.paystatus)) {
            alert("请选择付款状态");
            return;
        }
        orderdata["a"] = "saveorderandcheckin";
        var btn = this.context.editorder.children(".modal-footer").children("a[tag=checkin]");
        if (!this.req_before(btn)) {
            return;
        }
        this.temporderdetail = null;
        M._getjson("ajax.php", orderdata, this.saveorderandcheckin_finished.toEventHandler(this));
    },
    saveorderandcheckin_finished: function(d) {
        if (d.status == "success") {
            var row = this.context.ed_hiddencell.attr("row");
            var cols = this.context.ed_hiddencell.attr("cols");
            var detail = d.data;
            var payname = d.payname;
            var action = d.req.a;
            payname.action = action;
            payname.a = "getpayinfo";
            this._clearitem(row, cols);
            var itemdate = this._getitemdate();
            var item = d.data;
            this._showitem(item, itemdate);
            this.orderdetail = {
                "a": action,
                "items": item,
                "paydetail": payname
            };
            this.cashier();
            this._closepopup();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        var btn = this.context.editorder.children(".modal-footer").children("a[tag=checkin]");
        this.req_end(btn);
    },
    _clearorderform: function() {
        this.bookallroom = 0;
        this.reminddata = [];
        this.phonelist = {};
        this.usersetpricelist = {};
        this.context.orderformbody.children().find("div[tag=guestlist]").hide();
        this.context.multiguestform.attr("uniqid", "");
        this.context.o_nights.val(1);
        this.multiguest = [];
        M.emptyVal(this.context.o_guestname);
        M.emptyVal(this.context.o_phone);
        M.emptyVal(this.context.o_totalprice);
        this.context.o_totalprice.attr("price", "");
        M.emptyVal(this.context.o_arrivetime);
        this.context.o_channel.val('self').attr("disabled", false);
        M.emptyVal(this.context.roomcost);
        M.emptyVal(this.context.depositcost);
        M.emptyVal(this.context.o_remark);
        this.context.rmpayBox.removeClass("ip-right").addClass("ip-dropdown");
        this.context.dtpayBox.removeClass("ip-right").addClass("ip-dropdown");
        var orderfields = this.context.orderform.children(".modal-body").find(".cntlist");
        orderfields.children("li[tag=idcard]").children().find("a[tag=multiguest]").html("");
        this.context.orderformbody.children("li[tag=orderroomlist]").show();
        this.context.orderformbody.children("li[tag=blockbookinglist]").hide();
        this.context.orderform.find("h4").children("span[tag=title]").attr("class", 'title').attr("status", "1");
        this.context.orderform.find("h4").children("span[tag=blockbooking]").children("a").attr("class", 'table-btn ml15 t16');
        this.context.orderandcheckinbtn.hide();
        this.context.o_paystatus.attr("checked", false);
        M.emptyVal(this.context.o_deposit);
        this.context.o_needcar.attr("checked", false);
        this.context.o_needcar2.attr("checked", false);
        this.context.ordercell.attr("orderfrom", '');
        this.context.orderformbody.find("i[tag=memberremark]").hide();
        this.context.orderformbody.children("li[tag=ordercolor]").find("span[tag=checkbox]").removeClass('circle-btn-green').addClass('circle-btn');
        this.opaystatus_change();
        this.context.ordercell.attr("row", "").attr("col", "");
        this.context.ordercell.attr("fromdate", "").attr("enddate", "");
        this.context.ordercell.attr("needcar1", '').attr("needcar2", '').attr("paystatus", '') this.context.ordercell.attr("status", "").attr("ordersetid", "").attr('checkinsetid', "");
        this.context.ordercell.attr("color", "");
        var idcardtpl = this.context.orderformbody.children("li[tag=idcard]");
        if (idcardtpl.length > 0) {
            idcardtpl.find("div[t=idcardform]").attr("value", 1).children("span").attr("value", 1).html('身份证');
        }
        var orderroomlist = this.context.orderformbody.children("li[tag=orderroomlist]");
        var i = 0;
        this.droplist.order = {};
        orderroomlist.children("div[tag=order]").each(function() {
            if (i > 0) {
                $(this).children("div[tag=room]").unbind("change");
                $(this).children("div[tag=checkindate]").unbind("change");
                $(this).children("div[tag=nights]").unbind("change");
                $(this).children("p[tag=order][tag=price]").unbind("blur");
                $(this).remove();
            } else {
                $(this).children("input[tag=price]").val('0');
                $(this).attr("i", 0);
            }
            i++;
        });
        orderroomlist.children("div[tag=order]").children("a[tag=removeroom]").attr("class", "add-book").attr("tag", "addroom");
        var orderinfo = orderroomlist.children("p[tag=orderinfo]");
        var length = orderinfo.children("a[tag=addroom]").length;
        this.context.orderform.children("div[tag=head]").children("h4").attr("type", "");
        var orderindex = orderinfo.attr("maxi", "0");
        orderinfo.children("b").children("span[tag=totalprice]").html();
        var orderfield = orderroomlist.children("div[tag=order]:first");
        var orderinfo = orderfield.attr("i", "0").attr("oid", "");
        orderfield.find("div[id=selectDay]").attr("value", "").children("span").attr("value", '');
        orderfield.find("input[tag=price]").attr("disabled", false);
        orderfield.find("div[tag=selectRoom]").attr("value", "").children("span").attr("value", '');
        orderfield.find("div[tag=selectNights]").attr("value", "").children("span").attr("value", '');
        this.context.orderformbody.children("li[tag=channel]").children("div").attr("value", "").children("span").attr("value", '');
        var length = orderfield.find("a[tag=removeroom]").length;
        orderfield.find("a[tag=removeroom]").hide();
        this.context.idnum.val("");
        this.context.idtype.val("1");
        this.context.orderformbody.children("li[tag=ordercolor]").children("div[tag=color]").show();
        var colorfield = this.context.orderformbody.children("li[tag=ordercolor]");
        colorfield.find("div[tag=colorlist]").html(this.color_order);
        var selected = colorfield.find("div[tag=colorlist]").children("span[ison=1]");
        selected.attr('ison', "0");
        selected.attr("class", selected.attr("val"));
        colorfield.children("div[t=attnlist]").children("p[tag=showattn]").attr("value", '').html('业绩归属');
        colorfield.children("div[t=attnlist]").children("span[tag=showattn]").removeClass('circle-btn-green').addClass('circle-btn');
        var first = colorfield.find("div[tag=colorlist]").children("span:first");
        first.attr("ison", "1");
        first.attr("class", first.attr("val") + " checked");
        colorfield.children("div[tag=color]").children("span").attr("class", first.attr("val") + " checked");
        this.formatedateprice = {};
        this.context.o_deposit.show();
        this.context.o_needcar.attr("checked", false).parent().show();
        this.context.o_paystatus.show().attr("disabled", false);
        var orderfields = this.context.orderform.children(".modal-body").find(".cntlist");
        orderfields.children("li[tag=paytype]").children().find("input[name=roomrate]").val('0');
        orderfields.children("li[tag=paytype]").children().find("div[t=deposit]").show();
        orderfields.children("li[tag=paytype]").children().find("input[name=deposit]").val('0');
        orderfields.children("li[tag=paytype]").children("div[type=addtpl]").remove();
        this.context.orderform.find("div[tag=head]").children("h4").children("span[tag=title]").html("预订");
        this.context.orderform.children("div[tag=head]").children("h4").children("span[tag=blockbooking]").hide();
        orderfields.find('i[tag=discount]').hide();
        this.cache_discount = 0;
    },
    _clearcheckinform: function() {
        var formlist = this.context.editcheck.children(".modal-body").find(".cntlist");
        var guestnameinput = formlist.children("li[tag=guestname]").find("input[type=text]");
        var phoneinput = formlist.children("li[tag=phone]").find("input[type=text]");
        this.reminddata = [];
        var needcarli = formlist.children("li[tag=needcar]");
        needcarli.find("input[type=checkbox][tag=needcar2]").attr("checked", false);
        needcarli.show();
        var depositinput = formlist.children("li[tag=paystatus]").find("input[type=text][tag=deposit]");
        var remarkinput = formlist.children("li[tag=remark]").find("textarea");
        formlist.children("li[tag=paystatus]").children().find("span[tag=roomratetip]").text("收款");
        var hiddencell = this.context.editcheck.children(".modal-footer").find("input[type=hidden]");
        formlist.children("li[tag=paytype]").children().find("input[name=roomrate]").val('0');
        formlist.children("li[tag=idcard]").children().find("a[tag=multiguest]").html('');
        formlist.children("li[tag=paytype]").children("div[type=addtpl]").remove();
        this.context.c_paystatus.attr("checked", false);
        M.emptyVal(formlist.children("li[tag=remark]").find("textarea"));
        hiddencell.attr("gid", "");
        hiddencell.attr("rid", "");
        hiddencell.attr("row", "");
        hiddencell.attr("cols", "");
        hiddencell.attr("setid", "");
        hiddencell.attr("color", "");
        formlist.children("li[tag=ordercolor]").find("span[tag=checkbox]").removeClass('circle-btn-green').addClass('circle-btn');
        formlist.children("li[tag=ordercolor]").find("span[tag=showattn]").removeClass('circle-btn-green').addClass('circle-btn');
        M.emptyVal(guestnameinput);
        M.emptyVal(phoneinput);
        M.emptyVal(remarkinput);
        M.emptyVal(depositinput);
        depositinput.hide();
        var orderroomlist = formlist.children("li[tag=orderroomlist]");
        var i = 0;
        orderroomlist.children("div[tag=order]").each(function() {
            if (i > 0) {
                $(this).remove();
            }
            i++;
        });
        var orderinfo = orderroomlist.children("div[tag=orderinfo]");
        var orderindex = orderinfo.attr("maxi", "0");
        var orderinfo = orderroomlist.children("div[tag=order]:first").attr("i", "0").attr("gid", "");
        this.formatedateprice = {};
        var colorfield = formlist.children("li[tag=ordercolor]").children("div");
        var selected = colorfield.children("span[ison=1]");
        selected.attr('ison', "0");
        selected.attr("class", selected.attr("val"));
        colorfield.children("span[for=checkedin]").hide();
        colorfield.children("span[for=checkedout]").hide();
        this.context.ordercell.attr("status", "").attr("ordersetid", "").attr('checkinsetid', "");
    },
    orderroomtpl_change: function(orderroomlist) {
        var orderrooms = orderroomlist.children("div[tag=order]");
        if (orderrooms.length > 1) {
            orderroomlist.children("div[tag=order]").children("a[tag=addroom]").remove();
            orderroomlist.children("div[tag=order]").children("a[tag=removeroom]").remove();
            orderroomlist.children("div[tag=order]").append('<a title="删除该预订" class="del-book mr5 mt5" href="javascript:;" tag="removeroom"></a>');
            orderroomlist.children("div[tag=order]:last").append('<a title="添加预订" class="add-book mt5" href="javascript:;" tag="addroom"></a>');
        } else {
            orderroomlist.children("div[tag=order]").children("a[tag=addroom]").remove();
            orderroomlist.children("div[tag=order]").children("a[tag=removeroom]").remove();
            orderroomlist.children("div[tag=order]:last").append('<a title="添加预订" class="add-book mt5" href="javascript:;" tag="addroom"></a>');
        }
        this._sumorderprice(orderroomlist);
    },
    addroomtpl: function(orderroomlist) {
        var orderinfo = orderroomlist.children("div[tag=orderinfo]");
        var orderindex = orderinfo.attr("maxi");
        orderindex = M.isEmpty(orderindex) ? 0 : parseInt(orderindex);
        orderindex++;
        orderinfo.attr("maxi", orderindex);
        var tpl = orderroomlist.children("div[tag=order]:last");
        var newtpl = tpl.clone(true);
        newtpl.attr("i", orderindex);
        newtpl.insertBefore(orderinfo);
        newtpl.children("a[class=del-book]").show();
        var checkindate = tpl.children("div[id=selectDay]").children("span").attr("value");
        var roomid = tpl.children("div[id=selectRoom]").children("span").attr("value");
        newtpl.children("div[id=selectDay]").attr("value", checkindate);
        newtpl.children("div[id=selectRoom]").attr("value", roomid);
        newtpl.children("div[id=selectNights]").attr("value", 1);
        newtpl.attr("oid", "").attr("gid", "");
        this.showorderprice(orderroomlist, orderindex);
        this.orderroomtpl_change(orderroomlist);
    },
    removeroomtpl: function(ele) {
        var orderroomlist = ele.parents("li[tag=orderroomlist]");
        ele.parent().remove();
        var date = this._getcheckindate(orderroomlist);
        arrivedate_time = M.strtotime(date);
        var cancheckin = this._checkinable(arrivedate_time);
        if (cancheckin) {
            this.context.orderandcheckinbtn.show().attr("cancheckin", "1");
        } else {
            this.context.orderandcheckinbtn.hide().attr("cancheckin", "0");
        }
        this.orderroomtpl_change(orderroomlist);
        this._orderdate_change(orderroomlist);
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
    submitorder: function() {
        var orderdata = this._getorderform();
        var orderdetailtmp = this.temporderdetail;
        if (M.isEmpty(orderdata)) {
            return;
        }
        if (orderdata.isvolid != 1) {
            alert(orderdata.errormessage);
            return;
        }
        if (M.isEmpty(orderdata.guestname)) {
            alert("请输入姓名");
            return;
        }
        if (orderdata.idnum != "" && orderdata.idtype == "1") {
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (reg.test(orderdata.idnum) === false) {
                alert("请输入正确的身份证号");
                return;
            }
        }
        if (orderdata.rm_paytype == "shouyintai" && orderdata.appendmoney == 0) {
            alert("房费不能为0，请输入正确的房费金额。");
            return;
        }
        var action = this.context.ordercell.attr("action");
        var url = "/Book/addorder";
        if (action == "add") {
            orderdata["op"] = "submitorder";
        } else if (action == "edit") {
            orderdata["op"] = "saveorder";
            var setid = this.context.ordercell.attr("setid");
            var oid = this.context.ordercell.attr("oid");
            orderdata["setid"] = setid;
            orderdata["orderid"] = oid;
            url = '/Book/editorder';
        } else if (action == "hisadd") {
            orderdata["op"] = "hisadd";
            url = '/Book/hisadd';
        }
        if (this.bookallroom == 1) {
            url = '/Book/bookallroomaddorder';
            if (action == 'edit') {
                orderdata['uniqid'] = orderdetailtmp.orderuniqid;
                orderdata['act'] = 'editorder';
                url = '/Book/bookallroomedit';
            }
        }
        this.context.multiguesttip.hide();
        if (this.bookallroom != 1) {
            var indexlist = orderdata['indexlist'];
            var roomtypepricelist = this.getroomtypepricelist(indexlist);
            orderdata['pricelist'] = JSON.stringify(roomtypepricelist);
            orderdata['avgpricestatus'] = JSON.stringify(this.avgpricestatus);
        }
        var btn = this.context.orderform.children(".modal-footer").children("a[tag=suborder]");
        if (!this.req_before(btn)) {
            return;
        }
        M._getjson(url, orderdata, this.order_finished.toEventHandler(this));
    },
    order_finished: function(d) {
        if (d.status == "success") {
            this.ordercallback.call(this, d);
            this._closepopup();
            var type = "ordered";
            var detail = d.orderlist;
            var items = d.orderlist;
            var payname = d.payname;
            var action = d.req.op;
            payname.action = action;
            payname.a = "getpayinfo";
            this.orderdetail = {
                "a": action,
                "items": items,
                "paydetail": payname
            };
            this.cashier();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        var btn = this.context.orderform.children(".modal-footer").children("a[tag=suborder]");
        this.req_end(btn);
    },
    getroomtypepricelist: function(indexlist) {
        for (var i = 0; i < indexlist.length; i++) {
            var index = indexlist[i];
            if (M.isEmpty(this.roomtypepricelist[index])) {
                this.roomtypepricelist[index] = this._setroomtypeprice(index);
            }
        }
        return this.roomtypepricelist;
    },
    _resultinfo: function(payname) {
        this.context.cashierPop.find("div[tag=result]").find("span[tag=sguestname]").text(payname.guestname);
        this.context.cashierPop.find("div[tag=result]").find("span[tag=eguestname]").text(payname.guestname);
        if (payname.action == "submitorder" || payname.action == "hisadd") {
            var appenddesc = "收款";
        } else {
            var appenddesc = "收款";
        }
        this.context.cashierResult.find("span[tag=desc]").text(payname.roomname + "(" + payname.roomtypename + ")," + appenddesc);
    },
    getpayBox_finished: function(d) {
        if (d.status == "success") {
            var info = d.info;
            var data = info.data;
            this.context.cashierPop.find("div[tag=step]").show();
            this.context.cashierPop.find("div[tag=result]").hide().find("div[tag=success]").hide().find("div[tag=fail]").hide();
            this.context.cashierPop.find("img[tag=qrcode]").attr("src", data.pay_qr);
            this.context.payinfo.attr("outid", data.trade_no);
            this.context.cashierPop.find("div[tag=qrcodeinfo]").show();
            this.context.cashierPop.find("div[tag=qrcodedesc]").show();
            this.context.cashierPop.find("div[tag=boxpayinfo]").hide();
            this.context.cashierPop.find("li[tag=qrcode]").attr("class", "checked");
            this.context.cashierPop.find("li[tag=boxpay]").attr("class", "");
            M.Popup(this.context.cashierPop, {
                "hideclass": "modal cashier cashier-s fade",
                "showclass": "modal cashier cashier-s fade in"
            });
            this.qrOpened = true;
            this._longPolling();
        } else {
            M.error(d.msg);
        }
    },
    showMsgpops: function(msgpop) {
        var payinfo = msgpop.paydata;
        var innname = this.context.footer.find("div[tag=inn_div]").find("li.on").children("a").text();
        this.context.cashiermsgPop.find("a[tag=innname]").html(innname);
        this.context.cashiermsgPop.find("span[tag=totalprice]").html("&yen;" + msgpop.appendmoney);
        this.context.cashiermsgPop.find("a[tag=descprice]").html(msgpop.appendmoney);
        this.context.cashiermsgPop.find("input[tag=phone]").attr("guestname", msgpop.guestname);
        this.context.cashiermsgPop.find("input[tag=phone]").attr("uniqid", msgpop.orderuniqid);
        var phone = msgpop.phone;
        if (!M.isEmpty(phone)) {
            this.context.cashiermsgPop.find("input[tag=phone]").attr("hasphone", 1).val(phone);
        } else {
            this.context.cashiermsgPop.find("input[tag=phone]").attr("hasphone", 0).val(phone);
        }
        var descroomname = msgpop.roomtypename;
        this.context.cashiermsgPop.find("a[tag=descroomname]").html(descroomname);
        var guestname = msgpop.guestname;
        var orderinfo = this._showCsahierDesc(payinfo, guestname, "msg");
        var flag = msgpop.action;
        if (flag == "submitorder") {
            orderinfo += "，" + "收款";
        }
        if (flag == "saveorder") {
            orderinfo += "，" + "收款";
        }
        target = this.context.cashiermsgPop;
        target.find("span[tag=desc]").html(orderinfo);
        this._showCashierTip(payinfo, "msg");
    },
    showBoxpops: function(msgpop, flag) {
        var payinfo = msgpop.paydata;
        this.context.cashierPop.find("span[tag=totalprice]").html("&yen;" + msgpop.appendmoney);
        var guestname = msgpop.guestname;
        var orderinfo = this._showCsahierDesc(payinfo, guestname, "box");
        if (flag == "hisadd" || flag == "orderandcheckin") {
            orderinfo += "，" + "收款";
        } else {
            orderinfo += "，" + "收款";
        }
        target = this.context.cashierPop;
        target.find("span[tag=desc]").html(orderinfo);
        this._showCashierTip(payinfo, "box");
    },
    _showCsahierDesc: function(payinfo, guestname, flag) {
        var objdata = payinfo[0];
        var indatestr = M.strtotime(objdata.indate);
        var indate = M.timeformat(indatestr, 'm/d');
        var orderinfo = "";
        orderinfo = objdata.roomname + "(" + objdata.roomtypename + ")," + indate + "入住，住" + objdata.nights + "晚";
        if (payinfo.length > 1) {
            orderinfo += "...<i class='ico-question' tag='desctip'></i>";
        }
        orderinfo += "</br>" + guestname;
        return orderinfo;
    },
    _showCashierTip: function(payinfo, flag) {
        var tip = "";
        var ysydesc = "";
        for (var j = 0; j < payinfo.length; j++) {
            var data = payinfo[j];
            var indatestr = M.strtotime(data.indate);
            var indate = M.timeformat(indatestr, 'm/d');
            tip += data.roomname + "(" + data.roomtypename + ")，" + indate + "入住，住" + data.nights + "晚</br>";
            ysydesc += data.roomtypename + "，" + indate + "入住，住" + data.nights + "晚</br>";
        }
        if (flag == "msg") {
            target = this.context.cashiermsgPop;
        }
        if (flag == "box") {
            target = this.context.cashierPop;
        }
        this.context.cashierPop.find("input[tag=desc]").val(ysydesc);
        target.find("i[tag=desctip]").attr("title", '').tooltip({
            position: {
                my: "left+15 top+20",
                at: "left bottom"
            },
            track: 1,
            content: tip,
            show: {
                duration: 100
            }
        });
    },
    _handletooltip: function(type, tpl, orderlist, account) {
        var appendmoney = account.payedtotal;
        tpl.each(function() {
            var id = '';
            if (type == "order") {
                id = $(this).children("div").children("div").attr("oid");
            } else {
                id = $(this).children("div").children("div").attr("cid");
            }
            var title = '';
            for (var i = 0; i < orderlist.length; i++) {
                var order = orderlist[i];
                if (order.id == id) {
                    order.appendmoney = appendmoney;
                    if (type == "order") {
                        order.indate = order.arrivedate;
                        order.type = "ordered";
                    } else {
                        order.indate = order.arrivedate;
                        if (order.groupstatus == 1) {
                            order.type = "checkedin";
                        } else {
                            order.type = "checkedout";
                        }
                    }
                    title = pickeraction._showtip(order);
                    var key_tip = order.id + order.type;
                    pickeraction.tooltipmsg[key_tip] = title;
                }
            }
            $(this).children("div").children("div").attr("title", '').tooltip({
                position: {
                    my: "left+15 top+20",
                    at: "left bottom"
                },
                track: 1,
                content: title,
                show: {
                    duration: 100
                }
            });
        });
    },
    _handleaccountdetail: function(account, totalprice) {
        this.account = account;
        this.context.findetailform.children().find("div[tag=findetaillist]").find("div[t=account]").remove();
        var html = '';
        var tpllist = this.context.findetailform.children().find("div[tag=findetaillist]");
        tpllist.find("div[tag=tpl_detail]").hide();
        tpllist.find("div[tag=tpl_editform]").hide();
        if (!M.isEmpty(account.flag) && account.flag == 1) {
            this.context.canPopDetail = account.appendmoney.length;
            if (!M.isEmpty(account.depositlist)) {
                if (M.isEmpty(account.appendmoney)) {
                    account.appendmoney = [];
                }
                for (var d = 0; d < account.depositlist.length; d++) {
                    account.appendmoney.push(account.depositlist[d]);
                }
            }
            if (this.userauth.accountedit == 1) {
                var account_tpl = tpllist.find("div[tag=tpl_editform]");
                for (var i = 0; i < account.appendmoney.length; i++) {
                    var a = account.appendmoney[i];
                    var title = '收款时间';
                    if (a.paytype == 2) {
                        title = '退款时间';
                    }
                    if ('1' == a.isedit) {
                        var account_t = account_tpl.clone(true).attr("t", "account").show();
                        account_t.attr("aid", a.id);
                        account_t.children("div[tag=d]").children("span").html(a.msg);
                        var editform = account_t.children("div[tag=editform]");
                        editform.children("span").html(title);
                        editform.children("span[tag=title]").html(a.edittitle);
                        editform.children("input[name=datetime]").val(M.timeformat(M.strtotime(a.createon), 'Y-m-d h:i:s'));
                        editform.children("input[name=money]").val(a.amount);
                        editform.children("div[t=editaccount]").attr("value", a.paytypecode);
                        this.droplist.order.editaccount = M.DropdownList(editform.children("div[t=editaccount]"), null, {});
                        account_tpl.before(account_t);
                    } else {
                        var paystatusStr = '';
                        if ('shouyintai' == a.paytypecode) {
                            if ('1' == a.paystatus) {
                                paystatusStr = ' <span class="green">[已付款]</span>';
                            } else if ('2' == a.paystatus) {
                                paystatusStr = ' <span>[已关闭]</span>';
                            } else {
                                var tpl = a.remark;
                                paystatusStr = '<div style="display:none" tag="remark">' + tpl + '</div> <span id=' + a.id + ' total_fee = ' + a.amount + ' tradingcode=' + a.tradingcode + ' class="red">[待付款</span>--<a tag="paysyt" href="#?">点击重新支付</a>]';
                            }
                        }
                        var payitem = M.isEmpty(a.detaillist) ? '': a.detaillist.payitem;
                        if (M.isEmpty(payitem)) {
                            payitem = '';
                        }
                        var payitemtype = M.isEmpty(a.detaillist) ? '': a.detaillist.payitemtype;
                        if (M.isEmpty(payitemtype)) {
                            payitemtype = '';
                        }
                        var item = '<div t="account" operate="' + payitem + '" operatetype="' + payitemtype + '" tag="re">' + a.msg + paystatusStr + '</div>';
                        account_tpl.before(item);
                    }
                }
            } else {
                var account_tpl = tpllist.find("div[tag=tpl_detail]");
                for (var i = 0; i < account.appendmoney.length; i++) {
                    var paystatusStr = '';
                    if ('shouyintai' == account.appendmoney[i].paytypecode) {
                        if ('1' == account.appendmoney[i].paystatus) {
                            paystatusStr = ' <span class="green">[已付款]</span>';
                        } else if ('2' == account.appendmoney[i].paystatus) {
                            paystatusStr = ' <span>[已关闭]</span>';
                        } else {
                            paystatusStr = ' <span class="red">[待付款]</span>';
                        }
                    }
                    html += '<div>' + account.appendmoney[i].msg + paystatusStr + '</div>';
                }
                account_tpl.html(html).show();
            }
        } else {
            if (account.payedtotal != 0 && !M.isEmpty(account.payedtotal)) {
                var account_tpl = tpllist.find("div[tag=tpl_detail]");
                html += '<div>已交房费：¥' + account.payedtotal + '</div>';
                account_tpl.html(html).show();
            }
        }
        var consume = account.consume;
        this.context.needpayform.find("div[tag=tpl][type=add]").remove();
        this.context.needpayform.find("div[tag=edit_tpl][type=add]").remove();
        this.context.needpayform.find("div[tag=noedit_tpl][type=add]").remove();
        var roomratetotal = totalprice - account.payedtotal - parseInt(account.deposit);
        this.context.needpayform.find("span[tag=total]").html('￥' + roomratetotal);
        this.context.needpayform.attr("payeddeposit", account.deposit).attr("payedtotal", account.payedtotal).attr("consumetotal", account.consumetotal);
        var alltotal = parseInt(totalprice) + parseInt(account.consumetotal);
        this.context.needpayform.find("span[tag=alltotal]").html('￥' + alltotal);
        if (!M.isEmpty(consume)) {
            this.context.needpayform.find("div[tag=consumetotal]").html('其它消费总计：￥' + account.consumetotal);
            if (this.userauth.accountedit == 1) {
                var edittarget = this.context.needpayform.find("div[tag=edit_tpl]");
                var target = this.context.needpayform.find("div[tag=tpl]");
                for (var i = 0; i < consume.length; i++) {
                    var data = consume[i];
                    var tpl = target.clone(true).attr("type", "add").show().attr("cid", data.id);
                    var content = data.date + '，¥' + data.amount + '[' + data.consumename1 + ']';
                    tpl.children("span[tag=content]").html(content);
                    var edtitpl = edittarget.clone(true).attr("type", "add").attr("cid", data.id);
                    edtitpl.children("span[tag=date]").html(data.date);
                    edtitpl.find("input[name=amount]").val(data.amount);
                    edtitpl.children("div[t=consume]").children("span").attr("p", data.consumecode2).attr("pname", data.consumename2).attr("consumecode", data.consumecode1).html(data.consumename1);
                    target.before(tpl);
                    target.before(edtitpl);
                }
            } else {
                var target = this.context.needpayform.find("div[tag=noedit_tpl]");
                for (var i = 0; i < consume.length; i++) {
                    var data = consume[i];
                    var content = data.date + '，¥' + data.amount + '[' + data.consumename1 + ']';
                    var tpl = target.clone().attr("type", "add").show();
                    tpl.children("div[tag=content]").html(content);
                    target.before(tpl);
                }
            }
            this.context.needpayform.find("div[t=consumelist]").show();
        } else {
            this.context.needpayform.find("div[t=consumelist]").hide();
        }
    },
    editorder: function(ele) {
        this.tempavarooms = {};
        var temp = this.temporderdetail;
        var bookallroom = temp.bookallroom;
        var account = temp.account;
        this.account = account;
        this._clearorderform();
        var uniqid = temp.orderuniqid;
        this.context.multiguestform.attr("uniqid", uniqid).attr("orderstatus", "order");
        var date = M.strtotime(temp.arrivedate);
        var disable = false;
        this.formatedateprice = {};
        var orderfields = this.context.orderform.children(".modal-body").find(".cntlist");
        var tpl_chanle = orderfields.children("li").children("div[id=droplist]").attr("value", temp.channelcode);
        this.droplist.order.dr_chanle = M.DropdownList(tpl_chanle, this.channel_change.toEventHandler(this), {});
        orderfields.children("li[tag=paystatus]").children().find("div[tag=accountlist]").html('');
        var needpayed = parseInt(temp.orderset.totalprice) - parseInt(account.payedtotal) + parseInt(account.consumetotal) - parseInt(account.deposit);
        var tpl_showneedpaydetail = orderfields.children("li[tag=paytype]").children("div[tag=paystatistics]").show().find("a[tag=showneedpaydetail]");
        tpl_showneedpaydetail.html("&yen;" + needpayed);
        if (account.consumetotal == 0) {
            tpl_showneedpaydetail.removeClass('unpaid').addClass("unpaid_unclick");
            tpl_showneedpaydetail.attr("title", "").tooltip({
                disabled: false
            });
        } else {
            tpl_showneedpaydetail.removeClass('unpaid_unclick').addClass("unpaid");
            tpl_showneedpaydetail.attr("title", "").tooltip({
                position: {
                    my: "left+15 top+20",
                    at: "left bottom"
                },
                track: 1,
                content: "查看/修改待收款",
                show: {
                    delay: 100
                },
                hide: false
            });
        }
        var payedtotal = parseInt(account.payedtotal) + parseInt(account.deposit);
        orderfields.children("li[tag=paytype]").css('min-height', '40px');
        orderfields.children("li[tag=paytype]").children("div[tag=paystatistics]").show().find("a[tag=showfindetail]").attr("payed", payedtotal).html("&yen;" + payedtotal).attr("title", "").tooltip({
            position: {
                my: "left+15 top+20",
                at: "left bottom"
            },
            track: 1,
            content: "查看/修改已收款",
            show: {
                delay: 100
            },
            hide: false
        });
        this.orderstatus = 'order';
        this._handleaccountdetail(account, temp.orderset.totalprice);
        var idcard_tpl = this.context.orderformbody.children("li[tag=idcard]").children("div").children("div[t=idcardform]");
        if (idcard_tpl.length > 0) {
            idcard_tpl.attr("value", temp.idtype);
            this.context.orderformbody.children("li[tag=idcard]").children().find("input[name=idcard]").val(temp.idnum);
            this.droplist.order.idcard = M.DropdownList(idcard_tpl, null, {});
        }
        var orderindex = 0;
        var orderset = temp.orderset;
        var avgpricestatus = orderset['avgpricestatus'];
        var orders = orderset.orders;
        this.context.o_channel.attr("disabled", disable);
        this.context.o_paystatus.attr("disabled", disable);
        if (temp.paystatus == 3) {
            this.context.o_paystatus.attr("checked", true);
        }
        if (temp.bookallroom == 1) {
            orderfields.children("li[tag=orderroomlist]").hide();
            orderfields.children("li[tag=blockbookinglist]").show();
        } else {
            var orderroomlist = orderfields.children("li[tag=orderroomlist]");
            var orderinfo = orderroomlist.children("div[tag=orderinfo]");
            var tpl = orderroomlist.children("div[tag=order]:first");
            orderroomlist.show();
            orderfields.children("li[tag=bookallroom]").hide();
            if (orders.length > 0) {
                var order = orders[0];
                var arrivedate = M.strtotime(order.arrivedate);
                var dateoptions = this._generateorderdates(arrivedate);
                var firstorder = orderroomlist.children("div[tag=order]:first");
                firstorder.children("div[id=selectDay]").attr("value", order.arrivedate).children("div[tag=checkindate]").html(dateoptions.options).attr("disabled", disable);
                firstorder.children("div[id=selectRoom]").attr("value", order.roomid).attr("roomid", order.roomid).children("span").attr("value", order.roomid).text(order.roomname);
                firstorder.children("div[id=selectNights]").attr("value", order.nights).attr("nights", order.nights).children("span").attr("value", order.nights).text(order.nights + '晚');
                firstorder.children("input[type=text][tag=price]").val(order.totalprice).attr('orgprice', order.orgprice).attr("disabled", disable).attr("isfirst", 1);
                firstorder.attr("i", orderindex);
                firstorder.attr("oid", order.id);
                this.avgpricestatus[orderindex] = avgpricestatus[order.id];
                this.droplist.order.dr_orderdate = M.DropdownList(firstorder.children("div[id=selectDay]"), this.orderdate_change.toEventHandler(this), {});
                var i = 0;
                this._getavailablerooms("editorder", order.arrivedate, i, orderset.id, order.id);
                for (var j = 1; j < orders.length; j++) {
                    order = orders[j];
                    orderindex++;
                    arrivedate = M.strtotime(order.arrivedate);
                    dateoptions = this._generateorderdates(arrivedate);
                    var ordertpl = tpl.clone(true);
                    ordertpl.insertBefore(orderinfo);
                    ordertpl.attr("i", orderindex);
                    ordertpl.attr("oid", order.id);
                    this.avgpricestatus[orderindex] = avgpricestatus[order.id];
                    ordertpl.children("a[tag=removeroom]").show();
                    ordertpl.children("div[id=selectDay]").attr("value", order.arrivedate).children("div[tag=checkindate]").html(dateoptions.options).attr("disabled", disable);
                    ordertpl.children("div[id=selectRoom]").attr("value", order.roomid).attr("roomid", order.roomid).children("span").attr("value", order.roomid).text(order.roomname);
                    ordertpl.children("div[id=selectNights]").attr("value", order.nights).attr("nights", order.nights).children("span").attr("value", order.nights).text(order.nights + '晚');
                    ordertpl.children("input[type=text][tag=price]").val(order.totalprice).attr('orgprice', order.orgprice).attr("disabled", disable).attr("isfirst", 1);
                    this.droplist.order.dr_orderdate = M.DropdownList(ordertpl.children("div[id=selectDay]"), this.orderdate_change.toEventHandler(this), {});
                    var fromdate = dateoptions.fromdate;
                    var enddate_time = M.strtotime(dateoptions.enddate);
                    enddate_time.setDate(enddate_time.getDate() + this.maxnights);
                    var enddate = this.timeformat(enddate_time);
                    var i = 0;
                    this._getavailablerooms("editorder", order.arrivedate, orderindex, orderset.id, order.id);
                }
                orderinfo.attr("maxi", orderindex);
                this.orderroomtpl_change(orderroomlist);
            }
            orderinfo.find("span[tag=totalprice]").html("¥" + orderset.totalprice);
            this._orderdate_change(orderroomlist);
            orderroomlist.children("p").children("a[tag=removeroom]").remove();
            orderinfo.children("a").remove();
            this.memberstatus = 0;
            if (orderset.discount > 0) {
                this.memberstatus = 1;
            }
        }
        this.context.o_channel.val(orderset.channelcode);
        var colorfield = orderfields.children("li[tag=ordercolor]").children("div[tag=color]").show();
        colorfield.find("div[tag=colorlist]").css('width', "205px").children('span[val=oota]').remove();
        var style = orderset.orders[0].style;
        if (orderset.orders[0].style == 'oota') {
            colorfield.find("div[tag=colorlist]").children("span[ison=1]").attr("ison", "").removeClass("checked");
            colorfield.children("span").attr("title", "").attr("class", "oota");
            colorfield.find("div[tag=colorlist]").css('width', "227px").children("span:first").before('<span title="直连订单" class="oota" val="oota" tag="color"></span>');
            style = 'oota';
        }
        var coloritem = colorfield.find("div[tag=colorlist]").children("span[val=" + style + "]");
        this.setordercolor(coloritem);
        orderfields.children("li[tag=paytype]").children("div[tag=roomrateform]").hide();
        orderfields.children("li[tag=paytype]").children("div[tag=depositform]").hide();
        var roomrate = orderfields.children("li[tag=paytype]").find("div[t=roomrate]").attr("value", "cash");
        this.droplist.order.paymentsdroplist = M.DropdownList(roomrate, null, {});
        if (M.isEmpty(account.pt_deposit)) {
            account.pt_deposit = 'cash';
        }
        var deposit_tpl = orderfields.children("li[tag=paytype]").find("div[t=deposit]").attr("value", account.pt_deposit);
        this.droplist.order.depositBoxdroplist = M.DropdownList(deposit_tpl, null, {});
        this.droplist.order.dt_paytype = M.DropdownList(deposit_tpl, null, {});
        orderset.guestname = orderset.guestname.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        this.context.o_guestname.val(orderset.guestname);
        this.context.o_phone.val(orderset.phone);
        this.context.o_paystatus.val(orderset.paystatus);
        this.context.o_deposit.val(orderset.deposit == "0" ? "": orderset.deposit);
        var guestlist = temp.guestlist;
        if (!M.isEmpty(guestlist[0]['levelname']) && this.plugin.memberstatus == 1) {
            this.context.o_guestname.parent().children("i[tag=memberremark]").show();
        } else {
            this.context.o_guestname.parent().children("i[tag=memberremark]").hide();
        }
        this.context.o_needcar.attr("checked", orderset.needcar == "1");
        if (orderset.needcar == "1") {
            this.context.o_needcar.parent().children("span[tag=checkbox]").removeClass('circle-btn').addClass('circle-btn-green');
        }
        this.context.o_needcar2.attr("checked", orderset.needcar2 == "1");
        if (orderset.needcar2 == "1") {
            this.context.o_needcar2.parent().children("span[tag=checkbox]").removeClass('circle-btn').addClass('circle-btn-green');
        }
        if (temp.paystatus == 3) {
            this.context.o_paystatus.parent().children("span[tag=checkbox]").removeClass('circle-btn').addClass('circle-btn-green');
        }
        if (!M.isEmpty(temp.remark)) {
            this.context.o_remark.val(temp.remark);
        } else {
            M.emptyVal(this.context.o_remark);
        }
        this.multiguest = temp.guestlist;
        if (this.multiguest.length == 0) {
            this.multiguest.length = 1;
        }
        if (this.multiguest.length != 1) {
            orderfields.children("li[tag=idcard]").children().find("a[tag=multiguest]").html('<i class="count" tag="count">' + this.multiguest.length + '</i>');
        }
        this.opaystatus_change();
        var oid = this.context.e_ordercell.attr("oid");
        var cols = this.context.e_ordercell.attr("cols");
        var row = this.context.e_ordercell.attr("row");
        var rid = this.context.e_ordercell.attr("rid");
        this.context.ordercell.attr("setid", orderset.id).attr("needcar1", temp.needcar).attr("needcar2", temp.needcar2).attr("paystatus", temp.paystatus).attr("orderfrom", temp.orderfrom).attr("oid", oid).attr("color", temp.style).attr("from", temp.orderfrom).attr("rid", rid).attr("n", temp.nights);
        this._closepopup();
        orderfields.children("li[tag=paytype]").find("div[tag=roomrateform]").children("span").text("收款：");
        this.context.ordercell.attr("action", "edit");
        this.context.orderform.attr("orderstatus", "order");
        this.context.orderform.children(".modal-footer").children("a[tag=suborder]").html("确认修改").attr("text", "确认修改");
        var orderguidattr = temp.orderguidattr;
        if (!M.isEmpty(orderguidattr) && !M.isEmpty(orderguidattr.attnid) && orderguidattr.attnid != 0) {
            this.context.orderformbody.children("li[tag=ordercolor]").children("div[t=attnlist]").children("p[tag=showattn]").attr("value", orderguidattr.attnid).html(orderguidattr.attnname);
            if (orderguidattr.attnid != 0) {
                this.context.orderformbody.children("li[tag=ordercolor]").children("div[t=attnlist]").children("span[tag=showattn]").removeClass('circle-btn').addClass('circle-btn-green');
            }
        } else {
            this.context.orderformbody.children("li[tag=ordercolor]").children("div[t=attnlist]").children("p[tag=showattn]").attr("value", '').html('业绩归属');
        }
        if (!M.isEmpty(temp.remindlist) || temp.needcar == 1 || temp.needcar2 == 1) {
            this.context.orderform.find('label[tag=remindlabel]').children('span').removeClass('circle-btn').addClass('circle-btn-green');
        } else {
            this.context.orderform.find('label[tag=remindlabel]').children('span').removeClass('circle-btn-green').addClass('circle-btn');
        }
        this._create_remindtpl_li(temp, 'order');
        if (temp.bookallroom == 1) {
            this.bookallroom = 1;
            this.context.orderform.children("div[tag=head]").children("h4").children("span[tag=title]").html(this.txt_title.bookallroom);
            var blockbookinglist = this.context.orderform.find('li[tag=blockbookinglist]');
            blockbookinglist.find('div[tag=totalprice]').children('input').val(orderset.totalprice);
            blockbookinglist.children('div').children('span').html('（共' + orders.length + '间房）');
            var data = {
                'fromdate': temp.checkindate,
                'innid': this.innid,
                'uniqid': temp.orderuniqid,
                'ordernights': temp.nights,
                'act': 'addorder'
            };
            M._getjson('/Book/getbookallroom', data, this.getbookallroom_callback.toEventHandler(this));
        } else {
            this.bookallroom = 0;
            this.context.orderform.children("div[tag=head]").children("h4").children("span[tag=title]").html(this.txt_title.edit);
            M.Popup(this.context.orderform, {
                "hideclass": "bootbox modal fade",
                "showclass": "bootbox modal fade in",
                "drag": this.dragorder.toEventHandler(this)
            });
        }
    },
    _cleardeleteorderform: function() {
        this.context.delorderbody.find("input[name=guestname]").val('');
        this.context.delorderbody.find("input[name=phone]").val('');
        this.context.delorderbody.children("li[tag=orderroomlist]").children("div[tag=order]").remove();
        this.context.delorderbody.children("li[tag=remark]").children("textarea[name=remark]").val('');
    },
    editdeleteorder: function(type) {
        this.tempavarooms = {};
        var orderset = '';
        if (type == "order") {
            var temp = this.temporderdetail;
            orderset = temp.orderset;
        } else {
            var temp = this.tempcheckdetail;
            orderset = temp.checkinset;
        }
        this.context.editdelorderform.attr("ordertype", type).attr("uniqid", temp.orderuniqid);
        var account = temp.account;
        this.account = account;
        this._cleardeleteorderform();
        var orderfields = this.context.delorderbody;
        var tpl_chanle = orderfields.children("li").children("div[t=channllist]").attr("value", temp.channelcode);
        M.DropdownList(tpl_chanle, this.channel_change.toEventHandler(this), {});
        var totalprice = 0;
        for (var i = 0; i < orderset.orders.length; i++) {
            totalprice = parseInt(totalprice) + parseInt(orderset.orders[i].totalprice);
        }
        this.context.editdelorderform.find("strong[tag=totalprice]").html('¥' + totalprice);
        var needpayed = parseInt(totalprice) - parseInt(account.payedtotal) + parseInt(account.consumetotal) - parseInt(account.deposit);
        this.context.needpayform.attr("payedtotal", account.payedtotal);
        this.context.needpayform.attr("payeddeposit", account.deposit);
        this.context.needpayform.attr("consumetotal", account.consumetotal);
        var tpl_showneedpaydetail = orderfields.children("li[tag=paytype]").find("a[tag=showneedpaydetail]");
        tpl_showneedpaydetail.html("&yen;" + needpayed);
        if (account.consumetotal == 0) {
            tpl_showneedpaydetail.removeClass('unpaid').addClass("unpaid_unclick");
            tpl_showneedpaydetail.attr("title", "").tooltip({
                disabled: false
            });
        } else {
            tpl_showneedpaydetail.removeClass('unpaid_unclick').addClass("unpaid");
            tpl_showneedpaydetail.attr("title", "").tooltip({
                position: {
                    my: "left+15 top+20",
                    at: "left bottom"
                },
                track: 1,
                content: "查看/修改待收款",
                show: {
                    delay: 100
                },
                hide: false
            });
        }
        if (account.consumetotal > 0) {
            orderfields.children("li[tag=paytype]").find("div[tag=consume]").show().find("a[tag=consumetotal]").attr("payed", account.consumetotal).html("&yen;" + account.consumetotal);
        } else {
            orderfields.children("li[tag=paytype]").find("div[tag=consume]").hide()
        }
        var payedtotal = parseInt(account.payedtotal) + parseInt(account.deposit);
        orderfields.children("li[tag=paytype]").css('min-height', '40px');
        orderfields.children("li[tag=paytype]").find("a[tag=showfindetail]").attr("payed", payedtotal).html("&yen;" + payedtotal).attr("title", "").tooltip({
            position: {
                my: "left+15 top+20",
                at: "left bottom"
            },
            track: 1,
            content: "查看/修改已收款",
            show: {
                delay: 100
            },
            hide: false
        });
        this.orderstatus = 'delete';
        this._handleaccountdetail(account, orderset.totalprice);
        var orderindex = 0;
        if (temp.bookallroom == 1) {
            this.context.editdelorderform.find("h4[tag=title]").html('修改包场订单');
            this.context.editdelorderform.children(".modal-footer").children("a[t=editorder]").attr("tag", "editgpbookorder");
            this.context.delorderbody.children("li[tag=bookallroom]").show();
            this.context.delorderbody.children("li[tag=orderroomlist]").hide();
            var orderroomlist = this.context.delorderbody.children("li[tag=bookallroom]");
            var tpl = orderroomlist.children("div[tag=o]:first");
            order = orderset.orders[0];
            orderindex++;
            if (type == "order") {
                var arrivedate = M.strtotime(order.arrivedate);
            } else {
                var arrivedate = M.strtotime(order.checkindate);
            }
            var checkindatestr = M.timeformat(arrivedate, 'm/d') + '入住';
            tpl.children("div[t=datelist]").attr("value", order.arrivedate).children("span").html(checkindatestr);
            tpl.children("div[t=nightslist]").attr("value", order.nights).attr("nights", order.nights).children("span").attr("value", order.nights).text(order.nights + '晚');
            tpl.find("input[name=price]").val(orderset.totalprice).attr("isfirst", 1);
            tpl.find("span[tag=roomtotal]").html('（共' + orderset.orders.length + '间房）');
        } else {
            this.context.editdelorderform.find("h4[tag=title]").html('修改订单');
            this.context.editdelorderform.children(".modal-footer").children("a[t=editorder]").attr("tag", "editorder");
            this.context.delorderbody.children("li[tag=orderroomlist]").show();
            this.context.delorderbody.children("li[tag=bookallroom]").hide();
            var orderroomlist = this.context.delorderbody.children("li[tag=orderroomlist]");
            var orderroomlist = this.context.delorderbody.children("li[tag=orderroomlist]");
            var tpl = orderroomlist.children("div[tag=o]:first");
            var orderset = orderset;
            var orders = orderset.orders;
            if (orders.length > 0) {
                var i = 0;
                for (var j = 0; j < orders.length; j++) {
                    order = orders[j];
                    orderindex++;
                    if (type == "order") {
                        var arrivedate = M.strtotime(order.arrivedate);
                    } else {
                        var arrivedate = M.strtotime(order.checkindate);
                    }
                    var checkindatestr = M.timeformat(arrivedate, 'm/d') + '入住';
                    var ordertpl = tpl.clone(true).show().attr("tag", "order");
                    tpl.before(ordertpl);
                    ordertpl.attr("i", orderindex);
                    ordertpl.attr("oid", order.id);
                    ordertpl.children("div[t=datelist]").attr("value", order.arrivedate).children("span").html(checkindatestr);
                    ordertpl.children("div[t=roomlist]").attr("value", order.roomid).attr("roomid", order.roomid).children("span").attr("value", order.roomid).text(order.roomname);
                    ordertpl.children("div[t=nightslist]").attr("value", order.nights).attr("nights", order.nights).children("span").attr("value", order.nights).text(order.nights + '晚');
                    ordertpl.children("input[name=price]").val(order.totalprice).attr('orgprice', order.orgprice).attr("isfirst", 1);
                }
            }
        }
        this._closepopup();
        orderset.guestname = orderset.guestname.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        this.context.delorderbody.find("input[name=guestname]").val(orderset.guestname);
        this.context.delorderbody.find("input[name=phone]").val(orderset.phone);
        if (!M.isEmpty(temp.remark)) {
            this.context.delorderbody.children("li[tag=remark]").children("textarea[name=remark]").val(temp.remark);
        } else {
            M.emptyVal(this.context.delorderbody.children("li[tag=remark]").children("textarea[name=remark]"));
        }
        M.Popup(this.context.editdelorderform, {
            "hideclass": "bootbox modal fade",
            "showclass": "bootbox modal fade in"
        });
    },
    checkin_option: function(ele) {
        if (M.isEmpty(this.temporderdetail)) return;
        var payform = this.context.ck_info.children("li[tag=orderinfo]").children().find("div[tag=payform]");
        payform.children("div[tag=roomrate]").children("input[name=roomrate]").attr('tag', 'roomratemoney');
        payform.children("div[tag=deposit]").children("input[name=deposit]").attr('tag', 'depositmoney');
        var account = this.temporderdetail.account;
        var orderset = this.temporderdetail.orderset;
        var uniqid = this.temporderdetail.orderuniqid;
        this.context.multiguestform.attr("uniqid", uniqid).attr("orderstatus", "order");
        var orders = orderset.orders;
        var guestlist = this.temporderdetail.guestlist;
        this.context.ck_appendmoney.val("");
        var channel = M.isEmpty(this.temporderdetail.channelcode) ? "self": this.temporderdetail.channelcode;
        var channelico = this.channelico[channel];
        this.context.ck_logo.attr("class", channelico + " fl mr10");
        this.context.ck_guestname.children("span").html(this.temporderdetail.guestname);
        if (!M.isEmpty(guestlist[0]['levelname']) && this.plugin.memberstatus == 1) {
            this.context.ck_guestname.children("i[tag=memberremark]").attr("title", guestlist[0]['levelname']).show();
        } else {
            this.context.ck_guestname.children("i[tag=memberremark]").hide();
        }
        if (!M.isEmpty(this.temporderdetail.idnum)) {
            this.context.ck_info.children().find("div[class=select-input]").parent().css("display", "none");
            this.context.checkin.children().find("p[tag=idnuminfo]").html(this.typename[this.temporderdetail.idtype] + '：' + this.temporderdetail.idnum);
        } else {
            this.context.checkin.children().find("p[tag=idnuminfo]").html('');
        }
        this.context.checkin_idtype.val(this.temporderdetail.idtype);
        this.context.checkin_idnum.val(this.temporderdetail.idnum);
        var phonedesc = this.temporderdetail.phone;
        if (!M.isEmpty(this.temporderdetail.cityname)) {
            phonedesc += '<tt>(' + this.temporderdetail.cityname + ')</tt>'
        }
        this.context.ck_phone.html(phonedesc);
        if (!M.isEmpty(this.temporderdetail.remark)) {
            this.context.ck_remark.val(this.temporderdetail.remark);
        } else {
            M.emptyVal(this.context.ck_remark);
        }
        var roomrate = this.context.ck_info.children("li[tag=orderinfo]").children().find("div[tag=roomrateform]");
        var payedtotal = parseInt(account.payedtotal) + parseInt(account.deposit);
        var payedmsg = '已收款：<span>￥' + payedtotal + '</span>';
        if (!M.isEmpty(account.deposit) && account.deposit > 0) {
            payedmsg += '(含押金￥' + account.deposit + ')';
        }
        roomrate.children("div[tag=haspay]").html(payedmsg);
        var ordertotal = parseInt(account.consumetotal) + parseInt(orderset.totalprice);
        var ordermsg = '总费用：<span>￥' + ordertotal + '</span> (房费￥' + orderset.totalprice;
        if (!M.isEmpty(account.consumetotal) && account.consumetotal > 0) {
            ordermsg += '，其它消费￥' + account.consumetotal + ')';
        } else {
            ordermsg += ')';
        }
        roomrate.children("div[tag=totalprice]").html(ordermsg);
        var needpaytotal = ordertotal - payedtotal;
        roomrate.children("div[tag=needpay]").children("span").html('￥' + needpaytotal);
        var payform = this.context.ck_info.children("li[tag=orderinfo]").children().find("div[tag=payform]");
        if (M.isEmpty(orderset.realdeposit)) {
            orderset.realdeposit = 0;
        }
        payform.children("div[tag=deposit]").children("input[name=deposit]").val('0');
        var drop_deposit = payform.children("div[tag=deposit]").children("div[t=deposit]").attr("value", "cash");;
        this.droplist.checkin.deposit = M.DropdownList(drop_deposit, null, {});
        payform.children("div[tag=roomrate]").children("input[name=roomrate]").val(0);
        var drop_roomrate = payform.children("div[tag=roomrate]").children("div[t=roomrate]").attr("value", "cash");
        this.droplist.checkin.roomrate = M.DropdownList(drop_roomrate, null, {});
        var idcard_tpl = this.context.ck_info.children("li[tag=idcard]").children("div").children("div[t=idcardform]");
        if (idcard_tpl.length > 0) {
            idcard_tpl.attr("value", this.temporderdetail.idtype);
            this.context.ck_info.children("li[tag=idcard]").children("div").children("input").val(this.temporderdetail.idnum);
            this.droplist.order.idcard = M.DropdownList(idcard_tpl, null, {});
            this.context.ck_info.children("li[tag=idcard]").children("div").children("input[name=guestname]").val(guestlist[0].guestname);
            this.context.ck_info.children("li[tag=idcard]").children("div").children("input[name=phone]").val(guestlist[0].phone);
            this.context.ck_info.children("li[tag=idcard]").children("div").children("input[name=idcard]").val(guestlist[0].idnum);
            if (guestlist.length > 1) {
                this.context.ck_info.children("li[tag=idcard]").children("div").find("a[tag=multiguest]").html('<i class="count">' + guestlist.length + '</i>');
            } else {
                this.context.ck_info.children("li[tag=idcard]").children("div").find("a[tag=multiguest]").html('');
            }
        }
        this.multiguest = guestlist;
        this.context.ck_info.children("li[tag=orderdesc]").children("div").children("div[tag=order]").remove();
        if (this.temporderdetail.bookallroom == 1) {
            var html = '<b class="tprice">订单总额：<span>¥' + orderset.totalprice + '</span></b>';
            var o = orders[0];
            var fromdate = o.arrivedate;
            var fromtime = fromdate.substring(5, fromdate.length).replace("-", "/");
            var odesc = '<span style="color:red">包场</span>，' + fromtime + "入住, " + o.nights + "晚" + ", ¥" + orderset.totalprice;
            html += '<div tag="order">' + odesc + '</div>';
            this.context.ck_info.children("li[tag=orderdesc]").children("div").html(html);
        } else {
            if (!M.isEmpty(orders)) {
                var html = '<b class="tprice">订单总额：<span>¥' + orderset.totalprice + '</span></b>';
                for (var i = 0; i < orders.length; i++) {
                    var o = orders[i];
                    var fromdate = o.arrivedate;
                    var fromtime = fromdate.substring(5, fromdate.length).replace("-", "/");
                    var odesc = o.roomname + ", " + fromtime + "入住, " + o.nights + "晚" + ", ¥" + o.totalprice;
                    html += '<div tag="order" title="' + odesc + '">' + odesc + '</div>'
                }
                this.context.ck_info.children("li[tag=orderdesc]").children("div").html(html);
            }
        }
        if (orderset.discount > 0) {
            if (this.context.ck_info.children("li[tag=orderdesc]").children("div").find('i[tag=discount]').length > 0) {
                this.context.ck_info.children("li[tag=orderdesc]").children("div").find('i[tag=discount]').html(orderset.discount + '折');
            } else {
                this.context.ck_info.children("li[tag=orderdesc]").children("div").append($.tmpl(this.tpl_i_discount, orderset));
            }
        }
        this._closepopup();
        M.Popup(this.context.checkin, {
            "hideclass": "modal view fade",
            "showclass": "modal view fade in"
        });
    },
    checkin: function(ele) {
        this.context.syt.css("display", "none");
        var payform = this.context.ck_info.children("li[tag=orderinfo]").children().find("div[tag=payform]");
        var roompaymoney = payform.children("div[tag=roomrate]").children("input[name=roomrate]").val();
        var payformmoney = payform.children("div[tag=deposit]").children("input[name=deposit]").val();
        var oid = this.context.e_ordercell.attr("oid");
        if (M.isEmpty(oid)) {
            return;
        }
        oid = parseInt(oid);
        var roomid = this.context.e_ordercell.attr("rid");
        var roomid = M.isEmpty(roomid) ? "": roomid;
        var roomname = "";
        var idnum = '';
        var idtype = '';
        var payform = this.context.ck_info.children("li[tag=orderinfo]").children().find("div[tag=payform]");
        var roomrate = payform.children("div[tag=roomrate]").children("input[name=roomrate]").val();
        var rm_paytype = this.droplist.checkin.roomrate._getval();
        var deposit = payform.children("div[tag=deposit]").children("input[name=deposit]").val();
        var dt_paytype = this.droplist.checkin.deposit._getval();
        if (isNaN(roomrate)) {
            alert('房费金额输入格式不正确');
            return;
        }
        if (M.isEmpty(this.plugin.deposit)) {
            deposit = 0;
            dt_paytype = rm_paytype;
        } else {
            if (isNaN(deposit)) {
                alert('押金金额输入格式不正确');
                return;
            }
        }
        var remark = M.getVal(this.context.ck_remark);
        var appendmoney = M.getVal(this.context.ck_appendmoney);
        var paystatus = this.temporderdetail.paystatus;
        var setid = this.context.e_ordercell.attr("setid");
        var btn = this.context.checkin.children(".modal-footer").children("a[tag=checkin]");
        if (!this.req_before(btn)) {
            return;
        }
        var data = {
            "orderid": oid,
            "setid": setid,
            "roomid": roomid,
            "roomname": roomname,
            "remark": remark,
            "idnum": idnum
        };
        var guestlist = this.multiguest;
        var idcard_tpl = this.context.ck_info.children("li[tag=idcard]").children("div");
        data['guestname'] = idcard_tpl.children("input[name=guestname]").val();
        data['phone'] = M.getVal(idcard_tpl.children("input[name=phone]"));
        data['idnum'] = idcard_tpl.children("input[name=idcard]").val();
        data['idtype'] = idcard_tpl.children("div[t=idcardform]").children("span").attr("value");
        var member = this._ismember(data['phone']);
        data['levelid'] = member.levelid;
        data['levelname'] = member.levelname;
        data.guestlength = 1;
        if (this.plugin.idcard == 0) {
            data['guestname'] = guestlist[0].guestname;
            data['phone'] = guestlist[0].phone;
            data['idnum'] = guestlist[0].idnum;
            data['idtype'] = guestlist[0].idtype;
        }
        data['nation'] = guestlist[0].nation;
        data['sex'] = guestlist[0].sex;
        data['address'] = guestlist[0].address;
        if (guestlist.length > 1) {
            for (var i = 1; i < guestlist.length; i++) {
                var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                if (!M.isEmpty(idnum) && reg.test(guest.idnum) === false) {
                    alert("请输入正确的身份证号");
                    return;
                }
                var guest = guestlist[i];
                data['guestname' + i] = guest.guestname;
                data['phone' + i] = guest.phone;
                data['idtype' + i] = guest.idtype;
                data['idnum' + i] = guest.idnum;
                data['nation' + i] = guest.nation;
                data['levelid' + i] = guest.levelid;
                data['levelname' + i] = guest.levelname;
                data['sex' + i] = guest.sex;
                data['address' + i] = guest.address;
            }
            data.guestlength = guestlist.length;
        }
        data.appendmoney = roomrate;
        data.rm_paytype = rm_paytype;
        data.deposit = deposit;
        data.dt_paytype = dt_paytype;
        M._getjson("/Book/checkin/", data, this.checkin_finished.toEventHandler(this));
    },
    checkin_finished: function(d) {
        if (d.status == "success") {
            d.orderlist = d.data;
            this.checkincallback.call(this, d);
            var items = d.data;
            var payname = d.payname;
            var action = d.req.a;
            payname.action = action;
            payname.a = "getpayinfo";
            this._closepopup();
            this.orderdetail = {
                "a": action,
                "items": items,
                "paydetail": payname
            };
            this.cashier();
            if (this.printset.checkin == 1) {
                this.context.printform.attr("operate", "checkin").attr("unqid", d.orderunqid);
                this.print();
            }
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        var btn = this.context.checkin.children(".modal-footer").children("a[tag=checkin]");
        this.req_end(btn);
    },
    checkinprint: function() {
        var oid = this.context.checkinoption.attr("oid");
        var setid = this.context.checkinoption.attr("setid");
        var uniqid = this.context.checkinoption.attr("uniqid");
        this.context.printform.attr("operate", "checkin").attr("unqid", uniqid);
        this.printcheckinout();
    },
    printcheckinout: function() {
        var operate = this.context.printform.attr("operate");
        var unqid = this.context.printform.attr("unqid");
        var innid = this.innid;
        var cidstr = this.context.printform.attr("cidstr");
        if (M.isEmpty(cidstr)) {
            cidstr = '';
        }
        M.CloseLast();
        var href = "/Print/index?innid=" + innid + "&operate=" + operate + "&unqid=" + unqid + "&cidstr=" + cidstr;
        this.context.opennewurl.attr("href", href);
        window.open(href);
    },
    _constaynights: function(tdele) {
        var datehave = tdele.children(".date-have");
        var n = datehave.attr("n");
        var nights = parseInt(n);
        var cols = tdele.attr("idx");
        var row = tdele.parent().attr("i");
        row = parseInt(row);
        row += nights;
        var target = this._getpickercell(row, cols);
        var days = 0;
        for (var j = 0; j < this.constaynights; j++) {
            var dateday = target.children(".date-day");
            if (dateday.length <= 0) {
                break;
            }
            days++;
            target = target.parent().next().children("td[idx=" + cols + "]");
        }
        return {
            "nights": nights,
            "days": days
        };
    },
    doeditcheckingroup: function(data, innid) {
        if (!M.isEmpty(innid)) {
            this.innid = innid;
        }
        this.context.c_guestname.children("span").html("");
        this.context.c_guestname.children("a").hide();
        this.context.c_phone.html("");
        this.context.c_remark.html("");
        this.context.c_needcar.html("");
        this.context.c_checkoutbtn.show().attr("action", "");;
        this.context.c_editbtn.show().attr("action", "");
        this.context.c_checkoutbtn.html("办理退房").hide();
        this.context.c_phone.parent().children("a[tag=sendmsg]").hide();
        this.context.checkin_idnuminfo.html("");
        var rid = data.rid;
        var gid = data.gid;
        var setid = data.setid;
        var innid = this.innid;
        this.context.checkinoption.children().find("a[tag=delete]").html('删除订单');
        this.context.c_hiddencell.attr("rid", rid).attr("gid", gid).attr("cid", gid).attr("setid", setid);
        this.roomtypepricelist = {};
        this.context.submitlayer.show();
        M._getjson("/Book/checkindetail", {
            "innid": innid,
            "gid": gid,
            "roomid": rid
        },
        this.checkindetail_finished.toEventHandler(this));
    },
    doeditdeletedcheckingroup: function(data) {
        this.context.c_guestname.children("span").html("");
        this.context.c_guestname.children("a").hide();
        this.context.c_phone.html("");
        this.context.c_remark.html("");
        this.context.c_needcar.html("");
        this.context.c_checkoutbtn.show().attr("action", "");;
        this.context.c_editbtn.show().attr("action", "");
        this.context.c_checkoutbtn.html("办理退房").hide();
        this.context.c_phone.parent().children("a[tag=sendmsg]").hide();
        this.context.checkin_idnuminfo.html("");
        var rid = data.rid;
        var gid = data.gid;
        var setid = data.setid;
        var innid = this.innid;
        this.context.checkinoption.children().find("a[tag=delete]").html('删除订单');
        this.context.c_hiddencell.attr("rid", rid).attr("gid", gid).attr("setid", setid);
        this.context.submitlayer.show();
        M._getjson("/Book/getdeletedcheckindetail", {
            "innid": innid,
            "gid": gid,
            "roomid": rid,
            "op": "getalldeleteorder"
        },
        this.checkindetail_finished.toEventHandler(this));
    },
    constayprice_finished: function(d) {
        if (d.status == "success") {
            if (!M.isEmpty(d.pricelist)) {
                var prices = this._formatpricesource(d.pricelist);
                var days = d.req.days;
                var fromdate = d.req.fromdate;
                var fromtime = M.strtotimeSetDefaultHour(fromdate);
                var tpl_staydays = '<label class="transverse-check"><input tag="addnight" name="addnight" value="{value}" price="{price}" type="radio">{index}晚</label>';
                var html = '续住几晚：';
                var p = 0;
                for (var i = 0; i < days; i++) {
                    var dt = this.timeformat(fromtime, "Y-m-d");
                    p += parseInt(prices[dt]);
                    html += tpl_staydays.replace("{index}", i + 1).replace("{value}", i + 1).replace("{price}", p);
                    fromtime.setDate(fromtime.getDate() + 1);
                }
                this.context.c_staynight.html(html);
            }
        }
    },
    checkindetail_finished: function(d) {
        this.context.submitlayer.hide();
        var c = d.d;
        if (d.status == "success") {
            this.temporderdetail = {};
            this.tempcheckdetail = c;
            var h_discount = c.checkinset.discount;
            if (h_discount > 0) {
                c.checkinset.discount = h_discount / 10;
                this.tempcheckdetail = c;
            }
            this.bookallroom = c.bookallroom;
            var orderset = c.checkinset;
            var uniqid = c.orderuniqid;
            var op = d.req.op;
            var orders = orderset.orders;
            if (!M.isEmpty(op) && op == 'getalldeleteorder') {
                for (var i = 0; i < orders.length; i++) {
                    if (orders[i].status == 1) {
                        M.confirmmessage('该订单为关联订单，暂不能查看和修改，请选择其它的子订单尝试。');
                        return;
                    }
                }
            }
            this.context.c_hiddencell.attr("rid", c.roomid);
            this.context.multiguestform.attr("uniqid", uniqid).attr("orderstatus", "checkin");
            var channel = M.isEmpty(c.channelcode) ? "": c.channelcode;
            var channelico = this.channelico[channel];
            if (M.isEmpty(channelico)) {
                this.context.c_logo.attr("class", "ico-custom fl mr10").html(c.channelname);
            } else {
                this.context.c_logo.attr("class", channelico + " fl mr10").html("");
            }
            if (!M.isEmpty(c.idnum)) {
                this.context.checkin_idnuminfo.html(this.typename[c.idtype] + '：' + c.idnum);
            }
            this.context.c_guestname.children("a[tag=guesttotal]").hide();
            this.context.c_guestname.children("span").html(c.guestname);
            if (d.d.guestlist.length > 1) {
                this.context.c_guestname.children("a[tag=guesttotal]").html(d.d.guestlist.length).show();
            }
            var guestlist = d.d.guestlist;
            if (!M.isEmpty(guestlist[0]['levelname']) && this.plugin.memberstatus == 1) {
                this.context.c_guestname.children("i[tag=memberremark]").attr("title", guestlist[0]['levelname']).show();
            } else {
                this.context.c_guestname.children("i[tag=memberremark]").hide();
            }
            var phonedesc = c.phone;
            if (!M.isEmpty(c.cityname)) {
                phonedesc += '<tt>(' + c.cityname + ')</tt>'
            }
            if (M.isEmpty(phonedesc) || (!M.isEmpty(d.orderstatus) && d.orderstatus == 'delete')) {
                this.context.c_phone.parent().children("a[tag=sendmsg]").hide();
            } else {
                this.context.c_phone.parent().children("a[tag=sendmsg]").show();
            }
            this.context.c_phone.html(phonedesc);
            var remark2 = "";
            if (!M.isEmpty(c.remark2)) {
                var pos = c.remark2.indexOf("订单总额");
                var rep = "";
                if (pos < 0) {
                    rep += "订单总额￥" + orderset.totalprice + "，";
                }
                remark2 = '<p class="pl20"><span class="ico-related16 minus20"></span>' + c.remark2.replace("\n", rep).replace(/‖/g, '<br/>').replace(':', ':<br/>') + "</p>";
            }
            this.context.c_remark.show().html(remark2);
            var remark = M.isEmpty(c.remark) ? "": '<p class="pl20"><span class="ico-remark16 minus20"></span>备注：' + c.remark + "</p>";
            this.context.c_remark.parent().children("li[tag=remark2]").html(remark);
            this._showremind(this.context.c_needcar, c, c.remindlist, 'checkined');
            this.context.c_hiddencell.attr("setid", c.checkinsetid);
            var date = M.strtotimeSetDefaultHour(c.checkindate);
            var datestr = this.timeformat(date, "m月d日");
            var arrtime = M.isEmpty(c.arrivetime) ? "": c.arrivetime;
            var pricedesc = "￥" + c.totalprice;
            var account = c.account;
            var paddingstyle = '';
            if ((!M.isEmpty(account.cashiertotal) && account.cashiertotal > 0) || account.payedtotal > 0) {
                paddingstyle = 'style="padding-right:21px;"';
            }
            if (c.paystatus == 3) {
                if (M.isEmpty(account.payedtotal) || account.payedtotal == 0) {
                    pricedesc += '<b ' + paddingstyle + '>已担保</b>';
                    pricedesc += '<b >已收款 ¥' + account.payedtotal + '<i class="ico-info" style="display:none" tag="account" id="info-price"></i></b>';
                    if (account.deposit != 0) {
                        pricedesc += '<b ' + paddingstyle + '>押金 ¥' + account.deposit + '</b>';
                    }
                } else {
                    pricedesc += '<b ' + paddingstyle + '>已担保</b>';
                    pricedesc += '<b>已收款 ¥' + account.payedtotal + '<i class="ico-info" style="display:none" tag="account" id="info-price"></i></b>';
                    if (account.deposit != 0) {
                        pricedesc += '<b ' + paddingstyle + '>押金 ¥' + account.deposit + '</b>';
                    }
                }
            } else {
                pricedesc += '<b>已收款 ¥' + account.payedtotal + '<i class="ico-info" style="display:none" tag="account" id="info-price"></i></b>';
                if (!M.isEmpty(account.deposit)) {
                    pricedesc += '<b ' + paddingstyle + '>押金 ¥' + account.deposit + '</b>';
                }
            }
            if (!M.isEmpty(account.consumetotal) && account.consumetotal > 0) {
                pricedesc += '<b >其它消费 ¥' + account.consumetotal + '<i tag="consume" style="display:none" class="ico-info" style="" title=""></i></b>';
            }
            this.context.c_info.children("span[tag=totalprice]").html(pricedesc);
            this.memberstatus = 0;
            if (orderset.discount > 0) {
                orderset.discount = this._resetorderdiscount(orders);
                this.context.c_info.children("span[tag=totalprice]").append($.tmpl(this.tpl_i_discount, orderset));
                this.memberstatus = 1;
                this.tempcheckdetail.checkinset.discount = orderset.discount;
            }
            if (!M.isEmpty(account.consume)) {
                var consumelist = account.consume;
                var consumemsg = '';
                for (var i = 0; i < consumelist.length; i++) {
                    consumemsg += '<p>' + consumelist[i].title + '<p>';
                }
                var tpl_consume = this.context.c_info.children("span[tag=totalprice]").children("b").children("i[tag=consume]");
                tpl_consume.show().attr("title", '').tooltip({
                    position: {
                        my: "left+15 top+20",
                        at: "left bottom"
                    },
                    track: 1,
                    content: consumemsg,
                    show: {
                        duration: 100
                    }
                });
            }
            var tipmsg = '';
            if (!M.isEmpty(account.appendmoney)) {
                var appendmoney = account.appendmoney;
                for (var i = 0; i < appendmoney.length; i++) {
                    if (appendmoney[i].amount != 0) {
                        var paystatusStr = '';
                        if ('shouyintai' == appendmoney[i].paytypecode) {
                            if ('1' == appendmoney[i].paystatus) {
                                paystatusStr = ' <span class="green">[已付款]</span>';
                            } else if ('2' == appendmoney[i].paystatus) {
                                paystatusStr = ' <span>[已关闭]</span>';
                            } else {
                                paystatusStr = ' <span class="red">[待付款]</span>';
                            }
                        }
                        tipmsg += '<p>' + appendmoney[i].msg + paystatusStr + '<p>';
                    }
                }
            }
            if (tipmsg != '') {
                var tip = this.context.c_info.children("span[tag=totalprice]").children("b").children("i[tag=account]");
                tip.show().attr("title", '').tooltip({
                    position: {
                        my: "left+15 top+20",
                        at: "left bottom"
                    },
                    track: 1,
                    content: tipmsg,
                    show: {
                        duration: 100
                    }
                });
            }
            var checkinmsg = '<span style="color:blue">[已入住]</span>';
            if (c.groupstatus == 2) {
                checkinmsg = '<span style="color:blue">[已退房]</span>';
            }
            this.context.checkinoption.attr('checktype', '已入住');
            if (c.groupstatus == 2) {
                this.context.checkinoption.attr('checktype', '已退房');
            }
            this.context.c_info.children("h2[tag=roomname]").html('<span class="ico-roomname16"></span>' + c.roomname + '(' + c.roomtypename + ')');
            this.context.c_info.children("p[tag=arrivetime]").html('<span class="ico-date16"></span>' + c.checkintimestr + "入住" + checkinmsg);
            var enddate = M.strtotime(c.enddate);
            this.context.c_info.children("p[tag=nights]").html('<span class="ico-night16"></span>' + this.timeformat(enddate, "m月d日") + "退房" + "，住" + c.nights + "晚");
            if (!M.isEmpty(c.orderguidattr) && !M.isEmpty(c.orderguidattr.attnid) && c.orderguidattr.attnid != 0) {
                this.context.c_info.children("p[tag=attn]").show().html('<span class="ico-achievement16"></span>业绩归属：' + c.orderguidattr.attnname);
            } else {
                this.context.c_info.children("p[tag=attn]").hide();
            }
            if (this.userauth.logvisit == 1) {
                this.context.checkinoption.children().children("a[tag=showlog]").show();
            } else {
                this.context.checkinoption.children().children("a[tag=showlog]").hide();
            }
            var needcar = c.needcar2;
            var target = this.context.checkinoption.children("div[tag=operatelist]");
            if (!M.isEmpty(d.orderstatus) && d.orderstatus == 'delete') {
                target.children("a[tag=delete]").hide();
                target.children("a[tag=edit]").hide();
                target.children("a[tag=checkout]").hide();
                target.children("a[tag=editdeleteorder]").show();
                target.children("span[tag=hasdelete]").show();
                this.context.c_checkoutbtn.hide();
                this.context.checkinoption.children('div').children('a[tag=print]').hide();
                if (this.userauth.orderupdate != 1) {
                    target.children("a[tag=editdeleteorder]").hide();
                }
            } else {
                target.children("a[tag=delete]").show();
                target.children("a[tag=edit]").show();
                target.children("a[tag=editdeleteorder]").hide();
                target.children("span[tag=hasdelete]").hide();
                if (c.cancheckout == "1" && c.groupstatus == "1") {
                    this.context.c_checkoutbtn.attr("action", "checkout");
                    this.context.c_checkoutbtn.show();
                } else {
                    this.context.c_checkoutbtn.attr("action", "");
                    this.context.c_checkoutbtn.hide();
                }
                if (this.printset.checkout == 1 || this.printset.checkin == 1) {
                    this.context.checkinoption.children('div').children('a[tag=print]').css('display', "block").attr('title', '打印');
                }
                if (this.userauth.orderupdate != 1) {
                    target.children("a[tag=edit]").hide();
                }
                if (this.userauth.orderdelete != 1) {
                    target.children("a[tag=delete]").hide();
                }
                if (this.userauth.checkinandcheckout != 1) {
                    target.children("a[tag=checkout]").hide();
                }
                if (orderset.groupstatus == 2 && this.userauth.ordercheckoutdeledit == 1) {
                    target.children("a[tag=edit]").hide();
                    target.children("a[tag=delete]").hide();
                }
            }
            if (c.bookallroom == 1) {
                target.children('a').attr('bookallroom', 1);
            } else {
                target.children('a').attr('bookallroom', 0);
            }
            this.context.checkinoption.attr('cid', c.ogid);
            this.context.checkinoption.attr("oid", c.orderid);
            this.context.checkinoption.attr("setid", c.checkinsetid);
            this.context.checkinoption.attr("uniqid", c.orderuniqid);
            this.context.checkinoption.attr("nights", c.nights);
            if (M.isEmpty(c.roomlocklist)) {
                this.context.checkinoption.find('a[tag=setpassword]').hide();
            } else {
                this.context.checkinoption.find('a[tag=setpassword]').show();
                if (! (this.printset.checkin == 1 || this.printset.checkout == 1)) {
                    this.context.checkinoption.find('a[tag=setpassword]').css('right', '55px');
                }
            }
            M.Popup(this.context.checkinoption, {
                "hideclass": "bootbox modal view fade",
                "showclass": "bootbox modal view fade in"
            });
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
    },
    addnight_click: function() {
        var price = this.context.c_staynight.find("input[name=addnight]:checked").attr("price");
        if (M.isEmpty(price)) {
            price = "";
        }
        if (isNaN(price)) {
            price = "";
        }
        this.context.c_naddprice.html('¥' + price);
        this.context.c_stayaddprice.val(price);
    },
    doconstay: function() {
        var display = this.context.c_constay.css("display");
        if (display == "none") {
            this.context.c_staynight.find("input[name=addnight]:first").attr("checked", "checked");
            this.addnight_click();
            this.context.c_constay.show();
            this.context.c_checkoutbtn.hide();
            this.context.c_editbtn.hide();
        } else {
            var gid = this.context.c_hiddencell.attr("gid");
            var rid = this.context.c_hiddencell.attr("rid");
            var days = this.context.c_staynight.find("input[name=addnight]:checked").val();
            var price = M.getVal(this.context.c_stayaddprice);
            if (M.isEmpty(gid) || M.isEmpty(rid) || M.isEmpty(days)) {
                return;
            }
            if (isNaN(days)) {
                days = 1;
            }
            if (isNaN(price)) {
                alert("加收房费输入无效");
                return;
            }
            var btn = this.context.checkinoption.children(".modal-footer").children("a[tag=constay]");
            if (!this.req_before(btn)) {
                return;
            }
            M._getjson("ajax2.php", {
                "a": "constay",
                "gid": gid,
                "rid": rid,
                "days": days,
                "price": price
            },
            this.constay_finished.toEventHandler(this));
        }
    },
    constay_finished: function(d) {
        if (d.status == "success") {
            var cols = this.context.c_hiddencell.attr("cols");
            var row = this.context.c_hiddencell.attr("row");
            var detail = d.data;
            this._clearitem(row, cols);
            var itemdate = this._getitemdate();
            var item = d.data;
            item.type = "checkedin";
            this._showitem(item, itemdate);
            this._closepopup();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        var btn = this.context.checkinoption.children(".modal-footer").children("a[tag=constay]");
        this.req_end(btn);
    },
    _getCheckinAvailableNights: function(checkindate, nights, row, cols) {
        var target = this._getpickercell(row, cols);
        var nights = parseInt(nights);
        var checkindate = M.strtotime(checkindate);
        var timenow = this.getdatetime();
        var today = new Date(timenow.getFullYear(), timenow.getMonth(), timenow.getDate());
        var minNights = 1;
        var nohour = timenow.getHours();
        if (nohour > 6) {}
        var availablenights = 0;
        var maxnight = 0;
        var testele = target;
        var testoptions = "";
        for (var i = 0; i < nights; i++) {
            if (i + 1 >= minNights) {
                availablenights++;
                testoptions += '<option value="' + (i + 1) + '">' + (i + 1) + '晚</option>';
                maxnight = i + 1;
            }
            testele = testele.parent().next().children("[idx=" + cols + "]");
        }
        for (var i = nights; i < this.maxnights; i++) {
            if (testele.children(".date-day").length > 0) {
                availablenights++;
                testoptions += '<option value="' + (i + 1) + '">' + (i + 1) + '晚</option>';
                maxnight = i + 1;
            } else {
                break;
            }
            testele = testele.parent().next().children("[idx=" + cols + "]");
        }
        var enddate = new Date(checkindate.getFullYear(), checkindate.getMonth(), checkindate.getDate());
        enddate.setDate(enddate.getDate() + maxnight - 1);
        return {
            "nights": availablenights,
            "optionshtml": testoptions,
            "fromdate": checkindate,
            "enddate": enddate
        };
    },
    _getCheckOutAvailableNights: function(checkindate, nights, row, cols) {
        var target = this._getpickercell(row, cols);
        var hidedays = target.attr("hidedays");
        if (M.isEmpty(hidedays)) {
            hidedays = 0;
        } else {
            hidedays = parseInt(hidedays);
        }
        var nights = parseInt(nights);
        testoptions = "<option value='" + nights + "'>" + nights + "晚</option>";
        var checkindate = M.strtotime(checkindate);
        var enddate = new Date(checkindate.getFullYear(), checkindate.getMonth(), checkindate.getDate());
        enddate.setDate(enddate.getDate() + nights);
        return {
            "nights": nights,
            "optionshtml": testoptions,
            "fromdate": checkindate,
            "enddate": enddate
        };
    },
    doeditcheckin: function(hiddencell, type) {
        var detail = this.tempcheckdetail;
        var orderset = detail.checkinset;
        var orders = orderset.orders;
        var avgpricelist = orderset.avgpricestatus;
        var guestlist = detail.guestlist;
        if (detail.groupstatus == 1) {
            this.context.editcheck.attr("orderstatus", "checkin");
        } else {
            this.context.editcheck.attr("orderstatus", "checkout");
        }
        if (M.isEmpty(detail)) {
            return;
        }
        this._closepopup();
        this._clearcheckinform();
        var disable = false;
        var account = detail.account;
        var gid = hiddencell.attr("gid");
        var rid = hiddencell.attr("rid");
        var cols = hiddencell.attr("cols");
        var row = hiddencell.attr("row");
        hiddencell.attr("color", detail.style).attr("from", detail.from);
        var formlist = this.context.editcheck.children(".modal-body").find(".cntlist");
        var tpl_chanle = formlist.children("li[tag=channelcode]").children("div[id=droplist]").attr("value", detail.channelcode);
        this.droplist.checkin.dr_chanle = M.DropdownList(tpl_chanle, this.channel_change.toEventHandler(this), {});
        var roomrate = formlist.children("li[tag=paytype]").find("div[t=roomrate]").attr("value", "cash");
        this.droplist.checkin.paymentsdroplist = M.DropdownList(roomrate, null, {});
        if (M.isEmpty(account.pt_deposit)) {
            account.pt_deposit = 'cash';
        }
        var deposit_tpl = formlist.children("li[tag=paytype]").find("div[t=deposit]").attr("value", account.pt_deposit);
        this.droplist.checkin.depositBoxdroplist = M.DropdownList(deposit_tpl, null, {});
        formlist.children("li[tag=paytype]").find("input[name=deposit]").val('0');
        formlist.children("li[tag=paystatus]").children().find("div[t=account]").remove();
        var idcard_tpl = formlist.children("li[tag=idcard]").children("div").children("div[t=idcardform]");
        if (idcard_tpl.length > 0) {
            idcard_tpl.attr("value", detail.idtype);
            formlist.children("li[tag=idcard]").children().find("input[name=idcard]").val(detail.idnum);
            this.droplist.order.idcard = M.DropdownList(idcard_tpl, null, {});
        }
        formlist.children("li[tag=guestname]").find("input[type=text]").val(detail.guestname);
        if (!M.isEmpty(guestlist[0]['levelname']) && this.plugin.memberstatus == 1) {
            formlist.children("li[tag=guestname]").find("i[tag=memberremark]").show();
        } else {
            formlist.children("li[tag=guestname]").find("i[tag=memberremark]").hide();
        }
        formlist.children("li[tag=phone]").find("input[type=text]").val(detail.phone);
        formlist.children("li[tag=totalprice]").find("input[type=text]").val(detail.totalprice).attr("isfirst", "1");
        var needcarli = formlist.children("li[tag=ordercolor]");
        var needcarinput = needcarli.find("input[type=checkbox][tag=needcar2]").attr("checked", detail.needcar2 == "1");
        this.multiguest = detail.guestlist;
        if (this.multiguest.length == 0) {
            this.multiguest.length = 1;
        }
        if (this.multiguest.length > 1) {
            formlist.children("li[tag=idcard]").children().find("a[tag=multiguest]").html('<i class="count" tag="count">' + this.multiguest.length + '</i>');
        }
        var orderguidattr = detail.orderguidattr;
        if (!M.isEmpty(orderguidattr) && !M.isEmpty(orderguidattr.attnid) && orderguidattr.attnid != 0) {
            formlist.children("li[tag=ordercolor]").find("p[tag=showattn]").attr("value", orderguidattr.attnid).html(orderguidattr.attnname);
            if (orderguidattr.attnid != 0) {
                formlist.children("li[tag=ordercolor]").find("span[tag=showattn]").removeClass("circle-btn").addClass("circle-btn-green");
            }
        } else {
            formlist.children("li[tag=ordercolor]").find("p[tag=showattn]").attr("value", '').html('业绩归属');
        }
        var isdisable = orderset.groupstatus == "";
        formlist.children("li[tag=orderroomlist]").find("input[id=o_paystatus]").val(orderset.paystatus);
        if (orderset.paystatus == 3) {
            formlist.children("li[tag=orderroomlist]").find("input[id=o_paystatus]").attr("checked", true);
        }
        if (!M.isEmpty(detail.remark)) {
            formlist.children("li[tag=remark]").find("textarea").val(detail.remark);
        }
        var depositinput = formlist.children("li[tag=paystatus]").find("input[type=text][tag=deposit]").val(orderset.deposit);
        var hiddencell = this.context.editcheck.children(".modal-footer").find("input[type=hidden]");
        hiddencell.attr("gid", gid);
        hiddencell.attr("rid", rid);
        hiddencell.attr("row", row);
        hiddencell.attr("cols", cols);
        hiddencell.attr("color", detail.style);
        hiddencell.attr("setid", detail.checkinsetid).attr("orderfrom", detail.orderfrom);
        hiddencell.attr("needcar1", detail.needcar).attr("needcar2", detail.needcar2).attr("paystatus", detail.paystatus);
        this.context.editcheck.children().find("select[name=editcheckin_idtype]").val(detail.idtype);
        this.context.editcheck.children().find("input[name=editcheck_idnum]").val(detail.idnum);
        if (detail.needcar2 == 1) {
            this.context.ordercell.attr("needcar2", 1);
            formlist.children("li[tag=ordercolor]").find("input[name=needcar2]").parent().children('span').removeClass('circle-btn').addClass('circle-btn-green');
        } else {
            this.context.ordercell.attr("needcar2", 0);
        }
        if (detail.paystatus == 3) {
            this.context.c_paystatus.parent().children('span').removeClass('circle-btn').addClass('circle-btn-green');
        }
        this.avgpricestatus = {};
        if (detail.bookallroom == 1) {
            this.context.editcheckbody.children('li[tag=orderroomlist]').hide();
            this.context.editcheckbody.children('li[tag=blockbookinglist]').show();
        } else {
            this.context.editcheckbody.children('li[tag=orderroomlist]').show();
            this.context.editcheckbody.children('li[tag=blockbookinglist]').hide();
            var orderroomlist = this.context.editcheck.children(".modal-body").find(".cntlist").children("li[tag=orderroomlist]");
            var orderinfo = orderroomlist.children("div[tag=orderinfo]");
            var orderindex = 0;
            var tpl = orderroomlist.children("div[tag=order]:first");
            if (orders.length > 0) {
                var order = orders[0];
                var arrivedate = M.strtotime(order.checkindate);
                var dateoptions = this._generateorderdates(arrivedate);
                var firstorder = orderroomlist.children("div[tag=order]:first");
                firstorder.children("div[id=selectDay]").attr("value", order.checkindate).children("div[tag=checkindate]").html(dateoptions.options).attr("disabled", disable);
                firstorder.children("div[id=selectRoom]").attr("value", order.roomid).attr("roomid", order.roomid).children("span").attr("value", order.roomid).text(order.roomname);
                firstorder.children("div[id=selectNights]").attr("value", order.nights).attr("nights", order.nights).children("span").attr("value", order.nights).html(order.nights + '晚');
                firstorder.children("input[type=text][tag=price]").val(order.totalprice).attr('orgprice', order.orgprice).attr("disabled", disable).attr("isfirst", 1);
                firstorder.attr("i", orderindex);
                firstorder.attr("gid", order.id).attr("oid", order.id);
                this.droplist.order.dr_orderdate = M.DropdownList(firstorder.children("div[id=selectDay]"), this.orderdate_change.toEventHandler(this), {});
                this.avgpricestatus[orderindex] = avgpricelist[order.id];
                var fromdate = dateoptions.fromdate;
                var enddate_time = M.strtotime(dateoptions.enddate);
                enddate_time.setDate(enddate_time.getDate() + this.maxnights);
                var enddate = this.timeformat(enddate_time);
                var i = 0;
                this._getavailablerooms("editcheckin", order.checkindate, i, orderset.id, order.id);
                for (var j = 1; j < orders.length; j++) {
                    order = orders[j];
                    orderindex++;
                    arrivedate = M.strtotime(order.checkindate);
                    dateoptions = this._generateorderdates(arrivedate);
                    var ordertpl = tpl.clone(true);
                    ordertpl.insertBefore(orderinfo);
                    ordertpl.attr("i", orderindex);
                    ordertpl.attr("gid", order.id).attr("oid", order.id);
                    this.avgpricestatus[orderindex] = avgpricelist[order.id];
                    ordertpl.children("a[tag=removeroom]").show();
                    ordertpl.children("div[id=selectDay]").attr("value", order.arrivedate).children("div[tag=checkindate]").html(dateoptions.options).attr("disabled", disable);
                    ordertpl.children("div[id=selectRoom]").attr("value", order.roomid).attr("roomid", order.roomid).children("span").attr("value", order.roomid).text(order.roomname);
                    ordertpl.children("div[id=selectNights]").attr("value", order.nights).attr("nights", order.nights).children("span").attr("value", order.nights).html(order.nights + '晚');
                    ordertpl.children("input[type=text][tag=price]").val(order.totalprice).attr('orgprice', order.orgprice).attr("disabled", disable).attr("isfirst", 1);
                    this.droplist.checkin.dr_orderdate = M.DropdownList(ordertpl.children("div[id=selectDay]"), this.orderdate_change.toEventHandler(this), {});
                    var i = 0;
                    this._getavailablerooms("editcheckin", order.checkindate, orderindex, orderset.id, order.id);
                }
                orderinfo.attr("maxi", orderindex);
                this.orderroomtpl_change(orderroomlist);
            }
        }
        this._handleaccountdetail(account, orderset.totalprice);
        var colorfield = formlist.children("li[tag=ordercolor]").children("div[tag=color]");
        if (orderset.groupstatus == "1") {
            var coloritem = colorfield.find("div[tag=colorlist]").children("span[for=checkedin]").show();
            colorfield.find("div[tag=colorlist]").children("span[for=checkedout]").hide();
            if (M.isEmpty(orders[0].style)) this.setordercolor(coloritem);
        } else if (orderset.groupstatus == 2) {
            colorfield.find("div[tag=colorlist]").children("span[for=checkedin]").hide();
            var coloritem = colorfield.find("div[tag=colorlist]").children("span[for=checkedout]").show();
            if (M.isEmpty(orders[0].style)) this.setordercolor(coloritem);
        }
        colorfield.find("div[tag=colorlist]").css('width', "205px").children('span[val=oota]').remove();
        var style = orders[0].style;
        if (style == 'oota') {
            colorfield.find("div[tag=colorlist]").children("span[ison=1]").attr("ison", "").removeClass("checked");
            colorfield.children("span").attr("title", "").attr("class", "oota");
            colorfield.find("div[tag=colorlist]").css('width', "227px").children("span:first").before('<span title="直连订单" class="oota" val="oota" tag="color"></span>');
            style = 'oota';
        }
        var coloritem = colorfield.show().find("div[tag=colorlist]").children("span[val=" + style + "]");
        this.setordercolor(coloritem);
        var moneyinfo = this.context.editcheck.find("div[tag=paystatistics]");
        var payedtotal = parseInt(account.payedtotal) + parseInt(account.deposit);
        moneyinfo.find("a[tag=showfindetail]").attr("payed", payedtotal).html("&yen;" + payedtotal).attr("title", "").tooltip({
            position: {
                my: "left+15 top+20",
                at: "left bottom"
            },
            track: 1,
            content: "查看/修改已收款",
            show: {
                delay: 100
            },
            hide: false
        });;
        var needpay = parseInt(orderset.totalprice) - parseInt(payedtotal) + parseInt(account.consumetotal);
        if (account.consumetotal == 0) {
            moneyinfo.find("a[tag=showneedpaydetail]").removeClass('unpaid').addClass("unpaid_unclick");
            moneyinfo.find("a[tag=showneedpaydetail]").html("&yen;" + needpay).attr("title", "").tooltip({
                disabled: false
            });
            moneyinfo.find("a[tag=showneedpaydetail]").attr("title", "").tooltip({
                disabled: false
            });
        } else {
            moneyinfo.find("a[tag=showneedpaydetail]").removeClass('unpaid_unclick').addClass("unpaid");
            moneyinfo.find("a[tag=showneedpaydetail]").html("&yen;" + needpay).attr("title", "").tooltip({
                position: {
                    my: "left+15 top+20",
                    at: "left bottom"
                },
                track: 1,
                content: "查看/修改待收款",
                show: {
                    delay: 100
                },
                hide: false
            });
            moneyinfo.find("a[tag=showneedpaydetail]").attr("title", "").tooltip({
                position: {
                    my: "left+15 top+20",
                    at: "left bottom"
                },
                track: 1,
                content: "查看/修改待收款",
                show: {
                    delay: 100
                },
                hide: false
            });
        }
        if (detail.checkoutinfo.checkoutstatus == 1) {
            moneyinfo.find("a[tag=consumetotal]").attr("payed", account.consumetotal).html("&yen;" + account.consumetotal);
            moneyinfo.find("a[tag=showneedpaydetail]").parent().hide();
            if (account.consumetotal > 0) {
                moneyinfo.find("a[tag=consumetotal]").parent().show();
                moneyinfo.find("a[tag=consumetotal]").attr("title", "").tooltip({
                    position: {
                        my: "left+15 top+20",
                        at: "left bottom"
                    },
                    track: 1,
                    content: "查看/修改其它消费",
                    show: {
                        delay: 100
                    },
                    hide: false
                });
            } else {
                moneyinfo.find("a[tag=consumetotal]").parent().hide();
            }
            this.context.editcheck.find("li[tag=paytype]").css('min-height', '40px');
            this.orderstatus = 'checkout';
        } else {
            moneyinfo.find("a[tag=showneedpaydetail]").parent().show();
            moneyinfo.find("a[tag=consumetotal]").parent().hide();
            this.context.editcheck.find("li[tag=paytype]").css('min-height', '40px');
            this.orderstatus = 'checkin';
        }
        if (!M.isEmpty(detail.remindlist) || detail.needcar == 1 || detail.needcar2 == 1) {
            formlist.find('label[tag=remindlabel]').children('span').removeClass('circle-btn').addClass('circle-btn-green');
        } else {
            formlist.find('label[tag=remindlabel]').children('span').removeClass('circle-btn-green').addClass('circle-btn');
        }
        if (detail.groupstatus == 1) {
            this._create_remindtpl_li(detail, 'checkin');
        } else {
            this._create_remindtpl_li(detail, 'checkout');
        }
        if (detail.bookallroom == 1) {
            this.bookallroom = 1;
            this.context.editcheck.children('div:first').children('h3').html(this.txt_title.bookallroom);
            var blockbookinglist = this.context.editcheck.find('li[tag=blockbookinglist]');
            blockbookinglist.find('div[tag=totalprice]').children('input').val(orderset.totalprice);
            blockbookinglist.children('div').children('span').html('（共' + orders.length + '间房）');
            var data = {
                'fromdate': detail.checkindate,
                'innid': this.innid,
                'uniqid': detail.orderuniqid,
                'ordernights': detail.nights,
                'act': 'checkin'
            };
            M._getjson('/Book/getbookallroom', data, this.getbookallroom_callback.toEventHandler(this));
        } else {
            this.bookallroom = 0;
            this.context.editcheck.children('div:first').children('h3').html(this.txt_title.edit);
            this._orderdate_change(orderroomlist);
            M.Popup(this.context.editcheck, {
                "hideclass": "bootbox modal fade",
                "showclass": "bootbox modal fade in",
                "drag": this.dragorder.toEventHandler(this)
            });
        }
        if (detail.paystatus == 3) {
            this.context.c_paystatus.attr("checked", true);
        }
        formlist.children("li[tag=paytype]").children().find("div[tag=roomrateform]").children("span").text("收款：");
        var nights = this.context.checkinoption.attr("nights");
        this.context.editcheck.attr('nights', nights);
    },
    editcheckin_pricefinished: function(d) {
        if (d.status == "success") {
            if (!M.isEmpty(d.pricelist)) {
                if (!M.isEmpty(d.pricelist)) {
                    this.formatedateprice = this._formatpricesource(d.pricelist);
                    this.showcheckinprice();
                }
            }
        }
    },
    showcheckinprice: function() {
        var formlist = this.context.editcheck.children(".modal-body").find(".cntlist");
        var nightselect = formlist.children("li[tag=nights]").find("select");
        var totalpriceinput = formlist.children("li[tag=totalprice]").find("input[type=text]:first");
        var hiddencell = this.context.editcheck.children(".modal-footer").find("input[type=hidden]");
        if (M.isEmpty(this.formatedateprice)) {
            if (totalpriceinput.attr("isfirst") == "1") {
                totalpriceinput.attr("isfirst", "");
            } else {
                totalpriceinput.val(0);
            }
            return;
        }
        var n = M.getVal(nightselect);
        var time = hiddencell.attr("begintime");
        var arrivedate = M.strtotimeSetDefaultHour(time);
        var total = 0;
        for (var i = 0; i < n; i++) {
            var d = this.timeformat(arrivedate);
            var p = this.formatedateprice[d];
            if (isNaN(p)) p = 0;
            p = parseInt(p);
            total += p;
            arrivedate.setDate(arrivedate.getDate() + 1);
        }
        if (totalpriceinput.attr("isfirst") == "1") {
            totalpriceinput.attr("isfirst", "");
        } else {
            totalpriceinput.val(total);
        }
    },
    editcheckin_finished: function(d) {
        if (d.status == "success") {
            var row = this.context.c_hiddencell.attr("row");
            var cols = this.context.c_hiddencell.attr("cols");
            var detail = d.data;
            this._clearitem(row, cols);
            var itemdate = this._getitemdate();
            var item = d.data;
            item.type = "checkedin";
            this._showitem(item, itemdate);
            this._closepopup();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        var btn = this.context.checkinoption.children(".modal-footer").children("a[tag=edit]");
        this.req_end(btn);
    },
    _getselectorders: function(length) {
        var tpl = this.context.checkoutform.children().find("li[tag=orderdetail]");
        var tpl_order = tpl.children().find("div.selected");
        var tpl_checkout = tpl.children().find("div.checkout");
        var order = [];
        tpl_order.each(function() {
            var cid = $(this).attr("cid");
            order.push(cid);
        });
        tpl_checkout.each(function() {
            var ischeckout = $(this).attr("ischeckout");
            if (ischeckout == 0) {
                var cid = $(this).attr("cid");
                order.push(cid);
            }
        });
        if (length == 1) {
            var cid = tpl.children().find("div[tag=orderselect]").attr("cid");
            order.push(cid);
        }
        return order;
    },
    _checkout_dealmoney: function() {
        var o = this.tempcheckdetail;
        var account = o.account;
        var realpricedetail = o.checkoutinfo.realpricedetail;
        var orderlist = this._getselectorders(o.checkoutinfo.orderinfo.length);
        var split = 0;
        var checkoutlength = this.context.checkoutform.children().find("li[tag=orderdetail]").children().find("div.checkout[ischeckout=1]").length;
        var orderlength = o.checkoutinfo.orderinfo.length;
        if (orderlength == (orderlist.length + checkoutlength) || o.checkoutinfo.orderinfo.length == 1) {
            this.context.ot_body.children('li[tag=paydetail]').children().find("span[tag=splittip]").hide();
        } else {
            split = 1;
            this.context.ot_body.children('li[tag=paydetail]').children().find("span[tag=splittip]").show();
        }
        var payedprice = 0,
        deposit = 0,
        allprice = 0;
        for (var i in realpricedetail) {
            var cid = realpricedetail[i].id;
            var ischeckout = realpricedetail[i].ischeckout;
            var has = 0;
            for (var k = 0; k < orderlist.length; k++) {
                var o_cid = orderlist[k];
                if (o_cid == cid) {
                    has = 1;
                }
            }
            if (has == 1) {
                if (ischeckout != 1) {
                    allprice += parseInt(realpricedetail[i].realtotalprice);
                }
            }
        }
        this.context.ot_body.children('li[tag=orderdetail]').children("div").children("b").children("span").html('¥' + allprice);
        var deposit = account.deposit;
        var payedmoney = account.availabletotal;
        var payedall = payedmoney * 1
        var paymoney_tpl = this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("input[name=paymoney]");
        var deposit_tpl = this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=depositform]").children("input[name=returndeposit]");
        if (split == 0) {
            payedall += deposit * 1;
            deposit_tpl.val('0');
            paymoney_tpl.val('0');
        }
        deposit_tpl.val('0');
        paymoney_tpl.val('0');
        var paydetail = this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=padeddetail]");
        this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("input[name=paymoney]").val("");
        this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("input[name=paymoney]").attr('placeholder', '金额');
        if (allprice >= payedall) {
            this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").find("div[tag=option][value=shouyintai]").show();
            var needappend = allprice - payedall;
            this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("span").html('收款');
            this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("div").find("div[value=shouyintai]").show();
            paymoney_tpl.attr("t", "needappend");
            paydetail.children("div").children("b[tag=needpay]").children("span[tag=tip]").html('需补交房费：');
            paydetail.children("div").children("b[tag=needpay]").children("span[tag=amount]").html('¥' + needappend);
            if (needappend == 0) {
                paymoney_tpl.val(0);
            }
        } else {
            var returnmoeny = payedall - allprice;
            var msg = '需退还房费及押金共计：';
            if (split == 1) {
                msg = '房费结余：';
                this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("span").html('补交房费');
                this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").find("div[tag=option][value=shouyintai]").show();
                paymoney_tpl.attr("t", "needappend");
            } else {
                if (returnmoeny > deposit) {
                    returnappenmoney = returnmoeny - deposit;
                } else {
                    deposit = returnmoeny;
                    returnappenmoney = 0;
                    paymoney_tpl.val(returnappenmoney);
                }
                deposit_tpl.val(deposit);
                this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("span").html('退还房费');
                this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("div").find("div[value=shouyintai]").hide();
                paymoney_tpl.attr("t", "needreturn");
            }
            paydetail.children("div").children("b[tag=needpay]").children("span[tag=tip]").html(msg);
            paydetail.children("div").children("b[tag=needpay]").children("span[tag=amount]").html('¥' + returnmoeny);
            if (returnmoeny == 0) {
                paymoney_tpl.val(0);
            }
        }
        var payedtip = '';
        var deposttip = '';
        if (orderlength == 1) {
            payedtip = "已收房费";
            deposttip = "已收押金";
        } else {
            var checkoutlength = this.context.checkoutform.children().find("li[tag=orderdetail]").children().find("div.checkout").length;
            if (split == 1) {
                if (checkoutlength > 0) {
                    payedtip = "剩余可扣房费";
                    deposttip = "剩余押金";
                } else {
                    payedtip = "已收房费";
                    deposttip = "已收押金";
                }
            } else {
                if (checkoutlength > 0) {
                    payedtip = "剩余可扣房费";
                    deposttip = "剩余押金";
                } else {
                    payedtip = "已收房费";
                    deposttip = "已收押金";
                }
            }
        }
        paydetail.children("div").children("b[tag=payed]").children("span[tag=tip]").html(payedtip);
        paydetail.children("div").children("b[tag=depost]").children("span[tag=tip]").html(deposttip);
        if (M.isEmpty(deposit)) {
            this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=depositform]").children("input[name=returndeposit]").val(0);
        } else {
            this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=depositform]").children("input[name=returndeposit]").val("");
            this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=depositform]").children("input[name=returndeposit]").attr('placeholder', '金额');
        }
    },
    docheckout: function() {
        var action = this.context.c_checkoutbtn.attr("action");
        var returnmoney = 0;
        if (action != "checkout") {
            return;
        }
        var gid = this.context.c_hiddencell.attr("gid");
        var rid = this.context.c_hiddencell.attr("rid");
        var setid = this.context.c_hiddencell.attr("setid");
        if (M.isEmpty(gid) || M.isEmpty(rid)) {
            return;
        }
        setid = M.isEmpty(setid) ? "": setid;
        var o = this.tempcheckdetail;
        var account = o.account;
        var checkoutinfo = o.checkoutinfo;
        var orderset = o.checkinset;
        var orders = orderset.orders;
        var guestlist = o.guestlist;
        if (!M.isEmpty(o.idnum)) {
            this.context.checkoutform.children().find("p[tag=idnuminfo]").text(this.typename[o.idtype] + '：' + o.idnum);
        } else {
            this.context.checkoutform.children().find("p[tag=idnuminfo]").text('');
        }
        if (!M.isEmpty(guestlist[0]['levelname']) && this.plugin.memberstatus == 1) {
            this.context.ot_guestname.children("i[tag=memberremark]").attr("title", guestlist[0]['levelname']).show();
        } else {
            this.context.ot_guestname.children("i[tag=memberremark]").hide();
        }
        this.context.ot_guestname.children("span").html(o.guestname);
        this.context.ot_guestname.children("a[tag=guesttotal]").html('1').hide();
        if (guestlist.length > 1) {
            this.context.ot_guestname.children("a[tag=guesttotal]").html(guestlist.length).show();
        }
        var phonedesc = o.phone;
        if (!M.isEmpty(o.cityname)) {
            phonedesc += '<tt>(' + o.cityname + ')</tt>';
        }
        this.context.ot_phone.html(phonedesc);
        var channel = M.isEmpty(o.channelcode) ? "": o.channelcode;
        var channelico = this.channelico[channel];
        if (M.isEmpty(channelico)) {
            this.context.ot_logo.attr("class", "ico-custom fl mr10").html(o.channelname);
        } else {
            this.context.ot_logo.attr("class", channelico + " fl mr10").html("");
        }
        var cid = this.context.c_hiddencell.attr("cid");
        var orderinfo = checkoutinfo.orderinfo;
        var infostr = '';
        var checkoutlength = 0;
        if (o.bookallroom != 1) {
            for (var i = 0; i < orderinfo.length; i++) {
                var style = "";
                var enddate = '';
                var ischeckout = '';
                var title = '';
                if (orderinfo.length > 1 && (cid == orderinfo[i].id || orderinfo[i].cancheckout == 1)) {
                    style = "selected";
                }
                if (orderinfo[i].groupstatus == 1) {
                    style = 'checkout';
                    checkoutlength++;
                    enddate = '[已退房]';
                }
                if ((orderinfo.length - i) == 1) {
                    style += ' last';
                }
                infostr += '<div title="' + title + '" ischeckout="' + orderinfo[i].ischeckout + '" class="' + style + '" cid="' + orderinfo[i].id + '" tag="orderselect">' + enddate + orderinfo[i].desc + ischeckout + '</div>';
            }
        } else {
            var realtotalprice = checkoutinfo.payinfo.totalprice;
            infostr += '<div  class=" last" tag="orderselect"><span style="color:red">包场</span>，' + o.checkintime + '入住，实住' + checkoutinfo.realpricedetail[0].realnights + '晚，¥' + realtotalprice + '</div>';
        }
        this.context.ot_body.children('li[tag=orderdetail]').children("div").children("div").remove();
        this.context.ot_body.children('li[tag=orderdetail]').children("div").children("b").children("span").html('¥' + checkoutinfo.payinfo.totalprice);
        this.context.ot_body.children('li[tag=orderdetail]').children("div").find('i[tag=discount]').remove();
        if (orderset.discount > 0) {
            this.context.ot_body.children('li[tag=orderdetail]').children("div").append($.tmpl(this.tpl_i_discount, orderset));
        }
        this.context.ot_body.children('li[tag=orderdetail]').children("div").append(infostr);
        var paydetail = this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=padeddetail]");
        var payedtotal = parseInt(account.payedtotal) + parseInt(account.deposit);
        var payedmsg = '已收款：<span>￥' + payedtotal + '</span>';
        if (!M.isEmpty(account.deposit) && account.deposit > 0) {
            payedmsg += '(含押金￥' + account.deposit + ')';
        }
        paydetail.children("div[tag=payed]").html(payedmsg);
        var ordertotal = parseInt(checkoutinfo.payinfo.totalprice) + parseInt(account.consumetotal);
        var ordermsg = '总费用：<span>￥' + ordertotal + '</span> (房费￥' + checkoutinfo.payinfo.totalprice;
        if (!M.isEmpty(account.consumetotal) && account.consumetotal != 0) {
            ordermsg += '，其它消费￥' + account.consumetotal;
        }
        ordermsg += ')';
        paydetail.children("div[tag=totalprice]").html(ordermsg);
        var needpaytotal = ordertotal - payedtotal;
        var needpaymsg = '';
        var channelvalue = 1;
        if (needpaytotal >= 0) {
            needpaymsg = '待　付：<span>￥' + needpaytotal + '</span>';
            this.context.ot_body.children('li[tag=paydetail]').find("div[tag=needpayform]").children("div[t=payments]").find("div[value=shouyintai]").show();
        } else {
            channelvalue = 2;
            var needpaytotal = payedtotal - ordertotal;
            needpaymsg = '需退款：<span>￥' + needpaytotal + '</span>';
            this.context.ot_body.children('li[tag=paydetail]').find("div[tag=needpayform]").children("div[t=payments]").find("div[value=shouyintai]").hide();
        }
        paydetail.children("div[tag=needpay]").html(needpaymsg);
        var roomrate_tpl = this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("input[name=paymoney]");
        if (needpaytotal != 0) {
            roomrate_tpl.attr("placeholder", '金额');
        }
        roomrate_tpl.val('0');
        var tpl_pay = this.context.ot_body.children('li[tag=paydetail]').children().find("div[t=paytypelist]").attr("value", "cash");
        this.droplist.checkout.drop_paydeposit = M.DropdownList(tpl_pay, null, {});
        var tpl_pay2 = this.context.ot_body.children('li[tag=paydetail]').children().find("div[t=payments]").attr("value", "cash");
        this.droplist.checkout.drop_payroom = M.DropdownList(tpl_pay2, null, {});
        if (orderinfo.length > 1 && o.bookallroom != 1) {
            this.context.ot_body.children('li[tag=orderdetail]').children("div").addClass("pop-orderlist");
            this.context.ot_body.children('li[tag=mulitorder]').show();
        } else {
            this.context.ot_body.children('li[tag=mulitorder]').hide();
            this.context.ot_body.children('li[tag=orderdetail]').children("div").removeClass("pop-orderlist");
        }
        var deposit_tpl = this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=depositform]").children("input[name=returndeposit]");
        deposit_tpl.val('0');
        if (account.deposit == 0) {
            deposit_tpl.parents("div[tag=depositform]").hide();
        } else {
            deposit_tpl.parents("div[tag=depositform]").show();
        }
        var channellist_tpl = this.context.ot_body.children('li[tag=paydetail]').find("div[t=channellist]").attr("value", channelvalue);
        channellist_tpl.children("span").attr("value", channelvalue);
        M.DropdownList(channellist_tpl, this._handlecheckoutpaytype.toEventHandler(this), {});
        this.context.ot_hidden.attr("setid", setid);
        if (M.isEmpty(o.remark)) {
            M.emptyVal(this.context.ot_body.children('li[tag=remark]').children("textarea[name=remark]"));
        } else {
            this.context.ot_body.children('li[tag=remark]').children("textarea[name=remark]").val(o.remark);
        }
        this._closepopup();
        M.Popup(this.context.checkoutform, {
            "hideclass": "modal view fade",
            "showclass": "modal view fade in"
        },
        function() {
            this.context.ot_body.children('li[tag=paydetail]').find("div[tag=needpayform]").find("input[name=paymoney]").focus();
        }.toEventHandler(this));
        return;
    },
    _handlecheckoutpaytype: function(ele) {
        var target = ele.parents("div[t=channellist]");
        var channel = target.children("span").attr("value");
        if (channel == 1) {
            target.parent().children("div[t=payments]").find("div[tag=option][value=shouyintai]").show();
        } else {
            var paytypelist = target.parent().children("div[t=payments]");
            var paytype = paytypelist.children("span").attr("value");
            if (paytype == "shouyintai") {
                var paytype = paytypelist.find("div[tag=option]:first").attr("value");
                var paytypename = paytypelist.find("div[tag=option]:first").children("a").html();
                if (paytype == "shouyintai") {
                    var paytype = paytypelist.find("div[tag=option]:first").next().attr("value");
                    var paytypename = paytypelist.find("div[tag=option]:first").next().children("a").html();
                }
                paytypelist.children("span").attr("value", paytype).html(paytypename);
            }
            target.parent().children("div[t=payments]").find("div[tag=option][value=shouyintai]").hide();
        }
    },
    checkoutgroupbook: function() {
        var rmtype = this.droplist.checkout.drop_payroom._getval();
        if (rmtype != "shouyintai") {
            if (!confirm("确认退房吗")) {
                return;
            }
        }
        var setid = this.context.ot_hidden.attr("setid");
        var action = this.context.ot_hidden.attr("action");
        var o = this.tempcheckdetail;
        var data = {
            "op": 'checkout',
            'setid': setid,
            'needreturn': 0,
            "needappend": 0,
            "uniqid": o.orderuniqid,
            "innid": this.innid
        };
        var paymoney_tpl = this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("input[name=paymoney]");
        var paymoney = paymoney_tpl.val();
        var remark = M.getVal(this.context.ot_body.children('li[tag=remark]').children("textarea[name=remark]"));
        data.remark = remark;
        var rm_paytype = this.droplist.checkout.drop_payroom._getval();
        paymoney = M.isEmpty(paymoney) ? 0 : paymoney;
        if (isNaN(paymoney)) {
            alert('房费金额输入格式不正确');
            return;
        }
        var channel = this.context.ot_body.children('li[tag=paydetail]').children().find("div[t=channellist]").children("span").attr("value");
        if (channel == '2') {
            data.needappend = 2;
            data.returnmoney = paymoney;
        } else {
            data.needappend = 1;
            data.appendmoney = paymoney;
        }
        data.rm_paytype = rm_paytype;
        var deposit_tpl = this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=depositform]").children("input[name=returndeposit]");
        var dt_paytype = this.droplist.checkout.drop_paydeposit._getval();
        var deposit = deposit_tpl.val();
        deposit = M.isEmpty(deposit) ? 0 : deposit;
        if (isNaN(deposit)) {
            alert('押金金额输入格式不正确');
            return;
        }
        var checkdeposit = this.tempcheckdetail.account.deposit;
        if (parseInt(deposit) > parseInt(checkdeposit)) {
            alert('退还押金不能大于已收押金');
            return;
        }
        data.deposit = deposit;
        data.dt_paytype = dt_paytype;
        var btn = this.context.checkoutform.children(".modal-footer").children("a[tag=checkout]");
        if (!this.req_before(btn)) {
            return;
        }
        M._getjson("/Book/checkoutgroupbook", data, this.checkout_finished.toEventHandler(this));
    },
    checkout: function() {
        var rmtype = this.droplist.checkout.drop_payroom._getval();
        if (rmtype != "shouyintai") {
            if (!confirm("确认退房吗")) {
                return;
            }
        }
        var setid = this.context.ot_hidden.attr("setid");
        var action = this.context.ot_hidden.attr("action");
        var o = this.tempcheckdetail;
        if (o.checkoutinfo.orderinfo.length > 1) {
            var selectorder = this._getselectorders().toString();
        } else {
            var selectorder = o.checkoutinfo.orderinfo[0].id;
        }
        if (M.isEmpty(selectorder)) {
            alert('请选择要退房的订单');
            return;
        }
        var data = {
            "op": 'checkout',
            'setid': setid,
            'needreturn': 0,
            "needappend": 0,
            "selectorder": selectorder
        };
        var paymoney_tpl = this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=needpayform]").children("input[name=paymoney]");
        var paymoney = paymoney_tpl.val();
        var remark = M.getVal(this.context.ot_body.children('li[tag=remark]').children("textarea[name=remark]"));
        data.remark = remark;
        var rm_paytype = this.droplist.checkout.drop_payroom._getval();
        paymoney = M.isEmpty(paymoney) ? 0 : paymoney;
        if (isNaN(paymoney)) {
            alert('房费金额输入格式不正确');
            return;
        }
        var channel = this.context.ot_body.children('li[tag=paydetail]').children().find("div[t=channellist]").children("span").attr("value");
        if (channel == '2') {
            data.needappend = 2;
            data.returnmoney = paymoney;
        } else {
            data.needappend = 1;
            data.appendmoney = paymoney;
        }
        data.rm_paytype = rm_paytype;
        var deposit_tpl = this.context.ot_body.children('li[tag=paydetail]').children().find("div[tag=depositform]").children("input[name=returndeposit]");
        var dt_paytype = this.droplist.checkout.drop_paydeposit._getval();
        var deposit = deposit_tpl.val();
        deposit = M.isEmpty(deposit) ? 0 : deposit;
        if (isNaN(deposit)) {
            alert('押金金额输入格式不正确');
            return;
        }
        var checkdeposit = this.tempcheckdetail.account.deposit;
        if (parseInt(deposit) > parseInt(checkdeposit)) {
            alert('退还押金不能大于已收押金');
            return;
        }
        data.deposit = deposit;
        data.dt_paytype = dt_paytype;
        var btn = this.context.checkoutform.children(".modal-footer").children("a[tag=checkout]");
        if (!this.req_before(btn)) {
            return;
        }
        M._getjson("/Book/checkout", data, this.checkout_finished.toEventHandler(this));
    },
    checkout_finished: function(d) {
        if (d.status == "success") {
            d.orderlist = d.data;
            this.checkincallback.call(this, d);
            var items = d.data;
            var payname = d.payname;
            var action = d.req.op;
            payname.action = action;
            payname.a = "getpayinfo";
            var checkindata = d.checkindadta.orders;
            var o = this.tempcheckdetail;
            if (o.checkoutinfo.orderinfo.length > 1) {
                var orderlisttpl = this.context.ot_body.find("li[tag=orderdetail]").find("div.selected");
                var cidstr = this._getselectedcid(orderlisttpl);
            } else {
                var cidstr = o.checkoutinfo.orderinfo[0].id;
            }
            this._closepopup();
            if (M.isEmpty(items)) {
                items = d.deleteddata;
            }
            this.orderdetail = {
                "a": action,
                "items": items,
                "paydetail": payname
            };
            this.cashier();
            if (this.printset.checkout == 1) {
                this.context.printform.attr("operate", "checkout").attr("unqid", d.orderunqid).attr("cidstr", cidstr);
                this.print();
            }
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        var btn = this.context.checkoutform.children(".modal-footer").children("a[tag=checkout]");
        this.req_end(btn);
    },
    checkoutprint: function() {
        var innid = this.context.roomtype.attr("innid");
        var uniqid = this.context.checkinoption.attr("uniqid");
        var cidstr = this.context.checkinoption.attr("cid");
        this.context.printform.attr("operate", "checkout").attr("unqid", uniqid).attr("cidstr", cidstr);
        this.printcheckinout();
    },
    _getselectedcid: function(tpl) {
        var data = [];
        tpl.each(function() {
            var cid = $(this).attr("cid");
            data.push(cid);
        });
        return data;
    },
    checkindelete: function(ownprice) {
        var form = this.context.checkinoption;
        var account = this.tempcheckdetail.account;
        if (account.unpaid > 0) {
            M.error("订单未支付，不能删除");
            return false;
        }
        var paymoney = this.context.delform.children().find("input[name=amount]").val();
        var deposit = this.context.delform.children().find("input[name=deposit]").val();
        var temp = this.tempcheckdetail.checkinset;
        var bookallroom = this.context.delform.attr("bookallroom");
        if (temp.orders.length <= 1 || bookallroom == 1) {
            if (M.isEmpty(paymoney)) {
                alert("请输入金额");
                return;
            }
            if (M.isEmpty(deposit) && !M.isEmpty(this.plugin.deposit)) {
                alert("请输入需退押金");
                return;
            }
        }
        var footer = form.children(".modal-footer");
        var hiddencell = footer.find("input[type=hidden]:first");
        var gid = hiddencell.attr("gid");
        var rid = hiddencell.attr("rid");
        var row = hiddencell.attr("row");
        var cols = hiddencell.attr("cols");
        var setid = hiddencell.attr("setid");
        setid = M.isEmpty(setid) ? "": setid;
        if (M.isEmpty(gid) || M.isEmpty(setid)) {
            return;
        }
        var r = confirm("确认删除吗");
        var data = {
            "op": "checkindelete",
            "gid": gid,
            "rid": rid,
            "setid": setid,
            'remark': remark
        }
        var rm_paytypename = this.context.delform.find("li[tag=income]").find("div[type=roomrate]").children("span").text();
        data.rm_paytypename = rm_paytypename;
        var paymoney_tpl = this.context.delform.children().find("input[name=amount]");
        var t = paymoney_tpl.attr("t");
        var paymoney = paymoney_tpl.val();
        var rm_paytype = this.droplist.del.roomrate._getval();
        paymoney = M.isEmpty(paymoney) ? 0 : paymoney;
        if (isNaN(paymoney)) {
            alert('金额输入格式不正确');
            return;
        }
        var channel = this.context.delform.find("div[t=channellist]").children("span").attr("value");
        if (channel == '2') {
            data.needappend = 2;
            data.returnmoney = paymoney;
        } else {
            data.needappend = 1;
            data.appendmoney = paymoney;
        }
        data.rm_paytype = rm_paytype;
        var dt_paytypename = this.context.delform.children().find("div[tag=deposit]").children("div").children("span").text();
        data.dt_paytypename = dt_paytypename;
        var deposit_tpl = this.context.delform.children().find("input[name=deposit]");
        var dt_paytype = this.droplist.del.deposit._getval();
        var deposit = deposit_tpl.val();
        deposit = M.isEmpty(deposit) ? 0 : deposit;
        if (M.isEmpty(this.plugin.deposit)) {
            deposit = 0;
            dt_paytype = rm_paytype;
        }
        if (isNaN(deposit)) {
            alert('押金金额输入格式不正确');
            return;
        }
        data.deposit = deposit;
        data.dt_paytype = dt_paytype;
        if (!r) {
            return;
        }
        var remark = M.getVal(this.context.delform.children().find("li[tag=remark]").children('textarea'));
        data.remark = remark;
        data.ischeckout = this.context.delform.attr("ischeckout");
        var btn = this.context.checkinoption.children(".modal-footer").children("a[tag=delete]");
        if (!this.req_before(btn)) {
            return;
        }
        if (bookallroom != 1) {
            M._getjson("/Book/checkindelete", data, this.checkindelete_finished.toEventHandler(this));
        } else {
            M._getjson("/Book/groupbookcheckindelete", data, this.groupbookcheckindelete_finished.toEventHandler(this));
        }
    },
    groupbookcheckindelete_finished: function(d) {
        if (d.status == "success") {
            d.action = 'delete';
            d.delfrom = 'groupbookorder';
            this.checkincallback.call(this, d);
            var olddata = d.olddata;
            this._closepopup();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        var btn = this.context.checkinoption.children(".modal-footer").children("a[tag=delete]");
        this.req_end(btn);
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
    checkindelete_finished: function(d) {
        if (d.status == "success") {
            d.action = 'delete';
            this.checkincallback.call(this, d);
            var olddata = d.olddata;
            this._closepopup();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        var btn = this.context.checkinoption.children(".modal-footer").children("a[tag=delete]");
        this.req_end(btn);
    },
    checkoutedit: function() {
        this.doeditcheckin(this.context.i_hiddencell, "checkedout");
    },
    _getcheckedform: function() {
        var hiddencell = this.context.editcheck.children(".modal-footer").find("input[type=hidden]");
        var rows = hiddencell.attr("row");
        var cols = hiddencell.attr("cols");
        var formlist = this.context.editcheck.children(".modal-body").find(".cntlist");
        var guestname = formlist.children("li[tag=guestname]").find("input[type=text]").val().trim();
        var phone = formlist.children("li[tag=phone]").find("input[type=text]").val().trim();
        var channelfield = formlist.children("li[tag=channelcode]").children("div").children("span");
        var channelcode = channelfield.attr("value");
        var channelname = channelfield.text();
        var needcar2 = formlist.children("li[tag=ordercolor]").find("input[type=checkbox][tag=needcar2]").attr("checked");
        needcar2 = needcar2 == "checked" ? "1": "0";
        var remark = M.getVal(formlist.find("li[tag=remark]").find("textarea"));
        var paystatus = 4;
        var paystatus_checked = this.context.c_paystatus.attr("checked");
        if (paystatus_checked == "checked") {
            paystatus = 3;
        }
        var paystatusfield = formlist.find("li[tag=paystatus]");
        var idcard_tpl = formlist.children("li[tag=idcard]").children("div").children("div[t=idcardform]");
        var idtype = idcard_tpl.children("span").attr("value");
        var idnum = formlist.children("li[tag=idcard]").children().find("input[name=idcard]").val();
        var roomratetpl = formlist.children("li[tag=paytype]").children("div[tag=roomrateform]");
        var roomratedata = this.getroomratedata(roomratetpl);
        var isvolid = 1;
        var errormessage = '';
        if (roomratedata.isvolid != 1) {
            isvolid = 0;
            errormessage = '支付方式不能为空';
        }
        var roomrate = JSON.stringify(roomratedata.list);
        var deposittpl = formlist.children("li[tag=paytype]").children("div[tag=depositform][type=addtpl]");
        var depositdata = this.getdepositdata(deposittpl);
        if (depositdata.isvolid != 1) {
            isvolid = 0;
            errormessage = '支付方式不能为空';
        }
        var deposit = JSON.stringify(depositdata.list);
        var consumetpl = formlist.children("li[tag=paytype]").children("div[tag=consumeform][type=addtpl]");
        var consumedata = this.getconsumedata(consumetpl);
        if (consumedata.isvolid != 1) {
            isvolid = 0;
            errormessage = '请选择其它消费项目。';
        }
        var consume = JSON.stringify(consumedata.list);
        var shouyintaicount = parseInt(roomratedata.shouyintaicount) + parseInt(depositdata.shouyintaicount) + parseInt(consumedata.shouyintaicount);
        if (shouyintaicount > 1) {
            isvolid = 0;
            errormessage = '一次不能添加多条支付方式为收银台的收款哦～。';
        }
        var gid = hiddencell.attr("gid");
        var setid = hiddencell.attr("setid");
        setid = M.isEmpty(setid) ? "": setid;
        if (!M.isEmpty(setid) && M.isEmpty(this.plugin.needcar)) {
            needcar2 = hiddencell.attr("needcar2");
        }
        if (!M.isEmpty(setid) && M.isEmpty(this.plugin.guarantee)) {
            paystatus = hiddencell.attr("paystatus");
        }
        needcar2 = this.context.ordercell.attr("needcar2");
        var orderdata = {
            "a": "",
            "gid": gid,
            "setid": setid,
            "guestname": guestname,
            "phone": phone,
            "remark": remark,
            "channelcode": channelcode,
            "channelname": channelname,
            "rows": rows,
            "cols": cols,
            "paystatus": paystatus,
            "needcar2": needcar2,
            "idtype": idtype,
            "idnum": idnum,
            "roomrate": roomrate,
            "deposit": deposit,
            "consume": consume,
            "isvolid": isvolid,
            "errormessage": errormessage
        };
        var member = this._ismember(phone);
        orderdata['levelid'] = member.levelid;
        orderdata['levelname'] = member.levelname;
        var guestlist = this.multiguest;
        if (this.plugin.idcard == 0) {
            orderdata['idnum'] = guestlist[0].idnum;
            orderdata['idtype'] = guestlist[0].idtype;
            orderdata['address'] = guestlist[0].address;
            orderdata['sex'] = guestlist[0].sex;
            orderdata['nation'] = guestlist[0].nation;
        } else {
            orderdata['address'] = guestlist[0].address;
            orderdata['sex'] = guestlist[0].sex;
            orderdata['nation'] = guestlist[0].nation;
        }
        orderdata['guestlength'] = 1;
        if (this.multiguest.length > 1) {
            orderdata['guestlength'] = this.multiguest.length;
            for (var i = 1; i < guestlist.length; i++) {
                var guest = guestlist[i];
                orderdata['guestname' + i] = guest.guestname;
                orderdata['phone' + i] = guest.phone;
                orderdata['idnum' + i] = guest.idnum;
                orderdata['idtype' + i] = guest.idtype;
                orderdata['address' + i] = guest.address;
                orderdata['levelid' + i] = guest.levelid;
                orderdata['levelname' + i] = guest.levelname;
                orderdata['sex' + i] = guest.sex;
                orderdata['nation' + i] = guest.nation;
            }
        }
        var colorfield = formlist.children("li[tag=ordercolor]");
        var style = colorfield.find("div[tag=colorlist]").children("span[ison=1]").attr("val");
        var styleshowstatus = colorfield.children("div[tag=color]").css("display");
        if (M.isEmpty(style) || styleshowstatus == 'none' || colorfield.children("div[tag=color]").length == 0) {
            orderdata["style"] = hiddencell.attr("color");
        } else {
            orderdata["style"] = style;
        }
        var attnid = colorfield.children("div[t=attnlist]").children("p[tag=showattn]").attr("value");
        var attnusername = colorfield.children("div[t=attnlist]").children("p[tag=showattn]").html();
        orderdata['attnid'] = attnid;
        var orderroomlist = formlist.children("li[tag=orderroomlist]");
        var i = 0;
        var valid = true;
        var totalprice = 0;
        indexlist = [];
        if (this.bookallroom == 1) {
            orderdata['checkindate'] = formlist.find('div[t=selectcheckin]').children('span').attr('value');
            orderdata['nights'] = formlist.find('li[tag=blockbookinglist]').find('div[t=selectcheckinnights]').children('span').attr('value');
            totalprice = formlist.find('li[tag=blockbookinglist]').find('div[tag=totalprice]').children('input').val();
        } else {
            orderroomlist.children("div[tag=order]").each(function() {
                i++;
                var index = $(this).attr("i");
                indexlist.push(index);
                var roomfield = $(this).children("div[id=selectRoom]").children("span");
                var roomid = roomfield.attr("value");
                var roomname = roomfield.text().trim();
                var checkindate = $(this).children("div[id=selectDay]").children("span").attr("value");
                var nights = $(this).children("div[id=selectNights]").children("span").attr("value");
                var price = $(this).children("input[type=text][tag=price]").val();
                var oid = $(this).attr("gid");
                if (M.isEmpty(price)) {
                    errormessage = "价格不能为空";
                    isvolid = 0;
                }
                if (isNaN(price)) {
                    errormessage = "价格格式不正确";
                    isvolid = 0;
                }
                if (roomid == 0 || roomfield.length == 0) {
                    var arrivatetime = M.strtotime(checkindate);
                    var arrivatedate = M.timeformat(arrivatetime, 'm/d');
                    errormessage = "对不起，" + arrivatedate + "日没有可预订的房间，请重新选择其它日期。";
                    isvolid = 0;
                }
                price = parseInt(price);
                totalprice += price;
                orderdata["roomid" + i] = roomid;
                orderdata["roomname" + i] = roomname;
                orderdata["nights" + i] = nights;
                orderdata["price" + i] = price;
                orderdata["checkindate" + i] = checkindate;
                orderdata["gid" + i] = oid;
                orderdata["index" + i] = index;
            });
            orderdata["orderlength"] = i;
        }
        orderdata['indexlist'] = indexlist;
        orderdata["totalprice"] = totalprice;
        orderdata["isvolid"] = isvolid;
        orderdata['discount'] = this._getdiscount();
        orderdata['errormessage'] = errormessage;
        return orderdata;
    },
    savechecked: function() {
        var data = this._getcheckedform();
        if (M.isEmpty(data)) return;
        if (M.isEmpty(data.guestname)) {
            alert("请输入姓名");
            return;
        }
        if (data.idnum != "" && data.idtype == "1") {
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (reg.test(data.idnum) === false) {
                alert("请输入正确的身份证号");
                return;
            }
        }
        if (data.isvolid != 1) {
            alert(data.errormessage);
            return;
        }
        if (this.bookallroom != 1) {
            var indexlist = data['indexlist'];
            var roomtypepricelist = this.getroomtypepricelist(indexlist);
            data['pricelist'] = JSON.stringify(roomtypepricelist);
            data['avgpricestatus'] = JSON.stringify(this.avgpricestatus);
        }
        var btn = this.context.editcheck.children(".modal-footer").children("a[tag=save]");
        if (!this.req_before(btn)) {
            return;
        }
        var url = '';
        if (this.bookallroom == 1) {
            data['uniqid'] = this.tempcheckdetail.orderuniqid;
            url = '/Book/bookallroomeditcheckin';
        } else {
            url = '/Book/editcheckin';
        }
        M._getjson(url, data, this.savecheck_finished.toEventHandler(this));
    },
    savecheck_finished: function(d) {
        var btn = this.context.editcheck.children(".modal-footer").children("a[tag=save]");
        this.req_end(btn);
        if (d.status == "success") {
            d.orderlist = d.data;
            this.checkincallback.call(this, d);
            var detail = d.data;
            var payname = d.payname;
            var action = d.req.a;
            payname.action = action;
            payname.a = "getpayinfo";
            var items = d.data;
            this.orderdetail = {
                "a": action,
                "items": items,
                "paydetail": payname
            };
            this.cashier();
            this._closepopup();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
    },
    sendmsg: function(ele, type) {
        var gname = "";
        var phone = "";
        var roomname = "";
        var cityname = "";
        if (type == "ordered") {
            gname = this.temporderdetail.guestname;
            phone = this.temporderdetail.phone;
            roomname = this.temporderdetail.roomname;
            roomtypename = this.temporderdetail.roomtypename;
            cityname = this.temporderdetail.cityname;
        }
        if (type == "checkedin") {
            gname = this.tempcheckdetail.guestname;
            phone = this.tempcheckdetail.phone;
            roomtypename = this.tempcheckdetail.roomtypename;
            roomname = this.tempcheckdetail.roomname;
            cityname = this.tempcheckdetail.cityname;
        }
        if (M.isEmpty(phone)) return;
        this._closepopup();
        var header = this.context.msgform.children(".modal-header").children("h4").html("发送短信给：" + gname);
        this.context.msg_hidden.attr("guestname", gname).attr("phone", phone).attr("roomname", roomname).attr("roomtypename", roomtypename);
        var cntlist = this.context.msgform.children(".modal-body").find(".cntlist");
        var phoneele = cntlist.children("li[tag=phone]");
        phoneele.find("span[tag=phone]").html(M.isEmpty(cityname) ? phone: phone + "(" + cityname + ")");
        phoneele.find("span[tag=hisinfo]:first").attr("title", "").tooltip({
            position: {
                my: "left top+5",
                at: "left bottom"
            }
        });
        cntlist.children("li[tag=tmpl]").children("select").val("");
        M.emptyVal(this.context.msg);
        this.context.leftwords.html(0);
        M._getjson("/shortMessage/getguestmsg", {
            "op": "gethis",
            "phone": phone
        },
        this.msghis_finished.toEventHandler(this));
        M.Popup(this.context.msgform, {
            "hideclass": "bootbox modal view fade",
            "showclass": "bootbox modal view fade in"
        },
        function() {}.toEventHandler(this));
    },
    msghis_finished: function(d) {
        if (d.status == "success") {
            var cntlist = this.context.msgform.children(".modal-body").find(".cntlist");
            var phoneele = cntlist.children("li[tag=phone]");
            phoneele.find("span[tag=hisinfo]").attr("title", d.record);
        }
    },
    savemsg: function() {
        var phone = this.context.msg_hidden.attr("phone");
        var guestname = this.context.msg_hidden.attr("guestname");
        var roomname = this.context.msg_hidden.attr("roomname");
        var roomtypename = this.context.msg_hidden.attr("roomtypename");
        var cntlist = this.context.msgform.children(".modal-body").find(".cntlist");
        var msgfield = cntlist.children("li[tag=msg]").children("textarea");
        var msg = M.getVal(msgfield);
        if (M.isEmpty(msg)) {
            alert("短信内容不能为空");
            return;
        }
        var inf1 = roomtypename + '(' + roomname + ')';
        var innid = this.context.roomtype.attr("innid");
        var data = {
            "a": "sendmsg",
            "len": "1",
            "msg": msg,
            "innid": innid,
            "p1": phone,
            "n1": guestname,
            "inf1": inf1
        };
        var btn = cntlist.children("li[tag=save]").children("a[tag=send]");
        if (!this.req_before(btn)) {
            return;
        }
        M._getjson("/shortMessage/sendmsg", data, this.sendmsg_finished.toEventHandler(this));
    },
    sendmsg_finished: function(d) {
        if (d.status == "success") {
            M.success(d.senddesc);
            this._closepopup();
        } else {
            if (!M.isEmpty(d.msg)) {
                alert(d.msg);
            }
        }
        var cntlist = this.context.msgform.children(".modal-body").find(".cntlist");
        var btn = cntlist.children("li[tag=save]").children("a[tag=send]");
        this.req_end(btn);
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
    blockbooking: function() {
        var act = this.context.ordercell.attr("action");
        if (act != 'add' && act != 'hisadd') {
            return;
        }
        this.context.orderandcheckinbtn.hide();
        this.bookallroom = 1;
        this.context.orderformbody.children("li[tag=orderroomlist]").hide();
        this.context.orderformbody.children("li[tag=blockbookinglist]").show();
        this.context.orderform.find("h4").children("span[tag=title]").attr("class", 'table-btn cursor-p').attr("status", "0");
        this.context.orderform.find("h4").children("span[tag=blockbooking]").children("a").attr("class", 'title ml15');
        this.getblockbookingroomlist();
    },
    normalorder: function() {
        var act = this.context.ordercell.attr("action");
        if (act != 'add' && act != 'hisadd') {
            return;
        }
        this.bookallroom = 0;
        this.context.orderformbody.children("li[tag=orderroomlist]").show();
        this.context.orderformbody.children("li[tag=blockbookinglist]").hide();
        this.context.orderform.find("h4").children("span[tag=title]").attr("class", 'title').attr("status", "1");
        this.context.orderform.find("h4").children("span[tag=blockbooking]").children("a").attr("class", 'table-btn ml15 t16');
        var orderroomlist = this.context.orderformbody.children("li[tag=orderroomlist]");
        this._orderdate_change(orderroomlist);
    },
    getblockbookingroomlist: function() {
        var data = {
            'fromdate': this.cache_thisdate,
            'innid': this.innid
        };
        M._getjson('/Book/getbookallroom', data, this.getblockbookingroomlist_finished.toEventHandler(this));
    },
    getblockbookingroomlist_finished: function(d) {
        var html_blockbookinglist = this.context.orderform.find('li[tag=blockbookinglist]');
        html_blockbookinglist.show();
        this.context.orderform.attr('bookallroom', '1');
        html_blockbookinglist.children('div').children('span').html('（共' + d.roomnum + '间房）');
        html_blockbookinglist.find('div[tag=totalprice]').children('input').val('0');
        var datelist = d.datelist;
        var selectcheckin = html_blockbookinglist.find('div[t=selectcheckin]');
        selectcheckin.attr("value", d.thisdate);
        var html_checkindate = '';
        var value = '';
        var msg = '不可包场';
        for (var i in datelist) {
            value = datelist[i];
            var handle_date = M.timeformat(M.strtotime(value.date), 'm/d');
            if (value.nights > 0) {
                html_checkindate += '<div day="' + value.nights + '" value="' + value.date + '"><a day="' + value.day + '"  href="javascript:;">' + handle_date + '</a></div>';
            } else {
                html_checkindate += '<div day="' + value.nights + '"  value="' + value.date + '" disabled="disabled"><a class="cursor-n light" style="background:none;" href="javascript:;">' + handle_date + msg + '</a></div>';
            }
        }
        selectcheckin.find("div[tag=selectcheckinlist]").children().html(html_checkindate);
        M.DropdownList(selectcheckin, this.blockbookingcheckindate_change.toEventHandler(this), {});
        this.tpl_nigthslist(d.nights, 1, this.context.orderform);
    },
    getbookallroom_callback: function(d) {
        if (d.status == 'success') {
            var req = d.req;
            var html_order = '';
            if (req.act == 'checkin') {
                html_order = this.context.editcheck;
            } else if (req.act == 'addorder') {
                html_order = this.context.orderform;
            } else {
                alert('参数错误');
                return false;
            }
            html_order.find('li[tag=blockbookinglist]').show();
            if (d.roomnum > 0) {
                html_order.children('div').children('span').html('（共' + d.roomnum + '间房）');
            }
            var datelist = d.datelist;
            var selectcheckin = html_order.find('li[tag=blockbookinglist]').find('div[t=selectcheckin]');
            selectcheckin.attr("value", d.thisdate);
            var html_checkindate = '';
            var value = '';
            var msg = '不可包场';
            for (var i in datelist) {
                value = datelist[i];
                var handle_date = M.timeformat(M.strtotime(value.date), 'm/d');
                if (value.nights > 0) {
                    html_checkindate += '<div day="' + value.nights + '" value="' + value.date + '"><a day="' + value.day + '"  href="javascript:;">' + handle_date + '</a></div>';
                } else {
                    html_checkindate += '<div day="' + value.nights + '"  value="' + value.date + '" disabled="disabled"><a class="cursor-n light" style="background:none;" href="javascript:;">' + handle_date + msg + '</a></div>';
                }
            }
            selectcheckin.find("div[tag=selectcheckinlist]").children().html(html_checkindate);
            M.DropdownList(selectcheckin, this.blockbookingcheckindate_change.toEventHandler(this), {});
            this.tpl_nigthslist(d.nights, req.ordernights, html_order);
            M.Popup(html_order, {
                "hideclass": "bootbox modal fade",
                "showclass": "bootbox modal fade in"
            });
        } else {
            alert(d.msg);
        }
    },
    _answerplane: function(ishis) {
        return;
        var html_jieji = '<label tag="answerplane" class="t12 mt5 mr10 gray"><input type="checkbox" value="1" checked="checked">推荐客人体验米途1元接送机<a target="_blank" style="display:inline-block;" href="http://www.yunzhanggui.net/pickup.php"><i class="ico-info-code"></i></a></label>';
        var html_jieji2 = '<label tag="answerplane" class="t12 mt5 mr10 gray"><input type="checkbox" value="1" checked="checked">推荐客人体验米途10元接送机<a target="_blank" style="display:inline-block;" href="http://www.yunzhanggui.net/pickup.php"><i class="ico-info-code"></i></a></label>';
        this.context.orderform.children('div[class=modal-footer]').children('label[tag=answerplane]').remove();
        if (!ishis) {
            if (ANSWERPLANE == 1) {
                this.context.orderform.children('div[class=modal-footer]').find('a:first').before(html_jieji);
            } else if (ANSWERPLANE == 2) {
                this.context.orderform.children('div[class=modal-footer]').find('a:first').before(html_jieji2);
            }
        }
    },
    _answerplaneemptyhtml: function() {
        this.context.orderform.children('div[class=modal-footer]').children('label[tag=answerplane]').remove();
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
    NoUndefined: function(str) {
        return M.isEmpty(str) ? "": str;
    },
    _closepopup: function() {
        M.ClosePopup();
    },
    _initdateprice: function() {
        return;
    },
    _showamount: function(amount) {
        if (M.isEmpty(amount)) {
            amount = 0;
        }
        return '￥' + amount;
    },
    destroy: function() {}
});
