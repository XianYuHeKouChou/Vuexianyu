import{_ as t,r as s,a as e,c as a,b as r,w as i,F as d,i as l,d as o,o as u,T as n,A as h,e as c,t as f,h as m}from"./index-Dk3PNdqW.js";import{_ as x}from"./uni-card.Doqgz0hI.js";const L=t({data:()=>({orderList:[]}),onReady(){this.getOrderList()},onShow(){this.$req.ceshi=this.$refs.loadToast,this.getOrderList()},methods:{getOrderList(){this.$req.httpGet("/api/test-histories",{},(t=>{this.orderList=t.data}))}}},[["render",function(t,L,p,_,b,g){const y=m,N=l,O=s(e("uni-card"),x),T=s(e("loading"),o);return u(),a(d,null,[r(N,{class:"pb-20"},{default:i((()=>[(u(!0),a(d,null,n(b.orderList,((t,s)=>(u(),h(O,{key:s,title:t.address,"sub-title":t.createdAt,extra:t.sumNum+"￥"},{default:i((()=>[r(N,{class:"flex flex-col"},{default:i((()=>[(u(!0),a(d,null,n(t.BuyList,((t,s)=>(u(),h(y,{key:s},{default:i((()=>[c("x"+f(t.chooseNum)+" "+f(t.itemName),1)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["title","sub-title","extra"])))),128))])),_:1}),r(T,{ref:"loadToast"},null,512)],64)}]]);export{L as default};
