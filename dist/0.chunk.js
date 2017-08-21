webpackJsonp([0],{"./node_modules/ng2-expansion-panels/dist/ng2-expansion-panels.bundle.js":function(t,e,n){!function(e,o){t.exports=function(t,e){return function(t){function e(o){if(n[o])return n[o].exports;var s=n[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(i<3?s(a):i>3?s(e,n,a):s(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n(2),a=n(3),r=n(5),c=[r.ExpansionPanelsContainerComponent,a.ExpansionPanelComponent,a.ExpansionPanelTitle,a.ExpansionPanelContent,a.ExpansionPanelDescriptionToggled,a.ExpansionPanelDescriptionHidden,a.ExpansionPanelButtons],l=function(){function t(){}return t}();l=o([s.NgModule({imports:[i.CommonModule],declarations:c,exports:c,schemas:[s.CUSTOM_ELEMENTS_SCHEMA]})],l),e.ExpansionPanelsModule=l},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(4));var o=n(11);e.ExpansionPanelTitle=o.ExpansionPanelTitle,e.ExpansionPanelContent=o.ExpansionPanelContent,e.ExpansionPanelDescriptionHidden=o.ExpansionPanelDescriptionHidden,e.ExpansionPanelDescriptionToggled=o.ExpansionPanelDescriptionToggled,e.ExpansionPanelButtons=o.ExpansionPanelButtons},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(i<3?s(a):i>3?s(e,n,a):s(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n(5),r=function(){function t(t){this.container=t,this.onOpen=new i.EventEmitter,this.onClose=new i.EventEmitter,this.onCancel=new i.EventEmitter,this.onSubmit=new i.EventEmitter}return t.prototype.toggle=function(){this.isToggled?this.unselect():this.select()},Object.defineProperty(t.prototype,"isToggled",{get:function(){return this.container.selectedPanel===this},enumerable:!0,configurable:!0}),t.prototype.submit=function(){this.unselect(),this.onSubmit.emit()},t.prototype.cancel=function(){this.unselect(),this.onCancel.emit()},t.prototype.select=function(){this.container.selectedPanel=this,this.onOpen.emit(this)},t.prototype.unselect=function(){this.container.selectedPanel=void 0,this.onClose.emit(this)},t}();o([i.Output(),s("design:type",i.EventEmitter)],r.prototype,"onOpen",void 0),o([i.Output(),s("design:type",i.EventEmitter)],r.prototype,"onClose",void 0),o([i.Output(),s("design:type",i.EventEmitter)],r.prototype,"onCancel",void 0),o([i.Output(),s("design:type",i.EventEmitter)],r.prototype,"onSubmit",void 0),r=o([i.Component({selector:"expansion-panel",styles:[n(9)],template:n(10)}),s("design:paramtypes",[a.ExpansionPanelsContainerComponent])],r),e.ExpansionPanelComponent=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(6))},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(i<3?s(a):i>3?s(e,n,a):s(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=function(){function t(){}return t}();i=o([s.Component({selector:"expansion-panels-container",styles:[n(7)],template:n(8)})],i),e.ExpansionPanelsContainerComponent=i},function(t,e){t.exports="expansion-panels-container {\n  display: block; }\n"},function(t,e){t.exports='<div class="expansion-panels-container">\n    <ng-content></ng-content>\n</div>\n'},function(t,e){t.exports=".layout-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.layout-column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.expansion-panel {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0;\n  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);\n  color: #212121;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  font-size: inherit;\n  line-height: 1.5;\n  background: #fff;\n  font-family: 'Roboto', \"Helvetica Neue\", sans-serif; }\n\n.expansion-panel__header {\n  padding: 14px 18px;\n  cursor: pointer;\n  outline: 0; }\n\nexpansion-panel:first-child .expansion-panel:not(.expansion-panel--toggled) {\n  border-top-right-radius: 1px;\n  border-top-left-radius: 1px; }\n\nexpansion-panel:last-child .expansion-panel:not(.expansion-panel--toggled) {\n  border-bottom-right-radius: 1px;\n  border-bottom-left-radius: 1px; }\n\n.expansion-panel--toggled {\n  margin: 0.8em 0;\n  border-radius: 1px; }\n\n.expansion-panel__header:hover, .expansion-panel__header:focus {\n  background: #f9f9f9; }\n\n.expansion-panel__title {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 25%;\n          flex: 1 1 25%; }\n\n.expansion-panel__description {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 70%;\n          flex: 1 1 70%;\n  color: #727272; }\n\n.expansion-panel__content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  margin-left: 25%;\n  background: #fff;\n  padding: 14px 10px;\n  outline: 0; }\n\n.expansion-panel__arrow-down {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 5%;\n          flex: 1 1 5%;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n              -ms-grid-row-align: flex-end;\n          align-items: flex-end; }\n\n.expansion-panel__arrow-down svg {\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n  width: 24px;\n  height: 24px; }\n\n.expansion-panel--toggled .expansion-panel__arrow-down svg {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.expansion-panel__buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n"},function(t,e){t.exports='<div class="expansion-panel" [class.expansion-panel--toggled]="isToggled">\n    \x3c!-- PANEL HEADER --\x3e\n    <div class="layout-row expansion-panel__header"\n         [attr.tabindex]="0"\n         (keyup.enter)="toggle()"\n         (click)="toggle()">\n\n        \x3c!-- TITLE/NAME --\x3e\n        <div class="expansion-panel__title layout-column">\n            <ng-content select="expansion-panel-title"></ng-content>\n        </div>\n\n        \x3c!-- DESCRIPTION (PANEL VISIBLE) --\x3e\n        <div class="expansion-panel__description layout-column" *ngIf="isToggled">\n            <ng-content select="expansion-panel-description-toggled"></ng-content>\n        </div>\n\n        \x3c!-- DESCRIPTION (PANEL HIDDEN) --\x3e\n        <div class="expansion-panel__description layout-column" *ngIf="isToggled === false">\n            <ng-content select="expansion-panel-description-hidden"></ng-content>\n        </div>\n\n        \x3c!-- ARROW --\x3e\n        <div class="expansion-panel__arrow-down layout-column">\n            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n                <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>\n                <path d="M0-.75h24v24H0z" fill="none"/>\n            </svg>\n        </div>\n    </div>\n\n    \x3c!-- PANEL CONTENT --\x3e\n    <div class="expansion-panel__content"\n         *ngIf="isToggled"\n         [attr.tabindex]="-1">\n\n        <ng-content select="expansion-panel-content"></ng-content>\n\n        \x3c!-- PANEL BUTTONS --\x3e\n        <div class="expansion-panel__buttons">\n            <ng-content select="expansion-panel-buttons"></ng-content>\n        </div>\n    </div>\n</div>\n'},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(i<3?s(a):i>3?s(e,n,a):s(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=function(){function t(){}return t}();i=o([s.Directive({selector:"expansion-panel-title"})],i),e.ExpansionPanelTitle=i;var a=function(){function t(){}return t}();a=o([s.Directive({selector:"expansion-panel-description-toggled"})],a),e.ExpansionPanelDescriptionToggled=a;var r=function(){function t(){}return t}();r=o([s.Directive({selector:"expansion-panel-description-hidden"})],r),e.ExpansionPanelDescriptionHidden=r;var c=function(){function t(){}return t}();c=o([s.Directive({selector:"expansion-panel-content"})],c),e.ExpansionPanelContent=c;var l=function(){function t(){}return t}();l=o([s.Directive({selector:"expansion-panel-buttons"})],l),e.ExpansionPanelButtons=l}])}(n("./node_modules/@angular/core/@angular/core.es5.js"),n("./node_modules/@angular/common/@angular/common.es5.js"))}()},"./src/app/components/statistics/all/all.component.ts":function(t,e,n){"use strict";var o=n("./node_modules/tslib/tslib.es6.js"),s=n("./node_modules/@angular/core/@angular/core.es5.js"),i=n("./node_modules/@angular/router/@angular/router.es5.js"),a=n("./src/app/services/index.ts"),r=n("./src/app/common/models/index.ts"),c=n("./src/app/common/index.ts");n.d(e,"a",function(){return l});var l=function(){function t(t,e,n,o,s){this.budgetService=t,this.translationService=e,this.cacheService=n,this.router=o,this.activated=s,this.list=r.a,this.key="categories",this.loading=!1;var i=e.getAllForComponent(this.key);this.title=i.title,this.currentMonthSpendsSetup()}return t.prototype.ngOnInit=function(){var t=this.activated.snapshot.paramMap.get("from"),e=this.activated.snapshot.paramMap.get("to");t&&(this.from=new Date(t)),e&&(this.to=new Date(e))},t.prototype.currentMonthSpendsSetup=function(){var t=c.c.getStartAndEndDatesPerMonth(new Date),e=t.from,n=t.to;this.from=e,this.to=n,this.getAllSpendsPerPeriod()},t.prototype.getStatistics=function(t){this.activeCategory=t,this.router.navigate(["/statistics/"+t])},t.prototype.dateUpdated=function(t){this[t.type]=t.value,this.getAllSpendsPerPeriod()},t.prototype.getAllSpendsPerPeriod=function(){var t=this,e=function(e){var n=c.c.separateToMonthlyRanges(t.from,t.to),o=t._groupByCategories(e);return t.loading=!1,t._updateCategorizedDataPerDateRange(o,n)};if(!this.from||!this.to||this.to.getTime()<this.from.getTime())return[];var n=c.c.separateToMonthlyRanges(this.from,this.to,!1);this.loading=!0,Promise.all(n.map(function(e){return t.cacheService.getCache(e.from,e.to)}).slice()).then(function(n){!n.length||n.every(function(t){return!t.length})?t.budgetService.getAllSpends(t.from,t.to).subscribe(function(n){n.query.on("value",function(o){var s=c.c.transformObjectToArray(o.val());t.spends=e(s),t.cacheService.addOrUpdateCacheForRanges(t.spends,t.from,t.to,n.id)})}):t.spends=e([].concat.apply([],n))})},t.prototype._groupByCategories=function(t){return t?t.map(function(t){return t.dateString=new Date(t.date).toLocaleDateString(),t}).reduce(function(t,e){t[e.group]||(t[e.group]={});var n=t[e.group].array?t[e.group].array:[],o=t[e.group].totals?t[e.group].totals:0;return o+=parseFloat(e.price),t[e.group].array=n.concat([e]),t[e.group].totals=o,t},{}):[]},t.prototype._updateCategorizedDataPerDateRange=function(t,e){for(var n in t)t[n].items=this._separateArrayPerRange(t[n].array,e);return t},t.prototype._separateArrayPerRange=function(t,e){var n=function(t,e,n){return t.filter(function(t){return t.date>=e&&t.date<=n})};return e.map(function(e){var s=n(t,e.from,e.to);return e.totals=s.reduce(function(t,e){return t+=parseFloat(e.price)},0),e.fromString=e.from.toLocaleDateString(),e.toString=e.to.toLocaleDateString(),e.array=s,o.d({},e)})},t.prototype.details=function(t,e,n){this.router.navigate(["/statistics/"+t.value+"/history",{from:e,to:n}])},t=o.a([n.i(s.Component)({encapsulation:s.ViewEncapsulation.None,selector:"statistics-all",template:n("./src/app/components/statistics/all/all.html"),styles:[n("./src/app/components/statistics/all/all.scss")]}),o.c("design:paramtypes",["function"==typeof(e=void 0!==a.b&&a.b)&&e||Object,"function"==typeof(l=void 0!==a.c&&a.c)&&l||Object,"function"==typeof(p=void 0!==a.g&&a.g)&&p||Object,"function"==typeof(d=void 0!==i.c&&i.c)&&d||Object,"function"==typeof(u=void 0!==i.d&&i.d)&&u||Object])],t);var e,l,p,d,u}()},"./src/app/components/statistics/all/all.html":function(t,e){t.exports='<section-header [title]="\'History\'">\n    <div move-back>\n        <a [routerLink]="[\'/categories\']"><i class="material-icons">arrow_back</i></a>\n    </div>\n    <div move-forward></div>\n</section-header>\n\n<div class="category-content">\n    <range-selector [from]="from" [to]="to" (dateUpdated)="dateUpdated($event)"></range-selector>\n    <md-spinner *ngIf="loading" value="primary"></md-spinner>\n    <expansion-panels-container *ngIf="list.length && spends">\n        <expansion-panel  class="category" [ngClass]="(category.alias + \' \' + (activeCategory === category.value ? \'highlighted\' : \'\'))" *ngFor="let category of list">\n            <expansion-panel-title>         \n                <div class="category-name">{{category.value}}</div>\n                <span class="cost-info">Total: {{spends[category.value] ? spends[category.value].totals : 0}}</span>     \n            </expansion-panel-title>\n            <expansion-panel-content>\n                <div *ngIf="spends[category.value] && spends[category.value].items">\n                    <ul class="grouped-list">\n                        <li *ngFor="let item of spends[category.value].items" \n                            (click)="details(category, item.fromString, item.toString)">\n                            <div class="date-range">{{item.fromString}} - {{item.toString}}</div>\n                            <div class="cost-info">Total: {{item.totals}}</div> \n                            <a></a>\n                        </li>\n                    </ul>\n                </div>\n                <div class="data-empty" *ngIf="!spends[category.value]">\n                    No data found for selected range\n                </div>\n        \n            </expansion-panel-content>\n        </expansion-panel>\n\n    </expansion-panels-container>\n</div>\n\n\n\n'},"./src/app/components/statistics/all/all.scss":function(t,e,n){e=t.exports=n("./node_modules/css-loader/lib/css-base.js")(!1),e.push([t.i,"statistics-all{position:relative}statistics-all .section-header .container [move-back] i.material-icons,statistics-all .section-header .container [move-forward] i.material-icons{color:#f9f9f9}@media only screen and (min-width:768px){statistics-all .section-header .container [move-back] i.material-icons,statistics-all .section-header .container [move-forward] i.material-icons{color:#000}}statistics-all .category-content{margin-top:15px;padding-top:20px;background-color:#fefeff;overflow-y:scroll;font-size:.7em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}statistics-all .category-content .category .cost-info{font-size:.6em}statistics-all .category-content .category.hp .expansion-panel{border-left:3px solid #1b2a56}statistics-all .category-content .category.hp .expansion-panel.highlighted,statistics-all .category-content .category.hp .expansion-panel.hover{color:#1b2a56}statistics-all .category-content .category.gr .expansion-panel{border-left:3px solid #307d74}statistics-all .category-content .category.gr .expansion-panel.highlighted,statistics-all .category-content .category.gr .expansion-panel.hover{color:#307d74}statistics-all .category-content .category.eq .expansion-panel{border-left:3px solid #acd128}statistics-all .category-content .category.eq .expansion-panel.highlighted,statistics-all .category-content .category.eq .expansion-panel.hover{color:#acd128}statistics-all .category-content .category.hb .expansion-panel{border-left:3px solid #678c24}statistics-all .category-content .category.hb .expansion-panel.highlighted,statistics-all .category-content .category.hb .expansion-panel.hover{color:#678c24}statistics-all .category-content .category.pt .expansion-panel{border-left:3px solid #33420c}statistics-all .category-content .category.pt .expansion-panel.highlighted,statistics-all .category-content .category.pt .expansion-panel.hover{color:#33420c}statistics-all .category-content .category .layout-column.expansion-panel__description{display:none}statistics-all .category-content .category .layout-column.expansion-panel__arrow-down{-webkit-box-flex:initial;-ms-flex:initial;flex:initial}statistics-all .category-content .category .data-empty{font-size:.5em}statistics-all .category-content .category .expansion-panel__content{margin:0}statistics-all .category-content .category .expansion-panel__content .grouped-list{font-size:.7em;padding:0;list-style:none}statistics-all .category-content .category .expansion-panel__content .grouped-list li{padding:15px;box-shadow:0 3px 5px grey}statistics-all .category-content md-spinner{margin:0 auto}@media only screen and (min-width:768px){statistics-all .category-content{margin:0 auto;position:static;width:75%}statistics-all .category-content .expansion-panels-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}statistics-all .category-content .expansion-panels-container .category{width:45%;margin:5px 0;border:1px solid #f9f9f9;padding:5px}}statistics-all .add-spent-container{background:#1b2a56;position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;bottom:0}statistics-all .add-spent-container,statistics-all .add-spent-container button{width:100%}@media only screen and (min-width:768px){statistics-all .add-spent-container{display:none}}",""]),t.exports=t.exports.toString()},"./src/app/components/statistics/current/current.component.ts":function(t,e,n){"use strict";var o=n("./node_modules/tslib/tslib.es6.js"),s=n("./node_modules/@angular/core/@angular/core.es5.js"),i=n("./node_modules/@angular/router/@angular/router.es5.js"),a=n("./src/app/services/index.ts"),r=n("./src/app/common/models/index.ts"),c=n("./src/app/common/index.ts");n.d(e,"a",function(){return l});var l=function(){function t(t,e,n,o,s){this.budgetService=t,this.cacheService=e,this.route=n,this.defaultRouter=o,this.translationService=s,this.spendsForCurrentMonth=[],this.spendsForPreviousMonth=[],this.loading=!1,this.category=r.a.find(function(t){return t.value.toLowerCase()===n.snapshot.params.category.toLowerCase()}),this.title=this.category.value,this.statisticsTranslation=s.getAllForComponent("statistics")}return t.prototype.ngOnInit=function(){this.getAllSpendsPerCurrentMonth(),this.getAllSpendsPerPreviousMonth()},t.prototype._getSpendsCaller=function(t,e,n,o,s){var i=this;this.budgetService.getAllSpends(t,e).subscribe(function(o){o.query.on("value",function(a){var r=a.val(),l=c.c.transformObjectToArray(r);s(l,n),i.cacheService.addOrUpdateCache(l,t,e,n,o.id)})})},t.prototype.getAllSpendsPerCurrentMonth=function(){var t=this,e=function(e,n){t.spendsForCurrentMonth=t._getValidSpendsArray(e,n),t.currentSpendTotals=t._getTotals(t.spendsForCurrentMonth),t.loading=!1};if(null===this.category)return[];var n=c.c.getStartAndEndDatesPerMonth(new Date),o=n.from,s=n.to;this.loading=!0,this.cacheService.getCache(o,s).then(function(n){n.length?e(n,t.category.value):t._getSpendsCaller(o,s,t.category.value,t.spendsForCurrentMonth,e)})},t.prototype.getAllSpendsPerPreviousMonth=function(){var t=this,e=function(e,n){t.spendsForPreviousMonth=t._getValidSpendsArray(e,n),t.previousSpendTotals=t._getTotals(t.spendsForPreviousMonth)};if(null===this.category)return[];var n=c.c.getStartAndEndDatesPerMonth(this._getPreviousMonthDate(new Date)),o=n.from,s=n.to;this.cacheService.getCache(o,s).then(function(n){n.length?e(n,t.category.value):t._getSpendsCaller(o,s,t.category.value,t.spendsForPreviousMonth,e)})},t.prototype._getTotals=function(t){return t.reduce(function(t,e){return t+=+e.price},0)},t.prototype._getValidSpendsArray=function(t,e){return t?t.filter(function(t){return t&&t.group.toLowerCase()===e.toLowerCase()}).map(function(t){return t.dateString=new Date(t.date).toLocaleDateString(),t}):[]},t.prototype._getPreviousMonthDate=function(t){return t.setDate(1),t.setMonth(t.getMonth()-1),t},t.prototype.add=function(){this.defaultRouter.navigate(["/add",{category:this.category.value}])},t=o.a([n.i(s.Component)({encapsulation:s.ViewEncapsulation.None,selector:"current",template:n("./src/app/components/statistics/current/current.html"),styles:[n("./src/app/components/statistics/current/current.scss")]}),o.c("design:paramtypes",["function"==typeof(e=void 0!==a.b&&a.b)&&e||Object,"function"==typeof(l=void 0!==a.g&&a.g)&&l||Object,"function"==typeof(p=void 0!==i.d&&i.d)&&p||Object,"function"==typeof(d=void 0!==i.c&&i.c)&&d||Object,"function"==typeof(u=void 0!==a.c&&a.c)&&u||Object])],t);var e,l,p,d,u}()},"./src/app/components/statistics/current/current.html":function(t,e){t.exports='<section-header [title]="title">\n    <div move-back>\n        <a [routerLink]="[\'/categories\']"><i class="material-icons">arrow_back</i></a>\n    </div>\n    <div move-forward>\n        <a [routerLink]="[\'history\']"><i class="material-icons">history</i></a>\n    </div>\n</section-header>\n<div class="section-content">\n    <div class="container">\n        <md-tab-group>\n            <md-tab label="{{statisticsTranslation.current}}">\n                <md-spinner *ngIf="loading"  value="primary"></md-spinner>\n                <sub class="loading-info" *ngIf="!loading && !spendsForCurrentMonth.length">{{statisticsTranslation.noDataFound}}</sub>\n                <statistics-list [spends]="spendsForCurrentMonth" [totals]="currentSpendTotals" [totalLabel]="statisticsTranslation.total"></statistics-list>\n            </md-tab>\n            <md-tab label="{{statisticsTranslation.previous}}">\n                <statistics-list [spends]="spendsForPreviousMonth" [totals]="previousSpendTotals" [totalLabel]="statisticsTranslation.total"></statistics-list>\n            </md-tab>\n        </md-tab-group>        \n        <button class="add-spent" md-raised-button color="primary" (click)="add()"><em>{{statisticsTranslation.addNew}}</em></button>\n    </div>\n</div>'},"./src/app/components/statistics/current/current.scss":function(t,e,n){e=t.exports=n("./node_modules/css-loader/lib/css-base.js")(!1),e.push([t.i,"current{background-color:#f9f9f9;position:relative}current .section-header .container [move-back] i.material-icons,current .section-header .container [move-forward] i.material-icons{color:#f9f9f9}@media only screen and (min-width:768px){current .section-header .container [move-back] i.material-icons,current .section-header .container [move-forward] i.material-icons{color:#000}}current div.section-content{margin-top:45px;position:absolute;background-color:#fefeff;font-size:.8em;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}current div.section-content md-spinner{margin:10px auto}@media only screen and (min-width:768px){current div.section-content{margin:0 auto;position:static;width:75%}}current div.section-content div.container{position:relative;background-color:#f9f9f9;height:100%;margin-bottom:50px;width:100%}current div.section-content md-tab-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;width:100%}current div.section-content .loading-info{font-size:.5em}current button{font-size:.8em;width:100%}current button.add-spent{position:fixed;height:50px;bottom:0;font-size:.8em;left:0}@media only screen and (min-width:768px){current button.add-spent{margin-top:25px;position:static}}",""]),t.exports=t.exports.toString()},"./src/app/components/statistics/history/history.component.ts":function(t,e,n){"use strict";var o=n("./node_modules/tslib/tslib.es6.js"),s=n("./node_modules/@angular/core/@angular/core.es5.js"),i=n("./node_modules/@angular/router/@angular/router.es5.js"),a=n("./node_modules/@angular/common/@angular/common.es5.js"),r=n("./src/app/services/index.ts"),c=n("./src/app/common/models/index.ts"),l=n("./src/app/common/index.ts");n.d(e,"a",function(){return p});var p=function(){function t(t,e,n,o,s){this.budgetService=t,this.cacheService=e,this._location=n,this.route=o,this.translationService=s,this.spends=[],this.loading=!1,this.category=c.a.find(function(t){return t.value.toLowerCase()===o.snapshot.params.category.toLowerCase()}),this.title=this.category.value,this.statisticsTranslation=s.getAllForComponent("statistics"),this.currentMonthSpendsSetup()}return t.prototype.ngOnInit=function(){var t=this.route.snapshot.paramMap.get("from"),e=this.route.snapshot.paramMap.get("to");t&&(this.from=new Date(t)),e&&(this.to=new Date(e))},t.prototype.currentMonthSpendsSetup=function(){var t=l.c.getStartAndEndDatesPerMonth(new Date),e=t.from,n=t.to;this.from=e,this.to=n,this.getAllSpendsPerPeriod()},t.prototype.dateUpdated=function(t){this[t.type]=t.value,this.getAllSpendsPerPeriod()},t.prototype.getAllSpendsPerPeriod=function(){var t=this;if(null===this.category)return[];if(!this.from||!this.to||this.to.getTime()<this.from.getTime())return[];var e=l.c.separateToMonthlyRanges(this.from,this.to);this.loading=!0,Promise.all(e.map(function(e){return t.cacheService.getCache(e.from,e.to)}).slice()).then(function(e){!e.length&&e.every(function(t){return!t.length})?t.budgetService.getAllSpends(t.from,t.to).subscribe(function(e){e.query.on("value",function(n){t.spends=t._getValidSpendsArray(n.val(),t.category.value),t.cacheService.addOrUpdateCache(t.spends,t.from,t.to,t.category.value,e.id)})}):t.spends=t._getValidSpendsArray([].concat.apply([],e),t.category.value)})},t.prototype.backClicked=function(){this._location.back()},t.prototype._getValidSpendsArray=function(t,e){return this.loading=!1,t?t.filter(function(t){return t&&t.group.toLowerCase()===e.toLowerCase()}).map(function(t){return t.dateString=new Date(t.date).toLocaleDateString(),t}):[]},t=o.a([n.i(s.Component)({encapsulation:s.ViewEncapsulation.None,selector:"history",template:n("./src/app/components/statistics/history/history.html"),styles:[n("./src/app/components/statistics/history/history.scss")]}),o.c("design:paramtypes",["function"==typeof(e=void 0!==r.b&&r.b)&&e||Object,"function"==typeof(p=void 0!==r.g&&r.g)&&p||Object,"function"==typeof(d=void 0!==a.Location&&a.Location)&&d||Object,"function"==typeof(u=void 0!==i.d&&i.d)&&u||Object,"function"==typeof(f=void 0!==r.c&&r.c)&&f||Object])],t);var e,p,d,u,f}()},"./src/app/components/statistics/history/history.html":function(t,e){t.exports='<section-header [title]="title">\n    <div move-back>\n        <a (click)="backClicked()"><i class="material-icons">arrow_back</i></a>\n    </div>\n    <div move-forward></div>\n</section-header>\n<div class="section-content">\n    <div class="container">\n        <range-selector [from]="from" [to]="to" (dateUpdated)="dateUpdated($event)"></range-selector>\n        <md-spinner *ngIf="loading"  value="primary"></md-spinner>\n        <em class="spends-info" *ngIf="spends && spends.length">{{statisticsTranslation[\'spend-title\']}}</em>\n        <statistics-list [spends]="spends"></statistics-list>\n    </div>\n</div>'},"./src/app/components/statistics/history/history.scss":function(t,e,n){e=t.exports=n("./node_modules/css-loader/lib/css-base.js")(!1),e.push([t.i,"history{font-size:.8em;position:relative}history .section-header .container [move-back] i.material-icons,history .section-header .container [move-forward] i.material-icons{color:#f9f9f9}@media only screen and (min-width:768px){history .section-header .container [move-back] i.material-icons,history .section-header .container [move-forward] i.material-icons{color:#000}}history .spends-info{font-size:.8em}history .section-content{margin-top:45px;position:absolute;width:100%}history .section-content md-spinner{margin:0 auto}@media only screen and (min-width:768px){history .section-content{margin:0 auto;position:static;width:75%}}",""]),t.exports=t.exports.toString()},"./src/app/components/statistics/index.ts":function(t,e,n){"use strict";var o=n("./src/app/components/statistics/statistics-list/statistics-list.component.ts");n.d(e,"d",function(){return o.a});var s=n("./src/app/components/statistics/history/history.component.ts");n.d(e,"b",function(){return s.a});var i=n("./src/app/components/statistics/current/current.component.ts");n.d(e,"c",function(){return i.a});var a=n("./src/app/components/statistics/all/all.component.ts");n.d(e,"f",function(){return a.a});var r=n("./src/app/components/statistics/statistics.component.ts");n.d(e,"a",function(){return r.a});var c=n("./src/app/components/statistics/range-selector/range-selector.component.ts");n.d(e,"e",function(){return c.a})},"./src/app/components/statistics/range-selector/range-selector.component.ts":function(t,e,n){"use strict";var o=n("./node_modules/tslib/tslib.es6.js"),s=n("./node_modules/@angular/core/@angular/core.es5.js"),i=n("./node_modules/@angular/material/@angular/material.es5.js");n.d(e,"a",function(){return a});var a=function(){function t(){this.dateUpdated=new s.EventEmitter,this.showError=!1}return t.prototype.ngOnInit=function(){var t=this;this.toDate.selectedChanged.subscribe(function(e){t.showError=t.from.getTime()-e.getTime()>0,t.dateUpdated.emit({type:"to",value:e})}),this.fromDate.selectedChanged.subscribe(function(e){t.showError=e.getTime()-t.to.getTime()>0,t.dateUpdated.emit({type:"from",value:e})}),this.showError=this.from.getTime()-this.to.getTime()>0},o.a([n.i(s.ViewChild)("fromDate"),o.c("design:type","function"==typeof(e=void 0!==i.d&&i.d)&&e||Object)],t.prototype,"fromDate",void 0),o.a([n.i(s.ViewChild)("toDate"),o.c("design:type","function"==typeof(a=void 0!==i.d&&i.d)&&a||Object)],t.prototype,"toDate",void 0),o.a([n.i(s.Input)(),o.c("design:type",Object)],t.prototype,"from",void 0),o.a([n.i(s.Input)(),o.c("design:type",Object)],t.prototype,"to",void 0),o.a([n.i(s.Output)(),o.c("design:type",Object)],t.prototype,"dateUpdated",void 0),t=o.a([n.i(s.Component)({selector:"range-selector",template:n("./src/app/components/statistics/range-selector/range-selector.html"),styles:[n("./src/app/components/statistics/range-selector/range-selector.scss")]})],t);var e,a}()},"./src/app/components/statistics/range-selector/range-selector.html":function(t,e){t.exports='<div class="datepicker-container">\n    <md-input-container>\n        <input mdInput [mdDatepicker]="fromDate" value="{{from}}"/>\n        <button mdSuffix [mdDatepickerToggle]="fromDate"></button>\n    </md-input-container>    \n    <md-datepicker #fromDate                   \n        md-current-view="month" \n        md-mode="month">\n    </md-datepicker>\n    <md-input-container>\n        <input mdInput [mdDatepicker]="toDate" value="{{to}}"/>\n        <button mdSuffix [mdDatepickerToggle]="toDate"></button>\n    </md-input-container>    \n    <md-datepicker #toDate                 \n        startView="month">\n    </md-datepicker>     \n    <div *ngIf="showError" class="validation-message">\n        Error! `From` date has to be less than `to` date\n    </div>\n</div>'},"./src/app/components/statistics/range-selector/range-selector.scss":function(t,e,n){e=t.exports=n("./node_modules/css-loader/lib/css-base.js")(!1),e.push([t.i,".datepicker-container{font-size:.8em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:s;-ms-flex-pack:s;justify-content:s;margin-bottom:15px}.datepicker-container md-input-container{width:50%}.datepicker-container .validation-message{font-size:.7em;color:#607123;margin-top:-15px}",""]),t.exports=t.exports.toString()},"./src/app/components/statistics/statistics-list/statistics-list.component.ts":function(t,e,n){"use strict";var o=n("./node_modules/tslib/tslib.es6.js"),s=n("./node_modules/@angular/core/@angular/core.es5.js");n.d(e,"a",function(){return i});var i=function(){function t(){}return o.a([n.i(s.Input)(),o.c("design:type",Array)],t.prototype,"spends",void 0),o.a([n.i(s.Input)(),o.c("design:type",Number)],t.prototype,"totals",void 0),o.a([n.i(s.Input)(),o.c("design:type",String)],t.prototype,"totalLabel",void 0),t=o.a([n.i(s.Component)({encapsulation:s.ViewEncapsulation.None,selector:"statistics-list",template:n("./src/app/components/statistics/statistics-list/statistics-list.html"),styles:[n("./src/app/components/statistics/statistics-list/statistics-list.scss")]}),o.c("design:paramtypes",[])],t)}()},"./src/app/components/statistics/statistics-list/statistics-list.html":function(t,e){t.exports='<em *ngIf="totals" class="summary"> {{totalLabel}} {{totals}}</em>\n<expansion-panels-container *ngIf="spends && spends.length">\n    <expansion-panel *ngFor="let item of spends">\n        <expansion-panel-title class="spend-info">         \n            {{ item.dateString}} - ${{item.price}}\n        </expansion-panel-title>\n        <expansion-panel-content>\n            <img *ngIf="item.picture" src="{{item.picture}}" alt=""/>\n            <img *ngIf="!item.picture" src="assets/chek.png"/>\n        </expansion-panel-content>\n    </expansion-panel>\n\n</expansion-panels-container>'},"./src/app/components/statistics/statistics-list/statistics-list.scss":function(t,e,n){e=t.exports=n("./node_modules/css-loader/lib/css-base.js")(!1),e.push([t.i,"statistics-list{font-size:.8em}statistics-list .spend-info{font-size:.8em;white-space:nowrap}statistics-list .summary{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:10px}statistics-list div.expansion-panel__content{margin-left:auto!important}statistics-list expansion-panel-content img{max-height:150px}",""]),t.exports=t.exports.toString()},"./src/app/components/statistics/statistics.component.ts":function(t,e,n){"use strict";var o=n("./node_modules/tslib/tslib.es6.js"),s=n("./node_modules/@angular/core/@angular/core.es5.js");n.d(e,"a",function(){return i});var i=function(){function t(){}return t=o.a([n.i(s.Component)({encapsulation:s.ViewEncapsulation.None,selector:"statistics",template:n("./src/app/components/statistics/statistics.html"),styles:[n("./src/app/components/statistics/statistics.scss")]})],t)}()},"./src/app/components/statistics/statistics.html":function(t,e){t.exports="\n\n<router-outlet></router-outlet>"},"./src/app/components/statistics/statistics.module.ts":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("./node_modules/tslib/tslib.es6.js"),s=n("./node_modules/@angular/core/@angular/core.es5.js"),i=n("./node_modules/@angular/common/@angular/common.es5.js"),a=n("./node_modules/@angular/router/@angular/router.es5.js"),r=n("./src/app/shared-modules/index.ts"),c=n("./node_modules/@angular/material/@angular/material.es5.js"),l=n("./node_modules/ng2-expansion-panels/dist/ng2-expansion-panels.bundle.js"),p=(n.n(l),n("./src/app/components/statistics/statistics.routes.ts")),d=n("./src/app/common/index.ts"),u=n("./src/app/components/statistics/index.ts");n.d(e,"StatisticsModule",function(){return f});var f=function(){function t(){}return t=o.a([n.i(s.NgModule)({imports:[i.CommonModule,a.a.forChild(p.a),r.a,l.ExpansionPanelsModule,r.b],declarations:[u.a,u.b,u.c,u.d,u.e,u.f],providers:[{provide:c.a,useClass:d.a},{provide:c.b,useValue:d.b}]})],t)}()},"./src/app/components/statistics/statistics.routes.ts":function(t,e,n){"use strict";var o=n("./src/app/components/statistics/index.ts"),s=n("./src/app/services/routeActivators/index.ts");n.d(e,"a",function(){return i});var i=[{path:"history-all",component:o.f},{path:":category/history",component:o.b,canActivate:[s.b]},{path:":category",component:o.c,canActivate:[s.b]}]},"./src/app/components/statistics/statistics.scss":function(t,e,n){e=t.exports=n("./node_modules/css-loader/lib/css-base.js")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()}});