(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gitrepos_gitrepos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gitrepos/gitrepos.component */ "./src/app/gitrepos/gitrepos.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");





var routes = [
    { path: '', component: _gitrepos_gitrepos_component__WEBPACK_IMPORTED_MODULE_3__["GitreposComponent"] },
    { path: 'bookmarks', component: _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_4__["BookmarksComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gitrepos_gitrepos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gitrepos/gitrepos.component */ "./src/app/gitrepos/gitrepos.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var _isbooked_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isbooked.directive */ "./src/app/isbooked.directive.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _gitrepos_gitrepos_component__WEBPACK_IMPORTED_MODULE_9__["GitreposComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_11__["BookmarksComponent"],
                _isbooked_directive__WEBPACK_IMPORTED_MODULE_12__["IsBookedDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"] // pagination
            ],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"],
                    useValue: '/'
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.css":
/*!***************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2ttYXJrcy9ib29rbWFya3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.html":
/*!****************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- repositories gallery -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-3 gallery thumbnail\"\n      *ngFor=\"let git of bookmarks| paginate: { itemsPerPage: 20, currentPage: p }\">\n      <!-- image -->\n      <div class=\"\">\n        <a target=\"_blank\"\n          href=\"{{git.avatar}}\">\n          <img src=\"{{git.avatar}}\"\n            alt=\"\">\n        </a>\n      </div>\n\n      <div class=\"caption\">\n        <!-- repository name -->\n        <h5><a href=\"{{git.repoUrl}}\"\n            target=\"_blank\">{{git.name}}</a></h5>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"paginate-container\"\n  *ngIf=\"bookmarks && bookmarks.length > 0\">\n  <pagination-controls (pageChange)=\"p=$event\"></pagination-controls>\n</div>"

/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.ts ***!
  \**************************************************/
/*! exports provided: BookmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksComponent", function() { return BookmarksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/github.service */ "./src/app/services/github.service.ts");



var BookmarksComponent = /** @class */ (function () {
    function BookmarksComponent(githubserv) {
        this.githubserv = githubserv;
    }
    BookmarksComponent.prototype.ngOnInit = function () {
        // load bookmarks on init
        this.loadGithubBookmarks();
    };
    BookmarksComponent.prototype.loadGithubBookmarks = function () {
        var _this = this;
        this.githubserv.getBookedRepositories().subscribe(function (data) {
            _this.bookmarks = data;
        });
    };
    BookmarksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookmarks',
            template: __webpack_require__(/*! ./bookmarks.component.html */ "./src/app/bookmarks/bookmarks.component.html"),
            styles: [__webpack_require__(/*! ./bookmarks.component.css */ "./src/app/bookmarks/bookmarks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]])
    ], BookmarksComponent);
    return BookmarksComponent;
}());



/***/ }),

/***/ "./src/app/gitrepos/gitrepos.component.css":
/*!*************************************************!*\
  !*** ./src/app/gitrepos/gitrepos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdHJlcG9zL2dpdHJlcG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/gitrepos/gitrepos.component.html":
/*!**************************************************!*\
  !*** ./src/app/gitrepos/gitrepos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12\">\n      <!-- <div class=\"container\"> -->\n      <div class=\"col-sm-12 text-center\">\n        <h2 class=\"text-success\">Search Github</h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8 col-xs-offset-2\">\n          <div class=\"input-group\">\n            <input type=\"text\"\n              [(ngModel)]=\"searchTerm\"\n              class=\"form-control\"\n              placeholder=\"Search\"\n              (keyup.enter)=\"loadGithubRepos(1)\">\n            <div class=\"\n                input-group-btn\">\n              <button class=\"btn btn-default\"\n                type=\"button\"\n                (click)=\"loadGithubRepos(1)\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- </div> -->\n    </div>\n  </div>\n</div>\n\n<!-- repositories gallery -->\n<div class=\"gallery\"\n  *ngIf=\"repositories\">\n  <div class=\"col-sm-6 col-md-3 gallery thumbnail\"\n    *ngFor=\"let git of repositories.items | paginate: { itemsPerPage: 20, currentPage: page, totalItems: 1000 }\">\n    <!-- image -->\n    <div class=\"\">\n      <a target=\"_blank\"\n        href=\"{{git.avatar}}\">\n        <img src=\"{{git.avatar}}\"\n          alt=\"\">\n      </a>\n    </div>\n\n    <div class=\"caption\">\n      <!-- repository name -->\n      <h5><a href=\"{{git.repoUrl}}\"\n          target=\"_blank\">{{git.name}}</a></h5>\n      <!-- bookmark button -->\n      <p>\n        <button type=\"button\"\n          class=\"btn btn-default btn-sm pull-right\"\n          (click)=\"saveBookMark(git)\">\n          <span class=\"glyphicon glyphicon-bookmark\"></span> Bookmark\n        </button>\n      </p>\n    </div>\n  </div>\n</div>\n<!-- pagination -->\n<div class=\"paginate-container\"\n  *ngIf=\"repositories && repositories.items.length > 0\">\n  <pagination-controls (pageChange)=\"p=$event; loadGithubRepos(p)\"></pagination-controls>\n</div>"

/***/ }),

