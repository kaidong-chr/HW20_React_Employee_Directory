(this.webpackJsonpreact_employee_directory=this.webpackJsonpreact_employee_directory||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a(4),r=a.n(n),c=a(5),i=a(6),s=a(8),l=a(7),m=a(0);var u=function(e){var t=e.employee;return Object(m.jsx)("tr",{children:Object.keys(t).map((function(e){return Object(m.jsx)("td",{children:t[e]})}))})};var d=function(e){var t=e.employee;return Object(m.jsx)("tr",{className:"thead-dark",children:Object.keys(t).map((function(e){return Object(m.jsx)("th",{children:e})}))})},p=a(2),h=function(e){return Object(m.jsx)("form",{className:"d-flex",children:Object(m.jsx)("div",{children:Object(m.jsx)("input",{placeholder:"Enter An Employee Name",name:"search",type:"text",value:e.term,className:"form-control",onChange:function(t){e.handleInputChange(t)}})})})};var y=function(e){return Object(m.jsx)("th",{className:"thead-dark",children:Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.sortByName(e.order)},children:"Sort By Name"})})};var b=function(e){return Object(m.jsx)("th",{className:"thead-dark",children:Object(m.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.sortByLocation(e.order)},children:"Sort By Location"})})},j=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={employee:p,search:"",sortOrder:"asc",employeeDB:p},e.handleInputChange=function(t){var a=t.target.value;e.setState({search:a},(function(){return console.log(e.state.search)}));for(var o=e.state.employeeDB,n=[],r=e.state.search,c=0;c<o.length;c++)o[c].name.indexOf(r)>-1&&(console.log(o[c]),n.push(o[c]));console.log(e.state.search,n),""!==e.state.search?e.setState({employee:n}):e.setState({employee:e.state.employeeDB})},e.sortByName=function(t){if("asc"===t){var a=e.state.employee.sort((function(e,t){return e.name>t.name?1:-1}));e.setState({sortedEmployeeName:a,sortOrder:"desc"})}else{var o=e.state.employee.sort((function(e,t){return e.name<t.name?1:-1}));e.setState({sortedEmployeeName:o,sortOrder:"asc"})}},e.sortByLocation=function(t){if("asc"===t){var a=e.state.employee.sort((function(e,t){return e.Location>t.Location?1:-1}));e.setState({sortedEmployeeLocation:a,sortOrder:"desc"})}else{var o=e.state.employee.sort((function(e,t){return e.Location<t.Location?1:-1}));e.setState({sortedEmployeeLocation:o,sortOrder:"asc"})}},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"display-3",children:"Employee Directory"}),Object(m.jsx)(h,{term:this.state.search,handleInputChange:this.handleInputChange}),Object(m.jsx)(y,{sortByName:this.sortByName,order:this.state.sortOrder}),Object(m.jsx)(b,{sortByLocation:this.sortByLocation}),Object(m.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(m.jsx)(d,{employee:p[0]}),Object(m.jsx)("tbody",{children:this.state.employee.map((function(e){return Object(m.jsx)(u,{employee:e})}))})]})]})}}]),a}(o.Component);a(14),a(15);r.a.render(Object(m.jsx)(j,{}),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","occupation":"Fry Cook","location":"A Pineapple Under the Sea","email":"spongebob@gmail.com"},{"id":2,"name":"Mr. Krabs","occupation":"Restaurant Owner","location":"A Giant Anchor","email":"mkrabs@gmail.com"},{"id":3,"name":"Squidward","occupation":"Cashier","location":"An Easter Island Head","email":"squidward@gmail.com"},{"id":4,"name":"Dexter","occupation":"Boy Genius","location":"A Secret Laboratory","email":"morgan@gmail.com"},{"id":5,"name":"Courage","occupation":"A Cowardly Dog","location":"Nowhere, Kansas","email":"afraid@gmail.com"},{"id":6,"name":"Doug Funnie","occupation":"Student","location":"Bluffington","email":"mrfunny@gmail.com"},{"id":7,"name":"Bugs Bunny","occupation":"Looney Toon","location":"A Rabbit Burrow","email":"bugsbunny@gmail.com"},{"id":8,"name":"Johnny Bravo","occupation":"Ladies Man","location":"Aron City","email":"johnnyb@gmail.com"},{"id":9,"name":"Tommy Pickles","occupation":"Adventurer","location":"California","email":"tpickles@gmail.com"},{"id":10,"name":"Rocko","occupation":"Cashier","location":"O-Town","email":"rocko@gmail.com"},{"id":11,"name":"Captain Planet","occupation":"Superhero","location":"Earth","email":"mrplanet@gmail.com"},{"id":12,"name":"Ickis","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump","email":"ickis@gmail.com"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.27aecb6e.chunk.js.map