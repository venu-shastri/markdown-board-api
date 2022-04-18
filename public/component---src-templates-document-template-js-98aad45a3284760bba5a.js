"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[43],{8899:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var o=n(7326),a=n(1721),r=n(7294),i=n(3332),s=n(4513),l=n(9952),c=n(5733),d=n(6422),m=n(5987),u=n(7462),g=n(5505),f=n(4364),h=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var y=r.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,a=e.alignItems,i=void 0===a?"stretch":a,s=e.classes,l=e.className,c=e.component,d=void 0===c?"div":c,f=e.container,h=void 0!==f&&f,p=e.direction,v=void 0===p?"row":p,y=e.item,x=void 0!==y&&y,C=e.justify,b=e.justifyContent,k=void 0===b?"flex-start":b,w=e.lg,Z=void 0!==w&&w,S=e.md,E=void 0!==S&&S,M=e.sm,D=void 0!==M&&M,N=e.spacing,I=void 0===N?0:N,T=e.wrap,W=void 0===T?"wrap":T,j=e.xl,A=void 0!==j&&j,R=e.xs,B=void 0!==R&&R,K=e.zeroMinWidth,V=void 0!==K&&K,L=(0,m.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),O=(0,g.Z)(s.root,l,h&&[s.container,0!==I&&s["spacing-xs-".concat(String(I))]],x&&s.item,V&&s.zeroMinWidth,"row"!==v&&s["direction-xs-".concat(String(v))],"wrap"!==W&&s["wrap-xs-".concat(String(W))],"stretch"!==i&&s["align-items-xs-".concat(String(i))],"stretch"!==o&&s["align-content-xs-".concat(String(o))],"flex-start"!==(C||k)&&s["justify-content-xs-".concat(String(C||k))],!1!==B&&s["grid-xs-".concat(String(B))],!1!==D&&s["grid-sm-".concat(String(D))],!1!==E&&s["grid-md-".concat(String(E))],!1!==Z&&s["grid-lg-".concat(String(Z))],!1!==A&&s["grid-xl-".concat(String(A))]);return r.createElement(d,(0,u.Z)({className:O,ref:t},L))})),x=(0,f.Z)((function(e){return(0,u.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return h.forEach((function(o){var a=e.spacing(o);0!==a&&(n["spacing-".concat(t,"-").concat(o)]={margin:"-".concat(v(a,2)),width:"calc(100% + ".concat(v(a),")"),"& > $item":{padding:v(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var o={};p.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");o[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else o[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,u.Z)(e,o):e[t.breakpoints.up(n)]=o}(t,e,n),t}),{}))}),{name:"MuiGrid"})(y),C=x,b=n(791),k=n(7826),w=n(1008),Z=n(1291),S=n(8582),E=n(3935),M="undefined"==typeof window?r.useEffect:r.useLayoutEffect,D=r.forwardRef((function(e,t){var n=e.alignItems,o=void 0===n?"center":n,a=e.autoFocus,i=void 0!==a&&a,s=e.button,l=void 0!==s&&s,c=e.children,d=e.classes,f=e.className,h=e.component,p=e.ContainerComponent,v=void 0===p?"li":p,y=e.ContainerProps,x=(y=void 0===y?{}:y).className,C=(0,m.Z)(y,["className"]),b=e.dense,D=void 0!==b&&b,N=e.disabled,I=void 0!==N&&N,T=e.disableGutters,W=void 0!==T&&T,j=e.divider,A=void 0!==j&&j,R=e.focusVisibleClassName,B=e.selected,K=void 0!==B&&B,V=(0,m.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),L=r.useContext(S.Z),O={dense:D||L.dense||!1,alignItems:o},z=r.useRef(null);M((function(){i&&z.current&&z.current.focus()}),[i]);var P=r.Children.toArray(c),F=P.length&&(0,w.Z)(P[P.length-1],["ListItemSecondaryAction"]),G=r.useCallback((function(e){z.current=E.findDOMNode(e)}),[]),_=(0,Z.Z)(G,t),$=(0,u.Z)({className:(0,g.Z)(d.root,f,O.dense&&d.dense,!W&&d.gutters,A&&d.divider,I&&d.disabled,l&&d.button,"center"!==o&&d.alignItemsFlexStart,F&&d.secondaryAction,K&&d.selected),disabled:I},V),J=h||"li";return l&&($.component=h||"div",$.focusVisibleClassName=(0,g.Z)(d.focusVisible,R),J=k.Z),F?(J=$.component||h?J:"div","li"===v&&("li"===J?J="div":"li"===$.component&&($.component="div")),r.createElement(S.Z.Provider,{value:O},r.createElement(v,(0,u.Z)({className:(0,g.Z)(d.container,x),ref:_},C),r.createElement(J,$,P),P.pop()))):r.createElement(S.Z.Provider,{value:O},r.createElement(J,(0,u.Z)({ref:_},$),P))})),N=(0,f.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(D),I=n(453),T=r.forwardRef((function(e,t){var n=e.children,o=e.classes,a=e.className,i=e.disableTypography,s=void 0!==i&&i,l=e.inset,c=void 0!==l&&l,d=e.primary,f=e.primaryTypographyProps,h=e.secondary,p=e.secondaryTypographyProps,v=(0,m.Z)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),y=r.useContext(S.Z).dense,x=null!=d?d:n;null==x||x.type===I.Z||s||(x=r.createElement(I.Z,(0,u.Z)({variant:y?"body2":"body1",className:o.primary,component:"span",display:"block"},f),x));var C=h;return null==C||C.type===I.Z||s||(C=r.createElement(I.Z,(0,u.Z)({variant:"body2",className:o.secondary,color:"textSecondary",display:"block"},p),C)),r.createElement("div",(0,u.Z)({className:(0,g.Z)(o.root,a,y&&o.dense,c&&o.inset,x&&C&&o.multiline),ref:t},v),x,C)})),W=(0,f.Z)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(T),j=n(8063),A=n(2608);function R(e){return JSON.parse(localStorage.getItem(e))}function B(e,t){localStorage.setItem(e,JSON.stringify(t))}window.showComments=function(e){var t=this;console.log("showComments()",e),this.currentMarkerKey=e;var n=R(e);console.log("showComments(): markedData",n),this.state.comments.length=0,this.state.addCommentButtonDisabled=!1,n.comments.forEach((function(e){return t.state.comments.push(e)})),this.state.comments.reverse(),console.log("showComments(): state",this.state),this.setState((function(e,n){return t.state}))};var K=function(e){function t(t){var n;return n=e.call(this,t)||this,window.showComments=window.showComments.bind((0,o.Z)(n)),n.mr=t.data.markdownRemark,n.currentMarkerKey=null,n.state={addCommentButtonDisabled:!0,addCommentDialogVisible:!1,newComment:"",comments:[]},n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadMarkers()},n.addMarker=function(){console.log("addMarker()");var e=null;if(0!==window.getSelection().rangeCount&&(e=window.getSelection().getRangeAt(0)),e){console.log("addMarker(): range",e);var t={startOffset:e.startOffset,endOffset:e.endOffset,parentNodeData:e.startContainer.data,markerText:e.toString(),comments:[]};console.log("addMarker(): marker",t);var n=this.mr.frontmatter.id+"-"+(new Date).getTime();B(n,t),document.getSelection().removeAllRanges(),this.linkifyMarker(n)}},n.linkifyMarker=function(e){console.log("linkifyMarker()",e);var t=R(e);console.log("linkifyMarker(): marker",t);for(var n=[],o=document.body.childNodes[0];null!=o;)if(3===o.nodeType&&n.push(o),o.hasChildNodes())o=o.firstChild;else{for(;null==o.nextSibling&&o!==document.body;)o=o.parentNode;o=o.nextSibling}for(var a=null,r=0;r<n.length;r++)if(n[r].data===t.parentNodeData){a=n[r];break}var i=document.createRange();i.setStart(a,t.startOffset),i.setEnd(a,t.endOffset);var s=document.createElement("a");s.setAttribute("href","#"),s.setAttribute("onClick",'window.showComments("'+e+'");'),i.surroundContents(s),document.getSelection().removeAllRanges()},n.loadMarkers=function(){console.log("loadMarkers()");var e=this,t=function(e){for(var t=[],n=0;n<localStorage.length;n++){var o=localStorage.key(n);console.log("getAllMarkersFromStorage(): key="+o),o.startsWith(e)&&t.push(o)}return console.log("getAllMarkersFromStorage(): markerKeys",t),t}(this.mr.frontmatter.id);console.log("loadMarkers(): markerKeys",t),t.forEach((function(t){console.log("loadMarkers(): inKey="+t),e.linkifyMarker(t)}))},n.addComment=function(){var e=this;console.log("addComment()"),this.state.addCommentDialogVisible=!0,this.state.newComment="",this.setState((function(t,n){return e.state}))},n.handleDialogClose=function(){var e=this;console.log("handleDialogClose()"),this.state.addCommentDialogVisible=!1,this.setState((function(t,n){return e.state}))},n.handleDialogSave=function(){if(console.log("handleDialogSave()"),this.handleDialogClose(),null!==this.state.newComment&&""!==this.state.newComment.trim()){var e=R(this.currentMarkerKey);e.comments.push({author:localStorage.getItem("username"),dateTime:(new Date).toLocaleDateString(),comment:this.state.newComment}),B(this.currentMarkerKey,e),window.showComments(this.currentMarkerKey)}},n.render=function(){var e=this;return r.createElement("div",{style:{display:"flex",flexDirection:"column",height:"96vh"}},r.createElement(s.Z,{open:this.state.addCommentDialogVisible,onClose:this.handleDialogClose.bind(this),maxWidth:"lg",fullWidth:!0},r.createElement(d.Z,null,"Add Comment"),r.createElement(c.Z,null,r.createElement(A.Z,{label:"Enter comment here",fullWidth:!0,variant:"outlined",onChange:function(t){return e.state.newComment=t.target.value}})),r.createElement(l.Z,null,r.createElement(i.Z,{onClick:this.handleDialogClose.bind(this),color:"secondary"},"Cancel"),r.createElement(i.Z,{onClick:this.handleDialogSave.bind(this),color:"primary"},"Save"))),r.createElement(j.Z,{elevation:5,style:{margin:"10px",padding:"4px",height:"46px"}},r.createElement(C,{container:!0},r.createElement(C,{item:!0},r.createElement(i.Z,{variant:"contained",color:"primary",style:{marginRight:"10px"},onClick:function(){return window.location="/"}},"Document List"),r.createElement(i.Z,{variant:"contained",color:"secondary",style:{marginRight:"10px"},onClick:this.addMarker.bind(this)},"Add Marker"),r.createElement(i.Z,{variant:"contained",style:{marginRight:"10px"},onClick:this.addComment.bind(this),disabled:this.state.addCommentButtonDisabled},"Add Comment")))),r.createElement(j.Z,{elevation:5,style:{margin:"10px",padding:"4px",height:"70vh",overflow:"auto"}},r.createElement(C,{container:!0},r.createElement(C,{item:!0},r.createElement("div",{dangerouslySetInnerHTML:{__html:this.mr.html}})))),r.createElement(j.Z,{elevation:5,style:{margin:"10px",padding:"4px",height:"30vh",overflow:"auto"}},r.createElement("div",{style:{fontWeight:"bold",position:"sticky",top:"2px",padding:"10px",backgroundColor:"#eaeaea",zIndex:99}},null===this.currentMarkerKey?"":R(this.currentMarkerKey).markerText),r.createElement(C,{container:!0},r.createElement(C,{item:!0,xs:!0},r.createElement(b.Z,null,null!==this.currentMarkerKey&&0===this.state.comments.length?r.createElement(N,{key:0},r.createElement(W,{primary:"No comments for this marker"})):this.state.comments.map((function(e,t){return r.createElement(N,{key:t},r.createElement(W,{primary:e.comment,secondary:e.author+" - "+e.dateTime}))})))))))},t}(r.Component)}}]);
//# sourceMappingURL=component---src-templates-document-template-js-98aad45a3284760bba5a.js.map