"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[337],{2337:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var r=t(5861),a=t(7757),i=t.n(a),o=t(9434),s=t(6409),c=t(4772),u=t(4569),p=t.n(u),l=t(7396);p().defaults.baseURL="https://connections-api.herokuapp.com";var d,x,h,m,f,g,b,w,v,Z,j,y,k,z,A,C,L,S,F=function(){return function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e((0,l.Ij)()),n.next=3,p()("/contacts");case 3:return t=n.sent,n.prev=4,n.next=7,t.data;case 7:r=n.sent,e((0,l.qI)(r)),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(4),e((0,l.s8)(n.t0.message)),s.Am.error("Sorry! Something went wrong.");case 15:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e){return n.apply(this,arguments)}}()},I=function(n){return function(){var e=(0,r.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().post("/contacts",n);case 2:return r=e.sent,e.prev=3,e.next=6,r.data;case 6:t(F()),s.Am.success('"'.concat(n.name,'" added to your contacts!')),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),t((0,l.s8)(e.t0.message)),s.Am.error("Sorry! Something went wrong.");case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}()},_=t(168),q=t(1223),N=q.Z.div(d||(d=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]))),T=q.Z.form(x||(x=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 20px;\n  width: 250px;\n  font-size: 22px;\n  font-weight: 500;\n"]))),P=q.Z.label(h||(h=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n"]))),B=q.Z.input(m||(m=(0,_.Z)(["\n  outline: none;\n  padding: 5px;\n  margin-top: 5px;\n  border: 1px solid aliceblue;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),D=q.Z.button(f||(f=(0,_.Z)(["\n  cursor: pointer;\n  width: 100px;\n  margin-left: auto;\n  margin-top: 5px;\n  padding: 5px;\n  font-weight: 600;\n  border: none;\n  border-radius: 4px;\n  outline: none;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  transform: scale(1);\n\n  &:hover,\n  &:focus {\n    background-color: lightgoldenrodyellow;\n\n    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n\n  &:active {\n    box-shadow: rgba(0, 0, 0, 0.44) 0px 3px 8px;\n    transform: scale(0.95);\n\n    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n"]))),E=q.Z.div(g||(g=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),J=t(184),M=function(){var n=(0,o.v9)((function(n){return n.items})),e=n.contacts,t=n.isLoading,a=n.isSuccess,u=(0,o.I0)(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var r,o,c,p;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),r=t.currentTarget,o=r.elements.name.value,c=r.elements.number.value,!e.find((function(n){return n.name.toLowerCase()===o.toLocaleLowerCase()}))){n.next=6;break}return n.abrupt("return",s.Am.warn('"'.concat(o,'" is already in contacts.')));case 6:return p={name:o,number:c},n.next=9,u(I(p));case 9:a&&r.reset();case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,J.jsxs)(N,{children:[(0,J.jsxs)(T,{onSubmit:p,children:[(0,J.jsxs)(P,{htmlFor:"",children:["Name",(0,J.jsx)(B,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,J.jsxs)(P,{htmlFor:"",children:["Number",(0,J.jsx)(B,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,J.jsx)(D,{type:"submit",disabled:t,children:t?(0,J.jsx)(E,{children:(0,J.jsx)(c.gy,{color:"#000",height:16,width:16})}):"+Add Contact"})]}),(0,J.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/1485/1485097.png",alt:"Phonebook",width:"125px"})]})},R=t(8880),U=q.Z.div(b||(b=(0,_.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  margin-bottom: 30px;\n"]))),$=q.Z.label(w||(w=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]))),G=q.Z.input(v||(v=(0,_.Z)(["\n  width: 200px;\n  outline: none;\n  padding: 5px;\n  border: 1px solid aliceblue;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),H=function(){var n=(0,o.v9)((function(n){return n.filter.value})),e=(0,o.I0)();return(0,J.jsx)(U,{children:(0,J.jsxs)($,{htmlFor:"",children:[(0,J.jsx)(G,{type:"text",value:n,onChange:function(n){e((0,R.Tv)(n.currentTarget.value))}}),"Find contacts by name"]})})},K=t(2791),O=q.Z.ul(Z||(Z=(0,_.Z)(["\n  margin: 10px 0;\n  padding: 5px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),Q=q.Z.li(j||(j=(0,_.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),V=q.Z.div(y||(y=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n\n  img {\n    margin-right: 5px;\n  }\n\n  span {\n    width: 150px;\n    margin-right: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]))),W=q.Z.button(k||(k=(0,_.Z)(["\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  background-image: url('https://cdn-icons-png.flaticon.com/512/6861/6861362.png');\n  background-size: cover;\n  border: none;\n  background-color: transparent;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n\n    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n\n  &:active {\n    transform: scale(0.95);\n\n    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n"]))),X=q.Z.div(z||(z=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),Y=function(){var n=(0,o.v9)((function(n){return n.filter.value})),e=(0,o.v9)((function(n){return n.items})),t=e.contacts,a=e.isLoading,u=e.error,d=(0,o.I0)(),x=function(n,e){var t;d((t=n,function(){var n=(0,r.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p().delete("/contacts/".concat(t));case 2:return r=n.sent,n.prev=3,n.next=6,r.data;case 6:e(F()),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(3),e((0,l.s8)(n.t0.message)),s.Am.error("Sorry! Something went wrong.");case 13:case"end":return n.stop()}}),n,null,[[3,9]])})));return function(e){return n.apply(this,arguments)}}())),s.Am.info('"'.concat(e,'" deleted from your contacts!'))};return(0,K.useEffect)((function(){d(F())}),[d]),(0,J.jsxs)(J.Fragment,{children:[u&&(0,J.jsx)("p",{children:u}),t?(0,J.jsx)(O,{children:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(n){return(0,J.jsxs)(Q,{children:[(0,J.jsxs)(V,{children:[(0,J.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/64/64572.png",alt:"contact-icon",width:"15px",height:"15px"}),(0,J.jsx)("span",{children:n.name}),(0,J.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/455/455705.png",alt:"contact-icon",width:"15px",height:"15px"}),(0,J.jsx)("span",{children:n.number})]}),(0,J.jsx)(W,{type:"button",onClick:function(){return x(n.id,n.name)},disabled:a})]},n.id)}))}):(0,J.jsx)(X,{children:(0,J.jsx)(c.gy,{color:"#000",height:25,width:25})})]})},nn=q.Z.section(A||(A=(0,_.Z)(["\n  width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  background-color: aliceblue;\n  border: 2px solid lightblue;\n  border-radius: 6px;\n"]))),en=q.Z.div(C||(C=(0,_.Z)(["\n  padding: 10px 10px 15px;\n"]))),tn=q.Z.div(L||(L=(0,_.Z)(["\n  padding: 0 15px;\n"]))),rn=q.Z.h1(S||(S=(0,_.Z)(["\n  margin: 30px 0 20px;\n  text-align: center;\n  color: #007bcd;\n  text-shadow: 1px 1px 3px #2c2c2c;\n"])));function an(){return(0,J.jsxs)(nn,{children:[(0,J.jsx)(en,{children:(0,J.jsx)(M,{})}),(0,J.jsx)(rn,{children:"Contacts"}),(0,J.jsxs)(tn,{children:[(0,J.jsx)(H,{}),(0,J.jsx)(Y,{})]})]})}}}]);
//# sourceMappingURL=337.3bfee8f3.chunk.js.map