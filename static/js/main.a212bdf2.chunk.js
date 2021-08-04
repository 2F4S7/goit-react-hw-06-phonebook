(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={number:"ContactList_number__14V4G",name:"ContactList_name__2WLgA",item:"ContactList_item__3YsZK",list:"ContactList_list__2T7aG",button:"ContactList_button__1RuFy",form:"ContactList_form__2qOOQ"}},11:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},15:function(t,e,n){t.exports={title:"btn_title__2HChD",head:"btn_head__2XiR5",button:"btn_button__1xT6j"}},21:function(t,e,n){t.exports={title:"Top_title__1LKvR",top:"Top_top__38JaS"}},22:function(t,e,n){t.exports={title:"Bottom_title__FDBvL",bottom:"Bottom_bottom__1kTT7"}},23:function(t,e,n){t.exports={input:"Filter_input__2DoVp",label:"Filter_label__3DcZT"}},31:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);n(31),n(32);var a=n(0),c=n.n(a),r=n(13),o=n.n(r),i=n(3),s=n(8),l=n(24),u=n(25),b=n(30),m=n(29),d=n(4),j=n(5),h=n(49),f={addContact:Object(j.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(h.a)(),name:e,number:n}}})),deleteContact:Object(j.b)("contacts/delete"),filterContacts:Object(j.b)("contacts/filter")},p=n(11),O=n.n(p),_=n(1),x=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.props.contacts.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts")):t.props.onSubmit(Object(i.a)({},t.state)),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleSubmit,c=this.handleChange;return Object(_.jsxs)("form",{onSubmit:a,children:[Object(_.jsxs)("label",{className:O.a.label,children:["Name",Object(_.jsx)("input",{className:O.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:c})]}),Object(_.jsxs)("label",{className:O.a.label,children:["Number",Object(_.jsx)("input",{className:O.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:c})]}),Object(_.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=Object(d.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(f.addContact(e))}}}))(x),v=n(48),g=(n(42),n(15)),N=n.n(g),k=function(t){var e=t.title,n=t.button;return Object(_.jsxs)("header",{className:N.a.head,children:[Object(_.jsx)("h1",{className:N.a.title,children:e}),Object(_.jsx)(v.a,{className:N.a.button,href:"https://github.com/2F4S7/goit-react-hw-06-phonebook",target:"_blank",variant:"dark",children:"Github Repository"},n)," "]})},y=k;k.defaultProps={title:""};var F=n(21),L=n.n(F),w=function(t){var e=t.title,n=t.children;return Object(_.jsxs)("section",{className:L.a.top,children:[Object(_.jsx)("h2",{className:L.a.title,children:e}),n]})};w.defaultProps={title:"New section"};var S=w,A=n(22),T=n.n(A),B=function(t){var e=t.title,n=t.children;return Object(_.jsxs)("section",{className:T.a.bottom,children:[Object(_.jsx)("h2",{className:T.a.title,children:e}),n]})};B.defaultProps={title:"New section"};var D,R=B,Z=n(10),z=n.n(Z),P=Object(d.b)(null,(function(t){return{onClick:function(e){return t(f.deleteContact(e))}}}))((function(t){var e=t.id,n=t.name,a=t.number,c=t.onClick;return Object(_.jsxs)("li",{className:z.a.item,children:[Object(_.jsx)("p",{className:z.a.name,children:n}),Object(_.jsx)("p",{className:z.a.number,children:a}),Object(_.jsx)("button",{className:z.a.button,type:"button",onClick:function(){return c(e)},children:"Delete"})]})})),J=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},K=Object(d.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:J(n,a)}}))((function(t){var e=t.contacts;return Object(_.jsx)("ul",{className:z.a.form,children:e.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(_.jsx)(P,{name:n,number:a,id:e},e)}))})})),q=n(23),G=n.n(q),H=Object(d.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){var n=e.target.value;return t(f.filterContacts(n))}}}))((function(t){var e=t.value,n=t.onChange;return Object(_.jsxs)("label",{className:G.a.label,children:["Find contacts by name",Object(_.jsx)("input",{className:G.a.input,type:"text",value:e,onChange:n})]})})),M=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(y,{title:"React Home Work Phonebook 06"}),Object(_.jsx)(S,{title:"Phonebook",children:Object(_.jsx)(C,{})}),Object(_.jsxs)(R,{title:"Contacts",children:[Object(_.jsx)(H,{}),Object(_.jsx)(K,{})]})]})},E=n(14),V=n(7),W=n(27),I=n.n(W),Q=n(2),X=Object(j.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(D={},Object(s.a)(D,f.addContact,(function(t,e){return[e.payload].concat(Object(E.a)(t))})),Object(s.a)(D,f.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),D)),Y=Object(j.c)("",Object(s.a)({},f.filterContacts,(function(t){return t.payload}))),$=Object(Q.b)({items:X,filter:Y}),U={key:"contacts",storage:I.a,blacklist:["filter"]},tt=Object(E.a)(Object(j.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),et=Object(j.a)({reducer:{contacts:Object(V.g)(U,$)},middleware:tt,devTools:!1}),nt=Object(V.h)(et),at=n(28);o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(d.a,{store:et,children:Object(_.jsx)(at.a,{loading:null,persistor:nt,children:Object(_.jsx)(M,{})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a212bdf2.chunk.js.map