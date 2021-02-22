window.__NUXT__=(function(a,b,c,d,e,f){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1613972544",layout:"default",error:null,state:{categories:{en:{Introduction:[{slug:"index",title:a,category:a,to:"\u002F"},{slug:"setup",title:"Setup",category:a,to:d}],"Using the package":[{slug:"payments-on-testing",title:"Payments on development and testing environments",category:b,to:"\u002Fpayments-on-testing"},{slug:"payments-on-production",title:"Payments on production",category:b,to:"\u002Fpayments-on-production"},{slug:"transactions-with-cybersource",title:"Cybersource transactions",category:b,to:"\u002Ftransactions-with-cybersource"}],Support:[{slug:"support",title:"Support the project",category:"Support",to:"\u002Fsupport"}],Community:[{slug:"releases",title:"Releases",category:"Community",to:"\u002Freleases"}]}},releases:[{name:"5.0.0",date:"2021-02-22T00:36:48Z",body:"\u003Cp\u003Eit adds two new methods:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003Eresponse\u003C\u002Fcode\u003E, to get the payment response.\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003EisSuccessful()\u003C\u002Fcode\u003E, to make easier to validate if the payment is executed successfully and avoid confusion between \u003Ccode\u003Eresponse()-&gt;successful\u003C\u002Fcode\u003E as the response state.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"4.0.0",date:"2020-09-14T01:58:38Z",body:"\u003Ch1 id=\"400\"\u003E4.0.0\u003C\u002Fh1\u003E\n\u003Cp\u003EAdd support for Laravel 8.\u003C\u002Fp\u003E\n"},{name:"3.0.0",date:"2020-09-14T01:49:22Z",body:"\u003Ch1 id=\"300\"\u003E3.0.0\u003C\u002Fh1\u003E\n\u003Cp\u003EAdd support for Laravel 7 and improvements on response, now you can validate response with helpers:\u003C\u002Fp\u003E\n\u003Cp\u003Eresponse methods:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-php\"\u003E$response = PagaloGT::add(1, &#39;product&#39;, 100.00)-&gt;withTestCard()-&gt;withTestCredentials()-&gt;pay();\nif($response-&gt;successful()) {\n    \u002F\u002F do something\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003Emethods:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-php\"\u003E$response-&gt;fail();\n$response-&gt;successful();\n$response-&gt;ok()\n$response-&gt;header(&#39;single header&#39;);\n$response-&gt;headers();\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"},{name:"2.0.0",date:"2020-09-14T01:24:24Z",body:"\u003Ch1 id=\"200\"\u003E2.0.0\u003C\u002Fh1\u003E\n\u003Cp\u003ESupport for Laravel 6\u003C\u002Fp\u003E\n"},{name:"1.0.0",date:"2020-09-14T00:12:18Z",body:"\u003Ch1 id=\"100\"\u003E1.0.0\u003C\u002Fh1\u003E\n\u003Cp\u003EInitial release for Laravel 5.5\u003C\u002Fp\u003E\n"}],settings:{title:"Laravel pagaloGT",url:"https:\u002F\u002Flaravel-pagalogt.netlify.app\u002F",defaultDir:"docs",defaultBranch:"master",filled:c,logo:{light:"\u002Flogo-light.png",dark:"\u002Flogo-dark.png"},github:"ArielMejiaDev\u002Fpagalogt",twitter:"@ArielMejiaDev"},menu:{open:e},i18n:{routeParams:{}}},serverRendered:c,routePath:d,config:{content:{dbHash:"c8ede437"}},__i18n:{langs:{en:{search:{placeholder:"Search the docs (Press \"\u002F\" to focus)"},toc:{title:"On this page"},article:{github:"Edit this page on GitHub"}}}},colorMode:{preference:f,value:f,unknown:c,forced:e}}}("Introduction","Using the package",true,"\u002Fsetup",false,"system"));