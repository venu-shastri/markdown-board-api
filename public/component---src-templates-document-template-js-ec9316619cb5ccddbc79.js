"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[43],{2528:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var a=n(7326),o=n(1721),i=n(7294),r=n(3332),s=n(4513),l=n(9952),c=n(5733),d=n(6422),m=n(5987),u=n(7462),g=n(5505),f=n(4364),h=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var x=i.forwardRef((function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,o=e.alignItems,r=void 0===o?"stretch":o,s=e.classes,l=e.className,c=e.component,d=void 0===c?"div":c,f=e.container,h=void 0!==f&&f,p=e.direction,v=void 0===p?"row":p,x=e.item,y=void 0!==x&&x,C=e.justify,b=e.justifyContent,k=void 0===b?"flex-start":b,w=e.lg,Z=void 0!==w&&w,E=e.md,S=void 0!==E&&E,M=e.sm,D=void 0!==M&&M,N=e.spacing,I=void 0===N?0:N,T=e.wrap,j=void 0===T?"wrap":T,R=e.xl,W=void 0!==R&&R,A=e.xs,B=void 0!==A&&A,K=e.zeroMinWidth,V=void 0!==K&&K,L=(0,m.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),$=(0,g.Z)(s.root,l,h&&[s.container,0!==I&&s["spacing-xs-".concat(String(I))]],y&&s.item,V&&s.zeroMinWidth,"row"!==v&&s["direction-xs-".concat(String(v))],"wrap"!==j&&s["wrap-xs-".concat(String(j))],"stretch"!==r&&s["align-items-xs-".concat(String(r))],"stretch"!==a&&s["align-content-xs-".concat(String(a))],"flex-start"!==(C||k)&&s["justify-content-xs-".concat(String(C||k))],!1!==B&&s["grid-xs-".concat(String(B))],!1!==D&&s["grid-sm-".concat(String(D))],!1!==S&&s["grid-md-".concat(String(S))],!1!==Z&&s["grid-lg-".concat(String(Z))],!1!==W&&s["grid-xl-".concat(String(W))]);return i.createElement(d,(0,u.Z)({className:$,ref:t},L))})),y=(0,f.Z)((function(e){return(0,u.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return h.forEach((function(a){var o=e.spacing(a);0!==o&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(v(o,2)),width:"calc(100% + ".concat(v(o),")"),"& > $item":{padding:v(o,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};p.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,u.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(x),C=y,b=n(791),k=n(7826),w=n(1008),Z=n(1291),E=n(8582),S=n(3935),M="undefined"==typeof window?i.useEffect:i.useLayoutEffect,D=i.forwardRef((function(e,t){var n=e.alignItems,a=void 0===n?"center":n,o=e.autoFocus,r=void 0!==o&&o,s=e.button,l=void 0!==s&&s,c=e.children,d=e.classes,f=e.className,h=e.component,p=e.ContainerComponent,v=void 0===p?"li":p,x=e.ContainerProps,y=(x=void 0===x?{}:x).className,C=(0,m.Z)(x,["className"]),b=e.dense,D=void 0!==b&&b,N=e.disabled,I=void 0!==N&&N,T=e.disableGutters,j=void 0!==T&&T,R=e.divider,W=void 0!==R&&R,A=e.focusVisibleClassName,B=e.selected,K=void 0!==B&&B,V=(0,m.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),L=i.useContext(E.Z),$={dense:D||L.dense||!1,alignItems:a},z=i.useRef(null);M((function(){r&&z.current&&z.current.focus()}),[r]);var P=i.Children.toArray(c),G=P.length&&(0,w.Z)(P[P.length-1],["ListItemSecondaryAction"]),O=i.useCallback((function(e){z.current=S.findDOMNode(e)}),[]),_=(0,Z.Z)(O,t),F=(0,u.Z)({className:(0,g.Z)(d.root,f,$.dense&&d.dense,!j&&d.gutters,W&&d.divider,I&&d.disabled,l&&d.button,"center"!==a&&d.alignItemsFlexStart,G&&d.secondaryAction,K&&d.selected),disabled:I},V),H=h||"li";return l&&(F.component=h||"div",F.focusVisibleClassName=(0,g.Z)(d.focusVisible,A),H=k.Z),G?(H=F.component||h?H:"div","li"===v&&("li"===H?H="div":"li"===F.component&&(F.component="div")),i.createElement(E.Z.Provider,{value:$},i.createElement(v,(0,u.Z)({className:(0,g.Z)(d.container,y),ref:_},C),i.createElement(H,F,P),P.pop()))):i.createElement(E.Z.Provider,{value:$},i.createElement(H,(0,u.Z)({ref:_},F),P))})),N=(0,f.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(D),I=n(453),T=i.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,r=e.disableTypography,s=void 0!==r&&r,l=e.inset,c=void 0!==l&&l,d=e.primary,f=e.primaryTypographyProps,h=e.secondary,p=e.secondaryTypographyProps,v=(0,m.Z)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),x=i.useContext(E.Z).dense,y=null!=d?d:n;null==y||y.type===I.Z||s||(y=i.createElement(I.Z,(0,u.Z)({variant:x?"body2":"body1",className:a.primary,component:"span",display:"block"},f),y));var C=h;return null==C||C.type===I.Z||s||(C=i.createElement(I.Z,(0,u.Z)({variant:"body2",className:a.secondary,color:"textSecondary",display:"block"},p),C)),i.createElement("div",(0,u.Z)({className:(0,g.Z)(a.root,o,x&&a.dense,c&&a.inset,y&&C&&a.multiline),ref:t},v),y,C)})),j=(0,f.Z)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(T),R=n(8063),W=n(2608),A=n(581),B=function(e){function t(t){var n;return(n=e.call(this,t)||this).showComments=n.showComments.bind((0,a.Z)(n)),n.mr=t.data.markdownRemark,n.currentMarkerKey=null,n.state={addCommentButtonDisabled:!0,addCommentDialogVisible:!1,newComment:"",comments:[]},n}(0,o.Z)(t,e);var n=t.prototype;return n.showComments=function(e){var t=this;console.log("showComments()",e),this.currentMarkerKey=e;var n=A.c$(e);console.log("showComments(): markedData",n),this.state.comments.length=0,this.state.addCommentButtonDisabled=!1,n.comments.forEach((function(e){return t.state.comments.push(e)})),this.state.comments.reverse(),console.log("showComments(): state",this.state),this.setState((function(e,n){return t.state}))},n.componentDidMount=function(){this.loadMarkers()},n.addMarker=function(){console.log("addMarker()");var e=null;if(0!==window.getSelection().rangeCount&&(e=window.getSelection().getRangeAt(0)),e){console.log("addMarker(): range",e);var t={startOffset:e.startOffset,endOffset:e.endOffset,parentNodeData:e.startContainer.data,markerText:e.toString(),comments:[]};console.log("addMarker(): marker",t);var n=this.mr.frontmatter.id+"-"+(new Date).getTime();A.R1(n,t),document.getSelection().removeAllRanges(),this.linkifyMarker(n)}},n.linkifyMarker=function(e){console.log("linkifyMarker()",e);var t=A.c$(e);console.log("linkifyMarker(): marker",t);for(var n=[],a=document.body.childNodes[0];null!=a;)if(3===a.nodeType&&n.push(a),a.hasChildNodes())a=a.firstChild;else{for(;null==a.nextSibling&&a!==document.body;)a=a.parentNode;a=a.nextSibling}for(var o=null,i=0;i<n.length;i++)if(n[i].data===t.parentNodeData){o=n[i];break}var r=document.createRange();r.setStart(o,t.startOffset),r.setEnd(o,t.endOffset);var s=document.createElement("a");s.setAttribute("href","#"),s.setAttribute("onClick",'{this.showComments("'+e+'");}'),r.surroundContents(s),document.getSelection().removeAllRanges()},n.loadMarkers=function(){console.log("loadMarkers()");var e=this,t=A.Ge(this.mr.frontmatter.id);console.log("loadMarkers(): markerKeys",t),t.forEach((function(t){console.log("loadMarkers(): inKey="+t),e.linkifyMarker(t)}))},n.addComment=function(){var e=this;console.log("addComment()"),this.state.addCommentDialogVisible=!0,this.state.newComment="",this.setState((function(t,n){return e.state}))},n.handleDialogClose=function(){var e=this;console.log("handleDialogClose()"),this.state.addCommentDialogVisible=!1,this.setState((function(t,n){return e.state}))},n.handleDialogSave=function(){if(console.log("handleDialogSave()"),this.handleDialogClose(),null!==this.state.newComment&&""!==this.state.newComment.trim()){var e=A.c$(this.currentMarkerKey);e.comments.push({author:localStorage.getItem("username"),dateTime:(new Date).toLocaleDateString(),comment:this.state.newComment}),A.R1(this.currentMarkerKey,e),window.showComments(this.currentMarkerKey)}},n.render=function(){var e=this;return i.createElement("div",{style:{display:"flex",flexDirection:"column",height:"96vh"}},i.createElement(s.Z,{open:this.state.addCommentDialogVisible,onClose:this.handleDialogClose.bind(this),maxWidth:"lg",fullWidth:!0},i.createElement(d.Z,null,"Add Comment"),i.createElement(c.Z,null,i.createElement(W.Z,{label:"Enter comment here",fullWidth:!0,variant:"outlined",onChange:function(t){return e.state.newComment=t.target.value}})),i.createElement(l.Z,null,i.createElement(r.Z,{onClick:this.handleDialogClose.bind(this),color:"secondary"},"Cancel"),i.createElement(r.Z,{onClick:this.handleDialogSave.bind(this),color:"primary"},"Save"))),i.createElement(R.Z,{elevation:5,style:{margin:"10px",padding:"4px",height:"46px"}},i.createElement(C,{container:!0},i.createElement(C,{item:!0},i.createElement(r.Z,{variant:"contained",color:"primary",style:{marginRight:"10px"},onClick:function(){return window.location="/"}},"Document List"),i.createElement(r.Z,{variant:"contained",color:"secondary",style:{marginRight:"10px"},onClick:this.addMarker.bind(this)},"Add Marker"),i.createElement(r.Z,{variant:"contained",style:{marginRight:"10px"},onClick:this.addComment.bind(this),disabled:this.state.addCommentButtonDisabled},"Add Comment")))),i.createElement(R.Z,{elevation:5,style:{margin:"10px",padding:"4px",height:"70vh",overflow:"auto"}},i.createElement(C,{container:!0},i.createElement(C,{item:!0},i.createElement("div",{dangerouslySetInnerHTML:{__html:this.mr.html}})))),i.createElement(R.Z,{elevation:5,style:{margin:"10px",padding:"4px",height:"30vh",overflow:"auto"}},i.createElement("div",{style:{fontWeight:"bold",position:"sticky",top:"2px",padding:"10px",backgroundColor:"#eaeaea",zIndex:99}},null===this.currentMarkerKey?"":A.c$(this.currentMarkerKey).markerText),i.createElement(C,{container:!0},i.createElement(C,{item:!0,xs:!0},i.createElement(b.Z,null,null!==this.currentMarkerKey&&0===this.state.comments.length?i.createElement(N,{key:0},i.createElement(j,{primary:"No comments for this marker"})):this.state.comments.map((function(e,t){return i.createElement(N,{key:t},i.createElement(j,{primary:e.comment,secondary:e.author+" - "+e.dateTime}))})))))))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-templates-document-template-js-ec9316619cb5ccddbc79.js.map