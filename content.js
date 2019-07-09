$(document).ready(function(){
  var sitesToExclude = [];
  var elementsWithModifiedContents = [];

  function excludeSite(site) {
    sitesToExclude.push(site);
  }

  //https://stackoverflow.com/questions/406192/get-current-url-with-jquery
  var currentUrlDomain = window.location.origin;

  var totalSites =sitesToExclude.length;
  if(totalSites ==0) {
    hookupEventHandler($(":text,textarea"));
    wireupPtagHandlers();

    return;
  }

  if(totalSites !=0) {
    try {
      sitesToExclude.forEach(function(siteToExclude) {
        if(!siteToExclude.includes(currentUrlDomain)) {
          hookupEventHandler($(":text,textarea"));
          wireupPtagHandlers();

          throw BreakException;
        }
      });
    }
    catch (e) {
      if (e !== BreakException) {
        throw e;
      }
    }
  }

  function setText(htmlControl, tagName, updatedStr) {
    if(tagName.toUpperCase()==='INPUT' || tagName.toUpperCase()==='TEXTAREA') {
      htmlControl.val(updatedStr);
      return;
    }

    htmlControl.html(updatedStr);

    elementsWithModifiedContents.push(htmlControl.html());
  }

  function getText(htmlControl, tagName) {
    if(tagName.toUpperCase()==='INPUT' || tagName.toUpperCase()==='TEXTAREA') {
      return htmlControl.val();
    }

    return htmlControl.html();
  }

  function capitaliseText(element) {
    if(elementsWithModifiedContents.indexOf(element.html()) >= 0)
      return;

    var htmlControl = $(element);

    var tagName = htmlControl.prop('tagName');
    var text = getText(htmlControl, tagName);

    if(text.length == 1) {
      setText(htmlControl, tagName, text.toUpperCase())
      return;
    }

    var regex =/\w+\s*(\.|\?)+\s+\w$/;
    var matches = regex.test(text);

    if(matches) {
      var lastChar = text.slice(-1);
      var updatedStr = text.substr(0, text.length-1) + lastChar.toUpperCase();

      setText(htmlControl, tagName, updatedStr)
    }

    // console.log(event);
  }

  function hookupEventHandler(element) {
    element.keydown(function(event){
      capitaliseText(event.target);
    });
  }

  function hookupHtmlChangeEventHandler(element) {
    var observer = new MutationObserver(function(mutations, observer) {
      $.each(mutations, function (i, mutation) {
        var target = $(mutation.target);

        capitaliseText(target);
      });
    });

    var config = {
      childList: true,
      characterData: true
    };

    observer.observe(element, config);
  }

  function wireupPtagHandlers() {
    var target = document.querySelector("div");

    var observer = new MutationObserver(function(mutations, observer) {
      $.each(mutations, function (i, mutation) {
        var addedNodes = $(mutation.addedNodes);
        var selector = "p"
        var filteredEls = addedNodes.find(selector).addBack(selector); // finds either added alone or as tree
        filteredEls.each(function(index, element) {
          hookupHtmlChangeEventHandler(element);
        });
      });
    });


    var config = {
      childList: true,
      subtree: true,
      characterData: true
    };

    observer.observe(target, config);
  }
});
