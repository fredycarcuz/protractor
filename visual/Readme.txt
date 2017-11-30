How to use

------------------------------------------------------------------------
General Use
-------------------------------------------------------------------------
backstop reference --config=settings.js
     backstop test --config=settings.js

backstop reference --config=settings.js --siteAlias=CCIU
     backstop test --config=settings.js --siteAlias=CCIU

backstop reference --config=settings.js --pages=get-quotes/,contact/
     backstop test --config=settings.js --pages=get-quotes/,contact/

backstop reference --config=settings.js --pageList=pagelist
     backstop test --config=settings.js --pageList=pagelist

backstop reference --config=settings.js --refUrl=https://example.com
     backstop test --config=settings.js --testUrl=http://dev.example.com
--------------------------------------------------------------------------



------------------------------------------------------------------------
Examples
-------------------------------------------------------------------------
//defaul: CCIU - get-quotes
backstop reference --config=settings.js
     backstop test --config=settings.js

//Pass the site - page default: get-quotes
backstop reference --config=settings.js --siteAlias=AIF
     backstop test --config=settings.js --siteAlias=AIF

//Pass the site - Pass the page
backstop reference --config=settings.js --siteAlias=CCIU --pages=form/
     backstop test --config=settings.js --siteAlias=CCIU --pages=form/

//Pass the site - Pass ALL the pages
backstop reference --config=settings.js --siteAlias=CCIU --pageList=pagelist
     backstop test --config=settings.js --siteAlias=CCIU --pageList=pagelist


//Pass the site - Pass the URL 
backstop reference --config=settings.js --refUrl=https://www.cheapcarinsuranceusa.com/
     backstop test --config=settings.js --testUrl=http://dev-sem.vm.local/~caguirre/auto-sem-cheapcarinsuranceusa.com/


//Pass the device - defaul: desktop
backstop reference --config=settings.js --device=mobile
     backstop test --config=settings.js --device=mobile