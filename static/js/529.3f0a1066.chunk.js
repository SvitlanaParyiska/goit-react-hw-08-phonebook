"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[529],{9529:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var a,r=t(2791),i=t(168),c=t(9256).zo.div(a||(a=(0,i.Z)(["\n  text-align: center;\n  font-size: 20px;\n  width: 400px;\n  padding: 10px;\n  margin: 0 auto;\n"]))),s=t(4165),l=t(5861),o=t(9439),u=t(3855),m=t(3871),d=t(2286),p=t(1686),x=t.n(p),h=t(184),f=function(e){e.createContact;var n=(0,u.I0)(),t=(0,r.useState)(""),a=(0,o.Z)(t,2),i=a[0],c=a[1],p=(0,r.useState)(""),f=(0,o.Z)(p,2),b=f[0],v=f[1],j=(0,u.v9)(d.Af),N=function(e){var n=e.target,t=n.value;"name"===n.name?c(t):v(t)},y=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target,!j.find((function(e){return e.name.toLowerCase()===i.toLowerCase()}))){e.next=6;break}return x().Notify.warning("".concat(i," is already in contacts.")),e.abrupt("return");case 6:return e.prev=6,e.next=9,n((0,m.uK)({name:i,number:b})).unwrap();case 9:n((0,m.yF)()),c(""),v(""),a.reset(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{className:"card p-5 mx-auto mt-5",style:{width:400},children:(0,h.jsxs)("form",{className:"mb-3",onSubmit:y,children:[(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{htmlFor:"exampleInputName",className:"form-label",children:"Name"}),(0,h.jsx)("input",{name:"name",type:"text",onChange:N,className:"form-control && 'is-invalid'}",id:"exampleInputName",value:i,required:!0}),(0,h.jsx)("div",{className:"invalid-feedback",children:"Please input contact name"})]}),(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{htmlFor:"exampleInputContactNumber",className:"form-label",children:"Number"}),(0,h.jsx)("input",{name:"number",type:"tel",onChange:N,className:"form-control  && 'is-invalid'}",id:"exampleInputContactNumber",value:b,required:!0}),(0,h.jsx)("div",{className:"invalid-feedback",children:"Please input contact number"})]}),(0,h.jsx)("button",{type:"submit",className:"btn btn-info",children:"Add contact"})]})})},b=function(e){var n=e.handleEdit,t=e.oldName,a=e.oldNumber,i=e.cancelEdit,c=(0,r.useState)(t),s=(0,o.Z)(c,2),l=s[0],u=s[1],m=(0,r.useState)(a),d=(0,o.Z)(m,2),p=d[0],x=d[1],f=function(e){var n=e.target,t=n.value,a=n.name;"name"!==a?"number"!==a?console.log("error"):x(t):u(t)};return(0,h.jsx)("div",{className:"card p-2 mx-auto mt-2",style:{maxWidth:400},children:(0,h.jsxs)("form",{className:"mb-1",onSubmit:function(e){e.preventDefault();var t=e.target;n({name:l,number:p}),u(""),x(""),t.reset()},children:[(0,h.jsxs)("div",{className:"mb-1",children:[(0,h.jsx)("label",{htmlFor:"exampleInputName",className:"form-label",children:"Name"}),(0,h.jsx)("input",{name:"name",type:"text",onChange:f,className:"form-control && 'is-invalid'}",id:"exampleInputName",value:l,required:!0})]}),(0,h.jsxs)("div",{className:"mb-1",children:[(0,h.jsx)("label",{htmlFor:"exampleInputContactNumber",className:"form-label",children:"Number"}),(0,h.jsx)("input",{name:"number",type:"tel",onChange:f,className:"form-control  && 'is-invalid'}",id:"exampleInputContactNumber",value:p,required:!0})]}),(0,h.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Edit contact"})," ",(0,h.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:i,children:"Cancel"})]})})},v=t(8571),j=t(1889),N=t(7621),y=t(8670),Z=t(3044),g=t(2363),C=t(8546),w=function(e){var n,t,a=e.contact,i=(0,r.useState)(!1),c=(0,o.Z)(i,2),d=c[0],p=c[1],x=(0,u.I0)(),f=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x((0,m.GK)(n)).unwrap();case 3:x((0,m.yF)()),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(n){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.name,r=n.number,e.prev=1,e.next=4,x((0,m._n)({contactId:a.id,name:t,number:r})).unwrap();case 4:x((0,m.yF)()),p(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j.ZP,{item:!0,children:(0,h.jsxs)(N.Z,{sx:{maxWidth:500},children:[(0,h.jsx)(y.Z,{avatar:(0,h.jsx)(Z.Z,{sx:{bgcolor:C.Z[500]},"aria-label":"contact",children:null===(n=a.name)||void 0===n||null===(t=n.at(0))||void 0===t?void 0:t.toUpperCase()}),title:a.name,subheader:a.number}),(0,h.jsxs)(g.Z,{children:[(0,h.jsx)(v.Z,{size:"small",variant:"outlined",type:"button",sx:{mr:5},color:"primary",onClick:function(){p(!0)},children:"Edit"}),(0,h.jsx)(v.Z,{size:"small",type:"button",variant:"contained",color:"info",onClick:function(){return f(a.id)},children:"Delete"})]})]})},a.id),d&&(0,h.jsx)(b,{handleEdit:w,oldName:a.name,oldNumber:a.number,cancelEdit:function(){p(!1)}})]})},k=function(){var e=(0,u.v9)(d.hF);return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(j.ZP,{container:!0,direction:"row",spacing:4,justifyContent:"center",children:e.map((function(e){return(0,h.jsx)(w,{contact:e},e.id)}))})})},F=t(6895),I=t(4554),E=t(9513),S=function(){var e=(0,u.I0)();return(0,h.jsx)(I.Z,{component:"div",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,h.jsx)(E.Z,{id:"outlined-multiline-static",label:"Filter by name",type:"text",name:"filter",onChange:function(n){e((0,F.T)(n.target.value.toLowerCase()))},value:(0,u.v9)(d.AD)})})},q=function(e){var n=e.text;return(0,h.jsx)("p",{children:n})};function z(){var e=(0,u.v9)(d.Af),n=(0,u.v9)(d.xU),t=(0,u.v9)(d.zh),a=(0,u.I0)();return(0,r.useEffect)((function(){a((0,m.yF)())}),[a]),(0,h.jsxs)(c,{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(f,{}),(0,h.jsx)("h2",{children:"Contacts"}),e.length>0?(0,h.jsx)(S,{}):(0,h.jsx)(q,{text:"Your phonebook is empty. Add first contact!"}),n&&!t&&(0,h.jsx)("b",{children:"Request in progress..."}),(0,h.jsx)(k,{})]})}}}]);
//# sourceMappingURL=529.3f0a1066.chunk.js.map