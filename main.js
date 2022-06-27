(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),n=document.querySelector(".profile__avatar-overlay"),r=".pop-up_type_profile",o=document.querySelector(r).querySelector("form"),i=".pop-up_type_card-add",a=document.querySelector(i).querySelector("form"),u=".pop-up_type_edit-avatar",s=document.querySelector(u).querySelector("form"),l={};function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_baseGetMethod",value:function(e){return fetch("".concat(this._baseUrl).concat(e),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_baseMethodWithBody",value:function(e,t,n){return fetch("".concat(this._baseUrl).concat(e),{method:t,headers:this._headers,body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._baseGetMethod("/users/me")}},{key:"getCardsArray",value:function(){return this._baseGetMethod("/cards")}},{key:"patchUserInfo",value:function(e){return this._baseMethodWithBody("/users/me","PATCH",e)}},{key:"patchUserAvatar",value:function(e){return this._baseMethodWithBody("/users/me/avatar","PATCH",e)}},{key:"postCardData",value:function(e){return this._baseMethodWithBody("/cards","POST",e)}},{key:"deleteCard",value:function(e){return this._baseMethodWithBody("/cards/".concat(e),"DELETE",{})}},{key:"setLike",value:function(e){return this._baseMethodWithBody("/cards/".concat(e,"/likes"),"PUT",{})}},{key:"deleteLike",value:function(e){return this._baseMethodWithBody("/cards/".concat(e,"/likes"),"DELETE",{})}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.name,this._link=t.link,this._id=t._id,this._curentUserId=o,this._cardTemplateSelector=n,this._handleElementImageClick=r,this._like=!1,this._likesArray=t.likes,this._likesCounter=t.likes.length,this._isCurentUserCard=this._curentUserId===t.owner._id,this._handleDeleteButton=i,this._handleLikeButton=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector)}},{key:"_toggleLikeState",value:function(){this._elementLikeButton.classList.toggle("card__like_is-active"),this._like=!this._like}},{key:"deleteElementCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._elementLikeButton.addEventListener("click",(function(){e._handleLikeButton(e)})),this._isCurentUserCard&&this._elementDeleteButton.addEventListener("click",(function(){e._handleDeleteButton(e)})),this._elmentImage.addEventListener("click",(function(){e._handleElementImageClick(e._link,e._title)}))}},{key:"updateLikeState",value:function(e){var t=this;this._likesArray=e,this._likesCounter=e.length,this.elementLikesCounter.textContent=this._likesCounter,this._likesArray.some((function(e){return e._id===t._curentUserId}))!==this._like&&this._toggleLikeState()}},{key:"createCard",value:function(){return this._element=this._getTemplate().content.querySelector(".card").cloneNode(!0),this._elmentImage=this._element.querySelector(".card__image"),this._elementTitel=this._element.querySelector(".card__title"),this._elementLikeButton=this._element.querySelector(".card__like"),this.elementLikesCounter=this._element.querySelector(".card__likes-counter"),this._elementDeleteButton=this._element.querySelector(".card__delete-button"),this.updateLikeState(this._likesArray),this._isCurentUserCard||this._elementDeleteButton.remove(),this._element.id=this._id,this._elmentImage.src=this._link,this._elmentImage.alt=this._title,this._elementTitel.textContent=this._title,this._setEventListeners(),this._element}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this.enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._closeMetod=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){var e=this._closeMetod;window.addEventListener("keydown",e),this._popupElement.classList.add("popup_opened")}},{key:"close",value:function(){var e=this._closeMetod;window.removeEventListener("keydown",e),this._popupElement.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){var n=t.target.classList;(n.contains("pop-up")||n.contains("pop-up__close-button"))&&e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function L(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupElementImage=t._popupElement.querySelector("img"),t._popupElementTitel=t._popupElement.querySelector("p"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.link,n=e.title;this._popupElementImage.src=t,this._popupElementImage.alt=n,this._popupElementTitel.textContent=n,g(C(a.prototype),"open",this).call(this)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function A(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formElement=n._popupElement.querySelector("form"),n._submitButton=n._formElement.querySelector("button"),n._inputList=Array.from(n._formElement.querySelectorAll("input")),n._handleSubmit=t,n}return t=a,(n=[{key:"_getInputsValue",value:function(){var e=this;return this._inputsValue={},this._inputList.forEach((function(t){return e._inputsValue[t.name]=t.value})),this._inputsValue}},{key:"setInputValue",value:function(e,t){this._inputList.forEach((function(n){n.name===e&&(n.value=t)}))}},{key:"setButtonText",value:function(e){this._submitButton.textContent=e}},{key:"setEventListeners",value:function(){var e=this;I(U(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputsValue())}))}},{key:"close",value:function(){this._formElement.reset(),I(U(a.prototype),"close",this).call(this)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userAboutElement=document.querySelector(r),this._userAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{nameText:this._userNameElement.textContent,aboutText:this._userAboutElement.textContent,avatarUrl:this._userAvatarElement.src}}},{key:"setUserData",value:function(e){this._userAvatarElement.src=e.avatar,this._userNameElement.textContent=e.name,this._userAboutElement.textContent=e.about,this._id=e._id}},{key:"getUserId",value:function(){return this._id}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){H.open({link:e,title:t})}function V(e){return new h(e,"#card",R,F.getUserId(),M,N).createCard()}function M(e){X.cardForDelete=e,X.open()}function N(e){e._like?W.deleteLike(e._id).then((function(t){e.updateLikeState(t.likes)})).catch((function(e){alert(e)})):W.setLike(e._id).then((function(t){e.updateLikeState(t.likes)})).catch((function(e){alert(e)}))}var W=new f({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"113896b8-685b-4e8f-b932-f30a44a399cc","Content-Type":"application/json"}}),F=new D({nameSelector:".profile__user-name",aboutSelector:".profile__user-about",avatarSelector:".profile__user-avatar"});W.getUserInfo().then((function(e){F.setUserData(e)})).catch((function(e){alert(e)}));var z=new q(r,(function(e){var t=e.userName,n=e.userAbout;z.setButtonText("Сохранение..."),W.patchUserInfo({name:t,about:n}).then((function(e){F.setUserData(e),z.close()})).catch((function(e){alert(e)})).finally((function(){z.setButtonText("Сохранить")}))}));z.setEventListeners();var G=new q(i,(function(e){var t=e.cardTitel,n=e.imageURL;G.setButtonText("Сохранение..."),W.postCardData({name:t,link:n}).then((function(e){var t=V(e);K.addItem(t),G.close()})).catch((function(e){alert(e)})).finally((function(){G.setButtonText("Создать")}))}));G.setEventListeners();var H=new O(".pop-up_for-image");H.setEventListeners();var J=new q(u,(function(e){J.setButtonText("Сохранение..."),W.patchUserAvatar({avatar:e.avatarURL}).then((function(e){F.setUserData(e),J.close()})).catch((function(e){alert(e)})).finally((function(){J.setButtonText("Сохранить")}))}));J.setEventListeners();var K=new m({renderer:function(e){var t=V(e);K.addItem(t)}},".cards");W.getCardsArray().then((function(e){K.renderItems(e.reverse())})).catch((function(e){alert(e)}));var Q,X=new q(".pop-up_type_are-you-sure",(function(){X.setButtonText("Удаление..."),W.deleteCard(X.cardForDelete._id).then((function(){X.cardForDelete.deleteElementCard()})).catch((function(e){alert(e)})).finally((function(){X.setButtonText("Да"),X.close(),X.cardForDelete={}}))}));X.setEventListeners(),Q={formSelector:".page__form",inputSelector:".pop-up__input",submitButtonSelector:".pop-up__submit-button",inactiveButtonClass:"pop-up__submit-button_disabled",inputErrorClass:"pop-up__input_error",errorClass:"pop-up__input-text-error_visible"},Array.from(document.querySelectorAll(Q.formSelector)).forEach((function(e){var t=new _(Q,e),n=e.getAttribute("name");l[n]=t,t.enableValidation()})),e.addEventListener("click",(function(){var e=F.getUserInfo();z.setInputValue("userName",e.nameText),z.setInputValue("userAbout",e.aboutText),l[o.getAttribute("name")].resetValidation(),l[o.getAttribute("name")].enableSubmitButton(),z.open()})),t.addEventListener("click",(function(){l[a.getAttribute("name")].resetValidation(),l[a.getAttribute("name")].disableSubmitButton(),G.open()})),n.addEventListener("click",(function(){var e=F.getUserInfo();J.setInputValue("avatarURL",e.avatarUrl),l[s.getAttribute("name")].resetValidation(),l[s.getAttribute("name")].enableSubmitButton(),J.open()}))})();