"use strict";(self.webpackChunkportafolio_dev=self.webpackChunkportafolio_dev||[]).push([[412],{9412:(O,l,a)=>{a.r(l),a.d(l,{Proyecto03Module:()=>C});var g=a(6814),d=a(9351),n=a(4769),m=a(9862);let p=(()=>{var t;class i{constructor(o){this.http=o,this.apiKey="d1c61c950d8056e48c3fcc2d1c51f1b9"}getWeather(o){return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${o}&lang=es&appid=${this.apiKey}&units=metric`)}}return(t=i).\u0275fac=function(o){return new(o||t)(n.LFG(m.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),i})();var r=a(95);function _(t,i){1&t&&n._UZ(0,"img",26)}function s(t,i){1&t&&n._UZ(0,"img",27)}function u(t,i){if(1&t&&(n.TgZ(0,"section",8)(1,"article",9),n.YNc(2,_,1,0,"img",10),n.YNc(3,s,1,0,"img",11),n.TgZ(4,"section",12)(5,"article",13),n._uU(6),n.qZA(),n.TgZ(7,"article",14),n._uU(8),n.ALo(9,"number"),n.qZA(),n.TgZ(10,"div",15),n._uU(11),n.ALo(12,"number"),n.qZA(),n.TgZ(13,"article",13),n._uU(14),n.qZA()()(),n.TgZ(15,"div",16)(16,"div",17),n._uU(17," Mas informacion "),n.qZA(),n.TgZ(18,"div",18)(19,"div",19)(20,"div",15),n._uU(21," Temperatura m\xednima. "),n.qZA(),n.TgZ(22,"div",20),n._UZ(23,"img",21),n.TgZ(24,"p"),n._uU(25,"min"),n.qZA()(),n.TgZ(26,"div",22),n._uU(27),n.ALo(28,"number"),n.qZA(),n.TgZ(29,"div",15),n._uU(30),n.ALo(31,"number"),n.qZA()(),n.TgZ(32,"div",19)(33,"div",15),n._uU(34," Temperatura m\xe1xima. "),n.qZA(),n.TgZ(35,"div",20),n._UZ(36,"img",23),n.TgZ(37,"p"),n._uU(38,"max"),n.qZA()(),n.TgZ(39,"div",22),n._uU(40),n.ALo(41,"number"),n.qZA(),n.TgZ(42,"div",15),n._uU(43),n.ALo(44,"number"),n.qZA()(),n.TgZ(45,"div",19)(46,"div",15),n._uU(47," Humedad actual. "),n.qZA(),n.TgZ(48,"div",20),n._UZ(49,"img",24),n.TgZ(50,"p"),n._uU(51,"Humedad"),n.qZA()(),n.TgZ(52,"div",22),n._uU(53),n.qZA(),n.TgZ(54,"div",15),n._uU(55),n.qZA()(),n.TgZ(56,"div",19)(57,"div",15),n._uU(58," Viento actual. "),n.qZA(),n.TgZ(59,"div",20),n._UZ(60,"img",25),n.TgZ(61,"p"),n._uU(62,"viento"),n.qZA()(),n.TgZ(63,"div",22),n._uU(64),n.qZA(),n.TgZ(65,"div",15),n._uU(66),n.qZA()()()()()),2&t){const e=n.oxw();n.xp6(2),n.Q6J("ngIf",e.weatherData.main.temp>15),n.xp6(1),n.Q6J("ngIf",e.weatherData.main.temp<15.84),n.xp6(3),n.Oqu(e.weatherData.name),n.xp6(2),n.hij("",n.xi3(9,14,e.weatherData.main.temp,"1.0-0"),"\xb0"),n.xp6(3),n.hij(" ",n.xi3(12,17,e.weatherData.main.temp,"1.0-0")," grados. "),n.xp6(3),n.Oqu(e.weatherData.weather[0].description),n.xp6(13),n.hij(" ",n.xi3(28,20,e.weatherData.main.temp_min,"1.0-0"),"\xb0C "),n.xp6(3),n.hij(" ",n.xi3(31,23,e.weatherData.main.temp_min,"1.0-0")," grados. "),n.xp6(10),n.hij(" ",n.xi3(41,26,e.weatherData.main.temp_max,"1.0-0"),"\xb0C "),n.xp6(3),n.hij(" ",n.xi3(44,29,e.weatherData.main.temp_max,"1.0-0")," grados. "),n.xp6(10),n.hij(" ",e.weatherData.main.humidity,"% "),n.xp6(2),n.hij(" ",e.weatherData.main.humidity,"porciento. "),n.xp6(9),n.hij(" ",e.weatherData.wind.speed,"km/h "),n.xp6(2),n.hij(" ",e.weatherData.wind.speed,"kilometros por hora. ")}}const f=[{path:"",component:(()=>{var t;class i{constructor(o){this.weatherService=o}ngOnInit(){}getWeather(){this.weatherService.getWeather(this.city).subscribe(o=>{this.weatherData=o,console.log(o)})}}return(t=i).\u0275fac=function(o){return new(o||t)(n.Y36(p))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-proyecto03"]],decls:11,vars:2,consts:[[1,"main_container"],["tabindex","0","aria-hidden","false","role","heading"],["action",""],["type","text","placeholder","Digita una ciudad","name","cityName",3,"ngModel","ngModelChange"],["type","button",3,"click"],["class","container",4,"ngIf"],[2,"margin-top","28px"],["routerLink","",1,"link_back"],[1,"container"],[1,"upper-data"],["src","../../../assets/img/proyect03/atardecer-en-verano.avif","alt","",4,"ngIf"],["src","../../../assets/img/proyect03/atardecer-frio-con-m.avif","alt","",4,"ngIf"],[1,"weather-data"],[1,"location"],["aria-hidden","true",1,"temperature"],[1,"a11y"],[1,"lower-data"],[1,"more-info-label"],[1,"more-info-container"],[1,"info-block"],["aria-hidden","true",1,"info-block-label"],["src","../../../assets/img/proyect03/thermometer-cold-stroke-rounded.svg","alt",""],["aria-hidden","true",1,"info-block-value"],["src","../../../assets/img/proyect03/thermometer-warm-stroke-rounded.svg","alt",""],["src","../../../assets/img/proyect03/humidity-stroke-rounded.svg","alt",""],["src","../../../assets/img/proyect03/slow-winds-stroke-rounded.svg","alt",""],["src","../../../assets/img/proyect03/atardecer-en-verano.avif","alt",""],["src","../../../assets/img/proyect03/atardecer-frio-con-m.avif","alt",""]],template:function(o,c){1&o&&(n.TgZ(0,"div",0)(1,"h2",1),n._uU(2,"Busca tu ciudad"),n.qZA(),n.TgZ(3,"form",2)(4,"input",3),n.NdJ("ngModelChange",function(M){return c.city=M}),n.qZA(),n.TgZ(5,"button",4),n.NdJ("click",function(){return c.getWeather()}),n._uU(6,"Buscar"),n.qZA()(),n.YNc(7,u,67,32,"section",5),n.TgZ(8,"h3",6)(9,"a",7),n._uU(10,"Volver al home"),n.qZA()()()),2&o&&(n.xp6(4),n.Q6J("ngModel",c.city),n.xp6(3),n.Q6J("ngIf",c.weatherData))},dependencies:[g.O5,d.rH,r._Y,r.Fj,r.JJ,r.JL,r.On,r.F,g.JJ],styles:[".a11y[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.main_container[_ngcontent-%COMP%]{width:100%;height:100vh;background-color:#2d348e;padding:33px;display:flex;flex-direction:column;justify-content:center;align-items:center}.main_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;margin:8px 0;gap:8px}.main_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px;border-radius:8px;border:none}.main_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;border:none;padding:8px;border-radius:8px}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{background-color:#1f7f9f;border-radius:20px;box-shadow:10px 10px 10px #16161a}@media (width < 425px){.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%;margin:10px}}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .upper-data[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;height:230px;border-top-left-radius:20px;border-top-right-radius:20px}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .upper-data[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .upper-data[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]{position:relative;z-index:1;width:100%;height:100%;background-color:#16161a80;display:flex;flex-direction:column;align-items:center;justify-content:center}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .upper-data[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:1.2em}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .upper-data[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]   .temperature[_ngcontent-%COMP%]{color:#fff;font-size:4em;text-align:center;font-weight:900}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;border-bottom-left-radius:20px;border-bottom-right-radius:20px;padding:1em;display:flex;flex-direction:column}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-label[_ngcontent-%COMP%]{color:#fff}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-container[_ngcontent-%COMP%]{gap:12px;padding:16px;background-color:#16161a80;border-bottom-left-radius:20px;border-bottom-right-radius:20px;margin-top:1em;display:flex;flex-direction:row;flex-wrap:wrap}@media (width < 401px){.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-container[_ngcontent-%COMP%]{flex-direction:column;overflow:auto;max-height:100px;height:100%}}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]{width:46%;display:flex;flex-direction:row}@media (width < 401px){.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]{width:50%;justify-content:center}}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-block-label[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center}@media (width < 401px){.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-block-label[_ngcontent-%COMP%]{width:initial}}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-block-label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3em;filter:invert(1)}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-block-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:1em}.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-block-value[_ngcontent-%COMP%]{width:50%;display:flex;justify-content:flex-start;align-items:center;color:#fff}@media (width < 401px){.main_container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lower-data[_ngcontent-%COMP%]   .more-info-container[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-block-value[_ngcontent-%COMP%]{width:initial}}"]}),i})()}];let h=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.Bz.forChild(f),d.Bz]}),i})(),C=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.ez,h,r.u5]}),i})()}}]);