(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={input:"Filter_input__2RE6g",label:"Filter_label__1xOhf"}},11:function(t,e,n){t.exports={list:"ContactList_list__2SPjh",item:"ContactList_item__thnmJ"}},13:function(t,e,n){t.exports={btn:"ContactListItem_btn__2zgUv"}},2:function(t,e,n){t.exports={label:"ContactForm_label__3jv3e",form:"ContactForm_form__1y5Jw",input:"ContactForm_input__3h4t1",btn:"ContactForm_btn__16lFO"}},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),i=n(14),o=n(9),l=n(4),u=n(5),b=n(7),m=n(6),h=n(3),j=n(23),d=n(2),f=n.n(d),p=n(0),O=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.reset=function(){t.setState({name:"",number:""})},t.handleChange=function(e){t.setState(Object(h.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form,children:[Object(p.jsxs)("label",{className:f.a.label,children:["Name",Object(p.jsx)("input",{id:Object(j.a)(),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,className:f.a.input})]}),Object(p.jsxs)("label",{className:f.a.label,children:["Number",Object(p.jsx)("input",{id:Object(j.a)(),type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,className:f.a.input})]}),Object(p.jsx)("button",{type:"submit",className:f.a.btn,children:"Add contact"})]})})}}]),n}(a.Component),x=O,v=n(10),g=n.n(v),_=function(t){var e=t.filter,n=t.changeFilter;return Object(p.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(p.jsx)("input",{type:"text",value:e,onChange:n,className:g.a.input})]})},C=n(11),N=n.n(C),S=n(13),y=n.n(S),F=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDelete;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:[e,": ",n]}),Object(p.jsx)("button",{type:"button",onClick:function(){return c(a)},className:y.a.btn,children:"Delete"})]})},k=function(t){var e=t.contacts,n=(t.filter,t.onDelete);return Object(p.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(p.jsx)("li",{className:N.a.item,children:Object(p.jsx)(F,{name:e,number:a,id:c,onDelete:n})},c)}))})},w=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitData=function(e){if(t.checkNewName(e.name))alert("".concat(e.name," is already in contact!"));else{var n=Object(o.a)(Object(o.a)({},e),{},{id:Object(j.a)()});t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(i.a)(e),[n])}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.checkNewName=function(e){return t.state.contacts.find((function(t){return t.name===e}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(x,{onSubmit:this.formSubmitData}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(_,{filter:this.state.filter,changeFilter:this.changeFilter}),Object(p.jsx)(k,{contacts:e,filter:this.state.filter,onDelete:this.deleteContact})]})}}]),n}(a.Component),D=w;n(21);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f00c6a6a.chunk.js.map