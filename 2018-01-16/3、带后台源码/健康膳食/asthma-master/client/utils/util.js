function getDepartment(){
    var levelOneDepar=new Array();
    levelOneDepar = ['内科', '外科', '骨科', '妇产科',"儿科",'眼科', '耳鼻咽喉头颈科', '口腔科',"皮肤性病科","肿瘤科","麻醉科","疼痛科","医学影像科","中医科","其他"];
    levelOneDepar["内科"]=[
        "心血管内科","呼吸内科","消化内科","神经内科","肾内科", "血液科","风湿免疫科","感染科",
        "内分泌科",
        "过敏反应科",
        "普通内科"
    ];
    levelOneDepar["外科"]=[
        "普外科",
        "胸外科",
        "心血管外科",
        "神经外科",
        "肝胆外科",
        "肛肠外科",
        "泌尿外科",
        "血管外科",
        "整形外科",
        "乳腺外科",
        "烧伤科",
        "器官移植"
    ];
    levelOneDepar["骨科"]=[
        "脊柱外科",
        "关节外科",
        "手外科",
        "创伤骨科",
        "矫形骨科",
        "骨质疏松科"
    ];

    levelOneDepar["妇产科"]=[
        "妇科",
        "计划生育科",
        "产科",
        "产前检查科",
       "生殖与遗传",
       "妇女保健科"
    ];
    levelOneDepar["儿科"]=[
        "小儿心血管内科",
        "小儿呼吸内科",
        "小儿消化科",
        "小儿肾内科",
        "小儿免疫科",
        "小儿血液科",
        "小儿神经内科",
        "小儿内分泌科",
        "小儿感染科",
        "小儿普外科",
        "小儿胸外科",
        "小儿心血管外科",
        "小儿泌尿科",
        "小儿神经外科",
        "小儿骨科",
        "小儿整形科",
        "小儿耳鼻喉科",
        "小儿皮肤科",
        "小儿精神科",
        "小儿保健科",
        "小儿营养科",
        "小儿康复科",
        "小儿急诊科",
        "新生儿科",
        "小儿心理科",
        "儿童保健科"

    ];

    levelOneDepar["眼科"]=[
        "青光眼科",
        "白内障科",
        "角膜病科",
        "眼底病科",
        "眼眶病眼肿瘤科 ",
        "眼外伤科",
        "眼整形科",
        "屈光科",
        "准分子激光科",
        "小儿眼科"
    ];

    levelOneDepar["耳鼻咽喉头颈科"]=[
        "耳鼻咽喉科",
        "头颈外科"
    ]

    levelOneDepar["口腔科"]=[
        "口腔种植科",
        "牙体牙髓科",
        "牙周病科",
        "口腔黏膜科",
        "口腔修复科",
        "口腔正畸科",
        "口腔颌面外科",
        "口腔预防科",
        "儿童口腔科",
        "口腔病理科"
    ];

    levelOneDepar["皮肤性病科"]=[
        "皮肤科",
        "性病科"
    ];

    levelOneDepar["肿瘤科"]=[
        "肿瘤内科",
        "肿瘤外科",
        "脑部肿瘤科",
        "头颈肿瘤科",
        "胸部肿瘤科",
        "腹部肿瘤科",
        "泌尿肿瘤科",
        "妇科肿瘤科",
        "骨与软组织肿瘤科",
        "放射治疗科"
    ];

    levelOneDepar["麻醉科"]=[
        "麻醉科"
    ];

    levelOneDepar["疼痛科"]=[
        "疼痛科"
    ];

    levelOneDepar["医学影像科"]=[
        "放射科",
        "超声科",
        "心电图室",
        "核医学科"
    ];

    levelOneDepar["中医科"]=[
        "中医内科",
        "中医心内科",
        "中医呼吸科",
        "中医神经内科",
        "中医消化科",
        "中医肝病科",
        "中医内分泌",
        "中医肾病内科",
        "中医免疫内科",
        "中医血液科",
        "中医感染内科",
        "中医外科",
        "中医骨科",
        "中医乳腺外科",
        "中医肛肠科",
        "中医妇产科",
        "中医儿科",
        "中医皮肤科",
        "中医五官科",
        "中医肿瘤科",
        "医老年病科",
        "中医针灸科",
        "中医推拿科",
        "中医男科"
    ];

    levelOneDepar["其他"]=[
        "内镜科",
        "血透科",
        "心理科",
        "精神科",
        "运动医学科",
        "介入医学科",
        "中西医结合科",
        "康复科",
        "全科",
        "老年病科",
        "职业病科",
        "男科",
        "急诊科",
        "特诊部",
        "体检科",
        "病理科",
        "检验科",
        "药剂科",
        "护理门诊",
        "营养科",
        "重症医学科"
    ];

    return levelOneDepar;

}

