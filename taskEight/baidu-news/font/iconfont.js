;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-baidu01" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M909.578506 396.544455c-5.829775-13.726629-15.033391-25.39539-26.164916-35.431977-55.714929-50.235125-139.594315-25.722848-159.613254 46.479591-5.814426 20.972661-7.179516 42.304502-6.879688 63.86147 0 6.049786-0.045025 12.099572 0.005117 18.149359 0.760317 90.421382 60.569494 116.975155 134.786823 103.785761 26.246781-4.66423 46.39261-19.761066 56.453756-44.13622C928.946622 498.904751 931.244968 447.555246 909.578506 396.544455z"  ></path>'+
      ''+
      '<path d="M212.39283 537.631774c43.976584-4.228301 72.90545-28.380374 86.973864-70.091358 6.719028-19.919678 8.496511-40.702004 8.908904-61.491493 0.926092-51.008744-18.799158-91.834568-61.122079-120.376625-38.195927-25.76071-83.839477-20.545942-109.813035 15.335267-40.162722 55.490825-51.373041 116.239398-20.343327 180.25641C137.267828 523.083429 169.360757 541.769001 212.39283 537.631774z"  ></path>'+
      ''+
      '<path d="M685.006797 342.408487c50.749848-24.145933 73.77526-69.976748 79.963193-122.949216 5.885034-50.375318-17.718547-89.974197-57.997925-119.070886-28.444842-20.550035-53.471842-20.405749-81.635275 1.006933-43.965328 33.426297-70.417793 76.872808-69.431326 133.870963 0 8.061606-0.74906 16.205077 0.115634 24.172539C563.691801 330.080717 625.459586 370.739742 685.006797 342.408487z"  ></path>'+
      ''+
      '<path d="M466.419384 309.953308c49.960879-56.697303 48.357358-165.233252-3.242857-219.415268-34.212196-35.926234-81.128739-36.251645-115.190509-0.070608-29.231765 31.052227-39.392172 69.318762-39.676651 110.930485-0.236384 39.492456 9.267061 75.994812 34.71157 106.903775C377.999588 350.784248 430.069501 351.203804 466.419384 309.953308z"  ></path>'+
      ''+
      '<path d="M421.993568 766.335592c0-16.776082 0.081864-33.55114-0.050142-50.325176-0.039909-5.090948 1.393743-12.1886-6.655584-11.982916-19.267832 0.49221-39.108716-4.433986-57.658188 3.87833-26.194592 11.738345-40.844244 44.564985-34.073026 74.704422 6.913457 30.764678 26.072819 45.617967 59.086723 45.760207 9.392928 0.039909 18.812461-0.427742 28.17469 0.11154 8.972349 0.517793 11.570523-3.324722 11.323906-11.824303C421.651784 799.894919 421.996638 783.109628 421.993568 766.335592z"  ></path>'+
      ''+
      '<path d="M801.67189 681.007205c-56.078203-43.145659-106.039082-93.252871-149.776212-149.207253-14.478759-18.525935-26.51284-38.869263-42.906206-56.000432-65.670675-68.62803-166.146041-63.399959-219.331357 15.663748-41.685401 61.971423-94.166683 111.825878-151.863756 157.490917-23.388686 18.510586-42.931788 40.333614-59.619866 65.222467-55.852052 83.305311-6.037507 243.35347 127.497812 237.925854 44.478004-1.808182 88.751347-3.490497 132.275629-12.760628 57.247842-12.193717 113.436562-9.137101 169.427784 7.18361 31.091112 9.0624 63.038732 13.685697 100.582813 13.969153 44.938492-1.363044 93.051279-9.748015 123.023918-54.829769C876.113323 837.789994 877.133559 739.066529 801.67189 681.007205zM460.755384 879.616612c-32.247448-1.080611-64.561411 0.041956-96.837512-0.419556-59.365062-0.846274-102.554724-49.390897-102.386902-114.505917 0.152473-59.432601 47.105854-109.48353 103.45728-110.169145 14.794961-0.180102 29.628808-0.652869 44.378743 0.168846 10.939143 0.608867 13.837146-3.673669 13.468756-13.960966-0.673335-18.807345 0.097214-37.662785-0.302899-56.485479-0.179079-8.451486 2.469238-12.844539 11.43954-11.80179 0.663102 0.077771 1.343601 0.056282 2.013867 0.026606 43.799552-1.961678 43.799552-1.961678 43.799552 42.095747 0 36.991496 0 73.982992 0 110.973464-0.00307 45.062312-0.691755 90.140996 0.375553 135.177726C480.530776 876.263238 475.589231 880.113939 460.755384 879.616612zM701.475887 878.556467c-40.993646-0.711198-82.025155 0.483001-123.008568-0.50449-39.679721-0.956791-67.209728-30.546713-67.24145-70.168106-0.036839-43.023886 0.465604-86.053911-0.291642-129.064494-0.234337-13.21293 3.781116-17.044188 16.984836-17.223267 42.979884-0.582261 42.971697-1.13587 42.971697 40.859593 0.00307 30.922267-0.155543 61.84658 0.058328 92.767823 0.14224 20.166295 7.673773 27.740808 27.695782 28.836769 54.582129 2.983961 54.582129 2.983961 54.582129-51.435463 0-31.594579 0.51063-63.203484-0.252757-94.77862-0.299829-12.461823 3.866051-15.824407 16.08842-16.009625 47.605228-0.723477 47.600111-1.155313 47.600111 46.736441 0 20.839631 0 41.678238 0 62.517869-0.00307 30.250978-0.457418 60.511165 0.226151 90.746794C717.153962 873.561709 714.545554 878.784664 701.475887 878.556467z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M945.5 960.165c-10.833 0-17.667-10.2-17.667-21 0-37.283-36.695-111.366-87.333-182.165C789.94 686.304 728.914 620.461 690 602.75c-4.999-2.916-3.804-0.635-5.823-6.505 0.251-5.749 3.457-7.99 8.323-12.415 57.323-52.092 88-127.273 88-205.997 0-150.785-123.834-282.667-268.692-282.667C366.952 95.167 243.5 227.715 243.5 378.5c0 78.74 33.031 154.592 90.333 206.667 4.867 4.425 8.352 7.51 7.333 14-1.019 6.487-5.342 9.27-11.333 12-38.903 17.718-100.111 78.634-150.667 149.33-50.633 70.804-80.667 140.727-80.667 178 0 10.801-3.693 19.812-14.526 19.812-10.834 0-19.617-8.755-19.617-19.555 0-24.717 9.059-56.43 26.926-94.254 15.724-33.287 37.755-70.068 63.71-106.361 25.693-35.929 53.73-69.303 81.075-96.512 20.627-20.522 39.973-36.728 57.796-48.432-23.181-24.969-42.018-53.469-56.164-85.019-18.468-41.19-27.832-85.253-27.832-130.962 0-83.342 31.307-161.734 88.154-220.736 57.058-59.221 132.981-91.835 213.786-91.835 80.793 0 156.713 32.613 213.772 91.833 56.854 59.006 88.165 137.399 88.165 220.737 0 80.647-30.342 157.947-84.045 215.962 17.836 11.702 37.193 27.91 57.83 48.44 27.351 27.206 55.389 60.577 81.084 96.507 25.959 36.296 47.989 73.077 63.715 106.366 17.868 37.828 26.928 69.545 26.928 94.264C959.259 949.554 956.336 960.165 945.5 960.165z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangxia" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M853.0432 414.55616c-4.23936-7.35232-13.63968-9.86112-20.98176-5.62176L511.8464 593.8176 191.62112 408.9344c-7.34208-4.23936-16.7424-1.72032-20.98176 5.62176-4.23936 7.34208-1.72032 16.7424 5.62176 20.98176l325.7344 188.06784c2.79552 2.2528 6.28736 3.40992 9.84064 3.35872 3.55328 0.0512 7.04512-1.10592 9.84064-3.35872l325.74464-188.06784C854.77376 431.29856 857.28256 421.90848 853.0432 414.55616z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shizi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M451.413333 0l121.173333 0 0 1024-121.173333 0 0-1024Z"  ></path>'+
      ''+
      '<path d="M0 451.413333l1024 0 0 121.173333-1024 0 0-121.173333Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1010.255261 935.96091l-0.028444-0.028443v0.028443h0.028444c9.130355 10.666302 13.709754 22.470343 13.709754 35.412124 0 14.477728-5.148269 26.850638-15.444806 37.147175A50.686268 50.686268 0 0 1 971.34459 1023.965015c-6.115347 0-12.003145-0.967078-17.720283-2.872791a47.216165 47.216165 0 0 1-15.444806-8.533042l-5.717138-4.579399-282.529014-284.5485c-67.837682 48.012582-143.724867 71.990429-227.604667 71.990429-8.390824 0-16.95231-0.369765-25.7129-1.109295a277.608293 277.608293 0 0 1-25.741342-3.441661 368.058536 368.058536 0 0 1-162.440673-59.446857c-53.359955-34.274385-96.053607-79.584836-128.080957-135.988243a370.902883 370.902883 0 0 1-36.03788-83.424705 408.39138 408.39138 0 0 1-16.013675-90.279582 387.172549 387.172549 0 0 1 5.148269-91.417321 377.331108 377.331108 0 0 1 50.344946-137.723295 380.374559 380.374559 0 0 1 98.357529-109.137604c33.563298-26.679977 71.108682-47.244608 112.664595-61.722336A384.925515 384.925515 0 0 1 422.328682 0c18.317596 0 35.838776 1.137739 52.648867 3.44166 44.96913 6.086903 88.032548 19.796657 129.218697 41.129262a381.483855 381.483855 0 0 1 107.54477 82.286966c35.810332 37.34628 63.059179 81.518993 81.74654 132.575026 18.687362 51.056033 26.907525 102.851597 24.603604 155.415134-3.043452 87.634339-33.165089 166.479645-90.364913 236.564362l283.638309 284.5485h-1.109295z m-251.639403-522.250601a320.557936 320.557936 0 0 0-22.868552-137.125981 323.572945 323.572945 0 0 0-40.048409-75.43209c-16.781649-23.608082-36.407645-44.741582-58.877988-63.428944a338.477324 338.477324 0 0 0-72.616186-46.305973 332.276647 332.276647 0 0 0-178.425904-28.557246 52.620424 52.620424 0 0 0-10.296537 1.137738l-6.88332 1.137739a324.568466 324.568466 0 0 0-135.533147 54.270146 323.260066 323.260066 0 0 0-98.926398 106.862127c-28.187481 46.448191-43.632287 98.272198-46.334417 155.415134-2.673686 57.142937 7.793511 110.104683 31.458481 158.856795a319.989067 319.989067 0 0 0 86.325939 114.285873 330.570039 330.570039 0 0 0 126.374349 67.439473c48.808999 13.709754 97.987763 16.38344 147.536293 7.992616a332.617969 332.617969 0 0 0 75.517419-22.840108 345.81574 345.81574 0 0 0 68.036787-39.422653 346.356166 346.356166 0 0 0 57.199823-53.72972c17.151414-20.194866 31.458481-42.096339 42.892757-65.704422v0.028444a328.152344 328.152344 0 0 0 35.46901-134.878948z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
