//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    item1:'选择荤菜',
    item2:'选择素菜',
    item3:'选择主食',
    color1:'green',
    color2:'yellow',
    color3:'pink',
    list1:[
      "鸡胸肉", "土豆炖牛腩", "咖喱牛肉", "荷兰豆炒香肠", "麻辣四川香肠", "辣椒炒肉",
      "黄瓜炒火腿肠", "莴笋炒肉", "肉末豆角", "茄子肉末"
    ],
    list2:[
      "水煮西兰花","红烧冬瓜","清炒荷兰豆","红烧豆腐","清炒白菜",
      "番茄炒蛋","炒西葫芦","清炒黄瓜","清炒莴笋","凉拌皮蛋",
      "干煸四季豆","清炒丝瓜","拍黄瓜","油焖笋","酸辣土豆丝",
      "凉拌海带","凉拌杏鲍菇"
    ],
    list3:[
      "藜麦饭","糙米饭","小米粥","蒸红薯","水煮玉米","蒸芋头","三明治","意面"
    ],
    clist:[
      'pink','yellow','green','caolv','blue','red','grey','orange'
    ]
  },
  onLoad: function () {

  },
  getLunch:function(e){
    let length1 = this.data.list1.length,
        length2 = this.data.list2.length,
        length3 = this.data.list2.length,
        length4 = this.data.clist.length;
    let item1n = this.data.list1[Math.floor(Math.random() * (length1 - 0 + 1) + 0)];
    let item2n = this.data.list2[Math.floor(Math.random() * (length2 - 0 + 1) + 0)];
    let item3n = this.data.list3[Math.floor(Math.random() * (length3 - 0 + 1) + 0)];
    let color1n = this.data.clist[Math.floor(Math.random() * (length4 - 0 + 1) + 0)];
    let color2n = this.data.clist[Math.floor(Math.random() * (length4 - 0 + 1) + 0)];
    let color3n = this.data.clist[Math.floor(Math.random() * (length4 - 0 + 1) + 0)];
    this.setData({
      item1: item1n,
      item2: item2n,
      item3: item3n,
      color1:color1n,
      color2:color2n,
      color3:color3n,
    })    
  }
})