function getProvince() {
    var province = new Array(35);
    province = ['安徽省', '北京市', '重庆市', '福建省', '甘肃省', '广东省', '广西省', '贵州省', '海南省', '河北省', '黑龙江省', '河南省', '香港特别行政区', '湖北省', '湖南省', '江苏省', '江西省', '吉林省', '辽宁省', '澳门特别行政区', '内蒙古自治区', '宁夏壮族自治区', '青海省', '山东省', '上海市', '山西省', '陕西省', '四川省', '台湾省', '天津市', '新疆维吾尔族自治区', '西藏自治区', '云南省', '浙江省'];

    province['安徽省'] = [
        '合肥市',
        '安庆市',
        '蚌埠市',
        '亳州市',
        '巢湖市',
        '滁州市',
        '阜阳市',
        '贵池市',
        '淮北市',
        '淮化市',
        '淮南市',
        '黄山市',
        '九华山市',
        '六安市',
        '马鞍山市',
        '宿州市',
        '铜陵市',
        '屯溪市',
        '芜湖市',
        '宣城市'
    ];
    province['北京市'] = [
        '北京市'
    ];
    province['重庆市'] = [
        '重庆市'
    ];
    province['福建省'] = [
        '福州市',
        '福安市',
        '龙岩市',
        '南平市',
        '宁德市',
        '莆田市',
        '泉州市',
        '三明市',
        '邵武市',
        '石狮市',
        '晋江市',
        '永安市',
        '武夷山市',
        '厦门市',
        '漳州市'
    ];
    province['甘肃省'] = [
        '兰州市',
        '白银市',
        '定西市',
        '敦煌市',
        '甘南市',
        '金昌市',
        '酒泉市',
        '临夏市',
        '平凉市',
        '天水市',
        '武都市',
        '武威市',
        '西峰市',
        '嘉峪关市',
        '张掖市'
    ];
	province['宁夏壮族自治区'] = [
		'银川市',
		'吴忠市',
		'固原市',
		'石嘴山市',
		'中卫市'
    ];
    province['广东省'] = [
        '广州市',
        '潮阳市',
        '潮州市',
        '澄海市',
        '东莞市',
        '佛山市',
        '河源市',
        '惠州市',
        '江门市',
        '揭阳市',
        '开平市',
        '茂名市',
        '梅州市',
        '清远市',
        '汕头市',
        '汕尾市',
        '韶关市',
        '深圳市',
        '顺德市',
        '阳江市',
        '英德市',
        '云浮市',
        '增城市',
        '湛江市',
        '肇庆市',
        '中山市',
        '珠海市'
    ];
    province['广西省'] = [
        '南宁市',
        '百色市',
        '北海市',
        '桂林市',
        '防城港市',
        '河池市',
        '贺州市',
        '柳州市',
        '来宾市',
        '钦州市',
        '梧州市',
        '贵港市',
        '玉林市'
    ];
    province['贵州省'] = [
        '贵阳市',
        '安顺市',
        '毕节市',
        '都匀市',
        '凯里市',
        '六盘水市',
        '铜仁市',
        '兴义市',
        '玉屏市',
        '遵义市'
    ];
    province['海南省'] = [
        '海口市',
        '三亚市',
        '五指山市',
        '琼海市',
        '儋州市',
        '文昌市',
        '万宁市',
        '东方市',
        '定安市',
        '屯昌市',
        '澄迈市',
        '临高市',
        '万宁市',
        '白沙黎族市',
        '昌江黎族市',
        '乐东黎族市',
        '陵水黎族市',
        '保亭黎族市',
        '琼中黎族市',
        '西沙群岛市',
        '南沙群岛市',
        '中沙群岛市'
    ];
    province['河北省'] = [
        '石家庄市',
        '保定市',
        '北戴河市',
        '沧州市',
        '承德市',
        '丰润市',
        '邯郸市',
        '衡水市',
        '廊坊市',
        '南戴河市',
        '秦皇岛市',
        '唐山市',
        '新城市',
        '邢台市',
        '张家口市'
    ];
    province['黑龙江省'] = [
        '哈尔滨市',
        '北安市',
        '大庆市',
        '大兴安岭市',
        '鹤岗市',
        '黑河市',
        '佳木斯市',
        '鸡西市',
        '牡丹江市',
        '齐齐哈尔市',
        '七台河市',
        '双鸭山市',
        '绥化市',
        '伊春市'
    ];
    province['河南省'] = [
        '郑州市',
        '安阳市',
        '鹤壁市',
        '潢川市',
        '焦作市',
        '济源市',
        '开封市',
        '漯河市',
        '洛阳市',
        '南阳市',
        '平顶山市',
        '濮阳市',
        '三门峡市',
        '商丘市',
        '新乡市',
        '信阳市',
        '许昌市',
        '周口市',
        '驻马店市'
    ];
    province['香港特别行政区'] = [
        '香港特别行政区'
    ];
    province['湖北省'] = [
        '武汉市',
        '恩施市',
        '鄂州市',
        '黄冈市',
        '黄石市',
        '荆门市',
        '荆州市',
        '潜江市',
        '十堰市',
        '随州市',
        '武穴市',
        '仙桃市',
        '咸宁市',
        '襄阳市',
        '襄樊市',
        '孝感市',
        '宜昌市'
    ];
    province['湖南省'] = [
        '长沙市',
        '常德市',
        '郴州市',
        '衡阳市',
        '怀化市',
        '吉首市',
        '娄底市',
        '邵阳市',
        '湘潭市',
        '益阳市',
        '岳阳市',
        '永州市',
        '张家界市',
        '株洲市'
    ];
    province['江苏省'] = [
        '南京市',
        '常熟市',
        '常州市',
        '海门市',
        '淮安市',
        '江都市',
        '江阴市',
        '昆山市',
        '连云港市',
        '南通市',
        '启东市',
        '沭阳市',
        '宿迁市',
        '苏州市',
        '太仓市',
        '泰州市',
        '同里市',
        '无锡市',
        '徐州市',
        '盐城市',
        '扬州市',
        '宜兴市',
        '仪征市',
        '张家港市',
        '镇江市',
        '周庄市'
    ];
    province['江西省'] = [
        '南昌市',
        '抚州市',
        '赣州市',
        '吉安市',
        '景德镇市',
        '井冈山市',
        '九江市',
        '庐山市',
        '萍乡市',
        '上饶市',
        '新余市',
        '宜春市',
        '鹰潭市'
    ];
    province['吉林省'] = [
        '长春市',
        '白城市',
        '白山市',
        '珲春市',
        '辽源市',
        '梅河市',
        '吉林市',
        '四平市',
        '松原市',
        '通化市',
        '延吉市'
    ];
    province['辽宁省'] = [
        '沈阳市',
        '鞍山市',
        '本溪市',
        '朝阳市',
        '大连市',
        '丹东市',
        '抚顺市',
        '阜新市',
        '葫芦岛市',
        '锦州市',
        '辽阳市',
        '盘锦市',
        '铁岭市',
        '营口市'
    ];
    province['澳门特别行政区'] = [
        '澳门特别行政区'
    ];
    province['内蒙古自治区'] = [
        '呼和浩特市',
        '阿拉善盟市',
        '包头市',
        '赤峰市',
        '东胜市',
        '海拉尔市',
        '集宁市',
        '临河市',
        '通辽市',
        '乌海市',
        '乌兰浩特市',
        '锡林浩特市'
    ];
    province['宁夏省'] = [
        '银川市',
        '固原市',
        '中卫市',
        '石嘴山市',
        '吴忠市'
    ];
    province['青海省'] = [
        '西宁市',
        '德令哈市',
        '格尔木市',
        '共和市',
        '海东市',
        '海晏市',
        '玛沁市',
        '同仁市',
        '玉树市'
    ];
    province['山东省'] = [
        '济南市',
        '滨州市',
        '兖州市',
        '德州市',
        '东营市',
        '菏泽市',
        '济宁市',
        '莱芜市',
        '聊城市',
        '临沂市',
        '蓬莱市',
        '青岛市',
        '曲阜市',
        '日照市',
        '泰安市',
        '潍坊市',
        '威海市',
        '烟台市',
        '枣庄市',
        '淄博市'
    ];
    province['上海市'] = [
        '上海市'
    ];
    province['山西省'] = [
        '太原市',
        '长治市',
        '大同市',
        '候马市',
        '晋城市',
        '离石市',
        '临汾市',
        '宁武市',
        '朔州市',
        '忻州市',
        '阳泉市',
        '榆次市',
        '运城市'
    ];
    province['陕西省'] = [
        '西安市',
        '安康市',
        '宝鸡市',
        '汉中市',
        '渭南市',
        '商州市',
        '绥德市',
        '铜川市',
        '咸阳市',
        '延安市',
        '榆林市'
    ];
    province['四川省'] = [
        '成都市',
        '巴中市',
        '达州市',
        '德阳市',
        '都江堰市',
        '峨眉山市',
        '涪陵市',
        '广安市',
        '广元市',
        '九寨沟市',
        '康定市',
        '乐山市',
        '泸州市',
        '马尔康市',
        '绵阳市',
        '眉山市',
        '南充市',
        '内江市',
        '攀枝花市',
        '遂宁市',
        '汶川市',
        '西昌市',
        '雅安市',
        '宜宾市',
        '自贡市',
        '资阳市'
    ];
    province['台湾省'] = [
        '台北市',
        '基隆市',
        '台南市',
        '台中市',
        '高雄市',
        '屏东市',
        '南投市',
        '云林市',
        '新竹市',
        '彰化市',
        '苗栗市',
        '嘉义市',
        '花莲市',
        '桃园市',
        '宜兰市',
        '台东市',
        '金门市',
        '马祖市',
        '澎湖市',
        '其它市'
    ];
    province['天津市'] = [
        '天津市'
    ];
    province['新疆维吾尔族自治区'] = [
        '乌鲁木齐市',
        '阿克苏市',
        '阿勒泰市',
        '阿图什市',
        '博乐市',
        '昌吉市',
        '东山市',
        '哈密市',
        '和田市',
        '喀什市',
        '克拉玛依市',
        '库车市',
        '库尔勒市',
        '奎屯市',
        '石河子市',
        '塔城市',
        '吐鲁番市',
        '伊宁市'
    ];
    province['西藏自治区'] = [
        '拉萨市',
        '阿里市',
        '昌都市',
        '林芝市',
        '那曲市',
        '日喀则市',
        '山南市'
    ];
    province['云南省'] = [
        '昆明市',
        '大理市',
        '保山市',
        '楚雄市',
        '大理市',
        '东川市',
        '个旧市',
        '景洪市',
        '开远市',
        '临沧市',
        '丽江市',
        '六库市',
        '潞西市',
        '曲靖市',
        '思茅市',
        '文山市',
        '西双版纳市',
        '玉溪市',
        '中甸市',
        '昭通市'
    ];
    province['浙江省'] = [
        '杭州市',
        '安吉市',
        '慈溪市',
        '定海市',
        '奉化市',
        '海盐市',
        '黄岩市',
        '湖州市',
        '嘉兴市',
        '金华市',
        '临安市',
        '临海市',
        '丽水市',
        '宁波市',
        '瓯海市',
        '平湖市',
        '千岛湖市',
        '衢州市',
        '江山市',
        '瑞安市',
        '绍兴市',
        '嵊州市',
        '台州市',
        '温岭市',
        '温州市',
        '余姚市',
        '舟山市'
    ];
    return province;
}

module.exports = {
	getDepartment,
	getProvince
}
