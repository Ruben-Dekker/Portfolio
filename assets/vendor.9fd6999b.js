/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="137",yd=0,ic=1,vd=2,sc=1,bd=2,Ws=3,Vi=0,pt=1,mi=2,rc=1,kn=0,Xs=1,ac=2,oc=3,lc=4,Sd=5,Wi=100,Md=101,wd=102,cc=103,uc=104,Td=200,Ad=201,Ed=202,Ld=203,hc=204,fc=205,Pd=206,Rd=207,Cd=208,Fd=209,Id=210,Nd=0,Dd=1,Ud=2,ja=3,Od=4,Bd=5,zd=6,kd=7,kr=0,Hd=1,Gd=2,Hn=0,Vd=1,Wd=2,Xd=3,Yd=4,Qd=5,dc=300,Ys=301,Qs=302,Za=303,Ja=304,Hr=306,Ka=307,Xi=1e3,Ft=1001,Gr=1002,lt=1003,$a=1004,eo=1005,ct=1006,pc=1007,Yi=1008,Gn=1009,qd=1010,jd=1011,qs=1012,Zd=1013,Vr=1014,Vn=1015,Qi=1016,Jd=1017,Kd=1018,qi=1020,$d=1021,ep=1022,vt=1023,tp=1024,np=1025,gi=1026,ji=1027,ip=1028,sp=1029,rp=1030,ap=1031,op=1033,to=33776,no=33777,io=33778,so=33779,mc=35840,gc=35841,_c=35842,xc=35843,lp=36196,yc=37492,vc=37496,bc=37808,Sc=37809,Mc=37810,wc=37811,Tc=37812,Ac=37813,Ec=37814,Lc=37815,Pc=37816,Rc=37817,Cc=37818,Fc=37819,Ic=37820,Nc=37821,Dc=36492,cp=2200,up=2201,hp=2202,js=2300,Zi=2301,ro=2302,Ji=2400,Ki=2401,Wr=2402,ao=2500,Uc=2501,fp=0,dp=1,Oc=2,Wn=3e3,qe=3001,pp=3200,mp=3201,_i=0,gp=1,oo=7680,_p=519,Zs=35044,Xr=35048,Bc="300 es",lo=1035;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const bt=[];for(let a=0;a<256;a++)bt[a]=(a<16?"0":"")+a.toString(16);let Yr=1234567;const Js=Math.PI/180,Ks=180/Math.PI;function Yt(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[a&255]+bt[a>>8&255]+bt[a>>16&255]+bt[a>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toUpperCase()}function It(a,e,t){return Math.max(e,Math.min(t,a))}function co(a,e){return(a%e+e)%e}function xp(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function yp(a,e,t){return a!==e?(t-a)/(e-a):0}function $s(a,e,t){return(1-t)*a+t*e}function vp(a,e,t,n){return $s(a,e,1-Math.exp(-t*n))}function bp(a,e=1){return e-Math.abs(co(a,e*2)-e)}function Sp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Mp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function wp(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Tp(a,e){return a+Math.random()*(e-a)}function Ap(a){return a*(.5-Math.random())}function Ep(a){return a!==void 0&&(Yr=a%2147483647),Yr=Yr*16807%2147483647,(Yr-1)/2147483646}function Lp(a){return a*Js}function Pp(a){return a*Ks}function uo(a){return(a&a-1)==0&&a!==0}function zc(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function kc(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Rp(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),u=r((e+n)/2),h=s((e-n)/2),f=r((e-n)/2),d=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var Cp=Object.freeze({__proto__:null,DEG2RAD:Js,RAD2DEG:Ks,generateUUID:Yt,clamp:It,euclideanModulo:co,mapLinear:xp,inverseLerp:yp,lerp:$s,damp:vp,pingpong:bp,smoothstep:Sp,smootherstep:Mp,randInt:wp,randFloat:Tp,randFloatSpread:Ap,seededRandom:Ep,degToRad:Lp,radToDeg:Pp,isPowerOfTwo:uo,ceilPowerOfTwo:zc,floorPowerOfTwo:kc,setQuaternionFromProperEuler:Rp});class te{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}te.prototype.isVector2=!0;class nt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,r,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],x=i[3],p=i[6],m=i[1],b=i[4],y=i[7],S=i[2],M=i[5],w=i[8];return s[0]=r*_+o*m+l*S,s[3]=r*x+o*b+l*M,s[6]=r*p+o*y+l*w,s[1]=c*_+u*m+h*S,s[4]=c*x+u*b+h*M,s[7]=c*p+u*y+h*w,s[2]=f*_+d*m+g*S,s[5]=f*x+d*b+g*M,s[8]=f*p+d*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*s*u+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*r-o*c,f=o*l-u*s,d=c*s-r*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*r)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],r=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*r+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*r+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}nt.prototype.isMatrix3=!0;function Hc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>65535)return!0;return!1}function er(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}const Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function ho(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function $i(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function fo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}class xe{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=co(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=ho(s,i,e+1/3),this.g=ho(s,i,e),this.b=ho(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],r=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Gc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),r=Math.min(t,n,i);let o,l;const c=(r+s)/2;if(r===s)o=0,l=0;else{const u=s-r;switch(l=c<=.5?u/(s+r):u/(2-s-r),s){case t:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-t)/u+2;break;case i:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(sn),sn.h+=e,sn.s+=t,sn.l+=n,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(Qr);const n=$s(sn.h,Qr.h,t),i=$s(sn.s,Qr.s,t),s=$s(sn.l,Qr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}xe.NAMES=Gc;xe.prototype.isColor=!0;xe.prototype.r=1;xe.prototype.g=1;xe.prototype.b=1;let es;class yi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=er("canvas")),es.width=e.width,es.height=e.height;const n=es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=$i(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fp=0;class ut extends xi{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,n=Ft,i=Ft,s=ct,r=Yi,o=vt,l=Gn,c=1,u=Wn){super();Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Yt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Yt()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(po(i[r].image)):s.push(po(i[r]))}else s=po(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ut.DEFAULT_IMAGE=void 0;ut.DEFAULT_MAPPING=dc;ut.prototype.isTexture=!0;function po(a){return typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&a instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&a instanceof ImageBitmap?yi.getDataURL(a):a.data?{data:Array.prototype.slice.call(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class je{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const r=.01,o=.1,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],x=l[6],p=l[10];if(Math.abs(u-f)<r&&Math.abs(h-_)<r&&Math.abs(g-x)<r){if(Math.abs(u+f)<o&&Math.abs(h+_)<o&&Math.abs(g+x)<o&&Math.abs(c+d+p-3)<o)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(d+1)/2,S=(p+1)/2,M=(u+f)/4,w=(h+_)/4,I=(g+x)/4;return b>y&&b>S?b<r?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=M/n,s=w/n):y>S?y<r?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=M/i,s=I/i):S<r?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=w/s,i=I/s),this.set(n,i,s,t),this}let m=Math.sqrt((x-g)*(x-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(m)<.001&&(m=1),this.x=(x-g)/m,this.y=(h-_)/m,this.z=(f-u)/m,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}je.prototype.isVector4=!0;class kt extends xi{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t),this.texture=new ut(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.prototype.isWebGLRenderTarget=!0;class Ip extends kt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Ip.prototype.isWebGLMultipleRenderTargets=!0;class mo extends kt{constructor(e,t,n={}){super(e,t,n);this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}mo.prototype.isWebGLMultisampleRenderTarget=!0;class Pt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[r+0],d=s[r+1],g=s[r+2],_=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let x=1-o;const p=l*f+c*d+u*g+h*_,m=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const S=Math.sqrt(b),M=Math.atan2(S,p*m);x=Math.sin(x*M)/S,o=Math.sin(o*M)/S}const y=o*m;if(l=l*x+f*y,c=c*x+d*y,u=u*x+g*y,h=h*x+_*y,x===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],f=s[r+1],d=s[r+2],g=s[r+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+i*c-s*l,this._y=i*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-i*o,this._w=r*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*r+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Pt.prototype.isQuaternion=!0;class N{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-r*t,f=-s*t-r*n-o*i;return this.x=c*l+f*-s+u*-o-h*-r,this.y=u*l+f*-r+h*-s-c*-o,this.z=h*l+f*-o+c*-r-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}N.prototype.isVector3=!0;const go=new N,Vc=new Pt;class Qt{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>r&&(r=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>r&&(r=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)vi.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox),_o.applyMatrix4(e.matrixWorld),this.union(_o);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),qr.subVectors(this.max,tr),ts.subVectors(e.a,tr),ns.subVectors(e.b,tr),is.subVectors(e.c,tr),Xn.subVectors(ns,ts),Yn.subVectors(is,ns),bi.subVectors(ts,is);let t=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-bi.z,bi.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,bi.z,0,-bi.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-bi.y,bi.x,0];return!xo(t,ts,ns,is,qr)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,ts,ns,is,qr))?!1:(jr.crossVectors(Xn,Yn),t=[jr.x,jr.y,jr.z],xo(t,ts,ns,is,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Qt.prototype.isBox3=!0;const Sn=[new N,new N,new N,new N,new N,new N,new N,new N],vi=new N,_o=new Qt,ts=new N,ns=new N,is=new N,Xn=new N,Yn=new N,bi=new N,tr=new N,qr=new N,jr=new N,Si=new N;function xo(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Si.fromArray(a,s);const o=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Np=new Qt,Wc=new N,Zr=new N,yo=new N;class Mi{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Np.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){yo.subVectors(e,this.center);const t=yo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(yo.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Zr.set(0,0,1).multiplyScalar(e.radius):Zr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Wc.copy(e.center).add(Zr)),this.expandByPoint(Wc.copy(e.center).sub(Zr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new N,vo=new N,Jr=new N,Qn=new N,bo=new N,Kr=new N,So=new N;class wi{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.direction).multiplyScalar(t).add(this.origin),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vo.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(vo);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Jr),o=Qn.dot(this.direction),l=-Qn.dot(Jr),c=Qn.lengthSq(),u=Math.abs(1-r*r);let h,f,d,g;if(u>0)if(h=r*l-o,f=r*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+r*f+2*o)+f*(r*h+f+2*l)+c}else f=s,h=Math.max(0,-(r*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(r*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-r*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(r*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=r>0?-s:s,h=Math.max(0,-(r*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Jr).multiplyScalar(f).add(vo),d}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,i,s){bo.subVectors(t,e),Kr.subVectors(n,e),So.crossVectors(bo,Kr);let r=this.direction.dot(So),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Qn.subVectors(this.origin,e);const l=o*this.direction.dot(Kr.crossVectors(Qn,Kr));if(l<0)return null;const c=o*this.direction.dot(bo.cross(Qn));if(c<0||l+c>r)return null;const u=-o*Qn.dot(So);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,r,o,l,c,u,h,f,d,g,_,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),r=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=r*u,d=r*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-r*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=r*u,t[9]=_-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*u,d=r*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,d=r*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=r*l,d=r*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=r*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dp,e,Up)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),qn.crossVectors(n,Ht),qn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),qn.crossVectors(n,Ht)),qn.normalize(),$r.crossVectors(Ht,qn),i[0]=qn.x,i[4]=$r.x,i[8]=Ht.x,i[1]=qn.y,i[5]=$r.y,i[9]=Ht.y,i[2]=qn.z,i[6]=$r.z,i[10]=Ht.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],x=n[10],p=n[14],m=n[3],b=n[7],y=n[11],S=n[15],M=i[0],w=i[4],I=i[8],B=i[12],W=i[1],v=i[5],R=i[9],O=i[13],H=i[2],k=i[6],Y=i[10],G=i[14],X=i[3],fe=i[7],Z=i[11],ie=i[15];return s[0]=r*M+o*W+l*H+c*X,s[4]=r*w+o*v+l*k+c*fe,s[8]=r*I+o*R+l*Y+c*Z,s[12]=r*B+o*O+l*G+c*ie,s[1]=u*M+h*W+f*H+d*X,s[5]=u*w+h*v+f*k+d*fe,s[9]=u*I+h*R+f*Y+d*Z,s[13]=u*B+h*O+f*G+d*ie,s[2]=g*M+_*W+x*H+p*X,s[6]=g*w+_*v+x*k+p*fe,s[10]=g*I+_*R+x*Y+p*Z,s[14]=g*B+_*O+x*G+p*ie,s[3]=m*M+b*W+y*H+S*X,s[7]=m*w+b*v+y*k+S*fe,s[11]=m*I+b*R+y*Y+S*Z,s[15]=m*B+b*O+y*G+S*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],x=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+s*r*f-i*r*d+i*c*u-s*l*u)+x*(+t*c*h-t*o*d-s*r*h+n*r*d+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*r*h-n*r*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],x=e[14],p=e[15],m=h*x*c-_*f*c+_*l*d-o*x*d-h*l*p+o*f*p,b=g*f*c-u*x*c-g*l*d+r*x*d+u*l*p-r*f*p,y=u*_*c-g*h*c+g*o*d-r*_*d-u*o*p+r*h*p,S=g*h*l-u*_*l-g*o*f+r*_*f+u*o*x-r*h*x,M=t*m+n*b+i*y+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=m*w,e[1]=(_*f*s-h*x*s-_*i*d+n*x*d+h*i*p-n*f*p)*w,e[2]=(o*x*s-_*l*s+_*i*c-n*x*c-o*i*p+n*l*p)*w,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*w,e[4]=b*w,e[5]=(u*x*s-g*f*s+g*i*d-t*x*d-u*i*p+t*f*p)*w,e[6]=(g*l*s-r*x*s-g*i*c+t*x*c+r*i*p-t*l*p)*w,e[7]=(r*f*s-u*l*s+u*i*c-t*f*c-r*i*d+t*l*d)*w,e[8]=y*w,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*w,e[10]=(r*_*s-g*o*s+g*n*c-t*_*c-r*n*p+t*o*p)*w,e[11]=(u*o*s-r*h*s-u*n*c+t*h*c+r*n*d-t*o*d)*w,e[12]=S*w,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*x+t*h*x)*w,e[14]=(g*o*i-r*_*i-g*n*l+t*_*l+r*n*x-t*o*x)*w,e[15]=(r*h*i-u*o*i+u*n*l-t*h*l-r*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,u=r+r,h=o+o,f=s*c,d=s*u,g=s*h,_=r*u,x=r*h,p=o*h,m=l*c,b=l*u,y=l*h,S=n.x,M=n.y,w=n.z;return i[0]=(1-(_+p))*S,i[1]=(d+y)*S,i[2]=(g-b)*S,i[3]=0,i[4]=(d-y)*M,i[5]=(1-(f+p))*M,i[6]=(x+m)*M,i[7]=0,i[8]=(g+b)*w,i[9]=(x-m)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ss.set(i[0],i[1],i[2]).length();const r=ss.set(i[4],i[5],i[6]).length(),o=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const c=1/s,u=1/r,h=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){r===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(r+s)/(r-s),d=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(r-s),h=(t+e)*l,f=(n+i)*c,d=(r+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Me.prototype.isMatrix4=!0;const ss=new N,rn=new Me,Dp=new N(0,0,0),Up=new N(1,1,1),qn=new N,$r=new N,Ht=new N,Xc=new Me,Yc=new Pt;class rs{constructor(e=0,t=0,n=0,i=rs.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-It(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new N(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}rs.prototype.isEuler=!0;rs.DefaultOrder="XYZ";rs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Mo{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let Op=0;const Qc=new N,as=new Pt,wn=new Me,ea=new N,nr=new N,Bp=new N,zp=new Pt,qc=new N(1,0,0),jc=new N(0,1,0),Zc=new N(0,0,1),kp={type:"added"},Jc={type:"removed"};class We extends xi{constructor(){super();Object.defineProperty(this,"id",{value:Op++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DefaultUp.clone();const e=new N,t=new rs,n=new Pt,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new nt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=We.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(nr,ea,this.up):wn.lookAt(ea,nr,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),as.setFromRotationMatrix(wn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),f=r(e.skeletons),d=r(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d)}return n.object=i,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}We.DefaultUp=new N(0,1,0);We.DefaultMatrixAutoUpdate=!0;We.prototype.isObject3D=!0;const an=new N,Tn=new N,wo=new N,An=new N,os=new N,ls=new N,Kc=new N,To=new N,Ao=new N,Eo=new N;class ht{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){an.subVectors(i,t),Tn.subVectors(n,t),wo.subVectors(e,t);const r=an.dot(an),o=an.dot(Tn),l=an.dot(wo),c=Tn.dot(Tn),u=Tn.dot(wo),h=r*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(r*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,An),l.set(0,0),l.addScaledVector(s,An.x),l.addScaledVector(r,An.y),l.addScaledVector(o,An.z),l}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),Tn.subVectors(e,t),an.cross(Tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),an.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ht.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;os.subVectors(i,n),ls.subVectors(s,n),To.subVectors(e,n);const l=os.dot(To),c=ls.dot(To);if(l<=0&&c<=0)return t.copy(n);Ao.subVectors(e,i);const u=os.dot(Ao),h=ls.dot(Ao);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(os,r);Eo.subVectors(e,s);const d=os.dot(Eo),g=ls.dot(Eo);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ls,o);const x=u*g-d*h;if(x<=0&&h-u>=0&&d-g>=0)return Kc.subVectors(s,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Kc,o);const p=1/(x+_+f);return r=_*p,o=f*p,t.copy(n).addScaledVector(os,r).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hp=0;class mt extends xi{constructor(){super();Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Yt(),this.name="",this.type="Material",this.fog=!0,this.blending=Xs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hc,this.blendDst=fc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===rc;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}mt.prototype.isMaterial=!0;class En extends mt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}En.prototype.isMeshBasicMaterial=!0;const Ke=new N,ta=new te;class $e{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Zs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new xe),t[n++]=r.r,t[n++]=r.g,t[n++]=r.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new te),t[n++]=r.x,t[n++]=r.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new N),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new je),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z,t[n++]=r.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.x=this.getX(t),Ke.y=this.getY(t),Ke.z=this.getZ(t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}$e.prototype.isBufferAttribute=!0;class $c extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eu extends $e{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gp extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Gp.prototype.isFloat16BufferAttribute=!0;class He extends $e{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vp=0;const qt=new Me,Lo=new We,cs=new N,Gt=new Qt,ir=new Qt,gt=new N;class Ge extends xi{constructor(){super();Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?eu:$c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new He(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Gt.min,ir.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,ir.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(ir.min),Gt.expandByPoint(ir.max))}Gt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),gt.add(cs)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new $e(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let W=0;W<o;W++)c[W]=new N,u[W]=new N;const h=new N,f=new N,d=new N,g=new te,_=new te,x=new te,p=new N,m=new N;function b(W,v,R){h.fromArray(i,W*3),f.fromArray(i,v*3),d.fromArray(i,R*3),g.fromArray(r,W*2),_.fromArray(r,v*2),x.fromArray(r,R*2),f.sub(h),d.sub(h),_.sub(g),x.sub(g);const O=1/(_.x*x.y-x.x*_.y);!isFinite(O)||(p.copy(f).multiplyScalar(x.y).addScaledVector(d,-_.y).multiplyScalar(O),m.copy(d).multiplyScalar(_.x).addScaledVector(f,-x.x).multiplyScalar(O),c[W].add(p),c[v].add(p),c[R].add(p),u[W].add(m),u[v].add(m),u[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let W=0,v=y.length;W<v;++W){const R=y[W],O=R.start,H=R.count;for(let k=O,Y=O+H;k<Y;k+=3)b(n[k+0],n[k+1],n[k+2])}const S=new N,M=new N,w=new N,I=new N;function B(W){w.fromArray(s,W*3),I.copy(w);const v=c[W];S.copy(v),S.sub(w.multiplyScalar(w.dot(v))).normalize(),M.crossVectors(I,v);const O=M.dot(u[W])<0?-1:1;l[W*4]=S.x,l[W*4+1]=S.y,l[W*4+2]=S.z,l[W*4+3]=O}for(let W=0,v=y.length;W<v;++W){const R=y[W],O=R.start,H=R.count;for(let k=O,Y=O+H;k<Y;k+=3)B(n[k+0]),B(n[k+1]),B(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,r=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),x=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const r=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,r.length-c);for(let h=0,f=c;h<u;h++,f++)r[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,x=l.length;_<x;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new $e(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ge,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.prototype.isBufferGeometry=!0;const tu=new Me,us=new wi,Po=new Mi,jn=new N,Zn=new N,Jn=new N,Ro=new N,Co=new N,Fo=new N,na=new N,ia=new N,sa=new N,ra=new te,aa=new te,oa=new te,Io=new N,la=new N;class St extends We{constructor(e=new Ge,t=new En){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),e.ray.intersectsSphere(Po)===!1)||(tu.copy(s).invert(),us.copy(e.ray).applyMatrix4(tu),n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1))return;let r;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=i[p.materialIndex],b=Math.max(p.start,g.start),y=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let S=b,M=y;S<M;S+=3){const w=o.getX(S),I=o.getX(S+1),B=o.getX(S+2);r=ca(this,m,e,us,l,c,u,h,f,w,I,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let p=_,m=x;p<m;p+=3){const b=o.getX(p),y=o.getX(p+1),S=o.getX(p+2);r=ca(this,i,e,us,l,c,u,h,f,b,y,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,x=d.length;_<x;_++){const p=d[_],m=i[p.materialIndex],b=Math.max(p.start,g.start),y=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=b,M=y;S<M;S+=3){const w=S,I=S+1,B=S+2;r=ca(this,m,e,us,l,c,u,h,f,w,I,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=_,m=x;p<m;p+=3){const b=p,y=p+1,S=p+2;r=ca(this,i,e,us,l,c,u,h,f,b,y,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}St.prototype.isMesh=!0;function Wp(a,e,t,n,i,s,r,o){let l;if(e.side===pt?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side!==mi,o),l===null)return null;la.copy(o),la.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:a}}function ca(a,e,t,n,i,s,r,o,l,c,u,h){jn.fromBufferAttribute(i,c),Zn.fromBufferAttribute(i,u),Jn.fromBufferAttribute(i,h);const f=a.morphTargetInfluences;if(s&&f){na.set(0,0,0),ia.set(0,0,0),sa.set(0,0,0);for(let g=0,_=s.length;g<_;g++){const x=f[g],p=s[g];x!==0&&(Ro.fromBufferAttribute(p,c),Co.fromBufferAttribute(p,u),Fo.fromBufferAttribute(p,h),r?(na.addScaledVector(Ro,x),ia.addScaledVector(Co,x),sa.addScaledVector(Fo,x)):(na.addScaledVector(Ro.sub(jn),x),ia.addScaledVector(Co.sub(Zn),x),sa.addScaledVector(Fo.sub(Jn),x)))}jn.add(na),Zn.add(ia),Jn.add(sa)}a.isSkinnedMesh&&(a.boneTransform(c,jn),a.boneTransform(u,Zn),a.boneTransform(h,Jn));const d=Wp(a,e,t,n,jn,Zn,Jn,Io);if(d){o&&(ra.fromBufferAttribute(o,c),aa.fromBufferAttribute(o,u),oa.fromBufferAttribute(o,h),d.uv=ht.getUV(Io,jn,Zn,Jn,ra,aa,oa,new te)),l&&(ra.fromBufferAttribute(l,c),aa.fromBufferAttribute(l,u),oa.fromBufferAttribute(l,h),d.uv2=ht.getUV(Io,jn,Zn,Jn,ra,aa,oa,new te));const g={a:c,b:u,c:h,normal:new N,materialIndex:0};ht.getNormal(jn,Zn,Jn,g.normal),d.face=g}return d}class sr extends Ge{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(h,2));function g(_,x,p,m,b,y,S,M,w,I,B){const W=y/w,v=S/I,R=y/2,O=S/2,H=M/2,k=w+1,Y=I+1;let G=0,X=0;const fe=new N;for(let Z=0;Z<Y;Z++){const ie=Z*v-O;for(let z=0;z<k;z++){const U=z*W-R;fe[_]=U*m,fe[x]=ie*b,fe[p]=H,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[x]=0,fe[p]=M>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(z/w),h.push(1-Z/I),G+=1}}for(let Z=0;Z<I;Z++)for(let ie=0;ie<w;ie++){const z=f+ie+k*Z,U=f+ie+k*(Z+1),T=f+(ie+1)+k*(Z+1),L=f+(ie+1)+k*Z;l.push(z,U,L),l.push(U,T,L),X+=6}o.addGroup(d,X,B),d+=X,f+=G}}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(a){const e={};for(let t=0;t<a.length;t++){const n=hs(a[t]);for(const i in n)e[i]=n[i]}return e}const nu={clone:hs,merge:Tt};var Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends mt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Xp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Ln.prototype.isShaderMaterial=!0;class No extends We{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}No.prototype.isCamera=!0;class Rt extends No{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Rt.prototype.isPerspectiveCamera=!0;const fs=90,ds=1;class Do extends We{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Rt(fs,ds,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new N(1,0,0)),this.add(i);const s=new Rt(fs,ds,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);const r=new Rt(fs,ds,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new N(0,1,0)),this.add(r);const o=new Rt(fs,ds,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new N(0,-1,0)),this.add(o);const l=new Rt(fs,ds,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,1)),this.add(l);const c=new Rt(fs,ds,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new N(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class ua extends ut{constructor(e,t,n,i,s,r,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ys;super(e,t,n,i,s,r,o,l,c,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}ua.prototype.isCubeTexture=!0;class iu extends kt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n);super(e,e,t);t=t||{},this.texture=new ua(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=vt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new sr(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pt,blending:kn});s.uniforms.tEquirect.value=t;const r=new St(i,s),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=ct),new Do(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}iu.prototype.isWebGLCubeRenderTarget=!0;const Uo=new N,Qp=new N,qp=new nt;class Pn{constructor(e=new N(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Uo.subVectors(n,t).cross(Qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qp.getNormalMatrix(e),i=this.coplanarPoint(Uo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Pn.prototype.isPlane=!0;const ps=new Mi,ha=new N;class fa{constructor(e=new Pn,t=new Pn,n=new Pn,i=new Pn,s=new Pn,r=new Pn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],_=n[11],x=n[12],p=n[13],m=n[14],b=n[15];return t[0].setComponents(o-i,h-l,_-f,b-x).normalize(),t[1].setComponents(o+i,h+l,_+f,b+x).normalize(),t[2].setComponents(o+s,h+c,_+d,b+p).normalize(),t[3].setComponents(o-s,h-c,_-d,b-p).normalize(),t[4].setComponents(o-r,h-u,_-g,b-m).normalize(),t[5].setComponents(o+r,h+u,_+g,b+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ha.x=i.normal.x>0?e.max.x:e.min.x,ha.y=i.normal.y>0?e.max.y:e.min.y,ha.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function su(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function jp(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=a.createBuffer();a.bindBuffer(u,d),a.bufferData(u,h,f),c.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(g=5121),{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;a.bindBuffer(h,c),d.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:r,remove:o,update:l}}class Oo extends Ge{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],x=[];for(let p=0;p<u;p++){const m=p*f-r;for(let b=0;b<c;b++){const y=b*h-s;g.push(y,-m,0),_.push(0,0,1),x.push(b/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<o;m++){const b=m+c*p,y=m+c*(p+1),S=m+1+c*(p+1),M=m+1+c*p;d.push(b,y,M),d.push(y,S,M)}this.setIndex(d),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(_,3)),this.setAttribute("uv",new He(x,2))}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm="vec3 transformed = vec3( position );",im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,rm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Im=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Um=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Om=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Vm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,og=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Ug=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Og=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Bg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Gg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,v_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:Zp,alphamap_pars_fragment:Jp,alphatest_fragment:Kp,alphatest_pars_fragment:$p,aomap_fragment:em,aomap_pars_fragment:tm,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:am,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:um,color_pars_fragment:hm,color_pars_vertex:fm,color_vertex:dm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:_m,displacementmap_vertex:xm,emissivemap_fragment:ym,emissivemap_pars_fragment:vm,encodings_fragment:bm,encodings_pars_fragment:Sm,envmap_fragment:Mm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Tm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Om,envmap_vertex:Em,fog_vertex:Lm,fog_pars_vertex:Pm,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Fm,lightmap_fragment:Im,lightmap_pars_fragment:Nm,lights_lambert_vertex:Dm,lights_pars_begin:Um,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:km,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:Ym,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:Km,map_particle_fragment:$m,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:ag,normal_fragment_maps:og,normal_pars_fragment:lg,normal_pars_vertex:cg,normal_vertex:ug,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:pg,output_fragment:mg,packing:gg,premultiplied_alpha_fragment:_g,project_vertex:xg,dithering_fragment:yg,dithering_pars_fragment:vg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:wg,shadowmap_vertex:Tg,shadowmask_pars_fragment:Ag,skinbase_vertex:Eg,skinning_pars_vertex:Lg,skinning_vertex:Pg,skinnormal_vertex:Rg,specularmap_fragment:Cg,specularmap_pars_fragment:Fg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Ng,transmission_fragment:Dg,transmission_pars_fragment:Ug,uv_pars_fragment:Og,uv_pars_vertex:Bg,uv_vertex:zg,uv2_pars_fragment:kg,uv2_pars_vertex:Hg,uv2_vertex:Gg,worldpos_vertex:Vg,background_vert:Wg,background_frag:Xg,cube_vert:Yg,cube_frag:Qg,depth_vert:qg,depth_frag:jg,distanceRGBA_vert:Zg,distanceRGBA_frag:Jg,equirect_vert:Kg,equirect_frag:$g,linedashed_vert:e_,linedashed_frag:t_,meshbasic_vert:n_,meshbasic_frag:i_,meshlambert_vert:s_,meshlambert_frag:r_,meshmatcap_vert:a_,meshmatcap_frag:o_,meshnormal_vert:l_,meshnormal_frag:c_,meshphong_vert:u_,meshphong_frag:h_,meshphysical_vert:f_,meshphysical_frag:d_,meshtoon_vert:p_,meshtoon_frag:m_,points_vert:g_,points_frag:__,shadow_vert:x_,shadow_frag:y_,sprite_vert:v_,sprite_frag:b_},me={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new nt},uv2Transform:{value:new nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nt}}},fn={basic:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.fog,me.lights,{emissive:{value:new xe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Tt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Tt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new xe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Tt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Tt([me.points,me.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Tt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Tt([me.common,me.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Tt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Tt([me.sprite,me.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},cube:{uniforms:Tt([me.envmap,{opacity:{value:1}}]),vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Tt([me.common,me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Tt([me.lights,me.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};fn.physical={uniforms:Tt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new te(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};function S_(a,e,t,n,i,s){const r=new xe(0);let o=i===!0?0:1,l,c,u=null,h=0,f=null;function d(_,x){let p=!1,m=x.isScene===!0?x.background:null;m&&m.isTexture&&(m=e.get(m));const b=a.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(m=null),m===null?g(r,o):m&&m.isColor&&(g(m,1),p=!0),(a.autoClear||p)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Hr)?(c===void 0&&(c=new St(new sr(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:hs(fn.cube.uniforms),vertexShader:fn.cube.vertexShader,fragmentShader:fn.cube.fragmentShader,side:pt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(u!==m||h!==m.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,u=m,h=m.version,f=a.toneMapping),_.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new St(new Oo(2,2),new Ln({name:"BackgroundMaterial",uniforms:hs(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(u!==m||h!==m.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,u=m,h=m.version,f=a.toneMapping),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,x){t.buffers.color.setClear(_.r,_.g,_.b,x,s)}return{getClearColor:function(){return r},setClearColor:function(_,x=1){r.set(_),o=x,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(r,o)},render:d}}function M_(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=_(null);let c=l;function u(O,H,k,Y,G){let X=!1;if(r){const fe=g(Y,k,H);c!==fe&&(c=fe,f(c.object)),X=x(Y,G),X&&p(Y,G)}else{const fe=H.wireframe===!0;(c.geometry!==Y.id||c.program!==k.id||c.wireframe!==fe)&&(c.geometry=Y.id,c.program=k.id,c.wireframe=fe,X=!0)}O.isInstancedMesh===!0&&(X=!0),G!==null&&t.update(G,34963),X&&(w(O,H,k,Y),G!==null&&a.bindBuffer(34963,t.get(G).buffer))}function h(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function f(O){return n.isWebGL2?a.bindVertexArray(O):s.bindVertexArrayOES(O)}function d(O){return n.isWebGL2?a.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function g(O,H,k){const Y=k.wireframe===!0;let G=o[O.id];G===void 0&&(G={},o[O.id]=G);let X=G[H.id];X===void 0&&(X={},G[H.id]=X);let fe=X[Y];return fe===void 0&&(fe=_(h()),X[Y]=fe),fe}function _(O){const H=[],k=[],Y=[];for(let G=0;G<i;G++)H[G]=0,k[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:Y,object:O,attributes:{},index:null}}function x(O,H){const k=c.attributes,Y=O.attributes;let G=0;for(const X in Y){const fe=k[X],Z=Y[X];if(fe===void 0||fe.attribute!==Z||fe.data!==Z.data)return!0;G++}return c.attributesNum!==G||c.index!==H}function p(O,H){const k={},Y=O.attributes;let G=0;for(const X in Y){const fe=Y[X],Z={};Z.attribute=fe,fe.data&&(Z.data=fe.data),k[X]=Z,G++}c.attributes=k,c.attributesNum=G,c.index=H}function m(){const O=c.newAttributes;for(let H=0,k=O.length;H<k;H++)O[H]=0}function b(O){y(O,0)}function y(O,H){const k=c.newAttributes,Y=c.enabledAttributes,G=c.attributeDivisors;k[O]=1,Y[O]===0&&(a.enableVertexAttribArray(O),Y[O]=1),G[O]!==H&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,H),G[O]=H)}function S(){const O=c.newAttributes,H=c.enabledAttributes;for(let k=0,Y=H.length;k<Y;k++)H[k]!==O[k]&&(a.disableVertexAttribArray(k),H[k]=0)}function M(O,H,k,Y,G,X){n.isWebGL2===!0&&(k===5124||k===5125)?a.vertexAttribIPointer(O,H,k,G,X):a.vertexAttribPointer(O,H,k,Y,G,X)}function w(O,H,k,Y){if(n.isWebGL2===!1&&(O.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const G=Y.attributes,X=k.getAttributes(),fe=H.defaultAttributeValues;for(const Z in X){const ie=X[Z];if(ie.location>=0){let z=G[Z];if(z===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(z=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(z=O.instanceColor)),z!==void 0){const U=z.normalized,T=z.itemSize,L=t.get(z);if(L===void 0)continue;const ee=L.buffer,D=L.type,K=L.bytesPerElement;if(z.isInterleavedBufferAttribute){const ae=z.data,de=ae.stride,he=z.offset;if(ae&&ae.isInstancedInterleavedBuffer){for(let Q=0;Q<ie.locationSize;Q++)y(ie.location+Q,ae.meshPerAttribute);O.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Q=0;Q<ie.locationSize;Q++)b(ie.location+Q);a.bindBuffer(34962,ee);for(let Q=0;Q<ie.locationSize;Q++)M(ie.location+Q,T/ie.locationSize,D,U,de*K,(he+T/ie.locationSize*Q)*K)}else{if(z.isInstancedBufferAttribute){for(let ae=0;ae<ie.locationSize;ae++)y(ie.location+ae,z.meshPerAttribute);O.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ae=0;ae<ie.locationSize;ae++)b(ie.location+ae);a.bindBuffer(34962,ee);for(let ae=0;ae<ie.locationSize;ae++)M(ie.location+ae,T/ie.locationSize,D,U,T*K,T/ie.locationSize*ae*K)}}else if(fe!==void 0){const U=fe[Z];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(ie.location,U);break;case 3:a.vertexAttrib3fv(ie.location,U);break;case 4:a.vertexAttrib4fv(ie.location,U);break;default:a.vertexAttrib1fv(ie.location,U)}}}}S()}function I(){v();for(const O in o){const H=o[O];for(const k in H){const Y=H[k];for(const G in Y)d(Y[G].object),delete Y[G];delete H[k]}delete o[O]}}function B(O){if(o[O.id]===void 0)return;const H=o[O.id];for(const k in H){const Y=H[k];for(const G in Y)d(Y[G].object),delete Y[G];delete H[k]}delete o[O.id]}function W(O){for(const H in o){const k=o[H];if(k[O.id]===void 0)continue;const Y=k[O.id];for(const G in Y)d(Y[G].object),delete Y[G];delete k[O.id]}}function v(){R(),c!==l&&(c=l,f(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:v,resetDefaultState:R,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:W,initAttributes:m,enableAttribute:b,disableUnusedAttributes:S}}function w_(a,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,u){a.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=a,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=r,this.render=o,this.renderInstances=l}function T_(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext!="undefined"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),d=a.getParameter(3379),g=a.getParameter(34076),_=a.getParameter(34921),x=a.getParameter(36347),p=a.getParameter(36348),m=a.getParameter(36349),b=f>0,y=r||e.has("OES_texture_float"),S=b&&y,M=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:M}}function A_(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Pn,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,x=h.clipShadows,p=a.get(h);if(!i||g===null||g.length===0||s&&!x)s?u(null):c();else{const m=s?0:n,b=m*4;let y=p.clippingState||null;l.value=y,y=u(g,f,b,d);for(let S=0;S!==b;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let x=null;if(_!==0){if(x=l.value,g!==!0||x===null){const p=d+_*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<p)&&(x=new Float32Array(p));for(let b=0,y=d;b!==_;++b,y+=4)r.copy(h[b]).applyMatrix4(m,o),r.normal.toArray(x,y),x[y+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}}function E_(a){let e=new WeakMap;function t(r,o){return o===Za?r.mapping=Ys:o===Ja&&(r.mapping=Qs),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Za||o===Ja)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new iu(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ms extends No{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}ms.prototype.isOrthographicCamera=!0;class da extends Ln{constructor(e){super(e);this.type="RawShaderMaterial"}}da.prototype.isRawShaderMaterial=!0;const gs=4,Kn=8,dn=Math.pow(2,Kn),ru=[.125,.215,.35,.446,.526,.582],au=Kn-gs+1+ru.length,_s=20,Bo=new ms,{_lodPlanes:rr,_sizeLods:ou,_sigmas:pa}=L_(),lu=new xe;let zo=null;const Ti=(1+Math.sqrt(5))/2,xs=1/Ti,cu=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ti,xs),new N(0,Ti,-xs),new N(xs,0,Ti),new N(-xs,0,Ti),new N(Ti,xs,0),new N(-Ti,xs,0)];class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=P_(_s),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){zo=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=du(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=fu(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<rr.length;e++)rr[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zo),e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){zo=this._renderer.getRenderTarget();const n=t||this._allocateTargets(e);return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(e){const t={magFilter:ct,minFilter:ct,generateMipmaps:!1,type:Qi,format:vt,encoding:Wn,depthBuffer:!1},n=hu(t);return n.depthBuffer=!e,this._pingPongRenderTarget===null&&(this._pingPongRenderTarget=hu(t)),n}_compileMaterial(e){const t=new St(rr[0],e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,n,i){const s=90,r=1,o=new Rt(s,r,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(lu),u.toneMapping=Hn,u.autoClear=!1;const d=new En({name:"PMREM.Background",side:pt,depthWrite:!1,depthTest:!1}),g=new St(new sr,d);let _=!1;const x=e.background;x?x.isColor&&(d.color.copy(x),e.background=null,_=!0):(d.color.copy(lu),_=!0);for(let p=0;p<6;p++){const m=p%3;m===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):m===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p])),ma(i,m*dn,p>2?dn:0,dn,dn),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ys||e.mapping===Qs;i?(this._cubemapShader===null&&(this._cubemapShader=du()),this._cubemapShader.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectShader===null&&(this._equirectShader=fu());const s=i?this._cubemapShader:this._equirectShader,r=new St(rr[0],s),o=s.uniforms;o.envMap.value=e,i||o.texelSize.value.set(1/e.image.width,1/e.image.height),ma(t,0,0,3*dn,2*dn),n.setRenderTarget(t),n.render(r,Bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<au;i++){const s=Math.sqrt(pa[i]*pa[i]-pa[i-1]*pa[i-1]),r=cu[(i-1)%cu.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new St(rr[i],c),f=c.uniforms,d=ou[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*_s-1),_=s/g,x=isFinite(s)?1+Math.floor(u*_):_s;x>_s&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${_s}`);const p=[];let m=0;for(let M=0;M<_s;++M){const w=M/_,I=Math.exp(-w*w/2);p.push(I),M===0?m+=I:M<x&&(m+=2*I)}for(let M=0;M<p.length;M++)p[M]=p[M]/m;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=p,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o),f.dTheta.value=g,f.mipInt.value=Kn-n;const b=ou[i],y=3*Math.max(0,dn-2*b),S=(i===0?0:2*dn)+2*b*(i>Kn-gs?i-Kn+gs:0);ma(t,y,S,3*b,2*b),l.setRenderTarget(t),l.render(h,Bo)}}function L_(){const a=[],e=[],t=[];let n=Kn;for(let i=0;i<au;i++){const s=Math.pow(2,n);e.push(s);let r=1/s;i>Kn-gs?r=ru[i-Kn+gs-1]:i===0&&(r=0),t.push(r);const o=1/(s-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,g=2,_=1,x=new Float32Array(d*f*h),p=new Float32Array(g*f*h),m=new Float32Array(_*f*h);for(let y=0;y<h;y++){const S=y%3*2/3-1,M=y>2?0:-1,w=[S,M,0,S+2/3,M,0,S+2/3,M+1,0,S,M,0,S+2/3,M+1,0,S,M+1,0];x.set(w,d*f*y),p.set(u,g*f*y);const I=[y,y,y,y,y,y];m.set(I,_*f*y)}const b=new Ge;b.setAttribute("position",new $e(x,d)),b.setAttribute("uv",new $e(p,g)),b.setAttribute("faceIndex",new $e(m,_)),a.push(b),n>gs&&n--}return{_lodPlanes:a,_sizeLods:e,_sigmas:t}}function hu(a){const e=new kt(3*dn,3*dn,a);return e.texture.mapping=Hr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ma(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function P_(a){const e=new Float32Array(a),t=new N(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:a},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function fu(){const a=new te(1,1);return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:a}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function du(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R_(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Za||l===Ja,u=l===Ys||l===Qs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new uu(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new uu(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function C_(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function F_(a,e,t,n){const i={},s=new WeakMap;function r(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let x=0,p=_.length;x<p;x++)e.update(_[x],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const m=d.array;_=d.version;for(let b=0,y=m.length;b<y;b+=3){const S=m[b+0],M=m[b+1],w=m[b+2];f.push(S,M,M,w,w,S)}}else{const m=g.array;_=g.version;for(let b=0,y=m.length/3-1;b<y;b+=3){const S=b+0,M=b+1,w=b+2;f.push(S,M,M,w,w,S)}}const x=new(Hc(f)?eu:$c)(f,1);x.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,x)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function I_(a,e,t,n){const i=n.isWebGL2;let s;function r(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){a.drawElements(s,d,o,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let _,x;if(i)_=a,x="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](s,d,o,f*l,g),t.update(d,s,g)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h}function N_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class Ho extends ut{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ho.prototype.isDataTexture2DArray=!0;function D_(a,e){return a[0]-e[0]}function U_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function pu(a,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),a.divideScalar(t)}function O_(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new N,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let _=s.get(u);if(_===void 0||_.count!==g){let R=function(){W.dispose(),s.delete(u),u.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();const m=u.morphAttributes.normal!==void 0,b=u.morphAttributes.position,y=u.morphAttributes.normal||[],S=u.attributes.position.count,M=m===!0?2:1;let w=S*M,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const B=new Float32Array(w*I*4*g),W=new Ho(B,w,I,g);W.format=vt,W.type=Vn,W.needsUpdate=!0;const v=M*4;for(let O=0;O<g;O++){const H=b[O],k=y[O],Y=w*I*4*O;for(let G=0;G<H.count;G++){r.fromBufferAttribute(H,G),H.normalized===!0&&pu(r,H);const X=G*v;B[Y+X+0]=r.x,B[Y+X+1]=r.y,B[Y+X+2]=r.z,B[Y+X+3]=0,m===!0&&(r.fromBufferAttribute(k,G),k.normalized===!0&&pu(r,k),B[Y+X+4]=r.x,B[Y+X+5]=r.y,B[Y+X+6]=r.z,B[Y+X+7]=0)}}_={count:g,texture:W,size:new te(w,I)},s.set(u,_),u.addEventListener("dispose",R)}let x=0;for(let m=0;m<d.length;m++)x+=d[m];const p=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(a,"morphTargetBaseInfluence",p),f.getUniforms().setValue(a,"morphTargetInfluences",d),f.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const S=_[y];S[0]=y,S[1]=d[y]}_.sort(U_);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(D_);const x=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let y=0;y<8;y++){const S=o[y],M=S[0],w=S[1];M!==Number.MAX_SAFE_INTEGER&&w?(x&&u.getAttribute("morphTarget"+y)!==x[M]&&u.setAttribute("morphTarget"+y,x[M]),p&&u.getAttribute("morphNormal"+y)!==p[M]&&u.setAttribute("morphNormal"+y,p[M]),i[y]=w,m+=w):(x&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const b=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(a,"morphTargetBaseInfluence",b),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function B_(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class mu extends ut{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}mu.prototype.isDataTexture3D=!0;const gu=new ut,_u=new Ho,xu=new mu,yu=new ua,vu=[],bu=[],Su=new Float32Array(16),Mu=new Float32Array(9),wu=new Float32Array(4);function ys(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=vu[i];if(s===void 0&&(s=new Float32Array(i),vu[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Ct(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function At(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function ga(a,e){let t=bu[e];t===void 0&&(t=new Int32Array(e),bu[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function z_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function k_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;a.uniform2fv(this.addr,e),At(t,e)}}function H_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;a.uniform3fv(this.addr,e),At(t,e)}}function G_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;a.uniform4fv(this.addr,e),At(t,e)}}function V_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,n))return;wu.set(n),a.uniformMatrix2fv(this.addr,!1,wu),At(t,n)}}function W_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,n))return;Mu.set(n),a.uniformMatrix3fv(this.addr,!1,Mu),At(t,n)}}function X_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,n))return;Su.set(n),a.uniformMatrix4fv(this.addr,!1,Su),At(t,n)}}function Y_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Q_(a,e){const t=this.cache;Ct(t,e)||(a.uniform2iv(this.addr,e),At(t,e))}function q_(a,e){const t=this.cache;Ct(t,e)||(a.uniform3iv(this.addr,e),At(t,e))}function j_(a,e){const t=this.cache;Ct(t,e)||(a.uniform4iv(this.addr,e),At(t,e))}function Z_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function J_(a,e){const t=this.cache;Ct(t,e)||(a.uniform2uiv(this.addr,e),At(t,e))}function K_(a,e){const t=this.cache;Ct(t,e)||(a.uniform3uiv(this.addr,e),At(t,e))}function $_(a,e){const t=this.cache;Ct(t,e)||(a.uniform4uiv(this.addr,e),At(t,e))}function ex(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||gu,i)}function tx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xu,i)}function nx(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||yu,i)}function ix(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_u,i)}function sx(a){switch(a){case 5126:return z_;case 35664:return k_;case 35665:return H_;case 35666:return G_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return Y_;case 35667:case 35671:return Q_;case 35668:case 35672:return q_;case 35669:case 35673:return j_;case 5125:return Z_;case 36294:return J_;case 36295:return K_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(a,e){a.uniform1fv(this.addr,e)}function ax(a,e){const t=ys(e,this.size,2);a.uniform2fv(this.addr,t)}function ox(a,e){const t=ys(e,this.size,3);a.uniform3fv(this.addr,t)}function lx(a,e){const t=ys(e,this.size,4);a.uniform4fv(this.addr,t)}function cx(a,e){const t=ys(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function ux(a,e){const t=ys(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function hx(a,e){const t=ys(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function fx(a,e){a.uniform1iv(this.addr,e)}function dx(a,e){a.uniform2iv(this.addr,e)}function px(a,e){a.uniform3iv(this.addr,e)}function mx(a,e){a.uniform4iv(this.addr,e)}function gx(a,e){a.uniform1uiv(this.addr,e)}function _x(a,e){a.uniform2uiv(this.addr,e)}function xx(a,e){a.uniform3uiv(this.addr,e)}function yx(a,e){a.uniform4uiv(this.addr,e)}function vx(a,e,t){const n=e.length,i=ga(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||gu,i[s])}function bx(a,e,t){const n=e.length,i=ga(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||xu,i[s])}function Sx(a,e,t){const n=e.length,i=ga(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||yu,i[s])}function Mx(a,e,t){const n=e.length,i=ga(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||_u,i[s])}function wx(a){switch(a){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return Mx}}function Tx(a,e,t){this.id=a,this.addr=t,this.cache=[],this.setValue=sx(e.type)}function Tu(a,e,t){this.id=a,this.addr=t,this.cache=[],this.size=e.size,this.setValue=wx(e.type)}Tu.prototype.updateCache=function(a){const e=this.cache;a instanceof Float32Array&&e.length!==a.length&&(this.cache=new Float32Array(a.length)),At(e,a)};function Au(a){this.id=a,this.seq=[],this.map={}}Au.prototype.setValue=function(a,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const r=n[i];r.setValue(a,e[r.id],t)}};const Go=/(\w+)(\])?(\[|\.)?/g;function Eu(a,e){a.seq.push(e),a.map[e.id]=e}function Ax(a,e,t){const n=a.name,i=n.length;for(Go.lastIndex=0;;){const s=Go.exec(n),r=Go.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Eu(t,c===void 0?new Tx(o,a,e):new Tu(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Au(o),Eu(t,h)),t=h}}}function $n(a,e){this.seq=[],this.map={};const t=a.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=a.getActiveUniform(e,n),s=a.getUniformLocation(e,i.name);Ax(i,s,this)}}$n.prototype.setValue=function(a,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(a,t,n)};$n.prototype.setOptional=function(a,e,t){const n=e[t];n!==void 0&&this.setValue(a,t,n)};$n.upload=function(a,e,t,n){for(let i=0,s=e.length;i!==s;++i){const r=e[i],o=t[r.id];o.needsUpdate!==!1&&r.setValue(a,o.value,n)}};$n.seqWithValue=function(a,e){const t=[];for(let n=0,i=a.length;n!==i;++n){const s=a[n];s.id in e&&t.push(s)}return t};function Lu(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Ex=0;function Lx(a){const e=a.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Px(a){switch(a){case Wn:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Pu(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Lx(a.getShaderSource(e))}function Rx(a,e){const t=Px(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cx(a,e){let t;switch(e){case Vd:t="Linear";break;case Wd:t="Reinhard";break;case Xd:t="OptimizedCineon";break;case Yd:t="ACESFilmic";break;case Qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fx(a){return[a.extensionDerivatives||a.envMapCubeUV||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ar).join(`
`)}function Ix(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nx(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function ar(a){return a!==""}function Ru(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cu(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(a){return a.replace(Dx,Ux)}function Ux(a,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Vo(t)}const Ox=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(a){return a.replace(Bx,Iu).replace(Ox,zx)}function zx(a,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Iu(a,e,t,n)}function Iu(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nu(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kx(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===bd?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Ws&&(e="SHADOWMAP_TYPE_VSM"),e}function Hx(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ys:case Qs:e="ENVMAP_TYPE_CUBE";break;case Hr:case Ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gx(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Qs:case Ka:e="ENVMAP_MODE_REFRACTION";break}return e}function Vx(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case kr:e="ENVMAP_BLENDING_MULTIPLY";break;case Hd:e="ENVMAP_BLENDING_MIX";break;case Gd:e="ENVMAP_BLENDING_ADD";break}return e}function Wx(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=kx(t),c=Hx(t),u=Gx(t),h=Vx(t),f=t.isWebGL2?"":Fx(t),d=Ix(s),g=i.createProgram();let _,x,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[d].filter(ar).join(`
`),_.length>0&&(_+=`
`),x=[f,d].filter(ar).join(`
`),x.length>0&&(x+=`
`)):(_=[Nu(t),"#define SHADER_NAME "+t.shaderName,d,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),x=[f,Nu(t),"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?De.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Cx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.transparent?"":"#define OPAQUE",De.encodings_pars_fragment,Rx("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),r=Vo(r),r=Ru(r,t),r=Cu(r,t),o=Vo(o),o=Ru(o,t),o=Cu(o,t),r=Fu(r),o=Fu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const m=p+_+r,b=p+x+o,y=Lu(i,35633,m),S=Lu(i,35632,b);if(i.attachShader(g,y),i.attachShader(g,S),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),a.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(y).trim(),W=i.getShaderInfoLog(S).trim();let v=!0,R=!0;if(i.getProgramParameter(g,35714)===!1){v=!1;const O=Pu(i,y,"vertex"),H=Pu(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+I+`
`+O+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||W==="")&&(R=!1);R&&(this.diagnostics={runnable:v,programLog:I,vertexShader:{log:B,prefix:_},fragmentShader:{log:W,prefix:x}})}i.deleteShader(y),i.deleteShader(S);let M;this.getUniforms=function(){return M===void 0&&(M=new $n(i,g)),M};let w;return this.getAttributes=function(){return w===void 0&&(w=Nx(i,g)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Ex++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=S,this}let Xx=0;class Yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Qx;t.set(e,n)}return t.get(e)}}class Qx{constructor(){this.id=Xx++,this.usedTimes=0}}function qx(a,e,t,n,i,s,r){const o=new Mo,l=new Yx,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.floatVertexTextures,d=i.maxVertexUniforms,g=i.vertexTextures;let _=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){const O=v.skeleton.bones;if(f)return 1024;{const k=Math.floor((d-20)/4),Y=Math.min(k,O.length);return Y<O.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+O.length+" bones. This GPU supports "+Y+"."),0):Y}}function m(v,R,O,H,k){const Y=H.fog,G=v.isMeshStandardMaterial?H.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),fe=x[v.type],Z=k.isSkinnedMesh?p(k):0;v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));let ie,z,U,T;if(fe){const ae=fn[fe];ie=ae.vertexShader,z=ae.fragmentShader}else ie=v.vertexShader,z=v.fragmentShader,l.update(v),U=l.getVertexShaderID(v),T=l.getFragmentShaderID(v);const L=a.getRenderTarget(),ee=v.alphaTest>0,D=v.clearcoat>0;return{isWebGL2:u,shaderID:fe,shaderName:v.type,vertexShader:ie,fragmentShader:z,defines:v.defines,customVertexShaderID:U,customFragmentShaderID:T,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:g,outputEncoding:L===null?a.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:Wn,map:!!v.map,matcap:!!v.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUV:!!X&&(X.mapping===Hr||X.mapping===Ka),lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===gp,tangentSpaceNormalMap:v.normalMapType===_i,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===qe,clearcoat:D,clearcoatMap:D&&!!v.clearcoatMap,clearcoatRoughnessMap:D&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:D&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,transparent:v.transparent,alphaMap:!!v.alphaMap,alphaTest:ee,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!k.geometry&&!!k.geometry.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.geometry&&!!k.geometry.attributes.color&&k.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!Y,useFog:v.fog,fogExp2:Y&&Y.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0&&Z>0,maxBones:Z,useVertexTexture:f,morphTargets:!!k.geometry&&!!k.geometry.morphAttributes.position,morphNormals:!!k.geometry&&!!k.geometry.morphAttributes.normal,morphTargetsCount:!!k.geometry&&!!k.geometry.morphAttributes.position?k.geometry.morphAttributes.position.length:0,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&O.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:Hn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mi,flipSided:v.side===pt,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function b(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)R.push(O),R.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(y(R,v),S(R,v),R.push(a.outputEncoding)),R.push(v.customProgramCacheKey),R.join()}function y(v,R){v.push(R.precision),v.push(R.outputEncoding),v.push(R.envMapMode),v.push(R.combine),v.push(R.vertexUvs),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.maxBones),v.push(R.morphTargetsCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection)}function S(v,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.map&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.envMapCubeUV&&o.enable(7),R.lightMap&&o.enable(8),R.aoMap&&o.enable(9),R.emissiveMap&&o.enable(10),R.bumpMap&&o.enable(11),R.normalMap&&o.enable(12),R.objectSpaceNormalMap&&o.enable(13),R.tangentSpaceNormalMap&&o.enable(14),R.clearcoat&&o.enable(15),R.clearcoatMap&&o.enable(16),R.clearcoatRoughnessMap&&o.enable(17),R.clearcoatNormalMap&&o.enable(18),R.displacementMap&&o.enable(19),R.specularMap&&o.enable(20),R.roughnessMap&&o.enable(21),R.metalnessMap&&o.enable(22),R.gradientMap&&o.enable(23),R.alphaMap&&o.enable(24),R.alphaTest&&o.enable(25),R.vertexColors&&o.enable(26),R.vertexAlphas&&o.enable(27),R.vertexUvs&&o.enable(28),R.vertexTangents&&o.enable(29),R.uvsVertexOnly&&o.enable(30),R.fog&&o.enable(31),v.push(o.mask),o.disableAll(),R.useFog&&o.enable(0),R.flatShading&&o.enable(1),R.logarithmicDepthBuffer&&o.enable(2),R.skinning&&o.enable(3),R.useVertexTexture&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.premultipliedAlpha&&o.enable(7),R.shadowMapEnabled&&o.enable(8),R.physicallyCorrectLights&&o.enable(9),R.doubleSided&&o.enable(10),R.flipSided&&o.enable(11),R.depthPacking&&o.enable(12),R.dithering&&o.enable(13),R.specularIntensityMap&&o.enable(14),R.specularColorMap&&o.enable(15),R.transmission&&o.enable(16),R.transmissionMap&&o.enable(17),R.thicknessMap&&o.enable(18),R.sheen&&o.enable(19),R.sheenColorMap&&o.enable(20),R.sheenRoughnessMap&&o.enable(21),R.decodeVideoTexture&&o.enable(22),R.transparent&&o.enable(23),v.push(o.mask)}function M(v){const R=x[v.type];let O;if(R){const H=fn[R];O=nu.clone(H.uniforms)}else O=v.uniforms;return O}function w(v,R){let O;for(let H=0,k=c.length;H<k;H++){const Y=c[H];if(Y.cacheKey===R){O=Y,++O.usedTimes;break}}return O===void 0&&(O=new Wx(a,R,v,s),c.push(O)),O}function I(v){if(--v.usedTimes==0){const R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),v.destroy()}}function B(v){l.remove(v)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:M,acquireProgram:w,releaseProgram:I,releaseShaderCache:B,programs:c,dispose:W}}function jx(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Du(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Uu(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(h,f,d,g,_,x){let p=a[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:x},a[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=x),e++,p}function o(h,f,d,g,_,x){const p=r(h,f,d,g,_,x);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,x){const p=r(h,f,d,g,_,x);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Zx),n.length>1&&n.sort(f||Du),i.length>1&&i.sort(f||Du)}function u(){for(let h=e,f=a.length;h<f;h++){const d=a[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Jx(){let a=new WeakMap;function e(n,i){let s;return a.has(n)===!1?(s=new Uu,a.set(n,[s])):i>=a.get(n).length?(s=new Uu,a.get(n).push(s)):s=a.get(n)[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Kx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new xe};break;case"SpotLight":t={position:new N,direction:new N,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new N,halfWidth:new N,halfHeight:new N};break}return a[e.id]=t,t}}}function $x(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let e0=0;function t0(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function n0(a,e){const t=new Kx,n=$x(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,r=new Me,o=new Me;function l(u,h){let f=0,d=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let _=0,x=0,p=0,m=0,b=0,y=0,S=0,M=0;u.sort(t0);const w=h!==!0?Math.PI:1;for(let B=0,W=u.length;B<W;B++){const v=u[B],R=v.color,O=v.intensity,H=v.distance,k=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)f+=R.r*O*w,d+=R.g*O*w,g+=R.b*O*w;else if(v.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(v.sh.coefficients[Y],O);else if(v.isDirectionalLight){const Y=t.get(v);if(Y.color.copy(v.color).multiplyScalar(v.intensity*w),v.castShadow){const G=v.shadow,X=n.get(v);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,i.directionalShadow[_]=X,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=v.shadow.matrix,y++}i.directional[_]=Y,_++}else if(v.isSpotLight){const Y=t.get(v);if(Y.position.setFromMatrixPosition(v.matrixWorld),Y.color.copy(R).multiplyScalar(O*w),Y.distance=H,Y.coneCos=Math.cos(v.angle),Y.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),Y.decay=v.decay,v.castShadow){const G=v.shadow,X=n.get(v);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,i.spotShadow[p]=X,i.spotShadowMap[p]=k,i.spotShadowMatrix[p]=v.shadow.matrix,M++}i.spot[p]=Y,p++}else if(v.isRectAreaLight){const Y=t.get(v);Y.color.copy(R).multiplyScalar(O),Y.halfWidth.set(v.width*.5,0,0),Y.halfHeight.set(0,v.height*.5,0),i.rectArea[m]=Y,m++}else if(v.isPointLight){const Y=t.get(v);if(Y.color.copy(v.color).multiplyScalar(v.intensity*w),Y.distance=v.distance,Y.decay=v.decay,v.castShadow){const G=v.shadow,X=n.get(v);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,i.pointShadow[x]=X,i.pointShadowMap[x]=k,i.pointShadowMatrix[x]=v.shadow.matrix,S++}i.point[x]=Y,x++}else if(v.isHemisphereLight){const Y=t.get(v);Y.skyColor.copy(v.color).multiplyScalar(O*w),Y.groundColor.copy(v.groundColor).multiplyScalar(O*w),i.hemi[b]=Y,b++}}m>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==_||I.pointLength!==x||I.spotLength!==p||I.rectAreaLength!==m||I.hemiLength!==b||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==M)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=m,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotShadowMatrix.length=M,I.directionalLength=_,I.pointLength=x,I.spotLength=p,I.rectAreaLength=m,I.hemiLength=b,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=M,i.version=e0++)}function c(u,h){let f=0,d=0,g=0,_=0,x=0;const p=h.matrixWorldInverse;for(let m=0,b=u.length;m<b;m++){const y=u[m];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(y.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),S.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function Ou(a,e){const t=new n0(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function i0(a,e){let t=new WeakMap;function n(s,r=0){let o;return t.has(s)===!1?(o=new Ou(a,e),t.set(s,[o])):r>=t.get(s).length?(o=new Ou(a,e),t.get(s).push(o)):o=t.get(s)[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class Bu extends mt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Bu.prototype.isMeshDepthMaterial=!0;class zu extends mt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}zu.prototype.isMeshDistanceMaterial=!0;const s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ku(a,e,t){let n=new fa;const i=new te,s=new te,r=new je,o=new Bu({depthPacking:mp}),l=new zu,c={},u=t.maxTextureSize,h={0:pt,1:Vi,2:mi},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:s0,fragmentShader:r0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc,this.render=function(y,S,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;const w=a.getRenderTarget(),I=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),W=a.state;W.setBlending(kn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);for(let v=0,R=y.length;v<R;v++){const O=y[v],H=O.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const k=H.getFrameExtents();if(i.multiply(k),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/k.x),i.x=s.x*k.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/k.y),i.y=s.y*k.y,H.mapSize.y=s.y)),H.map===null&&!H.isPointLightShadow&&this.type===Ws){const G={minFilter:ct,magFilter:ct,format:vt};H.map=new kt(i.x,i.y,G),H.map.texture.name=O.name+".shadowMap",H.mapPass=new kt(i.x,i.y,G),H.camera.updateProjectionMatrix()}if(H.map===null){const G={minFilter:lt,magFilter:lt,format:vt};H.map=new kt(i.x,i.y,G),H.map.texture.name=O.name+".shadowMap",H.camera.updateProjectionMatrix()}a.setRenderTarget(H.map),a.clear();const Y=H.getViewportCount();for(let G=0;G<Y;G++){const X=H.getViewport(G);r.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),W.viewport(r),H.updateMatrices(O,G),n=H.getFrustum(),b(S,M,H.camera,O,this.type)}!H.isPointLightShadow&&this.type===Ws&&p(H,M),H.needsUpdate=!1}x.needsUpdate=!1,a.setRenderTarget(w,I,B)};function p(y,S){const M=e.update(_);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(S,null,M,f,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(S,null,M,d,_,null)}function m(y,S,M,w,I,B,W){let v=null;const R=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0?v=R:v=w.isPointLight===!0?l:o,a.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const O=v.uuid,H=M.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let Y=k[H];Y===void 0&&(Y=v.clone(),k[H]=Y),v=Y}return v.visible=M.visible,v.wireframe=M.wireframe,W===Ws?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:h[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,w.isPointLight===!0&&v.isMeshDistanceMaterial===!0&&(v.referencePosition.setFromMatrixPosition(w.matrixWorld),v.nearDistance=I,v.farDistance=B),v}function b(y,S,M,w,I){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&I===Ws)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const v=e.update(y),R=y.material;if(Array.isArray(R)){const O=v.groups;for(let H=0,k=O.length;H<k;H++){const Y=O[H],G=R[Y.materialIndex];if(G&&G.visible){const X=m(y,v,G,w,M.near,M.far,I);a.renderBufferDirect(M,null,v,X,y,Y)}}}else if(R.visible){const O=m(y,v,R,w,M.near,M.far,I);a.renderBufferDirect(M,null,v,O,y,null)}}const W=y.children;for(let v=0,R=W.length;v<R;v++)b(W[v],S,M,w,I)}}function a0(a,e,t){const n=t.isWebGL2;function i(){let V=!1;const Se=new je;let ve=null;const Le=new je(0,0,0,0);return{setMask:function(le){ve!==le&&!V&&(a.colorMask(le,le,le,le),ve=le)},setLocked:function(le){V=le},setClear:function(le,Ae,Ue,tt,zt){zt===!0&&(le*=tt,Ae*=tt,Ue*=tt),Se.set(le,Ae,Ue,tt),Le.equals(Se)===!1&&(a.clearColor(le,Ae,Ue,tt),Le.copy(Se))},reset:function(){V=!1,ve=null,Le.set(-1,0,0,0)}}}function s(){let V=!1,Se=null,ve=null,Le=null;return{setTest:function(le){le?L(2929):ee(2929)},setMask:function(le){Se!==le&&!V&&(a.depthMask(le),Se=le)},setFunc:function(le){if(ve!==le){if(le)switch(le){case Nd:a.depthFunc(512);break;case Dd:a.depthFunc(519);break;case Ud:a.depthFunc(513);break;case ja:a.depthFunc(515);break;case Od:a.depthFunc(514);break;case Bd:a.depthFunc(518);break;case zd:a.depthFunc(516);break;case kd:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);ve=le}},setLocked:function(le){V=le},setClear:function(le){Le!==le&&(a.clearDepth(le),Le=le)},reset:function(){V=!1,Se=null,ve=null,Le=null}}}function r(){let V=!1,Se=null,ve=null,Le=null,le=null,Ae=null,Ue=null,tt=null,zt=null;return{setTest:function(rt){V||(rt?L(2960):ee(2960))},setMask:function(rt){Se!==rt&&!V&&(a.stencilMask(rt),Se=rt)},setFunc:function(rt,ln,vn){(ve!==rt||Le!==ln||le!==vn)&&(a.stencilFunc(rt,ln,vn),ve=rt,Le=ln,le=vn)},setOp:function(rt,ln,vn){(Ae!==rt||Ue!==ln||tt!==vn)&&(a.stencilOp(rt,ln,vn),Ae=rt,Ue=ln,tt=vn)},setLocked:function(rt){V=rt},setClear:function(rt){zt!==rt&&(a.clearStencil(rt),zt=rt)},reset:function(){V=!1,Se=null,ve=null,Le=null,le=null,Ae=null,Ue=null,tt=null,zt=null}}}const o=new i,l=new s,c=new r;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,x=null,p=null,m=null,b=null,y=null,S=null,M=null,w=!1,I=null,B=null,W=null,v=null,R=null;const O=a.getParameter(35661);let H=!1,k=0;const Y=a.getParameter(7938);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=k>=2);let G=null,X={};const fe=a.getParameter(3088),Z=a.getParameter(2978),ie=new je().fromArray(fe),z=new je().fromArray(Z);function U(V,Se,ve){const Le=new Uint8Array(4),le=a.createTexture();a.bindTexture(V,le),a.texParameteri(V,10241,9728),a.texParameteri(V,10240,9728);for(let Ae=0;Ae<ve;Ae++)a.texImage2D(Se+Ae,0,6408,1,1,0,6408,5121,Le);return le}const T={};T[3553]=U(3553,3553,1),T[34067]=U(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),L(2929),l.setFunc(ja),q(!1),ne(ic),L(2884),Q(kn);function L(V){u[V]!==!0&&(a.enable(V),u[V]=!0)}function ee(V){u[V]!==!1&&(a.disable(V),u[V]=!1)}function D(V,Se){return h[V]!==Se?(a.bindFramebuffer(V,Se),h[V]=Se,n&&(V===36009&&(h[36160]=Se),V===36160&&(h[36009]=Se)),!0):!1}function K(V,Se){let ve=d,Le=!1;if(V)if(ve=f.get(Se),ve===void 0&&(ve=[],f.set(Se,ve)),V.isWebGLMultipleRenderTargets){const le=V.texture;if(ve.length!==le.length||ve[0]!==36064){for(let Ae=0,Ue=le.length;Ae<Ue;Ae++)ve[Ae]=36064+Ae;ve.length=le.length,Le=!0}}else ve[0]!==36064&&(ve[0]=36064,Le=!0);else ve[0]!==1029&&(ve[0]=1029,Le=!0);Le&&(t.isWebGL2?a.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function ae(V){return g!==V?(a.useProgram(V),g=V,!0):!1}const de={[Wi]:32774,[Md]:32778,[wd]:32779};if(n)de[cc]=32775,de[uc]=32776;else{const V=e.get("EXT_blend_minmax");V!==null&&(de[cc]=V.MIN_EXT,de[uc]=V.MAX_EXT)}const he={[Td]:0,[Ad]:1,[Ed]:768,[hc]:770,[Id]:776,[Cd]:774,[Pd]:772,[Ld]:769,[fc]:771,[Fd]:775,[Rd]:773};function Q(V,Se,ve,Le,le,Ae,Ue,tt){if(V===kn){_===!0&&(ee(3042),_=!1);return}if(_===!1&&(L(3042),_=!0),V!==Sd){if(V!==x||tt!==w){if((p!==Wi||y!==Wi)&&(a.blendEquation(32774),p=Wi,y=Wi),tt)switch(V){case Xs:a.blendFuncSeparate(1,771,1,771);break;case ac:a.blendFunc(1,1);break;case oc:a.blendFuncSeparate(0,769,0,1);break;case lc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Xs:a.blendFuncSeparate(770,771,1,771);break;case ac:a.blendFunc(770,1);break;case oc:a.blendFuncSeparate(0,769,0,1);break;case lc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}m=null,b=null,S=null,M=null,x=V,w=tt}return}le=le||Se,Ae=Ae||ve,Ue=Ue||Le,(Se!==p||le!==y)&&(a.blendEquationSeparate(de[Se],de[le]),p=Se,y=le),(ve!==m||Le!==b||Ae!==S||Ue!==M)&&(a.blendFuncSeparate(he[ve],he[Le],he[Ae],he[Ue]),m=ve,b=Le,S=Ae,M=Ue),x=V,w=null}function oe(V,Se){V.side===mi?ee(2884):L(2884);let ve=V.side===pt;Se&&(ve=!ve),q(ve),V.blending===Xs&&V.transparent===!1?Q(kn):Q(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);const Le=V.stencilWrite;c.setTest(Le),Le&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),E(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?L(32926):ee(32926)}function q(V){I!==V&&(V?a.frontFace(2304):a.frontFace(2305),I=V)}function ne(V){V!==yd?(L(2884),V!==B&&(V===ic?a.cullFace(1029):V===vd?a.cullFace(1028):a.cullFace(1032))):ee(2884),B=V}function F(V){V!==W&&(H&&a.lineWidth(V),W=V)}function E(V,Se,ve){V?(L(32823),(v!==Se||R!==ve)&&(a.polygonOffset(Se,ve),v=Se,R=ve)):ee(32823)}function ue(V){V?L(3089):ee(3089)}function ye(V){V===void 0&&(V=33984+O-1),G!==V&&(a.activeTexture(V),G=V)}function Ee(V,Se){G===null&&ye();let ve=X[G];ve===void 0&&(ve={type:void 0,texture:void 0},X[G]=ve),(ve.type!==V||ve.texture!==Se)&&(a.bindTexture(V,Se||T[V]),ve.type=V,ve.texture=Se)}function Pe(){const V=X[G];V!==void 0&&V.type!==void 0&&(a.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function C(){try{a.compressedTexImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function A(){try{a.texSubImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{a.texSubImage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{a.texStorage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{a.texStorage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{a.texImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{a.texImage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(V){ie.equals(V)===!1&&(a.scissor(V.x,V.y,V.z,V.w),ie.copy(V))}function ge(V){z.equals(V)===!1&&(a.viewport(V.x,V.y,V.z,V.w),z.copy(V))}function Ce(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},G=null,X={},h={},f=new WeakMap,d=[],g=null,_=!1,x=null,p=null,m=null,b=null,y=null,S=null,M=null,w=!1,I=null,B=null,W=null,v=null,R=null,ie.set(0,0,a.canvas.width,a.canvas.height),z.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:L,disable:ee,bindFramebuffer:D,drawBuffers:K,useProgram:ae,setBlending:Q,setMaterial:oe,setFlipSided:q,setCullFace:ne,setLineWidth:F,setPolygonOffset:E,setScissorTest:ue,activeTexture:ye,bindTexture:Ee,unbindTexture:Pe,compressedTexImage2D:C,texImage2D:Te,texImage3D:we,texStorage2D:be,texStorage3D:se,texSubImage2D:A,texSubImage3D:re,compressedTexSubImage2D:pe,scissor:_e,viewport:ge,reset:Ce}}function o0(a,e,t,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,g=new WeakMap;let _,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,A){return x?new OffscreenCanvas(C,A):er("canvas")}function m(C,A,re,pe){let be=1;if((C.width>pe||C.height>pe)&&(be=pe/Math.max(C.width,C.height)),be<1||A===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){const se=A?kc:Math.floor,Te=se(be*C.width),we=se(be*C.height);_===void 0&&(_=p(Te,we));const _e=re?p(Te,we):_;return _e.width=Te,_e.height=we,_e.getContext("2d").drawImage(C,0,0,Te,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Te+"x"+we+")."),_e}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function b(C){return uo(C.width)&&uo(C.height)}function y(C){return o?!1:C.wrapS!==Ft||C.wrapT!==Ft||C.minFilter!==lt&&C.minFilter!==ct}function S(C,A){return C.generateMipmaps&&A&&C.minFilter!==lt&&C.minFilter!==ct}function M(C){a.generateMipmap(C)}function w(C,A,re,pe,be=!1){if(o===!1)return A;if(C!==null){if(a[C]!==void 0)return a[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=A;return A===6403&&(re===5126&&(se=33326),re===5131&&(se=33325),re===5121&&(se=33321)),A===33319&&(re===5126&&(se=33328),re===5131&&(se=33327),re===5121&&(se=33323)),A===6408&&(re===5126&&(se=34836),re===5131&&(se=34842),re===5121&&(se=pe===qe&&be===!1?35907:32856),re===32819&&(se=32854),re===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function I(C,A,re){return S(C,re)===!0||C.isFramebufferTexture&&C.minFilter!==lt&&C.minFilter!==ct?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function B(C){return C===lt||C===$a||C===eo?9728:9729}function W(C){const A=C.target;A.removeEventListener("dispose",W),R(A),A.isVideoTexture&&g.delete(A),r.memory.textures--}function v(C){const A=C.target;A.removeEventListener("dispose",v),O(A)}function R(C){const A=n.get(C);A.__webglInit!==void 0&&(a.deleteTexture(A.__webglTexture),n.remove(C))}function O(C){const A=C.texture,re=n.get(C),pe=n.get(A);if(!!C){if(pe.__webglTexture!==void 0&&(a.deleteTexture(pe.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let be=0;be<6;be++)a.deleteFramebuffer(re.__webglFramebuffer[be]),re.__webglDepthbuffer&&a.deleteRenderbuffer(re.__webglDepthbuffer[be]);else a.deleteFramebuffer(re.__webglFramebuffer),re.__webglDepthbuffer&&a.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&a.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer&&a.deleteRenderbuffer(re.__webglColorRenderbuffer),re.__webglDepthRenderbuffer&&a.deleteRenderbuffer(re.__webglDepthRenderbuffer);if(C.isWebGLMultipleRenderTargets)for(let be=0,se=A.length;be<se;be++){const Te=n.get(A[be]);Te.__webglTexture&&(a.deleteTexture(Te.__webglTexture),r.memory.textures--),n.remove(A[be])}n.remove(A),n.remove(C)}}let H=0;function k(){H=0}function Y(){const C=H;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),H+=1,C}function G(C,A){const re=n.get(C);if(C.isVideoTexture&&F(C),C.version>0&&re.__version!==C.version){const pe=C.image;if(pe===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(re,C,A);return}}t.activeTexture(33984+A),t.bindTexture(3553,re.__webglTexture)}function X(C,A){const re=n.get(C);if(C.version>0&&re.__version!==C.version){L(re,C,A);return}t.activeTexture(33984+A),t.bindTexture(35866,re.__webglTexture)}function fe(C,A){const re=n.get(C);if(C.version>0&&re.__version!==C.version){L(re,C,A);return}t.activeTexture(33984+A),t.bindTexture(32879,re.__webglTexture)}function Z(C,A){const re=n.get(C);if(C.version>0&&re.__version!==C.version){ee(re,C,A);return}t.activeTexture(33984+A),t.bindTexture(34067,re.__webglTexture)}const ie={[Xi]:10497,[Ft]:33071,[Gr]:33648},z={[lt]:9728,[$a]:9984,[eo]:9986,[ct]:9729,[pc]:9985,[Yi]:9987};function U(C,A,re){if(re?(a.texParameteri(C,10242,ie[A.wrapS]),a.texParameteri(C,10243,ie[A.wrapT]),(C===32879||C===35866)&&a.texParameteri(C,32882,ie[A.wrapR]),a.texParameteri(C,10240,z[A.magFilter]),a.texParameteri(C,10241,z[A.minFilter])):(a.texParameteri(C,10242,33071),a.texParameteri(C,10243,33071),(C===32879||C===35866)&&a.texParameteri(C,32882,33071),(A.wrapS!==Ft||A.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(C,10240,B(A.magFilter)),a.texParameteri(C,10241,B(A.minFilter)),A.minFilter!==lt&&A.minFilter!==ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(A.type===Vn&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Qi&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(a.texParameterf(C,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function T(C,A){C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",W),C.__webglTexture=a.createTexture(),r.memory.textures++)}function L(C,A,re){let pe=3553;A.isDataTexture2DArray&&(pe=35866),A.isDataTexture3D&&(pe=32879),T(C,A),t.activeTexture(33984+re),t.bindTexture(pe,C.__webglTexture),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);const be=y(A)&&b(A.image)===!1;let se=m(A.image,be,!1,u);se=E(A,se);const Te=b(se)||o,we=s.convert(A.format,A.encoding);let _e=s.convert(A.type),ge=w(A.internalFormat,we,_e,A.encoding,A.isVideoTexture);U(pe,A,Te);let Ce;const V=A.mipmaps,Se=o&&A.isVideoTexture!==!0,ve=C.__version===void 0,Le=I(A,se,Te);if(A.isDepthTexture)ge=6402,o?A.type===Vn?ge=36012:A.type===Vr?ge=33190:A.type===qi?ge=35056:ge=33189:A.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===gi&&ge===6402&&A.type!==qs&&A.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=qs,_e=s.convert(A.type)),A.format===ji&&ge===6402&&(ge=34041,A.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=qi,_e=s.convert(A.type))),Se&&ve?t.texStorage2D(3553,1,ge,se.width,se.height):t.texImage2D(3553,0,ge,se.width,se.height,0,we,_e,null);else if(A.isDataTexture)if(V.length>0&&Te){Se&&ve&&t.texStorage2D(3553,Le,ge,V[0].width,V[0].height);for(let le=0,Ae=V.length;le<Ae;le++)Ce=V[le],Se?t.texSubImage2D(3553,0,0,0,Ce.width,Ce.height,we,_e,Ce.data):t.texImage2D(3553,le,ge,Ce.width,Ce.height,0,we,_e,Ce.data);A.generateMipmaps=!1}else Se?(ve&&t.texStorage2D(3553,Le,ge,se.width,se.height),t.texSubImage2D(3553,0,0,0,se.width,se.height,we,_e,se.data)):t.texImage2D(3553,0,ge,se.width,se.height,0,we,_e,se.data);else if(A.isCompressedTexture){Se&&ve&&t.texStorage2D(3553,Le,ge,V[0].width,V[0].height);for(let le=0,Ae=V.length;le<Ae;le++)Ce=V[le],A.format!==vt?we!==null?Se?t.compressedTexSubImage2D(3553,le,0,0,Ce.width,Ce.height,we,Ce.data):t.compressedTexImage2D(3553,le,ge,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage2D(3553,le,0,0,Ce.width,Ce.height,we,_e,Ce.data):t.texImage2D(3553,le,ge,Ce.width,Ce.height,0,we,_e,Ce.data)}else if(A.isDataTexture2DArray)Se?(ve&&t.texStorage3D(35866,Le,ge,se.width,se.height,se.depth),t.texSubImage3D(35866,0,0,0,0,se.width,se.height,se.depth,we,_e,se.data)):t.texImage3D(35866,0,ge,se.width,se.height,se.depth,0,we,_e,se.data);else if(A.isDataTexture3D)Se?(ve&&t.texStorage3D(32879,Le,ge,se.width,se.height,se.depth),t.texSubImage3D(32879,0,0,0,0,se.width,se.height,se.depth,we,_e,se.data)):t.texImage3D(32879,0,ge,se.width,se.height,se.depth,0,we,_e,se.data);else if(A.isFramebufferTexture)Se&&ve?t.texStorage2D(3553,Le,ge,se.width,se.height):t.texImage2D(3553,0,ge,se.width,se.height,0,we,_e,null);else if(V.length>0&&Te){Se&&ve&&t.texStorage2D(3553,Le,ge,V[0].width,V[0].height);for(let le=0,Ae=V.length;le<Ae;le++)Ce=V[le],Se?t.texSubImage2D(3553,le,0,0,we,_e,Ce):t.texImage2D(3553,le,ge,we,_e,Ce);A.generateMipmaps=!1}else Se?(ve&&t.texStorage2D(3553,Le,ge,se.width,se.height),t.texSubImage2D(3553,0,0,0,we,_e,se)):t.texImage2D(3553,0,ge,we,_e,se);S(A,Te)&&M(pe),C.__version=A.version,A.onUpdate&&A.onUpdate(A)}function ee(C,A,re){if(A.image.length!==6)return;T(C,A),t.activeTexture(33984+re),t.bindTexture(34067,C.__webglTexture),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);const pe=A&&(A.isCompressedTexture||A.image[0].isCompressedTexture),be=A.image[0]&&A.image[0].isDataTexture,se=[];for(let le=0;le<6;le++)!pe&&!be?se[le]=m(A.image[le],!1,!0,c):se[le]=be?A.image[le].image:A.image[le],se[le]=E(A,se[le]);const Te=se[0],we=b(Te)||o,_e=s.convert(A.format,A.encoding),ge=s.convert(A.type),Ce=w(A.internalFormat,_e,ge,A.encoding),V=o&&A.isVideoTexture!==!0,Se=C.__version===void 0;let ve=I(A,Te,we);U(34067,A,we);let Le;if(pe){V&&Se&&t.texStorage2D(34067,ve,Ce,Te.width,Te.height);for(let le=0;le<6;le++){Le=se[le].mipmaps;for(let Ae=0;Ae<Le.length;Ae++){const Ue=Le[Ae];A.format!==vt?_e!==null?V?t.compressedTexSubImage2D(34069+le,Ae,0,0,Ue.width,Ue.height,_e,Ue.data):t.compressedTexImage2D(34069+le,Ae,Ce,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?t.texSubImage2D(34069+le,Ae,0,0,Ue.width,Ue.height,_e,ge,Ue.data):t.texImage2D(34069+le,Ae,Ce,Ue.width,Ue.height,0,_e,ge,Ue.data)}}}else{Le=A.mipmaps,V&&Se&&(Le.length>0&&ve++,t.texStorage2D(34067,ve,Ce,se[0].width,se[0].height));for(let le=0;le<6;le++)if(be){V?t.texSubImage2D(34069+le,0,0,0,se[le].width,se[le].height,_e,ge,se[le].data):t.texImage2D(34069+le,0,Ce,se[le].width,se[le].height,0,_e,ge,se[le].data);for(let Ae=0;Ae<Le.length;Ae++){const tt=Le[Ae].image[le].image;V?t.texSubImage2D(34069+le,Ae+1,0,0,tt.width,tt.height,_e,ge,tt.data):t.texImage2D(34069+le,Ae+1,Ce,tt.width,tt.height,0,_e,ge,tt.data)}}else{V?t.texSubImage2D(34069+le,0,0,0,_e,ge,se[le]):t.texImage2D(34069+le,0,Ce,_e,ge,se[le]);for(let Ae=0;Ae<Le.length;Ae++){const Ue=Le[Ae];V?t.texSubImage2D(34069+le,Ae+1,0,0,_e,ge,Ue.image[le]):t.texImage2D(34069+le,Ae+1,Ce,_e,ge,Ue.image[le])}}}S(A,we)&&M(34067),C.__version=A.version,A.onUpdate&&A.onUpdate(A)}function D(C,A,re,pe,be){const se=s.convert(re.format,re.encoding),Te=s.convert(re.type),we=w(re.internalFormat,se,Te,re.encoding);n.get(A).__hasExternalTextures||(be===32879||be===35866?t.texImage3D(be,0,we,A.width,A.height,A.depth,0,se,Te,null):t.texImage2D(be,0,we,A.width,A.height,0,se,Te,null)),t.bindFramebuffer(36160,C),A.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,pe,be,n.get(re).__webglTexture,0,ne(A)):a.framebufferTexture2D(36160,pe,be,n.get(re).__webglTexture,0),t.bindFramebuffer(36160,null)}function K(C,A,re){if(a.bindRenderbuffer(36161,C),A.depthBuffer&&!A.stencilBuffer){let pe=33189;if(re||A.useRenderToTexture){const be=A.depthTexture;be&&be.isDepthTexture&&(be.type===Vn?pe=36012:be.type===Vr&&(pe=33190));const se=ne(A);A.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,se,pe,A.width,A.height):a.renderbufferStorageMultisample(36161,se,pe,A.width,A.height)}else a.renderbufferStorage(36161,pe,A.width,A.height);a.framebufferRenderbuffer(36160,36096,36161,C)}else if(A.depthBuffer&&A.stencilBuffer){const pe=ne(A);re&&A.useRenderbuffer?a.renderbufferStorageMultisample(36161,pe,35056,A.width,A.height):A.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,pe,35056,A.width,A.height):a.renderbufferStorage(36161,34041,A.width,A.height),a.framebufferRenderbuffer(36160,33306,36161,C)}else{const pe=A.isWebGLMultipleRenderTargets===!0?A.texture[0]:A.texture,be=s.convert(pe.format,pe.encoding),se=s.convert(pe.type),Te=w(pe.internalFormat,be,se,pe.encoding),we=ne(A);re&&A.useRenderbuffer?a.renderbufferStorageMultisample(36161,we,Te,A.width,A.height):A.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,we,Te,A.width,A.height):a.renderbufferStorage(36161,Te,A.width,A.height)}a.bindRenderbuffer(36161,null)}function ae(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const pe=n.get(A.depthTexture).__webglTexture,be=ne(A);if(A.depthTexture.format===gi)A.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,pe,0,be):a.framebufferTexture2D(36160,36096,3553,pe,0);else if(A.depthTexture.format===ji)A.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,pe,0,be):a.framebufferTexture2D(36160,33306,3553,pe,0);else throw new Error("Unknown depthTexture format")}function de(C){const A=n.get(C),re=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");ae(A.__webglFramebuffer,C)}else if(re){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(36160,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]=a.createRenderbuffer(),K(A.__webglDepthbuffer[pe],C,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=a.createRenderbuffer(),K(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function he(C,A,re){const pe=n.get(C);A!==void 0&&D(pe.__webglFramebuffer,C,C.texture,36064,3553),re!==void 0&&de(C)}function Q(C){const A=C.texture,re=n.get(C),pe=n.get(A);C.addEventListener("dispose",v),C.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture()),pe.__version=A.version,r.memory.textures++);const be=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,Te=A.isDataTexture3D||A.isDataTexture2DArray,we=b(C)||o;if(be){re.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)re.__webglFramebuffer[_e]=a.createFramebuffer()}else if(re.__webglFramebuffer=a.createFramebuffer(),se)if(i.drawBuffers){const _e=C.texture;for(let ge=0,Ce=_e.length;ge<Ce;ge++){const V=n.get(_e[ge]);V.__webglTexture===void 0&&(V.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(C.useRenderbuffer)if(o){re.__webglMultisampledFramebuffer=a.createFramebuffer(),re.__webglColorRenderbuffer=a.createRenderbuffer(),a.bindRenderbuffer(36161,re.__webglColorRenderbuffer);const _e=s.convert(A.format,A.encoding),ge=s.convert(A.type),Ce=w(A.internalFormat,_e,ge,A.encoding),V=ne(C);a.renderbufferStorageMultisample(36161,V,Ce,C.width,C.height),t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064,36161,re.__webglColorRenderbuffer),a.bindRenderbuffer(36161,null),C.depthBuffer&&(re.__webglDepthRenderbuffer=a.createRenderbuffer(),K(re.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(be){t.bindTexture(34067,pe.__webglTexture),U(34067,A,we);for(let _e=0;_e<6;_e++)D(re.__webglFramebuffer[_e],C,A,36064,34069+_e);S(A,we)&&M(34067),t.unbindTexture()}else if(se){const _e=C.texture;for(let ge=0,Ce=_e.length;ge<Ce;ge++){const V=_e[ge],Se=n.get(V);t.bindTexture(3553,Se.__webglTexture),U(3553,V,we),D(re.__webglFramebuffer,C,V,36064+ge,3553),S(V,we)&&M(3553)}t.unbindTexture()}else{let _e=3553;Te&&(o?_e=A.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(_e,pe.__webglTexture),U(_e,A,we),D(re.__webglFramebuffer,C,A,36064,_e),S(A,we)&&M(_e),t.unbindTexture()}C.depthBuffer&&de(C)}function oe(C){const A=b(C)||o,re=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let pe=0,be=re.length;pe<be;pe++){const se=re[pe];if(S(se,A)){const Te=C.isWebGLCubeRenderTarget?34067:3553,we=n.get(se).__webglTexture;t.bindTexture(Te,we),M(Te),t.unbindTexture()}}}function q(C){if(C.useRenderbuffer)if(o){const A=C.width,re=C.height;let pe=16384;const be=[36064],se=C.stencilBuffer?33306:36096;C.depthBuffer&&be.push(se),C.ignoreDepthForMultisampleCopy||(C.depthBuffer&&(pe|=256),C.stencilBuffer&&(pe|=1024));const Te=n.get(C);t.bindFramebuffer(36008,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Te.__webglFramebuffer),C.ignoreDepthForMultisampleCopy&&(a.invalidateFramebuffer(36008,[se]),a.invalidateFramebuffer(36009,[se])),a.blitFramebuffer(0,0,A,re,0,0,A,re,pe,9728),a.invalidateFramebuffer(36008,be),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Te.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ne(C){return o&&(C.useRenderbuffer||C.useRenderToTexture)?Math.min(h,C.samples):0}function F(C){const A=r.render.frame;g.get(C)!==A&&(g.set(C,A),C.update())}function E(C,A){const re=C.encoding,pe=C.format,be=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===lo||re!==Wn&&(re===qe?o===!1?e.has("EXT_sRGB")===!0&&pe===vt?(C.format=lo,C.minFilter=ct,C.generateMipmaps=!1):A=yi.sRGBToLinear(A):(pe!==vt||be!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",re)),A}let ue=!1,ye=!1;function Ee(C,A){C&&C.isWebGLRenderTarget&&(ue===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ue=!0),C=C.texture),G(C,A)}function Pe(C,A){C&&C.isWebGLCubeRenderTarget&&(ye===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ye=!0),C=C.texture),Z(C,A)}this.allocateTextureUnit=Y,this.resetTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=fe,this.setTextureCube=Z,this.rebindTextures=he,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=D,this.safeSetTexture2D=Ee,this.safeSetTextureCube=Pe}function l0(a,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===Gn)return 5121;if(s===Jd)return 32819;if(s===Kd)return 32820;if(s===qd)return 5120;if(s===jd)return 5122;if(s===qs)return 5123;if(s===Zd)return 5124;if(s===Vr)return 5125;if(s===Vn)return 5126;if(s===Qi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===$d)return 6406;if(s===vt)return 6408;if(s===tp)return 6409;if(s===np)return 6410;if(s===gi)return 6402;if(s===ji)return 34041;if(s===ip)return 6403;if(s===ep)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===lo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===sp)return 36244;if(s===rp)return 33319;if(s===ap)return 33320;if(s===op)return 36249;if(s===to||s===no||s===io||s===so)if(r===qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===to)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===no)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===so)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===to)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===no)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===io)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===so)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mc||s===gc||s===_c||s===xc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_c)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===yc||s===vc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===yc)return r===qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===vc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bc||s===Sc||s===Mc||s===wc||s===Tc||s===Ac||s===Ec||s===Lc||s===Pc||s===Rc||s===Cc||s===Fc||s===Ic||s===Nc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===bc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ac)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ec)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ic)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nc)return r===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Dc)return r===qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===qi)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Hu extends Rt{constructor(e=[]){super();this.cameras=e}}Hu.prototype.isArrayCamera=!0;class ei extends We{constructor(){super();this.type="Group"}}ei.prototype.isGroup=!0;const c0={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c0))),c&&e.hand){r=!0;for(const _ of e.hand.values()){const x=t.getJointPose(_,n);if(c.joints[_.jointName]===void 0){const m=new ei;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[_.jointName]=m,c.add(m)}const p=c.joints[_.jointName];x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=x.radius),p.visible=x!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class Xo extends ut{constructor(e,t,n,i,s,r,o,l,c,u){if(u=u!==void 0?u:gi,u!==gi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gi&&(n=qs),n===void 0&&u===ji&&(n=qi);super(null,i,s,r,o,l,u,n,c);this.image={width:e,height:t},this.magFilter=o!==void 0?o:lt,this.minFilter=l!==void 0?l:lt,this.flipY=!1,this.generateMipmaps=!1}}Xo.prototype.isDepthTexture=!0;class u0 extends xi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor";const l=e.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,u=null,h=null,f=null,d=!1,g=null;const _=t.getContextAttributes();let x=null,p=null;const m=[],b=new Map,y=new Rt;y.layers.enable(1),y.viewport=new je;const S=new Rt;S.layers.enable(2),S.viewport=new je;const M=[y,S],w=new Hu;w.layers.enable(1),w.layers.enable(2);let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=m[Z];return ie===void 0&&(ie=new Wo,m[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=m[Z];return ie===void 0&&(ie=new Wo,m[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=m[Z];return ie===void 0&&(ie=new Wo,m[Z]=ie),ie.getHandSpace()};function W(Z){const ie=b.get(Z.inputSource);ie&&ie.dispatchEvent({type:Z.type,data:Z.inputSource})}function v(){b.forEach(function(Z,ie){Z.disconnect(ie)}),b.clear(),I=null,B=null,e.setRenderTarget(x),f=null,h=null,u=null,i=null,p=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return r},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",v),i.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),p=new kt(f.framebufferWidth,f.framebufferHeight,{format:vt,type:Gn,encoding:e.outputEncoding})}else{d=_.antialias;let ie=null,z=null,U=null;_.depth&&(U=_.stencil?35056:33190,ie=_.stencil?ji:gi,z=_.stencil?qi:qs);const T={colorFormat:e.outputEncoding===qe?35907:32856,depthFormat:U,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(T),i.updateRenderState({layers:[h]}),d?p=new mo(h.textureWidth,h.textureHeight,{format:vt,type:Gn,depthTexture:new Xo(h.textureWidth,h.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:_.stencil,ignoreDepth:h.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):p=new kt(h.textureWidth,h.textureHeight,{format:vt,type:Gn,depthTexture:new Xo(h.textureWidth,h.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:_.stencil,ignoreDepth:h.ignoreDepthValues,encoding:e.outputEncoding})}p.isXRRenderTarget=!0,this.setFoveation(1),r=await i.requestReferenceSpace(o),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(Z){const ie=i.inputSources;for(let z=0;z<m.length;z++)b.set(ie[z],m[z]);for(let z=0;z<Z.removed.length;z++){const U=Z.removed[z],T=b.get(U);T&&(T.dispatchEvent({type:"disconnected",data:U}),b.delete(U))}for(let z=0;z<Z.added.length;z++){const U=Z.added[z],T=b.get(U);T&&T.dispatchEvent({type:"connected",data:U})}}const O=new N,H=new N;function k(Z,ie,z){O.setFromMatrixPosition(ie.matrixWorld),H.setFromMatrixPosition(z.matrixWorld);const U=O.distanceTo(H),T=ie.projectionMatrix.elements,L=z.projectionMatrix.elements,ee=T[14]/(T[10]-1),D=T[14]/(T[10]+1),K=(T[9]+1)/T[5],ae=(T[9]-1)/T[5],de=(T[8]-1)/T[0],he=(L[8]+1)/L[0],Q=ee*de,oe=ee*he,q=U/(-de+he),ne=q*-de;ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ne),Z.translateZ(q),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const F=ee+q,E=D+q,ue=Q-ne,ye=oe+(U-ne),Ee=K*D/E*F,Pe=ae*D/E*F;Z.projectionMatrix.makePerspective(ue,ye,Ee,Pe,F,E)}function Y(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;w.near=S.near=y.near=Z.near,w.far=S.far=y.far=Z.far,(I!==w.near||B!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,B=w.far);const ie=Z.parent,z=w.cameras;Y(w,ie);for(let T=0;T<z.length;T++)Y(z[T],ie);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),Z.position.copy(w.position),Z.quaternion.copy(w.quaternion),Z.scale.copy(w.scale),Z.matrix.copy(w.matrix),Z.matrixWorld.copy(w.matrixWorld);const U=Z.children;for(let T=0,L=U.length;T<L;T++)U[T].updateMatrixWorld(!0);z.length===2?k(w,y,S):w.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(Z){h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)};let G=null;function X(Z,ie){if(c=ie.getViewerPose(r),g=ie,c!==null){const U=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let T=!1;U.length!==w.cameras.length&&(w.cameras.length=0,T=!0);for(let L=0;L<U.length;L++){const ee=U[L];let D=null;if(f!==null)D=f.getViewport(ee);else{const ae=u.getViewSubImage(h,ee);D=ae.viewport,L===0&&(e.setRenderTargetTextures(p,ae.colorTexture,h.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(p))}const K=M[L];K.matrix.fromArray(ee.transform.matrix),K.projectionMatrix.fromArray(ee.projectionMatrix),K.viewport.set(D.x,D.y,D.width,D.height),L===0&&w.matrix.copy(K.matrix),T===!0&&w.cameras.push(K)}}const z=i.inputSources;for(let U=0;U<m.length;U++){const T=m[U],L=z[U];T.update(L,ie,r)}G&&G(Z,ie),g=null}const fe=new su;fe.setAnimationLoop(X),this.setAnimationLoop=function(Z){G=Z},this.dispose=function(){}}}function h0(a){function e(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function t(p,m,b,y,S){m.isMeshBasicMaterial?n(p,m):m.isMeshLambertMaterial?(n(p,m),l(p,m)):m.isMeshToonMaterial?(n(p,m),u(p,m)):m.isMeshPhongMaterial?(n(p,m),c(p,m)):m.isMeshStandardMaterial?(n(p,m),m.isMeshPhysicalMaterial?f(p,m,S):h(p,m)):m.isMeshMatcapMaterial?(n(p,m),d(p,m)):m.isMeshDepthMaterial?(n(p,m),g(p,m)):m.isMeshDistanceMaterial?(n(p,m),_(p,m)):m.isMeshNormalMaterial?(n(p,m),x(p,m)):m.isLineBasicMaterial?(i(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?r(p,m,b,y):m.isSpriteMaterial?o(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=a.get(m).envMap;b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let S;m.aoMap?S=m.aoMap:m.lightMap&&(S=m.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uv2Transform.value.copy(S.matrix))}function i(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function r(p,m,b,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=y*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,m){m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===pt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===pt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===pt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===pt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===pt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===pt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),a.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){h(p,m),p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===pt&&p.clearcoatNormalScale.value.negate())),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===pt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===pt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function g(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function _(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}function x(p,m){m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===pt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===pt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function f0(){const a=er("canvas");return a.style.display="block",a}function Qe(a={}){const e=a.canvas!==void 0?a.canvas:f0(),t=a.context!==void 0?a.context:null,n=a.alpha!==void 0?a.alpha:!1,i=a.depth!==void 0?a.depth:!0,s=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,l=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",u=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wn,this.physicallyCorrectLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;const _=this;let x=!1,p=0,m=0,b=null,y=-1,S=null;const M=new je,w=new je;let I=null,B=e.width,W=e.height,v=1,R=null,O=null;const H=new je(0,0,B,W),k=new je(0,0,B,W);let Y=!1;const G=new fa;let X=!1,fe=!1,Z=null;const ie=new Me,z=new N,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function T(){return b===null?v:1}let L=t;function ee(P,j){for(let $=0;$<P.length;$++){const J=P[$],ce=e.getContext(J,j);if(ce!==null)return ce}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",V,!1),L===null){const j=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&j.shift(),L=ee(j,P),L===null)throw ee(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let D,K,ae,de,he,Q,oe,q,ne,F,E,ue,ye,Ee,Pe,C,A,re,pe,be,se,Te,we;function _e(){D=new C_(L),K=new T_(L,D,a),D.init(K),Te=new l0(L,D,K),ae=new a0(L,D,K),de=new N_(L),he=new jx,Q=new o0(L,D,ae,he,K,Te,de),oe=new E_(_),q=new R_(_),ne=new jp(L,K),we=new M_(L,D,ne,K),F=new F_(L,ne,de,we),E=new B_(L,F,ne,de),pe=new O_(L,K,Q),C=new A_(he),ue=new qx(_,oe,q,D,K,we,C),ye=new h0(he),Ee=new Jx,Pe=new i0(D,K),re=new S_(_,oe,ae,E,n,o),A=new ku(_,E,K),be=new w_(L,D,de,K),se=new I_(L,D,de,K),de.programs=ue.programs,_.capabilities=K,_.extensions=D,_.properties=he,_.renderLists=Ee,_.shadowMap=A,_.state=ae,_.info=de}_e();const ge=new u0(_,L);this.xr=ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const P=D.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=D.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(P){P!==void 0&&(v=P,this.setSize(B,W,!1))},this.getSize=function(P){return P.set(B,W)},this.setSize=function(P,j,$){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,W=j,e.width=Math.floor(P*v),e.height=Math.floor(j*v),$!==!1&&(e.style.width=P+"px",e.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(B*v,W*v).floor()},this.setDrawingBufferSize=function(P,j,$){B=P,W=j,v=$,e.width=Math.floor(P*$),e.height=Math.floor(j*$),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(H)},this.setViewport=function(P,j,$,J){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,j,$,J),ae.viewport(M.copy(H).multiplyScalar(v).floor())},this.getScissor=function(P){return P.copy(k)},this.setScissor=function(P,j,$,J){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,j,$,J),ae.scissor(w.copy(k).multiplyScalar(v).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(P){ae.setScissorTest(Y=P)},this.setOpaqueSort=function(P){R=P},this.setTransparentSort=function(P){O=P},this.getClearColor=function(P){return P.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(P,j,$){let J=0;(P===void 0||P)&&(J|=16384),(j===void 0||j)&&(J|=256),($===void 0||$)&&(J|=1024),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",V,!1),Ee.dispose(),Pe.dispose(),he.dispose(),oe.dispose(),q.dispose(),E.dispose(),we.dispose(),ue.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Ue),ge.removeEventListener("sessionend",tt),Z&&(Z.dispose(),Z=null),zt.stop()};function Ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const P=de.autoReset,j=A.enabled,$=A.autoUpdate,J=A.needsUpdate,ce=A.type;_e(),de.autoReset=P,A.enabled=j,A.autoUpdate=$,A.needsUpdate=J,A.type=ce}function Se(P){const j=P.target;j.removeEventListener("dispose",Se),ve(j)}function ve(P){Le(P),he.remove(P)}function Le(P){const j=he.get(P).programs;j!==void 0&&(j.forEach(function($){ue.releaseProgram($)}),P.isShaderMaterial&&ue.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,$,J,ce,Re){j===null&&(j=U);const Fe=ce.isMesh&&ce.matrixWorld.determinant()<0,Ne=gd(P,j,$,J,ce);ae.setMaterial(J,Fe);let Ie=$.index;const Ye=$.attributes.position;if(Ie===null){if(Ye===void 0||Ye.count===0)return}else if(Ie.count===0)return;let ze=1;J.wireframe===!0&&(Ie=F.getWireframeAttribute($),ze=2),we.setup(ce,J,Ne,$,Ie);let ke,at=be;Ie!==null&&(ke=ne.get(Ie),at=se,at.setIndex(ke));const pi=Ie!==null?Ie.count:Ye.count,Gi=$.drawRange.start*ze,Ve=$.drawRange.count*ze,cn=Re!==null?Re.start*ze:0,dt=Re!==null?Re.count*ze:1/0,un=Math.max(Gi,cn),zr=Math.min(pi,Gi+Ve,cn+dt)-1,hn=Math.max(0,zr-un+1);if(hn!==0){if(ce.isMesh)J.wireframe===!0?(ae.setLineWidth(J.wireframeLinewidth*T()),at.setMode(1)):at.setMode(4);else if(ce.isLine){let bn=J.linewidth;bn===void 0&&(bn=1),ae.setLineWidth(bn*T()),ce.isLineSegments?at.setMode(1):ce.isLineLoop?at.setMode(2):at.setMode(3)}else ce.isPoints?at.setMode(0):ce.isSprite&&at.setMode(4);if(ce.isInstancedMesh)at.renderInstances(un,hn,ce.count);else if($.isInstancedBufferGeometry){const bn=Math.min($.instanceCount,$._maxInstanceCount);at.renderInstances(un,hn,bn)}else at.render(un,hn)}},this.compile=function(P,j){f=Pe.get(P),f.init(),g.push(f),P.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights(_.physicallyCorrectLights),P.traverse(function($){const J=$.material;if(J)if(Array.isArray(J))for(let ce=0;ce<J.length;ce++){const Re=J[ce];Qa(Re,P,$)}else Qa(J,P,$)}),g.pop(),f=null};let le=null;function Ae(P){le&&le(P)}function Ue(){zt.stop()}function tt(){zt.start()}const zt=new su;zt.setAnimationLoop(Ae),typeof window!="undefined"&&zt.setContext(window),this.setAnimationLoop=function(P){le=P,ge.setAnimationLoop(P),P===null?zt.stop():zt.start()},ge.addEventListener("sessionstart",Ue),ge.addEventListener("sessionend",tt),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;P.autoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(j),j=ge.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,j,b),f=Pe.get(P,g.length),f.init(),g.push(f),ie.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G.setFromProjectionMatrix(ie),fe=this.localClippingEnabled,X=C.init(this.clippingPlanes,fe,j),h=Ee.get(P,d.length),h.init(),d.push(h),rt(P,j,0,_.sortObjects),h.finish(),_.sortObjects===!0&&h.sort(R,O),X===!0&&C.beginShadows();const $=f.state.shadowsArray;if(A.render($,P,j),X===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(h,P),f.setupLights(_.physicallyCorrectLights),j.isArrayCamera){const J=j.cameras;for(let ce=0,Re=J.length;ce<Re;ce++){const Fe=J[ce];ln(h,P,Fe,Fe.viewport)}}else ln(h,P,j);b!==null&&(Q.updateMultisampleRenderTarget(b),Q.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(_,P,j),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1),we.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function rt(P,j,$,J){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||G.intersectsSprite(P)){J&&z.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ie);const Fe=E.update(P),Ne=P.material;Ne.visible&&h.push(P,Fe,Ne,$,z.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==de.render.frame&&(P.skeleton.update(),P.skeleton.frame=de.render.frame),!P.frustumCulled||G.intersectsObject(P))){J&&z.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ie);const Fe=E.update(P),Ne=P.material;if(Array.isArray(Ne)){const Ie=Fe.groups;for(let Ye=0,ze=Ie.length;Ye<ze;Ye++){const ke=Ie[Ye],at=Ne[ke.materialIndex];at&&at.visible&&h.push(P,Fe,at,$,z.z,ke)}}else Ne.visible&&h.push(P,Fe,Ne,$,z.z,null)}}const Re=P.children;for(let Fe=0,Ne=Re.length;Fe<Ne;Fe++)rt(Re[Fe],j,$,J)}function ln(P,j,$,J){const ce=P.opaque,Re=P.transmissive,Fe=P.transparent;f.setupLightsView($),Re.length>0&&vn(ce,j,$),J&&ae.viewport(M.copy(J)),ce.length>0&&Br(ce,j,$),Re.length>0&&Br(Re,j,$),Fe.length>0&&Br(Fe,j,$)}function vn(P,j,$){if(Z===null){const Fe=r===!0&&K.isWebGL2===!0?mo:kt;Z=new Fe(1024,1024,{generateMipmaps:!0,type:Te.convert(Qi)!==null?Qi:Gn,minFilter:Yi,magFilter:lt,wrapS:Ft,wrapT:Ft,useRenderToTexture:D.has("WEBGL_multisampled_render_to_texture")})}const J=_.getRenderTarget();_.setRenderTarget(Z),_.clear();const ce=_.toneMapping;_.toneMapping=Hn,Br(P,j,$),_.toneMapping=ce,Q.updateMultisampleRenderTarget(Z),Q.updateRenderTargetMipmap(Z),_.setRenderTarget(J)}function Br(P,j,$){const J=j.isScene===!0?j.overrideMaterial:null;for(let ce=0,Re=P.length;ce<Re;ce++){const Fe=P[ce],Ne=Fe.object,Ie=Fe.geometry,Ye=J===null?Fe.material:J,ze=Fe.group;Ne.layers.test($.layers)&&md(Ne,j,$,Ie,Ye,ze)}}function md(P,j,$,J,ce,Re){P.onBeforeRender(_,j,$,J,ce,Re),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ce.onBeforeRender(_,j,$,J,P,Re),ce.transparent===!0&&ce.side===mi?(ce.side=pt,ce.needsUpdate=!0,_.renderBufferDirect($,j,J,ce,P,Re),ce.side=Vi,ce.needsUpdate=!0,_.renderBufferDirect($,j,J,ce,P,Re),ce.side=mi):_.renderBufferDirect($,j,J,ce,P,Re),P.onAfterRender(_,j,$,J,ce,Re)}function Qa(P,j,$){j.isScene!==!0&&(j=U);const J=he.get(P),ce=f.state.lights,Re=f.state.shadowsArray,Fe=ce.state.version,Ne=ue.getParameters(P,ce.state,Re,j,$),Ie=ue.getProgramCacheKey(Ne);let Ye=J.programs;J.environment=P.isMeshStandardMaterial?j.environment:null,J.fog=j.fog,J.envMap=(P.isMeshStandardMaterial?q:oe).get(P.envMap||J.environment),Ye===void 0&&(P.addEventListener("dispose",Se),Ye=new Map,J.programs=Ye);let ze=Ye.get(Ie);if(ze!==void 0){if(J.currentProgram===ze&&J.lightsStateVersion===Fe)return nc(P,Ne),ze}else Ne.uniforms=ue.getUniforms(P),P.onBuild($,Ne,_),P.onBeforeCompile(Ne,_),ze=ue.acquireProgram(Ne,Ie),Ye.set(Ie,ze),J.uniforms=Ne.uniforms;const ke=J.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ke.clippingPlanes=C.uniform),nc(P,Ne),J.needsLights=xd(P),J.lightsStateVersion=Fe,J.needsLights&&(ke.ambientLightColor.value=ce.state.ambient,ke.lightProbe.value=ce.state.probe,ke.directionalLights.value=ce.state.directional,ke.directionalLightShadows.value=ce.state.directionalShadow,ke.spotLights.value=ce.state.spot,ke.spotLightShadows.value=ce.state.spotShadow,ke.rectAreaLights.value=ce.state.rectArea,ke.ltc_1.value=ce.state.rectAreaLTC1,ke.ltc_2.value=ce.state.rectAreaLTC2,ke.pointLights.value=ce.state.point,ke.pointLightShadows.value=ce.state.pointShadow,ke.hemisphereLights.value=ce.state.hemi,ke.directionalShadowMap.value=ce.state.directionalShadowMap,ke.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,ke.spotShadowMap.value=ce.state.spotShadowMap,ke.spotShadowMatrix.value=ce.state.spotShadowMatrix,ke.pointShadowMap.value=ce.state.pointShadowMap,ke.pointShadowMatrix.value=ce.state.pointShadowMatrix);const at=ze.getUniforms(),pi=$n.seqWithValue(at.seq,ke);return J.currentProgram=ze,J.uniformsList=pi,ze}function nc(P,j){const $=he.get(P);$.outputEncoding=j.outputEncoding,$.instancing=j.instancing,$.skinning=j.skinning,$.morphTargets=j.morphTargets,$.morphNormals=j.morphNormals,$.morphTargetsCount=j.morphTargetsCount,$.numClippingPlanes=j.numClippingPlanes,$.numIntersection=j.numClipIntersection,$.vertexAlphas=j.vertexAlphas,$.vertexTangents=j.vertexTangents,$.toneMapping=j.toneMapping}function gd(P,j,$,J,ce){j.isScene!==!0&&(j=U),Q.resetTextureUnits();const Re=j.fog,Fe=J.isMeshStandardMaterial?j.environment:null,Ne=b===null?_.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Wn,Ie=(J.isMeshStandardMaterial?q:oe).get(J.envMap||Fe),Ye=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!J.normalMap&&!!$.attributes.tangent,ke=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,pi=$.morphAttributes.position?$.morphAttributes.position.length:0,Gi=J.toneMapped?_.toneMapping:Hn,Ve=he.get(J),cn=f.state.lights;if(X===!0&&(fe===!0||P!==S)){const nn=P===S&&J.id===y;C.setState(J,P,nn)}let dt=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==cn.state.version||Ve.outputEncoding!==Ne||ce.isInstancedMesh&&Ve.instancing===!1||!ce.isInstancedMesh&&Ve.instancing===!0||ce.isSkinnedMesh&&Ve.skinning===!1||!ce.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ie||J.fog&&Ve.fog!==Re||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==C.numPlanes||Ve.numIntersection!==C.numIntersection)||Ve.vertexAlphas!==Ye||Ve.vertexTangents!==ze||Ve.morphTargets!==ke||Ve.morphNormals!==at||Ve.toneMapping!==Gi||K.isWebGL2===!0&&Ve.morphTargetsCount!==pi)&&(dt=!0):(dt=!0,Ve.__version=J.version);let un=Ve.currentProgram;dt===!0&&(un=Qa(J,j,ce));let zr=!1,hn=!1,bn=!1;const wt=un.getUniforms(),Vs=Ve.uniforms;if(ae.useProgram(un.program)&&(zr=!0,hn=!0,bn=!0),J.id!==y&&(y=J.id,hn=!0),zr||S!==P){if(wt.setValue(L,"projectionMatrix",P.projectionMatrix),K.logarithmicDepthBuffer&&wt.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),S!==P&&(S=P,hn=!0,bn=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){const nn=wt.map.cameraPosition;nn!==void 0&&nn.setValue(L,z.setFromMatrixPosition(P.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&wt.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||ce.isSkinnedMesh)&&wt.setValue(L,"viewMatrix",P.matrixWorldInverse)}if(ce.isSkinnedMesh){wt.setOptional(L,ce,"bindMatrix"),wt.setOptional(L,ce,"bindMatrixInverse");const nn=ce.skeleton;nn&&(K.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),wt.setValue(L,"boneTexture",nn.boneTexture,Q),wt.setValue(L,"boneTextureSize",nn.boneTextureSize)):wt.setOptional(L,nn,"boneMatrices"))}return!!$&&($.morphAttributes.position!==void 0||$.morphAttributes.normal!==void 0)&&pe.update(ce,$,J,un),(hn||Ve.receiveShadow!==ce.receiveShadow)&&(Ve.receiveShadow=ce.receiveShadow,wt.setValue(L,"receiveShadow",ce.receiveShadow)),hn&&(wt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&_d(Vs,bn),Re&&J.fog&&ye.refreshFogUniforms(Vs,Re),ye.refreshMaterialUniforms(Vs,J,v,W,Z),$n.upload(L,Ve.uniformsList,Vs,Q)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&($n.upload(L,Ve.uniformsList,Vs,Q),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&wt.setValue(L,"center",ce.center),wt.setValue(L,"modelViewMatrix",ce.modelViewMatrix),wt.setValue(L,"normalMatrix",ce.normalMatrix),wt.setValue(L,"modelMatrix",ce.matrixWorld),un}function _d(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function xd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,j,$){he.get(P.texture).__webglTexture=j,he.get(P.depthTexture).__webglTexture=$;const J=he.get(P);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||P.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),P.useRenderToTexture=!1,P.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(P,j){const $=he.get(P);$.__webglFramebuffer=j,$.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,$=0){b=P,p=j,m=$;let J=!0;if(P){const Ie=he.get(P);Ie.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),J=!1):Ie.__webglFramebuffer===void 0?Q.setupRenderTarget(P):Ie.__hasExternalTextures&&Q.rebindTextures(P,he.get(P.texture).__webglTexture,he.get(P.depthTexture).__webglTexture)}let ce=null,Re=!1,Fe=!1;if(P){const Ie=P.texture;(Ie.isDataTexture3D||Ie.isDataTexture2DArray)&&(Fe=!0);const Ye=he.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ce=Ye[j],Re=!0):P.useRenderbuffer?ce=he.get(P).__webglMultisampledFramebuffer:ce=Ye,M.copy(P.viewport),w.copy(P.scissor),I=P.scissorTest}else M.copy(H).multiplyScalar(v).floor(),w.copy(k).multiplyScalar(v).floor(),I=Y;if(ae.bindFramebuffer(36160,ce)&&K.drawBuffers&&J&&ae.drawBuffers(P,ce),ae.viewport(M),ae.scissor(w),ae.setScissorTest(I),Re){const Ie=he.get(P.texture);L.framebufferTexture2D(36160,36064,34069+j,Ie.__webglTexture,$)}else if(Fe){const Ie=he.get(P.texture),Ye=j||0;L.framebufferTextureLayer(36160,36064,Ie.__webglTexture,$||0,Ye)}y=-1},this.readRenderTargetPixels=function(P,j,$,J,ce,Re,Fe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=he.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ne=Ne[Fe]),Ne){ae.bindFramebuffer(36160,Ne);try{const Ie=P.texture,Ye=Ie.format,ze=Ie.type;if(Ye!==vt&&Te.convert(Ye)!==L.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=ze===Qi&&(D.has("EXT_color_buffer_half_float")||K.isWebGL2&&D.has("EXT_color_buffer_float"));if(ze!==Gn&&Te.convert(ze)!==L.getParameter(35738)&&!(ze===Vn&&(K.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L.checkFramebufferStatus(36160)===36053?j>=0&&j<=P.width-J&&$>=0&&$<=P.height-ce&&L.readPixels(j,$,J,ce,Te.convert(Ye),Te.convert(ze),Re):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Ie=b!==null?he.get(b).__webglFramebuffer:null;ae.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(P,j,$=0){if(j.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const J=Math.pow(2,-$),ce=Math.floor(j.image.width*J),Re=Math.floor(j.image.height*J);Q.setTexture2D(j,0),L.copyTexSubImage2D(3553,$,0,0,P.x,P.y,ce,Re),ae.unbindTexture()},this.copyTextureToTexture=function(P,j,$,J=0){const ce=j.image.width,Re=j.image.height,Fe=Te.convert($.format),Ne=Te.convert($.type);Q.setTexture2D($,0),L.pixelStorei(37440,$.flipY),L.pixelStorei(37441,$.premultiplyAlpha),L.pixelStorei(3317,$.unpackAlignment),j.isDataTexture?L.texSubImage2D(3553,J,P.x,P.y,ce,Re,Fe,Ne,j.image.data):j.isCompressedTexture?L.compressedTexSubImage2D(3553,J,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,Fe,j.mipmaps[0].data):L.texSubImage2D(3553,J,P.x,P.y,Fe,Ne,j.image),J===0&&$.generateMipmaps&&L.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(P,j,$,J,ce=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=P.max.x-P.min.x+1,Fe=P.max.y-P.min.y+1,Ne=P.max.z-P.min.z+1,Ie=Te.convert(J.format),Ye=Te.convert(J.type);let ze;if(J.isDataTexture3D)Q.setTexture3D(J,0),ze=32879;else if(J.isDataTexture2DArray)Q.setTexture2DArray(J,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(37440,J.flipY),L.pixelStorei(37441,J.premultiplyAlpha),L.pixelStorei(3317,J.unpackAlignment);const ke=L.getParameter(3314),at=L.getParameter(32878),pi=L.getParameter(3316),Gi=L.getParameter(3315),Ve=L.getParameter(32877),cn=$.isCompressedTexture?$.mipmaps[0]:$.image;L.pixelStorei(3314,cn.width),L.pixelStorei(32878,cn.height),L.pixelStorei(3316,P.min.x),L.pixelStorei(3315,P.min.y),L.pixelStorei(32877,P.min.z),$.isDataTexture||$.isDataTexture3D?L.texSubImage3D(ze,ce,j.x,j.y,j.z,Re,Fe,Ne,Ie,Ye,cn.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(ze,ce,j.x,j.y,j.z,Re,Fe,Ne,Ie,cn.data)):L.texSubImage3D(ze,ce,j.x,j.y,j.z,Re,Fe,Ne,Ie,Ye,cn),L.pixelStorei(3314,ke),L.pixelStorei(32878,at),L.pixelStorei(3316,pi),L.pixelStorei(3315,Gi),L.pixelStorei(32877,Ve),ce===0&&J.generateMipmaps&&L.generateMipmap(ze),ae.unbindTexture()},this.initTexture=function(P){Q.setTexture2D(P,0),ae.unbindTexture()},this.resetState=function(){p=0,m=0,b=null,ae.reset(),we.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Qe.prototype.isWebGLRenderer=!0;class d0 extends Qe{}d0.prototype.isWebGL1Renderer=!0;class Yo{constructor(e,t=25e-5){this.name="",this.color=new xe(e),this.density=t}clone(){return new Yo(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}Yo.prototype.isFogExp2=!0;class Gu extends We{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Gu.prototype.isScene=!0;class vs{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}vs.prototype.isInterleavedBuffer=!0;const ot=new N;class bs{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ot.x=this.getX(t),ot.y=this.getY(t),ot.z=this.getZ(t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.x=this.getX(t),ot.y=this.getY(t),ot.z=this.getZ(t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.x=this.getX(t),ot.y=this.getY(t),ot.z=this.getZ(t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}bs.prototype.isInterleavedBufferAttribute=!0;class Vu extends mt{constructor(e){super();this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Vu.prototype.isSpriteMaterial=!0;let Ss;const or=new N,Ms=new N,ws=new N,Ts=new te,lr=new te,Wu=new Me,_a=new N,cr=new N,xa=new N,Xu=new te,Qo=new te,Yu=new te;class p0 extends We{constructor(e){super();if(this.type="Sprite",Ss===void 0){Ss=new Ge;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vs(t,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new bs(n,3,0,!1)),Ss.setAttribute("uv",new bs(n,2,3,!1))}this.geometry=Ss,this.material=e!==void 0?e:new Vu,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),Wu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-ws.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;ya(_a.set(-.5,-.5,0),ws,r,Ms,i,s),ya(cr.set(.5,-.5,0),ws,r,Ms,i,s),ya(xa.set(.5,.5,0),ws,r,Ms,i,s),Xu.set(0,0),Qo.set(1,0),Yu.set(1,1);let o=e.ray.intersectTriangle(_a,cr,xa,!1,or);if(o===null&&(ya(cr.set(-.5,.5,0),ws,r,Ms,i,s),Qo.set(0,1),o=e.ray.intersectTriangle(_a,xa,cr,!1,or),o===null))return;const l=e.ray.origin.distanceTo(or);l<e.near||l>e.far||t.push({distance:l,point:or.clone(),uv:ht.getUV(or,_a,cr,xa,Xu,Qo,Yu,new te),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}p0.prototype.isSprite=!0;function ya(a,e,t,n,i,s){Ts.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(lr.x=s*Ts.x-i*Ts.y,lr.y=i*Ts.x+s*Ts.y):lr.copy(Ts),a.copy(e),a.x+=lr.x,a.y+=lr.y,a.applyMatrix4(Wu)}const Qu=new N,qu=new je,ju=new je,m0=new N,Zu=new Me;class qo extends St{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Me,this.bindMatrixInverse=new Me}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;qu.fromBufferAttribute(i.attributes.skinIndex,e),ju.fromBufferAttribute(i.attributes.skinWeight,e),Qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=ju.getComponent(s);if(r!==0){const o=qu.getComponent(s);Zu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(m0.copy(Qu).applyMatrix4(Zu),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}qo.prototype.isSkinnedMesh=!0;class jo extends We{constructor(){super();this.type="Bone"}}jo.prototype.isBone=!0;class Ju extends ut{constructor(e=null,t=1,n=1,i,s,r,o,l,c=lt,u=lt,h,f){super(null,r,o,l,c,u,i,s,h,f);this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ju.prototype.isDataTexture=!0;const Ku=new Me,g0=new Me;class Zo{constructor(e=[],t=[]){this.uuid=Yt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Me;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:g0;Ku.multiplyMatrices(o,t[s]),Ku.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Zo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=zc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ju(t,e,e,vt,Vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new jo),this.bones.push(r),this.boneInverses.push(new Me().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Jo extends $e{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Jo.prototype.isInstancedBufferAttribute=!0;const $u=new Me,eh=new Me,va=[],ur=new St;class _0 extends St{constructor(e,t,n){super(e,t);this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,$u),eh.multiplyMatrices(n,$u),ur.matrixWorld=eh,ur.raycast(e,va);for(let r=0,o=va.length;r<o;r++){const l=va[r];l.instanceId=s,l.object=this,t.push(l)}va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}_0.prototype.isInstancedMesh=!0;class Ai extends mt{constructor(e){super();this.type="LineBasicMaterial",this.color=new xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Ai.prototype.isLineBasicMaterial=!0;const th=new N,nh=new N,ih=new Me,Ko=new wi,ba=new Mi;class Sa extends We{constructor(e=new Ge,t=new Ai){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)th.fromBufferAttribute(t,i-1),nh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=th.distanceTo(nh);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=s,e.ray.intersectsSphere(ba)===!1)return;ih.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(ih);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,u=new N,h=new N,f=new N,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,x=n.attributes.position;if(g!==null){const p=Math.max(0,r.start),m=Math.min(g.count,r.start+r.count);for(let b=p,y=m-1;b<y;b+=d){const S=g.getX(b),M=g.getX(b+1);if(c.fromBufferAttribute(x,S),u.fromBufferAttribute(x,M),Ko.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),m=Math.min(x.count,r.start+r.count);for(let b=p,y=m-1;b<y;b+=d){if(c.fromBufferAttribute(x,b),u.fromBufferAttribute(x,b+1),Ko.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Sa.prototype.isLine=!0;const sh=new N,rh=new N;class hr extends Sa{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)sh.fromBufferAttribute(t,i),rh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sh.distanceTo(rh);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}hr.prototype.isLineSegments=!0;class ah extends Sa{constructor(e,t){super(e,t);this.type="LineLoop"}}ah.prototype.isLineLoop=!0;class $o extends mt{constructor(e){super();this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}$o.prototype.isPointsMaterial=!0;const oh=new Me,el=new wi,Ma=new Mi,wa=new N;class lh extends We{constructor(e=new Ge,t=new $o){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=s,e.ray.intersectsSphere(Ma)===!1)return;oh.copy(i).invert(),el.copy(e.ray).applyMatrix4(oh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=f,_=d;g<_;g++){const x=c.getX(g);wa.fromBufferAttribute(h,x),ch(wa,x,l,i,e,t,this)}}else{const f=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let g=f,_=d;g<_;g++)wa.fromBufferAttribute(h,g),ch(wa,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}lh.prototype.isPoints=!0;function ch(a,e,t,n,i,s,r){const o=el.distanceSqToPoint(a);if(o<t){const l=new N;el.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class x0 extends ut{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c);this.minFilter=r!==void 0?r:ct,this.magFilter=s!==void 0?s:ct,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}x0.prototype.isVideoTexture=!0;class y0 extends ut{constructor(e,t,n){super({width:e,height:t});this.format=n,this.magFilter=lt,this.minFilter=lt,this.generateMipmaps=!1,this.needsUpdate=!0}}y0.prototype.isFramebufferTexture=!0;class v0 extends ut{constructor(e,t,n,i,s,r,o,l,c,u,h,f){super(null,r,o,l,c,u,i,s,h,f);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}v0.prototype.isCompressedTexture=!0;class b0 extends ut{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c);this.needsUpdate=!0}}b0.prototype.isCanvasTexture=!0;new N;new N;new N;new ht;class jt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(r-u)/f;return(i+d)/(s-1)}getTangent(e,t){const n=1e-4;let i=e-n,s=e+n;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=t||(r.isVector2?new te:new N);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,i=[],s=[],r=[],o=new N,l=new Me;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new N)}s[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(It(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}r[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(It(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ta extends jt{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new te,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Ta.prototype.isEllipseCurve=!0;class uh extends Ta{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r);this.type="ArcCurve"}}uh.prototype.isArcCurve=!0;function tl(){let a=0,e=0,t=0,n=0;function i(s,r,o,l){a=s,e=o,t=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,u,h){let f=(r-s)/c-(o-s)/(c+u)+(o-r)/u,d=(o-r)/u-(l-r)/(u+h)+(l-o)/h;f*=u,d*=u,i(r,o,f,d)},calc:function(s){const r=s*s,o=r*s;return a+e*s+t*r+n*o}}}const Aa=new N,nl=new tl,il=new tl,sl=new tl;class hh extends jt{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Aa.subVectors(i[0],i[1]).add(i[0]),c=Aa);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Aa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Aa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),x<1e-4&&(x=_),nl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,x),il.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,x),sl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,x)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),il.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),sl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(nl.calc(l),il.calc(l),sl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}hh.prototype.isCatmullRomCurve3=!0;function fh(a,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*o+s*a+t}function S0(a,e){const t=1-a;return t*t*e}function M0(a,e){return 2*(1-a)*a*e}function w0(a,e){return a*a*e}function fr(a,e,t,n){return S0(a,e)+M0(a,t)+w0(a,n)}function T0(a,e){const t=1-a;return t*t*t*e}function A0(a,e){const t=1-a;return 3*t*t*a*e}function E0(a,e){return 3*(1-a)*a*a*e}function L0(a,e){return a*a*a*e}function dr(a,e,t,n,i){return T0(a,e)+A0(a,t)+E0(a,n)+L0(a,i)}class rl extends jt{constructor(e=new te,t=new te,n=new te,i=new te){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(dr(e,i.x,s.x,r.x,o.x),dr(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}rl.prototype.isCubicBezierCurve=!0;class dh extends jt{constructor(e=new N,t=new N,n=new N,i=new N){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(dr(e,i.x,s.x,r.x,o.x),dr(e,i.y,s.y,r.y,o.y),dr(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}dh.prototype.isCubicBezierCurve3=!0;class Ea extends jt{constructor(e=new te,t=new te){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new te;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ea.prototype.isLineCurve=!0;class P0 extends jt{constructor(e=new N,t=new N){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class al extends jt{constructor(e=new te,t=new te,n=new te){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(fr(e,i.x,s.x,r.x),fr(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}al.prototype.isQuadraticBezierCurve=!0;class ph extends jt{constructor(e=new N,t=new N,n=new N){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(fr(e,i.x,s.x,r.x),fr(e,i.y,s.y,r.y),fr(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ph.prototype.isQuadraticBezierCurve3=!0;class ol extends jt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],u=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(fh(o,l.x,c.x,u.x,h.x),fh(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new te().fromArray(i))}return this}}ol.prototype.isSplineCurve=!0;var mh=Object.freeze({__proto__:null,ArcCurve:uh,CatmullRomCurve3:hh,CubicBezierCurve:rl,CubicBezierCurve3:dh,EllipseCurve:Ta,LineCurve:Ea,LineCurve3:P0,QuadraticBezierCurve:al,QuadraticBezierCurve3:ph,SplineCurve:ol});class R0 extends jt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ea(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r&&r.isEllipseCurve?e*2:r&&(r.isLineCurve||r.isLineCurve3)?1:r&&r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new mh[i.type]().fromJSON(i))}return this}}class Ei extends R0{constructor(e){super();this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ea(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new al(this.currentPoint.clone(),new te(e,t),new te(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const o=new rl(this.currentPoint.clone(),new te(e,t),new te(n,i),new te(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ol(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,r,o,l),this}absellipse(e,t,n,i,s,r,o,l){const c=new Ta(e,t,n,i,s,r,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Rn extends Ei{constructor(e){super(e);this.uuid=Yt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ei().fromJSON(i))}return this}}const C0={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let s=gh(a,0,i,t,!0);const r=[];if(!s||s.next===s.prev)return r;let o,l,c,u,h,f,d;if(n&&(s=U0(a,e,s,t)),a.length>80*t){o=c=a[0],l=u=a[1];for(let g=t;g<i;g+=t)h=a[g],f=a[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?1/d:0}return pr(s,r,t,o,l,d),r}};function gh(a,e,t,n,i){let s,r;if(i===Q0(a,e,t,n)>0)for(s=e;s<t;s+=n)r=yh(s,a[s],a[s+1],r);else for(s=t-n;s>=e;s-=n)r=yh(s,a[s],a[s+1],r);return r&&La(r,r.next)&&(gr(r),r=r.next),r}function ti(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(La(t,t.next)||it(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(a,e,t,n,i,s,r){if(!a)return;!r&&s&&H0(a,n,i,s);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,s?I0(a,n,i,s):F0(a)){e.push(l.i/t),e.push(a.i/t),e.push(c.i/t),gr(a),a=c.next,o=c.next;continue}if(a=c,a===o){r?r===1?(a=N0(ti(a),e,t),pr(a,e,t,n,i,s,2)):r===2&&D0(a,e,t,n,i,s):pr(ti(a),e,t,n,i,s,1);break}}}function F0(a){const e=a.prev,t=a,n=a.next;if(it(e,t,n)>=0)return!1;let i=a.next.next;for(;i!==a.prev;){if(As(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&it(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function I0(a,e,t,n){const i=a.prev,s=a,r=a.next;if(it(i,s,r)>=0)return!1;const o=i.x<s.x?i.x<r.x?i.x:r.x:s.x<r.x?s.x:r.x,l=i.y<s.y?i.y<r.y?i.y:r.y:s.y<r.y?s.y:r.y,c=i.x>s.x?i.x>r.x?i.x:r.x:s.x>r.x?s.x:r.x,u=i.y>s.y?i.y>r.y?i.y:r.y:s.y>r.y?s.y:r.y,h=ll(o,l,e,t,n),f=ll(c,u,e,t,n);let d=a.prevZ,g=a.nextZ;for(;d&&d.z>=h&&g&&g.z<=f;){if(d!==a.prev&&d!==a.next&&As(i.x,i.y,s.x,s.y,r.x,r.y,d.x,d.y)&&it(d.prev,d,d.next)>=0||(d=d.prevZ,g!==a.prev&&g!==a.next&&As(i.x,i.y,s.x,s.y,r.x,r.y,g.x,g.y)&&it(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=h;){if(d!==a.prev&&d!==a.next&&As(i.x,i.y,s.x,s.y,r.x,r.y,d.x,d.y)&&it(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==a.prev&&g!==a.next&&As(i.x,i.y,s.x,s.y,r.x,r.y,g.x,g.y)&&it(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function N0(a,e,t){let n=a;do{const i=n.prev,s=n.next.next;!La(i,s)&&_h(i,n,n.next,s)&&mr(i,s)&&mr(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),gr(n),gr(n.next),n=a=s),n=n.next}while(n!==a);return ti(n)}function D0(a,e,t,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&W0(r,o)){let l=xh(r,o);r=ti(r,r.next),l=ti(l,l.next),pr(r,e,t,n,i,s),pr(l,e,t,n,i,s);return}o=o.next}r=r.next}while(r!==a)}function U0(a,e,t,n){const i=[];let s,r,o,l,c;for(s=0,r=e.length;s<r;s++)o=e[s]*n,l=s<r-1?e[s+1]*n:a.length,c=gh(a,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(V0(c));for(i.sort(O0),s=0;s<i.length;s++)B0(i[s],t),t=ti(t,t.next);return t}function O0(a,e){return a.x-e.x}function B0(a,e){if(e=z0(a,e),e){const t=xh(e,a);ti(e,e.next),ti(t,t.next)}}function z0(a,e){let t=e;const n=a.x,i=a.y;let s=-1/0,r;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(i===t.y)return t;if(i===t.next.y)return t.next}r=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!r)return null;if(n===s)return r;const o=r,l=r.x,c=r.y;let u=1/0,h;t=r;do n>=t.x&&t.x>=l&&n!==t.x&&As(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),mr(t,a)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&k0(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function k0(a,e){return it(a.prev,a,e.prev)<0&&it(e.next,a,a.next)<0}function H0(a,e,t,n){let i=a;do i.z===null&&(i.z=ll(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,G0(i)}function G0(a){let e,t,n,i,s,r,o,l,c=1;do{for(t=a,a=null,s=null,r=0;t;){for(r++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(r>1);return a}function ll(a,e,t,n,i){return a=32767*(a-t)*i,e=32767*(e-n)*i,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function V0(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function As(a,e,t,n,i,s,r,o){return(i-r)*(e-o)-(a-r)*(s-o)>=0&&(a-r)*(n-o)-(t-r)*(e-o)>=0&&(t-r)*(s-o)-(i-r)*(n-o)>=0}function W0(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!X0(a,e)&&(mr(a,e)&&mr(e,a)&&Y0(a,e)&&(it(a.prev,a,e.prev)||it(a,e.prev,e))||La(a,e)&&it(a.prev,a,a.next)>0&&it(e.prev,e,e.next)>0)}function it(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function La(a,e){return a.x===e.x&&a.y===e.y}function _h(a,e,t,n){const i=Ra(it(a,e,t)),s=Ra(it(a,e,n)),r=Ra(it(t,n,a)),o=Ra(it(t,n,e));return!!(i!==s&&r!==o||i===0&&Pa(a,t,e)||s===0&&Pa(a,n,e)||r===0&&Pa(t,a,n)||o===0&&Pa(t,e,n))}function Pa(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function Ra(a){return a>0?1:a<0?-1:0}function X0(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&_h(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function mr(a,e){return it(a.prev,a,a.next)<0?it(a,e,a.next)>=0&&it(a,a.prev,e)>=0:it(a,e,a.prev)<0||it(a,a.next,e)<0}function Y0(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function xh(a,e){const t=new cl(a.i,a.x,a.y),n=new cl(e.i,e.x,e.y),i=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function yh(a,e,t,n){const i=new cl(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function gr(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function cl(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q0(a,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}class pn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return pn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];vh(e),bh(n,e);let r=e.length;t.forEach(vh);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,bh(n,t[l]);const o=C0.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function vh(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function bh(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Es extends Ge{constructor(e=new Rn([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r(c)}this.setAttribute("position",new He(i,3)),this.setAttribute("uv",new He(s,2)),this.computeVertexNormals();function r(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:q0;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let b,y=!1,S,M,w,I;p&&(b=p.getSpacedPoints(u),y=!0,f=!1,S=p.computeFrenetFrames(u,!1),M=new N,w=new N,I=new N),f||(x=0,d=0,g=0,_=0);const B=o.extractPoints(c);let W=B.shape;const v=B.holes;if(!pn.isClockWise(W)){W=W.reverse();for(let Q=0,oe=v.length;Q<oe;Q++){const q=v[Q];pn.isClockWise(q)&&(v[Q]=q.reverse())}}const O=pn.triangulateShape(W,v),H=W;for(let Q=0,oe=v.length;Q<oe;Q++){const q=v[Q];W=W.concat(q)}function k(Q,oe,q){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().multiplyScalar(q).add(Q)}const Y=W.length,G=O.length;function X(Q,oe,q){let ne,F,E;const ue=Q.x-oe.x,ye=Q.y-oe.y,Ee=q.x-Q.x,Pe=q.y-Q.y,C=ue*ue+ye*ye,A=ue*Pe-ye*Ee;if(Math.abs(A)>Number.EPSILON){const re=Math.sqrt(C),pe=Math.sqrt(Ee*Ee+Pe*Pe),be=oe.x-ye/re,se=oe.y+ue/re,Te=q.x-Pe/pe,we=q.y+Ee/pe,_e=((Te-be)*Pe-(we-se)*Ee)/(ue*Pe-ye*Ee);ne=be+ue*_e-Q.x,F=se+ye*_e-Q.y;const ge=ne*ne+F*F;if(ge<=2)return new te(ne,F);E=Math.sqrt(ge/2)}else{let re=!1;ue>Number.EPSILON?Ee>Number.EPSILON&&(re=!0):ue<-Number.EPSILON?Ee<-Number.EPSILON&&(re=!0):Math.sign(ye)===Math.sign(Pe)&&(re=!0),re?(ne=-ye,F=ue,E=Math.sqrt(C)):(ne=ue,F=ye,E=Math.sqrt(C/2))}return new te(ne/E,F/E)}const fe=[];for(let Q=0,oe=H.length,q=oe-1,ne=Q+1;Q<oe;Q++,q++,ne++)q===oe&&(q=0),ne===oe&&(ne=0),fe[Q]=X(H[Q],H[q],H[ne]);const Z=[];let ie,z=fe.concat();for(let Q=0,oe=v.length;Q<oe;Q++){const q=v[Q];ie=[];for(let ne=0,F=q.length,E=F-1,ue=ne+1;ne<F;ne++,E++,ue++)E===F&&(E=0),ue===F&&(ue=0),ie[ne]=X(q[ne],q[E],q[ue]);Z.push(ie),z=z.concat(ie)}for(let Q=0;Q<x;Q++){const oe=Q/x,q=d*Math.cos(oe*Math.PI/2),ne=g*Math.sin(oe*Math.PI/2)+_;for(let F=0,E=H.length;F<E;F++){const ue=k(H[F],fe[F],ne);D(ue.x,ue.y,-q)}for(let F=0,E=v.length;F<E;F++){const ue=v[F];ie=Z[F];for(let ye=0,Ee=ue.length;ye<Ee;ye++){const Pe=k(ue[ye],ie[ye],ne);D(Pe.x,Pe.y,-q)}}}const U=g+_;for(let Q=0;Q<Y;Q++){const oe=f?k(W[Q],z[Q],U):W[Q];y?(w.copy(S.normals[0]).multiplyScalar(oe.x),M.copy(S.binormals[0]).multiplyScalar(oe.y),I.copy(b[0]).add(w).add(M),D(I.x,I.y,I.z)):D(oe.x,oe.y,0)}for(let Q=1;Q<=u;Q++)for(let oe=0;oe<Y;oe++){const q=f?k(W[oe],z[oe],U):W[oe];y?(w.copy(S.normals[Q]).multiplyScalar(q.x),M.copy(S.binormals[Q]).multiplyScalar(q.y),I.copy(b[Q]).add(w).add(M),D(I.x,I.y,I.z)):D(q.x,q.y,h/u*Q)}for(let Q=x-1;Q>=0;Q--){const oe=Q/x,q=d*Math.cos(oe*Math.PI/2),ne=g*Math.sin(oe*Math.PI/2)+_;for(let F=0,E=H.length;F<E;F++){const ue=k(H[F],fe[F],ne);D(ue.x,ue.y,h+q)}for(let F=0,E=v.length;F<E;F++){const ue=v[F];ie=Z[F];for(let ye=0,Ee=ue.length;ye<Ee;ye++){const Pe=k(ue[ye],ie[ye],ne);y?D(Pe.x,Pe.y+b[u-1].y,b[u-1].x+q):D(Pe.x,Pe.y,h+q)}}}T(),L();function T(){const Q=i.length/3;if(f){let oe=0,q=Y*oe;for(let ne=0;ne<G;ne++){const F=O[ne];K(F[2]+q,F[1]+q,F[0]+q)}oe=u+x*2,q=Y*oe;for(let ne=0;ne<G;ne++){const F=O[ne];K(F[0]+q,F[1]+q,F[2]+q)}}else{for(let oe=0;oe<G;oe++){const q=O[oe];K(q[2],q[1],q[0])}for(let oe=0;oe<G;oe++){const q=O[oe];K(q[0]+Y*u,q[1]+Y*u,q[2]+Y*u)}}n.addGroup(Q,i.length/3-Q,0)}function L(){const Q=i.length/3;let oe=0;ee(H,oe),oe+=H.length;for(let q=0,ne=v.length;q<ne;q++){const F=v[q];ee(F,oe),oe+=F.length}n.addGroup(Q,i.length/3-Q,1)}function ee(Q,oe){let q=Q.length;for(;--q>=0;){const ne=q;let F=q-1;F<0&&(F=Q.length-1);for(let E=0,ue=u+x*2;E<ue;E++){const ye=Y*E,Ee=Y*(E+1),Pe=oe+ne+ye,C=oe+F+ye,A=oe+F+Ee,re=oe+ne+Ee;ae(Pe,C,A,re)}}}function D(Q,oe,q){l.push(Q),l.push(oe),l.push(q)}function K(Q,oe,q){de(Q),de(oe),de(q);const ne=i.length/3,F=m.generateTopUV(n,i,ne-3,ne-2,ne-1);he(F[0]),he(F[1]),he(F[2])}function ae(Q,oe,q,ne){de(Q),de(oe),de(ne),de(oe),de(q),de(ne);const F=i.length/3,E=m.generateSideWallUV(n,i,F-6,F-3,F-2,F-1);he(E[0]),he(E[1]),he(E[3]),he(E[1]),he(E[2]),he(E[3])}function de(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function he(Q){s.push(Q.x),s.push(Q.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return j0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new mh[i.type]().fromJSON(i)),new Es(n,e.options)}}const q0={generateTopUV:function(a,e,t,n,i){const s=e[t*3],r=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new te(s,r),new te(o,l),new te(c,u)]},generateSideWallUV:function(a,e,t,n,i,s){const r=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],_=e[s*3],x=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new te(r,1-l),new te(c,1-h),new te(f,1-g),new te(_,1-p)]:[new te(o,1-l),new te(u,1-h),new te(d,1-g),new te(x,1-p)]}};function j0(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const s=a[n];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ul extends Ge{constructor(e=new Rn([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],r=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new He(i,3)),this.setAttribute("normal",new He(s,3)),this.setAttribute("uv",new He(r,2));function c(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;pn.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,p=g.length;x<p;x++){const m=g[x];pn.isClockWise(m)===!0&&(g[x]=m.reverse())}const _=pn.triangulateShape(d,g);for(let x=0,p=g.length;x<p;x++){const m=g[x];d=d.concat(m)}for(let x=0,p=d.length;x<p;x++){const m=d[x];i.push(m.x,m.y,0),s.push(0,0,1),r.push(m.x,m.y)}for(let x=0,p=_.length;x<p;x++){const m=_[x],b=m[0]+h,y=m[1]+h,S=m[2]+h;n.push(b,y,S),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Z0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const r=t[e.shapes[i]];n.push(r)}return new ul(n,e.curveSegments)}}function Z0(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,n=a.length;t<n;t++){const i=a[t];e.shapes.push(i.uuid)}else e.shapes.push(a.uuid);return e}class hl extends Ge{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const u=[],h=new N,f=new N,d=[],g=[],_=[],x=[];for(let p=0;p<=n;p++){const m=[],b=p/n;let y=0;p==0&&r==0?y=.5/t:p==n&&l==Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const M=S/t;h.x=-e*Math.cos(i+M*s)*Math.sin(r+b*o),h.y=e*Math.cos(r+b*o),h.z=e*Math.sin(i+M*s)*Math.sin(r+b*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),x.push(M+y,1-b),m.push(c++)}u.push(m)}for(let p=0;p<n;p++)for(let m=0;m<t;m++){const b=u[p][m+1],y=u[p][m],S=u[p+1][m],M=u[p+1][m+1];(p!==0||r>0)&&d.push(b,y,M),(p!==n-1||l<Math.PI)&&d.push(y,S,M)}this.setIndex(d),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(_,3)),this.setAttribute("uv",new He(x,2))}static fromJSON(e){return new hl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class J0 extends mt{constructor(e){super();this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}J0.prototype.isShadowMaterial=!0;class _r extends mt{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}_r.prototype.isMeshStandardMaterial=!0;class Li extends _r{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Li.prototype.isMeshPhysicalMaterial=!0;class K0 extends mt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}K0.prototype.isMeshPhongMaterial=!0;class $0 extends mt{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}$0.prototype.isMeshToonMaterial=!0;class ey extends mt{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}ey.prototype.isMeshNormalMaterial=!0;class ty extends mt{constructor(e){super();this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}ty.prototype.isMeshLambertMaterial=!0;class ny extends mt{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}ny.prototype.isMeshMatcapMaterial=!0;class iy extends Ai{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}iy.prototype.isLineDashedMaterial=!0;const et={arraySlice:function(a,e,t){return et.isTypedArray(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)},convertArray:function(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i},flattenJSON:function(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)},subclip:function(a,e,t,n,i=30){const s=a.clone();s.name=e;const r=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*i;if(!(g<t||g>=n)){h.push(c.times[d]);for(let _=0;_<u;++_)f.push(c.values[d*u+_])}}h.length!==0&&(c.times=et.convertArray(h,c.times.constructor),c.values=et.convertArray(f,c.values.constructor),r.push(c))}s.tracks=r;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(a,e=0,t=a,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let r=0;r<i;++r){const o=t.tracks[r],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=a.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=o.times.length-1;let _;if(s<=o.times[0]){const p=u,m=h-u;_=et.arraySlice(o.values,p,m)}else if(s>=o.times[g]){const p=g*h+u,m=p+h-u;_=et.arraySlice(o.values,p,m)}else{const p=o.createInterpolant(),m=u,b=h-u;p.evaluate(s),_=et.arraySlice(p.resultBuffer,m,b)}l==="quaternion"&&new Pt().fromArray(_).normalize().conjugate().toArray(_);const x=c.times.length;for(let p=0;p<x;++p){const m=p*d+f;if(l==="quaternion")Pt.multiplyQuaternionsFlat(c.values,m,_,0,c.values,m);else{const b=d-f*2;for(let y=0;y<b;++y)c.values[m+y]-=_[y]}}}return a.blendMode=Uc,a}};class Cn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Cn.prototype.beforeStart_=Cn.prototype.copySampleValue_;Cn.prototype.afterEnd_=Cn.prototype.copySampleValue_;class sy extends Cn{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ji,endingEnd:Ji}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ki:s=e,o=2*t-n;break;case Wr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ki:r=e,l=2*n-t;break;case Wr:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,x=_*g,p=-f*x+2*f*_-f*g,m=(1+f)*x+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-d)*x+(1.5+d)*_+.5*g,y=d*x-d*_;for(let S=0;S!==o;++S)s[S]=p*r[u+S]+m*r[c+S]+b*r[l+S]+y*r[h+S];return s}}class Sh extends Cn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=r[c+f]*h+r[l+f]*u;return s}}class ry extends Cn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=et.convertArray(t,this.TimeBufferType),this.values=et.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:et.convertArray(e.times,Array),values:et.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ry(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Zi:t=this.InterpolantFactoryMethodLinear;break;case ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Zi;case this.InterpolantFactoryMethodSmooth:return ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=et.arraySlice(n,s,r),this.values=et.arraySlice(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&et.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=et.arraySlice(this.times),t=et.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===ro,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const h=o*n,f=r*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=et.arraySlice(e,0,r),this.values=et.arraySlice(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=et.arraySlice(this.times,0),t=et.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Zi;class Ls extends mn{}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=js;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Mh extends mn{}Mh.prototype.ValueTypeName="color";class xr extends mn{}xr.prototype.ValueTypeName="number";class ay extends Cn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Pt.slerpFlat(s,0,r,c-o,r,c,l);return s}}class Pi extends mn{InterpolantFactoryMethodLinear(e){return new ay(this.times,this.values,this.getValueSize(),e)}}Pi.prototype.ValueTypeName="quaternion";Pi.prototype.DefaultInterpolation=Zi;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends mn{}Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=js;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends mn{}yr.prototype.ValueTypeName="vector";class fl{constructor(e,t=-1,n,i=ao){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(ly(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(mn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=et.getKeyframeOrder(l);l=et.sortedArray(l,1,u),c=et.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new xr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const x=[],p=[];et.flattenJSON(d,x,p,g),x.length!==0&&_.push(new h(f,x,p))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const x=[],p=[];for(let m=0;m!==f[g].morphTargets.length;++m){const b=f[g];x.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new xr(".morphTargetInfluence["+_+"]",x,p))}l=d.length*(r||1)}else{const d=".bones["+t[h].name+"]";n(yr,d+".position",f,"pos",i),n(Pi,d+".quaternion",f,"rot",i),n(yr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function oy(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xr;case"vector":case"vector2":case"vector3":case"vector4":return yr;case"color":return Mh;case"quaternion":return Pi;case"bool":case"boolean":return Ls;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function ly(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=oy(a.type);if(a.times===void 0){const t=[],n=[];et.flattenJSON(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Rs={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class cy{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const uy=new cy;class on{constructor(e){this.manager=e!==void 0?e:uy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Fn={};class vr extends on{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Rs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:i});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body.getReader===void 0)return c;const u=Fn[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const x=new ReadableStream({start(p){m();function m(){h.read().then(({done:b,value:y})=>{if(b)p.close();else{_+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let M=0,w=u.length;M<w;M++){const I=u[M];I.onProgress&&I.onProgress(S)}p.enqueue(y),m()}})}}});return new Response(x)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Rs.add(e,c);const u=Fn[e];delete Fn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Fn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wh extends on{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Rs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=er("img");function l(){u(),Rs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class hy extends on{constructor(e){super(e)}load(e,t,n,i){const s=new ua,r=new wh(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let o=0;function l(c){r.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Th extends on{constructor(e){super(e)}load(e,t,n,i){const s=new ut,r=new wh(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class gn extends We{constructor(e,t=1){super();this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}gn.prototype.isLight=!0;class fy extends gn{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.groundColor=new xe(t)}copy(e){return gn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}fy.prototype.isHemisphereLight=!0;const Ah=new Me,Eh=new N,Lh=new N;class dl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eh),Lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lh),t.updateMatrixWorld(),Ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ph extends dl{constructor(){super(new Rt(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=Ks*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Ph.prototype.isSpotLightShadow=!0;class Rh extends gn{constructor(e,t,n=0,i=Math.PI/3,s=0,r=1){super(e,t);this.type="SpotLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.shadow=new Ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Rh.prototype.isSpotLight=!0;const Ch=new Me,br=new N,pl=new N;class Fh extends dl{constructor(){super(new Rt(90,1,.5,500));this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),br.setFromMatrixPosition(e.matrixWorld),n.position.copy(br),pl.copy(n.position),pl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pl),n.updateMatrixWorld(),i.makeTranslation(-br.x,-br.y,-br.z),Ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch)}}Fh.prototype.isPointLightShadow=!0;class Ih extends gn{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Ih.prototype.isPointLight=!0;class Nh extends dl{constructor(){super(new ms(-5,5,5,-5,.5,500))}}Nh.prototype.isDirectionalLightShadow=!0;class Dh extends gn{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.shadow=new Nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Dh.prototype.isDirectionalLight=!0;class dy extends gn{constructor(e,t){super(e,t);this.type="AmbientLight"}}dy.prototype.isAmbientLight=!0;class py extends gn{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}py.prototype.isRectAreaLight=!0;class Uh{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new N)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.282095),t.addScaledVector(r[1],.488603*i),t.addScaledVector(r[2],.488603*s),t.addScaledVector(r[3],.488603*n),t.addScaledVector(r[4],1.092548*(n*i)),t.addScaledVector(r[5],1.092548*(i*s)),t.addScaledVector(r[6],.315392*(3*s*s-1)),t.addScaledVector(r[7],1.092548*(n*s)),t.addScaledVector(r[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.886227),t.addScaledVector(r[1],2*.511664*i),t.addScaledVector(r[2],2*.511664*s),t.addScaledVector(r[3],2*.511664*n),t.addScaledVector(r[4],2*.429043*n*i),t.addScaledVector(r[5],2*.429043*i*s),t.addScaledVector(r[6],.743125*s*s-.247708),t.addScaledVector(r[7],2*.429043*n*s),t.addScaledVector(r[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Uh.prototype.isSphericalHarmonics3=!0;class ml extends gn{constructor(e=new Uh,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}ml.prototype.isLightProbe=!0;class In{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class my extends Ge{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}my.prototype.isInstancedBufferGeometry=!0;class Oh extends on{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Rs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Rs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}Oh.prototype.isImageBitmapLoader=!0;let Ca;const gy={getContext:function(){return Ca===void 0&&(Ca=new(window.AudioContext||window.webkitAudioContext)),Ca},setContext:function(a){Ca=a}};class _y extends on{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new vr(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){try{const l=o.slice(0);gy.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class xy extends ml{constructor(e,t,n=1){super(void 0,n);const i=new xe().set(e),s=new xe().set(t),r=new N(i.r,i.g,i.b),o=new N(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(r).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(r).sub(o).multiplyScalar(c)}}xy.prototype.isHemisphereLightProbe=!0;class yy extends ml{constructor(e,t=1){super(void 0,t);const n=new xe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}yy.prototype.isAmbientLightProbe=!0;class vy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bh(){return(typeof performance=="undefined"?Date:performance).now()}class by extends We{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Sy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Pt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;Pt.multiplyQuaternionsFlat(e,r,e,t,e,n),Pt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const o=t+r;e[o]=e[o]+e[n+r]*i}}}const gl="\\[\\]\\.:\\/",My=new RegExp("["+gl+"]","g"),_l="[^"+gl+"]",wy="[^"+gl.replace("\\.","")+"]",Ty=/((?:WC+[\/:])*)/.source.replace("WC",_l),Ay=/(WCOD+)?/.source.replace("WCOD",wy),Ey=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_l),Ly=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_l),Py=new RegExp("^"+Ty+Ay+Ey+Ly+"$"),Ry=["material","materials","bones"];class Cy{constructor(e,t,n){const i=n||Xe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Xe{constructor(e,t,n){this.path=t,this.parsedPath=n||Xe.parseTrackName(t),this.node=Xe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Xe.Composite(e,t,n):new Xe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(My,"")}static parseTrackName(e){const t=Py.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ry.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Xe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xe.Composite=Cy;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,o=new Array(r),l={endingStart:Ji,endingEnd:Ji};for(let c=0;c!==r;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=up,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Uc:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulateAdditive(o);break;case ao:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===hp;if(e===0)return s===-1?i:r&&(s&1)==1?t-i:i;if(n===cp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(r&&(s&1)==1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ki,i.endingEnd=Ki):(e?i.endingStart=this.zeroSlopeAtStart?Ki:Ji:i.endingStart=Wr,t?i.endingEnd=this.zeroSlopeAtEnd?Ki:Ji:i.endingEnd=Wr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,l=r.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class Iy extends xi{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=i[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,r[h]=g;else{if(g=r[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new Sy(Xe.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),r[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,o=r[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Sh(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?fl.findByName(i,e):e;const o=r!==null?r.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=ao),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const u=new Fy(this,r,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?fl.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let o=0,l=r.length;o!==l;++o){const c=r[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const o=n[r].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Iy.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Ny extends vs{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Ny.prototype.isInstancedInterleavedBuffer=!0;class Mb{constructor(e,t,n=0,i=1/0){this.ray=new wi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return xl(e,this,n,t),n.sort(zh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)xl(e[i],this,n,t);return n.sort(zh),n}}function zh(a,e){return a.distance-e.distance}function xl(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)xl(i[s],e,t,!0)}}const kh=new te;class Cs{constructor(e=new te(1/0,1/0),t=new te(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return kh.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Cs.prototype.isBox2=!0;const ni=new N,Fa=new Me,yl=new Me;class Dy extends hr{constructor(e){const t=Hh(e),n=new Ge,i=[],s=[],r=new xe(0,0,1),o=new xe(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(r.r,r.g,r.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new He(i,3)),n.setAttribute("color",new He(s,3));const l=new Ai({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");yl.copy(this.root.matrixWorld).invert();for(let s=0,r=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Fa.multiplyMatrices(yl,o.matrixWorld),ni.setFromMatrixPosition(Fa),i.setXYZ(r,ni.x,ni.y,ni.z),Fa.multiplyMatrices(yl,o.parent.matrixWorld),ni.setFromMatrixPosition(Fa),i.setXYZ(r+1,ni.x,ni.y,ni.z),r+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Hh(a){const e=[];a&&a.isBone&&e.push(a);for(let t=0;t<a.children.length;t++)e.push.apply(e,Hh(a.children[t]));return e}class wb extends St{constructor(e,t,n){const i=new hl(t,4,2),s=new En({wireframe:!0,fog:!1,toneMapped:!1});super(i,s);this.light=e,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class Uy extends hr{constructor(e=10,t=10,n=4473924,i=8947848){n=new xe(n),i=new xe(i);const s=t/2,r=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,g=-o;f<=t;f++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=f===s?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new Ge;u.setAttribute("position",new He(l,3)),u.setAttribute("color",new He(c,3));const h=new Ai({vertexColors:!0,toneMapped:!1});super(u,h);this.type="GridHelper"}}class Tb extends hr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ge;i.setAttribute("position",new He(t,3)),i.setAttribute("color",new He(n,3));const s=new Ai({vertexColors:!0,toneMapped:!1});super(i,s);this.type="AxesHelper"}setColors(e,t,n){const i=new xe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ri{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ei,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,r){return this.currentPath.bezierCurveTo(e,t,n,i,s,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(m){const b=[];for(let y=0,S=m.length;y<S;y++){const M=m[y],w=new Rn;w.curves=M.curves,b.push(w)}return b}function i(m,b){const y=b.length;let S=!1;for(let M=y-1,w=0;w<y;M=w++){let I=b[M],B=b[w],W=B.x-I.x,v=B.y-I.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(I=b[w],W=-W,B=b[M],v=-v),m.y<I.y||m.y>B.y)continue;if(m.y===I.y){if(m.x===I.x)return!0}else{const R=v*(m.x-I.x)-W*(m.y-I.y);if(R===0)return!0;if(R<0)continue;S=!S}}else{if(m.y!==I.y)continue;if(B.x<=m.x&&m.x<=I.x||I.x<=m.x&&m.x<=B.x)return!0}}return S}const s=pn.isClockWise,r=this.subPaths;if(r.length===0)return[];if(t===!0)return n(r);let o,l,c;const u=[];if(r.length===1)return l=r[0],c=new Rn,c.curves=l.curves,u.push(c),u;let h=!s(r[0].getPoints());h=e?!h:h;const f=[],d=[];let g=[],_=0,x;d[_]=void 0,g[_]=[];for(let m=0,b=r.length;m<b;m++)l=r[m],x=l.getPoints(),o=s(x),o=e?!o:o,o?(!h&&d[_]&&_++,d[_]={s:new Rn,p:x},d[_].s.curves=l.curves,h&&_++,g[_]=[]):g[_].push({h:l,p:x[0]});if(!d[0])return n(r);if(d.length>1){let m=!1;const b=[];for(let y=0,S=d.length;y<S;y++)f[y]=[];for(let y=0,S=d.length;y<S;y++){const M=g[y];for(let w=0;w<M.length;w++){const I=M[w];let B=!0;for(let W=0;W<d.length;W++)i(I.p,d[W].p)&&(y!==W&&b.push({froms:y,tos:W,hole:w}),B?(B=!1,f[W].push(I)):m=!0);B&&f[y].push(I)}}b.length>0&&(m||(g=f))}let p;for(let m=0,b=d.length;m<b;m++){c=d[m].s,u.push(c),p=g[m];for(let y=0,S=p.length;y<S;y++)c.holes.push(p[y].h)}return u}}const Oy=new Float32Array(1);new Int32Array(Oy.buffer);jt.create=function(a,e){return console.log("THREE.Curve.create() has been deprecated"),a.prototype=Object.create(jt.prototype),a.prototype.constructor=a,a.prototype.getPoint=e,a};Ei.prototype.fromPoints=function(a){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(a)};Uy.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Dy.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};on.prototype.extractUrlBase=function(a){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),In.extractUrlBase(a)};on.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Cs.prototype.center=function(a){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(a)};Cs.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Cs.prototype.isIntersectionBox=function(a){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)};Cs.prototype.size=function(a){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(a)};Qt.prototype.center=function(a){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(a)};Qt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Qt.prototype.isIntersectionBox=function(a){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)};Qt.prototype.isIntersectionSphere=function(a){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)};Qt.prototype.size=function(a){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(a)};Mi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};fa.prototype.setFromMatrix=function(a){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(a)};nt.prototype.flattenToArrayOffset=function(a,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,e)};nt.prototype.multiplyVector3=function(a){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)};nt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};nt.prototype.applyToBufferAttribute=function(a){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)};nt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};nt.prototype.getInverse=function(a){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(a).invert()};Me.prototype.extractPosition=function(a){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(a)};Me.prototype.flattenToArrayOffset=function(a,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,e)};Me.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new N().setFromMatrixColumn(this,3)};Me.prototype.setRotationFromQuaternion=function(a){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(a)};Me.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Me.prototype.multiplyVector3=function(a){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)};Me.prototype.multiplyVector4=function(a){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)};Me.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Me.prototype.rotateAxis=function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),a.transformDirection(this)};Me.prototype.crossVector=function(a){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)};Me.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Me.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Me.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Me.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Me.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Me.prototype.applyToBufferAttribute=function(a){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)};Me.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Me.prototype.makeFrustum=function(a,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(a,e,n,t,i,s)};Me.prototype.getInverse=function(a){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(a).invert()};Pn.prototype.isIntersectionLine=function(a){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(a)};Pt.prototype.multiplyVector3=function(a){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),a.applyQuaternion(this)};Pt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};wi.prototype.isIntersectionBox=function(a){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)};wi.prototype.isIntersectionPlane=function(a){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(a)};wi.prototype.isIntersectionSphere=function(a){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)};ht.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ht.prototype.barycoordFromPoint=function(a,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(a,e)};ht.prototype.midpoint=function(a){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(a)};ht.prototypenormal=function(a){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(a)};ht.prototype.plane=function(a){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(a)};ht.barycoordFromPoint=function(a,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ht.getBarycoord(a,e,t,n,i)};ht.normal=function(a,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ht.getNormal(a,e,t,n)};Rn.prototype.extractAllPoints=function(a){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(a)};Rn.prototype.extrude=function(a){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Es(this,a)};Rn.prototype.makeGeometry=function(a){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ul(this,a)};te.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)};te.prototype.distanceToManhattan=function(a){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)};te.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};N.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};N.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};N.prototype.getPositionFromMatrix=function(a){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(a)};N.prototype.getScaleFromMatrix=function(a){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(a)};N.prototype.getColumnFromMatrix=function(a,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,a)};N.prototype.applyProjection=function(a){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(a)};N.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)};N.prototype.distanceToManhattan=function(a){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)};N.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};je.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)};je.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.getChildByName=function(a){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(a)};We.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};We.prototype.translate=function(a,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,a)};We.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};We.prototype.applyMatrix=function(a){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)};Object.defineProperties(We.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});St.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(St.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),fp},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});qo.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Rt.prototype.setLens=function(a,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(a)};Object.defineProperties(gn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=a}}});Object.defineProperties($e.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Xr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Xr)}}});$e.prototype.setDynamic=function(a){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?Xr:Zs),this};$e.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},$e.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ge.prototype.addIndex=function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(a)};Ge.prototype.addAttribute=function(a,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(a,new $e(arguments[1],arguments[2]))):a==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(a,e)};Ge.prototype.addDrawCall=function(a,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(a,e)};Ge.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ge.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ge.prototype.removeAttribute=function(a){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(a)};Ge.prototype.applyMatrix=function(a){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)};Object.defineProperties(Ge.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});vs.prototype.setDynamic=function(a){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?Xr:Zs),this};vs.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Es.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Es.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Es.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Gu.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(mt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new xe}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=a===rc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=a}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Ln.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=a}}});Qe.prototype.clearTarget=function(a,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(a),this.clear(e,t,n)};Qe.prototype.animate=function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(a)};Qe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Qe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Qe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Qe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Qe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Qe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Qe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Qe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Qe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Qe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Qe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Qe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Qe.prototype.enableScissorTest=function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(a)};Qe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Qe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Qe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Qe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Qe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Qe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Qe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Qe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Qe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Qe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Qe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(a){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=a===!0?qe:Wn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(ku.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(kt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=a}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=a}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=a}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=a}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=a}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=a}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=a}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=a}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=a}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=a}}});by.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new _y().load(a,function(n){e.setBuffer(n)}),this};Do.prototype.updateCubeMap=function(a,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(a,e)};Do.prototype.clear=function(a,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(a,e,t,n)};yi.crossOrigin=void 0;yi.loadTexture=function(a,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Th;i.setCrossOrigin(this.crossOrigin);const s=i.load(a,t,void 0,n);return e&&(s.mapping=e),s};yi.loadTextureCube=function(a,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new hy;i.setCrossOrigin(this.crossOrigin);const s=i.load(a,t,void 0,n);return e&&(s.mapping=e),s};yi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};yi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);class Gh extends on{constructor(e){super(e);this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const s=this,r=new vr(s.manager);r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(e,function(o){try{t(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(z,U){if(z.nodeType!==1)return;const T=y(z);let L=!0,ee=null;switch(z.nodeName){case"svg":break;case"style":s(z);break;case"g":U=g(z,U);break;case"path":U=g(z,U),z.hasAttribute("d")&&(ee=i(z));break;case"rect":U=g(z,U),ee=l(z);break;case"polygon":U=g(z,U),ee=c(z);break;case"polyline":U=g(z,U),ee=u(z);break;case"circle":U=g(z,U),ee=h(z);break;case"ellipse":U=g(z,U),ee=f(z);break;case"line":U=g(z,U),ee=d(z);break;case"defs":L=!1;break;case"use":U=g(z,U);const K=(z.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ae=z.viewportElement.getElementById(K);ae?n(ae,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+K);break}if(ee&&(U.fill!==void 0&&U.fill!=="none"&&ee.color.setStyle(U.fill),M(ee,fe),W.push(ee),ee.userData={node:z,style:U}),L){const D=z.childNodes;for(let K=0;K<D.length;K++)n(D[K],U)}T&&(R.pop(),R.length>0?fe.copy(R[R.length-1]):fe.identity())}function i(z){const U=new Ri,T=new te,L=new te,ee=new te;let D=!0,K=!1;const de=z.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig);for(let he=0,Q=de.length;he<Q;he++){const oe=de[he],q=oe.charAt(0),ne=oe.substr(1).trim();D===!0&&(K=!0,D=!1);let F;switch(q){case"M":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=2)T.x=F[E+0],T.y=F[E+1],L.x=T.x,L.y=T.y,E===0?U.moveTo(T.x,T.y):U.lineTo(T.x,T.y),E===0&&ee.copy(T);break;case"H":F=x(ne);for(let E=0,ue=F.length;E<ue;E++)T.x=F[E],L.x=T.x,L.y=T.y,U.lineTo(T.x,T.y),E===0&&K===!0&&ee.copy(T);break;case"V":F=x(ne);for(let E=0,ue=F.length;E<ue;E++)T.y=F[E],L.x=T.x,L.y=T.y,U.lineTo(T.x,T.y),E===0&&K===!0&&ee.copy(T);break;case"L":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=2)T.x=F[E+0],T.y=F[E+1],L.x=T.x,L.y=T.y,U.lineTo(T.x,T.y),E===0&&K===!0&&ee.copy(T);break;case"C":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=6)U.bezierCurveTo(F[E+0],F[E+1],F[E+2],F[E+3],F[E+4],F[E+5]),L.x=F[E+2],L.y=F[E+3],T.x=F[E+4],T.y=F[E+5],E===0&&K===!0&&ee.copy(T);break;case"S":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=4)U.bezierCurveTo(_(T.x,L.x),_(T.y,L.y),F[E+0],F[E+1],F[E+2],F[E+3]),L.x=F[E+0],L.y=F[E+1],T.x=F[E+2],T.y=F[E+3],E===0&&K===!0&&ee.copy(T);break;case"Q":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=4)U.quadraticCurveTo(F[E+0],F[E+1],F[E+2],F[E+3]),L.x=F[E+0],L.y=F[E+1],T.x=F[E+2],T.y=F[E+3],E===0&&K===!0&&ee.copy(T);break;case"T":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=2){const ye=_(T.x,L.x),Ee=_(T.y,L.y);U.quadraticCurveTo(ye,Ee,F[E+0],F[E+1]),L.x=ye,L.y=Ee,T.x=F[E+0],T.y=F[E+1],E===0&&K===!0&&ee.copy(T)}break;case"A":F=x(ne,[3,4],7);for(let E=0,ue=F.length;E<ue;E+=7){if(F[E+5]==T.x&&F[E+6]==T.y)continue;const ye=T.clone();T.x=F[E+5],T.y=F[E+6],L.x=T.x,L.y=T.y,r(U,F[E],F[E+1],F[E+2],F[E+3],F[E+4],ye,T),E===0&&K===!0&&ee.copy(T)}break;case"m":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=2)T.x+=F[E+0],T.y+=F[E+1],L.x=T.x,L.y=T.y,E===0?U.moveTo(T.x,T.y):U.lineTo(T.x,T.y),E===0&&ee.copy(T);break;case"h":F=x(ne);for(let E=0,ue=F.length;E<ue;E++)T.x+=F[E],L.x=T.x,L.y=T.y,U.lineTo(T.x,T.y),E===0&&K===!0&&ee.copy(T);break;case"v":F=x(ne);for(let E=0,ue=F.length;E<ue;E++)T.y+=F[E],L.x=T.x,L.y=T.y,U.lineTo(T.x,T.y),E===0&&K===!0&&ee.copy(T);break;case"l":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=2)T.x+=F[E+0],T.y+=F[E+1],L.x=T.x,L.y=T.y,U.lineTo(T.x,T.y),E===0&&K===!0&&ee.copy(T);break;case"c":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=6)U.bezierCurveTo(T.x+F[E+0],T.y+F[E+1],T.x+F[E+2],T.y+F[E+3],T.x+F[E+4],T.y+F[E+5]),L.x=T.x+F[E+2],L.y=T.y+F[E+3],T.x+=F[E+4],T.y+=F[E+5],E===0&&K===!0&&ee.copy(T);break;case"s":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=4)U.bezierCurveTo(_(T.x,L.x),_(T.y,L.y),T.x+F[E+0],T.y+F[E+1],T.x+F[E+2],T.y+F[E+3]),L.x=T.x+F[E+0],L.y=T.y+F[E+1],T.x+=F[E+2],T.y+=F[E+3],E===0&&K===!0&&ee.copy(T);break;case"q":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=4)U.quadraticCurveTo(T.x+F[E+0],T.y+F[E+1],T.x+F[E+2],T.y+F[E+3]),L.x=T.x+F[E+0],L.y=T.y+F[E+1],T.x+=F[E+2],T.y+=F[E+3],E===0&&K===!0&&ee.copy(T);break;case"t":F=x(ne);for(let E=0,ue=F.length;E<ue;E+=2){const ye=_(T.x,L.x),Ee=_(T.y,L.y);U.quadraticCurveTo(ye,Ee,T.x+F[E+0],T.y+F[E+1]),L.x=ye,L.y=Ee,T.x=T.x+F[E+0],T.y=T.y+F[E+1],E===0&&K===!0&&ee.copy(T)}break;case"a":F=x(ne,[3,4],7);for(let E=0,ue=F.length;E<ue;E+=7){if(F[E+5]==0&&F[E+6]==0)continue;const ye=T.clone();T.x+=F[E+5],T.y+=F[E+6],L.x=T.x,L.y=T.y,r(U,F[E],F[E+1],F[E+2],F[E+3],F[E+4],ye,T),E===0&&K===!0&&ee.copy(T)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(T.copy(ee),U.currentPath.currentPoint.copy(T),D=!0);break;default:console.warn(oe)}K=!1}return U}function s(z){if(!(!z.sheet||!z.sheet.cssRules||!z.sheet.cssRules.length))for(let U=0;U<z.sheet.cssRules.length;U++){const T=z.sheet.cssRules[U];if(T.type!==1)continue;const L=T.selectorText.split(/,/gm).filter(Boolean).map(ee=>ee.trim());for(let ee=0;ee<L.length;ee++){const D=Object.fromEntries(Object.entries(T.style).filter(([,K])=>K!==""));v[L[ee]]=Object.assign(v[L[ee]]||{},D)}}}function r(z,U,T,L,ee,D,K,ae){if(U==0||T==0){z.lineTo(ae.x,ae.y);return}L=L*Math.PI/180,U=Math.abs(U),T=Math.abs(T);const de=(K.x-ae.x)/2,he=(K.y-ae.y)/2,Q=Math.cos(L)*de+Math.sin(L)*he,oe=-Math.sin(L)*de+Math.cos(L)*he;let q=U*U,ne=T*T;const F=Q*Q,E=oe*oe,ue=F/q+E/ne;if(ue>1){const Te=Math.sqrt(ue);U=Te*U,T=Te*T,q=U*U,ne=T*T}const ye=q*E+ne*F,Ee=(q*ne-ye)/ye;let Pe=Math.sqrt(Math.max(0,Ee));ee===D&&(Pe=-Pe);const C=Pe*U*oe/T,A=-Pe*T*Q/U,re=Math.cos(L)*C-Math.sin(L)*A+(K.x+ae.x)/2,pe=Math.sin(L)*C+Math.cos(L)*A+(K.y+ae.y)/2,be=o(1,0,(Q-C)/U,(oe-A)/T),se=o((Q-C)/U,(oe-A)/T,(-Q-C)/U,(-oe-A)/T)%(Math.PI*2);z.currentPath.absellipse(re,pe,U,T,be,be+se,D===0,L)}function o(z,U,T,L){const ee=z*T+U*L,D=Math.sqrt(z*z+U*U)*Math.sqrt(T*T+L*L);let K=Math.acos(Math.max(-1,Math.min(1,ee/D)));return z*L-U*T<0&&(K=-K),K}function l(z){const U=b(z.getAttribute("x")||0),T=b(z.getAttribute("y")||0),L=b(z.getAttribute("rx")||z.getAttribute("ry")||0),ee=b(z.getAttribute("ry")||z.getAttribute("rx")||0),D=b(z.getAttribute("width")),K=b(z.getAttribute("height")),ae=1-.551915024494,de=new Ri;return de.moveTo(U+L,T),de.lineTo(U+D-L,T),(L!==0||ee!==0)&&de.bezierCurveTo(U+D-L*ae,T,U+D,T+ee*ae,U+D,T+ee),de.lineTo(U+D,T+K-ee),(L!==0||ee!==0)&&de.bezierCurveTo(U+D,T+K-ee*ae,U+D-L*ae,T+K,U+D-L,T+K),de.lineTo(U+L,T+K),(L!==0||ee!==0)&&de.bezierCurveTo(U+L*ae,T+K,U,T+K-ee*ae,U,T+K-ee),de.lineTo(U,T+ee),(L!==0||ee!==0)&&de.bezierCurveTo(U,T+ee*ae,U+L*ae,T,U+L,T),de}function c(z){function U(D,K,ae){const de=b(K),he=b(ae);ee===0?L.moveTo(de,he):L.lineTo(de,he),ee++}const T=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,L=new Ri;let ee=0;return z.getAttribute("points").replace(T,U),L.currentPath.autoClose=!0,L}function u(z){function U(D,K,ae){const de=b(K),he=b(ae);ee===0?L.moveTo(de,he):L.lineTo(de,he),ee++}const T=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,L=new Ri;let ee=0;return z.getAttribute("points").replace(T,U),L.currentPath.autoClose=!1,L}function h(z){const U=b(z.getAttribute("cx")||0),T=b(z.getAttribute("cy")||0),L=b(z.getAttribute("r")||0),ee=new Ei;ee.absarc(U,T,L,0,Math.PI*2);const D=new Ri;return D.subPaths.push(ee),D}function f(z){const U=b(z.getAttribute("cx")||0),T=b(z.getAttribute("cy")||0),L=b(z.getAttribute("rx")||0),ee=b(z.getAttribute("ry")||0),D=new Ei;D.absellipse(U,T,L,ee,0,Math.PI*2);const K=new Ri;return K.subPaths.push(D),K}function d(z){const U=b(z.getAttribute("x1")||0),T=b(z.getAttribute("y1")||0),L=b(z.getAttribute("x2")||0),ee=b(z.getAttribute("y2")||0),D=new Ri;return D.moveTo(U,T),D.lineTo(L,ee),D.currentPath.autoClose=!1,D}function g(z,U){U=Object.assign({},U);let T={};if(z.hasAttribute("class")){const K=z.getAttribute("class").split(/\s/).filter(Boolean).map(ae=>ae.trim());for(let ae=0;ae<K.length;ae++)T=Object.assign(T,v["."+K[ae]])}z.hasAttribute("id")&&(T=Object.assign(T,v["#"+z.getAttribute("id")]));function L(K,ae,de){de===void 0&&(de=function(Q){return Q.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),Q}),z.hasAttribute(K)&&(U[ae]=de(z.getAttribute(K))),T[K]&&(U[ae]=de(T[K])),z.style&&z.style[K]!==""&&(U[ae]=de(z.style[K]))}function ee(K){return Math.max(0,Math.min(1,b(K)))}function D(K){return Math.max(0,b(K))}return L("fill","fill"),L("fill-opacity","fillOpacity",ee),L("fill-rule","fillRule"),L("opacity","opacity",ee),L("stroke","stroke"),L("stroke-opacity","strokeOpacity",ee),L("stroke-width","strokeWidth",D),L("stroke-linejoin","strokeLineJoin"),L("stroke-linecap","strokeLineCap"),L("stroke-miterlimit","strokeMiterLimit",D),L("visibility","visibility"),U}function _(z,U){return z-(U-z)}function x(z,U,T){if(typeof z!="string")throw new TypeError("Invalid input: "+typeof z);const L={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ee=0,D=1,K=2,ae=3;let de=ee,he=!0,Q="",oe="";const q=[];function ne(ye,Ee,Pe){const C=new SyntaxError('Unexpected character "'+ye+'" at index '+Ee+".");throw C.partial=Pe,C}function F(){Q!==""&&(oe===""?q.push(Number(Q)):q.push(Number(Q)*Math.pow(10,Number(oe)))),Q="",oe=""}let E;const ue=z.length;for(let ye=0;ye<ue;ye++){if(E=z[ye],Array.isArray(U)&&U.includes(q.length%T)&&L.FLAGS.test(E)){de=D,Q=E,F();continue}if(de===ee){if(L.WHITESPACE.test(E))continue;if(L.DIGIT.test(E)||L.SIGN.test(E)){de=D,Q=E;continue}if(L.POINT.test(E)){de=K,Q=E;continue}L.COMMA.test(E)&&(he&&ne(E,ye,q),he=!0)}if(de===D){if(L.DIGIT.test(E)){Q+=E;continue}if(L.POINT.test(E)){Q+=E,de=K;continue}if(L.EXP.test(E)){de=ae;continue}L.SIGN.test(E)&&Q.length===1&&L.SIGN.test(Q[0])&&ne(E,ye,q)}if(de===K){if(L.DIGIT.test(E)){Q+=E;continue}if(L.EXP.test(E)){de=ae;continue}L.POINT.test(E)&&Q[Q.length-1]==="."&&ne(E,ye,q)}if(de===ae){if(L.DIGIT.test(E)){oe+=E;continue}if(L.SIGN.test(E)){if(oe===""){oe+=E;continue}oe.length===1&&L.SIGN.test(oe)&&ne(E,ye,q)}}L.WHITESPACE.test(E)?(F(),de=ee,he=!1):L.COMMA.test(E)?(F(),de=ee,he=!0):L.SIGN.test(E)?(F(),de=D,Q=E):L.POINT.test(E)?(F(),de=K,Q=E):ne(E,ye,q)}return F(),q}const p=["mm","cm","in","pt","pc","px"],m={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function b(z){let U="px";if(typeof z=="string"||z instanceof String)for(let L=0,ee=p.length;L<ee;L++){const D=p[L];if(z.endsWith(D)){U=D,z=z.substring(0,z.length-D.length);break}}let T;return U==="px"&&t.defaultUnit!=="px"?T=m.in[t.defaultUnit]/t.defaultDPI:(T=m[U][t.defaultUnit],T<0&&(T=m[U].in*t.defaultDPI)),T*parseFloat(z)}function y(z){if(!(z.hasAttribute("transform")||z.nodeName==="use"&&(z.hasAttribute("x")||z.hasAttribute("y"))))return null;const U=S(z);return R.length>0&&U.premultiply(R[R.length-1]),fe.copy(U),R.push(U),U}function S(z){const U=new nt,T=O;if(z.nodeName==="use"&&(z.hasAttribute("x")||z.hasAttribute("y"))){const L=b(z.getAttribute("x")),ee=b(z.getAttribute("y"));U.translate(L,ee)}if(z.hasAttribute("transform")){const L=z.getAttribute("transform").split(")");for(let ee=L.length-1;ee>=0;ee--){const D=L[ee].trim();if(D==="")continue;const K=D.indexOf("("),ae=D.length;if(K>0&&K<ae){const de=D.substr(0,K),he=x(D.substr(K+1,ae-K-1));switch(T.identity(),de){case"translate":if(he.length>=1){const Q=he[0];let oe=Q;he.length>=2&&(oe=he[1]),T.translate(Q,oe)}break;case"rotate":if(he.length>=1){let Q=0,oe=0,q=0;Q=-he[0]*Math.PI/180,he.length>=3&&(oe=he[1],q=he[2]),H.identity().translate(-oe,-q),k.identity().rotate(Q),Y.multiplyMatrices(k,H),H.identity().translate(oe,q),T.multiplyMatrices(H,Y)}break;case"scale":if(he.length>=1){const Q=he[0];let oe=Q;he.length>=2&&(oe=he[1]),T.scale(Q,oe)}break;case"skewX":he.length===1&&T.set(1,Math.tan(he[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":he.length===1&&T.set(1,0,0,Math.tan(he[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":he.length===6&&T.set(he[0],he[2],he[4],he[1],he[3],he[5],0,0,1);break}}U.premultiply(T)}}return U}function M(z,U){function T(D){X.set(D.x,D.y,1).applyMatrix3(U),D.set(X.x,X.y)}const L=w(U),ee=z.subPaths;for(let D=0,K=ee.length;D<K;D++){const de=ee[D].curves;for(let he=0;he<de.length;he++){const Q=de[he];Q.isLineCurve?(T(Q.v1),T(Q.v2)):Q.isCubicBezierCurve?(T(Q.v0),T(Q.v1),T(Q.v2),T(Q.v3)):Q.isQuadraticBezierCurve?(T(Q.v0),T(Q.v1),T(Q.v2)):Q.isEllipseCurve&&(L&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),G.set(Q.aX,Q.aY),T(G),Q.aX=G.x,Q.aY=G.y,Q.xRadius*=I(U),Q.yRadius*=B(U))}}}function w(z){return z.elements[1]!==0||z.elements[3]!==0}function I(z){const U=z.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function B(z){const U=z.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}const W=[],v={},R=[],O=new nt,H=new nt,k=new nt,Y=new nt,G=new te,X=new N,fe=new nt,Z=new DOMParser().parseFromString(e,"image/svg+xml");return n(Z.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:Z.documentElement}}static createShapes(e){const t=999999999,n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(x,p,m,b){const y=x.x,S=p.x,M=m.x,w=b.x,I=x.y,B=p.y,W=m.y,v=b.y,R=(w-M)*(I-W)-(v-W)*(y-M),O=(S-y)*(I-W)-(B-I)*(y-M),H=(v-W)*(S-y)-(w-M)*(B-I),k=R/H,Y=O/H;if(H===0&&R!==0||k<=0||k>=1||Y<0||Y>1)return null;if(R===0&&H===0){for(let G=0;G<2;G++)if(r(G===0?m:b,x,p),i.loc==n.ORIGIN){const X=G===0?m:b;return{x:X.x,y:X.y,t:i.t}}else if(i.loc==n.BETWEEN){const X=+(y+i.t*(S-y)).toPrecision(10),fe=+(I+i.t*(B-I)).toPrecision(10);return{x:X,y:fe,t:i.t}}return null}else{for(let fe=0;fe<2;fe++)if(r(fe===0?m:b,x,p),i.loc==n.ORIGIN){const Z=fe===0?m:b;return{x:Z.x,y:Z.y,t:i.t}}const G=+(y+k*(S-y)).toPrecision(10),X=+(I+k*(B-I)).toPrecision(10);return{x:G,y:X,t:k}}}function r(x,p,m){const b=m.x-p.x,y=m.y-p.y,S=x.x-p.x,M=x.y-p.y,w=b*M-S*y;if(x.x===p.x&&x.y===p.y){i.loc=n.ORIGIN,i.t=0;return}if(x.x===m.x&&x.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(w<-Number.EPSILON){i.loc=n.LEFT;return}if(w>Number.EPSILON){i.loc=n.RIGHT;return}if(b*S<0||y*M<0){i.loc=n.BEHIND;return}if(Math.sqrt(b*b+y*y)<Math.sqrt(S*S+M*M)){i.loc=n.BEYOND;return}let I;b!==0?I=S/b:I=M/y,i.loc=n.BETWEEN,i.t=I}function o(x,p){const m=[],b=[];for(let y=1;y<x.length;y++){const S=x[y-1],M=x[y];for(let w=1;w<p.length;w++){const I=p[w-1],B=p[w],W=s(S,M,I,B);W!==null&&m.find(v=>v.t<=W.t+Number.EPSILON&&v.t>=W.t-Number.EPSILON)===void 0&&(m.push(W),b.push(new te(W.x,W.y)))}}return b}function l(x,p,m){const b=new te;p.getCenter(b);const y=[];return m.forEach(S=>{S.boundingBox.containsPoint(b)&&o(x,S.points).forEach(w=>{y.push({identifier:S.identifier,isCW:S.isCW,point:w})})}),y.sort((S,M)=>S.point.x-M.point.x),y}function c(x,p,m,b,y){(y==null||y==="")&&(y="nonzero");const S=new te;x.boundingBox.getCenter(S);const M=[new te(m,S.y),new te(b,S.y)],w=l(M,x.boundingBox,p);w.sort((O,H)=>O.point.x-H.point.x);const I=[],B=[];w.forEach(O=>{O.identifier===x.identifier?I.push(O):B.push(O)});const W=I[0].point.x,v=[];let R=0;for(;R<B.length&&B[R].point.x<W;)v.length>0&&v[v.length-1]===B[R].identifier?v.pop():v.push(B[R].identifier),R++;if(v.push(x.identifier),y==="evenodd"){const O=v.length%2==0,H=v[v.length-2];return{identifier:x.identifier,isHole:O,for:H}}else if(y==="nonzero"){let O=!0,H=null,k=null;for(let Y=0;Y<v.length;Y++){const G=v[Y];O?(k=p[G].isCW,O=!1,H=G):k!==p[G].isCW&&(k=p[G].isCW,O=!0)}return{identifier:x.identifier,isHole:O,for:H}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let u=0,h=t,f=-t,d=e.subPaths.map(x=>{const p=x.getPoints();let m=-t,b=t,y=-t,S=t;for(let M=0;M<p.length;M++){const w=p[M];w.y>m&&(m=w.y),w.y<b&&(b=w.y),w.x>y&&(y=w.x),w.x<S&&(S=w.x)}return f<=y&&(f=y+1),h>=S&&(h=S-1),{curves:x.curves,points:p,isCW:pn.isClockWise(p),identifier:u++,boundingBox:new Cs(new te(S,b),new te(y,m))}});d=d.filter(x=>x.points.length>1);const g=d.map(x=>c(x,d,h,f,e.userData.style.fillRule)),_=[];return d.forEach(x=>{if(!g[x.identifier].isHole){const m=new Rn;m.curves=x.curves,g.filter(y=>y.isHole&&y.for===x.identifier).forEach(y=>{const S=d[y.identifier],M=new Ei;M.curves=S.curves,m.holes.push(M)}),_.push(m)}}),_}static getStrokeStyle(e,t,n,i,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(e,t,n,i){const s=[],r=[],o=[];if(Gh.pointsToStrokeWithBuffers(e,t,n,i,s,r,o)===0)return null;const l=new Ge;return l.setAttribute("position",new He(s,3)),l.setAttribute("normal",new He(r,3)),l.setAttribute("uv",new He(o,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,s,r,o,l){const c=new te,u=new te,h=new te,f=new te,d=new te,g=new te,_=new te,x=new te,p=new te,m=new te,b=new te,y=new te,S=new te,M=new te,w=new te,I=new te,B=new te;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=oe(e);const W=e.length;if(W<2)return 0;const v=e[0].equals(e[W-1]);let R,O=e[0],H;const k=t.strokeWidth/2,Y=1/(W-1);let G=0,X,fe,Z,ie,z=!1,U=0,T=l*3,L=l*2;ee(e[0],e[1],c).multiplyScalar(k),x.copy(e[0]).sub(c),p.copy(e[0]).add(c),m.copy(x),b.copy(p);for(let q=1;q<W;q++){R=e[q],q===W-1?v?H=e[1]:H=void 0:H=e[q+1];const ne=c;if(ee(O,R,ne),h.copy(ne).multiplyScalar(k),y.copy(R).sub(h),S.copy(R).add(h),X=G+Y,fe=!1,H!==void 0){ee(R,H,u),h.copy(u).multiplyScalar(k),M.copy(R).sub(h),w.copy(R).add(h),Z=!0,h.subVectors(H,O),ne.dot(h)<0&&(Z=!1),q===1&&(z=Z),h.subVectors(H,R),h.normalize();const F=Math.abs(ne.dot(h));if(F!==0){const E=k/F;h.multiplyScalar(-E),f.subVectors(R,O),d.copy(f).setLength(E).add(h),I.copy(d).negate();const ue=d.length(),ye=f.length();f.divideScalar(ye),g.subVectors(H,R);const Ee=g.length();switch(g.divideScalar(Ee),f.dot(I)<ye&&g.dot(I)<Ee&&(fe=!0),B.copy(d).add(R),I.add(R),ie=!1,fe?Z?(w.copy(I),S.copy(I)):(M.copy(I),y.copy(I)):ae(),t.strokeLineJoin){case"bevel":de(Z,fe,X);break;case"round":he(Z,fe),Z?K(R,y,M,X,0):K(R,w,S,X,1);break;case"miter":case"miter-clip":default:const Pe=k*t.strokeMiterLimit/ue;if(Pe<1)if(t.strokeLineJoin!=="miter-clip"){de(Z,fe,X);break}else he(Z,fe),Z?(g.subVectors(B,y).multiplyScalar(Pe).add(y),_.subVectors(B,M).multiplyScalar(Pe).add(M),D(y,X,0),D(g,X,0),D(R,X,.5),D(R,X,.5),D(g,X,0),D(_,X,0),D(R,X,.5),D(_,X,0),D(M,X,0)):(g.subVectors(B,S).multiplyScalar(Pe).add(S),_.subVectors(B,w).multiplyScalar(Pe).add(w),D(S,X,1),D(g,X,1),D(R,X,.5),D(R,X,.5),D(g,X,1),D(_,X,1),D(R,X,.5),D(_,X,1),D(w,X,1));else fe?(Z?(D(p,G,1),D(x,G,0),D(B,X,0),D(p,G,1),D(B,X,0),D(I,X,1)):(D(p,G,1),D(x,G,0),D(B,X,1),D(x,G,0),D(I,X,0),D(B,X,1)),Z?M.copy(B):w.copy(B)):Z?(D(y,X,0),D(B,X,0),D(R,X,.5),D(R,X,.5),D(B,X,0),D(M,X,0)):(D(S,X,1),D(B,X,1),D(R,X,.5),D(R,X,.5),D(B,X,1),D(w,X,1)),ie=!0;break}}else ae()}else ae();!v&&q===W-1&&Q(e[0],m,b,Z,!0,G),G=X,O=R,x.copy(M),p.copy(w)}if(!v)Q(R,y,S,Z,!1,X);else if(fe&&s){let q=B,ne=I;z!==Z&&(q=I,ne=B),Z?(ie||z)&&(ne.toArray(s,0*3),ne.toArray(s,3*3),ie&&q.toArray(s,1*3)):(ie||!z)&&(ne.toArray(s,1*3),ne.toArray(s,3*3),ie&&q.toArray(s,0*3))}return U;function ee(q,ne,F){return F.subVectors(ne,q),F.set(-F.y,F.x).normalize()}function D(q,ne,F){s&&(s[T]=q.x,s[T+1]=q.y,s[T+2]=0,r&&(r[T]=0,r[T+1]=0,r[T+2]=1),T+=3,o&&(o[L]=ne,o[L+1]=F,L+=2)),U+=3}function K(q,ne,F,E,ue){c.copy(ne).sub(q).normalize(),u.copy(F).sub(q).normalize();let ye=Math.PI;const Ee=c.dot(u);Math.abs(Ee)<1&&(ye=Math.abs(Math.acos(Ee))),ye/=n,h.copy(ne);for(let Pe=0,C=n-1;Pe<C;Pe++)f.copy(h).rotateAround(q,ye),D(h,E,ue),D(f,E,ue),D(q,E,.5),h.copy(f);D(f,E,ue),D(F,E,ue),D(q,E,.5)}function ae(){D(p,G,1),D(x,G,0),D(y,X,0),D(p,G,1),D(y,X,1),D(S,X,0)}function de(q,ne,F){ne?q?(D(p,G,1),D(x,G,0),D(y,X,0),D(p,G,1),D(y,X,0),D(I,X,1),D(y,F,0),D(M,F,0),D(I,F,.5)):(D(p,G,1),D(x,G,0),D(S,X,1),D(x,G,0),D(I,X,0),D(S,X,1),D(S,F,1),D(w,F,0),D(I,F,.5)):q?(D(y,F,0),D(M,F,0),D(R,F,.5)):(D(S,F,1),D(w,F,0),D(R,F,.5))}function he(q,ne){ne&&(q?(D(p,G,1),D(x,G,0),D(y,X,0),D(p,G,1),D(y,X,0),D(I,X,1),D(y,G,0),D(R,X,.5),D(I,X,1),D(R,X,.5),D(M,G,0),D(I,X,1)):(D(p,G,1),D(x,G,0),D(S,X,1),D(x,G,0),D(I,X,0),D(S,X,1),D(S,G,1),D(I,X,0),D(R,X,.5),D(R,X,.5),D(I,X,0),D(w,G,1)))}function Q(q,ne,F,E,ue,ye){switch(t.strokeLineCap){case"round":ue?K(q,F,ne,ye,.5):K(q,ne,F,ye,.5);break;case"square":if(ue)c.subVectors(ne,q),u.set(c.y,-c.x),h.addVectors(c,u).add(q),f.subVectors(u,c).add(q),E?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(F,q),u.set(c.y,-c.x),h.addVectors(c,u).add(q),f.subVectors(u,c).add(q);const Ee=s.length;E?(h.toArray(s,Ee-1*3),f.toArray(s,Ee-2*3),f.toArray(s,Ee-4*3)):(h.toArray(s,Ee-2*3),f.toArray(s,Ee-1*3),f.toArray(s,Ee-4*3))}break}}function oe(q){let ne=!1;for(let E=1,ue=q.length-1;E<ue;E++)if(q[E].distanceTo(q[E+1])<i){ne=!0;break}if(!ne)return q;const F=[];F.push(q[0]);for(let E=1,ue=q.length-1;E<ue;E++)q[E].distanceTo(q[E+1])>=i&&F.push(q[E]);return F.push(q[q.length-1]),F}}}class Ab extends on{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new vr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){try{t(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,u,_))return!1;return!0}function n(c,u,h){for(let f=0,d=c.length;f<d;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function i(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,d,g,_=!1,x,p,m,b,y;for(let W=0;W<80-10;W++)u.getUint32(W,!1)==1129270351&&u.getUint8(W+4)==82&&u.getUint8(W+5)==61&&(_=!0,x=new Float32Array(h*3*3),p=u.getUint8(W+6)/255,m=u.getUint8(W+7)/255,b=u.getUint8(W+8)/255,y=u.getUint8(W+9)/255);const S=84,M=12*4+2,w=new Ge,I=new Float32Array(h*3*3),B=new Float32Array(h*3*3);for(let W=0;W<h;W++){const v=S+W*M,R=u.getFloat32(v,!0),O=u.getFloat32(v+4,!0),H=u.getFloat32(v+8,!0);if(_){const k=u.getUint16(v+48,!0);(k&32768)==0?(f=(k&31)/31,d=(k>>5&31)/31,g=(k>>10&31)/31):(f=p,d=m,g=b)}for(let k=1;k<=3;k++){const Y=v+k*12,G=W*3*3+(k-1)*3;I[G]=u.getFloat32(Y,!0),I[G+1]=u.getFloat32(Y+4,!0),I[G+2]=u.getFloat32(Y+8,!0),B[G]=R,B[G+1]=O,B[G+2]=H,_&&(x[G]=f,x[G+1]=d,x[G+2]=g)}}return w.setAttribute("position",new $e(I,3)),w.setAttribute("normal",new $e(B,3)),_&&(w.setAttribute("color",new $e(x,3)),w.hasColors=!0,w.alpha=y),w}function s(c){const u=new Ge,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g;let d=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,_=new RegExp("vertex"+g+g+g,"g"),x=new RegExp("normal"+g+g+g,"g"),p=[],m=[],b=new N;let y,S=0,M=0,w=0;for(;(y=h.exec(c))!==null;){M=w;const I=y[0];for(;(y=f.exec(I))!==null;){let v=0,R=0;const O=y[0];for(;(y=x.exec(O))!==null;)b.x=parseFloat(y[1]),b.y=parseFloat(y[2]),b.z=parseFloat(y[3]),R++;for(;(y=_.exec(O))!==null;)p.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),m.push(b.x,b.y,b.z),v++,w++;R!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+d),v!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+d),d++}const B=M,W=w-M;u.addGroup(B,W,S),S++}return u.setAttribute("position",new He(p,3)),u.setAttribute("normal",new He(m,3)),u}function r(c){return typeof c!="string"?In.decodeText(new Uint8Array(c)):c}function o(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=o(e);return t(l)?i(l):s(r(e))}}class Eb extends on{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new jy(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=In.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new vr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={};if(typeof e=="string")s=e;else if(In.decodeText(new Uint8Array(e,0,4))===Vh){try{r[Oe.KHR_BINARY_GLTF]=new Zy(e)}catch(h){i&&i(h);return}s=r[Oe.KHR_BINARY_GLTF].content}else s=In.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lv(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,r[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],f=l.extensionsRequired||[];switch(h){case Oe.KHR_MATERIALS_UNLIT:r[h]=new ky;break;case Oe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[h]=new $y;break;case Oe.KHR_DRACO_MESH_COMPRESSION:r[h]=new Jy(l,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:r[h]=new Ky;break;case Oe.KHR_MESH_QUANTIZATION:r[h]=new ev;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function By(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class zy{constructor(e){this.parser=e,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new xe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ih(u),c.distance=h;break;case"spot":c=new Rh(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class ky{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return En}extendParams(e,t,n){const i=[];e.color=new xe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(i)}}class Hy{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(o,o)}return Promise.all(s)}}class Gy{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Vy{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Wy{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new xe(o[0],o[1],o[2]),Promise.all(s)}}class Xy{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Yy{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new xe(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture).then(function(l){l.encoding=qe})),Promise.all(s)}}class Qy{constructor(e){this.parser=e,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=n.images[s.source],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r,o)}}class qy{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jy{constructor(e){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,r.ready]).then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new ArrayBuffer(u*h),d=new Uint8Array(o[0],l,c);return r.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})}else return null}}const Vh="glTF",Sr=12,Wh={JSON:1313821514,BIN:5130562};class Zy{constructor(e){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Sr);if(this.header={magic:In.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Sr,i=new DataView(e,Sr);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===Wh.JSON){const l=new Uint8Array(e,Sr+s,r);this.content=In.decodeText(l)}else if(o===Wh.BIN){const l=Sr+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Jy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const u in r){const h=bl[u]||u.toLowerCase();o[h]=r[u]}for(const u in e.attributes){const h=bl[u]||u.toLowerCase();if(r[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Mr[f.componentType];c[h]=d,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],_=l[d];_!==void 0&&(g.normalized=_)}h(f)},o,c)})})}}class Ky{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vl extends _r{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new xe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class $y{constructor(){this.name=Oe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return vl}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new xe(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const r=i.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new xe(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new xe(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const r=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",r)),s.push(n.assignTexture(e,"specularMap",r))}return Promise.all(s)}createMaterial(e){const t=new vl(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=_i,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class ev{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}}class Ci extends Cn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}}Ci.prototype.beforeStart_=Ci.prototype.copySampleValue_;Ci.prototype.afterEnd_=Ci.prototype.copySampleValue_;Ci.prototype.interpolate_=function(a,e,t,n){const i=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=r*2,l=r*3,c=n-e,u=(t-e)/c,h=u*u,f=h*u,d=a*l,g=d-l,_=-2*f+3*h,x=f-h,p=1-_,m=x-h+u;for(let b=0;b!==r;b++){const y=s[g+b+r],S=s[g+b+o]*c,M=s[d+b+r],w=s[d+b]*c;i[b]=p*y+m*S+_*M+x*w}return i};const tv=new Pt;class nv extends Ci{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return tv.fromArray(s).normalize().toArray(s),s}}const Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xh={9728:lt,9729:ct,9984:$a,9985:pc,9986:eo,9987:Yi},Yh={33071:Ft,33648:Gr,10497:Xi},Qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iv={CUBICSPLINE:void 0,LINEAR:Zi,STEP:js},Sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sv(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new _r({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),a.DefaultMaterial}function wr(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rv(a,e,t){let n=!1,i=!1;for(let o=0,l=e.length;o<l;o++){const c=e[o];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(a);const s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];if(n){const u=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):a.attributes.position;s.push(u)}if(i){const u=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):a.attributes.normal;r.push(u)}}return Promise.all([Promise.all(s),Promise.all(r)]).then(function(o){const l=o[0],c=o[1];return n&&(a.morphAttributes.position=l),i&&(a.morphAttributes.normal=c),a.morphTargetsRelative=!0,a})}function av(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ov(a){const e=a.extensions&&a.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+qh(e.attributes):t=a.indices+":"+qh(a.attributes)+":"+a.mode,t}function qh(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Ml(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class lv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new By,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox|^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!1?this.textureLoader=new Oh(this.options.manager):this.textureLoader=new Th(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};wr(s,o,i),Fi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,u]of r.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(In.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=Qh[i.type],c=Mr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,x;if(d&&d!==h){const p=Math.floor(f/d),m="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(m);b||(_=new c(o,p*d,i.count*d/u),b=new vs(_,d/u),t.cache.add(m,b)),x=new bs(b,l,f%d/u,g)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),x=new $e(_,l,g);if(i.sparse!==void 0){const p=Qh.SCALAR,m=Mr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new m(r[1],b,i.sparse.count*p),M=new c(r[2],y,i.sparse.count*l);o!==null&&(x=new $e(x.array.slice(),x.itemSize,x.normalized));for(let w=0,I=S.length;w<I;w++){const B=S[w];if(x.setX(B,M[w*l]),l>=2&&x.setY(B,M[w*l+1]),l>=3&&x.setZ(B,M[w*l+2]),l>=4&&x.setW(B,M[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e],s=t.images[i.source];let r=this.textureLoader;if(s.uri){const o=n.manager.getHandler(s.uri);o!==null&&(r=o)}return this.loadTextureImage(e,s,r)}loadTextureImage(e,t,n){const i=this,s=this.json,r=this.options,o=s.textures[e],l=(t.uri||t.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let u=t.uri||"",h=!1;if(t.bufferView!==void 0)u=i.getDependency("bufferView",t.bufferView).then(function(d){h=!0;const g=new Blob([d],{type:t.mimeType});return u=c.createObjectURL(g),u});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(u).then(function(d){return new Promise(function(g,_){let x=g;n.isImageBitmapLoader===!0&&(x=function(p){const m=new ut(p);m.needsUpdate=!0,g(m)}),n.load(In.resolveURL(d,r.path),x,void 0,_)})}).then(function(d){h===!0&&c.revokeObjectURL(u),d.flipY=!1,o.name&&(d.name=o.name);const _=(s.samplers||{})[o.sampler]||{};return d.magFilter=Xh[_.magFilter]||ct,d.minFilter=Xh[_.minFilter]||Yi,d.wrapS=Yh[_.wrapS]||Xi,d.wrapT=Yh[_.wrapT]||Xi,i.associations.set(d,{textures:e}),d}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",u),null});return this.textureCache[l]=f,f}assignTexture(e,t,n){const i=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[Oe.KHR_TEXTURE_TRANSFORM]){const r=n.extensions!==void 0?n.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(r){const o=i.associations.get(s);s=i.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(s,r),i.associations.set(s,o)}}return e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new $o,mt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ai,mt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return _r}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[Oe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[Oe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else if(l[Oe.KHR_MATERIALS_UNLIT]){const h=i[Oe.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=mi);const u=s.alphaMode||Sl.OPAQUE;if(u===Sl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Sl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==En&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new te(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&r!==En&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==En&&(o.emissive=new xe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==En&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let h;return r===vl?h=i[Oe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):h=new r(o),s.name&&(h.name=s.name),h.map&&(h.map.encoding=qe),h.emissiveMap&&(h.emissiveMap.encoding=qe),Fi(h,s),t.associations.set(h,{materials:e}),s.extensions&&wr(i,h,s),h})}createUniqueName(e){const t=Xe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Zh(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=ov(c),h=i[u];if(h)r.push(h.promise);else{let f;c.extensions&&c.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Zh(new Ge,c,t),i[u]={primitive:c,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?sv(this.cache):this.getDependency("material",r[l].material);o.push(u)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],x=r[d];let p;const m=c[d];if(x.mode===Nn.TRIANGLES||x.mode===Nn.TRIANGLE_STRIP||x.mode===Nn.TRIANGLE_FAN||x.mode===void 0)p=s.isSkinnedMesh===!0?new qo(_,m):new St(_,m),p.isSkinnedMesh===!0&&!p.geometry.attributes.skinWeight.normalized&&p.normalizeSkinWeights(),x.mode===Nn.TRIANGLE_STRIP?p.geometry=Jh(p.geometry,dp):x.mode===Nn.TRIANGLE_FAN&&(p.geometry=Jh(p.geometry,Oc));else if(x.mode===Nn.LINES)p=new hr(_,m);else if(x.mode===Nn.LINE_STRIP)p=new Sa(_,m);else if(x.mode===Nn.LINE_LOOP)p=new ah(_,m);else if(x.mode===Nn.POINTS)p=new lh(_,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&av(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Fi(p,s),x.extensions&&wr(i,p,x),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new ei;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(Cp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ms(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,g=d.node!==void 0?d.node:d.id,_=n.parameters!==void 0?n.parameters[f.input]:f.input,x=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",_)),r.push(this.getDependency("accessor",x)),o.push(f),l.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],_=[];for(let p=0,m=u.length;p<m;p++){const b=u[p],y=h[p],S=f[p],M=d[p],w=g[p];if(b===void 0)continue;b.updateMatrix(),b.matrixAutoUpdate=!0;let I;switch(ii[w.path]){case ii.weights:I=xr;break;case ii.rotation:I=Pi;break;case ii.position:case ii.scale:default:I=yr;break}const B=b.name?b.name:b.uuid,W=M.interpolation!==void 0?iv[M.interpolation]:Zi,v=[];ii[w.path]===ii.weights?b.traverse(function(O){O.morphTargetInfluences&&v.push(O.name?O.name:O.uuid)}):v.push(B);let R=S.array;if(S.normalized){const O=Ml(R.constructor),H=new Float32Array(R.length);for(let k=0,Y=R.length;k<Y;k++)H[k]=R[k]*O;R=H}for(let O=0,H=v.length;O<H;O++){const k=new I(v[O]+"."+ii[w.path],y.array,R,W);M.interpolation==="CUBICSPLINE"&&(k.createInterpolant=function(G){const X=this instanceof Pi?nv:Ci;return new X(this.times,this.values,this.getValueSize()/3,G)},k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),_.push(k)}}const x=n.name?n.name:"animation_"+e;return new fl(x,void 0,_)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(!!o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(s.isBone===!0?l=new jo:o.length>1?l=new ei:o.length===1?l=o[0]:l=new We,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(s.name&&(l.userData.name=s.name,l.name=r),Fi(l,s),s.extensions&&wr(n,l,s),s.matrix!==void 0){const c=new Me;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,r=new ei;i.name&&(r.name=s.createUniqueName(i.name)),Fi(r,i),i.extensions&&wr(n,r,i);const o=i.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(jh(o[c],r,t,s));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof mt||f instanceof ut)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}}function jh(a,e,t,n){const i=t.nodes[a];return n.getDependency("node",a).then(function(s){if(i.skin===void 0)return s;let r;return n.getDependency("skin",i.skin).then(function(o){r=o;const l=[];for(let c=0,u=r.joints.length;c<u;c++)l.push(n.getDependency("node",r.joints[c]));return Promise.all(l)}).then(function(o){return s.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,f=o.length;h<f;h++){const d=o[h];if(d){c.push(d);const g=new Me;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[h])}l.bind(new Zo(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(i.children){const o=i.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];r.push(jh(u,s,t,n))}}return Promise.all(r)})}function cv(a,e,t){const n=e.attributes,i=new Qt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){const u=Ml(Mr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Ml(Mr[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Mi;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function Zh(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=bl[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return Fi(a,e),cv(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?rv(a,e.targets,t):a})}function Jh(a,e){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Oc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2==0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s}var Kh={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class Ia{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const uv=new ms(-1,1,1,-1,0,1),wl=new Ge;wl.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3));wl.setAttribute("uv",new He([0,2,0,0,2,0],2));class hv{constructor(e){this._mesh=new St(wl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $h extends Ia{constructor(e,t){super();this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nu.clone(e.uniforms),this.material=new Ln({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new hv(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class ef extends Ia{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class fv extends Ia{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Lb{constructor(e,t){if(this.renderer=e,t===void 0){const n={minFilter:ct,magFilter:ct,format:vt},i=e.getSize(new te);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Kh===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),$h===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new $h(Kh),this.clock=new vy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ef!==void 0&&(r instanceof ef?n=!0:r instanceof fv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new ms(-1,1,1,-1,0,1);const tf=new Ge;tf.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3));tf.setAttribute("uv",new He([0,2,0,0,2,0],2));class Pb extends Ia{constructor(e,t,n,i,s){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=i}}const Rb={uniforms:{tDiffuse:{value:null},resolution:{value:new te(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		#define FXAA_PC 1
		#define FXAA_GLSL_100 1
		#define FXAA_QUALITY_PRESET 12

		#define FXAA_GREEN_AS_LUMA 1

		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_PC_CONSOLE
				//
				// The console algorithm for PC is included
				// for developers targeting really low spec machines.
				// Likely better to just run FXAA_PC, and use a really low preset.
				//
				#define FXAA_PC_CONSOLE 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_120
				#define FXAA_GLSL_120 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_130
				#define FXAA_GLSL_130 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_3
				#define FXAA_HLSL_3 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_4
				#define FXAA_HLSL_4 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_5
				#define FXAA_HLSL_5 0
		#endif
		/*==========================================================================*/
		#ifndef FXAA_GREEN_AS_LUMA
				//
				// For those using non-linear color,
				// and either not able to get luma in alpha, or not wanting to,
				// this enables FXAA to run using green as a proxy for luma.
				// So with this enabled, no need to pack luma in alpha.
				//
				// This will turn off AA on anything which lacks some amount of green.
				// Pure red and blue or combination of only R and B, will get no AA.
				//
				// Might want to lower the settings for both,
				//		fxaaConsoleEdgeThresholdMin
				//		fxaaQualityEdgeThresholdMin
				// In order to insure AA does not get turned off on colors
				// which contain a minor amount of green.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_GREEN_AS_LUMA 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_EARLY_EXIT
				//
				// Controls algorithm's early exit path.
				// On PS3 turning this ON adds 2 cycles to the shader.
				// On 360 turning this OFF adds 10ths of a millisecond to the shader.
				// Turning this off on console will result in a more blurry image.
				// So this defaults to on.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_EARLY_EXIT 1
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_DISCARD
				//
				// Only valid for PC OpenGL currently.
				// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
				//
				// 1 = Use discard on pixels which don't need AA.
				//		 For APIs which enable concurrent TEX+ROP from same surface.
				// 0 = Return unchanged color on pixels which don't need AA.
				//
				#define FXAA_DISCARD 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_FAST_PIXEL_OFFSET
				//
				// Used for GLSL 120 only.
				//
				// 1 = GL API supports fast pixel offsets
				// 0 = do not use fast pixel offsets
				//
				#ifdef GL_EXT_gpu_shader4
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifndef FXAA_FAST_PIXEL_OFFSET
						#define FXAA_FAST_PIXEL_OFFSET 0
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GATHER4_ALPHA
				//
				// 1 = API supports gather4 on alpha channel.
				// 0 = API does not support gather4 on alpha channel.
				//
				#if (FXAA_HLSL_5 == 1)
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifndef FXAA_GATHER4_ALPHA
						#define FXAA_GATHER4_ALPHA 0
				#endif
		#endif


		/*============================================================================
														FXAA QUALITY - TUNING KNOBS
		------------------------------------------------------------------------------
		NOTE the other tuning knobs are now in the shader function inputs!
		============================================================================*/
		#ifndef FXAA_QUALITY_PRESET
				//
				// Choose the quality preset.
				// This needs to be compiled into the shader as it effects code.
				// Best option to include multiple presets is to
				// in each shader define the preset, then include this file.
				//
				// OPTIONS
				// -----------------------------------------------------------------------
				// 10 to 15 - default medium dither (10=fastest, 15=highest quality)
				// 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
				// 39			 - no dither, very expensive
				//
				// NOTES
				// -----------------------------------------------------------------------
				// 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
				// 13 = about same speed as FXAA 3.9 and better than 12
				// 23 = closest to FXAA 3.9 visually and performance wise
				//	_ = the lowest digit is directly related to performance
				// _	= the highest digit is directly related to style
				//
				#define FXAA_QUALITY_PRESET 12
		#endif


		/*============================================================================

															 FXAA QUALITY - PRESETS

		============================================================================*/

		/*============================================================================
												 FXAA QUALITY - MEDIUM DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 10)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 3.0
				#define FXAA_QUALITY_P2 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 11)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 3.0
				#define FXAA_QUALITY_P3 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 12)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 4.0
				#define FXAA_QUALITY_P4 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 13)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 4.0
				#define FXAA_QUALITY_P5 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 14)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 4.0
				#define FXAA_QUALITY_P6 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 15)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 12.0
		#endif

		/*============================================================================
												 FXAA QUALITY - LOW DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 20)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 2.0
				#define FXAA_QUALITY_P2 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 21)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 22)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 23)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 24)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 3.0
				#define FXAA_QUALITY_P6 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 25)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 26)
				#define FXAA_QUALITY_PS 9
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 4.0
				#define FXAA_QUALITY_P8 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 27)
				#define FXAA_QUALITY_PS 10
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 4.0
				#define FXAA_QUALITY_P9 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 28)
				#define FXAA_QUALITY_PS 11
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 4.0
				#define FXAA_QUALITY_P10 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 29)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif

		/*============================================================================
												 FXAA QUALITY - EXTREME QUALITY
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 39)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.0
				#define FXAA_QUALITY_P2 1.0
				#define FXAA_QUALITY_P3 1.0
				#define FXAA_QUALITY_P4 1.0
				#define FXAA_QUALITY_P5 1.5
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif



		/*============================================================================

																		API PORTING

		============================================================================*/
		#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
				#define FxaaBool bool
				#define FxaaDiscard discard
				#define FxaaFloat float
				#define FxaaFloat2 vec2
				#define FxaaFloat3 vec3
				#define FxaaFloat4 vec4
				#define FxaaHalf float
				#define FxaaHalf2 vec2
				#define FxaaHalf3 vec3
				#define FxaaHalf4 vec4
				#define FxaaInt2 ivec2
				#define FxaaSat(x) clamp(x, 0.0, 1.0)
				#define FxaaTex sampler2D
		#else
				#define FxaaBool bool
				#define FxaaDiscard clip(-1)
				#define FxaaFloat float
				#define FxaaFloat2 float2
				#define FxaaFloat3 float3
				#define FxaaFloat4 float4
				#define FxaaHalf half
				#define FxaaHalf2 half2
				#define FxaaHalf3 half3
				#define FxaaHalf4 half4
				#define FxaaSat(x) saturate(x)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_100 == 1)
			#define FxaaTexTop(t, p) texture2D(t, p, 0.0)
			#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_120 == 1)
				// Requires,
				//	#version 120
				// And at least,
				//	#extension GL_EXT_gpu_shader4 : enable
				//	(or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
				#define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)
				#if (FXAA_FAST_PIXEL_OFFSET == 1)
						#define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)
				#else
						#define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)
				#endif
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_130 == 1)
				// Requires "#version 130" or better
				#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
				#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_3 == 1)
				#define FxaaInt2 float2
				#define FxaaTex sampler2D
				#define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
				#define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_4 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_5 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
				#define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
				#define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
				#define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
				#define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
		#endif


		/*============================================================================
											 GREEN AS LUMA OPTION SUPPORT FUNCTION
		============================================================================*/
		#if (FXAA_GREEN_AS_LUMA == 0)
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
		#else
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
		#endif




		/*============================================================================

																 FXAA3 QUALITY - PC

		============================================================================*/
		#if (FXAA_PC == 1)
		/*--------------------------------------------------------------------------*/
		FxaaFloat4 FxaaPixelShader(
				//
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy} = center of pixel
				FxaaFloat2 pos,
				//
				// Used only for FXAA Console, and not used on the 360 version.
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy_} = upper left of pixel
				// {_zw} = lower right of pixel
				FxaaFloat4 fxaaConsolePosPos,
				//
				// Input color texture.
				// {rgb_} = color in linear or perceptual color space
				// if (FXAA_GREEN_AS_LUMA == 0)
				//		 {__a} = luma in perceptual color space (not linear)
				FxaaTex tex,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 2nd sampler.
				// This sampler needs to have an exponent bias of -1.
				FxaaTex fxaaConsole360TexExpBiasNegOne,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 3nd sampler.
				// This sampler needs to have an exponent bias of -2.
				FxaaTex fxaaConsole360TexExpBiasNegTwo,
				//
				// Only used on FXAA Quality.
				// This must be from a constant/uniform.
				// {x_} = 1.0/screenWidthInPixels
				// {_y} = 1.0/screenHeightInPixels
				FxaaFloat2 fxaaQualityRcpFrame,
				//
				// Only used on FXAA Console.
				// This must be from a constant/uniform.
				// This effects sub-pixel AA quality and inversely sharpness.
				//	 Where N ranges between,
				//		 N = 0.50 (default)
				//		 N = 0.33 (sharper)
				// {x__} = -N/screenWidthInPixels
				// {_y_} = -N/screenHeightInPixels
				// {_z_} =	N/screenWidthInPixels
				// {__w} =	N/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt,
				//
				// Only used on FXAA Console.
				// Not used on 360, but used on PS3 and PC.
				// This must be from a constant/uniform.
				// {x__} = -2.0/screenWidthInPixels
				// {_y_} = -2.0/screenHeightInPixels
				// {_z_} =	2.0/screenWidthInPixels
				// {__w} =	2.0/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt2,
				//
				// Only used on FXAA Console.
				// Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
				// This must be from a constant/uniform.
				// {x__} =	8.0/screenWidthInPixels
				// {_y_} =	8.0/screenHeightInPixels
				// {_z_} = -4.0/screenWidthInPixels
				// {__w} = -4.0/screenHeightInPixels
				FxaaFloat4 fxaaConsole360RcpFrameOpt2,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_SUBPIX define.
				// It is here now to allow easier tuning.
				// Choose the amount of sub-pixel aliasing removal.
				// This can effect sharpness.
				//	 1.00 - upper limit (softer)
				//	 0.75 - default amount of filtering
				//	 0.50 - lower limit (sharper, less sub-pixel aliasing removal)
				//	 0.25 - almost off
				//	 0.00 - completely off
				FxaaFloat fxaaQualitySubpix,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// The minimum amount of local contrast required to apply algorithm.
				//	 0.333 - too little (faster)
				//	 0.250 - low quality
				//	 0.166 - default
				//	 0.125 - high quality
				//	 0.063 - overkill (slower)
				FxaaFloat fxaaQualityEdgeThreshold,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				//	 0.0833 - upper limit (default, the start of visible unfiltered edges)
				//	 0.0625 - high quality (faster)
				//	 0.0312 - visible limit (slower)
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaQualityEdgeThresholdMin,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only three safe values here: 2 and 4 and 8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// For all other platforms can be a non-power of two.
				//	 8.0 is sharper (default!!!)
				//	 4.0 is softer
				//	 2.0 is really soft (good only for vector graphics inputs)
				FxaaFloat fxaaConsoleEdgeSharpness,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only two safe values here: 1/4 and 1/8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// The console setting has a different mapping than the quality setting.
				// Other platforms can use other values.
				//	 0.125 leaves less aliasing, but is softer (default!!!)
				//	 0.25 leaves more aliasing, and is sharper
				FxaaFloat fxaaConsoleEdgeThreshold,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				// The console setting has a different mapping than the quality setting.
				// This only applies when FXAA_EARLY_EXIT is 1.
				// This does not apply to PS3,
				// PS3 was simplified to avoid more shader instructions.
				//	 0.06 - faster but more aliasing in darks
				//	 0.05 - default
				//	 0.04 - slower and less aliasing in darks
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaConsoleEdgeThresholdMin,
				//
				// Extra constants for 360 FXAA Console only.
				// Use zeros or anything else for other platforms.
				// These must be in physical constant registers and NOT immediates.
				// Immediates will result in compiler un-optimizing.
				// {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
				FxaaFloat4 fxaaConsole360ConstDir
		) {
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posM;
				posM.x = pos.x;
				posM.y = pos.y;
				#if (FXAA_GATHER4_ALPHA == 1)
						#if (FXAA_DISCARD == 0)
								FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
								#if (FXAA_GREEN_AS_LUMA == 0)
										#define lumaM rgbyM.w
								#else
										#define lumaM rgbyM.y
								#endif
						#endif
						#if (FXAA_GREEN_AS_LUMA == 0)
								FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
						#else
								FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
						#endif
						#if (FXAA_DISCARD == 1)
								#define lumaM luma4A.w
						#endif
						#define lumaE luma4A.z
						#define lumaS luma4A.x
						#define lumaSE luma4A.y
						#define lumaNW luma4B.w
						#define lumaN luma4B.z
						#define lumaW luma4B.x
				#else
						FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
						#if (FXAA_GREEN_AS_LUMA == 0)
								#define lumaM rgbyM.w
						#else
								#define lumaM rgbyM.y
						#endif
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
						#endif
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat maxSM = max(lumaS, lumaM);
				FxaaFloat minSM = min(lumaS, lumaM);
				FxaaFloat maxESM = max(lumaE, maxSM);
				FxaaFloat minESM = min(lumaE, minSM);
				FxaaFloat maxWN = max(lumaN, lumaW);
				FxaaFloat minWN = min(lumaN, lumaW);
				FxaaFloat rangeMax = max(maxWN, maxESM);
				FxaaFloat rangeMin = min(minWN, minESM);
				FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
				FxaaFloat range = rangeMax - rangeMin;
				FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
				FxaaBool earlyExit = range < rangeMaxClamped;
		/*--------------------------------------------------------------------------*/
				if(earlyExit)
						#if (FXAA_DISCARD == 1)
								FxaaDiscard;
						#else
								return rgbyM;
						#endif
		/*--------------------------------------------------------------------------*/
				#if (FXAA_GATHER4_ALPHA == 0)
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
						#endif
				#else
						FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
						FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNS = lumaN + lumaS;
				FxaaFloat lumaWE = lumaW + lumaE;
				FxaaFloat subpixRcpRange = 1.0/range;
				FxaaFloat subpixNSWE = lumaNS + lumaWE;
				FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
				FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNESE = lumaNE + lumaSE;
				FxaaFloat lumaNWNE = lumaNW + lumaNE;
				FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
				FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNWSW = lumaNW + lumaSW;
				FxaaFloat lumaSWSE = lumaSW + lumaSE;
				FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
				FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
				FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
				FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
				FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
				FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
		/*--------------------------------------------------------------------------*/
				FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
				FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
				FxaaBool horzSpan = edgeHorz >= edgeVert;
				FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
		/*--------------------------------------------------------------------------*/
				if(!horzSpan) lumaN = lumaW;
				if(!horzSpan) lumaS = lumaE;
				if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
				FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
		/*--------------------------------------------------------------------------*/
				FxaaFloat gradientN = lumaN - lumaM;
				FxaaFloat gradientS = lumaS - lumaM;
				FxaaFloat lumaNN = lumaN + lumaM;
				FxaaFloat lumaSS = lumaS + lumaM;
				FxaaBool pairN = abs(gradientN) >= abs(gradientS);
				FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
				if(pairN) lengthSign = -lengthSign;
				FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posB;
				posB.x = posM.x;
				posB.y = posM.y;
				FxaaFloat2 offNP;
				offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
				offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
				if(!horzSpan) posB.x += lengthSign * 0.5;
				if( horzSpan) posB.y += lengthSign * 0.5;
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posN;
				posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
				posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
				FxaaFloat2 posP;
				posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
				posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
				FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
				FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
				FxaaFloat subpixE = subpixC * subpixC;
				FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
		/*--------------------------------------------------------------------------*/
				if(!pairN) lumaNN = lumaSS;
				FxaaFloat gradientScaled = gradient * 1.0/4.0;
				FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
				FxaaFloat subpixF = subpixD * subpixE;
				FxaaBool lumaMLTZero = lumaMM < 0.0;
		/*--------------------------------------------------------------------------*/
				lumaEndN -= lumaNN * 0.5;
				lumaEndP -= lumaNN * 0.5;
				FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
				FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
				if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
				if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
				FxaaBool doneNP = (!doneN) || (!doneP);
				if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
				if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
		/*--------------------------------------------------------------------------*/
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 3)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 4)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 5)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 6)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
		/*--------------------------------------------------------------------------*/
														#if (FXAA_QUALITY_PS > 7)
														if(doneNP) {
																if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
																if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
																if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
																if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
																doneN = abs(lumaEndN) >= gradientScaled;
																doneP = abs(lumaEndP) >= gradientScaled;
																if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
																if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
																doneNP = (!doneN) || (!doneP);
																if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
																if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
		/*--------------------------------------------------------------------------*/
				#if (FXAA_QUALITY_PS > 8)
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 9)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 10)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 11)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 12)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
				#endif
		/*--------------------------------------------------------------------------*/
														}
														#endif
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
		/*--------------------------------------------------------------------------*/
				FxaaFloat dstN = posM.x - posN.x;
				FxaaFloat dstP = posP.x - posM.x;
				if(!horzSpan) dstN = posM.y - posN.y;
				if(!horzSpan) dstP = posP.y - posM.y;
		/*--------------------------------------------------------------------------*/
				FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
				FxaaFloat spanLength = (dstP + dstN);
				FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
				FxaaFloat spanLengthRcp = 1.0/spanLength;
		/*--------------------------------------------------------------------------*/
				FxaaBool directionN = dstN < dstP;
				FxaaFloat dst = min(dstN, dstP);
				FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
				FxaaFloat subpixG = subpixF * subpixF;
				FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
				FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
		/*--------------------------------------------------------------------------*/
				FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
				FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
				if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
				if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
				#if (FXAA_DISCARD == 1)
						return FxaaTexTop(tex, posM);
				#else
						return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
				#endif
		}
		/*==========================================================================*/
		#endif

		void main() {
			gl_FragColor = FxaaPixelShader(
				vUv,
				vec4(0.0),
				tDiffuse,
				tDiffuse,
				tDiffuse,
				resolution,
				vec4(0.0),
				vec4(0.0),
				vec4(0.0),
				0.75,
				0.166,
				0.0833,
				0.0,
				0.0,
				0.0,
				vec4(0.0)
			);

			// TODO avoid querying texture twice for same texel
			gl_FragColor.a = texture2D(tDiffuse, vUv).a;
		}`},Cb={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

		// sample the source
			vec4 cTextureScreen = texture2D( tDiffuse, vUv );

		// make some noise
			float dx = rand( vUv + time );

		// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

		// get us a sine and cosine
			vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );

		// add scanlines
			cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;

		// interpolate between source and result by intensity
			cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );

		// convert to grayscale if desired
			if( grayscale ) {

				cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );

			}

			gl_FragColor =  vec4( cResult, cTextureScreen.a );

		}`},Fb={uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`},Ib={uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`};function Dn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function nf(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fs={duration:.5,overwrite:!1,delay:0},Tl,Zt=1e8,Ze=1/Zt,Al=Math.PI*2,dv=Al/4,pv=0,sf=Math.sqrt,mv=Math.cos,gv=Math.sin,_t=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},Un=function(e){return typeof e=="number"},El=function(e){return typeof e=="undefined"},On=function(e){return typeof e=="object"},Nt=function(e){return e!==!1},rf=function(){return typeof window!="undefined"},Na=function(e){return xt(e)||_t(e)},af=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Et=Array.isArray,Ll=/(?:-?\.?\d|\.)+/gi,of=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lf=/[+-]=-?[.\d]+/,cf=/[^,'"\[\]\s]+/gi,_v=/[\d.+\-=]+(?:e[-+]\d*)*/i,st,_n,Rl,Cl,Wt={},Da={},uf,hf=function(e){return(Da=Ns(e,Wt))&&yn},Fl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ua=function(e,t){return!t&&console.warn(e)},ff=function(e,t){return e&&(Wt[e]=t)&&Da&&(Da[e]=t)||Wt},Tr=function(){return 0},Il={},si=[],Nl={},df,Xt={},Dl={},pf=30,Oa=[],Ul="",Ol=function(e){var t=e[0],n,i;if(On(t)||xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Oa.length;i--&&!Oa[i].targetTest(t););n=Oa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Hf(e[i],n)))||e.splice(i,1);return e},Ii=function(e){return e._gsap||Ol($t(e))[0]._gsap},mf=function(e,t,n){return(n=e[t])&&xt(n)?e[t]():El(n)&&e.getAttribute&&e.getAttribute(t)||n},Dt=function(e,t){return(e=e.split(",")).forEach(t)||e},ft=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},xv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ba=function(){var e=si.length,t=si.slice(0),n,i;for(Nl={},si.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gf=function(e,t,n,i){si.length&&Ba(),e.render(t,n,i),si.length&&Ba()},_f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cf).length<2?t:_t(e)?e.trim():e},xf=function(e){return e},Jt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ns=function(e,t){for(var n in t)e[n]=t[n];return e},yf=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=On(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},za=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ar=function(e){var t=e.parent||st,n=e.keyframes?yv(Et(e.keyframes)):Jt;if(Nt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},bv=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e[i],o;if(s)for(o=t[s];r&&r[s]>o;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},ka=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Bn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ni=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Sv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mv=function a(e){return!e||e._ts&&a(e.parent)},vf=function(e){return e._repeat?Ds(e._tTime,e=e.duration()+e._rDelay)*e:0},Ds=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ha=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ga=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ze)||0))},bf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ga(e),n._dirty||Ni(n,e)),e},Sf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Ha(e.rawTime(),t),(!t._dur||Lr(0,t.totalDuration(),n)-t._tTime>Ze)&&t.render(n,!0)),Ni(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ze}},xn=function(e,t,n,i){return t.parent&&Bn(t),t._start=Lt((Un(n)?n:n||e!==st?Kt(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bv(e,t,"_first","_last",e._sort?"_start":0),Bl(t)||(e._recent=t),i||Sf(e,t),e},Mf=function(e,t){return(Wt.ScrollTrigger||Fl("scrollTrigger",t))&&Wt.ScrollTrigger.create(t,e)},wf=function(e,t,n,i){if(Yv(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&df!==tn.frame)return si.push(e),e._lazy=[t,i],1},wv=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Bl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Tv=function(e,t,n,i){var s=e.ratio,r=t<0||!t&&(!e._start&&wv(e)&&!(!e._initted&&Bl(e))||(e._ts<0||e._dp._ts<0)&&!Bl(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Lr(0,e._tDur,t),u=Ds(l,o),e._yoyo&&u&1&&(r=1-r),u!==Ds(e._tTime,o)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||i||e._zTime===Ze||!t&&e._zTime){if(!e._initted&&wf(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?Ze:0),n||(n=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=l,c=e._pt;c;)c.r(r,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&en(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&en(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&Bn(e,1),n||(en(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Av=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Us=function(e,t,n,i){var s=e._repeat,r=Lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:Lt(r*(s+1)+e._rDelay*s):r,o>0&&!i?bf(e,e._tTime=e._tDur*o):e.parent&&Ga(e),n||Ni(e.parent,e),e},Tf=function(e){return e instanceof Ot?Ni(e):Us(e,e._dur)},Ev={_start:0,endTime:Tr,totalDuration:Tr},Kt=function a(e,t,n){var i=e.labels,s=e._recent||Ev,r=e.duration()>=Zt?s.endTime(!1):e._dur,o,l,c;return _t(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=r),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Et(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:r+l)):t==null?r:+t},Er=function(e,t,n){var i=Un(t[1]),s=(i?2:1)+(e<2?0:1),r=t[s],o,l;if(i&&(r.duration=t[1]),r.parent=n,e){for(o=r,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Nt(l.vars.inherit)&&l.parent;r.immediateRender=Nt(o.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new yt(t[0],r,t[s+1])},ri=function(e,t){return e||e===0?t(e):t},Lr=function(e,t,n){return n<e?e:n>t?t:n},Ut=function(e,t){return!_t(e)||!(t=_v.exec(e))?"":e.substr(t.index+t[0].length)},Lv=function(e,t,n){return ri(n,function(i){return Lr(e,t,i)})},zl=[].slice,Af=function(e,t){return e&&On(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&On(e[0]))&&!e.nodeType&&e!==_n},Pv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return _t(i)&&!t||Af(i,1)?(s=n).push.apply(s,$t(i)):n.push(i)})||n},$t=function(e,t,n){return _t(e)&&!n&&(Rl||!Bs())?zl.call((t||Cl).querySelectorAll(e),0):Et(e)?Pv(e,n):Af(e)?zl.call(e,0):e?[e]:[]},Rv=function(e){return e=$t(e)[0]||Ua("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $t(t,n.querySelectorAll?n:n===e?Ua("Invalid scope")||Cl.createElement("div"):e)}},Ef=function(e){return e.sort(function(){return .5-Math.random()})},Lf=function(e){if(xt(e))return e;var t=On(e)?e:{each:e},n=Di(t.ease),i=t.from||0,s=parseFloat(t.base)||0,r={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return _t(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,x=r[_],p,m,b,y,S,M,w,I,B;if(!x){if(B=t.grid==="auto"?0:(t.grid||[1,Zt])[1],!B){for(w=-Zt;w<(w=g[B++].getBoundingClientRect().left)&&B<_;);B--}for(x=r[_]=[],p=l?Math.min(B,_)*u-.5:i%B,m=B===Zt?0:l?_*h/B-.5:i/B|0,w=0,I=Zt,M=0;M<_;M++)b=M%B-p,y=m-(M/B|0),x[M]=S=c?Math.abs(c==="y"?y:b):sf(b*b+y*y),S>w&&(w=S),S<I&&(I=S);i==="random"&&Ef(x),x.max=w-I,x.min=I,x.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(B>_?_-1:c?c==="y"?_/B:B:Math.max(B,_/B))||0)*(i==="edges"?-1:1),x.b=_<0?s-_:s,x.u=Ut(t.amount||t.each)||0,n=n&&_<0?Bf(n):n}return _=(x[f]-x.min)/x.max||0,Lt(x.b+(n?n(_):_)*x.v)+x.u}},kl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/e)*e*t;return(i-i%1)/t+(Un(n)?0:Ut(n))}},Pf=function(e,t){var n=Et(e),i,s;return!n&&On(e)&&(i=n=e.radius||Zt,e.values?(e=$t(e.values),(s=!Un(e[0]))&&(i*=i)):e=kl(e.increment)),ri(t,n?xt(e)?function(r){return s=e(r),Math.abs(s-r)<=i?s:r}:function(r){for(var o=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=Zt,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:r,s||u===r||Un(r)?u:u+Ut(r)}:kl(e))},Rf=function(e,t,n,i){return ri(Et(e)?!t:n===!0?!!(n=0):!i,function(){return Et(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Cv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,r){return r(s)},i)}},Fv=function(e,t){return function(n){return e(parseFloat(n))+(t||Ut(n))}},Iv=function(e,t,n){return Ff(e,t,0,1,n)},Cf=function(e,t,n){return ri(n,function(i){return e[~~t(i)]})},Nv=function a(e,t,n){var i=t-e;return Et(e)?Cf(e,a(0,e.length),t):ri(n,function(s){return(i+(s-e)%i)%i+e})},Dv=function a(e,t,n){var i=t-e,s=i*2;return Et(e)?Cf(e,a(0,e.length-1),t):ri(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>i?s-r:r)})},Pr=function(e){for(var t=0,n="",i,s,r,o;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,r-i-7).match(o?cf:Ll),n+=e.substr(t,i-t)+Rf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},Ff=function(e,t,n,i,s){var r=t-e,o=i-n;return ri(s,function(l){return n+((l-e)/r*o||0)})},Uv=function a(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var r=_t(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(Et(e)&&!Et(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Ns(Et(e)?[]:{},e));if(!u){for(l in t)Wl.call(o,e,l,"get",t[l]);s=function(g){return Ql(g,o)||(r?e.p:e)}}}return ri(n,s)},If=function(e,t,n){var i=e.labels,s=Zt,r,o,l;for(r in i)o=i[r]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=r,s=o);return l},en=function(e,t,n){var i=e.vars,s=i[t],r,o;if(!!s)return r=i[t+"Params"],o=i.callbackScope||e,n&&si.length&&Ba(),r?s.apply(o,r):s.call(o)},Rr=function(e){return Bn(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&en(e,"onInterrupt"),e},Os,Ov=function(e){e=!e.name&&e.default||e;var t=e.name,n=xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Tr,render:Ql,add:Wl,kill:$v,modifier:Kv,rawVars:0},r={targetTest:0,get:0,getSetter:Yl,aliases:{},register:0};if(Bs(),e!==i){if(Xt[t])return;Jt(i,Jt(za(e,s),r)),Ns(i.prototype,Ns(s,za(e,r))),Xt[i.prop=t]=i,e.targetTest&&(Oa.push(i),Il[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ff(t,i),e.register&&e.register(yn,i,Bt)},Je=255,Cr={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},Hl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Je+.5|0},Nf=function(e,t,n){var i=e?Un(e)?[e>>16,e>>8&Je,e&Je]:0:Cr.black,s,r,o,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Cr[e])i=Cr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+s+s+r+r+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Je,i&Je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Je,e&Je]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ll),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,r=u<=.5?u*(c+1):u+c-u*c,s=u*2-r,i.length>3&&(i[3]*=1),i[0]=Hl(l+1/3,s,r),i[1]=Hl(l,s,r),i[2]=Hl(l-1/3,s,r);else if(~e.indexOf("="))return i=e.match(of),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ll)||Cr.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Je,r=i[1]/Je,o=i[2]/Je,h=Math.max(s,r,o),f=Math.min(s,r,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(r-o)/d+(r<o?6:0):h===r?(o-s)/d+2:(s-r)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Df=function(e){var t=[],n=[],i=-1;return e.split(ai).forEach(function(s){var r=s.match(Is)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},Uf=function(e,t,n){var i="",s=(e+i).match(ai),r=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Nf(f,t,1))&&r+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Df(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ai,"1").split(Is),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ai),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},ai=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Cr)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),Bv=/hsl[a]?\(/,Of=function(e){var t=e.join(" "),n;if(ai.lastIndex=0,ai.test(t))return n=Bv.test(t),e[1]=Uf(e[1],n),e[0]=Uf(e[0],n,Df(e[1])),!0},Va,tn=function(){var a=Date.now,e=500,t=33,n=a(),i=n,s=1e3/240,r=s,o=[],l,c,u,h,f,d,g=function _(x){var p=a()-i,m=x===!0,b,y,S,M;if(p>e&&(n+=p-t),i+=p,S=i-n,b=S-r,(b>0||m)&&(M=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,r+=b+(b>=s?4:s-b),y=1),m||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](S,f,M,x)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(x){return f/(1e3/(x||60))},wake:function(){uf&&(!Rl&&rf()&&(_n=Rl=window,Cl=_n.document||{},Wt.gsap=yn,(_n.gsapVersions||(_n.gsapVersions=[])).push(yn.version),hf(Da||_n.GreenSockGlobals||!_n.gsap&&_n||{}),u=_n.requestAnimationFrame),l&&h.sleep(),c=u||function(x){return setTimeout(x,r-h.time*1e3+1|0)},Va=1,g(2))},sleep:function(){(u?_n.cancelAnimationFrame:clearTimeout)(l),Va=0,c=Tr},lagSmoothing:function(x,p){e=x||1/Ze,t=Math.min(p,e,0)},fps:function(x){s=1e3/(x||240),r=h.time*1e3+s},add:function(x){o.indexOf(x)<0&&o.push(x),Bs()},remove:function(x,p){~(p=o.indexOf(x))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),Bs=function(){return!Va&&tn.wake()},Be={},zv=/^[\d.\-M][\d.\-,\s]/,kv=/["']/g,Hv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,r=n.length,o,l,c;s<r;s++)l=n[s],o=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(kv,"").trim():+c,i=l.substr(o+1).trim();return t},Gv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Vv=function(e){var t=(e+"").split("("),n=Be[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Hv(t[1])]:Gv(e).split(",").map(_f)):Be._CE&&zv.test(e)?Be._CE("",e):n},Bf=function(e){return function(t){return 1-e(1-t)}},zf=function a(e,t){for(var n=e._first,i;n;)n instanceof Ot?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Di=function(e,t){return e&&(xt(e)?e:Be[e]||Vv(e))||t},Ui=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},r;return Dt(e,function(o){Be[o]=Wt[o]=s,Be[r=o.toLowerCase()]=n;for(var l in s)Be[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Be[o+"."+l]=s[l]}),s},kf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Gl=function a(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/Al*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*gv((u-r)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:kf(o);return s=Al/s,l.config=function(c,u){return a(e,c,u)},l},Vl=function a(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:kf(n);return i.config=function(s){return a(e,s)},i};Dt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Ui(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Be.Linear.easeNone=Be.none=Be.Linear.easeIn;Ui("Elastic",Gl("in"),Gl("out"),Gl());(function(a,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Ui("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Ui("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Ui("Circ",function(a){return-(sf(1-a*a)-1)});Ui("Sine",function(a){return a===1?1:-mv(a*dv)+1});Ui("Back",Vl("in"),Vl("out"),Vl());Be.SteppedEase=Be.steps=Wt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,r=1-Ze;return function(o){return((i*Lr(0,r,o)|0)+s)*n}}};Fs.ease=Be["quad.out"];Dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Ul+=a+","+a+"Params,"});var Hf=function(e,t){this.id=pv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:mf,this.set=t?t.getSetter:Yl},Fr=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Us(this,+t.duration,1,1),this.data=t.data,Va||tn.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Bs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(bf(this,n),!s._dp||s.parent||Sf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ze||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+vf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+vf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ds(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ze?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ha(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ze?0:this._rts,Sv(this.totalTime(Lr(-this._delay,this._tDur,i),!0)),Ga(this),this},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Bs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ze&&(this._tTime-=Ze)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ha(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Tf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Tf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Kt(this,n),Nt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ze,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ze)},e.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(s){var r=xt(n)?n:xf,o=function(){var c=i.then;i.then=null,xt(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=c),s(r),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Rr(this)},a}();Jt(Fr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ze,_prom:0,_ps:!1,_rts:1});var Ot=function(a){nf(e,a);function e(n,i){var s;return n===void 0&&(n={}),s=a.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Nt(n.sortChildren),st&&xn(n.parent||st,Dn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Mf(Dn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,r){return Er(0,arguments,this),this},t.from=function(i,s,r){return Er(1,arguments,this),this},t.fromTo=function(i,s,r,o){return Er(2,arguments,this),this},t.set=function(i,s,r){return s.duration=0,s.parent=this,Ar(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new yt(i,s,Kt(this,r),1),this},t.call=function(i,s,r){return xn(this,yt.delayedCall(0,i,s),r)},t.staggerTo=function(i,s,r,o,l,c,u){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new yt(i,r,Kt(this,l)),this},t.staggerFrom=function(i,s,r,o,l,c,u){return r.runBackwards=1,Ar(r).immediateRender=Nt(r.immediateRender),this.staggerTo(i,s,r,o,l,c,u)},t.staggerFromTo=function(i,s,r,o,l,c,u,h){return o.startAt=r,Ar(o).immediateRender=Nt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Lt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,x,p,m,b,y,S,M,w;if(this!==st&&u>l&&i>=0&&(u=l),u!==this._tTime||r||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,b=this._ts,p=!b,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,x=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(x*100+i,s,r);if(f=Lt(u%x),u===l?(_=this._repeat,f=c):(_=~~(u/x),_&&_===u/x&&(f=c,_--),f>c&&(f=c)),S=Ds(this._tTime,x),!o&&this._tTime&&S!==_&&(S=_),M&&_&1&&(f=c-f,w=1),_!==S&&!this._lock){var I=M&&S&1,B=I===(M&&_&1);if(_<S&&(I=!I),o=I?0:c,this._lock=1,this.render(o||(w?0:Lt(_*x)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&en(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,B&&(this._lock=2,o=I?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;zf(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=Av(this,Lt(o),Lt(f)),m&&(u-=f-(f=m._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&(en(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&m!==d){if(d.parent!==this)return this.render(i,s,r);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,r),f!==this._time||!this._ts&&!p){m=0,g&&(u+=this._zTime=-Ze);break}}d=g}else{d=this._last;for(var W=i<0?i:f;d;){if(g=d._prev,(d._act||W<=d._end)&&d._ts&&m!==d){if(d.parent!==this)return this.render(i,s,r);if(d.render(d._ts>0?(W-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(W-d._start)*d._ts,s,r),f!==this._time||!this._ts&&!p){m=0,g&&(u+=this._zTime=W?-Ze:Ze);break}}d=g}}if(m&&!s&&(this.pause(),m.render(f>=o?0:-Ze)._zTime=f>=o?1:-1,this._ts))return this._start=y,Ga(this),this.render(i,s,r);this._onUpdate&&!s&&en(this,"onUpdate",!0),(u===l&&l>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Bn(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(en(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var r=this;if(Un(s)||(s=Kt(this,s,i)),!(i instanceof Fr)){if(Et(i))return i.forEach(function(o){return r.add(o,s)}),this;if(_t(i))return this.addLabel(i,s);if(xt(i))i=yt.delayedCall(0,i);else return this}return this!==i?xn(this,i,s):this},t.getChildren=function(i,s,r,o){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-Zt);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof yt?s&&l.push(c):(r&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},t.remove=function(i){return _t(i)?this.removeLabel(i):xt(i)?this.killTweensOf(i):(ka(this,i),i===this._recent&&(this._recent=this._last),Ni(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Kt(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,r){var o=yt.delayedCall(0,s||Tr,r);return o.data="isPause",this._hasPause=1,xn(this,o,Kt(this,i))},t.removePause=function(i){var s=this._first;for(i=Kt(this,i);s;)s._start===i&&s.data==="isPause"&&Bn(s),s=s._next},t.killTweensOf=function(i,s,r){for(var o=this.getTweensOf(i,r),l=o.length;l--;)oi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var r=[],o=$t(i),l=this._first,c=Un(s),u;l;)l instanceof yt?xv(l._targets,o)&&(c?(!oi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(u=l.getTweensOf(o,s)).length&&r.push.apply(r,u),l=l._next;return r},t.tweenTo=function(i,s){s=s||{};var r=this,o=Kt(r,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=yt.to(r,Jt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||Ze,onStart:function(){if(r.pause(),!d){var x=s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());g._dur!==x&&Us(g,x,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,r){return this.tweenTo(s,Jt({startAt:{time:Kt(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),If(this,Kt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),If(this,Kt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ze)},t.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var o=this._first,l=this.labels,c;o;)o._start>=r&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=r&&(l[c]+=i);return Ni(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return a.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ni(this)},t.totalDuration=function(i){var s=0,r=this,o=r._last,l=Zt,c,u,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(h=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,xn(r,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Us(r,r===st&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(st._ts&&(gf(st,Ha(i,st)),df=tn.frame),tn.frame>=pf){pf+=Vt.autoSleep||120;var s=st._first;if((!s||!s._ts)&&Vt.autoSleep&&tn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||tn.sleep()}}},e}(Fr);Jt(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wv=function(e,t,n,i,s,r,o){var l=new Bt(this._pt,e,t,0,1,Qf,null,s),c=0,u=0,h,f,d,g,_,x,p,m;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Pr(i)),r&&(m=[n,i],r(m,e,t),n=m[0],i=m[1]),f=n.match(Pl)||[];h=Pl.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(x=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:x,c:g.charAt(1)==="="?parseFloat(g.substr(2))*(g.charAt(0)==="-"?-1:1):parseFloat(g)-x,m:d&&d<4?Math.round:0},c=Pl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(lf.test(i)||p)&&(l.e=0),this._pt=l,l},Wl=function(e,t,n,i,s,r,o,l,c){xt(i)&&(i=i(s||0,e,r));var u=e[t],h=n!=="get"?n:xt(u)?c?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=xt(u)?c?jv:Xf:Xl,d;if(_t(i)&&(~i.indexOf("random(")&&(i=Pr(i)),i.charAt(1)==="="&&(d=parseFloat(h)+parseFloat(i.substr(2))*(i.charAt(0)==="-"?-1:1)+(Ut(h)||0),(d||d===0)&&(i=d))),h!==i)return!isNaN(h*i)&&i!==""?(d=new Bt(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?Jv:Yf,0,f),c&&(d.fp=c),o&&d.modifier(o,this,e),this._pt=d):(!u&&!(t in e)&&Fl(t,i),Wv.call(this,e,t,h,i,f,l||Vt.stringFilter,c))},Xv=function(e,t,n,i,s){if(xt(e)&&(e=Ir(e,s,t,n,i)),!On(e)||e.style&&e.nodeType||Et(e)||af(e))return _t(e)?Ir(e,s,t,n,i):e;var r={},o;for(o in e)r[o]=Ir(e[o],s,t,n,i);return r},Gf=function(e,t,n,i,s,r){var o,l,c,u;if(Xt[e]&&(o=new Xt[e]).init(s,o.rawVars?t[e]:Xv(t[e],i,s,r,n),n,i,r)!==!1&&(n._pt=l=new Bt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Os))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},oi,Yv=function a(e,t){var n=e.vars,i=n.ease,s=n.startAt,r=n.immediateRender,o=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,f=n.yoyoEase,d=n.keyframes,g=n.autoRevert,_=e._dur,x=e._startAt,p=e._targets,m=e.parent,b=m&&m.data==="nested"?m.parent._targets:p,y=e._overwrite==="auto"&&!Tl,S=e.timeline,M,w,I,B,W,v,R,O,H,k,Y,G,X;if(S&&(!d||!i)&&(i="none"),e._ease=Di(i,Fs.ease),e._yEase=f?Bf(Di(f===!0?i:f,Fs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!n.runBackwards,!S||d&&!n.stagger){if(O=p[0]?Ii(p[0]).harness:0,G=O&&n[O.prop],M=za(n,Il),x&&Bn(x.render(-1,!0)),s)if(Bn(e._startAt=yt.set(p,Jt({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:Nt(o),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},s))),t<0&&!r&&!g&&e._startAt.render(-1,!0),r){if(t>0&&!g&&(e._startAt=0),_&&t<=0){t&&(e._zTime=t);return}}else g===!1&&(e._startAt=0);else if(h&&_){if(x)!g&&(e._startAt=0);else if(t&&(r=!1),I=Jt({overwrite:!1,data:"isFromStart",lazy:r&&Nt(o),immediateRender:r,stagger:0,parent:m},M),G&&(I[O.prop]=G),Bn(e._startAt=yt.set(p,I)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!r)a(e._startAt,Ze);else if(!t)return}for(e._pt=0,o=_&&Nt(o)||o&&!_,w=0;w<p.length;w++){if(W=p[w],R=W._gsap||Ol(p)[w]._gsap,e._ptLookup[w]=k={},Nl[R.id]&&si.length&&Ba(),Y=b===p?w:b.indexOf(W),O&&(H=new O).init(W,G||M,e,Y,b)!==!1&&(e._pt=B=new Bt(e._pt,W,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(fe){k[fe]=B}),H.priority&&(v=1)),!O||G)for(I in M)Xt[I]&&(H=Gf(I,M,e,Y,W,b))?H.priority&&(v=1):k[I]=B=Wl.call(e,W,I,"get",M[I],Y,b,0,n.stringFilter);e._op&&e._op[w]&&e.kill(W,e._op[w]),y&&e._pt&&(oi=e,st.killTweensOf(W,k,e.globalTime(t)),X=!e.parent,oi=0),e._pt&&o&&(Nl[R.id]=1)}v&&qf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!X,d&&t<=0&&S.render(Zt,!0,!0)},Qv=function(e,t){var n=e[0]?Ii(e[0]).harness:0,i=n&&n.aliases,s,r,o,l;if(!i)return t;s=Ns({},t);for(r in i)if(r in s)for(l=i[r].split(","),o=l.length;o--;)s[l[o]]=s[r];return s},qv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",r,o;if(Et(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(r in t)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(e),v:t[r],e:s})},Ir=function(e,t,n,i,s){return xt(e)?e.call(t,n,i,s):_t(e)&&~e.indexOf("random(")?Pr(e):e},Vf=Ul+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Wf={};Dt(Vf+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Wf[a]=1});var yt=function(a){nf(e,a);function e(n,i,s,r){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=a.call(this,r?i:Ar(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,x=l.scrollTrigger,p=l.yoyoEase,m=i.parent||st,b=(Et(n)||af(n)?Un(n[0]):"length"in i)?[n]:$t(n),y,S,M,w,I,B,W,v;if(o._targets=b.length?Ol(b):Ua("GSAP target "+n+" not found. https://greensock.com",!Vt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Na(c)||Na(u)){if(i=o.vars,y=o.timeline=new Ot({data:"nested",defaults:_||{}}),y.kill(),y.parent=y._dp=Dn(o),y._start=0,f||Na(c)||Na(u)){if(w=b.length,W=f&&Lf(f),On(f))for(I in f)~Vf.indexOf(I)&&(v||(v={}),v[I]=f[I]);for(S=0;S<w;S++)M=za(i,Wf),M.stagger=0,p&&(M.yoyoEase=p),v&&Ns(M,v),B=b[S],M.duration=+Ir(c,Dn(o),S,B,b),M.delay=(+Ir(u,Dn(o),S,B,b)||0)-o._delay,!f&&w===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),y.to(B,M,W?W(S,B,b):0),y._ease=Be.none;y.duration()?c=u=0:o.timeline=0}else if(g){Ar(Jt(y.vars.defaults,{ease:"none"})),y._ease=Di(g.ease||i.ease||"none");var R=0,O,H,k;if(Et(g))g.forEach(function(Y){return y.to(b,Y,">")});else{M={};for(I in g)I==="ease"||I==="easeEach"||qv(I,g[I],M,g.easeEach);for(I in M)for(O=M[I].sort(function(Y,G){return Y.t-G.t}),R=0,S=0;S<O.length;S++)H=O[S],k={ease:H.e,duration:(H.t-(S?O[S-1].t:0))/100*c},k[I]=H.v,y.to(b,k,R),R+=k.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!Tl&&(oi=Dn(o),st.killTweensOf(b),oi=0),xn(m,Dn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Lt(m._time)&&Nt(h)&&Mv(Dn(o))&&m.data!=="nested")&&(o._tTime=-Ze,o.render(Math.max(0,-u))),x&&Mf(Dn(o),x),o}var t=e.prototype;return t.render=function(i,s,r){var o=this._time,l=this._tDur,c=this._dur,u=i>l-Ze&&i>=0?l:i<Ze?0:i,h,f,d,g,_,x,p,m,b;if(!c)Tv(this,i,s,r);else if(u!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(h=u,m=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,r);if(h=Lt(u%g),u===l?(d=this._repeat,h=c):(d=~~(u/g),d&&d===u/g&&(h=c,d--),h>c&&(h=c)),x=this._yoyo&&d&1,x&&(b=this._yEase,h=c-h),_=Ds(this._tTime,g),h===o&&!r&&this._initted)return this;d!==_&&(m&&this._yEase&&zf(m,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=r=1,this.render(Lt(g*d),!0).invalidate()._lock=0))}if(!this._initted){if(wf(this,i<0?i:h,r,s))return this._tTime=0,this;if(c!==this._dur)return this.render(i,s,r)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=p=(b||this._ease)(h/c),this._from&&(this.ratio=p=1-p),h&&!o&&!s&&(en(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(p,f.d),f=f._next;m&&m.render(i<0?i:!h&&x?-Ze:m._dur*m._ease(h/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(i<0&&this._startAt&&this._startAt.render(i,!0,r),en(this,"onUpdate")),this._repeat&&d!==_&&this.vars.onRepeat&&!s&&this.parent&&en(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Bn(this,1),!s&&!(i<0&&!o)&&(u||o)&&(en(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),a.prototype.invalidate.call(this)},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Rr(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,oi&&oi.vars.overwrite!==!0)._first||Rr(this),this.parent&&r!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=i?$t(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,x,p;if((!s||s==="all")&&vv(o,l))return s==="all"&&(this._pt=0),Rr(this);for(h=this._op=this._op||[],s!=="all"&&(_t(s)&&(_={},Dt(s,function(m){return _[m]=1}),s=_),s=Qv(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)x=f&&f[_],x&&((!("kill"in x.d)||x.d.kill(_)===!0)&&ka(this,x,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Rr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Er(1,arguments)},e.delayedCall=function(i,s,r,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},e.fromTo=function(i,s,r){return Er(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,r){return st.killTweensOf(i,s,r)},e}(Fr);Jt(yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dt("staggerTo,staggerFrom,staggerFromTo",function(a){yt[a]=function(){var e=new Ot,t=zl.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Xl=function(e,t,n){return e[t]=n},Xf=function(e,t,n){return e[t](n)},jv=function(e,t,n,i){return e[t](i.fp,n)},Zv=function(e,t,n){return e.setAttribute(t,n)},Yl=function(e,t){return xt(e[t])?Xf:El(e[t])&&e.setAttribute?Zv:Xl},Yf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Jv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Qf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ql=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Kv=function(e,t,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(e,t,n),s=r},$v=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ka(this,t,"_pt"):t.dep||(n=1),t=i;return!n},eb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},qf=function(e){for(var t=e._pt,n,i,s,r;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=s},Bt=function(){function a(t,n,i,s,r,o,l,c,u){this.t=n,this.s=s,this.c=r,this.p=i,this.r=o||Yf,this.d=l||this,this.set=c||Xl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=eb,this.m=n,this.mt=s,this.tween=i},a}();Dt(Ul+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Il[a]=1});Wt.TweenMax=Wt.TweenLite=yt;Wt.TimelineLite=Wt.TimelineMax=Ot;st=new Ot({sortChildren:!1,defaults:Fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vt.stringFilter=Of;var Wa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ov(i)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,t){return st.getTweensOf(e,t)},getProperty:function(e,t,n,i){_t(e)&&(e=$t(e)[0]);var s=Ii(e||{}).get,r=n?xf:_f;return n==="native"&&(n=""),e&&(t?r((Xt[t]&&Xt[t].get||s)(e,t,n,i)):function(o,l,c){return r((Xt[o]&&Xt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=$t(e),e.length>1){var i=e.map(function(u){return yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var r=Xt[t],o=Ii(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=r?function(u){var h=new r;Os._pt=0,h.init(e,n?u+n:u,Os,0,[e]),h.render(1,h),Os._pt&&Ql(1,Os)}:o.set(e,l);return r?c:function(u){return c(e,l,n?u+n:u,o,1)}},isTweening:function(e){return st.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Di(e.ease,Fs.ease)),yf(Fs,e||{})},config:function(e){return yf(Vt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Xt[o]&&!Wt[o]&&Ua(t+" effect requires "+o+" plugin.")}),Dl[t]=function(o,l,c){return n($t(o),Jt(l||{},s),c)},r&&(Ot.prototype[t]=function(o,l,c){return this.add(Dl[t](o,On(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Be[e]=Di(t)},parseEase:function(e,t){return arguments.length?Di(e,t):Be},getById:function(e){return st.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ot(e),i,s;for(n.smoothChildTiming=Nt(e.smoothChildTiming),st.remove(n),n._dp=0,n._time=n._tTime=st._time,i=st._first;i;)s=i._next,(t||!(!i._dur&&i instanceof yt&&i.vars.onComplete===i._targets[0]))&&xn(n,i,i._start-i._delay),i=s;return xn(st,n,0),n},utils:{wrap:Nv,wrapYoyo:Dv,distribute:Lf,random:Rf,snap:Pf,normalize:Iv,getUnit:Ut,clamp:Lv,splitColor:Nf,toArray:$t,selector:Rv,mapRange:Ff,pipe:Cv,unitize:Fv,interpolate:Uv,shuffle:Ef},install:hf,effects:Dl,ticker:tn,updateRoot:Ot.updateRoot,plugins:Xt,globalTimeline:st,core:{PropTween:Bt,globals:ff,Tween:yt,Timeline:Ot,Animation:Fr,getCache:Ii,_removeLinkedListItem:ka,suppressOverwrites:function(e){return Tl=e}}};Dt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Wa[a]=yt[a]});tn.add(Ot.updateRoot);Os=Wa.to({},{duration:0});var tb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},nb=function(e,t){var n=e._targets,i,s,r;for(i in t)for(s=n.length;s--;)r=e._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=tb(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[s],i))},ql=function(e,t){return{name:e,rawVars:1,init:function(i,s,r){r._onInit=function(o){var l,c;if(_t(s)&&(l={},Dt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}nb(o,s)}}}},yn=Wa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var r,o;for(r in t)o=this.add(e,"setAttribute",(e.getAttribute(r)||0)+"",t[r],i,s,0,0,r),o&&(o.op=r),this._props.push(r)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},ql("roundProps",kl),ql("modifiers"),ql("snap",Pf))||Wa;yt.version=Ot.version=yn.version="3.9.1";uf=1;rf()&&Bs();Be.Power0;Be.Power1;Be.Power2;Be.Power3;Be.Power4;Be.Linear;Be.Quad;Be.Cubic;Be.Quart;Be.Quint;Be.Strong;Be.Elastic;Be.Back;Be.SteppedEase;Be.Bounce;Be.Sine;Be.Expo;Be.Circ;/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jf,li,zs,jl,Oi,Zf,ib=function(){return typeof window!="undefined"},ci={},Bi=180/Math.PI,ks=Math.PI/180,Hs=Math.atan2,Jf=1e8,Kf=/([A-Z])/g,sb=/(?:left|right|width|margin|padding|x)/i,rb=/[\s,\(]\S/,ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$f=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ab=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ob=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ed=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},td=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cb=function(e,t,n){return e.style[t]=n},ub=function(e,t,n){return e.style.setProperty(t,n)},hb=function(e,t,n){return e._gsap[t]=n},fb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},db=function(e,t,n,i,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},pb=function(e,t,n,i,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},Mt="transform",hi=Mt+"Origin",nd,Zl=function(e,t){var n=li.createElementNS?li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):li.createElement(e);return n.style?n:li.createElement(e)},zn=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Kf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Gs(t)||t,1)||""},id="O,Moz,ms,Ms,Webkit".split(","),Gs=function(e,t,n){var i=t||Oi,s=i.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(id[r]+e in s););return r<0?null:(r===3?"ms":r>=0?id[r]:"")+e},Jl=function(){ib()&&window.document&&(jf=window,li=jf.document,zs=li.documentElement,Oi=Zl("div")||{style:{}},Zl("div"),Mt=Gs(Mt),hi=Mt+"Origin",Oi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",nd=!!Gs("perspective"),jl=1)},Kl=function a(e){var t=Zl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(zs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),zs.removeChild(t),this.style.cssText=s,r},sd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},rd=function(e){var t;try{t=e.getBBox()}catch{t=Kl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Kl||(t=Kl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+sd(e,["x","cx","x1"])||0,y:+sd(e,["y","cy","y1"])||0,width:0,height:0}:t},ad=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rd(e))},Nr=function(e,t){if(t){var n=e.style;t in ci&&t!==hi&&(t=Mt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Kf,"-$1").toLowerCase())):n.removeAttribute(t)}},fi=function(e,t,n,i,s,r){var o=new Bt(e._pt,t,n,0,1,r?td:ed);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},od={deg:1,rad:1,turn:1},di=function a(e,t,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=Oi.style,l=sb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,x,p;return i===r||!s||od[i]||od[r]?s:(r!=="px"&&!f&&(s=a(e,t,n,"px")),p=e.getCTM&&ad(e),(d||r==="%")&&(ci[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[u],ft(d?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(f?r:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===li||!_.appendChild)&&(_=li.body),x=_._gsap,x&&d&&x.width&&l&&x.time===tn.time?ft(s/x.width*h):((d||r==="%")&&(o.position=zn(e,"position")),_===e&&(o.position="static"),_.appendChild(Oi),g=Oi[u],_.removeChild(Oi),o.position="absolute",l&&d&&(x=Ii(_),x.time=tn.time,x.width=_[u]),ft(f?g*s/h:g&&s?h/g*s:0))))},zi=function(e,t,n,i){var s;return jl||Jl(),t in ui&&t!=="transform"&&(t=ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),ci[t]&&t!=="transform"?(s=Ur(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ya(zn(e,hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xa[t]&&Xa[t](e,t,n)||zn(e,t)||mf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?di(e,t,s,n)+n:s},mb=function(e,t,n,i){if(!n||n==="none"){var s=Gs(t,e,1),r=s&&zn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=zn(e,"borderTopColor"))}var o=new Bt(this._pt,e.style,t,0,1,Qf),l=0,c=0,u,h,f,d,g,_,x,p,m,b,y,S,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=zn(e,t)||i,e.style[t]=n),u=[n,i],Of(u),n=u[0],i=u[1],f=n.match(Is)||[],M=i.match(Is)||[],M.length){for(;h=Is.exec(i);)x=h[0],m=i.substring(l,h.index),g?g=(g+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(g=1),x!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),S=x.charAt(1)==="="?+(x.charAt(0)+"1"):0,S&&(x=x.substr(2)),p=parseFloat(x),b=x.substr((p+"").length),l=Is.lastIndex-b.length,b||(b=b||Vt.units[t]||y,l===i.length&&(i+=b,o.e+=b)),y!==b&&(d=di(e,t,_,b)||0),o._pt={_next:o._pt,p:m||c===1?m:",",s:d,c:S?S*p:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?td:ed;return lf.test(i)&&(o.e=0),this._pt=o,o},ld={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ld[n]||n,t[1]=ld[i]||i,t.join(" ")},_b=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,r=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ci[o]&&(l=1,o=o==="transformOrigin"?hi:Mt),Nr(n,o);l&&(Nr(n,Mt),r&&(r.svg&&n.removeAttribute("transform"),Ur(n,1),r.uncache=1))}},Xa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var r=e._pt=new Bt(e._pt,t,n,0,0,_b);return r.u=i,r.pr=-10,r.tween=s,e._props.push(n),1}}},Dr=[1,0,0,1,0,0],cd={},ud=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},hd=function(e){var t=zn(e,Mt);return ud(t)?Dr:t.substr(7).match(of).map(ft)},$l=function(e,t){var n=e._gsap||Ii(e),i=e.style,s=hd(e),r,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Dr:s):(s===Dr&&!e.offsetParent&&e!==zs&&!n.svg&&(l=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(c=1,o=e.nextSibling,zs.appendChild(e)),s=hd(e),l?i.display=l:Nr(e,"display"),c&&(o?r.insertBefore(e,o):r?r.appendChild(e):zs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ec=function(e,t,n,i,s,r){var o=e._gsap,l=s||$l(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],x=l[3],p=l[4],m=l[5],b=t.split(" "),y=parseFloat(b[0])||0,S=parseFloat(b[1])||0,M,w,I,B;n?l!==Dr&&(w=d*x-g*_)&&(I=y*(x/w)+S*(-_/w)+(_*m-x*p)/w,B=y*(-g/w)+S*(d/w)-(d*m-g*p)/w,y=I,S=B):(M=rd(e),y=M.x+(~b[0].indexOf("%")?y/100*M.width:y),S=M.y+(~(b[1]||b[0]).indexOf("%")?S/100*M.height:S)),i||i!==!1&&o.smooth?(p=y-c,m=S-u,o.xOffset=h+(p*d+m*_)-p,o.yOffset=f+(p*g+m*x)-m):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[hi]="0px 0px",r&&(fi(r,o,"xOrigin",c,y),fi(r,o,"yOrigin",u,S),fi(r,o,"xOffset",h,o.xOffset),fi(r,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},Ur=function(e,t){var n=e._gsap||new Hf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,r="px",o="deg",l=zn(e,hi)||"0",c,u,h,f,d,g,_,x,p,m,b,y,S,M,w,I,B,W,v,R,O,H,k,Y,G,X,fe,Z,ie,z,U,T;return c=u=h=g=_=x=p=m=b=0,f=d=1,n.svg=!!(e.getCTM&&ad(e)),M=$l(e,n.svg),n.svg&&(Y=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),ec(e,Y||l,!!Y||n.originIsAbsolute,n.smooth!==!1,M)),y=n.xOrigin||0,S=n.yOrigin||0,M!==Dr&&(W=M[0],v=M[1],R=M[2],O=M[3],c=H=M[4],u=k=M[5],M.length===6?(f=Math.sqrt(W*W+v*v),d=Math.sqrt(O*O+R*R),g=W||v?Hs(v,W)*Bi:0,p=R||O?Hs(R,O)*Bi+g:0,p&&(d*=Math.abs(Math.cos(p*ks))),n.svg&&(c-=y-(y*W+S*R),u-=S-(y*v+S*O))):(T=M[6],z=M[7],fe=M[8],Z=M[9],ie=M[10],U=M[11],c=M[12],u=M[13],h=M[14],w=Hs(T,ie),_=w*Bi,w&&(I=Math.cos(-w),B=Math.sin(-w),Y=H*I+fe*B,G=k*I+Z*B,X=T*I+ie*B,fe=H*-B+fe*I,Z=k*-B+Z*I,ie=T*-B+ie*I,U=z*-B+U*I,H=Y,k=G,T=X),w=Hs(-R,ie),x=w*Bi,w&&(I=Math.cos(-w),B=Math.sin(-w),Y=W*I-fe*B,G=v*I-Z*B,X=R*I-ie*B,U=O*B+U*I,W=Y,v=G,R=X),w=Hs(v,W),g=w*Bi,w&&(I=Math.cos(w),B=Math.sin(w),Y=W*I+v*B,G=H*I+k*B,v=v*I-W*B,k=k*I-H*B,W=Y,H=G),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,x=180-x),f=ft(Math.sqrt(W*W+v*v+R*R)),d=ft(Math.sqrt(k*k+T*T)),w=Hs(H,k),p=Math.abs(w)>2e-4?w*Bi:0,b=U?1/(U<0?-U:U):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ud(zn(e,Mt)),Y&&e.setAttribute("transform",Y))),Math.abs(p)>90&&Math.abs(p)<270&&(s?(f*=-1,p+=g<=0?180:-180,g+=g<=0?180:-180):(d*=-1,p+=p<=0?180:-180)),n.x=c-((n.xPercent=c&&(n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=u-((n.yPercent=u&&(n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=h+r,n.scaleX=ft(f),n.scaleY=ft(d),n.rotation=ft(g)+o,n.rotationX=ft(_)+o,n.rotationY=ft(x)+o,n.skewX=p+o,n.skewY=m+o,n.transformPerspective=b+r,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[hi]=Ya(l)),n.xOffset=n.yOffset=0,n.force3D=Vt.force3D,n.renderTransform=n.svg?yb:nd?fd:xb,n.uncache=0,n},Ya=function(e){return(e=e.split(" "))[0]+" "+e[1]},tc=function(e,t,n){var i=Ut(t);return ft(parseFloat(t)+parseFloat(di(e,"x",n+"px",i)))+i},xb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,fd(e,t)},ki="0deg",Or="0px",Hi=") ",fd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,x=n.transformPerspective,p=n.force3D,m=n.target,b=n.zOrigin,y="",S=p==="auto"&&e&&e!==1||p===!0;if(b&&(h!==ki||u!==ki)){var M=parseFloat(u)*ks,w=Math.sin(M),I=Math.cos(M),B;M=parseFloat(h)*ks,B=Math.cos(M),r=tc(m,r,w*B*-b),o=tc(m,o,-Math.sin(M)*-b),l=tc(m,l,I*B*-b+b)}x!==Or&&(y+="perspective("+x+Hi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||r!==Or||o!==Or||l!==Or)&&(y+=l!==Or||S?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+Hi),c!==ki&&(y+="rotate("+c+Hi),u!==ki&&(y+="rotateY("+u+Hi),h!==ki&&(y+="rotateX("+h+Hi),(f!==ki||d!==ki)&&(y+="skew("+f+", "+d+Hi),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Hi),m.style[Mt]=y||"translate(0, 0)"},yb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,x=n.xOffset,p=n.yOffset,m=n.forceCSS,b=parseFloat(r),y=parseFloat(o),S,M,w,I,B;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ks,c*=ks,S=Math.cos(l)*h,M=Math.sin(l)*h,w=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(u*=ks,B=Math.tan(c-u),B=Math.sqrt(1+B*B),w*=B,I*=B,u&&(B=Math.tan(u),B=Math.sqrt(1+B*B),S*=B,M*=B)),S=ft(S),M=ft(M),w=ft(w),I=ft(I)):(S=h,I=f,M=w=0),(b&&!~(r+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(b=di(d,"x",r,"px"),y=di(d,"y",o,"px")),(g||_||x||p)&&(b=ft(b+g-(g*S+_*w)+x),y=ft(y+_-(g*M+_*I)+p)),(i||s)&&(B=d.getBBox(),b=ft(b+i/100*B.width),y=ft(y+s/100*B.height)),B="matrix("+S+","+M+","+w+","+I+","+b+","+y+")",d.setAttribute("transform",B),m&&(d.style[Mt]=B)},vb=function(e,t,n,i,s,r){var o=360,l=_t(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?Bi:1),u=r?c*r:c-i,h=i+u+"deg",f,d;return l&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Jf)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Jf)%o-~~(u/o)*o)),e._pt=d=new Bt(e._pt,t,n,i,u,ab),d.e=h,d.u="deg",e._props.push(n),d},dd=function(e,t){for(var n in t)e[n]=t[n];return e},bb=function(e,t,n){var i=dd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[Mt]=t,o=Ur(n,1),Nr(n,Mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Mt],r[Mt]=t,o=Ur(n,1),r[Mt]=c);for(l in ci)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Ut(c),g=Ut(u),h=d!==g?di(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Bt(e._pt,o,l,h,f-h,$f),e._pt.u=g||0,e._props.push(l));dd(o,i)};Dt("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",s="Left",r=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?a+o:"border"+o+a});Xa[e>1?"border"+a:a]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=r.map(function(g){return zi(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},r.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var pd={name:"css",register:Jl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var r=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,x,p,m,b,y,S,M,w;jl||Jl();for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Xt[_]&&Gf(_,t,n,i,e,s)))){if(d=typeof u,g=Xa[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Pr(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ai.lastIndex=0,ai.test(c)||(x=Ut(c),p=Ut(u)),p?x!==p&&(c=di(e,_,c,p)+p):x&&(u+=x),this.add(o,"setProperty",c,u,i,s,0,0,_),r.push(_);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],_t(c)&&~c.indexOf("random(")&&(c=Pr(c)),Ut(c+"")||(c+=Vt.units[_]||Ut(zi(e,_))||""),(c+"").charAt(1)==="="&&(c=zi(e,_))):c=zi(e,_),f=parseFloat(c),m=d==="string"&&u.charAt(1)==="="?+(u.charAt(0)+"1"):0,m&&(u=u.substr(2)),h=parseFloat(u),_ in ui&&(_==="autoAlpha"&&(f===1&&zi(e,"visibility")==="hidden"&&h&&(f=0),fi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ui[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in ci,b){if(y||(S=e._gsap,S.renderTransform&&!t.parseTransform||Ur(e,t.parseTransform),M=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new Bt(this._pt,o,Mt,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new Bt(this._pt,S,"scaleY",S.scaleY,(m?m*h:h-S.scaleY)||0),r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){u=gb(u),S.svg?ec(e,u,0,M,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&fi(this,S,"zOrigin",S.zOrigin,p),fi(this,o,_,Ya(c),Ya(u)));continue}else if(_==="svgOrigin"){ec(e,u,1,M,0,this);continue}else if(_ in cd){vb(this,S,_,f,u,m);continue}else if(_==="smoothOrigin"){fi(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){bb(this,u,e);continue}}else _ in o||(_=Gs(_)||_);if(b||(h||h===0)&&(f||f===0)&&!rb.test(u)&&_ in o)x=(c+"").substr((f+"").length),h||(h=0),p=Ut(u)||(_ in Vt.units?Vt.units[_]:x),x!==p&&(f=di(e,_,c,p)),this._pt=new Bt(this._pt,b?S:o,_,f,m?m*h:h-f,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?lb:$f),this._pt.u=p||0,x!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ob);else if(_ in o)mb.call(this,e,_,c,u);else if(_ in e)this.add(e,_,c||e[_],u,i,s);else{Fl(_,u);continue}r.push(_)}}w&&qf(this)},get:zi,aliases:ui,getSetter:function(e,t,n){var i=ui[t];return i&&i.indexOf(",")<0&&(t=i),t in ci&&t!==hi&&(e._gsap.x||zi(e,"x"))?n&&Zf===n?t==="scale"?fb:hb:(Zf=n||{})&&(t==="scale"?db:pb):e.style&&!El(e.style[t])?cb:~t.indexOf("-")?ub:Yl(e,t)},core:{_removeProperty:Nr,_getMatrix:$l}};yn.utils.checkPrefix=Gs;(function(a,e,t,n){var i=Dt(a+","+e+","+t,function(s){ci[s]=1});Dt(e,function(s){Vt.units[s]="deg",cd[s]=1}),ui[i[13]]=a+","+e,Dt(n,function(s){var r=s.split(":");ui[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Vt.units[a]="px"});yn.registerPlugin(pd);var Sb=yn.registerPlugin(pd)||yn;Sb.core.Tween;export{dy as A,xe as C,uy as D,Lb as E,Rb as F,Uy as G,K0 as M,Rt as P,Pb as R,$h as S,Th as T,te as V,Qe as W,Gu as a,Ih as b,wb as c,Tb as d,Yo as e,Ib as f,Cb as g,Fb as h,Gh as i,Eb as j,Ab as k,N as l,St as m,Mb as n,Sb as o};
