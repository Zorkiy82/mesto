(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),n=".pop-up_type_profile",r=document.querySelector(n).querySelector("form"),o=".pop-up_type_card-add",i=document.querySelector(o).querySelector("form"),a={};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_baseGetMethod",value:function(e){return fetch("".concat(this._baseUrl).concat(e),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_basePatchOrPostMethod",value:function(e,t,n){return fetch("".concat(this._baseUrl).concat(e),{method:t,headers:this._headers,body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._baseGetMethod("/users/me")}},{key:"getCardsArray",value:function(){return this._baseGetMethod("/cards")}},{key:"patchUserInfo",value:function(e){return this._basePatchOrPostMethod("/users/me","PATCH",e)}},{key:"postCardData",value:function(e){return this._basePatchOrPostMethod("/cards","POST",e)}},{key:"deleteCard",value:function(e){return this._basePatchOrPostMethod("/cards/".concat(e),"DELETE",{})}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.name,this._link=t.link,this._id=t._id,this._cardTemplateSelector=n,this._handleElementImageClick=r,this._like=!1,this._likesCounter=t.likes.length,this._isCurentUserCard=o===t.owner._id,this._handleDeleteButton=i}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector)}},{key:"_handleLike",value:function(){this._elementLikeButton.classList.toggle("card__like_is-active"),this._like=!this._like}},{key:"deleteElementCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._elementLikeButton.addEventListener("click",(function(){e._handleLike()})),this._isCurentUserCard&&this._elementDeleteButton.addEventListener("click",(function(){e._handleDeleteButton(e)})),this._elmentImage.addEventListener("click",(function(){e._handleElementImageClick(e._link,e._title)}))}},{key:"createCard",value:function(){return this._element=this._getTemplate().content.querySelector(".card").cloneNode(!0),this._elmentImage=this._element.querySelector(".card__image"),this._elementTitel=this._element.querySelector(".card__title"),this._elementLikeButton=this._element.querySelector(".card__like"),this._elementDeleteButton=this._element.querySelector(".card__delete-button"),this._isCurentUserCard||this._elementDeleteButton.remove(),this.elementLikesCounter=this._element.querySelector(".card__likes-counter"),this._element.id=this._id,this._elmentImage.src=this._link,this._elmentImage.alt=this._title,this._elementTitel.textContent=this._title,this.elementLikesCounter.textContent=this._likesCounter,this._setEventListeners(),this._element}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this.enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._closeMetod=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){var e=this._closeMetod;window.addEventListener("keydown",e),this._popupElement.classList.add("popup_opened")}},{key:"close",value:function(){var e=this._closeMetod;window.removeEventListener("keydown",e),this._popupElement.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){var n=t.target.classList;(n.contains("pop-up")||n.contains("pop-up__close-button"))&&e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupElementImage=t._popupElement.querySelector("img"),t._popupElementTitel=t._popupElement.querySelector("p"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.link,n=e.title;this._popupElementImage.src=t,this._popupElementImage.alt=n,this._popupElementTitel.textContent=n,v(S(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function I(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formElement=n._popupElement.querySelector("form"),n._inputList=Array.from(n._formElement.querySelectorAll("input")),n._handleSubmit=t,n}return t=a,(n=[{key:"_getInputsValue",value:function(){var e=this;return this._inputsValue={},this._inputList.forEach((function(t){return e._inputsValue[t.name]=t.value})),this._inputsValue}},{key:"setInputValue",value:function(e,t){this._inputList.forEach((function(n){n.name===e&&(n.value=t)}))}},{key:"setEventListeners",value:function(){var e=this;L(B(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputsValue())}))}},{key:"close",value:function(){this._formElement.reset(),L(B(a.prototype),"close",this).call(this)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userAboutElement=document.querySelector(r),this._userAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{nameText:this._userNameElement.textContent,aboutText:this._userAboutElement.textContent}}},{key:"setUserData",value:function(e){this._userAvatarElement.src=e.avatar,this._userNameElement.textContent=e.name,this._userAboutElement.textContent=e.about,this._id=e._id}},{key:"getUserId",value:function(){return this._id}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){F.open({link:e,title:t})}function U(e){return new c(e,"#card",D,V.getUserId(),R).createCard()}function R(e){H.cardForDelete=e,H.open()}var x=new s({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"113896b8-685b-4e8f-b932-f30a44a399cc","Content-Type":"application/json"}}),V=new A({nameSelector:".profile__user-name",aboutSelector:".profile__user-about",avatarSelector:".profile__user-avatar"});x.getUserInfo().then((function(e){V.setUserData(e)})).catch((function(e){alert(e)}));var M=new T(n,(function(e){var t=e.userName,n=e.userAbout;x.patchUserInfo({name:t,about:n}).then((function(e){V.setUserData(e)})).catch((function(e){alert(e)})),M.close()}));M.setEventListeners();var N=new T(o,(function(e){var t=e.cardTitel,n=e.imageURL;x.postCardData({name:t,link:n}).then((function(e){var t=U(e);z.addItem(t),N.close()})).catch((function(e){alert(e)}))}));N.setEventListeners();var F=new w(".pop-up_for-image");F.setEventListeners();var z=new _({renderer:function(e){var t=U(e);z.addItem(t)}},".cards");x.getCardsArray().then((function(e){z.renderItems(e.reverse())})).catch((function(e){alert(e)}));var G,H=new T(".pop-up_type_are-you-sure",(function(){x.deleteCard(H.cardForDelete._id).then((function(e){H.close(),H.cardForDelete.deleteElementCard(),H.cardForDelete={}})).catch((function(e){H.close(),H.cardForDelete={},alert(e)}))}));H.setEventListeners(),G={formSelector:".page__form",inputSelector:".pop-up__input",submitButtonSelector:".pop-up__submit-button",inactiveButtonClass:"pop-up__submit-button_disabled",inputErrorClass:"pop-up__input_error",errorClass:"pop-up__input-text-error_visible"},Array.from(document.querySelectorAll(G.formSelector)).forEach((function(e){var t=new p(G,e),n=e.getAttribute("name");a[n]=t,t.enableValidation()})),e.addEventListener("click",(function(){var e=V.getUserInfo();M.setInputValue("userName",e.nameText),M.setInputValue("userAbout",e.aboutText),a[r.getAttribute("name")].resetValidation(),a[r.getAttribute("name")].enableSubmitButton(),M.open()})),t.addEventListener("click",(function(){a[i.getAttribute("name")].resetValidation(),a[i.getAttribute("name")].disableSubmitButton(),N.open()}))})();