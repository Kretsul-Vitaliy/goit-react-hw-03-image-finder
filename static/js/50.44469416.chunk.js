"use strict";(self.webpackChunkgoit_react_hw_03_image_finder=self.webpackChunkgoit_react_hw_03_image_finder||[]).push([[50],{6050:function(n,e,o){o.r(e),o.d(e,{default:function(){return _}});var t,r,i,a,c=o(5671),s=o(3144),l=o(9340),p=o(2882),d=o(2791),h=o(168),u=o(1242),f=u.ZP.li(t||(t=(0,h.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),g=u.ZP.img(r||(r=(0,h.Z)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),x=o(4164),w=u.ZP.div(i||(i=(0,h.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),v=u.ZP.div(a||(a=(0,h.Z)(["\n  /* max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px); */\n  /* overflow: auto; */\n  img {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),m=o(184),y=document.querySelector("#modal-root"),Z=function(n){(0,l.Z)(o,n);var e=(0,p.Z)(o);function o(){var n;(0,c.Z)(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).closeOnKeydown=function(e){"Escape"===e.code&&n.props.onClose()},n.closeOnBackdrop=function(e){e.target===e.currentTarget&&n.props.onClose()},n.handleKeyDown=function(e){"ArrowLeft"===e.code?n.props.onLeft():"ArrowRight"===e.code&&n.props.onRight()},n}return(0,s.Z)(o,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeOnKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeOnKeydown)}},{key:"render",value:function(){return(0,x.createPortal)((0,m.jsx)(w,{onClick:this.closeOnBackdrop,children:(0,m.jsx)(v,{children:this.props.children})}),y)}}]),o}(d.Component),k=Z,b=function(n){(0,l.Z)(o,n);var e=(0,p.Z)(o);function o(){var n;(0,c.Z)(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={isModalOpen:!1},n.toggleModal=function(){n.setState((function(n){return{isModalOpen:!n.isModalOpen}}))},n}return(0,s.Z)(o,[{key:"render",value:function(){var n=this.props,e=n.webformatURL,o=n.tags,t=n.largeImageURL,r=this.state.isModalOpen;return(0,m.jsxs)(f,{children:[(0,m.jsx)(g,{src:e,alt:o,onClick:this.toggleModal}),r&&(0,m.jsx)(k,{onClose:this.toggleModal,children:(0,m.jsx)("img",{src:t,alt:o})})]})}}]),o}(d.Component),_=b}}]);
//# sourceMappingURL=50.44469416.chunk.js.map