/***/ "./src/app/gitrepos/gitrepos.component.ts":
/*!************************************************!*\
  !*** ./src/app/gitrepos/gitrepos.component.ts ***!
  \************************************************/
/*! exports provided: GitreposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitreposComponent", function() { return GitreposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/github.service */ "./src/app/services/github.service.ts");



var GitreposComponent = /** @class */ (function () {
    function GitreposComponent(githubserv) {
        this.githubserv = githubserv;
        this.searchTerm = '';
    }
    GitreposComponent.prototype.ngOnInit = function () {
        var state = this.githubserv.getState();
        if (state) {
            this.searchTerm = state.searchTerm;
            this.page = state.currentPage;
            this.repositories = state.repositories;
        }
        else {
            this.page = 1;
        }
    };
    // click event handler for search repository in github
    GitreposComponent.prototype.loadGithubRepos = function (page) {
        var _this = this;
        this.page = page;
        if (this.searchTerm != "") {
            this.githubserv.getRepositoriesByName(this.searchTerm, page).subscribe(function (data) {
                _this.repositories = data;
            });
            // this.repositories = this.githubserv.getRepositoriesByName(this.searchItem, page);
        }
    };
    // save repository in MVC web api
    GitreposComponent.prototype.saveBookMark = function (git) {
        this.githubserv.bookRepository(git);
    };
    GitreposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gitrepos',
            template: __webpack_require__(/*! ./gitrepos.component.html */ "./src/app/gitrepos/gitrepos.component.html"),
            styles: [__webpack_require__(/*! ./gitrepos.component.css */ "./src/app/gitrepos/gitrepos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]])
    ], GitreposComponent);
    return GitreposComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\"\n        class=\"navbar-brand\">GitHub Repositories Search</a>\n      <button type=\"button\"\n        class=\"navbar-toggle collapsed\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n\n    <div class=\"collapse navbar-collapse\"\n      id=\"navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/\">Home</a>\n        </li>\n        <li routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/bookmarks\">Bookmarks</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/isbooked.directive.ts":
/*!***************************************!*\
  !*** ./src/app/isbooked.directive.ts ***!
  \***************************************/
/*! exports provided: IsBookedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsBookedDirective", function() { return IsBookedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IsBookedDirective = /** @class */ (function () {
    function IsBookedDirective() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], IsBookedDirective.prototype, "IsBooked", void 0);
    IsBookedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[IsBooked]',
            exportAs: 'IsBooked'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IsBookedDirective);
    return IsBookedDirective;
}());



/***/ }),

/***/ "./src/app/services/github.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/github.service.ts ***!
  \********************************************/
/*! exports provided: State, GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());

var GithubService = /** @class */ (function () {
    function GithubService(httpClient) {
        this.httpClient = httpClient;
    }
    // get repositories from GitHub using github api
    // getRepositoriesByName(searchKeyWord: string, page: number): Observable<Gitrepoinfo[]> {
    // return this.httpClient.get(`https://api.github.com/search/repositories?q=` + searchKeyWord).
    //     pipe(map((item: any) => item.items.map(p => <Gitrepoinfo>
    //       {
    //         name: p.name,
    //         repoUrl: p.html_url,
    //         avatar: p.owner.avatar_url
    //       })));
    // }
    GithubService.prototype.getState = function () {
        return this.state;
    };
    GithubService.prototype.getRepositoriesByName = function (searchKeyWord, page) {
        var _this = this;
        return this.httpClient.get("https://api.github.com/search/repositories?q=" + searchKeyWord + "+in:name&page=" + page + "&per_page=20").
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return ({
            total_count: data.total_count,
            incomplete_results: data.incomplete_results,
            items: data.items.map(function (p) { return ({
                name: p.name,
                repoUrl: p.html_url,
                avatar: p.owner.avatar_url
            }); })
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (repositories) {
            _this.state = new State();
            _this.state.searchTerm = searchKeyWord;
            _this.state.currentPage = page;
            _this.state.repositories = repositories;
        }));
    };
    // get booked repositories from MVC web api
    GithubService.prototype.getBookedRepositories = function () {
        return this.httpClient.get("/api/Git/GetBookedRepositories");
    };
    // save repository in MVC web api
    GithubService.prototype.bookRepository = function (git) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        this.httpClient.post('/api/Git/BookRepository', git, { headers: headers }).subscribe();
    };
    GithubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\p0020755\source\repos\GitHubRepositoriesSearch\GitHubRepositoriesSearch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map