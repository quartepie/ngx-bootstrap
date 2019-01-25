(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/component-loader'), require('rxjs'), require('@angular/common'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/tooltip', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/component-loader', 'rxjs', '@angular/common', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].tooltip = {}),global.ng.core,global.utils,global.componentLoader,global.rxjs,global.ng.common,global.positioning));
}(this, (function (exports,core,utils,componentLoader,rxjs,common,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Default values provider for tooltip
     */
    var TooltipConfig = (function () {
        function TooltipConfig() {
            /**
             * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
             */
            this.placement = 'top';
            /**
             * array of event names which triggers tooltip opening
             */
            this.triggers = 'hover focus';
            /**
             * delay before showing the tooltip
             */
            this.delay = 0;
        }
        TooltipConfig.decorators = [
            { type: core.Injectable }
        ];
        return TooltipConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TooltipContainerComponent = (function () {
        function TooltipContainerComponent(config) {
            Object.assign(this, config);
        }
        Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TooltipContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.classMap = { in: false, fade: false };
                this.classMap[this.placement] = true;
                this.classMap["tooltip-" + this.placement] = true;
                this.classMap["in"] = true;
                if (this.animation) {
                    this.classMap["fade"] = true;
                }
                if (this.containerClass) {
                    this.classMap[this.containerClass] = true;
                }
            };
        TooltipContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-tooltip-container',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line
                        host: {
                            '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                            '[class.show]': '!isBs3',
                            '[attr.id]': 'this.id',
                            role: 'tooltip'
                        },
                        template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
                        styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: 50%;\n      transform: translateY(-50%);\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        TooltipContainerComponent.ctorParameters = function () {
            return [
                { type: TooltipConfig, },
            ];
        };
        return TooltipContainerComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ id = 0;
    var TooltipDirective = (function () {
        function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.tooltipId = id++;
            /**
             * Fired when tooltip content changes
             */
            /* tslint:disable-next-line:no-any */
            this.tooltipChange = new core.EventEmitter();
            /**
             * Css class for tooltip container
             */
            this.containerClass = '';
            /**
             * @deprecated - removed, will be added to configuration
             */
            this.tooltipAnimation = true;
            /**
             * @deprecated
             */
            this.tooltipFadeDuration = 150;
            this.ariaDescribedby = "tooltip-" + this.tooltipId;
            /**
             * @deprecated
             */
            this.tooltipStateChanged = new core.EventEmitter();
            this._tooltip = cis
                .createLoader(this._elementRef, _viewContainerRef, this._renderer)
                .provide({ provide: TooltipConfig, useValue: config });
            Object.assign(this, config);
            this.onShown = this._tooltip.onShown;
            this.onHidden = this._tooltip.onHidden;
        }
        Object.defineProperty(TooltipDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the tooltip is currently being shown
             * @return {?}
             */ function () {
                return this._tooltip.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
            set: /**
             * @deprecated - please use `tooltip` instead
             * @param {?} value
             * @return {?}
             */ 
            /* tslint:disable-next-line:no-any */
            function (value) {
                utils.warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
                this.tooltip = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_placement", {
            set: /**
             * @deprecated - please use `placement` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
                this.placement = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
            get: /**
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
                return this.isOpen;
            },
            set: /**
             * @deprecated - please use `isOpen` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
                this.isOpen = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_enable", {
            get: /**
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
                return this.isDisabled;
            },
            set: /**
             * @deprecated - please use `isDisabled` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
                this.isDisabled = !value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
            get: /**
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
                return this.container === 'body';
            },
            set: /**
             * @deprecated - please use `container="body"` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
                this.container = value ? 'body' : this.container;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
            set: /**
             * @deprecated - will replaced with customClass
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipClass deprecated');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
            set: /**
             * @deprecated - removed
             * @param {?} value
             * @return {?}
             */ 
            /* tslint:disable-next-line:no-any */
            function (value) {
                utils.warnOnce('tooltipContext deprecated');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
                this.delay = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
            get: /**
             * @deprecated -  please use `triggers` instead
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
                return this.triggers;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
                this.triggers = (value || '').toString();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TooltipDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._tooltip.listen({
                    triggers: this.triggers,
                    show: function () { return _this.show(); }
                });
                /* tslint:disable-next-line:no-any */
                this.tooltipChange.subscribe(function (value) {
                    if (!value) {
                        _this._tooltip.hide();
                    }
                });
            };
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.toggle = /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    return this.hide();
                }
                this.show();
            };
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.show = /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isOpen ||
                    this.isDisabled ||
                    this._delayTimeoutId ||
                    !this.tooltip) {
                    return;
                }
                var /** @type {?} */ showTooltip = function () {
                    if (_this._delayTimeoutId) {
                        _this._delayTimeoutId = undefined;
                    }
                    _this._tooltip
                        .attach(TooltipContainerComponent)
                        .to(_this.container)
                        .position({ attachment: _this.placement })
                        .show({
                        content: _this.tooltip,
                        placement: _this.placement,
                        containerClass: _this.containerClass,
                        id: _this.ariaDescribedby
                    });
                };
                var /** @type {?} */ cancelDelayedTooltipShowing = function () {
                    if (_this._tooltipCancelShowFn) {
                        _this._tooltipCancelShowFn();
                    }
                };
                if (this.delay) {
                    var /** @type {?} */ _timer_1 = rxjs.timer(this.delay).subscribe(function () {
                        showTooltip();
                        cancelDelayedTooltipShowing();
                    });
                    if (this.triggers) {
                        var /** @type {?} */ triggers = utils.parseTriggers(this.triggers);
                        this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                            _timer_1.unsubscribe();
                            cancelDelayedTooltipShowing();
                        });
                    }
                }
                else {
                    showTooltip();
                }
            };
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.hide = /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._delayTimeoutId) {
                    clearTimeout(this._delayTimeoutId);
                    this._delayTimeoutId = undefined;
                }
                if (!this._tooltip.isShown) {
                    return;
                }
                this._tooltip.instance.classMap["in"] = false;
                setTimeout(function () {
                    _this._tooltip.hide();
                }, this.tooltipFadeDuration);
            };
        /**
         * @return {?}
         */
        TooltipDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._tooltip.dispose();
            };
        TooltipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tooltip], [tooltipHtml]',
                        exportAs: 'bs-tooltip'
                    },] }
        ];
        /** @nocollapse */
        TooltipDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
                { type: componentLoader.ComponentLoaderFactory, },
                { type: TooltipConfig, },
            ];
        };
        TooltipDirective.propDecorators = {
            "tooltip": [{ type: core.Input },],
            "tooltipChange": [{ type: core.Output },],
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "containerClass": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "delay": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "htmlContent": [{ type: core.Input, args: ['tooltipHtml',] },],
            "_placement": [{ type: core.Input, args: ['tooltipPlacement',] },],
            "_isOpen": [{ type: core.Input, args: ['tooltipIsOpen',] },],
            "_enable": [{ type: core.Input, args: ['tooltipEnable',] },],
            "_appendToBody": [{ type: core.Input, args: ['tooltipAppendToBody',] },],
            "tooltipAnimation": [{ type: core.Input },],
            "_popupClass": [{ type: core.Input, args: ['tooltipClass',] },],
            "_tooltipContext": [{ type: core.Input, args: ['tooltipContext',] },],
            "_tooltipPopupDelay": [{ type: core.Input, args: ['tooltipPopupDelay',] },],
            "tooltipFadeDuration": [{ type: core.Input },],
            "_tooltipTrigger": [{ type: core.Input, args: ['tooltipTrigger',] },],
            "ariaDescribedby": [{ type: core.HostBinding, args: ['attr.aria-describedby',] },],
            "tooltipStateChanged": [{ type: core.Output },],
        };
        __decorate([
            utils.OnChange(),
            __metadata("design:type", Object)
        ], TooltipDirective.prototype, "tooltip", void 0);
        return TooltipDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TooltipModule = (function () {
        function TooltipModule() {
        }
        /**
         * @return {?}
         */
        TooltipModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TooltipModule,
                    providers: [TooltipConfig, componentLoader.ComponentLoaderFactory, positioning.PositioningService]
                };
            };
        TooltipModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TooltipDirective, TooltipContainerComponent],
                        exports: [TooltipDirective],
                        entryComponents: [TooltipContainerComponent]
                    },] }
        ];
        return TooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TooltipContainerComponent = TooltipContainerComponent;
    exports.TooltipDirective = TooltipDirective;
    exports.TooltipModule = TooltipModule;
    exports.TooltipConfig = TooltipConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10b29sdGlwLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwL3Rvb2x0aXAuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogRGVmYXVsdCB2YWx1ZXMgcHJvdmlkZXIgZm9yIHRvb2x0aXAgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29uZmlnIHtcbiAgLyoqIHRvb2x0aXAgcGxhY2VtZW50LCBzdXBwb3J0ZWQgcG9zaXRpb25zOiAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JyAqL1xuICBwbGFjZW1lbnQgPSAndG9wJztcbiAgLyoqIGFycmF5IG9mIGV2ZW50IG5hbWVzIHdoaWNoIHRyaWdnZXJzIHRvb2x0aXAgb3BlbmluZyAqL1xuICB0cmlnZ2VycyA9ICdob3ZlciBmb2N1cyc7XG4gIC8qKiBhIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIiAqL1xuICBjb250YWluZXI6IHN0cmluZztcbiAgLyoqIGRlbGF5IGJlZm9yZSBzaG93aW5nIHRoZSB0b29sdGlwICovXG4gIGRlbGF5ID0gMDtcbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi90b29sdGlwLmNvbmZpZyc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy10b29sdGlwLWNvbnRhaW5lcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzpcbiAgICAgICdcInRvb2x0aXAgaW4gdG9vbHRpcC1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgXCJicy10b29sdGlwLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIGNvbnRhaW5lckNsYXNzJyxcbiAgICAnW2NsYXNzLnNob3ddJzogJyFpc0JzMycsXG4gICAgJ1thdHRyLmlkXSc6ICd0aGlzLmlkJyxcbiAgICByb2xlOiAndG9vbHRpcCdcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0LnRvb2x0aXAge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgOmhvc3QuYnMtdG9vbHRpcC10b3AgLmFycm93LCA6aG9zdC5icy10b29sdGlwLWJvdHRvbSAuYXJyb3cge1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cbiAgICA6aG9zdC5icy10b29sdGlwLWxlZnQgLmFycm93LCA6aG9zdC5icy10b29sdGlwLXJpZ2h0IC5hcnJvdyB7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG4gIGBcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvdyBhcnJvd1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjbGFzc01hcDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XG4gIHBsYWNlbWVudDogc3RyaW5nO1xuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICBhbmltYXRpb246IGJvb2xlYW47XG4gIGlkOiBzdHJpbmc7XG5cbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBUb29sdGlwQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7IGluOiBmYWxzZSwgZmFkZTogZmFsc2UgfTtcbiAgICB0aGlzLmNsYXNzTWFwW3RoaXMucGxhY2VtZW50XSA9IHRydWU7XG4gICAgdGhpcy5jbGFzc01hcFtgdG9vbHRpcC0ke3RoaXMucGxhY2VtZW50fWBdID0gdHJ1ZTtcblxuICAgIHRoaXMuY2xhc3NNYXAuaW4gPSB0cnVlO1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5jbGFzc01hcC5mYWRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250YWluZXJDbGFzcykge1xuICAgICAgdGhpcy5jbGFzc01hcFt0aGlzLmNvbnRhaW5lckNsYXNzXSA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtZmlsZS1saW5lLWNvdW50IGRlcHJlY2F0aW9uICovXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAuY29uZmlnJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBPbkNoYW5nZSwgd2Fybk9uY2UsIHBhcnNlVHJpZ2dlcnMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbmxldCBpZCA9IDA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b29sdGlwXSwgW3Rvb2x0aXBIdG1sXScsXG4gIGV4cG9ydEFzOiAnYnMtdG9vbHRpcCdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgdG9vbHRpcElkID0gaWQrKztcbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHRvb2x0aXAuXG4gICAqL1xuICBAT25DaGFuZ2UoKVxuICBASW5wdXQoKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiBGaXJlZCB3aGVuIHRvb2x0aXAgY29udGVudCBjaGFuZ2VzICovXG4gIEBPdXRwdXQoKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgdG9vbHRpcC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2Vyczogc3RyaW5nO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0b29sdGlwIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcbiAgLyoqXG4gICAqIENzcyBjbGFzcyBmb3IgdG9vbHRpcCBjb250YWluZXJcbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzID0gJyc7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0b29sdGlwIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcC5pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gZGlzYWJsZSB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZWxheSBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgZGVsYXk6IG51bWJlcjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93blxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIGhpZGRlblxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwSHRtbCcpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgc2V0IGh0bWxDb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBIdG1sIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0b29sdGlwYCBpbnN0ZWFkJyk7XG4gICAgdGhpcy50b29sdGlwID0gdmFsdWU7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwUGxhY2VtZW50JylcbiAgc2V0IF9wbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwUGxhY2VtZW50IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQnKTtcbiAgICB0aGlzLnBsYWNlbWVudCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcElzT3BlbicpXG4gIHNldCBfaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBJc09wZW4gd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzT3BlbmAgaW5zdGVhZCcpO1xuICAgIHRoaXMuaXNPcGVuID0gdmFsdWU7XG4gIH1cblxuICBnZXQgX2lzT3BlbigpOiBib29sZWFuIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XG5cbiAgICByZXR1cm4gdGhpcy5pc09wZW47XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcEVuYWJsZScpXG4gIHNldCBfZW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBFbmFibGUgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQnKTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSAhdmFsdWU7XG4gIH1cblxuICBnZXQgX2VuYWJsZSgpOiBib29sZWFuIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcEVuYWJsZSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCcpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBBcHBlbmRUb0JvZHknKVxuICBzZXQgX2FwcGVuZFRvQm9keSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHdhcm5PbmNlKFxuICAgICAgJ3Rvb2x0aXBBcHBlbmRUb0JvZHkgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCdcbiAgICApO1xuICAgIHRoaXMuY29udGFpbmVyID0gdmFsdWUgPyAnYm9keScgOiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCBfYXBwZW5kVG9Cb2R5KCk6IGJvb2xlYW4ge1xuICAgIHdhcm5PbmNlKFxuICAgICAgJ3Rvb2x0aXBBcHBlbmRUb0JvZHkgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCdcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyID09PSAnYm9keSc7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSByZW1vdmVkLCB3aWxsIGJlIGFkZGVkIHRvIGNvbmZpZ3VyYXRpb24gKi9cbiAgQElucHV0KCkgdG9vbHRpcEFuaW1hdGlvbiA9IHRydWU7XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gd2lsbCByZXBsYWNlZCB3aXRoIGN1c3RvbUNsYXNzICovXG4gIEBJbnB1dCgndG9vbHRpcENsYXNzJylcbiAgc2V0IF9wb3B1cENsYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcENsYXNzIGRlcHJlY2F0ZWQnKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHJlbW92ZWQgKi9cbiAgQElucHV0KCd0b29sdGlwQ29udGV4dCcpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgc2V0IF90b29sdGlwQ29udGV4dCh2YWx1ZTogYW55KSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBDb250ZXh0IGRlcHJlY2F0ZWQnKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBQb3B1cERlbGF5JylcbiAgc2V0IF90b29sdGlwUG9wdXBEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBQb3B1cERlbGF5IGlzIGRlcHJlY2F0ZWQsIHVzZSBgZGVsYXlgIGluc3RlYWQnKTtcbiAgICB0aGlzLmRlbGF5ID0gdmFsdWU7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgQElucHV0KCkgdG9vbHRpcEZhZGVEdXJhdGlvbiA9IDE1MDtcblxuICAvKiogQGRlcHJlY2F0ZWQgLSAgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwVHJpZ2dlcicpXG4gIGdldCBfdG9vbHRpcFRyaWdnZXIoKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwVHJpZ2dlciB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQnKTtcblxuICAgIHJldHVybiB0aGlzLnRyaWdnZXJzO1xuICB9XG5cbiAgc2V0IF90b29sdGlwVHJpZ2dlcih2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcFRyaWdnZXIgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRyaWdnZXJzYCBpbnN0ZWFkJyk7XG4gICAgdGhpcy50cmlnZ2VycyA9ICh2YWx1ZSB8fCAnJykudG9TdHJpbmcoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgYXJpYURlc2NyaWJlZGJ5ID0gYHRvb2x0aXAtJHt0aGlzLnRvb2x0aXBJZH1gO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBAT3V0cHV0KClcbiAgdG9vbHRpcFN0YXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHByb3RlY3RlZCBfZGVsYXlUaW1lb3V0SWQ6IG51bWJlciB8IGFueTtcbiAgcHJvdGVjdGVkIF90b29sdGlwQ2FuY2VsU2hvd0ZuOiBGdW5jdGlvbjtcblxuICBwcml2YXRlIF90b29sdGlwOiBDb21wb25lbnRMb2FkZXI8VG9vbHRpcENvbnRhaW5lckNvbXBvbmVudD47XG4gIGNvbnN0cnVjdG9yKFxuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgY29uZmlnOiBUb29sdGlwQ29uZmlnXG4gICkge1xuXG4gICAgdGhpcy5fdG9vbHRpcCA9IGNpc1xuICAgICAgLmNyZWF0ZUxvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZixcbiAgICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyXG4gICAgICApXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogVG9vbHRpcENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZ30pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3Rvb2x0aXAub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fdG9vbHRpcC5vbkhpZGRlbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAubGlzdGVuKHtcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gICAgdGhpcy50b29sdGlwQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTDosKAwplzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmlzT3BlbiB8fFxuICAgICAgdGhpcy5pc0Rpc2FibGVkIHx8XG4gICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCB8fFxuICAgICAgIXRoaXMudG9vbHRpcFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dUb29sdGlwID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XG4gICAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90b29sdGlwXG4gICAgICAgIC5hdHRhY2goVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudClcbiAgICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcbiAgICAgICAgLnNob3coe1xuICAgICAgICAgIGNvbnRlbnQ6IHRoaXMudG9vbHRpcCxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzOiB0aGlzLmNvbnRhaW5lckNsYXNzLFxuICAgICAgICAgIGlkOiB0aGlzLmFyaWFEZXNjcmliZWRieVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZyA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuZGVsYXkpIHtcbiAgICAgIGNvbnN0IF90aW1lciA9IHRpbWVyKHRoaXMuZGVsYXkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgICAgIGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZygpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnRyaWdnZXJzKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJzID0gcGFyc2VUcmlnZ2Vycyh0aGlzLnRyaWdnZXJzKTtcbiAgICAgICAgdGhpcy5fdG9vbHRpcENhbmNlbFNob3dGbiA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRyaWdnZXJzWzBdLmNsb3NlLCAoKSA9PiB7XG4gICAgICAgICAgX3RpbWVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93VG9vbHRpcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudMOiwoDCmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5VGltZW91dElkKTtcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fdG9vbHRpcC5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdG9vbHRpcC5pbnN0YW5jZS5jbGFzc01hcC5pbiA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fdG9vbHRpcC5oaWRlKCk7XG4gICAgfSwgdGhpcy50b29sdGlwRmFkZUR1cmF0aW9uKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sdGlwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi90b29sdGlwLmNvbmZpZyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVG9vbHRpcERpcmVjdGl2ZSwgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUb29sdGlwRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVG9vbHRpcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1Rvb2x0aXBDb25maWcsIENvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsImlzQnMzIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFdmVudEVtaXR0ZXIiLCJ3YXJuT25jZSIsInRpbWVyIiwicGFyc2VUcmlnZ2VycyIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiQ29tcG9uZW50TG9hZGVyRmFjdG9yeSIsIklucHV0IiwiT3V0cHV0IiwiSG9zdEJpbmRpbmciLCJPbkNoYW5nZSIsIlBvc2l0aW9uaW5nU2VydmljZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OzZCQU1jLEtBQUs7Ozs7NEJBRU4sYUFBYTs7Ozt5QkFJaEIsQ0FBQzs7O29CQVRWQSxlQUFVOzs0QkFIWDs7Ozs7OztBQ0FBO1FBbURFLG1DQUFZLE1BQXFCO1lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO1FBTkQsc0JBQUksNENBQUs7OztnQkFBVDtnQkFDRSxPQUFPQyxXQUFLLEVBQUUsQ0FBQzthQUNoQjs7O1dBQUE7Ozs7UUFNRCxtREFBZTs7O1lBQWY7Z0JBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBVyxJQUFJLENBQUMsU0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUVsRCxJQUFJLENBQUMsUUFBUSxTQUFNLElBQUksQ0FBQztnQkFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixJQUFJLENBQUMsUUFBUSxXQUFRLElBQUks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