(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{6282:function(e,t,s){Promise.resolve().then(s.bind(s,2751))},2751:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return j}});var a=s(7437),l=s(2265),r=e=>{let{selectedDate:t,onDateChange:s}=e,[r,n]=(0,l.useState)(new Date),[c,i]=(0,l.useState)([]),d=()=>{let e=[];for(let t=0;t<5;t++){let s=new Date(r);s.setDate(s.getDate()+t-2),e.push(s)}i(e)},o=e=>{s(e)};(0,l.useEffect)(()=>{d()},[r]);let A=e=>{let t=new Date;return e<=t};return(0,a.jsx)("div",{className:"rounded-md mt-2 mb-1",children:(0,a.jsxs)("div",{className:"flex  rounded-xl ",children:[(0,a.jsx)("button",{"aria-label":"prev Day",onClick:()=>{let e=new Date(r);e.setDate(e.getDate()-1),n(e)},className:"text-[#3D1DF3] ml-2  font-bold",children:(0,a.jsxs)("svg",{width:"17",height:"13",viewBox:"0 0 17 13",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M0.920905 7.26799C0.441523 6.86821 0.441523 6.13179 0.920904 5.73201L5.10953 2.2389C5.7608 1.69578 6.75 2.15888 6.75 3.00689L6.75 9.99311C6.75 10.8411 5.7608 11.3042 5.10954 10.7611L0.920905 7.26799Z",fill:"#3D1DF3"}),(0,a.jsx)("path",{d:"M8.9209 7.26799C8.44152 6.86821 8.44152 6.13179 8.9209 5.73201L13.1095 2.2389C13.7608 1.69578 14.75 2.15888 14.75 3.00689L14.75 9.99311C14.75 10.8411 13.7608 11.3042 13.1095 10.7611L8.9209 7.26799Z",fill:"#3D1DF3"})]})}),c.map((e,s)=>(0,a.jsxs)("button",{"aria-label":"select Day",className:"".concat(e.toDateString()===t.toDateString()?"bg-[#C7FFB1] ":"bg-gray-100"," p-2 mx-[2px]  rounded-xl text-bond text-center w-12 h-15 border-[1px] border-[#3D1DF3] ").concat(A(e)?"":"bg-[#62626233] border-none text-[#626262] "),onClick:()=>o(e),disabled:!A(e),children:[(0,a.jsx)("div",{className:" text-sm font-bold",children:e.toLocaleDateString("es-ES",{weekday:"short"})}),(0,a.jsx)("div",{className:" text-xl font-bold",children:e.toLocaleDateString("es-ES",{day:"numeric"})})]},s)),(0,a.jsx)("button",{"aria-label":"next day",onClick:()=>{let e=new Date(r);e.setDate(e.getDate()+1),n(e)},className:" ml-2 font-bold text-[#3D1DF3]",children:(0,a.jsxs)("svg",{width:"19",height:"15",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-label":"arrow",children:[(0,a.jsx)("path",{d:"M15.0791 5.73201C15.5585 6.13179 15.5585 6.86821 15.0791 7.26799L10.8905 10.7611C10.2392 11.3042 9.25 10.8411 9.25 9.99311L9.25 3.00689C9.25 2.15888 10.2392 1.69578 10.8905 2.2389L15.0791 5.73201Z",fill:"#3D1DF3"}),(0,a.jsx)("path",{d:"M8.0791 5.73201C8.55848 6.13179 8.55848 6.86821 8.0791 7.26799L3.89047 10.7611C3.23921 11.3042 2.25 10.8411 2.25 9.99311L2.25 3.00689C2.25 2.15888 3.2392 1.69578 3.89046 2.2389L8.0791 5.73201Z",fill:"#3D1DF3"})]})})]})})},n=s(7840),c=s(1507),i=s(2124),d=e=>{let{value:t}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(n.w,{className:"w-[81px] h-[81px] border-none bg-gradient-to-br",children:(0,a.jsx)(c.G,{className:"justify-center items-center pb-0",children:(0,a.jsx)(i.Z,{"aria-label":"circular progress",classNames:{svg:"w-[81px] h-[81px] drop-shadow-md",indicator:"stroke-[#00EA77]",track:"stroke-green/10",value:" text-base font-bold  absolute inset-0 flex items-center justify-center"},value:t||0,strokeWidth:4,showValueLabel:!0})})})})},o=s(6691),A=s.n(o),h={src:"/_next/static/media/avatar3.80c0c94b.jpeg",height:127,width:127,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAALQCn//EAB4QAAEDBAMAAAAAAAAAAAAAAAIBBRIABBMUESEi/9oACAEBAAE/AEciN2xjcFHb18XHnoJLX//EABcRAAMBAAAAAAAAAAAAAAAAAAACQnH/2gAIAQIBAT8AStP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAkJx/9oACAEDAQE/AGnD/9k=",blurWidth:8,blurHeight:8},x=s(1396),m=s.n(x),u=s(9222),b=s(3198),g=s(5196),j=()=>{let e=(0,b.I0)(),[t,s]=(0,l.useState)(new Date),[n,c]=(0,l.useState)(Number),[i,o]=(0,l.useState)(Number),[x,j]=(0,l.useState)(Number),[f,D]=(0,l.useState)(Number),[v,p]=(0,l.useState)([]),N=v.slice(0,2),w=v.length-2,C=(0,b.v9)(e=>e.date.selectedDate),E=new Date(C+"T00:00:00Z"),y=E.toLocaleString("es-ES",{month:"long",timeZone:"UTC"}),S=y.charAt(0).toUpperCase()+y.slice(1),k=function(e){let t=e.getFullYear(),s=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");return"".concat(t,"-").concat(s,"-").concat(a)}(t);return(0,l.useEffect)(()=>{let t=async()=>{let e=await u.Z.get("http://localhost:4000/api/v1/backoffice/packagesPerDay/".concat(k)),t=e.data,s=t.allPackagesPerDay.length,a=t.allPackagesPerDay.filter(e=>e.delivered),l=a.length;o(l),c(s)},s=async()=>{try{let e=await u.Z.get("http://localhost:4000/api/v1/backoffice/getAllDeliveryManByDate/".concat(k)),t=e.data,s=t.deliveryMen.filter(e=>e.deliveries),a=s.length;j(a)}catch(e){console.error("error:",e)}},a=async()=>{try{let e=await u.Z.get("http://localhost:4000/api/v1/backoffice/dealers?delivery_date=".concat(k));p(e.data.dealersInfo);let t=e.data.dealersInfo.length;D(t)}catch(e){console.error(e)}};a(),s(),t(),e((0,g.j)(k))},[t]),(0,a.jsxs)("div",{className:" rounded-2xl  text-[#3D1DF3] bg-[#C7FFB1] mr-6  ml-6 mt-4 font-poppins",children:[(0,a.jsx)("div",{className:"flex justify-center items-center  h-16",children:(0,a.jsx)("h1",{className:"m-5 font-bold text-lg ",children:"Gestionar Pedidos"})}),(0,a.jsxs)("div",{className:"rounded-2xl mb-5 pb-6 bg-white  ",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"w-16 h-16 ml-5 mt-4 rounded-full bg-blue-500 flex items-center justify-center",children:(0,a.jsx)(A(),{src:h,className:"rounded-full w-16 h-16 ",alt:"avatar3"})}),(0,a.jsxs)("div",{className:"ml-4",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold",children:"\xa1Hola Admin!"}),(0,a.jsx)("h5",{className:" text-base",children:"Estos son los pedidos del d\xeda"})]})]}),(0,a.jsxs)("div",{className:"border-[1px] border-[#3D1DF3] rounded-xl mx-5 my-3 py-2",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h4",{className:"dotted-border text-[#3D1DF3] font-semibold ml-2 mb-1",children:S})}),(0,a.jsx)(r,{selectedDate:t,onDateChange:e=>{s(e)}})]}),(0,a.jsxs)("div",{className:"p-3  rounded-xl  border-[#3D1DF3] border-[1px] ml-5 mr-5 ",children:[(0,a.jsxs)("div",{className:"dotted-border flex justify-between  ",children:[(0,a.jsx)("h4",{className:"font-bold",children:"Detalles"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("h4",{className:"mr-2",children:t.toLocaleDateString("es-ES")}),(0,a.jsx)("svg",{className:"items-center",width:"11",height:"9",viewBox:"0 0 9 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z",fill:"#3D1DF3"})})]})]}),(0,a.jsx)("div",{className:"dotted-border",children:(0,a.jsxs)("div",{className:"relative flex justify-start mb-3 mt-3",children:[(0,a.jsx)(d,{value:x/f*100,"aria-label":"Porcentaje de repartidores activos"}),(0,a.jsxs)("div",{className:"ml-5 ",children:[(0,a.jsx)("h4",{className:"font-bold text-base",children:"Repartidores"}),(0,a.jsxs)("h6",{className:"text-sm",children:[x,"/",f," Habilitados"]}),(0,a.jsx)("div",{className:"flex justify-content mt-1 mb-4 ",children:(0,a.jsxs)("div",{className:"flex",children:[N.map((e,t)=>(0,a.jsx)(A(),{src:e.image,alt:"User ".concat(t),className:"rounded-full w-6 h-6",width:6,height:6},t)),w>0&&(0,a.jsxs)("div",{className:"rounded-full w-8 h-8 bg-blue-500 text-white flex items-center justify-center",children:["+",w]})]})})]}),(0,a.jsx)("div",{className:"flex items-end pb-3 ml-6",children:(0,a.jsx)(m(),{href:"/manage_delivery/".concat(k),children:(0,a.jsx)("button",{className:"bg-[#00EA77]  rounded-2xl w-16 h-9 ",children:"Ver"})})})]})}),(0,a.jsxs)("div",{className:"relative flex  justify-start  mt-3 ",children:[(0,a.jsx)(d,{value:i/n*100}),(0,a.jsxs)("div",{className:"ml-5",children:[(0,a.jsx)("h4",{className:"font-bold text-base",children:"Paquetes"}),(0,a.jsxs)("h6",{className:"text-sm",children:[i,"/",n," Repartidos"]})]}),(0,a.jsx)("div",{className:"flex items-end align-bottom pb-3 pt-10 ml-6",children:(0,a.jsx)(m(),{href:"/package_history/".concat(k),children:(0,a.jsx)("button",{className:"bg-[#00EA77] rounded-2xl w-16 h-9 mb-1",children:"Ver"})})})]})]}),(0,a.jsx)("div",{className:"ml-5 mr-5 mt-5",children:(0,a.jsx)(m(),{href:"/backoffice/add_packages",children:(0,a.jsx)("button",{className:"bg-[#00EA77] text-[#3D1DF3] rounded-2xl w-[100%] h-10 mb-1",children:"Nuevo paquete +"})})})]})]})}},5196:function(e,t,s){"use strict";s.d(t,{j:function(){return r}});var a=s(9390);let l=(0,a.oM)({name:"date",initialState:{selectedDate:null},reducers:{setSelectedDate:(e,t)=>{e.selectedDate=t.payload}}}),{setSelectedDate:r}=l.actions;t.Z=l.reducer}},function(e){e.O(0,[165,396,198,390,65,971,596,744],function(){return e(e.s=6282)}),_N_E=e.O()}]);