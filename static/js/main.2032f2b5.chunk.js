(this["webpackJsonpvocabulary-app"]=this["webpackJsonpvocabulary-app"]||[]).push([[0],{104:function(t,e,a){},123:function(t,e,a){},124:function(t,e,a){},125:function(t,e,a){},126:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(10),s=a.n(o),r=(a(96),a(45)),c=a(46),l=a(55),d=a(54),h=(a(97),a(98),a(36)),u=a(47),p=a(169),j=a(170),b=a(167),x=a(184),f=a(164),m=a(14),g=a(77),O=a.n(g),y=a(52),v=a.n(y),w=a(3),M=Object(f.a)((function(t){return{root:{width:"100%",maxHeight:"56px",position:"fixed",top:"0",zIndex:"10"},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1,display:"flex",paddingBottom:"10px"},search:{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(m.c)(t.palette.common.white,0),marginLeft:0},searchIcon:{padding:t.spacing(.2,0),height:"100%",width:"6%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:"5px","&:hover":{cursor:"pointer"}},inputRoot:{color:"inherit",width:"100%",paddingBottom:"10px"},inputInput:Object(u.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(5),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),closeButton:{paddingBottom:"10px","&:hover":{cursor:"pointer"}}}}));function S(t){var e=M(),a=Object(n.useState)(!1),i=Object(h.a)(a,2),o=i[0],s=i[1],r=Object(n.useState)("0"),c=Object(h.a)(r,2),l=c[0],d=c[1],u=null,f=Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{className:e.title,variant:"h6",noWrap:!0,children:"Vocab"})}),m=null;return o&&(u=Object(w.jsx)(x.a,{autoFocus:!0,classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return t.searchBarQuery(e)},placeholder:"Search"}),f=null,m=Object(w.jsx)(v.a,{onClick:function(){s((function(t){return!t})),d("0"),t.isNotSearching()},className:e.closeButton})),Object(w.jsx)("div",{className:e.root,children:Object(w.jsx)(p.a,{position:"static",children:Object(w.jsxs)(j.a,{style:{display:"flex",justifyContent:"space-between"},children:[f,Object(w.jsxs)("div",{className:e.search,style:{width:l},children:[Object(w.jsx)("div",{className:e.searchIcon,children:Object(w.jsx)(O.a,{onClick:function(){s((function(t){return!t})),d("100%"),t.isSearching()},style:{paddingBottom:"10px"}})}),u]}),m]})})})}var N=a(82),C=a(172),k=a(78),B=a.n(k),D=a(171);function I(t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,{searchBarQuery:t.searchBarQuery,isSearching:t.isSearching,isNotSearching:t.isNotSearching}),Object(w.jsx)(N.a,{elevation:0,id:"layout-paper",children:"Word List"}),Object(w.jsx)(D.a,{id:"layout-paper-divider",light:!0}),Object(w.jsx)("div",{className:"layout-add-icon",style:{zIndex:"500"},children:Object(w.jsx)(C.a,{size:"small",color:"primary","aria-label":"add",onClick:t.openModal,children:Object(w.jsx)(B.a,{})})})]})}var A=a(182),P=a(176),z=a(128),F=a(181),H=a(174),R=a(175);a(104);function Q(t){var e=null,a=null,n=function t(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n.definitions&&(e=Object(w.jsx)("p",{className:"word-info-modal-definition",children:n.definitions}),n.examples&&(a=n.examples.map((function(t,e){return Object(w.jsx)("li",{children:t.text},e)}))));var s=null;return n.subsenses&&(s=n.subsenses.map((function(e,a){return t(e,a)}))),Object(w.jsxs)(i.a.Fragment,{children:[e,Object(w.jsx)("ul",{className:"word-info-modal-example-list",children:a}),s]},o)},o=t.data.lexicalEntries.map((function(t,e){return Object(w.jsxs)(i.a.Fragment,{children:[0!==e?Object(w.jsx)("div",{style:{width:"100%",height:"3px",display:"block"},children:Object(w.jsx)(D.a,{style:{display:"flex"},light:!0})}):null,Object(w.jsx)("p",{className:"word-info-modal-word"+(0===e?" word-info-modal-first-word":""),children:t.lexicalCategory.id}),t.entries.map((function(t,e){return Object(w.jsxs)(i.a.Fragment,{children:[t.etymologies?Object(w.jsx)("p",{className:"word-info-modal-etymology",children:t.etymologies}):null,Object(w.jsx)("div",{children:t.senses.map((function(t,e){return Object(w.jsx)("div",{children:n(t)},e+10)}))})]},e+100)}))]},e+1e3)}));return Object(w.jsx)(w.Fragment,{children:o})}var T=a(33),W=a.n(T),L=(a(123),Object(f.a)((function(t){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflowY:"scroll"},paper1:{backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,2,.5)},paper2:{backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,2,.5),width:"100%",minHeight:"5000px",overflowY:"auto"},infoHead:{backgroundColor:"white",position:"fixed",width:"97%",top:"0",zIndex:"1"},closeModalIcon:{position:"fixed",right:"25px","&:hover":{cursor:"pointer"}},wordInfoHead:{marginTop:"50px",marginBottom:"0",fontSize:"40px"},buttonProgress:{color:"primary",position:"absolute",marginTop:"14px",marginRight:"19px"}}})));function _(t){var e=L(),a=Object(n.useState)(!1),i=Object(h.a)(a,2),o=i[0],s=i[1],r=Object(n.useState)(""),c=Object(h.a)(r,2),l=c[0],d=c[1],u=null;return t.addModal?u=Object(w.jsxs)("div",{className:e.paper1,style:{height:t.modalHeight,width:t.modalWidth},children:[Object(w.jsx)("h3",{id:"transition-modal-title",children:"Add to Dictionary"}),Object(w.jsx)(F.a,{autoFocus:!0,id:"standard-required",label:"New Word",onChange:function(t){return d(t.target.value)},defaultValue:"",InputLabelProps:{shrink:!0},autoComplete:"off"}),Object(w.jsxs)("div",{className:"add-modal-button",children:[Object(w.jsx)(H.a,{color:"primary",onClick:function(){s(!o),W.a.post("/dictionary/add/word/".concat(l)).then((function(e){s(!o),t.closeModal(l)})).catch((function(e){s(!o),t.closeModal("error",e.message)}))},disabled:o,children:"Add"}),o&&Object(w.jsx)(R.a,{size:24,className:e.buttonProgress}),Object(w.jsx)(H.a,{color:"primary",onClick:t.closeModal,children:"Cancel"})]})]}):t.wordModal&&(u=Object(w.jsxs)("div",{className:e.paper2,children:[Object(w.jsxs)("div",{className:e.infoHead,children:[Object(w.jsx)(v.a,{onClick:t.closeModal,className:e.closeModalIcon}),Object(w.jsx)("h1",{id:"transition-modal-title",className:e.wordInfoHead,children:t.data._id}),Object(w.jsx)("div",{style:{width:"100%",height:"3px",display:"block"},children:Object(w.jsx)(D.a,{style:{display:"flex"},light:!0})})]}),Object(w.jsx)("div",{style:{position:"absolute",top:"110px",width:"97%"},children:Object(w.jsx)("div",{style:{width:"98%"},children:Object(w.jsx)(Q,{data:t.data})})})]})),Object(w.jsx)("div",{style:{width:"100%",overflowY:"auto"},children:Object(w.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:t.openModal,onClose:t.closeModal,closeAfterTransition:!0,BackdropComponent:P.a,BackdropProps:{timeout:600},children:Object(w.jsx)(z.a,{in:t.openModal,children:u})})})}a(124);var E=a(177),Y=a(178),J=Object(f.a)({root:{minWidth:200},title:{fontSize:10},pos:{marginBottom:12},content:{display:"flex",flexDirection:"column",alignItems:"flex-start",fontSize:"20px"},wordInfo:{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"flex-start",textAlign:"left",fontSize:"15px"}});function V(t){var e=J(),a=t.data.lexicalEntries.map((function(t,a){return Object(w.jsxs)(b.a,{variant:"body2",component:"p",className:e.wordInfo,children:["(",t.lexicalCategory.id,") ",t.entries?t.entries[0].senses[0].definitions:""]},a)}));return Object(w.jsx)(E.a,{className:e.root,variant:"outlined",onClick:t.openCard(t.data._id),children:Object(w.jsxs)(Y.a,{className:e.content,children:[Object(w.jsx)(b.a,{variant:"h5",component:"h2",children:t.data._id}),a]})})}var q=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).setInfoModalData=function(t){for(var e,a=n.props.dictionaryData,i=0;i<a.length;++i)if(a[i]._id===t){e=a[i];break}return e},n.toggleModal=function(t){var e=n.state.showModal,a=n.setInfoModalData(t);n.setState({showModal:!e,infoModalData:a})},n.state={showModal:!1,infoModalData:null},n}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e=null;this.state.showModal&&(e=Object(w.jsx)(_,{openModal:this.state.showModal,closeModal:this.toggleModal.bind(this),wordModal:!0,modalHeight:"100%",modalWidth:"100%",data:this.state.infoModalData}));var a=Object(w.jsxs)("div",{style:{marginTop:"200px"},children:[Object(w.jsx)(R.a,{size:80,thickness:2})," "]}),n=this.props.dictionaryData;return n&&(a=n.map((function(e){return Object(w.jsx)(V,{openCard:function(e){return t.toggleModal.bind(t,e)},data:e},e._id)}))),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"cards-container",children:[e,a]})})}}]),a}(n.Component),G=a(63),K=a(183),U=a(179);a(125);function X(t){return Object(w.jsx)(U.a,Object(G.a)(Object(G.a)({},t),{},{direction:"up"}))}function Z(t){return Object(w.jsx)("div",{children:Object(w.jsx)(K.a,{open:t.open,TransitionComponent:X,onClose:t.close,message:t.message,style:{bottom:"-4px"},autoHideDuration:3e3,disableWindowBlurListener:!0})})}var $=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).fetchDictionary=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];n.state.dictionaryData&&!t||W.a.get("/dictionary").then((function(e){n.updateDictionary(e.data,t)})).catch((function(t){n.setState({showPopAlert:!0,message:t.message})}))},n.updateDictionary=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a="";e&&(a="Queued successfully!"),n.setState({dictionaryData:t.reverse(),showPopAlert:e,data:t,message:a})},n.toggleModal=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a="";"error"===t&&(a=e);var i=n.state.showModal;n.setState({showModal:!i,message:a,showPopAlert:""!==a}),"string"===typeof t&&"error"!==t&&n.fetchDictionary(!0)},n.searchBarQuery=function(t){for(var e=t.target.value,a=new RegExp(e),i=n.state.dictionaryData,o=[],s=0;s<i.length;++s)i[s]._id.match(a)&&o.push(i[s]);n.setState({searchBarTxt:e,data:o})},n.isSearching=function(){n.setState({data:null})},n.isNotSearching=function(){n.setState({data:n.state.dictionaryData})},n.state={dictionaryData:null,data:null,showModal:!1,searchBarTxt:"",message:"",showPopAlert:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.fetchDictionary()}},{key:"render",value:function(){var t=this,e=null;this.state.showModal&&(e=Object(w.jsx)(_,{openModal:this.state.showModal,closeModal:this.toggleModal.bind(this),addModal:!0}));var a=null;return this.state.showPopAlert&&(a=Object(w.jsx)(Z,{open:this.state.showPopAlert,message:this.state.message,close:function(){return t.setState({showPopAlert:!1})}})),Object(w.jsxs)("div",{className:"App",children:[e,Object(w.jsxs)("header",{className:"App-header",children:[Object(w.jsx)(I,{openModal:this.toggleModal.bind(this),searchBarQuery:this.searchBarQuery.bind(this),isSearching:this.isSearching.bind(this),isNotSearching:this.isNotSearching.bind(this)}),this.state.data?Object(w.jsx)(q,{dictionaryData:this.state.data}):null]}),a]})}}]),a}(n.Component),tt=a(79),et=a(180);W.a.defaults.baseURL="http://localhost:5000/";var at=Object(tt.a)({palette:{primary:{main:"#622449"}},typography:{fontFamily:["Kumbh Sans","sans-serif"].join(",")}});s.a.render(Object(w.jsx)(et.a,{theme:at,children:Object(w.jsx)($,{})}),document.getElementById("root"))},96:function(t,e,a){},97:function(t,e,a){},98:function(t,e,a){}},[[126,1,2]]]);
//# sourceMappingURL=main.2032f2b5.chunk.js.map