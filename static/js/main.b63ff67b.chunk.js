(this.webpackJsonpcovaxnotify=this.webpackJsonpcovaxnotify||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(5),l=c.n(i),s=(c(26),c(11)),o=c(3),r=(c(27),c(62)),d=c(10),j=c(19),b=c.n(j),h=c(61),u=c(1),m=function(e){var t=e.filteredData,c=e.label;return e.isLoading?Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)(h.a,{animation:"border",variant:"primary"}),Object(u.jsx)(h.a,{animation:"border",variant:"secondary"}),Object(u.jsx)(h.a,{animation:"border",variant:"success"}),Object(u.jsx)(h.a,{animation:"border",variant:"danger"}),Object(u.jsx)(h.a,{animation:"border",variant:"warning"}),Object(u.jsx)(h.a,{animation:"border",variant:"info"}),Object(u.jsx)(h.a,{animation:"border",variant:"dark"})]}):Object(u.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 table-responsive tableBox",children:[Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 tableLabel",children:c}),t.length>0&&Object(u.jsxs)("table",{className:"table table-striped table-bordered col-lg-12 col-md-12 col-sm-12 col-xs-12",id:"tbl",children:[Object(u.jsx)("thead",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsxs)("tr",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center",children:[Object(u.jsx)("th",{children:"Sr. No."}),Object(u.jsx)("th",{children:"Center"}),Object(u.jsx)("th",{children:"Pincode"}),Object(u.jsx)("th",{children:"Available Dose"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e,t){e.sessions;return Object(u.jsxs)("tr",{className:"text-center",children:[Object(u.jsx)("td",{children:t+1}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.pincode}),Object(u.jsx)("td",{children:e.total_available_capacity})]},t)}))})]})]})},p=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"template",children:"Just thought of making a small application which can be run from any machine without having to install any additional software. It will display real-time Vaccine Availability on Selected pincodes as well as other nearby pincodes. Please note - this provide very limited functionality. I just developed it to help people find vaccines more easily."}),Object(u.jsx)("p",{className:"template",children:"All you have to do is -"}),Object(u.jsx)("p",{className:"template",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Step 1 : Select State. It shall show you the list of cities in next dropdown."}),Object(u.jsx)("li",{children:"Step 2 : Select City/ District. It shall show you the list pincodes where the vaccines are currently available in that district."}),Object(u.jsx)("li",{children:"Step 3 : Select multiple pincodes that is closest to your location."}),Object(u.jsx)("li",{children:"Step 4 : Hit 'Track' button. It should start fetching the data from Cowin website every 2 seconds. and the table will get reflected in real-time and notification with sound will pop up"}),Object(u.jsx)("li",{children:"Step 5 : Hit 'Stop Notification' button. It should stop notification pop-up and sound."})]})}),Object(u.jsx)("p",{className:"template",children:"*Note - Notification pop-up will only appear for selected pincode data. But user will be able to see both filtered and unfiltered data."})]})},O=c(43);var x=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)([]),l=Object(o.a)(i,2),j=l[0],h=l[1],x=Object(a.useState)([]),v=Object(o.a)(x,2),f=v[0],g=v[1],N=Object(a.useState)([]),y=Object(o.a)(N,2),S=y[0],w=y[1],_=Object(a.useState)([]),D=Object(o.a)(_,2),C=D[0],I=D[1],k=Object(a.useState)([]),B=Object(o.a)(k,2),Y=(B[0],B[1]),F=Object(a.useState)([]),L=Object(o.a)(F,2),M=L[0],A=L[1],P=Object(a.useState)([]),T=Object(o.a)(P,2),E=T[0],J=T[1],H=Object(a.useState)(),V=Object(o.a)(H,2),W=V[0],q=V[1],z=Object(a.useState)(!1),G=Object(o.a)(z,2),K=G[0],Q=G[1],R=Object(a.useState)(!1),U=Object(o.a)(R,2),X=U[0],Z=U[1],$=Object(a.useState)([]),ee=Object(o.a)($,2),te=ee[0],ce=ee[1],ae=function(e,t){return t?e.filter((function(e){return e.min_age_limit===t})):e},ne=function(e,t){Q(!0);var c=t.selectedOption,a=[];c&&c.length>0&&c.filter((function(e,t){a.push(e.value)}));var n=e.reduce((function(e,t){var c=t.name,n=t.pincode,i=t.sessions;if(a.includes(n)){var l=ae(i);if(l.length){var o=l.reduce((function(e,t){return e+t.available_capacity}),0);return o&&function(e,t,c){if(c.includes(e)){var a=document.getElementById("notif_sound");a&&a.play(),b()({title:e,subtitle:t,message:t,theme:"darkblue",silent:!1,native:!0})}}(n,c,a),[].concat(Object(s.a)(e),[{name:c,pincode:n,sessions:i,total_available_capacity:o}])}return e}return e}),[]);J(n),Q(!1)},ie=function(e){Q(!0);var t=O(new Date).format("DD-MM-YYYY");fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=".concat(e,"&date=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.centers;t.length>0&&(Y(t),function(e){var t=[];Object(s.a)(new Set(e.map((function(e){return e.pincode})))).map((function(e){return t.push({value:e,label:e})})),g(t)}(t),function(e){var t=e.reduce((function(e,t){var c=t.name,a=t.pincode,n=t.sessions,i=ae(n);if(i.length){var l=i.reduce((function(e,t){return e+t.available_capacity}),0);return[].concat(Object(s.a)(e),[{name:c,pincode:a,sessions:n,total_available_capacity:l}])}return e}),[]);A(t)}(t),Q(!1))})).catch((function(){Z(!0),Q(!1)}))};Object(a.useEffect)((function(){fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(e){return e.json()})).then((function(e){var t=e.states,c=[];t.map((function(e){c.push({value:e.state_id,label:e.state_name})})),n(c)}))}),[]);var le=function(e){fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.districts,c=[];t.map((function(e){return c.push({value:e.district_id,label:e.district_name})})),h(c)}))};return Object(u.jsxs)("div",{className:"App ",children:[Object(u.jsx)("header",{className:"App-header col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsx)("h3",{children:"Welcome To Vaccine Notification !"})}),Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsx)(p,{})}),Object(u.jsxs)("div",{className:"row col-lg-12 col-md-12 col-sm-12 col-xs-12 selectBox",children:[Object(u.jsxs)("div",{className:"col-lg-3 col-md-3 col-sm-12 col-xs-12",children:[Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 row row-no-padding",children:Object(u.jsx)("label",{children:"Select State"})}),Object(u.jsx)(d.a,{value:C.state_id,onChange:function(e){I({selectedOption:e}),le(e.value)},options:c})]}),Object(u.jsxs)("div",{className:"col-lg-2 col-md-3 col-sm-12 col-xs-12",children:[Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 row row-no-padding",children:Object(u.jsx)("label",{children:"Select City/ District"})}),Object(u.jsx)(d.a,{value:C.district_id,onChange:function(e){ce(e),ie(e.value,S.selectedOption)},options:j})]}),Object(u.jsxs)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:[Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 row row-no-padding",children:Object(u.jsx)("label",{children:"Select Nearest Pincodes"})}),Object(u.jsx)(d.a,{value:S.pincode,onChange:function(e){w({selectedOption:e})},options:f,isMulti:!0})]}),Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("div",{className:"",children:Object(u.jsx)("label",{children:" "})}),Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)(r.a,{onClick:function(){W&&clearInterval(W),q(setInterval((function(){var e=O(new Date).format("DD-MM-YYYY"),t=te.value;fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=".concat(t,"&date=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.centers;t.length>0&&ne(t,S)}))}),2e3))},variant:"primary",children:"Track"})})]}),Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("div",{className:"",children:Object(u.jsx)("label",{children:" "})}),Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)(r.a,{onClick:function(){W&&clearInterval(W)},variant:"primary",children:"Stop Notification"})})]})]}),X&&0===M.length?Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsx)("label",{className:"text-danger",children:"Data not available at the moment!"})}):Object(u.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:[E.length>0&&Object(u.jsx)(m,{filteredData:E,label:"Filtered Data",isLoading:K}),M.length>0&&Object(u.jsx)(m,{filteredData:M,label:"Other Data",isLoading:K})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),i(e),l(e)}))};l.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),v()}},[[60,1,2]]]);
//# sourceMappingURL=main.b63ff67b.chunk.js.map