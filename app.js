// ===== EDIT ME =====
// GitHub Pages can't take payments itself. Create products in Tebex (or Stripe Payment Links)
// and paste each checkout URL here.
const BUY_LINKS = { champion:"#", warlord:"#", titan:"#", king:"#" };
// ===================
const RANKS = [
 {id:"guardian",name:"Guardian",color:"#2bc804",price:0,tag:"Free with /freerank",
  perks:["Homes: <b>5</b>","Auction items: <b>10</b>","Player warps: <b>4</b>","Guardian Kit","Auto-AFK","Color codes in /msg"],
  cmds:["/hat","/ignore","/nick","/rtoggle","/craft","/paytoggle","/payconfirmtoggle","/tptoggle","/msgtoggle"]},
 {id:"champion",name:"Champion",color:"#009ddb",price:4,tag:"Includes Guardian",
  perks:["Homes: <b>10</b>","Auction items: <b>15</b>","Player warps: <b>8</b>","Champion Kit"],
  cmds:["/trash","/enderchest","/recipe","/near"]},
 {id:"warlord",name:"Warlord",color:"#cd120a",price:8,tag:"Includes Champion",popular:true,
  perks:["Homes: <b>20</b>","Auction items: <b>20</b>","Player warps: <b>12</b>","Player warp teleport delay bypass","Warlord Kit"],
  cmds:["/feed","/fly","/ptime","/pweather"]},
 {id:"titan",name:"Titan",color:"#892bc4",price:14,tag:"Includes Warlord",
  perks:["Homes: <b>Unlimited</b>","Auction items: <b>30</b>","Player warps: <b>15</b>","Titan Kit"],
  cmds:["/renamehome","/heal","/suicide"]},
 {id:"king",name:"King",color:"#fd7e00",price:22,tag:"Includes Titan",
  perks:["Auction items: <b>50</b>","Player warps: <b>Unlimited</b>","King Kit","Color codes in /nick","Auction cooldown bypass"],
  cmds:["/repair"]}
];
const grid=document.getElementById("ranks");
if(grid){
 const paid=RANKS.filter(r=>r.price>0);
 grid.innerHTML=paid.map(r=>`
 <article class="rank${r.popular?" popular":""}" style="--c:${r.color}" id="${r.id}">
  <h3>${r.name}</h3><div class="tag">${r.tag}</div>
  <div class="price">$${r.price}<small> one-time, permanent</small></div>
  <ul class="perks">${r.perks.map(p=>`<li>${p}</li>`).join("")}</ul>
  <div class="cmds-t">New commands</div>
  <div class="cmds">${r.cmds.map(c=>`<code>${c}</code>`).join("")}</div>
  <a class="btn" href="${BUY_LINKS[r.id]}" rel="noopener">Buy ${r.name}</a>
 </article>`).join("");
 const g=RANKS[0];
 document.getElementById("guardian").innerHTML=`
  <div><h3 style="color:var(--c)">Guardian is free</h3>
  <div>Type <code>/freerank</code> in game. ${g.perks.slice(0,3).join(", ").replace(/<\/?b>/g,"")}, a kit, Auto-AFK and more.</div></div>
  <a class="btn" href="#ranks" style="background:var(--c);color:#fff">See paid ranks</a>`;
}
