__NUXT_JSONP__("/es/payments-on-production", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{document:{slug:"payments-on-production",description:"Laravel helper para hacer pagos con PagaloGT.",title:"Pagos en producción",position:4,category:"Uso del paquete",toc:[{id:A,depth:2,text:B}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:A},children:[{type:b,tag:q,props:{href:"#agrega-tus-credenciales-de-pagalogt",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:B}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"Agrega tus credenciales de PagaloGT en el archivo "},{type:b,tag:m,props:{},children:[{type:a,value:".env"}]},{type:a,value:":"}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,"language-text"]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"PAGALO_IDEN_EMPRESA='\u003CLivePagaloIdenEmpresa\u003E'\nPAGALO_TOKEN='\u003CLivePagaloToken\u003E'\nPAGALO_KEY_PUBLIC='\u003CLivePagaloKeyPublic\u003E'\nPAGALO_KEY_SECRET='\u003CLivePagaloKeySecret\u003E'\nPAGALO_ENVIRONMENT='live'\n"}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"En este link puedes obtener tus credenciales "},{type:b,tag:q,props:{href:"https:\u002F\u002Fapp.pagalocard.com\u002Fdeveloperint",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"aquí"}]},{type:a,value:", primero registrate y segue el proceso de PagaloGT para obtener tus credenciales."}]},{type:a,value:f},{type:b,tag:G,props:{id:"hacer-un-pago-en-producción"},children:[{type:b,tag:q,props:{href:"#hacer-un-pago-en-producci%C3%B3n",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Hacer un pago en producción"}]},{type:a,value:f},{type:b,tag:"alert",props:{type:"danger"},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Las peticiones sin el método "},{type:b,tag:m,props:{},children:[{type:a,value:"withTestCredentials()"}]},{type:a,value:" seran procesadas de forma real."}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,"language-php"]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"use"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"package"]},children:[{type:a,value:"ArielMejiaDev"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F..."}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,"variable"]},children:[{type:a,value:"$payment"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"new"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"class-name"]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"add"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:"'Test transaction'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"100.00"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"setClient"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:"'John'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:"'Doe'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:"'john@doe.com'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"setCard"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:"'JOHN JOSEPH DOE DULLIE'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:"'XXXX XXXX XXXX XXXX'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"12"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"2022"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"742"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"pay"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:G,props:{id:"el-método-setcard"},children:[{type:b,tag:q,props:{href:"#el-m%C3%A9todo-setcard",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"El método "},{type:b,tag:m,props:{},children:[{type:a,value:"setCard()"}]}]},{type:a,value:f},{type:b,tag:"hr",props:{},children:[]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"Agrega una tarjeta de un cliente real a la transacción, este método require:"}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"cc name"}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"cc number"}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"cc month"}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"cc year"}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"cvc code"}]},{type:a,value:f}]}]},dir:"\u002Fes",path:"\u002Fes\u002Fpayments-on-production",extension:".md",createdAt:"2021-02-22T02:43:09.678Z",updatedAt:"2021-02-22T04:37:03.409Z",to:"\u002Fpayments-on-production"},prev:{slug:"payments-on-testing",title:"Pagos en ambientes de desarrollo y testing",to:"\u002Fpayments-on-testing"},next:{slug:"transactions-with-cybersource",title:"Transacciones con cybersource",to:"\u002Ftransactions-with-cybersource"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n"," ",",","(",")","string","single-quoted-string","code","operator","number","li","a","p","-\u003E","function","true",-1,"icon","icon-link","PagaloGT","\n    ","agrega-tus-credenciales-de-pagalogt","Agrega tus credenciales de PagaloGT","div","nuxt-content-highlight","pre","line-numbers","h4","keyword","\\",";","\n\n")));