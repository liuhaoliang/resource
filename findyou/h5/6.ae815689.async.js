(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{XAvW:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return _});a("ZPo2");var n=a("nj1r"),r=(a("HVTF"),a("OT5E")),o=(a("puyI"),a("xZH1")),s=(a("e3Tq"),a("n+tp")),i=a("q1tI"),d=a.n(i),c=(a("xsBw"),a("WRE1"),a("qO4V")),u=a.n(c),p=a("eOZ3"),l=a("dCQc"),h=a("+n12"),m=a("3rPQ"),w=s["a"].Item,g=o["a"].alert,v=window.AMap;class _ extends i["Component"]{constructor(){super(...arguments),this.state={dataList:[]},this.loadData=(()=>{var t=Object(h["b"])("group_id");Object(l["h"])({group_id:t}).then(t=>{var e=t||{},a=e.data,n=void 0===a?[]:a,o=e.status,s=e.msg,i=void 0===s?"\u67e5\u8be2\u5931\u8d25":s;if(o){var d=n.sort((t,e)=>{var a=t.uid===m["a"].getUid()?1:0,n=e.uid===m["a"].getUid()?1:0;return n-a});this.setState({dataList:d})}else r["a"].show(i)})}),this.showActionSheet=(t=>{var e=t.username,a=t.nickname,o=t.uid,s=(t.online,t.address),i=(t.is_owner,t.longitude),d=t.latitude,c=m["a"].getUid()===o;if(c)r["a"].show("\u4e0d\u80fd\u5bf9\u81ea\u5df1\u8fdb\u884c\u64cd\u4f5c");else{var u=this.state.dataList,p=!!u.find(t=>!!t.is_owner&&t.uid===m["a"].getUid()),l=["\u5bfc\u822a"];p&&l.push("\u79fb\u51fa\u7fa4\u7ec4"),n["a"].showActionSheetWithOptions({options:l,message:"\u9009\u62e9\u64cd\u4f5c",maskClosable:!0},t=>{if(0===t){var n=new v.Marker({position:new v.LngLat(i,d)});n.markOnAMAP({name:s,position:n.getPosition()})}else 1===t&&g("\u63d0\u793a","\u786e\u8ba4\u5c06\u7528\u6237".concat(a||e,"\u79fb\u51fa\u7fa4\u7ec4\uff1f"),[{text:"\u53d6\u6d88"},{text:"\u79fb\u51fa",onPress:()=>{var t=Object(h["b"])("group_id");this.outGroupAction(t,o)}}])})}}),this.outGroupAction=((t,e)=>{Object(l["g"])({group_id:t,uid:e}).then(t=>{var e=t||{},a=(e.data,e.status),n=e.msg,o=void 0===n?"\u64cd\u4f5c\u5931\u8d25":n;a?(r["a"].show("\u64cd\u4f5c\u6210\u529f"),this.loadData()):r["a"].show(o)})})}componentDidMount(){this.loadData()}render(){var t=this.state.dataList,e=t.map(t=>{var e=t.username,a=t.nickname,n=t.uid,r=t.online,o=t.address,s=t.is_owner,i=m["a"].getUid()===n;return d.a.createElement(w,{arrow:i?"empty":"horizontal",platform:"android",onClick:()=>{this.showActionSheet(t)}},s&&d.a.createElement("div",{className:u.a.owner},"\u7fa4\u4e3b"),"\u7528\u6237\u540d\uff1a".concat(e),d.a.createElement("br",null),"\u6635\u79f0\uff1a".concat(a||e),d.a.createElement("br",null),"\u4f4d\u7f6e\uff1a".concat(o),d.a.createElement("br",null),"\u72b6\u6001\uff1a".concat(r?"\u5728\u7ebf":"\u79bb\u7ebf"))});return d.a.createElement(p["a"],{title:"\u7fa4\u7ec4\u4fe1\u606f",pathname:this.props.location.pathname},d.a.createElement("div",{className:u.a.wrapper},d.a.createElement(s["a"],{renderHeader:()=>"\u7fa4\u7ec4\u4fe1\u606f(".concat(t.length,"\u4eba)"),className:u.a.groupList},e)))}}},qO4V:function(t,e,a){t.exports={wrapper:"wrapper___1LV9r",groupList:"groupList___kKByh",owner:"owner___dtrFN"}}}]);