(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(89)),b={id:"masked_text_field",title:"Masked Text Field"},c={unversionedId:"masked_text_field",id:"masked_text_field",isDocsHomePage:!1,title:"Masked Text Field",description:"Description",source:"@site/docs/masked_text_field.md",slug:"/masked_text_field",permalink:"/SQForm/docs/masked_text_field",editUrl:"https://github.com/SelectQuoteLabs/SQForm/edit/master/docs/masked_text_field.md",version:"current",sidebar:"someSidebar",previous:{title:"Text Field",permalink:"/SQForm/docs/text_field"},next:{title:"useForm",permalink:"/SQForm/docs/use_form"}},i=[{value:"Description",id:"description",children:[]},{value:"Props",id:"props",children:[]},{value:"Masks",id:"masks",children:[]},{value:"Example",id:"example",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"A text field that forces the user input text to follow a defined pattern. The enforced pattern is called a mask. In addition to limiting the input, masks also help with how the field is displayed. Examples include zip codes and phone numbers. For a phone number the ",Object(l.b)("inlineCode",{parentName:"p"},"(")," ",Object(l.b)("inlineCode",{parentName:"p"},")")," and ",Object(l.b)("inlineCode",{parentName:"p"},"-")," will be added to the field without the user needing to type those characters."),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mask"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object, array, or function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid mask array. Custom or from utils/masks.js")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the field will be the Object key of the key/value pair form payload")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Descriptive label of the input")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"placeholder"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Placeholder text used inside the input field to provide hints to the user")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Disabled property to disable the input if true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"'auto' or a number 1 - 12"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Size of the input given full-width is 12.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onBlur"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom onBlur event callback")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom onChange event callback")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"startAdornment"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adornment that appears at the start of the input")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endAdornment"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adornment that appears at the end of the input")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines the input type for the text field. Must be a valid HTML5 input type")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"InputProps"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Props applied to the Input element")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"inputProps"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Attributes applied to the ",Object(l.b)("inlineCode",{parentName:"td"},"input")," element")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"muiFieldProps"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any valid prop for MUI text input child component ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://material-ui.com/api/text-field/#props"}),"https://material-ui.com/api/text-field/#props"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stripNonNumeric"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The submitted value from the input will have all non-numeric characters removed")))),Object(l.b)("h2",{id:"masks"},"Masks"),Object(l.b)("p",null,"For convenience several common masks are provided."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"phone: US Phone numbers ","*","*","Will allow invalid phone numbers see note below"),Object(l.b)("li",{parentName:"ul"},"zip: US address zip codes"),Object(l.b)("li",{parentName:"ul"},"currency: a number only mask that allows decimal values."),Object(l.b)("li",{parentName:"ul"},"percent: a number mask that adds a ",Object(l.b)("inlineCode",{parentName:"li"},"%")," as a suffix"),Object(l.b)("li",{parentName:"ul"},"email: provided from the ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/text-mask/text-mask/tree/master/addons/#emailmask"}),"text-mask module")),Object(l.b)("li",{parentName:"ul"},"date: a mask to allow the date form of ",Object(l.b)("inlineCode",{parentName:"li"},"MM/DD/YYYY")),Object(l.b)("li",{parentName:"ul"},"ssn: a mask to include the dashes in the xxx-xx-xxxx form of social security numbers.")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The included phone mask is to get the correct format not to force a valid phone number. Historically it had prevented a ",Object(l.b)("inlineCode",{parentName:"p"},"1")," in the fourth position. For example: ",Object(l.b)("inlineCode",{parentName:"p"},"(555) 155-5555")),Object(l.b)("p",{parentName:"div"},"For US phone numbers the fourth digit cannot be a one. Use Yup to validate your phone numbers and do not rely on the mask for validation."))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("p",null,"Using the phone mask for a fax number field:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import {\n  SQFormMaskedTextField,\n  MASKS\n} from \'@selectquotelabs/sqform\n\n/* omitted code for brevity */\n\n   <SQFormMaskedTextField\n     name="faxNumber"\n     label="Fax number"\n     size={12}\n     mask={MASKS.phone}\n   />\n')))}p.isMDXComponent=!0},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,O=d["".concat(b,".").concat(u)]||d[u]||m[u]||l;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);