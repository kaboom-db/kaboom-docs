"use strict";(self.webpackChunkkaboom_docs=self.webpackChunkkaboom_docs||[]).push([[7264],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4807:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={slug:"self-host-kaboom",title:"How to self host Kaboom",authors:["crxssed"],tags:["selfhost"]},l=void 0,d={permalink:"/kaboom-docs/blog/self-host-kaboom",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-03-11-selfhost-kaboom/index.md",source:"@site/blog/2022-03-11-selfhost-kaboom/index.md",title:"How to self host Kaboom",description:"The only way to signup and use Kaboom as of right now is to host it yourself.",date:"2022-03-11T00:00:00.000Z",formattedDate:"March 11, 2022",tags:[{label:"selfhost",permalink:"/kaboom-docs/blog/tags/selfhost"}],readingTime:4.475,truncated:!1,authors:[{name:"Tanveer Najib",title:"Maintainer of Kaboom",url:"https://github.com/crxssed7",imageURL:"https://github.com/crxssed7.png",key:"crxssed"}],frontMatter:{slug:"self-host-kaboom",title:"How to self host Kaboom",authors:["crxssed"],tags:["selfhost"]}},u={authorsImageUrls:[void 0]},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Cloning the repository",id:"cloning-the-repository",level:2},{value:"DB Secrets",id:"db-secrets",level:2},{value:"Applying settings",id:"applying-settings",level:2},{value:"PGSQL",id:"pgsql",level:3},{value:"SENDGRID",id:"sendgrid",level:3},{value:"AWS_S3",id:"aws_s3",level:3},{value:"Setting up the database",id:"setting-up-the-database",level:2},{value:"Running",id:"running",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The only way to signup and use Kaboom as of right now is to host it yourself. "))),(0,r.kt)("p",null,"Kaboom is quite simple to self host and provides some customizability. Follow this step-by-step guide to get it set up."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Before setting up Kaboom you need to make sure you have ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python")," installed. Head over to the Python website and follow the install instructions for your system."),(0,r.kt)("p",null,"To check if Python is already installed, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python -v\n")),(0,r.kt)("p",null,"OR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -v\n")),(0,r.kt)("p",null,"Kaboom needs a minimum of Python version 3.10.2"),(0,r.kt)("h2",{id:"cloning-the-repository"},"Cloning the repository"),(0,r.kt)("p",null,"If you have Git installed on your machine you can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kaboom-db/kaboom-api\n")),(0,r.kt)("p",null,"If you don't have Git, head over to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kaboom-db/kaboom-api"},"https://github.com/kaboom-db/kaboom-api")," and click the green 'Code' button and then 'Download ZIP'. Unzip the folder to your desired location. Note that downloading the file instead of cloning the repo means that you won't be able to recieve updates with ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull"),"."),(0,r.kt)("p",null,"You now need to install the Python requirements. In a terminal, navigate to the Kaboom folder and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,r.kt)("h2",{id:"db-secrets"},"DB Secrets"),(0,r.kt)("p",null,"Kaboom uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"db_secrets.py")," file to 'hide' your sensitive credentials from the git repo. The file should be located in the inner ",(0,r.kt)("inlineCode",{parentName:"p"},"kaboom/")," folder. There is already a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"db_secrets.example.py")," with this in it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Not needed if you don't use PGSQL\nDB_NAME = ''\nDB_USER = ''\nDB_PASS = ''\nDB_HOST = ''\nDB_PORT = ''\n\n# Django Secret Key. This needs to be generated on first setup.\nDJ_SECRET_KEY = '<secret_key>'\n\n# Needed if you want to use AWS S3 for file uploads\nAWS_ACCESS_KEY = ''\nAWS_SECRET_ACCESS_KEY = ''\nAWS_BUCKET_NAME = ''\nAWS_S3_SIGNATURE_VERSION = 's3v4'\nAWS_S3_REGION_NAME = ''\nAWS_S3_FILE_OVERWRITE = False\nAWS_DEFAULT_ACL = None\nAWS_S3_VERIFY = True\nAWS_QUERYSTRING_AUTH = False\n\n# Needed if you want to send emails via SendGrid\nSENDGRID_APIKEY = ''\nEMAIL_HOST = 'smtp.sendgrid.net'\nEMAIL_HOST_USER = '' # In some cases, this may have to be 'apikey'\nEMAIL_PORT = 587\n# If using SendGrid, this email needs to have permissions in your SendGrid account.\nDEFAULT_FROM_EMAIL = ''\n")),(0,r.kt)("p",null,"We first need to generate the Django Secret Key. In a terminal, navigate to the Kaboom folder and run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python gen_key.py\n")),(0,r.kt)("p",null,"This will automatically replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<secret_key>")," with a new secret key."),(0,r.kt)("p",null,"Rename the ",(0,r.kt)("inlineCode",{parentName:"p"},"db_secrets.example.py")," file to ",(0,r.kt)("inlineCode",{parentName:"p"},"db_secrets.py"),". If you're less knowledgable about PGSQL, Sendgrid and S3, it's recommended that you leave everything as default and skip ahead to the next step."),(0,r.kt)("p",null,"If you want a more advanced instance of Kaboom, with email and global image uploads functionality, have a look at setting up Sendgrid (emails) and AWS S3 (image uploads). You then need to add your credentials to this file, so that Kaboom can connect to the services. Bare in mind that emails and image uploads still work without them, but are a bit less functional (this is explained in the next step)"),(0,r.kt)("p",null,"Kaboom has the ability to use two different types of databases - PostgreSQL or SQLite. If you use PostgreSQL, you will have to provide your database credentials also."),(0,r.kt)("h2",{id:"applying-settings"},"Applying settings"),(0,r.kt)("p",null,"The first thing to do before setting up the database and creating a user is tweaking your settings. In the downloaded/cloned folder, open the file ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.py")," (located in the same folder as ",(0,r.kt)("inlineCode",{parentName:"p"},"db_secrets.py"),") in a text editor. Near the top of the file you'll find the following three lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"PGSQL = True\nSENDGRID = False\nAWS_S3 = False\n")),(0,r.kt)("p",null,"The values for these entirely depend on how you have setup your ",(0,r.kt)("a",{parentName:"p",href:"#db-secrets"},"db_secrets.py")," in the last step. If you left your db_secrets as default in the last step, set all three of these values to ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),", as you won't be needing them."),(0,r.kt)("h3",{id:"pgsql"},"PGSQL"),(0,r.kt)("p",null,"If PGSQL is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),", Kaboom will attempt to connect to the PostgreSQL database defined in db_secrets.py using the given credentials. If it's set to ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," it will default to SQLite, creating the database in the root directory of Kaboom with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"db.sqlite3"),"."),(0,r.kt)("h3",{id:"sendgrid"},"SENDGRID"),(0,r.kt)("p",null,"If you're planning on having multiple users on your Kaboom instance, you may need to send out emails for account confirmations and password resets. Setting this value to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," will let Kaboom send emails via the Sendgrid SMTP using your credentials, provided in db_secrets.py. If you don't need to send out emails, setting this to ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," will store the emails in plaintext in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sent_emails")," folder, located in the root directory of Kaboom."),(0,r.kt)("h3",{id:"aws_s3"},"AWS_S3"),(0,r.kt)("p",null,"You might want to use AWS S3 to store your image uploads instead of storing them on your machine. Setting this to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," will upload any images (covers, background etc) to the S3 bucket specified in db_secrets.py. This may be overkill for some users though, so setting it to ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," will be good enough for most people."),(0,r.kt)("h2",{id:"setting-up-the-database"},"Setting up the database"),(0,r.kt)("p",null,"After changing your settings, you can now setup your database and your super user."),(0,r.kt)("p",null,"In a terminal, navigate to the Kaboom folder and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python manage.py migrate\n")),(0,r.kt)("p",null,"and"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python manage.py collectstatic\n")),(0,r.kt)("p",null,"You then need to create a super user (this is basically a normal user but has full control of the database):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python manage.py createsuperuser\n")),(0,r.kt)("p",null,"Run through the instructions to create your user."),(0,r.kt)("h2",{id:"running"},"Running"),(0,r.kt)("p",null,"To start Kaboom, run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python manage.py runserver 0.0.0.0:8000\n")))}m.isMDXComponent=!0}}]);