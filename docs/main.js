"use strict";
(self["webpackChunkngx_color_picker"] = self["webpackChunkngx_color_picker"] || []).push([["main"],{

/***/ 9334:
/*!************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/color-picker.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphaComponent": () => (/* reexport safe */ _components_parts_alpha_alpha_component__WEBPACK_IMPORTED_MODULE_3__.AlphaComponent),
/* harmony export */   "ChromePickerComponent": () => (/* reexport safe */ _components_chrome_picker_chrome_picker_component__WEBPACK_IMPORTED_MODULE_13__.ChromePickerComponent),
/* harmony export */   "Color": () => (/* reexport safe */ _helpers_color_class__WEBPACK_IMPORTED_MODULE_20__.Color),
/* harmony export */   "ColorPickerControl": () => (/* reexport safe */ _helpers_control_class__WEBPACK_IMPORTED_MODULE_21__.ColorPickerControl),
/* harmony export */   "ColorPickerModule": () => (/* binding */ ColorPickerModule),
/* harmony export */   "ColorPresetComponent": () => (/* reexport safe */ _components_parts_color_preset_color_preset_component__WEBPACK_IMPORTED_MODULE_8__.ColorPresetComponent),
/* harmony export */   "ColorPresetSublist": () => (/* reexport safe */ _components_parts_color_preset_sublist_color_preset_sublist_component__WEBPACK_IMPORTED_MODULE_9__.ColorPresetSublist),
/* harmony export */   "ColorPresetsComponent": () => (/* reexport safe */ _components_parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_7__.ColorPresetsComponent),
/* harmony export */   "ColorsTable": () => (/* reexport safe */ _helpers_colors_table_class__WEBPACK_IMPORTED_MODULE_22__.ColorsTable),
/* harmony export */   "CompactPickerComponent": () => (/* reexport safe */ _components_compact_picker_compact_picker_component__WEBPACK_IMPORTED_MODULE_15__.CompactPickerComponent),
/* harmony export */   "GithubPickerComponent": () => (/* reexport safe */ _components_github_picker_github_picker_component__WEBPACK_IMPORTED_MODULE_16__.GithubPickerComponent),
/* harmony export */   "HexComponent": () => (/* reexport safe */ _components_parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_6__.HexComponent),
/* harmony export */   "HslaComponent": () => (/* reexport safe */ _components_parts_inputs_hsla_input_hsla_input_component__WEBPACK_IMPORTED_MODULE_5__.HslaComponent),
/* harmony export */   "HueComponent": () => (/* reexport safe */ _components_parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_2__.HueComponent),
/* harmony export */   "IndicatorComponent": () => (/* reexport safe */ _components_parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_1__.IndicatorComponent),
/* harmony export */   "IpPickerComponent": () => (/* reexport safe */ _components_ip_picker_ip_picker_component__WEBPACK_IMPORTED_MODULE_18__.IpPickerComponent),
/* harmony export */   "RgbaComponent": () => (/* reexport safe */ _components_parts_inputs_rgba_input_rgba_input_component__WEBPACK_IMPORTED_MODULE_4__.RgbaComponent),
/* harmony export */   "SaturationComponent": () => (/* reexport safe */ _components_parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_0__.SaturationComponent),
/* harmony export */   "SketchPickerComponent": () => (/* reexport safe */ _components_sketch_picker_sketch_picker_component__WEBPACK_IMPORTED_MODULE_14__.SketchPickerComponent),
/* harmony export */   "SwatchesPickerComponent": () => (/* reexport safe */ _components_swatches_picker_swatches_picker_component__WEBPACK_IMPORTED_MODULE_17__.SwatchesPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/parts/saturation/saturation.component */ 2945);
/* harmony import */ var _components_parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/parts/indicator/indicator.component */ 5128);
/* harmony import */ var _components_parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/parts/hue/hue.component */ 114);
/* harmony import */ var _components_parts_alpha_alpha_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/parts/alpha/alpha.component */ 5210);
/* harmony import */ var _components_parts_inputs_rgba_input_rgba_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/parts/inputs/rgba-input/rgba-input.component */ 3516);
/* harmony import */ var _components_parts_inputs_hsla_input_hsla_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/parts/inputs/hsla-input/hsla-input.component */ 1715);
/* harmony import */ var _components_parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/parts/inputs/hex-input/hex-input.component */ 3005);
/* harmony import */ var _components_parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/parts/color-presets/color-presets.component */ 5004);
/* harmony import */ var _components_parts_color_preset_color_preset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/parts/color-preset/color-preset.component */ 923);
/* harmony import */ var _components_parts_color_preset_sublist_color_preset_sublist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/parts/color-preset-sublist/color-preset-sublist.component */ 1849);
/* harmony import */ var _directives_color_picker_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/color-picker-input.directive */ 442);
/* harmony import */ var _pipes_chunks_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/chunks.pipe */ 3973);
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/reverse.pipe */ 2317);
/* harmony import */ var _components_chrome_picker_chrome_picker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/chrome-picker/chrome-picker.component */ 1891);
/* harmony import */ var _components_sketch_picker_sketch_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sketch-picker/sketch-picker.component */ 4127);
/* harmony import */ var _components_compact_picker_compact_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/compact-picker/compact-picker.component */ 2021);
/* harmony import */ var _components_github_picker_github_picker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/github-picker/github-picker.component */ 9249);
/* harmony import */ var _components_swatches_picker_swatches_picker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/swatches-picker/swatches-picker.component */ 304);
/* harmony import */ var _components_ip_picker_ip_picker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/ip-picker/ip-picker.component */ 6286);
/* harmony import */ var _services_color_picker_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/color-picker.service */ 4191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_color_class__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/color.class */ 9426);
/* harmony import */ var _helpers_control_class__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/control.class */ 4402);
/* harmony import */ var _helpers_colors_table_class__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/colors-table.class */ 1035);
/*
 * ngx-color-picker
 *
 * By Ivan Pintar, http://www.pintar-ivan.com
 * Licensed under the MIT License
 * See https://github.com/pIvan/ngx-color-picker/blob/master/README.md
 */


/**
 * parts
 */










/**
 * directives
 */

/**
 * pipes
 */


/**
 * pickers
 */






/**
 * services
 */


















/**
 * exports
 */



class ColorPickerModule {
    static forRoot(configuration) {
        return {
            ngModule: ColorPickerModule,
            providers: [
                { provide: _services_color_picker_service__WEBPACK_IMPORTED_MODULE_19__.ColorPickerConfig, useValue: configuration || new _services_color_picker_service__WEBPACK_IMPORTED_MODULE_19__.ColorPickerConfig() }
            ]
        };
    }
}
ColorPickerModule.ɵfac = function ColorPickerModule_Factory(t) { return new (t || ColorPickerModule)(); };
ColorPickerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: ColorPickerModule });
ColorPickerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [
        _services_color_picker_service__WEBPACK_IMPORTED_MODULE_19__.ColorPickerConfig
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](ColorPickerModule, { declarations: [_components_parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_0__.SaturationComponent,
        _components_parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_1__.IndicatorComponent,
        _components_parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_2__.HueComponent,
        _components_parts_alpha_alpha_component__WEBPACK_IMPORTED_MODULE_3__.AlphaComponent,
        _components_parts_inputs_rgba_input_rgba_input_component__WEBPACK_IMPORTED_MODULE_4__.RgbaComponent,
        _components_parts_inputs_hsla_input_hsla_input_component__WEBPACK_IMPORTED_MODULE_5__.HslaComponent,
        _components_parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_6__.HexComponent,
        _components_parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_7__.ColorPresetsComponent,
        _components_parts_color_preset_color_preset_component__WEBPACK_IMPORTED_MODULE_8__.ColorPresetComponent,
        _components_parts_color_preset_sublist_color_preset_sublist_component__WEBPACK_IMPORTED_MODULE_9__.ColorPresetSublist,
        _directives_color_picker_input_directive__WEBPACK_IMPORTED_MODULE_10__.ColorPickerInputDirective,
        _pipes_chunks_pipe__WEBPACK_IMPORTED_MODULE_11__.ChunksPipe,
        _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_12__.ReversePipe,
        /**
         * prepared components
         */
        _components_chrome_picker_chrome_picker_component__WEBPACK_IMPORTED_MODULE_13__.ChromePickerComponent,
        _components_sketch_picker_sketch_picker_component__WEBPACK_IMPORTED_MODULE_14__.SketchPickerComponent,
        _components_swatches_picker_swatches_picker_component__WEBPACK_IMPORTED_MODULE_17__.SwatchesPickerComponent,
        _components_github_picker_github_picker_component__WEBPACK_IMPORTED_MODULE_16__.GithubPickerComponent,
        _components_compact_picker_compact_picker_component__WEBPACK_IMPORTED_MODULE_15__.CompactPickerComponent,
        _components_ip_picker_ip_picker_component__WEBPACK_IMPORTED_MODULE_18__.IpPickerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule], exports: [_components_parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_0__.SaturationComponent,
        _components_parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_1__.IndicatorComponent,
        _components_parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_2__.HueComponent,
        _components_parts_alpha_alpha_component__WEBPACK_IMPORTED_MODULE_3__.AlphaComponent,
        _components_parts_inputs_rgba_input_rgba_input_component__WEBPACK_IMPORTED_MODULE_4__.RgbaComponent,
        _components_parts_inputs_hsla_input_hsla_input_component__WEBPACK_IMPORTED_MODULE_5__.HslaComponent,
        _components_parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_6__.HexComponent,
        _components_parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_7__.ColorPresetsComponent,
        _components_chrome_picker_chrome_picker_component__WEBPACK_IMPORTED_MODULE_13__.ChromePickerComponent,
        _components_sketch_picker_sketch_picker_component__WEBPACK_IMPORTED_MODULE_14__.SketchPickerComponent,
        _components_swatches_picker_swatches_picker_component__WEBPACK_IMPORTED_MODULE_17__.SwatchesPickerComponent,
        _components_github_picker_github_picker_component__WEBPACK_IMPORTED_MODULE_16__.GithubPickerComponent,
        _components_compact_picker_compact_picker_component__WEBPACK_IMPORTED_MODULE_15__.CompactPickerComponent,
        _components_ip_picker_ip_picker_component__WEBPACK_IMPORTED_MODULE_18__.IpPickerComponent] }); })();


/***/ }),

/***/ 1891:
/*!*****************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/chrome-picker/chrome-picker.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChromePickerComponent": () => (/* binding */ ChromePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/control.class */ 4402);
/* harmony import */ var _helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../helpers/helper.functions */ 3583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parts/saturation/saturation.component */ 2945);
/* harmony import */ var _parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parts/indicator/indicator.component */ 5128);
/* harmony import */ var _parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/hue/hue.component */ 114);
/* harmony import */ var _parts_alpha_alpha_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parts/alpha/alpha.component */ 5210);
/* harmony import */ var _parts_inputs_rgba_input_rgba_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/inputs/rgba-input/rgba-input.component */ 3516);
/* harmony import */ var _parts_inputs_hsla_input_hsla_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/inputs/hsla-input/hsla-input.component */ 1715);
/* harmony import */ var _parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/inputs/hex-input/hex-input.component */ 3005);
/* harmony import */ var _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parts/color-presets/color-presets.component */ 5004);













function ChromePickerComponent_alpha_component_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "alpha-component", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("colorChange", function ChromePickerComponent_alpha_component_8_Template_alpha_component_colorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.control.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", ctx_r0.control.value);
} }
function ChromePickerComponent_rgba_input_component_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "rgba-input-component", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("colorChange", function ChromePickerComponent_rgba_input_component_12_Template_rgba_input_component_colorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.control.value = $event); })("hueChange", function ChromePickerComponent_rgba_input_component_12_Template_rgba_input_component_hueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.control.hue = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alpha", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, ctx_r1.control.alphaChannelVisibilityChanges))("color", ctx_r1.control.value)("hue", ctx_r1.control.hue);
} }
function ChromePickerComponent_hsla_input_component_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "hsla-input-component", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("colorChange", function ChromePickerComponent_hsla_input_component_13_Template_hsla_input_component_colorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.control.value = $event); })("hueChange", function ChromePickerComponent_hsla_input_component_13_Template_hsla_input_component_hueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.control.hue = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alpha", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, ctx_r2.control.alphaChannelVisibilityChanges))("color", ctx_r2.control.value)("hue", ctx_r2.control.hue);
} }
function ChromePickerComponent_hex_input_component_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "hex-input-component", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("colorChange", function ChromePickerComponent_hex_input_component_14_Template_hex_input_component_colorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.control.value = $event); })("hueChange", function ChromePickerComponent_hex_input_component_14_Template_hex_input_component_hueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.control.hue = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", ctx_r3.control.value)("hue", ctx_r3.control.hue);
} }
function ChromePickerComponent_color_presets_component_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "color-presets-component", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("colorChange", function ChromePickerComponent_color_presets_component_17_Template_color_presets_component_colorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.control.value = $event); })("hueChange", function ChromePickerComponent_color_presets_component_17_Template_color_presets_component_hueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.control.hue = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", ctx_r4.control.value)("colorPresets", ctx_r4.control.presets)("hue", ctx_r4.control.hue);
} }
const _c0 = [[["", "before", ""]], "*"];
const _c1 = ["[before]", "*"];
class ChromePickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.selectedPresentation = 0;
        this.presentations = ['rgba', 'hsla', 'hex'];
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter(false);
        this.subscriptions = [];
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        /**
         * set color presets
         * defined by this chrome color picker component
         */
        if (!this.control.hasPresets()) {
            this.control
                .setColorPresets([
                ['#f44336', '#ffebee', '#ffcdd2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C'],
                ['#E91E63', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f'],
                ['#9C27B0', '#F3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c'],
                ['#673AB7', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92'],
                ['#3F51B5', '#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e'],
                ['#2196F3', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0D47a1'],
                ['#03A9F4', '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b'],
                ['#00BCD4', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064'],
                ['#009688', '#E0F2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40'],
                ['#4CAF50', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20'],
                ['#8BC34A', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e'],
                ['#cddc39', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#c0dc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717'],
                ['#ffeb3b', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17'],
                ['#ffc107', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'],
                ['#ff9800', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100'],
                ['#ff5722', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c'],
                ['#795548', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723'],
                ['#9e9e9e', '#fafafa', '#f5f5f5', '#eee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'],
                ['#607d8b', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#60708b', '#546e7a', '#455a64', '#37474f', '#263238']
            ]);
        }
        this.subscriptions.push(this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit((0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(value, this.control.initType));
        }));
    }
    ngOnDestroy() {
        this.cdr.detach();
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    ngOnChanges(changes) {
        if (this.color && this.control && (0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
    changePresentation() {
        this.selectedPresentation =
            this.selectedPresentation === this.presentations.length - 1 ? 0 : this.selectedPresentation + 1;
    }
}
ChromePickerComponent.ɵfac = function ChromePickerComponent_Factory(t) { return new (t || ChromePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef)); };
ChromePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ChromePickerComponent, selectors: [["chrome-picker"]], inputs: { color: "color", control: "control" }, outputs: { colorChange: "colorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 20, vars: 16, consts: [[3, "hue", "color", "colorChange"], [1, "controls"], [1, "controls-row", "hue-alpha"], [1, "column"], [3, "colorType", "color"], [3, "hue", "color", "hueChange", "colorChange"], [3, "color", "colorChange", 4, "ngIf"], [1, "controls-row", "presentation"], [1, "column", 3, "ngSwitch"], ["label", "", 3, "alpha", "color", "hue", "colorChange", "hueChange", 4, "ngSwitchCase"], ["label", "", "prefix", "#", 3, "color", "hue", "colorChange", "hueChange", 4, "ngSwitchCase"], [1, "column", "type-column"], [1, "type-btn", 3, "click"], [3, "color", "colorPresets", "hue", "colorChange", "hueChange", 4, "ngIf"], [3, "color", "colorChange"], ["label", "", 3, "alpha", "color", "hue", "colorChange", "hueChange"], ["label", "", "prefix", "#", 3, "color", "hue", "colorChange", "hueChange"], [3, "color", "colorPresets", "hue", "colorChange", "hueChange"]], template: function ChromePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "saturation-component", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("colorChange", function ChromePickerComponent_Template_saturation_component_colorChange_1_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "indicator-component", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 3)(7, "hue-component", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("hueChange", function ChromePickerComponent_Template_hue_component_hueChange_7_listener($event) { return ctx.control.hue = $event; })("colorChange", function ChromePickerComponent_Template_hue_component_colorChange_7_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ChromePickerComponent_alpha_component_8_Template, 1, 1, "alpha-component", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ChromePickerComponent_rgba_input_component_12_Template, 2, 5, "rgba-input-component", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, ChromePickerComponent_hsla_input_component_13_Template, 2, 5, "hsla-input-component", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, ChromePickerComponent_hex_input_component_14_Template, 1, 2, "hex-input-component", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 11)(16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ChromePickerComponent_Template_span_click_16_listener() { return ctx.changePresentation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ChromePickerComponent_color_presets_component_17_Template, 1, 3, "color-presets-component", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojection"](19, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hue", ctx.control.hue)("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("colorType", ctx.presentations[ctx.selectedPresentation])("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hue", ctx.control.hue)("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 12, ctx.control.alphaChannelVisibilityChanges));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", ctx.presentations[ctx.selectedPresentation]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "rgba");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "hsla");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "hex");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 14, ctx.control.presetsVisibilityChanges));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, _parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_2__.SaturationComponent, _parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_3__.IndicatorComponent, _parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_4__.HueComponent, _parts_alpha_alpha_component__WEBPACK_IMPORTED_MODULE_5__.AlphaComponent, _parts_inputs_rgba_input_rgba_input_component__WEBPACK_IMPORTED_MODULE_6__.RgbaComponent, _parts_inputs_hsla_input_hsla_input_component__WEBPACK_IMPORTED_MODULE_7__.HslaComponent, _parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_8__.HexComponent, _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_9__.ColorPresetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  display: block;\n  width: 230px;\n  border-radius: 2px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 1px 4px;\n}\n[_nghost-%COMP%]     .controls .pointer {\n  box-shadow: rgba(0, 0, 0, 0.3) 0 0 2px, rgba(0, 0, 0, 0.3) 0 1px 4px;\n}\n[_nghost-%COMP%]     .reflection, [_nghost-%COMP%]     color-preset {\n  border-radius: 2px;\n}\n[_nghost-%COMP%]     color-preset {\n  box-shadow: inset rgba(0, 0, 0, 0.3) 0px 0px 2px;\n}\n[_nghost-%COMP%]     color-preset, [_nghost-%COMP%]     color-preset-sublist {\n  margin: 0 0 0 12px;\n}\n[_nghost-%COMP%]     color-preset:first-child, [_nghost-%COMP%]     color-preset-sublist:first-child {\n  margin: 0;\n}\n[_nghost-%COMP%]     .sublist color-preset:hover, [_nghost-%COMP%]     .presets-row > color-preset:hover {\n  -ms-transform: scale(1.18, 1.18);\n      transform: scale(1.18, 1.18);\n}\nsaturation-component[_ngcontent-%COMP%] {\n  height: 120px;\n}\n.controls[_ngcontent-%COMP%] {\n  padding: 15px 15px 10px;\n}\n.controls-row[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n.column[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.hue-alpha[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child {\n  width: 42px;\n  padding: 0 10px 0 0;\n}\nindicator-component[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n}\nalpha-component[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\ncolor-presets-component[_ngcontent-%COMP%] {\n  border-top: 1px solid #d0d0d0;\n  padding: 12px;\n}\ncolor-presets-component[_ngcontent-%COMP%]     .presets-row {\n  padding: 12px 0 0;\n}\n.type-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  background: transparent url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\") no-repeat center;\n  background-size: 6px 12px;\n}\n.type-btn[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n}\n.type-column[_ngcontent-%COMP%] {\n  width: 25px;\n  text-align: right;\n}\n.presentation[_ngcontent-%COMP%] {\n  padding: 12px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNocm9tZS1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwRUFBQTtBQUNKO0FBRVE7RUFDSSxvRUFBQTtBQUFaO0FBR1E7O0VBRUksa0JBQUE7QUFEWjtBQUlRO0VBQ0ksZ0RBQUE7QUFGWjtBQUtROztFQUVJLGtCQUFBO0FBSFo7QUFNUTs7RUFFSSxTQUFBO0FBSlo7QUFPUTs7RUFFSSxnQ0FBQTtNQUFBLDRCQUFBO0FBTFo7QUFVQTtFQUNJLGFBQUE7QUFQSjtBQVVBO0VBQ0ksdUJBQUE7QUFQSjtBQVVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFQSjtBQVVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQVBKO0FBVUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVBKO0FBVUE7RUFDSSxlQUFBO0FBUEo7QUFVQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtBQVBKO0FBU0k7RUFDSSxpQkFBQTtBQVBSO0FBV0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsazZCQUFBO0VBQ0EseUJBQUE7QUFSSjtBQVVJO0VBQ0ksc0JBQUE7QUFSUjtBQVlBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBVEo7QUFZQTtFQUNJLGlCQUFBO0FBVEoiLCJmaWxlIjoiY2hyb21lLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAwcHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCA0cHg7XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgICAuY29udHJvbHMgLnBvaW50ZXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuMykgMCAwIDJweCwgcmdiYSgwLDAsMCwuMykgMCAxcHggNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlZmxlY3Rpb24sXG4gICAgICAgIGNvbG9yLXByZXNldCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xvci1wcmVzZXQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAwcHggMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgY29sb3ItcHJlc2V0LFxuICAgICAgICBjb2xvci1wcmVzZXQtc3VibGlzdCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xvci1wcmVzZXQ6Zmlyc3QtY2hpbGQsXG4gICAgICAgIGNvbG9yLXByZXNldC1zdWJsaXN0OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJsaXN0IGNvbG9yLXByZXNldDpob3ZlcixcbiAgICAgICAgLnByZXNldHMtcm93ID4gY29sb3ItcHJlc2V0OmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xOCwgMS4xOCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnNhdHVyYXRpb24tY29tcG9uZW50IHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uY29udHJvbHMge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4O1xufVxuXG4uY29udHJvbHMtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbHVtbiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaHVlLWFscGhhIC5jb2x1bW46Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XG59XG5cbmluZGljYXRvci1jb21wb25lbnQge1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmFscGhhLWNvbXBvbmVudCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5jb2xvci1wcmVzZXRzLWNvbXBvbmVudCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMGQwZDA7XG4gICAgcGFkZGluZzogMTJweDtcblxuICAgIDo6bmctZGVlcCAucHJlc2V0cy1yb3cge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICB9XG59XG5cbi50eXBlLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBZ0NBWUFBQUFmZkNqeEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQ2V3QUFBbnNCMDFDTzNBQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQUlBU1VSQlZFaUo3Wlk5YXhSUkZJYWZzeE1TdHJMUUpwQWdwQkZoaStDOXcxWVNvMDBJNlJaL2c5dlpwQmYvUU9yNEd5UmdrU0tOU3JBYWRzWnFRR3dDa3VBV3lSWkpzeVN3dmhaN04vdmh6cmdiTEgzTGQ4NTk3amx6ejUwekpva3l4WEg4RHFEVmFyMHFpNnY4QmJJdHFTR3BFY2Z4ZGxtc0ZXWGt2WDhBZkFWV2czVUtQRW5UOUdLdWpNenNBRmdac1ZhQ04xVlRRZDc3WFVucmdFMWt2KzY5MzUyNjhXUnB6cm5IWnZZUldDN1l2QzNwUlpabDN3b3pxdFZxaXlIOUlnakFzcGtkMUdxMXhVSlF0VnJkQjlaS0lBT3RoZGcvUWM2NUxVazd3TklNb0NWSk84NjVyWUZoa3FqWDYvZDd2VjRHUEp3Qk1xb2ZVUlM1SkVrNkZZQmVyL2VlWWIvTW85V3dGblBPdlFiZUF2ZnVBQUs0Qk40c0FKdEFHL2dKSUVsbU51aUp5YmEzRUdObVppUGVadUVWbVZlbGwvWS82TitDekRuM0FYaEVPT283SHYvM0JlQXo4SXpRa01QbkpidVB4MXdDK3lZSjcvMG5ZSVA1Uy8wRkhLZHArcndDRUVYUlMvcmY1SGwxR3RiMk0waVNwQ09wQ1p6UEFUbVgxRXlTcEhNTEFzaXk3TWpNRG9IckdTRFhabmFZWmRuUndCaDdKOTF1dHdtY3pBQTZDYkczR2dQbGVYNGpxVUgvYTFDa3RxUkdudWMzaFNDQU1CMzJnS3Nwa0N0Z2IzS0NRTW1ramVQNFdOSlRock5OWnZhbDFXcHRUSXN2N0p0UTR0bUlkUmE4cVNvRXBXbDZZV1pOb0FOMHpLeFpOUGVocExTQlp2MnQrUTBDSjlsTG5BUlFMQUFBQUFCSlJVNUVya0pnZ2c9PScpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2cHggMTJweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIH1cbn1cblxuLnR5cGUtY29sdW1uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnByZXNlbnRhdGlvbiB7XG4gICAgcGFkZGluZzogMTJweCAwIDA7XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 2021:
/*!*******************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/compact-picker/compact-picker.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompactPickerComponent": () => (/* binding */ CompactPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/control.class */ 4402);
/* harmony import */ var _helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../helpers/helper.functions */ 3583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parts/saturation/saturation.component */ 2945);
/* harmony import */ var _parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parts/indicator/indicator.component */ 5128);
/* harmony import */ var _parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/hue/hue.component */ 114);
/* harmony import */ var _parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parts/inputs/hex-input/hex-input.component */ 3005);
/* harmony import */ var _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/color-presets/color-presets.component */ 5004);










function CompactPickerComponent_color_presets_component_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "color-presets-component", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("colorChange", function CompactPickerComponent_color_presets_component_1_Template_color_presets_component_colorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.control.value = $event); })("hueChange", function CompactPickerComponent_color_presets_component_1_Template_color_presets_component_hueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.control.hue = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("columns", 9)("color", ctx_r0.control.value)("colorPresets", ctx_r0.control.presets)("hue", ctx_r0.control.hue);
} }
const _c0 = [[["", "before", ""]], "*"];
const _c1 = ["[before]", "*"];
class CompactPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter(false);
        this.subscriptions = [];
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        /**
         * set color presets
         * defined by compact color picker component
         */
        if (!this.control.hasPresets()) {
            this.control
                .setColorPresets([
                '#6da6e8', '#74c283', '#f9d948', '#f5943f', '#f66c6c', '#ef8ab8', '#696cd4', '#6c6c6c', '#f6f5f5'
            ]);
        }
        this.subscriptions.push(this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit((0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(value, this.control.initType));
        }));
    }
    ngOnDestroy() {
        this.cdr.detach();
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    ngOnChanges(changes) {
        if (this.color && this.control && (0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
}
CompactPickerComponent.ɵfac = function CompactPickerComponent_Factory(t) { return new (t || CompactPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef)); };
CompactPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CompactPickerComponent, selectors: [["compact-picker"]], inputs: { color: "color", control: "control" }, outputs: { colorChange: "colorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 17, vars: 10, consts: [["direction", "down", 3, "columns", "color", "colorPresets", "hue", "colorChange", "hueChange", 4, "ngIf"], [1, "controls"], [1, "controls-row", "saturation-hue"], [1, "column"], [3, "hue", "color", "colorChange"], [1, "column", "hue-column"], ["vertical", "", 3, "hue", "color", "hueChange", "colorChange"], [1, "controls-row", "presentation"], ["viewBox", "0 0 1024 1024", 1, "pencil"], ["d", "M639.77,121.045l-48.598,84.2l112.215,64.8l48.6-84.205L639.77,121.045z M558.773,261.354\n                    L315.78,682.206l112.215,64.795L670.99,326.15L558.773,261.354z M690.816,75.691l74.922,43.286\n                    c41.682,24.045,55.52,76.564,31.725,117.784l-37.967,65.68l-32.398,56.11L451.706,835.594L282.452,947.303\n                    c-40.961,27.004-70.24,9.027-67.329-38.894l12.149-202.411l275.395-477.041l32.398-56.11l37.883-65.686\n                    C596.824,65.946,649.473,51.857,690.816,75.691z M274.689,883.015l120.908-79.818l-112.218-64.8L274.689,883.015z"], ["prefix", "#", 3, "color", "hue", "colorChange", "hueChange"], ["colorType", "hex", 3, "color"], ["direction", "down", 3, "columns", "color", "colorPresets", "hue", "colorChange", "hueChange"]], template: function CompactPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CompactPickerComponent_color_presets_component_1_Template, 1, 4, "color-presets-component", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "saturation-component", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("colorChange", function CompactPickerComponent_Template_saturation_component_colorChange_6_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5)(8, "hue-component", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("hueChange", function CompactPickerComponent_Template_hue_component_hueChange_8_listener($event) { return ctx.control.hue = $event; })("colorChange", function CompactPickerComponent_Template_hue_component_colorChange_8_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7)(10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "hex-input-component", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("colorChange", function CompactPickerComponent_Template_hex_input_component_colorChange_13_listener($event) { return ctx.control.value = $event; })("hueChange", function CompactPickerComponent_Template_hex_input_component_hueChange_13_listener($event) { return ctx.control.hue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "indicator-component", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](16, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 8, ctx.control.presetsVisibilityChanges));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hue", ctx.control.hue)("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hue", ctx.control.hue)("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", ctx.control.value)("hue", ctx.control.hue);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", ctx.control.value);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_2__.SaturationComponent, _parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_3__.IndicatorComponent, _parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_4__.HueComponent, _parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_5__.HexComponent, _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_6__.ColorPresetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  display: block;\n  width: 240px;\n  border-radius: 3px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 0 4px;\n}\n[_nghost-%COMP%]     .reflection {\n  display: none;\n}\n[_nghost-%COMP%]     color-preset {\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 1px 1px;\n}\n[_nghost-%COMP%]     .presets-row > color-preset, [_nghost-%COMP%]     .presets-row > color-preset-sublist {\n  margin: 0 0 0 6px;\n}\n[_nghost-%COMP%]     .presets-row > color-preset:first-child, [_nghost-%COMP%]     .presets-row > color-preset-sublist:first-child {\n  margin: 0;\n}\n[_nghost-%COMP%]     color-preset.selected, [_nghost-%COMP%]     .sublist color-preset:hover, [_nghost-%COMP%]     .presets-row > color-preset:hover {\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 1px 6px;\n}\n[_nghost-%COMP%]   hue-component[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 178px;\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 0px 2px;\n}\n[_nghost-%COMP%]   hue-component[vertical][_ngcontent-%COMP%]     .pointer {\n  width: auto;\n  height: 9px;\n  left: -3px;\n  right: -3px;\n  margin: -4.5px 0 0;\n  background: transparent;\n  border: 3px solid #fff;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 2px;\n}\n[_nghost-%COMP%]   indicator-component[_ngcontent-%COMP%]     svg {\n  vertical-align: 25%;\n}\ncolor-presets-component[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e4e4e6;\n  padding: 9px 12px;\n}\ncolor-presets-component[_ngcontent-%COMP%]     .presets-row {\n  padding: 10px 0 0;\n}\n.controls[_ngcontent-%COMP%] {\n  padding: 10px 12px 12px;\n}\n.controls-row[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n.column[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.controls-row.saturation-hue[_ngcontent-%COMP%] {\n  padding-bottom: 9px;\n}\n.controls-row.saturation-hue[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child {\n  width: 178px;\n}\nsaturation-component[_ngcontent-%COMP%] {\n  height: 178px;\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 0px 2px;\n}\nsaturation-component[_ngcontent-%COMP%]     .pointer {\n  border-width: 2px;\n  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 2px;\n}\n.hue-column[_ngcontent-%COMP%] {\n  padding-left: 14px;\n}\n.controls-row.presentation[_ngcontent-%COMP%] {\n  border: 1px solid #e4e4e6;\n  border-radius: 3px;\n  padding: 6px 6px 6px 26px;\n  position: relative;\n}\nindicator-component[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 0px 2px;\n  border-radius: 50%;\n}\nhex-input-component[_ngcontent-%COMP%]     input {\n  border: 0;\n  color: #817e81;\n  margin: 0;\n  text-align: left;\n  height: 18px;\n}\n.pencil[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 14px;\n  width: 14px;\n  left: 6px;\n  top: 50%;\n  margin: -7px 0 0;\n}\n.pencil[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhY3QtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0VBQUE7QUFDSjtBQUVRO0VBQ0ksYUFBQTtBQUFaO0FBR1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUFEWjtBQUlROztFQUVJLGlCQUFBO0FBRlo7QUFLUTs7RUFFSSxTQUFBO0FBSFo7QUFNUTs7O0VBR0ksZ0RBQUE7QUFKWjtBQVFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtBQU5SO0FBU0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQVBSO0FBVUk7RUFDSSxtQkFBQTtBQVJSO0FBWUE7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBVEo7QUFXSTtFQUNJLGlCQUFBO0FBVFI7QUFhQTtFQUNJLHVCQUFBO0FBVko7QUFhQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBVko7QUFhQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUFWSjtBQWFBO0VBQ0ksbUJBQUE7QUFWSjtBQWFBO0VBQ0ksWUFBQTtBQVZKO0FBYUE7RUFDSSxhQUFBO0VBQ0EsZ0RBQUE7QUFWSjtBQVlJO0VBQ0ksaUJBQUE7RUFDQSwwQ0FBQTtBQVZSO0FBY0E7RUFDSSxrQkFBQTtBQVhKO0FBY0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVhKO0FBY0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWNBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBWEo7QUFjQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBWEo7QUFjQTtFQUNJLFVBQUE7QUFYSiIsImZpbGUiOiJjb21wYWN0LXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAwcHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDAgNHB4O1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgICAgLnJlZmxlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbG9yLXByZXNldCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IHJnYmEoMCwgMCwgMCwgMC42KSAwcHggMXB4IDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcmVzZXRzLXJvdyA+IGNvbG9yLXByZXNldCxcbiAgICAgICAgLnByZXNldHMtcm93ID4gY29sb3ItcHJlc2V0LXN1Ymxpc3Qge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJlc2V0cy1yb3cgPiBjb2xvci1wcmVzZXQ6Zmlyc3QtY2hpbGQsXG4gICAgICAgIC5wcmVzZXRzLXJvdyA+IGNvbG9yLXByZXNldC1zdWJsaXN0OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbG9yLXByZXNldC5zZWxlY3RlZCxcbiAgICAgICAgLnN1Ymxpc3QgY29sb3ItcHJlc2V0OmhvdmVyLFxuICAgICAgICAucHJlc2V0cy1yb3cgPiBjb2xvci1wcmVzZXQ6aG92ZXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjYpIDBweCAxcHggNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaHVlLWNvbXBvbmVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE3OHB4O1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuNikgMHB4IDBweCAycHg7XG4gICAgfVxuXG4gICAgaHVlLWNvbXBvbmVudFt2ZXJ0aWNhbF0gOjpuZy1kZWVwIC5wb2ludGVyIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogOXB4O1xuICAgICAgICBsZWZ0OiAtM3B4O1xuICAgICAgICByaWdodDogLTNweDtcbiAgICAgICAgbWFyZ2luOiAtNC41cHggMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNikgMHB4IDBweCAycHg7XG4gICAgfVxuXG4gICAgaW5kaWNhdG9yLWNvbXBvbmVudCA6Om5nLWRlZXAgc3ZnIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IDI1JTtcbiAgICB9XG59XG5cbmNvbG9yLXByZXNldHMtY29tcG9uZW50IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNjtcbiAgICBwYWRkaW5nOiA5cHggMTJweDtcblxuICAgIDo6bmctZGVlcCAucHJlc2V0cy1yb3cge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMDtcbiAgICB9XG59XG5cbi5jb250cm9scyB7XG4gICAgcGFkZGluZzogMTBweCAxMnB4IDEycHg7XG59XG5cbi5jb250cm9scy1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sdW1uIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb250cm9scy1yb3cuc2F0dXJhdGlvbi1odWUge1xuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XG59XG5cbi5jb250cm9scy1yb3cuc2F0dXJhdGlvbi1odWUgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDE3OHB4O1xufVxuXG5zYXR1cmF0aW9uLWNvbXBvbmVudCB7XG4gICAgaGVpZ2h0OiAxNzhweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuNikgMHB4IDBweCAycHg7XG5cbiAgICA6Om5nLWRlZXAgLnBvaW50ZXIge1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjYpIDBweCAwcHggMnB4O1xuICAgIH1cbn1cblxuLmh1ZS1jb2x1bW4ge1xuICAgIHBhZGRpbmctbGVmdDogMTRweDtcbn1cblxuLmNvbnRyb2xzLXJvdy5wcmVzZW50YXRpb24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDZweCA2cHggNnB4IDI2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbmRpY2F0b3ItY29tcG9uZW50IHtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjYpIDBweCAwcHggMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaGV4LWlucHV0LWNvbXBvbmVudCA6Om5nLWRlZXAgaW5wdXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogIzgxN2U4MTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5wZW5jaWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgbGVmdDogNnB4O1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbjogLTdweCAwIDA7XG59XG5cbi5wZW5jaWwgc3ZnIHtcbiAgICBmaWxsOiAjMDAwO1xufVxuXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 9249:
/*!*****************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/github-picker/github-picker.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubPickerComponent": () => (/* binding */ GithubPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/control.class */ 4402);
/* harmony import */ var _helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../helpers/helper.functions */ 3583);
/* harmony import */ var _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parts/color-presets/color-presets.component */ 5004);





const _c0 = [[["", "before", ""]], "*"];
const _c1 = ["[before]", "*"];
class GithubPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(false);
        this.columnsValue = 8;
        this.subscriptions = [];
    }
    get columns() {
        return this.columnsValue;
    }
    set columns(value) {
        this.columnsValue = !isNaN(parseFloat(value)) && !isNaN(Number(value))
            ? Number(value)
            : 'auto';
    }
    get width() {
        return this.columnsValue === 'auto' ? `auto` : `${25 * this.columnsValue + 12}px`;
    }
    get columnsCount() {
        return this.columnsValue === 'auto' ? this.control.presets.length : this.columnsValue;
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        if (!this.control.hasPresets()) {
            /**
             * set color presets
             * defined by github color picker component
             */
            this.control
                .setColorPresets([
                '#b80000', '#db3e00', '#fccb00', '#008b02', '#006b76', '#1273de', '#004dcf', '#5300eb',
                '#eb9694', '#fad0c3', '#fef3bd', '#c1e1c5', '#bedadc', '#c4def6', '#bed3f3', '#d4c4fb'
            ]);
        }
        this.subscriptions.push(this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit((0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(value, this.control.initType));
        }));
    }
    ngOnDestroy() {
        this.cdr.detach();
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    ngOnChanges(changes) {
        if (this.color && this.control && (0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
}
GithubPickerComponent.ɵfac = function GithubPickerComponent_Factory(t) { return new (t || GithubPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
GithubPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GithubPickerComponent, selectors: [["github-picker"]], hostVars: 2, hostBindings: function GithubPickerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx.width);
    } }, inputs: { color: "color", control: "control", columns: "columns" }, outputs: { colorChange: "colorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 3, vars: 3, consts: [["direction", "down", 3, "columns", "color", "colorPresets", "colorChange"]], template: function GithubPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "color-presets-component", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("colorChange", function GithubPickerComponent_Template_color_presets_component_colorChange_1_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx.columnsCount)("color", ctx.control.value)("colorPresets", ctx.control.presets);
    } }, dependencies: [_parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_2__.ColorPresetsComponent], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: block;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;\n  border-radius: 4px;\n  padding: 5px;\n}\n[_nghost-%COMP%]     color-preset, [_nghost-%COMP%]     color-preset-sublist {\n  width: 25px;\n  height: 25px;\n}\n[_nghost-%COMP%]     color-preset:hover:after, [_nghost-%COMP%]     color-preset.selected:after {\n  display: block;\n  content: \"\u00A0\";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  bottom: -1px;\n  right: -1px;\n  z-index: 10;\n  border: 2px solid #fff;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUk7O0VBRUksV0FBQTtFQUNBLFlBQUE7QUFFUjtBQUNJOztFQUVJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7QUFDUiIsImZpbGUiOiJnaXRodWItcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDNweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICA6Om5nLWRlZXAgY29sb3ItcHJlc2V0LFxuICAgIDo6bmctZGVlcCBjb2xvci1wcmVzZXQtc3VibGlzdCB7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIGNvbG9yLXByZXNldDpob3ZlcjphZnRlcixcbiAgICA6Om5nLWRlZXAgY29sb3ItcHJlc2V0LnNlbGVjdGVkOmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbnRlbnQ6ICdcXDBBMCc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICBib3R0b206IC0xcHg7XG4gICAgICAgIHJpZ2h0OiAtMXB4O1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDAgMCA1cHggMnB4O1xuICAgIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6286:
/*!*********************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/ip-picker/ip-picker.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IpPickerComponent": () => (/* binding */ IpPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/control.class */ 4402);
/* harmony import */ var _helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../helpers/helper.functions */ 3583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parts/saturation/saturation.component */ 2945);
/* harmony import */ var _parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parts/indicator/indicator.component */ 5128);
/* harmony import */ var _parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/hue/hue.component */ 114);
/* harmony import */ var _parts_alpha_alpha_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parts/alpha/alpha.component */ 5210);
/* harmony import */ var _parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/inputs/hex-input/hex-input.component */ 3005);
/* harmony import */ var _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/color-presets/color-presets.component */ 5004);











function IpPickerComponent_color_presets_component_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "color-presets-component", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("colorChange", function IpPickerComponent_color_presets_component_10_Template_color_presets_component_colorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.control.value = $event); })("hueChange", function IpPickerComponent_color_presets_component_10_Template_color_presets_component_hueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.control.hue = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("columns", 8)("color", ctx_r0.control.value)("colorPresets", ctx_r0.control.presets)("hue", ctx_r0.control.hue);
} }
class IpPickerComponent {
    constructor() {
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter(false);
        this.subscriptions = [];
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl();
        }
        /**
         * set color presets
         * defined by this chrome color picker component
         */
        if (!this.control.hasPresets()) {
            this.control
                .setColorPresets([
                ['#f44336', '#ffebee', '#ffcdd2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C'],
                ['#E91E63', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f'],
                ['#9C27B0', '#F3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c'],
                ['#673AB7', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92'],
                ['#3F51B5', '#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e'],
                ['#2196F3', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0D47a1'],
                ['#03A9F4', '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b'],
                ['#00BCD4', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064'],
                ['#009688', '#E0F2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40'],
                ['#4CAF50', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20'],
                ['#8BC34A', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e'],
                ['#cddc39', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#c0dc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717'],
                ['#ffeb3b', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17'],
                ['#ffc107', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'],
                ['#ff9800', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100'],
                ['#ff5722', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c'],
                ['#795548', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723'],
                ['#9e9e9e', '#fafafa', '#f5f5f5', '#eee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'],
                ['#607d8b', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#60708b', '#546e7a', '#455a64', '#37474f', '#263238']
            ]);
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        this.subscriptions.push(this.control.valueChanges.subscribe((value) => {
            this.colorChange.emit((0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(value, this.control.initType));
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    ngOnChanges(changes) {
        if (this.color && this.control && (0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
}
IpPickerComponent.ɵfac = function IpPickerComponent_Factory(t) { return new (t || IpPickerComponent)(); };
IpPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: IpPickerComponent, selectors: [["ip-picker"]], inputs: { color: "color", control: "control" }, outputs: { colorChange: "colorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 11, consts: [[1, "controls"], [1, "controls-row", "presentation"], ["colorType", "hex", 3, "color"], [3, "color", "hue", "colorChange", "hueChange"], [1, "controls-row", "saturation-hue-alpha"], [1, "column"], [3, "hue", "color", "colorChange"], [3, "color", "colorChange"], [1, "column", "hue-column"], ["vertical", "", 3, "hue", "color", "hueChange", "colorChange"], [3, "columns", "color", "colorPresets", "hue", "colorChange", "hueChange", 4, "ngIf"], [3, "columns", "color", "colorPresets", "hue", "colorChange", "hueChange"]], template: function IpPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "indicator-component", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "hex-input-component", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("colorChange", function IpPickerComponent_Template_hex_input_component_colorChange_3_listener($event) { return ctx.control.value = $event; })("hueChange", function IpPickerComponent_Template_hex_input_component_hueChange_3_listener($event) { return ctx.control.hue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "saturation-component", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("colorChange", function IpPickerComponent_Template_saturation_component_colorChange_6_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "alpha-component", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("colorChange", function IpPickerComponent_Template_alpha_component_colorChange_7_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8)(9, "hue-component", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("hueChange", function IpPickerComponent_Template_hue_component_hueChange_9_listener($event) { return ctx.control.hue = $event; })("colorChange", function IpPickerComponent_Template_hue_component_colorChange_9_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, IpPickerComponent_color_presets_component_10_Template, 1, 4, "color-presets-component", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx.control.value)("hue", ctx.control.hue);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hue", ctx.control.hue)("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hue", ctx.control.hue)("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 9, ctx.control.presetsVisibilityChanges));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_2__.SaturationComponent, _parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_3__.IndicatorComponent, _parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_4__.HueComponent, _parts_alpha_alpha_component__WEBPACK_IMPORTED_MODULE_5__.AlphaComponent, _parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_6__.HexComponent, _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_7__.ColorPresetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: block;\n  width: 240px;\n  border-radius: 3px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 0 4px;\n}\n.controls[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n.controls-row[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n.column[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.controls-row.saturation-hue-alpha[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child {\n  width: 178px;\n}\nsaturation-component[_ngcontent-%COMP%] {\n  height: 178px;\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 0px 2px;\n  margin-bottom: 16px;\n}\n.controls-row.presentation[_ngcontent-%COMP%] {\n  border: 1px solid #e4e4e6;\n  border-radius: 3px;\n  padding: 6px 6px 6px 36px;\n  position: relative;\n  margin: 0 0 6px;\n}\n.controls-row.saturation-hue-alpha[_ngcontent-%COMP%] {\n  padding: 0 0 6px;\n}\nindicator-component[_ngcontent-%COMP%] {\n  height: 22px;\n  width: 22px;\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 0px 2px;\n  position: absolute;\n  left: 4px;\n  top: 50%;\n  border-radius: 50%;\n  margin-top: -11px;\n}\n[_nghost-%COMP%]   indicator-component[_ngcontent-%COMP%]     svg {\n  vertical-align: 15%;\n}\nhex-input-component[_ngcontent-%COMP%]     input {\n  border: 0;\n  color: #817e81;\n  margin: 0;\n  text-align: left;\n  height: 18px;\n}\n.hue-column[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0 10px 0 16px;\n}\n[_nghost-%COMP%]   hue-component[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 178px;\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 0px 2px;\n}\n[_nghost-%COMP%]   hue-component[vertical][_ngcontent-%COMP%]     .pointer {\n  width: auto;\n  height: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  background: transparent;\n}\n[_nghost-%COMP%]   alpha-component[_ngcontent-%COMP%]     .pointer {\n  width: 0;\n  height: auto;\n  top: 0;\n  bottom: 0;\n  margin: 0;\n  background: transparent;\n}\n[_nghost-%COMP%]   hue-component[vertical][_ngcontent-%COMP%]     .pointer:after, [_nghost-%COMP%]   hue-component[vertical][_ngcontent-%COMP%]     .pointer:before {\n  top: -5.5px;\n  display: block;\n  content: \"\u00A0\";\n  position: absolute;\n  height: 0;\n  width: 0;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n[_nghost-%COMP%]   hue-component[vertical][_ngcontent-%COMP%]     .pointer:after {\n  border-left: 8px solid #666;\n  left: -8px;\n}\n[_nghost-%COMP%]   hue-component[vertical][_ngcontent-%COMP%]     .pointer:before {\n  border-right: 8px solid #666;\n  right: -8px;\n}\n[_nghost-%COMP%]   alpha-component[_ngcontent-%COMP%] {\n  height: 24px;\n}\n[_nghost-%COMP%]   alpha-component[_ngcontent-%COMP%]     .pointer:after, [_nghost-%COMP%]   alpha-component[_ngcontent-%COMP%]     .pointer:before {\n  left: -5.5px;\n  display: block;\n  content: \"\u00A0\";\n  position: absolute;\n  height: 0;\n  width: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[_nghost-%COMP%]   alpha-component[_ngcontent-%COMP%]     .pointer:after {\n  border-top: 8px solid #666;\n  top: -8px;\n}\n[_nghost-%COMP%]   alpha-component[_ngcontent-%COMP%]     .pointer:before {\n  border-bottom: 8px solid #666;\n  bottom: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlwLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3RUFBQTtBQUVKO0FBQ0E7RUFDSSxZQUFBO0FBRUo7QUFDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBRUo7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUNBO0VBQ0ksWUFBQTtBQUVKO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFSjtBQUNBO0VBQ0ksZ0JBQUE7QUFFSjtBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFDQTtFQUNJLG1CQUFBO0FBRUo7QUFDQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FBRUo7QUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7QUFFSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQUVKO0FBQ0E7RUFDSSxRQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBRUo7QUFDQTs7RUFFSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQUVKO0FBQ0E7RUFDSSwyQkFBQTtFQUNBLFVBQUE7QUFFSjtBQUNBO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0FBRUo7QUFDQTtFQUNJLFlBQUE7QUFFSjtBQUNBOztFQUVJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0FBRUo7QUFDQTtFQUNJLDBCQUFBO0VBQ0EsU0FBQTtBQUVKO0FBQ0E7RUFDSSw2QkFBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJpcC1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMHB4IDJweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAwIDRweDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgICBwYWRkaW5nOiA2cHg7XG59XG5cbi5jb250cm9scy1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sdW1uIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb250cm9scy1yb3cuc2F0dXJhdGlvbi1odWUtYWxwaGEgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDE3OHB4O1xufVxuXG5zYXR1cmF0aW9uLWNvbXBvbmVudCB7XG4gICAgaGVpZ2h0OiAxNzhweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuNikgMHB4IDBweCAycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmNvbnRyb2xzLXJvdy5wcmVzZW50YXRpb24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDZweCA2cHggNnB4IDM2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAwIDZweDtcbn1cblxuLmNvbnRyb2xzLXJvdy5zYXR1cmF0aW9uLWh1ZS1hbHBoYSB7XG4gICAgcGFkZGluZzogMCAwIDZweDtcbn1cblxuaW5kaWNhdG9yLWNvbXBvbmVudCB7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IHJnYmEoMCwgMCwgMCwgMC42KSAwcHggMHB4IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTFweDtcbn1cblxuOmhvc3QgaW5kaWNhdG9yLWNvbXBvbmVudCA6Om5nLWRlZXAgc3ZnIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogMTUlO1xufVxuXG5oZXgtaW5wdXQtY29tcG9uZW50IDo6bmctZGVlcCBpbnB1dCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiAjODE3ZTgxO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGhlaWdodDogMThweDtcbn1cblxuLmh1ZS1jb2x1bW4ge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTZweDtcbn1cblxuOmhvc3QgaHVlLWNvbXBvbmVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNzhweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuNikgMHB4IDBweCAycHg7XG59XG5cbjpob3N0IGh1ZS1jb21wb25lbnRbdmVydGljYWxdIDo6bmctZGVlcCAucG9pbnRlciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG46aG9zdCBhbHBoYS1jb21wb25lbnQgOjpuZy1kZWVwIC5wb2ludGVyIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbjpob3N0IGh1ZS1jb21wb25lbnRbdmVydGljYWxdIDo6bmctZGVlcCAucG9pbnRlcjphZnRlcixcbjpob3N0IGh1ZS1jb21wb25lbnRbdmVydGljYWxdIDo6bmctZGVlcCAucG9pbnRlcjpiZWZvcmUge1xuICAgIHRvcDogLTUuNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICdcXDBBMCc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG46aG9zdCBodWUtY29tcG9uZW50W3ZlcnRpY2FsXSA6Om5nLWRlZXAgLnBvaW50ZXI6YWZ0ZXIge1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzY2NjtcbiAgICBsZWZ0OiAtOHB4O1xufVxuXG46aG9zdCBodWUtY29tcG9uZW50W3ZlcnRpY2FsXSA6Om5nLWRlZXAgLnBvaW50ZXI6YmVmb3JlIHtcbiAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAjNjY2O1xuICAgIHJpZ2h0OiAtOHB4O1xufVxuXG46aG9zdCBhbHBoYS1jb21wb25lbnQge1xuICAgIGhlaWdodDogMjRweDtcbn1cblxuOmhvc3QgYWxwaGEtY29tcG9uZW50IDo6bmctZGVlcCAucG9pbnRlcjphZnRlcixcbjpob3N0IGFscGhhLWNvbXBvbmVudCA6Om5nLWRlZXAgLnBvaW50ZXI6YmVmb3JlIHtcbiAgICBsZWZ0OiAtNS41cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogJ1xcMEEwJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbjpob3N0IGFscGhhLWNvbXBvbmVudCA6Om5nLWRlZXAgLnBvaW50ZXI6YWZ0ZXIge1xuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCAjNjY2O1xuICAgIHRvcDogLThweDtcbn1cblxuOmhvc3QgYWxwaGEtY29tcG9uZW50IDo6bmctZGVlcCAucG9pbnRlcjpiZWZvcmUge1xuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNjY2O1xuICAgIGJvdHRvbTogLThweDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 5210:
/*!*******************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/alpha/alpha.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphaComponent": () => (/* binding */ AlphaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../helpers/color.class */ 9426);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../base.component */ 1226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = ["pointer"];
const _c1 = function (a0) { return { "background": a0 }; };
class AlphaComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(renderer) {
        super();
        this.renderer = renderer;
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(false);
        this.isVertical = false;
    }
    set vertical(value) {
        this.isVertical = true;
    }
    /**
     * color can be changed through inputs
     * and then we need to move pointer
     */
    ngOnChanges(changes) {
        if (changes.color && changes.color.previousValue !== changes.color.currentValue) {
            const hsva = this.color.getHsva();
            this.changePointerPosition(hsva.alpha);
        }
    }
    movePointer({ x, y, height, width }) {
        const alpha = this.isVertical ? y / height : x / width;
        this.changePointerPosition(alpha);
        const hsva = this.color.getHsva();
        const newColor = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsva(hsva.hue, hsva.saturation, hsva.value, alpha);
        this.colorChange.emit(newColor);
    }
    /**
     * hue value is in range from 0 to 360°
     */
    changePointerPosition(alpha) {
        const x = alpha * 100;
        const orientation = this.isVertical ? 'top' : 'left';
        this.renderer.setStyle(this.pointer.nativeElement, orientation, `${x}%`);
    }
    get gradient() {
        const rgba = this.color.getRgba();
        const orientation = this.isVertical ? 'bottom' : 'right';
        return `linear-gradient(to ${orientation}, rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, 0) 0%, rgb(${rgba.red}, ${rgba.green}, ${rgba.blue}) 100%)`;
    }
}
AlphaComponent.ɵfac = function AlphaComponent_Factory(t) { return new (t || AlphaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
AlphaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlphaComponent, selectors: [["alpha-component"]], viewQuery: function AlphaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.pointer = _t.first);
    } }, inputs: { color: "color", vertical: "vertical" }, outputs: { colorChange: "colorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[1, "pointer"], ["pointer", ""], [1, "gradient-color", 3, "ngStyle"]], template: function AlphaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0, 1)(2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c1, ctx.gradient));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  display: block;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==\");\n  background-position: left center;\n  height: 12px;\n  border-radius: 2px;\n  position: relative;\n}\n\n[vertical][_nghost-%COMP%] {\n  width: 12px;\n  height: 100px;\n  background-position: center 0;\n}\n\n.gradient-color[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 100%;\n  z-index: 1;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 14px;\n  width: 14px;\n  top: -1px;\n  left: 0;\n  position: absolute;\n  border-radius: 50%;\n  cursor: pointer;\n  margin: 0 0 0 -7px;\n  z-index: 2;\n}\n\n[vertical][_nghost-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  left: -1px;\n  margin: -7px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFscGhhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLCtMQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImFscGhhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQU1VbEVRVlE0VDJOa1lHQVFZY0FQM3VDVFpodzFnR0dZaEFHQlpJQS9uWURDZ0JEQW05QkdEV0FBSnlSQ2dMYUJDQUFnWHdpeHpBUzBwZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG46aG9zdChbdmVydGljYWxdKSB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMDtcbn1cblxuLmdyYWRpZW50LWNvbG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5wb2ludGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogMTRweDtcbiAgICB3aWR0aDogMTRweDtcbiAgICB0b3A6IC0xcHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDAgMCAwIC03cHg7XG4gICAgei1pbmRleDogMjtcbn1cblxuOmhvc3QoW3ZlcnRpY2FsXSkgLnBvaW50ZXIge1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgbWFyZ2luOiAtN3B4IDAgMCAwO1xufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 1226:
/*!************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/base.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5921);





class BaseComponent {
    constructor() {
        this.subscriptions = [];
        this.window = { pageXOffset: 0, pageYOffset: 0 };
        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT);
        this.elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        this.window = document.defaultView;
        this.requestAnimationFrame = this.getRequestAnimationFrame();
        this.addEventListeners();
    }
    addEventListeners() {
        this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.elementRef.nativeElement, 'touchstart', { passive: true }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.elementRef.nativeElement, 'mousedown'))
            .subscribe((e) => this.onEventChange(e)));
    }
    onEventChange(event) {
        this.calculate(event);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.document, 'mouseup'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.document, 'touchend'))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.mouseup))
            .subscribe(() => this.mouseup.next());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.document, 'mousemove'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.document, 'touchmove', { passive: true }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.mouseup))
            .subscribe((e) => this.calculate(e));
    }
    calculateCoordinates(event) {
        const { width: elWidth, height: elHeight, top: elTop, left: elLeft } = this.elementRef.nativeElement.getBoundingClientRect();
        const pageX = typeof event.pageX === 'number'
            ? event.pageX : event.touches[0].pageX;
        const pageY = typeof event.pageY === 'number'
            ? event.pageY : event.touches[0].pageY;
        const x = Math.max(0, Math.min(pageX - (elLeft + this.window.pageXOffset), elWidth));
        const y = Math.max(0, Math.min(pageY - (elTop + this.window.pageYOffset), elHeight));
        this.movePointer({ x, y, height: elHeight, width: elWidth });
    }
    calculate(event) {
        if (!event.type.includes('touch')) {
            event.preventDefault();
        }
        if (!this.requestAnimationFrame) {
            return this.calculateCoordinates(event);
        }
        this.requestAnimationFrame(() => this.calculateCoordinates(event));
    }
    getRequestAnimationFrame() {
        return this.window.requestAnimationFrame ||
            this.window.webkitRequestAnimationFrame ||
            this.window.mozRequestAnimationFrame ||
            this.window.oRequestAnimationFrame ||
            this.window.msRequestAnimationFrame;
    }
    ngOnDestroy() {
        this.mouseup.next();
        this.mouseup.complete();
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BaseComponent });


/***/ }),

/***/ 6040:
/*!*************************************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/color-preset-sublist/color-preset-sublist.animation.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListAnimation": () => (/* binding */ ListAnimation),
/* harmony export */   "OpacityAnimation": () => (/* binding */ OpacityAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const OpacityAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('opacityAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.08s ease-in')
    ])
]);
const ListAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('listAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => up', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, height: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(-10, [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.08s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, height: '*' }))
            ])
        ], { optional: true })
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => right', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, height: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(-10, [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.08s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, height: '*' }))
            ])
        ], { optional: true })
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => down', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, height: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(10, [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.08s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, height: '*' }))
            ])
        ], { optional: true })
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => left', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, height: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(10, [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.08s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, height: '*' }))
            ])
        ], { optional: true })
    ])
]);


/***/ }),

/***/ 1849:
/*!*************************************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/color-preset-sublist/color-preset-sublist.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPresetSublist": () => (/* binding */ ColorPresetSublist)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _color_preset_sublist_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-preset-sublist.animation */ 6040);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var _color_preset_color_preset_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color-preset/color-preset.component */ 923);
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/reverse.pipe */ 2317);








function ColorPresetSublist_div_3_color_preset_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "color-preset", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ColorPresetSublist_div_3_color_preset_1_Template_color_preset_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onSelectionChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preset_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", preset_r2)("activeColor", ctx_r1.activeColor);
} }
function ColorPresetSublist_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ColorPresetSublist_div_3_color_preset_1_Template, 1, 2, "color-preset", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "reverse");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@opacityAnimation", ctx_r0.showChildren)("@listAnimation", ctx_r0.direction);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 3, ctx_r0.list, ctx_r0.direction == "up" || ctx_r0.direction == "right"));
} }
class ColorPresetSublist {
    constructor(document, cdr) {
        this.document = document;
        this.cdr = cdr;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(false);
        this.direction = 'up';
        this.showChildren = false;
        this.subscriptions = [];
    }
    ngOnDestroy() {
        this.removeListeners();
        this.cdr.detach();
    }
    removeListeners() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    /**
     * emit color change
     */
    onSelectionChange(color) {
        this.selectionChange.next(color);
    }
    onLongPress() {
        this.showChildren = true;
        this.listenDocumentEvents();
    }
    listenDocumentEvents() {
        this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.document, 'mousedown'), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.document, 'touchstart', { passive: true }))
            .subscribe(() => this.closeList()));
    }
    closeList() {
        if (this.showChildren) {
            this.showChildren = false;
            this.cdr.markForCheck();
            this.removeListeners();
        }
    }
    get className() {
        return `direction-${this.direction}`;
    }
}
ColorPresetSublist.ɵfac = function ColorPresetSublist_Factory(t) { return new (t || ColorPresetSublist)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
ColorPresetSublist.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ColorPresetSublist, selectors: [["color-preset-sublist"]], hostVars: 1, hostBindings: function ColorPresetSublist_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("className", ctx.className);
    } }, inputs: { list: "list", direction: "direction", activeColor: "activeColor" }, outputs: { selectionChange: "selectionChange" }, decls: 4, vars: 8, consts: [[3, "show-depth-title", "color", "activeColor", "longPress", "selectionChange"], [1, "reflection"], ["class", "sublist", 4, "ngIf"], [1, "sublist"], [3, "color", "activeColor", "selectionChange", 4, "ngFor", "ngForOf"], [3, "color", "activeColor", "selectionChange"]], template: function ColorPresetSublist_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "color-preset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("longPress", function ColorPresetSublist_Template_color_preset_longPress_0_listener() { return ctx.onLongPress(); })("selectionChange", function ColorPresetSublist_Template_color_preset_selectionChange_0_listener($event) { return ctx.onSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ColorPresetSublist_div_3_Template, 3, 6, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("show-depth-title", ctx.list.length > 1)("color", ctx.list[0])("activeColor", ctx.activeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx.list[0].toRgbaString());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx.list[0].toRgbaString());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showChildren);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _color_preset_color_preset_component__WEBPACK_IMPORTED_MODULE_1__.ColorPresetComponent, _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_2__.ReversePipe], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\ncolor-preset[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n}\n\n.reflection[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  right: -2px;\n  top: -2px;\n  opacity: 0.5;\n}\n\n.reflection[_ngcontent-%COMP%]    + .reflection[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  right: -4px;\n  top: -4px;\n  z-index: 1;\n}\n\ncolor-preset[_ngcontent-%COMP%]:hover    + .reflection[_ngcontent-%COMP%], color-preset[_ngcontent-%COMP%]:hover    + .reflection[_ngcontent-%COMP%]    + .reflection[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.sublist[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8px;\n  left: -8px;\n  right: -8px;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.3) 0 0 2px, rgba(0, 0, 0, 0.3) 0 2px 4px;\n  padding: 8px 5px;\n  text-align: center;\n  z-index: 1000;\n}\n\n.sublist[_ngcontent-%COMP%]   color-preset[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n}\n\n.sublist[_ngcontent-%COMP%]   color-preset[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n\n.direction-down[_nghost-%COMP%]   .sublist[_ngcontent-%COMP%] {\n  bottom: auto;\n  top: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLXByZXNldC1zdWJsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTs7RUFFSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvRUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtBQUNKIiwiZmlsZSI6ImNvbG9yLXByZXNldC1zdWJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmNvbG9yLXByZXNldCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDM7XG59XG5cbi5yZWZsZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICByaWdodDogLTJweDtcbiAgICB0b3A6IC0ycHg7XG4gICAgb3BhY2l0eTogLjU7XG59XG5cbi5yZWZsZWN0aW9uICsgLnJlZmxlY3Rpb24ge1xuICAgIG9wYWNpdHk6IC4yO1xuICAgIHJpZ2h0OiAtNHB4O1xuICAgIHRvcDogLTRweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG5jb2xvci1wcmVzZXQ6aG92ZXIgKyAucmVmbGVjdGlvbixcbmNvbG9yLXByZXNldDpob3ZlciArIC5yZWZsZWN0aW9uICsgLnJlZmxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3VibGlzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLThweDtcbiAgICBsZWZ0OiAtOHB4O1xuICAgIHJpZ2h0OiAtOHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjMpIDAgMCAycHgsIHJnYmEoMCwwLDAsLjMpIDAgMnB4IDRweDtcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4uc3VibGlzdCBjb2xvci1wcmVzZXQge1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbn1cblxuLnN1Ymxpc3QgY29sb3ItcHJlc2V0OmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbjpob3N0KC5kaXJlY3Rpb24tZG93bikgLnN1Ymxpc3Qge1xuICAgIGJvdHRvbTogYXV0bztcbiAgICB0b3A6IC04cHg7XG59Il19 */"], data: { animation: [_color_preset_sublist_animation__WEBPACK_IMPORTED_MODULE_0__.OpacityAnimation, _color_preset_sublist_animation__WEBPACK_IMPORTED_MODULE_0__.ListAnimation] }, changeDetection: 0 });


/***/ }),

/***/ 923:
/*!*********************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/color-preset/color-preset.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPresetComponent": () => (/* binding */ ColorPresetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _services_color_picker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/color-picker.service */ 4191);





class ColorPresetComponent {
    constructor(pickerConfig, elementRef) {
        this.pickerConfig = pickerConfig;
        this.elementRef = elementRef;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(false);
        this.longPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(false);
        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.showDepthText = false;
        this.subscriptions = [];
        this.addEventListeners();
    }
    set depth(showDepthText) {
        this.showDepthText = !!showDepthText;
    }
    ngOnDestroy() {
        this.mouseup.next();
        this.mouseup.complete();
        this.removeEventListeners();
    }
    get bgColor() {
        return this.color.toRgbaString();
    }
    get title() {
        const color = this.color ? this.color.toHexString() : '';
        if (this.showDepthText) {
            return this.pickerConfig.presetsTitle.replace(/\{\s*(.+?)\s*\}/g, (match, firstMatch) => color);
        }
        return color;
    }
    get className() {
        return this.activeColor ? this.color.toRgbaString() === this.activeColor.toRgbaString() : false;
    }
    addEventListeners() {
        this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.elementRef.nativeElement, 'mouseup'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.elementRef.nativeElement, 'touchend'))
            .subscribe(() => this.onTouchEnd()));
        this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.elementRef.nativeElement, 'mousedown'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.elementRef.nativeElement, 'touchstart', { passive: true }))
            .subscribe((e) => this.onTouch(e)));
    }
    removeEventListeners() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    onTouch(event) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(event)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((e) => e.timeStamp || new Date().getTime()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delay)(350), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.mouseup))
            .subscribe(() => this.longPress.next(true));
        this.selectionChange.emit(this.color);
    }
    onTouchEnd() {
        this.mouseup.next();
    }
}
ColorPresetComponent.ɵfac = function ColorPresetComponent_Factory(t) { return new (t || ColorPresetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_color_picker_service__WEBPACK_IMPORTED_MODULE_0__.ColorPickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
ColorPresetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColorPresetComponent, selectors: [["color-preset"]], hostVars: 5, hostBindings: function ColorPresetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.bgColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.className);
    } }, inputs: { activeColor: "activeColor", color: "color", depth: ["show-depth-title", "depth"] }, outputs: { selectionChange: "selectionChange", longPress: "longPress" }, decls: 0, vars: 0, template: function ColorPresetComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLXByZXNldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6ImNvbG9yLXByZXNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 5004:
/*!***********************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/color-presets/color-presets.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPresetsComponent": () => (/* binding */ ColorPresetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../helpers/color.class */ 9426);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _color_preset_color_preset_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color-preset/color-preset.component */ 923);
/* harmony import */ var _color_preset_sublist_color_preset_sublist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-preset-sublist/color-preset-sublist.component */ 1849);
/* harmony import */ var _pipes_chunks_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/chunks.pipe */ 3973);







const _c0 = function (a0, a1) { return { "first": a0, "last": a1 }; };
function ColorPresetsComponent_div_0_ng_template_1_color_preset_sublist_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "color-preset-sublist", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ColorPresetsComponent_div_0_ng_template_1_color_preset_sublist_0_Template_color_preset_sublist_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.onSelectionChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const preset_r5 = ctx_r13.$implicit;
    const first_r6 = ctx_r13.first;
    const last_r7 = ctx_r13.last;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("list", preset_r5)("direction", ctx_r8.direction)("activeColor", ctx_r8.color)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c0, first_r6, last_r7));
} }
function ColorPresetsComponent_div_0_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "color-preset", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function ColorPresetsComponent_div_0_ng_template_1_ng_template_1_Template_color_preset_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.onSelectionChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const first_r6 = ctx_r16.first;
    const last_r7 = ctx_r16.last;
    const preset_r5 = ctx_r16.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c0, first_r6, last_r7))("color", preset_r5)("activeColor", ctx_r10.color);
} }
function ColorPresetsComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ColorPresetsComponent_div_0_ng_template_1_color_preset_sublist_0_Template, 1, 7, "color-preset-sublist", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ColorPresetsComponent_div_0_ng_template_1_ng_template_1_Template, 1, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const preset_r5 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.isList(preset_r5))("ngIfElse", _r9);
} }
function ColorPresetsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ColorPresetsComponent_div_0_ng_template_1_Template, 3, 2, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chunk_r1 = ctx.$implicit;
    const first_r2 = ctx.first;
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c0, first_r2, last_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", chunk_r1);
} }
class ColorPresetsComponent {
    constructor() {
        this.columns = 8;
        this.hueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(false);
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(false);
        this.direction = 'up';
    }
    onSelectionChange(color) {
        const selectedRgbaColor = color.getRgba();
        const selectedHsvaColor = color.getHsva();
        const newColor = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color()
            .setRgba(selectedRgbaColor.red, selectedRgbaColor.green, selectedRgbaColor.blue, selectedRgbaColor.alpha);
        const hueColor = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsva(selectedHsvaColor.hue);
        this.hueChange.emit(hueColor);
        this.colorChange.emit(newColor);
    }
    isList(colorPreset) {
        return Array.isArray(colorPreset);
    }
}
ColorPresetsComponent.ɵfac = function ColorPresetsComponent_Factory(t) { return new (t || ColorPresetsComponent)(); };
ColorPresetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ColorPresetsComponent, selectors: [["color-presets-component"]], inputs: { columns: "columns", colorPresets: "colorPresets", hue: "hue", color: "color", direction: "direction" }, outputs: { hueChange: "hueChange", colorChange: "colorChange" }, decls: 2, vars: 4, consts: [["class", "presets-row", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "presets-row", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], [3, "list", "direction", "activeColor", "ngClass", "selectionChange", 4, "ngIf", "ngIfElse"], ["colorPreset", ""], [3, "list", "direction", "activeColor", "ngClass", "selectionChange"], [3, "ngClass", "color", "activeColor", "selectionChange"]], template: function ColorPresetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ColorPresetsComponent_div_0_Template, 2, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "chunks");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, ctx.colorPresets, ctx.columns));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _color_preset_color_preset_component__WEBPACK_IMPORTED_MODULE_1__.ColorPresetComponent, _color_preset_sublist_color_preset_sublist_component__WEBPACK_IMPORTED_MODULE_2__.ColorPresetSublist, _pipes_chunks_pipe__WEBPACK_IMPORTED_MODULE_3__.ChunksPipe], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  display: block;\n  font-size: 0;\n}\n[_nghost-%COMP%]   .presets-row[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n}\n[_nghost-%COMP%]   .presets-row[_ngcontent-%COMP%]:first-child {\n  padding: 0;\n}\ncolor-preset-sublist[_ngcontent-%COMP%]:first-child, color-preset[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLXByZXNldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUFDUjtBQUVJO0VBQ0ksVUFBQTtBQUFSO0FBSUE7O0VBRUksU0FBQTtBQURKIiwiZmlsZSI6ImNvbG9yLXByZXNldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwO1xuXG4gICAgLnByZXNldHMtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAucHJlc2V0cy1yb3c6Zmlyc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuY29sb3ItcHJlc2V0LXN1Ymxpc3Q6Zmlyc3QtY2hpbGQsXG5jb2xvci1wcmVzZXQ6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 114:
/*!***************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/hue/hue.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HueComponent": () => (/* binding */ HueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../helpers/color.class */ 9426);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../base.component */ 1226);




const _c0 = ["pointer"];
class HueComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(renderer) {
        super();
        this.renderer = renderer;
        this.hueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(false);
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(false);
        this.isVertical = false;
    }
    set vertical(value) {
        this.isVertical = true;
    }
    /**
     * color can be changed through inputs
     * and then we need to move pointer
     */
    ngOnChanges(changes) {
        if (changes.hue && changes.hue.previousValue !== changes.hue.currentValue) {
            const hsva = this.hue.getHsva();
            this.changePointerPosition(hsva.hue);
        }
    }
    movePointer({ x, y, height, width }) {
        const hue = this.isVertical ? (y / height) * 360 : (x / width) * 360;
        this.changePointerPosition(hue);
        const color = this.color.getHsva();
        const newColor = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsva(hue, color.saturation, color.value, color.alpha);
        const newHueColor = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsva(hue, 100, 100, color.alpha);
        this.hueChange.emit(newHueColor);
        this.colorChange.emit(newColor);
    }
    /**
     * hue value is in range from 0 to 360°
     */
    changePointerPosition(hue) {
        const x = hue / 360 * 100;
        const orientation = this.isVertical ? 'top' : 'left';
        this.renderer.setStyle(this.pointer.nativeElement, orientation, `${x}%`);
    }
}
HueComponent.ɵfac = function HueComponent_Factory(t) { return new (t || HueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
HueComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HueComponent, selectors: [["hue-component"]], viewQuery: function HueComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.pointer = _t.first);
    } }, inputs: { hue: "hue", color: "color", vertical: "vertical" }, outputs: { hueChange: "hueChange", colorChange: "colorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "pointer"], ["pointer", ""]], template: function HueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\");\n  background-size: 100% 100%;\n  border-radius: 2px;\n  display: block;\n  height: 12px;\n  position: relative;\n  -ms-touch-action: none;\n      touch-action: none;\n}\n\n[vertical][_nghost-%COMP%] {\n  background-image: url(\"data:image/png;base64,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\");\n  width: 12px;\n  height: 100px;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 14px;\n  width: 14px;\n  top: -1px;\n  left: 0;\n  position: absolute;\n  border-radius: 50%;\n  cursor: pointer;\n  margin: 0 0 0 -7px;\n}\n\n[vertical][_nghost-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  left: -1px;\n  margin: -7px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1VQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtNQUFBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrMkhBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiaHVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFKWUFBQUFRQ0FZQUFBRDA2SVluQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRBSVdEd2tVRldiQ0NBQUFBRnhKUkVGVWFON3Qwa0VLZzBBUUFNRTJ4ODMvbjJxdTVxQ2dEMWlEaENvWWRwbmJRQzliYlkxcVZPL2p2YzZrM2FkOTFzNy83RjEvY3NnUHJ1anVRMTdCRFlTRnNCQVd3Z0poSVN5RUJjSkNXQWdMaElXd0VCWUlpMmY3QXIvMVRDZ0ZIMlg5QUFBQUFFbEZUa1N1UW1DQycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuOmhvc3QoW3ZlcnRpY2FsXSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUNXQ0FZQUFBRFhHZ2lrQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUtUMmxEUTFCUWFHOTBiM05vYjNBZ1NVTkRJSEJ5YjJacGJHVUFBSGphblZOblZGUHBGajMzM3ZSQ1M0aUFsRXR2VWhVSUlGSkNpNEFVa1NZcUlRa1FTb2dob2RrVlVjRVJSVVVFRzhpZ2lBT09qb0NNRlZFc0RJb0syQWZrSWFLT2c2T0lpc3I3NFh1amE5YTg5K2JOL3JYWFB1ZXM4NTJ6endmQUNBeVdTRE5STllBTXFVSWVFZUNEeDhURzRlUXVRSUVLSkhBQUVBaXpaQ0Z6L1NNQkFQaCtQRHdySXNBSHZnQUJlTk1MQ0FEQVRadkFNQnlIL3cvcVFwbGNBWUNFQWNCMGtUaExDSUFVQUVCNmprS21BRUJHQVlDZG1DWlRBS0FFQUdETFkyTGpBRkF0QUdBbmYrYlRBSUNkK0psN0FRQmJsQ0VWQWFDUkFDQVRaWWhFQUdnN0FLelBWb3BGQUZnd0FCUm1TOFE1QU5ndEFEQkpWMlpJQUxDM0FNRE9FQXV5QUFnTUFEQlJpSVVwQUFSN0FHRElJeU40QUlTWkFCUkc4bGM4OFN1dUVPY3FBQUI0bWJJOHVTUTVSWUZiQ0MxeEIxZFhMaDRvemtrWEt4UTJZUUpobWtBdXdubVpHVEtCTkEvZzg4d0FBS0NSRlJIZ2cvUDllTTRPcnM3T05vNjJEbDh0NnI4Ry95SmlZdVArNWMrcmNFQUFBT0YwZnRIK0xDK3pHb0E3Qm9CdC9xSWw3Z1JvWGd1Z2RmZUxacklQUUxVQW9PbmFWL053K0g0OFBFV2hrTG5aMmVYazVOaEt4RUpiWWNwWGZmNW53bC9BVi8xcytYNDgvUGYxNEw3aUpJRXlYWUZIQlBqZ3dzejBUS1VjejVJSmhHTGM1bzlIL0xjTC8vd2QweUxFU1dLNVdDb1U0MUVTY1k1RW1venpNcVVpaVVLU0tjVWwwdjlrNHQ4cyt3TSszelVBc0dvK0FYdVJMYWhkWXdQMlN5Y1FXSFRBNHZjQUFQSzdiOEhVS0FnRGdHaUQ0YzkzLys4Ly9VZWdKUUNBWmttU2NRQUFYa1FrTGxUS3N6L0hDQUFBUktDQktyQkJHL1RCR0N6QUJoekJCZHpCQy94Z05vUkNKTVRDUWhCQ0NtU0FISEpnS2F5Q1FpaUd6YkFkS21BdjFFQWROTUJSYUlhVGNBNHV3bFc0RGoxd0QvcGhDSjdCS0x5QkNRUkJ5QWdUWVNIYWlBRmlpbGdqamdnWG1ZWDRJY0ZJQkJLTEpDREppQlJSSWt1Uk5VZ3hVb3BVSUZWSUhmSTljZ0k1aDF4R3VwRTd5QUF5Z3Z5R3ZFY3hsSUd5VVQzVURMVkR1YWczR29SR29ndlFaSFF4bW84V29KdlFjclFhUFl3Mm9lZlFxMmdQMm84K1E4Y3d3T2dZQnpQRWJEQXV4c05Dc1Rnc0NaTmp5N0VpckF5cnhocXdWcXdEdTRuMVk4K3hkd1FTZ1VYQUNUWUVkMElnWVI1QlNGaE1XRTdZU0tnZ0hDUTBFZG9KTndrRGhGSENKeUtUcUV1MEpyb1IrY1FZWWpJeGgxaElMQ1BXRW84VEx4QjdpRVBFTnlRU2lVTXlKN21RQWtteHBGVFNFdEpHMG01U0kra3NxWnMwU0Jvams4bmFaR3V5QnptVUxDQXJ5SVhrbmVURDVEUGtHK1FoOGxzS25XSkFjYVQ0VStJb1VzcHFTaG5sRU9VMDVRWmxtREpCVmFPYVV0Mm9vVlFSTlk5YVFxMmh0bEt2VVllb0V6UjFtam5OZ3haSlM2V3RvcFhUR21nWGFQZHByK2gwdWhIZGxSNU9sOUJYMHN2cFIraVg2QVAwZHd3TmhoV0R4NGhuS0JtYkdBY1laeGwzR0srWVRLWVowNHNaeDFRd056SHJtT2VaRDVsdlZWZ3F0aXA4RlpIS0NwVktsU2FWR3lvdlZLbXFwcXJlcWd0VjgxWExWSStwWGxOOXJrWlZNMVBqcVFuVWxxdFZxcDFRNjFNYlUyZXBPNmlIcW1lb2IxUS9wSDVaL1lrR1djTk13MDlEcEZHZ3NWL2p2TVlnQzJNWnMzZ3NJV3NOcTRaMWdUWEVKckhOMlh4MktydVkvUjI3aXoycXFhRTVRek5LTTFlelV2T1VaajhINDVoeCtKeDBUZ25uS0tlWDgzNkszaFR2S2VJcEc2WTBUTGt4WlZ4cnFwYVhsbGlyU0t0UnEwZnJ2VGF1N2FlZHByMUZ1MW43Z1E1Qngwb25YQ2RIWjQvT0JaM25VOWxUM2FjS3B4Wk5QVHIxcmk2cWE2VWJvYnRFZDc5dXArNllucjVlZ0o1TWI2ZmVlYjNuK2h4OUwvMVUvVzM2cC9WSERGZ0dzd3drQnRzTXpoZzh4VFZ4Ynp3ZEw4ZmI4VkZEWGNOQVE2VmhsV0dYNFlTUnVkRThvOVZHalVZUGpHbkdYT01rNDIzR2JjYWpKZ1ltSVNaTFRlcE43cHBTVGJtbUthWTdURHRNeDgzTXphTE4xcGsxbXoweDF6TG5tK2ViMTV2ZnQyQmFlRm9zdHFpMnVHVkpzdVJhcGxudXRyeHVoVm81V2FWWVZWcGRzMGF0bmEwbDFydXR1NmNScDdsT2swNnJudFpudzdEeHRzbTJxYmNac09YWUJ0dXV0bTIyZldGblloZG50OFd1dys2VHZaTjl1bjJOL1QwSERZZlpEcXNkV2gxK2M3UnlGRHBXT3Q2YXpwenVQMzNGOUpicEwyZFl6eERQMkRQanRoUExLY1JwblZPYjAwZG5GMmU1YzRQemlJdUpTNExMTHBjK0xwc2J4dDNJdmVSS2RQVnhYZUY2MHZXZG03T2J3dTJvMjYvdU51NXA3b2Zjbjh3MG55bWVXVE56ME1QSVErQlI1ZEUvQzUrVk1HdmZySDVQUTArQlo3WG5JeTlqTDVGWHJkZXd0NlYzcXZkaDd4Yys5ajV5bitNKzR6dzMzakxlV1YvTU44QzN5TGZMVDhOdm5sK0YzME4vSS85ay8zci8wUUNuZ0NVQlp3T0pnVUdCV3dMNytIcDhJYitPUHpyYlpmYXkyZTFCaktDNVFSVkJqNEt0Z3VYQnJTRm95T3lRclNIMzU1ak9rYzVwRG9WUWZ1alcwQWRoNW1HTHczNE1KNFdIaFZlR1A0NXdpRmdhMFRHWE5YZlIzRU56MzBUNlJKWkUzcHRuTVU4NXJ5MUtOU28rcWk1cVBObzN1alM2UDhZdVpsbk0xVmlkV0Vsc1N4dzVMaXF1Tm01c3Z0Lzg3Zk9INHAzaUMrTjdGNWd2eUYxd2VhSE93dlNGcHhhcExoSXNPcFpBVEloT09KVHdRUkFxcUJhTUpmSVRkeVdPQ25uQ0hjSm5JaS9STnRHSTJFTmNLaDVPOGtncVRYcVM3Skc4Tlhra3hUT2xMT1c1aENlcGtMeE1EVXpkbXpxZUZwcDJJRzB5UFRxOU1ZT1NrWkJ4UXFvaFRaTzJaK3BuNW1aMnk2eGxoYkwreFc2THR5OGVsUWZKYTdPUXJBVlpMUXEyUXFib1ZGb28xeW9Ic21kbFYyYS96WW5LT1phcm5pdk43Y3l6eXR1UU41enZuLy90RXNJUzRaSzJwWVpMVnkwZFdPYTlyR281c2p4eGVkc0s0eFVGSzRaV0Jxdzh1SXEyS20zVlQ2dnRWNWV1ZnIwbWVrMXJnVjdCeW9MQnRRRnI2d3RWQ3VXRmZldmMxKzFkVDFndldkKzFZZnFHblJzK0ZZbUtyaFRiRjVjVmY5Z28zSGpsRzRkdnlyK1ozSlMwcWF2RXVXVFBadEptNmViZUxaNWJEcGFxbCthWERtNE4yZHEwRGQ5V3RPMzE5a1hiTDVmTktOdTdnN1pEdWFPL1BMaThaYWZKenMwN1AxU2tWUFJVK2xRMjd0TGR0V0hYK0c3UjdodDd2UFkwN05YYlc3ejMvVDdKdnR0VkFWVk4xV2JWWmZ0Sis3UDNQNjZKcXVuNGx2dHRYYTFPYlhIdHh3UFNBLzBISXc2MjE3blUxUjNTUFZSU2o5WXI2MGNPeHgrKy9wM3ZkeTBOTmcxVmpaekc0aU53UkhuazZmY0ozL2NlRFRyYWRveDdyT0VIMHg5MkhXY2RMMnBDbXZLYVJwdFRtdnRiWWx1NlQ4dyswZGJxM25yOFI5c2ZENXcwUEZsNVN2TlV5V25hNllMVGsyZnl6NHlkbFoxOWZpNzUzR0Rib3JaNzUyUE8zMm9QYisrNkVIVGgwa1gvaStjN3ZEdk9YUEs0ZFBLeTIrVVRWN2hYbXE4NlgyM3FkT284L3BQVFQ4ZTduTHVhcnJsY2E3bnVlcjIxZTJiMzZSdWVOODdkOUwxNThSYi8xdFdlT1QzZHZmTjZiL2ZGOS9YZkZ0MStjaWY5enN1NzJYY243cTI4VDd4ZjlFRHRRZGxEM1lmVlAxdiszTmp2M0g5cXdIZWc4OUhjUi9jR2hZUFAvcEgxanc5REJZK1pqOHVHRFlicm5qZytPVG5pUDNMOTZmeW5RODlrenlhZUYvNmkvc3V1RnhZdmZ2alY2OWZPMFpqUm9aZnlsNU8vYlh5bC9lckE2eG12MjhiQ3hoNit5WGd6TVY3MFZ2dnR3WGZjZHgzdm85OFBUK1I4SUg4by8yajVzZlZUMEtmN2t4bVRrLzhFQTVqei9HTXpMZHNBQUFBZ1kwaFNUUUFBZWlVQUFJQ0RBQUQ1L3dBQWdPa0FBSFV3QUFEcVlBQUFPcGdBQUJkdmtsL0ZSZ0FBQUp0SlJFRlVlTnJzMk1FSkJERU1RMUVaNXJUcHY5VE0xVnVFQkdiTVR3RkNmaGRCcXFXVzhSNzlwT0dBTTk1Z1FRQ0lJSUlJWXFoQmRadkQ4c284d1E2NDR3MFdCSUFJSW9nZ3BocVUzR0dSdVcySmdLUFBud0FpaUNDQ3VBV3gxRzBPaTdsdGdZQTczbUJCQUlnZ2dnaGlxRUZKNXJDWWYzR0JnRFBlWUVFQWlDQ0NDR0txUWJVN0xESzNMUkZ3OWZrVFFBUVJSQkMzSVA0SEFHaURXVGo4MVREa0FBQUFBRWxGVGtTdVFtQ0MnKTtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ucG9pbnRlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgdG9wOiAtMXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDAgMCAtN3B4O1xufVxuXG46aG9zdChbdmVydGljYWxdKSAucG9pbnRlciB7XG4gICAgbGVmdDogLTFweDtcbiAgICBtYXJnaW46IC03cHggMCAwIDA7XG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ 5128:
/*!***************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/indicator/indicator.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorComponent": () => (/* binding */ IndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_color_picker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/color-picker.service */ 4191);





class IndicatorComponent {
    constructor(pickerConfig, renderer, elementRef, document) {
        this.pickerConfig = pickerConfig;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.document = document;
        this.colorType = 'rgba';
        this.subscriptions = [];
        this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.elementRef.nativeElement, 'click').subscribe(() => this.onClick()));
    }
    get title() {
        return this.pickerConfig ? this.pickerConfig.indicatorTitle : '';
    }
    get backgroundColor() {
        return this.color.toRgbaString();
    }
    onClick() {
        const input = this.renderer.createElement('input');
        this.renderer.setStyle(input, 'position', 'absolute');
        this.renderer.setStyle(input, 'top', '-100%');
        this.renderer.setStyle(input, 'left', '-100%');
        switch (this.colorType) {
            case 'hsla':
                input.value = this.color.toHslaString();
                break;
            case 'hex':
                input.value = this.color.toHexString(this.color.getRgba().alpha < 1);
                break;
            default:
                input.value = this.backgroundColor;
        }
        this.renderer.appendChild(this.elementRef.nativeElement, input);
        input.select();
        this.document.execCommand('copy');
        this.renderer.removeChild(this.elementRef.nativeElement, input);
    }
}
IndicatorComponent.ɵfac = function IndicatorComponent_Factory(t) { return new (t || IndicatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_color_picker_service__WEBPACK_IMPORTED_MODULE_0__.ColorPickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
IndicatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IndicatorComponent, selectors: [["indicator-component"]], hostVars: 1, hostBindings: function IndicatorComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx.title);
    } }, inputs: { color: "color", colorType: "colorType" }, decls: 4, vars: 2, consts: [["viewBox", "0 0 48 48"], ["d", "M0 0h48v48h-48z", "fill", "none"], ["d", "M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z"]], template: function IndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1)(3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx.backgroundColor);
    } }, styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: block;\n  cursor: pointer;\n  text-align: center;\n  border: 1px solid #e3e3e3;\n  overflow: hidden;\n  position: relative;\n  height: 20px;\n  width: 20px;\n  background: transparent url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\") repeat;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n[_nghost-%COMP%]:hover:after {\n  display: block;\n  content: \"\u00A0\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #000;\n  opacity: 0.2;\n  z-index: 2;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: background-color 2s ease-in-out;\n  opacity: 0;\n  fill: #fff;\n  height: 46%;\n  vertical-align: -20%;\n}\n[_nghost-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0VEFBQTtBQUVKO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUo7QUFDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUVKO0FBQ0E7RUFDSSwyQ0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBRUo7QUFDQTtFQUNJLFVBQUE7QUFFSiIsImZpbGUiOiJpbmRpY2F0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUFoMGxFUVZSWVIrMlcwUWxBTVFnRDYwemRmd09kcWE4VG1JL3dRTXI1SzBJNWJaTEl6TE9hMm50MzdWVlZiZCtkRHg1b2JnQ0MzS0JMd0oyZmY0UG5WaWRrZit1Y0lodzgwSFFhQ0xvM0RNSDNDUkszaUZzbUFXVmw2aFBORHd0OEV2TkU1cStZdUVYY01na29uVk02U2R5Q29FdkFuWjh2MUhqeDgxN01pbG14U1VCNXJkTEpEeWNaZ1VBWlVjaC9BQUFBQUVsRlRrU3VRbUNDJykgcmVwZWF0O1xufVxuXG46aG9zdCA+IGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG46aG9zdDpob3ZlcjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogJ1xcMEEwJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgb3BhY2l0eTogLjI7XG4gICAgei1pbmRleDogMjtcbn1cblxuOmhvc3Qgc3ZnIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzIGVhc2UtaW4tb3V0O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsbDogI2ZmZjtcbiAgICBoZWlnaHQ6IDQ2JTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLTIwJTtcbn1cblxuOmhvc3Q6aG92ZXIgc3ZnIHtcbiAgICBvcGFjaXR5OiAxO1xufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 3005:
/*!**********************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/inputs/hex-input/hex-input.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HexComponent": () => (/* binding */ HexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/color.class */ 9426);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function HexComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "HEX");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HexComponent {
    constructor() {
        this.hueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(false);
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(false);
        this.prefixValue = '';
    }
    set label(value) {
        this.labelVisible = true;
    }
    set prefix(value) {
        this.prefixValue = value;
    }
    get value() {
        return this.prefixValue + (this.color ? this.color.toHexString(this.color.getRgba().alpha < 1).replace('#', '') : '');
    }
    onInputChange(event, inputValue) {
        const value = inputValue.toLowerCase().replace('#', '');
        if (((event.keyCode === 13 || event.key.toLowerCase() === 'enter') && value.length === 3)
            || value.length === 6 || value.length === 8) {
            const hex = parseInt(value, 16);
            const hexStr = hex.toString(16);
            /**
             * if value is valid
             * change color else do nothing
             * after parsing number leading 0 is removed,
             * compare length and add leading 0 before comparing two values
             */
            if (hexStr.padStart(value.length, '0') === value && this.value !== value) {
                const newColor = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color(`#${value}`);
                const hue = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsva(newColor.getHsva().hue);
                this.hueChange.emit(hue);
                this.colorChange.emit(newColor);
            }
        }
    }
}
HexComponent.ɵfac = function HexComponent_Factory(t) { return new (t || HexComponent)(); };
HexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HexComponent, selectors: [["hex-input-component"]], inputs: { hue: "hue", color: "color", label: "label", prefix: "prefix" }, outputs: { hueChange: "hueChange", colorChange: "colorChange" }, decls: 4, vars: 2, consts: [[1, "column"], ["type", "text", 3, "value", "keyup"], ["elRef", ""], [4, "ngIf"]], template: function HexComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function HexComponent_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onInputChange($event, _r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HexComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.labelVisible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  display: table;\n  width: 100%;\n  text-align: center;\n  color: #b4b4b4;\n  font-size: 11px;\n}\n\n.column[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 0 2px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgb(218, 218, 218);\n  color: #272727;\n  text-align: center;\n  font-size: 12px;\n  -webkit-appearance: none;\n  border-radius: 0;\n  margin: 0 0 6px;\n  height: 26px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0wiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjYjRiNGI0O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmNvbHVtbiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nOiAwIDJweDtcbn1cblxuaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTgsIDIxOCwgMjE4KTtcbiAgICBjb2xvcjogIzI3MjcyNztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgbWFyZ2luOiAwIDAgNnB4O1xuICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgIG91dGxpbmU6IG5vbmU7XG59Il19 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXgtaW5wdXQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 1715:
/*!************************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/inputs/hsla-input/hsla-input.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HslaComponent": () => (/* binding */ HslaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../helpers/color.class */ 9426);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directives_color_picker_input_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../directives/color-picker-input.directive */ 442);





function HslaComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HslaComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HslaComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "L");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HslaComponent_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HslaComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inputChange", function HslaComponent_div_9_Template_input_inputChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onInputChange($event, "A")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HslaComponent_div_9_span_2_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r3.value == null ? null : ctx_r3.value.getAlpha().toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.labelVisible);
} }
class HslaComponent {
    constructor() {
        this.hueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(false);
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(false);
        this.isAlphaVisible = true;
    }
    set label(value) {
        this.labelVisible = true;
    }
    set alpha(isVisible) {
        this.isAlphaVisible = isVisible;
    }
    get value() {
        return this.color ? this.color.getHsla() : null;
    }
    onInputChange(newValue, color) {
        const value = this.value;
        const hue = color === 'H' ? newValue : value.hue;
        const saturation = color === 'S' ? newValue : value.saturation;
        const lightness = color === 'L' ? newValue : value.lightness;
        const alpha = color === 'A' ? newValue : value.alpha;
        const newColor = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsla(hue, saturation, lightness, alpha);
        const hueColor = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsva(newColor.getHsva().hue);
        this.hueChange.emit(hueColor);
        this.colorChange.emit(newColor);
    }
}
HslaComponent.ɵfac = function HslaComponent_Factory(t) { return new (t || HslaComponent)(); };
HslaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HslaComponent, selectors: [["hsla-input-component"]], inputs: { hue: "hue", color: "color", label: "label", alpha: "alpha" }, outputs: { hueChange: "hueChange", colorChange: "colorChange" }, decls: 10, vars: 7, consts: [[1, "column"], ["type", "text", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "value", "inputChange"], [4, "ngIf"], ["type", "text", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "value", "inputChange"], ["class", "column", 4, "ngIf"], ["type", "text", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", 3, "value", "inputChange"]], template: function HslaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inputChange", function HslaComponent_Template_input_inputChange_1_listener($event) { return ctx.onInputChange($event, "H"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HslaComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0)(4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inputChange", function HslaComponent_Template_input_inputChange_4_listener($event) { return ctx.onInputChange($event, "S"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HslaComponent_span_5_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 0)(7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inputChange", function HslaComponent_Template_input_inputChange_7_listener($event) { return ctx.onInputChange($event, "L"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HslaComponent_span_8_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HslaComponent_div_9_Template, 3, 2, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.value == null ? null : ctx.value.getHue().toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.labelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", (ctx.value == null ? null : ctx.value.getSaturation()) + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.labelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", (ctx.value == null ? null : ctx.value.getLightness()) + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.labelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAlphaVisible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _directives_color_picker_input_directive__WEBPACK_IMPORTED_MODULE_1__.ColorPickerInputDirective], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  display: table;\n  width: 100%;\n  text-align: center;\n  color: #b4b4b4;\n  font-size: 11px;\n}\n\n.column[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 0 2px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgb(218, 218, 218);\n  color: #272727;\n  text-align: center;\n  font-size: 12px;\n  -webkit-appearance: none;\n  border-radius: 0;\n  margin: 0 0 6px;\n  height: 26px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0wiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjYjRiNGI0O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmNvbHVtbiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nOiAwIDJweDtcbn1cblxuaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTgsIDIxOCwgMjE4KTtcbiAgICBjb2xvcjogIzI3MjcyNztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgbWFyZ2luOiAwIDAgNnB4O1xuICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgIG91dGxpbmU6IG5vbmU7XG59Il19 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoc2xhLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 3516:
/*!************************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/inputs/rgba-input/rgba-input.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgbaComponent": () => (/* binding */ RgbaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../helpers/color.class */ 9426);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directives_color_picker_input_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../directives/color-picker-input.directive */ 442);





function RgbaComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RgbaComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RgbaComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RgbaComponent_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RgbaComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inputChange", function RgbaComponent_div_9_Template_input_inputChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onInputChange($event, "A")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RgbaComponent_div_9_span_2_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r3.value == null ? null : ctx_r3.value.getAlpha().toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.labelVisible);
} }
class RgbaComponent {
    constructor() {
        this.hueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(false);
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(false);
        this.isAlphaVisible = true;
    }
    set label(value) {
        this.labelVisible = true;
    }
    set alpha(isVisible) {
        this.isAlphaVisible = isVisible;
    }
    get value() {
        return this.color ? this.color.getRgba() : null;
    }
    onInputChange(newValue, color) {
        const value = this.value;
        const red = color === 'R' ? newValue : value.red;
        const green = color === 'G' ? newValue : value.green;
        const blue = color === 'B' ? newValue : value.blue;
        const alpha = color === 'A' ? newValue : value.alpha;
        const newColor = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setRgba(red, green, blue, alpha);
        const hue = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsva(newColor.getHsva().hue);
        this.hueChange.emit(hue);
        this.colorChange.emit(newColor);
    }
}
RgbaComponent.ɵfac = function RgbaComponent_Factory(t) { return new (t || RgbaComponent)(); };
RgbaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RgbaComponent, selectors: [["rgba-input-component"]], inputs: { hue: "hue", color: "color", label: "label", alpha: "alpha" }, outputs: { hueChange: "hueChange", colorChange: "colorChange" }, decls: 10, vars: 7, consts: [[1, "column"], ["type", "text", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "value", "inputChange"], [4, "ngIf"], ["class", "column", 4, "ngIf"], ["type", "text", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", 3, "value", "inputChange"]], template: function RgbaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inputChange", function RgbaComponent_Template_input_inputChange_1_listener($event) { return ctx.onInputChange($event, "R"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RgbaComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0)(4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inputChange", function RgbaComponent_Template_input_inputChange_4_listener($event) { return ctx.onInputChange($event, "G"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RgbaComponent_span_5_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 0)(7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("inputChange", function RgbaComponent_Template_input_inputChange_7_listener($event) { return ctx.onInputChange($event, "B"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RgbaComponent_span_8_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RgbaComponent_div_9_Template, 3, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.value == null ? null : ctx.value.getRed().toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.labelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.value == null ? null : ctx.value.getGreen().toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.labelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.value == null ? null : ctx.value.getBlue().toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.labelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAlphaVisible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _directives_color_picker_input_directive__WEBPACK_IMPORTED_MODULE_1__.ColorPickerInputDirective], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  display: table;\n  width: 100%;\n  text-align: center;\n  color: #b4b4b4;\n  font-size: 11px;\n}\n\n.column[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 0 2px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid rgb(218, 218, 218);\n  color: #272727;\n  text-align: center;\n  font-size: 12px;\n  -webkit-appearance: none;\n  border-radius: 0;\n  margin: 0 0 6px;\n  height: 26px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0wiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjYjRiNGI0O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmNvbHVtbiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nOiAwIDJweDtcbn1cblxuaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTgsIDIxOCwgMjE4KTtcbiAgICBjb2xvcjogIzI3MjcyNztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgbWFyZ2luOiAwIDAgNnB4O1xuICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgIG91dGxpbmU6IG5vbmU7XG59Il19 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ2JhLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 2945:
/*!*****************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/parts/saturation/saturation.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaturationComponent": () => (/* binding */ SaturationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../helpers/color.class */ 9426);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../base.component */ 1226);




const _c0 = ["pointer"];
class SaturationComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(renderer) {
        super();
        this.renderer = renderer;
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(false);
    }
    get backgroundColor() {
        return this.hue ? this.hue.toRgbaString() : '';
    }
    ngOnInit() {
        if (!this.hue) {
            this.hue = _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color.from(this.color.getHsva());
        }
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.backgroundColor);
    }
    /**
     * color can be changed through inputs
     * and then we need to move pointer
     */
    ngOnChanges(changes) {
        if (changes.color && changes.color.previousValue !== changes.color.currentValue) {
            const hsva = this.color.getHsva();
            this.changePointerPosition(hsva.saturation, hsva.value);
        }
    }
    movePointer({ x, y, height, width }) {
        const saturation = (x * 100) / width;
        const bright = -((y * 100) / height) + 100;
        this.changePointerPosition(saturation, bright);
        const hsva = this.hue.getHsva();
        const color = this.color.getHsva();
        const newColor = new _helpers_color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsva(hsva.hue, saturation, bright, color.alpha);
        this.colorChange.emit(newColor);
    }
    changePointerPosition(x, y) {
        this.renderer.setStyle(this.pointer.nativeElement, 'top', `${100 - y}%`);
        this.renderer.setStyle(this.pointer.nativeElement, 'left', `${x}%`);
    }
}
SaturationComponent.ɵfac = function SaturationComponent_Factory(t) { return new (t || SaturationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
SaturationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SaturationComponent, selectors: [["saturation-component"]], viewQuery: function SaturationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.pointer = _t.first);
    } }, hostVars: 2, hostBindings: function SaturationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx.backgroundColor);
    } }, inputs: { hue: "hue", color: "color" }, outputs: { colorChange: "colorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "pointer"], ["pointer", ""]], template: function SaturationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  height: 50px;\n  background-size: 100% 100%;\n  background-image: url(\"data:image/png;base64,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\");\n  -ms-touch-action: none;\n      touch-action: none;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 90%;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  margin: -6px 0 0 -6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdHVyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG1nZ0JBQUE7RUFDQSxzQkFBQTtNQUFBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFDSiIsImZpbGUiOiJzYXR1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT1lBQUFDQ0NBWUFBQUJTRDdUM0FBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0QUlXRHdrc1BXUjZsZ0FBSUFCSlJFRlVlTnJ0blZ1VDQ3Z1JyQUhOK1AvL09yLzYxWTV3T05aN21aMXUzWEFlTE1qSlpHWlZnZEtzZmM1eFIzUzBSSUlVVytDSHpDcGMyTWNZbzdYR3YzZXg3VWlaZDU3cmp5enp2K3YrMzNYL1IvKzNyL2Y3dlIzODZZK1R2S05jZi93ZGhUTFBjdjlxVTJ3WmQ3NHV0aDB0MTgyMWprSVpMUGNzSS82bldhNFh2dXRxdVUwWjg1bW54ODBTL1p6Z3BuTG5PdEhOdDcvb2Z4MVRLWGNTTnpOLzdxYk1RM2p1N3JOUW1NWVlkLzRzMmo5YWErUCtnR2FNY1pyYjFNL3RkcnZmNy9kMnY5OVA5L3Q5M08vM2NidmR4dTEyRzlmcmRWd3VsM0UrbjhjLy8vblArMisvL1hiNjZhZWZ4bC8vK3RmeDV6Ly8yWUs1QWwycmd2ZjRVc2JwZEdyQjUyYkF2QXJYcHV6am1pcUFWU0d6NWVEbUdZWHpoYkFabUNybm16ZGRwVVUrOFkxZEFPWWVYQ3REVXdWd1Y3WUNHSDZ1QW15TWNaOWw1dmtVYUJQR01VWjcvSjV3Lzc5Mi9mdnY5WHE5MzI2M2RyL2ZUeFBFQ2VNRThuSzVqTS9Qei9IVFR6L2R2MzM3ZHZybGwxL0dQLzd4ai9HM3YvMXQvT1V2ZndrVnN3b25namRPcDlQekgzVTNEM3ptV0duWlZYbjRqQ3FzN3dDMkJLUDQvOHRBemtac29XeDZYcnFlSFp5bXZwNEFCQ0JKaFRRd0tmRFQ4Z3pyWkNJcWk1QWhpQUNqQmZFQjJyUDgvWDYzTU03ZjYvVjZ2OS92N1hhN2JZQzgzVzdqY3Jsc1ZISXE1ZmZ2MzArLy9mYmIrT1dYWDhaUFAvMDAvdjczdjQrZmYvNzVKU3ZiZXUrYkwyV01NYUZiQWxwQk5NODVRWCtjdDZxb1Nxa1BBd3VRbEJWS3FHTkZTVU9BQTNCbXU3Z0M1aE5PZDE1blN3dkFPVVc3QzRnaVVDVjhTZ241TDloTkZJcVRzcDBHeEkweXNpb3lqQWprWS90R0pWRXB6K2Z6K09XWFgrN2Z2MzgvL2Y3NzcrUGJ0Mi9qMTE5L0hULy8vUFA0OWRkZng4ZkhSd3JtVGpWNzc5RVh1MnB4Mnhoand0ZEpaUWNBV1FJUExQSVNzTUphU3dpRDhneklLcndTeUFURTVqNW5BYlI1YzFkQlV3QmxzRVdXMGg2THFpWXNxRlBBUXhDeVJaM3dPU0FSeG1sWE1YNWs2NHBRZnZ2MjdmNzUrZGsrUGo1T0h4OGY0L3YzNytQYnQyL2p0OTkrRzkrK2ZSc2ZIeC9qY3JtVUZMTzMxZ1lEV2JseFJJcy9UcWZUN291c3hKc0F4WEEyR2M3VEE5WGRnZmRvSGJGc2o3NlgyKzFXQXJnSTFhZ2VHd0EzcXVwcW9Ic21jYkk2RnU5M3F1Z2dGYTlkN0xlRHRnS2ZBRkhCSitORUJ5SWtjSjVLZXJ2ZFRtaGhHY2dKSlNaNXZuLy9maitmeisxOFBwOCtQei9INStmbm1HRCsvdnZ2NC92MzcrUGo0Mk44Zm42TzIrMVdzN0pqalA2d3JhTUk1RTRSWjh4MnZWNVRTd2txdW90VjcvZDdUejZIRldzRC9xTmNkdzBDUTNxLzMyMWM2ODZUd0RWSWRidXk3M3pObGRoU0hiOEkya2xaem5tK0luQlM0VTZuMDMwMmFCRnNMaEhEQUtKVkpWZ2xmSTlqaHZ1NTNXNTNzTEFOWU54QWlEQTZNQ2VVSHg4ZjkrdjEyaTZYUzd0Y0xxY1pXNTdQNXllWTgvZno4M09jeitmbnNTbVlVeWtuV0VHODVXQnN0OXN0elNMeU1kZnI5UWkwOGlZMTVVWjBMbERHTGhSM281eksyajdPUFVURDBFK25VM3RrN1hiLzE2TkZiaGxvQU11WTF6akxVT08zQktlSURlK1o4czMvSjRnRm80VE01alBtdVJnMjhmb1VLS1ZTd28xNlRnQTVucHl3Y1dMSGdZbC9QejgvNzMvNjA1L2FiNy85MW02M1c3dGNMaWUwc1pqNG1hbzVnVHlmejg4RTBmMStqOEVjWXp3VFBFRzJjcWp5ZkhORjBNOGZ1cUVpYU9WblJ6WlpRTmg1ZndReUhnL0hER2ZKbzg5UTF6Yi9xdXU1WEM2NzczSTJYS2ZUcWQvdjkrZDN3dXFXdmEvWVRkVWRFVjNmaEl2L1ZpeXBzNllFM3gzcjQzSzViSlFTNjZ6YXhWR0ZzdmQrLy9qNGFGKy9mbTNmdjM5dnQ5dXRmZjM2dGYzKysrL3RkcnVkdm4zN1p1TkxCYWFDTWdVekMrclpSaUZvd3hVdUpJOFlNcWNDcDlPcHE1dmFnYVlVNmxHSkExWFFxZWpjaHc2Q2owR3c1bllCckd3MDFBMk8yMDZuMDRCR291Tk55VGZwL0Z3RWxoVWV5Nm5YcklLdzdRUVdkZHh1TjJsZEw1Zkw4MzlnU1BGOGFodS9KdkJPNDhDUFN1cU1mOFZwOS9QNTNMNTgrZEx1OTNzN244L3RmcjgvMzkvdjkvYjUrVGtoUEozUDU2bVE0MzYvaisvZnYrL2lTZ2J6ZXIwK0FaeC81Kzg4YnY2T01kYTZTNXo2a2QyMWZZQzlkeHY3Y0lKSjJkOUFPUzMwZlBNenlIaVRNOEI0REY2WFVsWUhwNEtRVzNXKzF0NzdNTkIxdkdIeFdxN1hhN3ZmNzgreTUvTjVBK0gxZXQyOXh1UDVkYll0eWFSdTRBa3NiUHE2OTM2ZmpSelhSeEJiUHIvYitiMTgrZktsalRIYUJCQmZuOC9uMC8xK0gxKytmQm5uOHptMHNCOGZINXU0Y3I1R3VCaE1WazBFRW45UnNjdGdWaE0raXhsSnRNQTIzUjhCNnl5c0FzdEJPZ0ZYSUtLQ01JZ1RvTXFORXUyZllNSDd6dGM3MzJkUUtrQ2oxeXRBWnRZMEt4OHBJcjhHR0orQVQzVisySGlyaGwrK2ZCbVh5Mld6NzN3K2IxN1A4cCtmbjgvdFV3R1ZsZVZrVHlVYjY4RGtmYXlXWTR6eE5SaWhVNEVwTEpQWlZySyt1N0o0L21nZktxZUxXOVgyUkVXbEl0TDFkaXluYkREYjMralhnWWpRcW4wcnJ4V2MrTmtJTFA3Rjd4SWJNdng3dlY1M3g0MHhubGJXSkYxMlpTYWcvTjBwVzZ0K1p6bU9NekhqYWpLd0Rmb25kNzh6WVRkZnExOHVwOTd6cjJxOHYzSWlvQnByUnRCbDBFWjlvZzVXQlJHT2RPSGpJalhGN1VvdEZiZ09Xblh6SUp5ell2akc1SVlnc21NT3hIa3o4T3NNU3JWTldlcTVUOERhT2NiRXYxT2Q1cmJzOWFPN1l2TWV0NjNFa0YrK2ZNRXhxK01SbDQvTDViTFpOLytleitmblo2S2F6dU1xWFNRVk81c3BKWGZsSEFJemVzL3hKc2Vja1JKaURNb2c5ZDZWZlJycVhNcjZLcFZWMjdqUndKYWNHb3ZPQU0xek1kUU1ud0sxQXViSzYza2RDQ2h2STFDN2cwejluZi9EK1h6ZTJWajhIN0d4NFA5ZHVRbHNZQ3JxeU44WHFHM0htLzEwT2ozancvbitjcmxzdHVNK2pQbW14VDJkVHVQejgzUHp0MnBuMVhzRUhYL2JuUGFWcVZtaDB4d090MG82WExMQUhlUFVVMjAzd0hmY3JzcEN3bVYzVHJ5QjVzME1zZWVnOTd4L0J3ekNqQmxiQitwUkFQbGEwQlZRdVQ2VjZRSGRCbGozZDBLRzE0N2IrRHF4UWVVeW1ETzQzVzRkUWFyK1RJandtQWQwejgvaDY1dmYwL3lMdjNQYjVYTHBydS95ZERvOXM3RVQwSStQajZkS0s5VlVFSWVLV1FXUEFPcko4TEtkNHZFK3Q5MVkzZTdVRmxXYXRnMlZ3Sm5iK0hQbXR2bS9zZks1OS9PYVdGM3gvZVAxVVBIdkE1RERZRHBZWGZiMGRydjFWMkRrQmt4dHcvdEVXVlZsWFdkQzlwRllzNS9qZmg5ZFMvMTZ2VzdzNmxURytUZnFzeFNKSHhrWFhxL1hkcjFldTRMc2ZENlAzdnNUM043N0RrTCt6UG01alNkS0w0elIzQXhRZDZySGtMa1lsU293c3JxN3puenU2d1N3ZHNNSk9YbUE1ZkJjanh0Z01HQllIbHI1em9raHRzTUNUZ1hMUU9XNFhDNmRFeUVNcHJMOG1BUXpYUmdkdWl4Mnlaem9yeGtZc0RuM2hCMVZlTUxHc1hzVnRnbDJwVzhTM3N2azB2dzdSNGhOYUh2djRjQUNsNUhGendJSDBLYzZ6dTRYakRQUi9qcEFWeFd6TzFYazJERGIzdlRjeGVHVTFpV1pIa21JRFd6aVdLdmlyQ0o0RHJhdnM2SUovR0c2Y1RxV2RYRHkrZkFyUURWVmtMcWtWakFvWklJVGRtbUlxWHdxYTk1TjMrTUdZb1pRZFJWTk81M1kxeFJraE8xNnZZN2V1NTA3Q2E5bEpuYkdweE9lbVFoU3cvQVFzbW1wNXpVOUJpVThHNnd2WDc2TTYvVTZQajQrZG8wQno0Q3BnaWtuVFVlRHF3bEtCbWczdTRPVmpyWjFBK3JBY2dhZWpXcTZlSkN2Q1lGRE9OU3dPZ0hYNEVRUnc4bHhiekRPZEVLNmdaM0hrMWIrOGcybzFKRnRLWHl2L2ZFZFRYdVdqV1hkQVppQnA2QURlRHJDRmlpbTdCNlpGbmVlSTdHdm0vUE1rVURYNjdXN3hJOGIwRDcvdjhkQTlxZk41b2FDZjc0V1pqSDBtZjFjbWZZMVkwSlVGbVZyVFd1OHV6a05jTHRFajd1NUZYQlRrZkM2R09BNXE4WU14TzhLVnZGNnNBVkdkY3JVYnNLT0RjUUtrTE1PTWRtbHh1bTY0MllyUG0yNkFsaFpXMVlCMVIrcnJHc3dFOFRhWUFXZVVNeGRmK1dqd1N2WjJFZjN5dE95Zm41K1BwVlBBYXFPbjQzTXROQnF2bWpqeGJqTTRsWmpaWTRncU5NSTVrdGFXL3NZS053Uys5bEZRekdpaG1NQ0tQYTcrWjBWNkViMEdSbW9idHBYOEpsald1NUZNTE41amE2aEc5a3dRZ1pxZjUrMU5INVV4emtGUmVDZFdoSjhYZGxHVWt4TzdIUmxZUm00bVZPNDNXN3RlcjEyVFBKRXcvcm1FTjNMNVNLSElXWmc5bXorcFVvS09ZcTViSlRKZFgyZ21lMVVjeE1aUUZhRVFJbEhjdDMyTStZMUJ6R2tHdXpmaXlBTjl6K3VncGxaMXN5bUNyRENZWWtHeERUcEk5UnpCeTBySHllRFVDMW5XYWVVYUQ5bjR4a055WU1CRFp0elozQisrZkpsWTIxWEZET2NBUkpsYWJPeWlTM3VDcExJOWpyWmpDRGthVnZjQ0Nqd29nbktTaFdkelhaV2xaTXZWVGdEOExwcWxDTHJxZ2JjQitxWXdyZ0tZcFQwY2NDcWJLeUNWYWxrRWFibi9GeW5vZ0NyUEtmcWY1MXhKN3NHQjJaWGNabXhvU096dGp4MzAwRFppN2EwLzJBSVIwVWxCYWc5U3VEdzZLY0F6bGFCN3ZIWnZXcGpLOTBkeXJxNmJLeURVWlFiUjBCMDViaUxRa0hJY1NVbWdJSytTd3VxZ0hDbm9pbzJSUVUxeWorQm5CeTlwcGhWS0xHeUM3WnpGSzFweFdLK0U4SWhWQ1dMTi91THRuVVU0YXlvWUxvYUFOejhGZHRhU3ZZNHBWMEJFVzJsczYxY3pxbGxCS3BUeUtnTUFocloxY2RjMVJST3RQbXZXTmtkY0taN1pLeGFXamlQTEpNcHA3T1pLeEErcnFHL29KTGp4ZjBwbkpscUxvRFpvM2d5VTBtS0d5czJ0YUtlY2ovZDFDK3JKU3BsQnFsVHlBcWdSK0Q4S2pLbG1STDJndFVjQWRDdHNMK2lqQ05UMW9xcXFrSDJPSEViRzVzREZuVWc1QWEreUxvdTJWVTFwdGoxUzJaUXF2MU9SWk45SVd6UmZnYVJCeEtvQkU4VVd5cWxKRnRySWMwQXhOalNqZWQ5OUNUWS9YRGZTekN6NU0wSVpvVkVzV25QRk5Uc2w4b29WQzFUemJHZ3FGWk5EU2dWd0tLKzFzR0RNS3F4WkNXR1ZNRHlzaUVyMWpWU1FKVVl3ajVpSE9sVGhkSHQ0NFNRZzlDTitubDhEOTBOTUlnQWRncjQ2SnFSaVI5STh2UmRGdmJyMTdtL3l4VU1Lak5MTWlWVUFEd3UyQ1dHaGhpK0Y1NVRXTTlNOWNvZ3ptczFkbk00dU9GL0xBRVlXZGNxbk03eUZteXEzSWZ3bU9ST2Q3WTFpRld0T2pvWThUbzQxbVRWNUl5c2dGRnVSenNiV0ZHYk5JSUpDRHYxZE9vNGxaRzdqV0J3UkZ0VlRLdVd5ZUNCeUpLT2FuOG9aM2VwOVhkZE5sMHREdWF5d0x6OWNYUFllREFBMFNwa0JPOXNiVmNUT1ZXbGRQdjR1eXpFa3p4SHRqdm9uSG9Ta0ZFV05vbzFkOERoY1FwdXRkMnBwTm9uNEJ6b0FpSjFoQkZRZzBkVnRkYkdISERRV3VzaG1ORVF1a0xNMlFPMUcyWThiZ1RYcUZoY0JKajdFalBnY1B0czhVUzhxUHBQQi9kWHpuT2g1WjQzOHR6SDVlYzZRZ3JPS3JSUmZLbXlzQm1VREIrUGhZYWJNbFZQRVIrR0NTSVRUenI3YW0ydEFySDNiZ2NFelBKbStjcjVqSjRObkhORkRWckZYY0k1TGU5azVKbncrYmVkYlYrRmZSelpJSGFPT2FPc0xZMC83VUdzNThEanJHd0tNSU1GSUd6T0VXMS9qR3NkQXRDTjZoRUFJNGhCZTlZWGVSUk9CU1ZQQVZQQXF2SU01Yng1aFZLV0FNUDZ6QlJ5M2llc2NyaWRWZEZCaW5CeFhEbkcyR1JZMlhiQ3ZwMWxodkd0TzlCeHU1aDkwOFhRdTQybG5TQXJNRmRpek1pbTh1d1JDeFBHbm5PUzhsd3BuYk9pRHFUQWpzclJOL1Bjb0FTY0NiYUFDcVZNNDB5bG5qalRCcytid1dsQUcyMy9VS2Jka2l3S1dJUVBHeldhY3pwb1NseFBFajgyMmNOV2twUzdGeXpzRHJxcGZncEczamFodzJ2Z2JhU1FBeHVMV1pZdDdKenlOZThKb1pwTkFjdkRGT2R3MHdxWVQ5QUsxclp6L0RkYlNsTFBwMHJ5SXhnUUpsSzlBWmxFcTdJT1hwb2hnOVBJaHJDbmc4OEpzT3hpVjRaV0FZZmc0c2lreC84a3kyWjlsODYydXF3cmZzY0lIOCt1Z1RtVkd5aWRkZVZZVWdFTW40R1p6ZzE0RXdJc2g5c3gyY0tLaVdYUmV1T0U1Z3pHT1FnZGxSS1ZWZGxldnFiMjc5WHEwUW5zdHMyVkRhQk8wY29lenNydVd0SEFwdTZzS0c0SUJoTjBhR1Uya0xyTUtHUlROM0htYkNEd0tWMTR6dmtNRURHNFFmWlZzcFZsYU5VMm1oYzVURVozTjFoL3pxVGhldUxwVzA1WldUR1ZqYjNkYm5ObXhLWkJuTjhKcWlkYVZMS0FPeUFSTkxTK01CNTRaMitWYXFvTUxLcm9WQmxuZ2VmblRQQWNvSE5XQ1N2bGZBOENJMEhFbUJOQm5CbFh5TXJ6VTdBN1dWbTk0UFBxUTJnbXFLeCtXREdzbnZpbG1jU09CSnFPSzFuWXlBSXp1QXllc3EzVWRTSzNLZldjWUtEOTVIbWZZT1UzcXNlcjJDdFlFVUErRnBmcWROdmdQQlpVQmhEckdPTlJWbFFzaDhyTGNhVUN5a0hHME9PVXdUbExCcnNoNXNvRU1HZXppMUU0SFJWdDFpY3A1d1pFRlhkaWJDa0c4WTh2WDc1c2JPNEUwaW9tOXoraGpTaU9meTNEaHBYSXRwVmhFK1VHUWR2b1dqdENobXJHSGY0WUF6S2dCTm5HdHVKeEZDZUdkaFVBZlFMTEs4a0JZQVA2Z3ZGSlphak1HM1hreWN5OEt1QzBxNEV5eW13dHdkeGR2Mk0wbUlCdEswTEtuZjY0MGowMEF1cTRnVWtkV0dsaHMyMnFKYzZkWkNzTDE5b3hubFRKRzRTWVZSSUdwRDhUUEZCdU02T0VsYlMxcGxkaWQ0bUdBeU42Wkl1cGJDNWJYSk45ZmRwYlRoU3hMVWFJOElHMVhJWUJ4VzNUanM2S1Fvc0tjeGZ4Y1FtZG53UkdNMTBHbkZjQ3kyWFl1bkxNeUFrZGdrNG1lUGljenNMeWd0aGNCdXQ2Z29PcVM3WVZGWEFETGphb3NCNnM2b2ZjWldBWlNJUllxU1VraXpZd3R0WWFiM3ZVT1E5dzJIUnhJSWc4V3dSVmVFNjh4aTRVdEwzelJwaHhwbHp3dVpyY3FZQ3ExSTNqUEk1ZG5KSXlnRW9oTWJQcVZKU3pyd3p4QkpUczV6TitSZVVTZ3hpa1BRVkYzSlZCZU5ReGJIRU5yRU1OdkVkRlpWVjlsSDkrT1JHRXNOWlFweVROYzRDM0FHN1hGNG5nenErRHJPMnpidWFhT1hnZGFGY2RrRW90b1NGQlZYMnFKMEM4T1daZUc0S0dscGdoQTBYZlRPUENxVjJxcXdRMjZRV2ZGMlBNTGhJMncxbFZBYTJhUHNZZDB6YTI1TVFSd2djWk42dVFEQ2krWnhpRDRYRU0ya1p4T1Q0MUZuWm5hUmxjcFpvdXpsUnFxZGJRVldvcFFvU0I1OFJWNTBsQk5ySGkvQXdYUzVMcndEVmxwWTNGYzNCeWlZR2M1MlRyaXN0NmtPWGR3SW5BUXRKcHA1UWNoeWFxdVlPVjdTdStmeFZNYVYzZGMwUkUyUzZtVVkwZ0x0MnBNY1lxcktJUTl3MmwxZ3BRVU10UVljbW1idDVEVE54ZGhuVUNqUXF0Yks5U1VTenZyQzBtbWhoRTFlMkZTMitveHlweS9aQVN1dGttdGp4M3ZjQkMyNFBYNjVuYnFrQkNSaGZqUzlrSVlQbmVlOGNNYWdWT2hJLzNUMWZBbWR0QVdac0Nzd1RKQ2tRVk5hMHFXS1NLUE9wSEFVaEQ5RHJiVmN5b1lrd3FodmgxN3ZZQWF5WExReUtHWWR4bFVERnA0OTRyQlhSallnTzE3RERZZXROSVVqL2V6cDZTMGxubHBFd3NXbUpNa093c0tYZVpLRUFqSUhuMEVRSklTYVJCY082VU1JTno3cC9iRWpqbnc0ZnQreG1EdmtzeFg0RzJySXJpczdxYWVLd0FGTVAyT2k3bjRjcml1Wnd0cFNVd3BmTHhTbk9SU3JJcXVzYzVaRmFYeXNxUldqaVoyRHlBV0VJTDM1dFZTb1FFbEZBQ2pPZUdHU0U3QUhFUWdkby9MU3ZDT2dHQnZreHNtRGJ2bFMzRnA1dmhhQjJUQUdxUktyS0tNcmhMVnBhR3pFVmpaME9ReERoYUNUQStReVJSMWQxNWFRenJKbnRMM1JpYnNpcGpHNmpsZ0w0eXFiUzBzTllnMWU4NHZoYkJWckVsSzY0Q1VjV1lYRGZLeGhwSXV4aVZKWlV4c2JNeS91UkJLVE5SUTRrUTNMZFJZTFMwckpqUlBsVFBxWTZnZEpzRURjK2FRWEFuK0hnc05VQ2JSdUYwT2owenduQTdiV0RrYmhPNUVuczAwcWVRaFMxbGFCTWw1TS9jQWF4c0xGOHJLeXFsK1RmN0VMTEVHdS9peGlpbWRDdm8wVGpmcGpLd2FnZ2VuNGVoNXY3TG9rTEtiTHV5dkhoY1pHOGRoR3JFRHg3SGc5M1pwcEpGN3FCcU8zaVZ2ZVhFRFFOSW56ZW9lOFlxNmVQYVpCWjJKdmlNM1cyVUFHb3Rla1JDQUdxNEVrRjFYM0RPblIxMXlSc0JMMXRSYTBQVmNaaU5GWFoyYzM0RnNrdm9tSW5RUTZsenBKb1piSnhrNDNOd0tKRkJxdUpTc3JCeUh5ZHhLT25UeFFBU0JtUzNqK0pNbnNIU2xhM0VjNks5VldvSlZuOXpmandPTTdocVlBQXFKUXdFMmEzbkE0OEoyUUdlZ1JrcFpOaXZTWSt5czNFa0tkNG9KSXdzdklIbDNjV2dMdDVrNE5INk9tdExXZHB1ck9rd0VNdXBZYzdlTXREUmhPY0kydWk1SmhWSXpYekx5dG8vR0FQdVpveW84d2tvZHVWZ0pnbEN0N09oR2JnSUQ0TXE0c2krNjN6VVMxRnVGRlhGbHF5YWoyZW1IbExNY0JxWXUwRk11UjI4QmJCN2xPeFJNU2lDUVhGaENLdXdraForcFlEaUdTZ2JzS0tWOE1pU1JzdUhTSVdNOXJrbFJpSWxaWnVxWGpzUUs4b29ZSk1ncTNKS1dWa2hIYmhzVnhGVXp0aE9XUGtZaWpjYng1NElLc1NkVCt1THIzY3JHS3lvWWdGaUdSOWlCazRrZmxvVVgrSklsUVJRcWFibXBnbmhxdHBRcGI2UlZRMVdINURuclM0aEVvR1pxYWVyUTJkaEZiejhYZVB4U2htRGJvNzBlSVNqb29yTzJ2SzhTSlhJNFNVbUVVNHpXS0R6VUR0V1RZdzd4WGxiU1RFajRGUmc3ektuS29HUkFMdjBHczlUZ2MxQnBDeXdHWlJRQXRxVnoyeHJCY0FNekVwZlp3RlNhMkc1VzBRQkZqU01hcFdBRUZhM0hjR043Q3hEekVDeUlrSjk3cXdycVdOVFdWbzg3NlBQc2pQa2oyd3Zncm9NNWxMWktNRVRLVnFsL0N2bldWRmlGYS9TekpVUXdrb1pzcjY3WTZ2bFNSVjMvMnRtTlRPWTN2bmF4WXdNdW9QS3FkelIxdzdJcUh5bWxQeGFBVGhmVTdLbzJaWFlqNEFZSkhMK2tOZEt3UlFZRVNUUmE1ZnNVWi9yVkMxVE1UeVdWeVlvcU50dXphSHNNeXYydHZvYXJ4ZGZxd1lnVTFheEZvL2NucWwxRkdzcUsrdUFST1Y4Qlg0R1U4V2NaVEFUaTJxN1FjeWkwTzBWK0doV0JNTlJVa244SDFTc1dWRTVCeTNHaTBFQ3FVZUpvQmZBdERhNGFta2RYRzM3QUdQNUdnZWI4NHA3VWF6cG9LUnpkRnplUThIa29IR3hwckt5L0hwbTV0MTJwNDdKNnhUWURFejd1SU5FWFN1eFlYdkZza1lBYyt5U3hIOXNmNWZ0S3pVNklid1ZCY1VHZzVlNUZNQ0VYU0VyWlIwd0dheVYxOXdvTTlndVBqVHFKZFZUcVI0dUU0bkpuTGxkV1ZrRUNDWkxkMlZMRit4dGFtZXg3SXBpcmlTRFVwdnJwbjlscndHTUNIeXBwTUgrcHM2TElMc3VGR1VqMVhFT1hpcWJxU0hQVUtuQ2xwV1Y2OGtxdFVSVk5EWTRUTmFvY3lrb1llVFU1bmdHRVFhL1MxRG5uRTRBZVhNY0tqSFBBbUZWakNCRU5hZXlMVk5IZnIzcHg4eFVzdEo5NGhJcGZINEhLRS9lRGFBcks2bFN5VlZGYmR0MWd4VElWazNwcHBWbEZYaTRwRWhWQlRPYnF1b2hVODVNTFhuMWlhaHZVa0hKalNDTWMwMXRMRnZlVlZCeDBEb2RNNmpmdEN1N0RPdEl6WXhyYzBxcDFKR1AyYXlZRnoyR2I2SHZNck84Y25HdFY2R2ptM3VJbVNmRDJHcFdLNnVvd2JaR014RktRQ28xcE9NdGNNWEZwUnN0K2hYR29Bb21GM3NTVEJHZ1RnbGJCS1d3c1EzdFpxYVlTcDBaMUNpbVJEV0ZjQ0pVUFlKMDBCSTVGa0tZTm9pZnVReG1OODhTV1ZYV0xNYVVxcXFnQzBCbVFKUjZzazN1OU5DZjZqWUxYeEFmcXNZRWdWTEFoUlkyQXRndGZsWk5GbUZ5aHhkckxrQWRXbGs0RDg4TTJpeEh5ZXBJZGhNSHJHL2lSMVpHdHEwTUdwYkRiUlBZT1hlU1kxTTZOeTRac3R2R1NrdEsrWGJGUEFUajJEMzcxc2FQRXNBTVhoWHJzWjBrbS9YU3RraGhNeUJmc2E2dVhGWmUyVkNlK1lNcjErR0tnd3JReU5ZcTFWUnJCK0VpekFvdzZOc2ROS2N5VkVrWWVNNzN5czZxNGtBSHA2QmlGa2xUa0lyVkM1b1lWN3V6d09HQ3o0VUowU3RxMmxXTUp5NHd0YitSZXRMNnRaRmljbkptQnc1VWpDdlhYTVpWSlgyTVFrYmYrWE41RVdkNzhWejgvSkVzTVpUQmlLTnpzbTFpbkxSVVE3NEg0TmlkYXFJNjhqNXNBRmd4Y1J2ZUM3aWVMSlhmUVl4alpaMkNzaVdGZXdaWEptQklsWjF0ZHRyWDRoU3VhdGVLc28vUlpPdE9LVzJubXExb1R6ZUs2ZFJXQVd1Mk5SVmI0aHEwU1htMUd2dHVnSHJicjVJWHFtU2t0ZzVDdURFMk1TbFB3c1k1a05FMldwM0FxaVpiV1ZMQXhpQkYrMmlCWmJ1Tmo2TUI2cnNNTEM3Rnlhc2FZRHlvN0trb1B5RXR3M3BFTVhmUHZ4QUppMmpBUVFnanJ6MHJMSVpTV1psSW9OaHdkNXhLNEFSOW1ZTmpXQWFMcm51SW1KZUJWTjl6Qk9ST2JWdmJyK21UVGZGU0VKTFNSbkhvN2hFSm9JaThNRnFqeG12Z21GNVVSWno0ekxGZ1paOEN0dTJYN2dnVmNjS205Z1Z4SXNPSHF4WGdOTUtuRldaWW5mMWRCbk9oYXlYcTE3UXdGbFdXMDllTkt5VkpGbVhxYU9OR0E1YUNlZ01iSjNVVWtHWTFpYzNuS1dnanE4cWZWWUdRRzFnUnQ2cnM2MmE2SGlxcVVPcWRlc0s1Tm1YNG5Hb2ZKb2lFMWQwZEY5bFZWa3ZUMS9rRUVhYUNvWU93RnBjVmNvTE0rNzY2OVB4QzlyV3FrdEgwc1dVWWxkMFZDcHVCWi9zdFZSY0dneTlXWDIrVTFRdGhpOVN6QXFTeHpac3krT2lGekJZbnlTR1Y2R2t1NDRyRDhCQ09aQlYzQnZENStBS1JITndNRXNCNkV6SG5KcGtUQWVpVWxFR2tjRUNlQjZHRFpUcDVZRUpUbHZkcmtueFlqVGxsTWtmTnRYd0RqTTd1VmpLNUpYVVVuNDNycnFwSzJqeXRheEhXME01RzhEQzhydEhNWXM3S1NnZHVWUU1HVFlGcUZ2VlM2cmtEM3NESjQ2YWZkWUZ3b3ExMUFPS0NCTGh2d29VZ2M4SUdBTnljUjZrblpyZEpQZHN1eG55amZkM0ZvdlRsUk1kRWR0T2w1Q01WNUVIc1hRQmlzN1RPd3ZJRFphR2oyVm5wYmg3Y3BLNjNWd1lFTUx3cWJqenlsNjk5c2F3RkZrRjF5cWpVVTMxSGZDNnNXMVpGVkZ1WFZYVmd6OWtlRWF3MHlzMWxXZm0rYXpRQVFTV0EraEtZVmZzWmpQbmNBY1VCOW9JYXl5L1VaWFJOY2tER2ppNzdHc1didkJvNnRQcldQcU95VmtCVXErSU5lcXB6TmRZcy91MGlmaDVxbXBxSVcrMzNKVlNVY3dZNzBLTDRVOWxZZFU2bGp0U2xzN2xtZmk5ZzNZemVRZlZrYUdGYVYzT0RDbmFEMk44d3NFREZrbEUzUnpNM1pnaGRZa1dIc3N6cTcwRkllY25La1ZrdDhlek16UnE5YmtHdUtvalJMQlZTb2QzWTF5UHFLZ1lXN0pSUVRQVnl5NXhJWUxqT2d4Z1Q1MlJLSlVZMWRPcklpUmQ0ZnV0UXgvQTVBY1NtRWp6MHZGV3JrTHp2YldBdTlIT1diR2d4RmsxVk5UcG5CS2s2VGd3aXNJL0hjeFlYUDF1QVdPNzJVTEZsQlRxK2FTdTJWVFVzNmhyeE0yQ0YraEVvcjFWSUE5Wm1GVWFhYjFsU1NnWnNWczRzeHpIbFZMb0pIcjlINERoT05Ua0kxWEMwL3dpWTJOb1dBRzVSbG5IRm5xNm9MY2NwUWRkTXVKL08xN0pWQTVPSExpMEJxQ3p0cTdZMSsrdWNDZDk4cUxJOE1JSEJWL2NLanhRVG1lM2hGQlMzTXlDcW5Ec3V5bTJvODBIanZGRlR0clVSbU5hR0pzbVZhaEltalRzVVhLdFFaVEFWczdNdnY4LytmelVyWkFYY0xKNk00a29lNlhQMGI2U21XV05EenlVcFE4YmwrTHRXeDR0dXFaMzZjUllWM3l1VnhQTnd2SWlxaVFDU211N3NyZ1R6UjZua3locENhclh3RnkxdkdkNWlQMmNZMDZsRnI1TmpoaGcxWTYrTkIyOGZ0Yks4M3M4cmY3a0xKYkt3REZQYkxnMjVhMEFkWkpFaXFyNXBoaXhLTURsUlV0Y3NzcTFocmlMcUdvSCt6ZU5nVm05T2VtanNFVFY4SmRGME5IbmtJRnhXWTFPQjRZcnA3cnRXSjdOZ0FBQVBYa2xFUVZRM29OczVucGx5VmY4dTJGb0x1MUpySHZlYVpXUWpxQWtzaHRGYTJnenNTRzNacGtidmczSGFmRjlzbFBQbGxkakZsSzgwR3lzbThNcjRNUGhuZU5XRU5QR2pBSXBtaWxUUEFUZFRSVFhsQ0JZSFlBUXVQd0EzNnhJcFd0R040cTNZMk1oaUdzVXB1U1NubEVKUkQ4UG9yQzdDRllWdytGNTFxVGhnYWJ4c1R4V3pDR1kwWlNzYjNsZnFBeTBPUE5qTnk4eGlRUUtzSFlGUTJIQlpWdlZiQnVxM20xb1dLYWpxYW9uc002dVpVcjZDalhXTlowbDVFM2gzalVSbWE2a1AzTUpJaXkxTG0ra2FoUXE0MU4yaVpqYTVzanRsTFlOWkhackg2cVVHbTR2TWJEcDZSdzJDRm12dXlGa3JCY0N5TXRGcUJhRUNtc0hvSzlCWjJMQS9sSmNScVNhRHFuYVdiclpkR2F6M0RMZ0l2QmxuNHdvR3p0YnlKR3FzbHd4a2hoSHJUalRZRlhDdE9vS1M4dUxkb2ZWZEFiT3lsR1U2bmxZcFhXWnRzNG5YQnE2V3hKaXRNTm9rSFVKbmJuSnBsUW0rYUdwWTJhNUdNVjJRRDFoUnViQlBGS2R1bWY1T0hrTEh6MEY5bHVFNWtqQmpSYTBuRkU1Q1VHcUh3MzJNbWpaNnhrZ0lOVm5TbloxVlpTdEsycUtsUmFMbFFnSzd1VHE3SkZYSndNKzNTT0VLeWhaTkkrdEowSTVxTVl5OWsycUpEN2RWV2RxS1hhMENLTlIwQ2NqZytCMklZdTJmY0JaSlprTUZnTTExcjBYOTJ3aWxnaEZHZ3pWbmV4bHFCN3hMOW1TMjlTaVlVVlkyblhPWmpOQlJzeURzUVBSV1c1aHJaNFhjZEM0SFZXUmJqZ0pyNHNGb2ZLNVN6alE3cmhJMVVlYmRQZEViajZzcUl2VFpRWjV2YTA4ckFCc0FXMFV4ZVd5dEFrN0EyS0o5WnB4ekNpb0IyNFhGdFlBZVhZeHI2YW5TcWhMZ3BwRXFXYkd3THVuVGdyVitJaldsTDI5bGphQWw0RVFNR3NFcnA0YXBlWmlxdXdSWExYQXFPQ2VydTMybW15ZGM2b1dUU1dwRkFHZHplVEI4UlRIVk1FdGxNOTBDYmJRQ1loUGpxM2VnWXIxRkdkWUlRaml1REdaNXpaL0F6b2JLR095THh0aTZjNFJ3dHYyYW55V2xMSUNubExoeEpSWHQ2QTVlYkRCV0ZOT05ieFdaMmQwMm1udTRTOVlFQ3BlcHBWMXpTV1JCV3hIWXpWSXYxQ1hTb3V3cXFYM2pCQkJEWmRZUWJwVFFXNFpRbFM4cjVrSDRzdVNSbWcyKyszSk4xMHgxUGFBbUVrbXRZbEVkZUdwSkVNNmtPdUNxQ1IyMm9TdWpqNUlWMkhkVDB6ajVwckxLVGpYRkFQamRRbHlxN3hJQnhBUVA1eU1jekc0VnhBS3cwbjZpbFoyUUJjZTJwTHVsa3V4eHFub0l6RmZncXlxamlsOVMxVk53QnJGbWV5ZW9wczh5T2paVXliWmRmUzhDdWFUSUp1bXpzNXRPRGFOdExwRkRRL1BjSkd3ZUxobWVMMW5CMEtxaVVEU2NzaVVWRDg5RGkzSHRyS3RTVUx3M1JMaXlnWkQrN3NGOEpUT2JnWXNyR3ZETlVGUkdsMWl5MExsMVlrVWMyYUpZTW9nOTIwSThxVzZZRENnMU1xazBKSEpGS1hrYmdiUnJlSStxcFlOT1pIclZjRFViYTdwanNwaFNKTnRLNnVwZ1JOQVZvT1MwbXVnQmVONGJJWmdIaHVQWi9zMUVOYVg2S3NWcitZTnJoMU5iN2lwUjBQRTV6Yk5SZWdDYnJIUlV3NllmMDdkTEJKbDFmOEtCOWFzMlYxbk5xQXNsNjJMQkJoZWh3YWxlcmtIbUIxSkZJRVpLU0V1c2RsNUpRajFuSmxIWFNDRjM0MmdKOUNZR3JYZWxrbkpJWHFWUDhzRCtxdHBsQ1IzWEgycWZLcTB5Z01wK0tuVmtLeE5sWjhtMllrSWxWTWlDblhVd2w3cXpuQktTdlF6M20zUHQ2b1FiWE81YjVGaXhDaC9mSHhVUVcvQUVjSzZ6Q05xS1FuTDlzeXdxbUt1d3ZxU1l6VC9hUFZOTnBWeWh2UlcyMWFxY2lDc2pkV3ZCd0lMVXZoNVZ5Q3piV29DMXBKako2ODBDV3NsK3VkS0I2VDVSd0cxbWxvaG5scGJnNDdpejVVOWhhMEZHdG1STEZZQnRPOTl5OTdBcDB6K1pEVEFvZzZrU0xac01IZy9JRmtrZ3A2Q3B2VTJVMGNZVlNkbm1randCZE9tWGJ4VFdOV3p1SWJpcE1pb1Z4RWNrWkVvYWhTT2l5Mk0zSzBqY0MxTGhWRHdhcUcwWnZrY1dxQ25yRzRHSXh5a3JxbGJXZHc2TFF5QmFaUjhIbUxSSWhRV3NIc3dENDJaWFZMTmtmOWwrRmxXMEhWUTJsd0ZzQy9aMUZkemxRUjBLYVBmbytGZGZ1Ky9kd1ZSSUN1MUNHUjdBRUlpQWhjK0FaVUYwa09CYVB4bVVxZzRpNjR2UW5VNG5GRFlKOU56KzFmVlh2ZUg5cW1yK2tQSUx4OG9LY1JWL0JGYnhiRTBKTVQwa1NENHc2TC9sTlk4b2NzcWFnVmRVM0EzTWp4aHhjR3VxenNQSDRpcnBhb3cxcTZPeXJWanZwOU5wYzU5RTkxTGxkYm9ZVnpKV2RpbVdmQVcyU05FS2NEYVgyRm1CTExBL3VLeGxtaGg2MTNJczFVUlFBcGJLZnR0d3hMMDJxNk9ueDVwUXhTYlBvakFnK3Y1aEFuTjZMSFZSRFhJc3ZLdFJqaVMwcUpVeVpUQVhWYkFLODJFbEZKV2FRZFZvcVVDMVVudDdCVmFUUXVkTTZTdXFleGpRSk40KzBpY2F4di91dGJLdjgzRVRiVDhIOGdqY09LeE9KbWJVYTZPT1ZYaHQzZEZZNnJIdjlYb056RkxjZUVBMW84K3BLbTBMQUhQSFoycllLakZxMGhmWkZpeHNxSEpnRDNlRDVuK1Uwa2IxbUZqWGtuMmx2TVNTT3NORS9DZElBS0YwU3l0cTZ1ck9IVU41Z3dnNEdab3NnYm1nZ001dWNyYTJxclMySWcxY2JpQkJjeFl6Z3pVRE5MQ3ZMOEdiWlhOcDZPUnkzTG1TK0trODN6UklBSzZBMWlvS2EySTlOYXBJdWlVRmRmQzk3NjZQRlpVdHFVcjZLYldrK3paVTFhL1pySVhFenRyalRPZno3aHdLemlDZVhJYXJhSHRiWklNeisycEdnYXpDbXc0cVdBRnZFZGhvZFlwMFhxMHBWN0cxWVdZV2JPNHFoR3E0MitaOEJZdHJMV3ZsdU5QcFpBZWFGRlMxdnViUGdiZ3hzcWNwbkFhc3pCb3ZLYUZvRFE4Qkd0amZVT2w0TkFHMm5tUVYwNGZlSmd1bXZYMmZzclFFV1pnaEwwSm5WZFlrbjNET1pJZVJOODZScVBXQ21zdkdWcUVNUm53eFFBeHdTOEVNWW8zSXptWTIrQkNjTHA0TUtpdXl1aEltYW1sYlpGY05vTmw3dHArUkhkMThaalFJUkt5WGRGUmhOOTgvaHlLcXdYV05vN08xd2lhWG9ITjEwOFJFWlpXRXE2Z3JuSWZqemVnOGpkUmYxWEVMNGtrWGE1YkJqS3hvS2FsakJqZUhsVnhRNEdheWNwVzRsRE9BS3RuVHhIQXRPZnpPdFp3SEFNN3NxVlhrVjZ5dTZrYXAxbkhrWEtxV0YvNFhIcWplbk5LcUJqcFIzbDFjaDNFamcxK0VzZ2RRaHNkRzBCNEZNOXNXQVZXcHVBeWl3VFBsZVp4dDlWeVpWUzJxWGZSZVdxVEFpbHByOUFwb1dUanh5bWl0N053VjRKVHJpWnlPQTlCMGs3SEZmVUxvdXJtS1lIVm5SUXZxR0w1SE1IZHFGY1IycVdwbWNLNmVUd3gyZGlwV3J2aURpbHIrZktXcTNPV1JXZEhLd0E0ZXU4d2pjaGJlUnpGaWxxampaTjN1ZkNwZmtKMC9zY1ZwbllrNkwwUEk3N2x4ZFdDWjg3V2lXbTdCL0FHcXVRU251akdLc0I4Q0ptaUpxOHExcEtJVld5cU9pVEs2NnIxOEJOOHI3NC9BRTcxZmRDM3lQUzJNeGRPcG5FMXRsVnhEOUptVk9vZ2dOK3I0UGpBWFZGUGEzRWc1alZKR0ZWVUdOb2xIMjBHVnJVQjdCT3lTV3E2V3FZUWRXUjkycGNGTVlNd2NrYlNnQ0tDcUQ2N0RpaVd1MWc4TVFDOUJ5ZmNGcVcxTCtqTDcxNHFOQ3V6bm9TeHQwZGEyZ3RXTjFHOEYwQkswTk4wbnVpbWVsVUY5ZElkQWZqTzQ0VVQzQ2pRTG9VZUxISkZUTzNnbXBSdUlJT3Z3QlFDYnFOZW8zcXRaOWlGNnhWSzEzR1JsbzR6cWltcStDR2RUaVIxdVJZOG9xZ0UwMmhaQmE3OWtaWFBNcXV4UkhLbGEyc2FaV040bVJxWlVqMHZMQ0toa2pLbnFPUUhOdVNaVkpvS3ZBcVMxd3BFcXV2V0RDMUIyeXB3ckNQc1JNRVBWVE9ETUxKTUR2NnFlS1h3aTJKWVY1U3E0cUt5dmdHc0hDTGl1ajJqUjU5VjhnTXFTSjJGSlpSWEVIVlJIajNzRlByY3Q2T3BxbFcxR3BhdFFkdDBHdndmTTZuNjNJbnNHVkZoSkdhQnFncXFJVjZJc1hsbFpneVNQcTRSM2JudDN3aTVjditjTjJ5cVFMVzFUOTVLWVZzV1d0S2s0Y0I5VzUzV1FRZmxRWVI2V2w0SGFKWmp2VkUwRDV5dnErUktnWkNzNXFkQkVQNXNEOTRjQXZRTGxTZ05hU01BdEh4ODhCdU5RNDF6ZEZzWDMwektiY3MwTUxEL2loa3BRemwwd2lUcUtMVGZiS21DbXlZSUNuSzBJYmFpZUM0Q0c5aVN5TFE3Y0lNR1F3YXU2VEtvcTYwQXBsM1dONDBMWnBjYTFDS0tLOVZReXlJRW44dzBGOEY2Q0wyaDhvM2l4R3dDN3M3RVd6Q09xbWNBcFl4WUQ0anNBelZTMHNsMnQ5OHBBN3ZyS29waENWU29uYllwZ0g2bXZTbjI0cFRCVjRzZHRWM0J0TXE1azgyeStJQUR2VUowdUFsa0NWVHhJYVBtK1VOdS9xa1Y0RjFUekhYQ0dyWElBcUl0Qkt5cHFLOTlWdEFPVnM2NE80T2JYN3BITFZDcFlIY1Jtd3ZMUjdUdllBS0JCTjU4TEdWekR1RnoraFFiV2duY1F5Q1pBaytWYnNQU291ZjkzMjYxaVpnbWZDcHdSYkF2cW1TcXJpVTJQd2hqYW9PeVlxdEllZ1ZYVmlUc215dGE2Ykd5U3BZM2d5UnJwSXlBZWFXRER4dHBzWHdLeWFsTURLTlA3WUJYTXFFc2tVc2kydUM4Rk5BUHhBS1RWZlQxbzZWek0wRTBqRisxcldjVXVIdmR5Zzd2Z29GcGxYOEhwdkhwTUNPTVJVUEh6WmtJbnNxbEZLTlgvRUlPNTJFMFN4U3pPd29iMlZtUkxXNUQxWElVMHJiZ00xQXpXZ3lDN2ZlOEc3eFVBSy90YUVCYXQ3bHVxdHlQN0Vtc2FKUU9qNUYrbXJuWmZDdVlDZkJVQVd3U2h5ZDZwTVkvdkFIRzFVcU9ZcGJJL2d5NVQwQ01LbStVTzNnRnVDODVkZ2ZEVmVndVBEZklUcklCTHNMcmNnZGgzQ0ZnRlpqYUtKNEl2M0Y4QU5FcXZ1eFIxdFZLT2dMb0NhMWp4Ym9CQWtqNnY3ai9pY0ZiQTdmNHJmUm5RRExSVmlHMTNpMHZxQlFyWVZxQmJBRFpUMFpwaUhvU3p2UXBvcEtJRlMzc0UxSGZCV2xIWGQwSDdMbkFycXZvdWdNdGxqSEJnWm5oM0Vvei9CS2pMTUw0WjJBcTAraEVKcjlqYVZVQmJ2TnpDSVVpcm9DN0FXbW1GdzRvNUFLM010QjVWeXBaTVNGZ3MwNUp5R1Z3bHdCcXNFR0FBYTJaVTFDalVleFhHc0U0cktyaWlsQnZGek9LS28zQXVBcm9FNlFGUVUzdThZcE5Yd1M1aysxVFp0NVVyd291TjRLaVVFdytrM1pXRHAxUlhITlJxWGIyMVRzMzk5NDV5WlNnM1ZuWkZOUTlDRjNYZVp5cjVEZ0JYS2l3Q01hMk14ZVREWVhnUDFGc2Y5UU5LWmMwazgxUkprM3I2RVEzckNtQlZ5TEw3NUVqWjFwSVZESG9GdGlPQUhvQjBCZFRWeWxxQnNLS0tTK0FlQlhKVkxZK0NYQVN1R3ZPL0F1cTdHdUVqRGZHS2cxb0thMXovZG1taTlJOVNVR05obDBBdGZ1bEhBYXdvWXJuU2ttTlhBVnVHRWhyRVZYdlVGK0E1Q3QyUHFOT2pEZXR5bmE0Q21lVW9sbWVYTE40QXE3QzVTajEwUTd5amdsK3Q2Q054U1JIbUk1WCtDcHdyZVlCM1FmZHFuYTRxMjFLZEJ1YzRHb1pzbjQ5Wk9PaVZpbndIcUs5V3pqdmdld2VFaDJBVTUrdnR4WjlDZDlXcWtoNDlWMThFNW9qNnZWeW4wUlN0QXlHSU81ZWRYUktkNUIwVkdWWHEyeXIzeFlwKzVVdCtDNFFKNFAxTjMzOXBRTWpSZWpqNHZiL0RjcjZyUWMzTy8wcmptdFpwZVlDQmlDSGZDZW1SYk5oYksvcE5VUGMzd2ZLeTVmMkQ3T2xMMy91UGh2ZS9vVTRUMEY4ZitWTk0ydnlvaXYwaksrS0hRZmRIcSswYm5jejRvejczLytZNkxiS3cxby81QjdlT2YxUmwvMGR1OUI5dG4vOWJ2cmYvait2MGg2dHRuMnRwL3IvNDgxOXk0L3p2NTM5MXV2enpmd0RpZno2cGhUMU1QZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuLnBvaW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1JTtcbiAgICBsZWZ0OiA5MCU7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIG1hcmdpbjogLTZweCAwIDAgLTZweDtcbn0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 4127:
/*!*****************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/sketch-picker/sketch-picker.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SketchPickerComponent": () => (/* binding */ SketchPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/control.class */ 4402);
/* harmony import */ var _helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../helpers/helper.functions */ 3583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parts/saturation/saturation.component */ 2945);
/* harmony import */ var _parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parts/indicator/indicator.component */ 5128);
/* harmony import */ var _parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/hue/hue.component */ 114);
/* harmony import */ var _parts_alpha_alpha_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parts/alpha/alpha.component */ 5210);
/* harmony import */ var _parts_inputs_rgba_input_rgba_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/inputs/rgba-input/rgba-input.component */ 3516);
/* harmony import */ var _parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/inputs/hex-input/hex-input.component */ 3005);
/* harmony import */ var _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/color-presets/color-presets.component */ 5004);












function SketchPickerComponent_alpha_component_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "alpha-component", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("colorChange", function SketchPickerComponent_alpha_component_6_Template_alpha_component_colorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.control.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r0.control.value);
} }
function SketchPickerComponent_color_presets_component_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "color-presets-component", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("colorChange", function SketchPickerComponent_color_presets_component_16_Template_color_presets_component_colorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.control.value = $event); })("hueChange", function SketchPickerComponent_color_presets_component_16_Template_color_presets_component_hueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.control.hue = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r1.control.value)("colorPresets", ctx_r1.control.presets)("hue", ctx_r1.control.hue);
} }
const _c0 = [[["", "before", ""]], "*"];
const _c1 = ["[before]", "*"];
class SketchPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter(false);
        this.subscriptions = [];
    }
    ngOnInit() {
        if (!this.control) {
            this.control = new _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl();
        }
        if (this.color) {
            this.control.setValueFrom(this.color);
        }
        if (!this.control.hasPresets()) {
            /**
             * set color presets
             * defined by sketch color picker component
             */
            this.control
                .setColorPresets([
                '#d0041b', '#8b572a', '#f5a623', '#f8e71c', '#7ed321', '#417506', '#bd10e0', '#9013fe',
                '#4a90e2', '#50e3c2', '#b8e986', '#030303', '#4a4a4a', '#9b9b9b', '#fff'
            ]);
        }
        this.subscriptions.push(this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            this.colorChange.emit((0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(value, this.control.initType));
        }));
    }
    ngOnDestroy() {
        this.cdr.detach();
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    ngOnChanges(changes) {
        if (this.color && this.control && (0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(this.control.value, this.control.initType) !== this.color) {
            this.control.setValueFrom(this.color);
        }
    }
}
SketchPickerComponent.ɵfac = function SketchPickerComponent_Factory(t) { return new (t || SketchPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef)); };
SketchPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SketchPickerComponent, selectors: [["sketch-picker"]], inputs: { color: "color", control: "control" }, outputs: { colorChange: "colorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 19, vars: 18, consts: [[3, "hue", "color", "colorChange"], [1, "controls"], [1, "controls-row", "hue-alpha"], [1, "column"], [3, "hue", "color", "hueChange", "colorChange"], [3, "color", "colorChange", 4, "ngIf"], [1, "column", "indicator-column"], ["colorType", "rgba", 3, "color"], [1, "controls-row", "presentation"], ["label", "", 3, "color", "hue", "colorChange", "hueChange"], ["label", "", 3, "alpha", "color", "hue", "colorChange", "hueChange"], [3, "color", "colorPresets", "hue", "colorChange", "hueChange", 4, "ngIf"], [3, "color", "colorChange"], [3, "color", "colorPresets", "hue", "colorChange", "hueChange"]], template: function SketchPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "saturation-component", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("colorChange", function SketchPickerComponent_Template_saturation_component_colorChange_1_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "hue-component", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("hueChange", function SketchPickerComponent_Template_hue_component_hueChange_5_listener($event) { return ctx.control.hue = $event; })("colorChange", function SketchPickerComponent_Template_hue_component_colorChange_5_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, SketchPickerComponent_alpha_component_6_Template, 1, 1, "alpha-component", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "indicator-component", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8)(11, "div", 3)(12, "hex-input-component", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("colorChange", function SketchPickerComponent_Template_hex_input_component_colorChange_12_listener($event) { return ctx.control.value = $event; })("hueChange", function SketchPickerComponent_Template_hex_input_component_hueChange_12_listener($event) { return ctx.control.hue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 3)(14, "rgba-input-component", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("colorChange", function SketchPickerComponent_Template_rgba_input_component_colorChange_14_listener($event) { return ctx.control.value = $event; })("hueChange", function SketchPickerComponent_Template_rgba_input_component_hueChange_14_listener($event) { return ctx.control.hue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, SketchPickerComponent_color_presets_component_16_Template, 1, 3, "color-presets-component", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](18, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hue", ctx.control.hue)("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hue", ctx.control.hue)("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 12, ctx.control.alphaChannelVisibilityChanges));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx.control.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx.control.value)("hue", ctx.control.hue);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("alpha", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 14, ctx.control.alphaChannelVisibilityChanges))("color", ctx.control.value)("hue", ctx.control.hue);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 16, ctx.control.presetsVisibilityChanges));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _parts_saturation_saturation_component__WEBPACK_IMPORTED_MODULE_2__.SaturationComponent, _parts_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_3__.IndicatorComponent, _parts_hue_hue_component__WEBPACK_IMPORTED_MODULE_4__.HueComponent, _parts_alpha_alpha_component__WEBPACK_IMPORTED_MODULE_5__.AlphaComponent, _parts_inputs_rgba_input_rgba_input_component__WEBPACK_IMPORTED_MODULE_6__.RgbaComponent, _parts_inputs_hex_input_hex_input_component__WEBPACK_IMPORTED_MODULE_7__.HexComponent, _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_8__.ColorPresetsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "[_nghost-%COMP%] {\n  display: block;\n  padding: 9px;\n  width: 220px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 1px 4px;\n}\n\nsaturation-component[_ngcontent-%COMP%] {\n  height: 146px;\n  border-radius: 2px;\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 0px 2px;\n}\n\nsaturation-component[_ngcontent-%COMP%]     .pointer {\n  border-width: 2px;\n  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 2px;\n  width: 10px;\n  height: 10px;\n}\n\n.controls[_ngcontent-%COMP%] {\n  padding: 4px 0 0;\n}\n\nhue-component[_ngcontent-%COMP%], alpha-component[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 2px;\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 0px 2px;\n}\n\nhue-component[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n\n.controls-row[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n\n.column[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.indicator-column[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\nindicator-component[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 100%;\n  box-shadow: inset rgba(0, 0, 0, 0.6) 0px 0px 2px;\n  border-radius: 2px;\n}\n\ncolor-presets-component[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e0;\n  padding: 10px 9px 0;\n  margin: 8px -9px 0;\n}\n\ncolor-presets-component[_ngcontent-%COMP%]     .presets-row {\n  padding: 10px 0 0;\n}\n\n[_nghost-%COMP%]   indicator-component[_ngcontent-%COMP%]     svg {\n  vertical-align: 5%;\n}\n\n.controls-row.hue-alpha[_ngcontent-%COMP%] {\n  padding-bottom: 9px;\n}\n\n.controls-row.hue-alpha[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child {\n  padding-right: 5px;\n}\n\n.hue-alpha[_ngcontent-%COMP%]     .pointer {\n  width: 6px;\n  margin: 0 0 0 -3px;\n  height: 100%;\n  top: 0;\n  border-radius: 2px;\n  border: 1px solid #898989;\n}\n\n.presentation[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child {\n  width: 56px;\n}\n\n.presentation[_ngcontent-%COMP%]     input {\n  height: 20px;\n  font-size: 11px;\n}\n\n[_nghost-%COMP%]     .reflection, [_nghost-%COMP%]     color-preset {\n  height: 16px;\n  width: 16px;\n  border-radius: 2px;\n}\n\n[_nghost-%COMP%]     color-preset {\n  box-shadow: inset rgba(0, 0, 0, 0.4) 0px 0px 2px;\n}\n\n[_nghost-%COMP%]     color-preset.selected {\n  box-shadow: inset rgba(0, 0, 0, 0.4) 0px 1px 4px;\n}\n\n[_nghost-%COMP%]     .presets-row > color-preset, [_nghost-%COMP%]     .presets-row > color-preset-sublist {\n  margin: 0 0 0 10px;\n}\n\n[_nghost-%COMP%]     .presets-row > color-preset:first-child, [_nghost-%COMP%]     .presets-row > color-preset-sublist:first-child {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNrZXRjaC1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7O0VBRUksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7O0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0RBQUE7QUFDSjs7QUFFQTtFQUNJLGdEQUFBO0FBQ0o7O0FBRUE7O0VBRUksa0JBQUE7QUFDSjs7QUFFQTs7RUFFSSxTQUFBO0FBQ0oiLCJmaWxlIjoic2tldGNoLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMHB4IDJweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggNHB4O1xufVxuXG5zYXR1cmF0aW9uLWNvbXBvbmVudCB7XG4gICAgaGVpZ2h0OiAxNDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjYpIDBweCAwcHggMnB4O1xufVxuXG5zYXR1cmF0aW9uLWNvbXBvbmVudCA6Om5nLWRlZXAgLnBvaW50ZXIge1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC42KSAwcHggMHB4IDJweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5jb250cm9scyB7XG4gICAgcGFkZGluZzogNHB4IDAgMDtcbn1cblxuaHVlLWNvbXBvbmVudCxcbmFscGhhLWNvbXBvbmVudCB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuNikgMHB4IDBweCAycHg7XG59XG5cbmh1ZS1jb21wb25lbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmNvbnRyb2xzLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2x1bW4ge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmluZGljYXRvci1jb2x1bW4ge1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG5pbmRpY2F0b3ItY29tcG9uZW50IHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjYpIDBweCAwcHggMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuY29sb3ItcHJlc2V0cy1jb21wb25lbnQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIHBhZGRpbmc6IDEwcHggOXB4IDA7XG4gICAgbWFyZ2luOiA4cHggLTlweCAwO1xufVxuXG5jb2xvci1wcmVzZXRzLWNvbXBvbmVudCA6Om5nLWRlZXAgLnByZXNldHMtcm93IHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMDtcbn1cblxuOmhvc3QgaW5kaWNhdG9yLWNvbXBvbmVudCA6Om5nLWRlZXAgc3ZnIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogNSU7XG59XG5cbi5jb250cm9scy1yb3cuaHVlLWFscGhhIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xufVxuXG4uY29udHJvbHMtcm93Lmh1ZS1hbHBoYSAuY29sdW1uOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5odWUtYWxwaGEgOjpuZy1kZWVwIC5wb2ludGVyIHtcbiAgICB3aWR0aDogNnB4O1xuICAgIG1hcmdpbjogMCAwIDAgLTNweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODk4OTg5O1xufVxuXG4ucHJlc2VudGF0aW9uIC5jb2x1bW46Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiA1NnB4O1xufVxuXG4ucHJlc2VudGF0aW9uIDo6bmctZGVlcCBpbnB1dCB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5yZWZsZWN0aW9uLFxuOmhvc3QgOjpuZy1kZWVwIGNvbG9yLXByZXNldCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGNvbG9yLXByZXNldCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAwcHggMnB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgY29sb3ItcHJlc2V0LnNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDFweCA0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucHJlc2V0cy1yb3cgPiBjb2xvci1wcmVzZXQsXG46aG9zdCA6Om5nLWRlZXAgLnByZXNldHMtcm93ID4gY29sb3ItcHJlc2V0LXN1Ymxpc3Qge1xuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5wcmVzZXRzLXJvdyA+IGNvbG9yLXByZXNldDpmaXJzdC1jaGlsZCxcbjpob3N0IDo6bmctZGVlcCAucHJlc2V0cy1yb3cgPiBjb2xvci1wcmVzZXQtc3VibGlzdDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 304:
/*!*********************************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/components/swatches-picker/swatches-picker.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwatchesPickerComponent": () => (/* binding */ SwatchesPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/control.class */ 4402);
/* harmony import */ var _helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../helpers/helper.functions */ 3583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parts/color-presets/color-presets.component */ 5004);






function SwatchesPickerComponent_color_presets_component_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "color-presets-component", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("colorChange", function SwatchesPickerComponent_color_presets_component_2_Template_color_presets_component_colorChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.childControl.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", 7)("color", ctx_r0.childControl.value)("colorPresets", ctx_r0.childControl.presets);
} }
const _c0 = [[["", "before", ""]], "*"];
const _c1 = ["[before]", "*"];
class SwatchesPickerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(false);
        this.control = new _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl();
        this.childControl = new _helpers_control_class__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl();
        this.subscriptions = [];
        this.mapColors = {
            '#E6315B': [
                '#fc8da7', '#fa7d9a', '#f56484', '#f04a71', '#e82c58', '#e31746', '#de0235',
                '#d60234', '#d10232', '#c70230', '#b8022c', '#ab0229', '#9c0225', '#8f0122',
                '#8c0122', '#82011f', '#78011b', '#690117', '#5c0012', '#4f0010', '#42000c'
            ],
            '#793183': [
                '#ef8dfc', '#eb7dfa', '#e664f5', '#dc4af0', '#d22ce8', '#cb17e3', '#c402de',
                '#c002d9', '#bb02d4', '#b002c7', '#a202b8', '#9702ab', '#8a029c', '#7e018f',
                '#7a018a', '#730182', '#6c0178', '#5e0169', '#54015c', '#49014f', '#3d0142'
            ],
            '#009DE7': [
                '#8dd9fc', '#7dd2fa', '#64c7f5', '#4abbf0', '#2cade8', '#17a2e3', '#0298de',
                '#0295d9', '#0291d4', '#0289c7', '#027eb8', '#0275ab', '#026b9c', '#01628f',
                '#015f8a', '#015982', '#015278', '#014869', '#013f5c', '#01364f', '#012e42'
            ],
            '#00B59C': [
                '#8dfeea', '#7dfbe4', '#63f4db', '#4befd2', '#2de7c6', '#16e2be', '#03deb7',
                '#01ddb6', '#01d4ae', '#01c7a4', '#01b897', '#01aa8b', '#019b80', '#019076',
                '#018c73', '#01836c', '#017763', '#016857', '#005c4e', '#005044', '#004239'
            ],
            '#FFCE00': [
                '#fce68d', '#fae17d', '#f5da64', '#f0cf4a', '#e8c22c', '#e5bc17', '#deb202',
                '#deb100', '#d4aa02', '#c7a002', '#b89302', '#ab8902', '#9c7d02', '#8f7301',
                '#8c7001', '#826801', '#786201', '#695601', '#5c4b00', '#4f4100', '#423700'
            ],
            '#FF4A21': [
                '#fca28d', '#fa947d', '#f57f64', '#f0694a', '#e84f2c', '#e33c17', '#de2a02',
                '#d92a02', '#d42902', '#c72602', '#b82302', '#ab2102', '#9c1e02', '#8f1b01',
                '#8a1a01', '#821901', '#781701', '#691300', '#5c1100', '#4f0e00', '#420c00'
            ],
            '#D6D5D6': [
                '#fff', '#f2f2f2', '#e5e5e5', '#d9d9d9', '#cccccc', '#bfbfbf', '#b3b3b3',
                '#a6a6a6', '#999999', '#8c8c8c', '#808080', '#737373', '#666666', '#595959',
                '#4d4d4d', '#424242', '#363636', '#262626', '#1a1a1a', '#0f0f0f', '#000'
            ]
        };
    }
    ngOnInit() {
        if (this.color) {
            this.childControl.setValueFrom(this.color);
        }
        else {
            this.control.setValueFrom('#E6315B');
        }
        /**
         * set color presets
         * defined by swatches color picker component
         */
        this.control.setColorPresets([
            '#e6315b', '#793183', '#009de7', '#00b59c', '#ffce00', '#ff4a21', '#d6d5d6'
        ]);
        /**
         * initially open first group
         */
        this.childControl.setColorPresets(this.mapColors['#E6315B']);
        this.subscriptions.push(this.childControl.valueChanges.subscribe((value) => {
            this.colorChange.emit((0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(value, this.childControl.initType));
        }));
        this.subscriptions.push(this.control.valueChanges.subscribe((value) => {
            this.cdr.markForCheck();
            const presets = this.mapColors[value.toHexString()];
            if (presets) {
                this.childControl.setColorPresets(presets);
            }
            this.colorChange.emit((0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(this.childControl.value, this.childControl.initType));
        }));
    }
    ngOnDestroy() {
        this.cdr.detach();
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    ngOnChanges(changes) {
        if (this.color && this.control && (0,_helpers_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getValueByType)(this.control.value, this.control.initType) !== this.color) {
            this.childControl.setValueFrom(this.color);
        }
    }
}
SwatchesPickerComponent.ɵfac = function SwatchesPickerComponent_Factory(t) { return new (t || SwatchesPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
SwatchesPickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SwatchesPickerComponent, selectors: [["swatches-picker"]], inputs: { color: "color" }, outputs: { colorChange: "colorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 4, vars: 4, consts: [["direction", "down", 3, "columns", "color", "colorPresets", "colorChange"], ["class", "child-list", "direction", "down", 3, "columns", "color", "colorPresets", "colorChange", 4, "ngIf"], ["direction", "down", 1, "child-list", 3, "columns", "color", "colorPresets", "colorChange"]], template: function SwatchesPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "color-presets-component", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("colorChange", function SwatchesPickerComponent_Template_color_presets_component_colorChange_1_listener($event) { return ctx.control.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SwatchesPickerComponent_color_presets_component_2_Template, 1, 3, "color-presets-component", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", 7)("color", ctx.control.value)("colorPresets", ctx.control.presets);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.childControl.presets.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _parts_color_presets_color_presets_component__WEBPACK_IMPORTED_MODULE_2__.ColorPresetsComponent], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]     * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2Uuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUdBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiYmFzZS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG46aG9zdCA6Om5nLWRlZXAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */", "@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: block;\n  background: #fff;\n  width: 224px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px;\n  border-radius: 4px;\n  padding: 6px;\n}\n[_nghost-%COMP%]     color-preset, [_nghost-%COMP%]     color-preset-sublist {\n  width: 30px;\n  height: 30px;\n}\n[_nghost-%COMP%]     color-preset:hover:after, [_nghost-%COMP%]     color-preset.selected:after {\n  display: block;\n  content: \"\u00A0\";\n  position: absolute;\n  left: 3px;\n  top: 3px;\n  bottom: 3px;\n  right: 3px;\n  z-index: 10;\n  border: 3px solid #fff;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px 2px;\n}\n[_nghost-%COMP%]     .presets-row:first-child color-preset:first-child, [_nghost-%COMP%]     .presets-row:first-child color-preset-sublist:first-child {\n  border-radius: 4px 0 0 4px;\n}\n[_nghost-%COMP%]     .presets-row.last color-preset.last, [_nghost-%COMP%]     .presets-row.last color-preset-sublist.last {\n  border-radius: 0 4px 4px 0;\n}\n[_nghost-%COMP%]     .child-list .presets-row.first color-preset.first, [_nghost-%COMP%]     .child-list .presets-row.first color-preset-sublist.first {\n  border-radius: 4px 0 0 0;\n}\n[_nghost-%COMP%]     .child-list .presets-row.first color-preset.last, [_nghost-%COMP%]     .child-list .presets-row.first color-preset-sublist.last {\n  border-radius: 0 4px 0 0;\n}\n[_nghost-%COMP%]     .child-list .presets-row.last color-preset.first, [_nghost-%COMP%]     .child-list .presets-row.last color-preset-sublist.first {\n  border-radius: 0 0 0 4px;\n}\n[_nghost-%COMP%]     .child-list .presets-row.last color-preset.last, [_nghost-%COMP%]     .child-list .presets-row.last color-preset-sublist.last {\n  border-radius: 0 0 4px 0;\n}\n[_nghost-%COMP%]     .child-list {\n  margin-top: 6px;\n  border-top: 1px solid #e5e5e5;\n  padding: 6px 0 0;\n}\n[_nghost-%COMP%]     .child-list color-preset:hover:after, [_nghost-%COMP%]     .child-list color-preset.selected:after {\n  content: \"\u2714\";\n  font-size: 18px;\n  color: #fff;\n  border: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  line-height: 30px;\n  box-shadow: none;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3YXRjaGVzLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0E7O0VBRUksV0FBQTtFQUNBLFlBQUE7QUFFSjtBQUNBOztFQUVJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7QUFFSjtBQUNBOztFQUVJLDBCQUFBO0FBRUo7QUFDQTs7RUFFSSwwQkFBQTtBQUVKO0FBQ0E7O0VBRUksd0JBQUE7QUFFSjtBQUNBOztFQUVJLHdCQUFBO0FBRUo7QUFDQTs7RUFFSSx3QkFBQTtBQUVKO0FBQ0E7O0VBRUksd0JBQUE7QUFFSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNBOztFQUVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoic3dhdGNoZXMtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDIyNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDBweCAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGNvbG9yLXByZXNldCxcbjpob3N0IDo6bmctZGVlcCBjb2xvci1wcmVzZXQtc3VibGlzdCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgY29sb3ItcHJlc2V0OmhvdmVyOmFmdGVyLFxuOmhvc3QgOjpuZy1kZWVwIGNvbG9yLXByZXNldC5zZWxlY3RlZDphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogJ1xcMEEwJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogM3B4O1xuICAgIHRvcDogM3B4O1xuICAgIGJvdHRvbTogM3B4O1xuICAgIHJpZ2h0OiAzcHg7XG4gICAgei1pbmRleDogMTA7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMCAwIDVweCAycHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucHJlc2V0cy1yb3c6Zmlyc3QtY2hpbGQgY29sb3ItcHJlc2V0OmZpcnN0LWNoaWxkLFxuOmhvc3QgOjpuZy1kZWVwIC5wcmVzZXRzLXJvdzpmaXJzdC1jaGlsZCBjb2xvci1wcmVzZXQtc3VibGlzdDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucHJlc2V0cy1yb3cubGFzdCBjb2xvci1wcmVzZXQubGFzdCxcbjpob3N0IDo6bmctZGVlcCAucHJlc2V0cy1yb3cubGFzdCBjb2xvci1wcmVzZXQtc3VibGlzdC5sYXN0IHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jaGlsZC1saXN0IC5wcmVzZXRzLXJvdy5maXJzdCBjb2xvci1wcmVzZXQuZmlyc3QsXG46aG9zdCA6Om5nLWRlZXAgLmNoaWxkLWxpc3QgLnByZXNldHMtcm93LmZpcnN0IGNvbG9yLXByZXNldC1zdWJsaXN0LmZpcnN0IHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2hpbGQtbGlzdCAucHJlc2V0cy1yb3cuZmlyc3QgY29sb3ItcHJlc2V0Lmxhc3QsXG46aG9zdCA6Om5nLWRlZXAgLmNoaWxkLWxpc3QgLnByZXNldHMtcm93LmZpcnN0IGNvbG9yLXByZXNldC1zdWJsaXN0Lmxhc3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDAgMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jaGlsZC1saXN0IC5wcmVzZXRzLXJvdy5sYXN0IGNvbG9yLXByZXNldC5maXJzdCxcbjpob3N0IDo6bmctZGVlcCAuY2hpbGQtbGlzdCAucHJlc2V0cy1yb3cubGFzdCBjb2xvci1wcmVzZXQtc3VibGlzdC5maXJzdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgNHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNoaWxkLWxpc3QgLnByZXNldHMtcm93Lmxhc3QgY29sb3ItcHJlc2V0Lmxhc3QsXG46aG9zdCA6Om5nLWRlZXAgLmNoaWxkLWxpc3QgLnByZXNldHMtcm93Lmxhc3QgY29sb3ItcHJlc2V0LXN1Ymxpc3QubGFzdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNoaWxkLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICBwYWRkaW5nOiA2cHggMCAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNoaWxkLWxpc3QgY29sb3ItcHJlc2V0OmhvdmVyOmFmdGVyLFxuOmhvc3QgOjpuZy1kZWVwIC5jaGlsZC1saXN0IGNvbG9yLXByZXNldC5zZWxlY3RlZDphZnRlciB7XG4gICAgY29udGVudDogJ1xcMjcxNCc7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 442:
/*!********************************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/directives/color-picker-input.directive.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPickerInputDirective": () => (/* binding */ ColorPickerInputDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class ColorPickerInputDirective {
    constructor() {
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    inputChanges(event) {
        const element = event.target || event.srcElement;
        const value = element.value;
        const numeric = parseFloat(value);
        if (!isNaN(numeric) && numeric >= parseInt(this.min, 10) &&
            numeric <= parseInt(this.max, 10)) {
            this.inputChange.emit(numeric);
        }
    }
}
ColorPickerInputDirective.ɵfac = function ColorPickerInputDirective_Factory(t) { return new (t || ColorPickerInputDirective)(); };
ColorPickerInputDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ColorPickerInputDirective, selectors: [["", "inputChange", ""]], hostBindings: function ColorPickerInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ColorPickerInputDirective_input_HostBindingHandler($event) { return ctx.inputChanges($event); });
    } }, inputs: { min: "min", max: "max" }, outputs: { inputChange: "inputChange" } });


/***/ }),

/***/ 9041:
/*!*****************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/helpers/base-color.class.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseColor": () => (/* binding */ BaseColor)
/* harmony export */ });
class BaseColor {
}


/***/ }),

/***/ 7598:
/*!***********************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/helpers/cmyk.class.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cmyk": () => (/* binding */ Cmyk)
/* harmony export */ });
/* harmony import */ var _base_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-color.class */ 9041);

/**
 * CMYK color space
 *
 * Cyan = ranges from 0 to 100%
 * Magenta = ranges from 0 to 100%
 * Yellow = ranges from 0 to 100%
 * blacK = ranges from 0 to 100%
 */
class Cmyk extends _base_color_class__WEBPACK_IMPORTED_MODULE_0__.BaseColor {
    constructor(cyan, magenta, yellow, black) {
        super();
        this.cyan = cyan;
        this.magenta = magenta;
        this.yellow = yellow;
        this.black = black;
    }
    toString() {
        return `cmyk(${this.getCyan()}%, ${this.getMagenta()}%, ${this.getYellow()}%, ${this.getBlack()}%)`;
    }
    getCyan() {
        return Math.round(this.cyan);
    }
    getMagenta() {
        return Math.round(this.magenta);
    }
    getYellow() {
        return Math.round(this.yellow);
    }
    getBlack() {
        return Math.round(this.black);
    }
}


/***/ }),

/***/ 9426:
/*!************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/helpers/color.class.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
/* harmony import */ var _cmyk_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmyk.class */ 7598);
/* harmony import */ var _hsla_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hsla.class */ 1925);
/* harmony import */ var _hsva_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsva.class */ 4853);
/* harmony import */ var _rgba_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rgba.class */ 2643);
/* harmony import */ var _colors_table_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors-table.class */ 1035);





class Color {
    constructor(colorString) {
        /**
         * base color used to calculate other
         * default color
         * rgb(255, 0, 0)
         * hsl(0, 100%, 50%)
         * #ff0000
         */
        this.hsva = new _hsva_class__WEBPACK_IMPORTED_MODULE_2__.Hsva(0, 1, 1, 1);
        this.rgba = new _rgba_class__WEBPACK_IMPORTED_MODULE_3__.Rgba(255, 0, 0, 1);
        if (colorString) {
            this.stringToColor(colorString);
        }
    }
    static from(color) {
        if (typeof color === 'string') {
            return new Color(color);
        }
        else if (color instanceof Color) {
            return color.clone();
        }
        else if (color instanceof _rgba_class__WEBPACK_IMPORTED_MODULE_3__.Rgba) {
            return new Color().setRgba(color.red, color.green, color.blue, color.alpha);
        }
        else if (color instanceof _hsva_class__WEBPACK_IMPORTED_MODULE_2__.Hsva) {
            return new Color().setHsva(color.hue, color.saturation, color.value, color.alpha);
        }
        else if (color instanceof _hsla_class__WEBPACK_IMPORTED_MODULE_1__.Hsla) {
            return new Color().setHsla(color.hue, color.saturation, color.lightness, color.alpha);
        }
        return null;
    }
    /**
     * make from existing color new color object
     */
    clone() {
        return Color.from(this.getRgba());
    }
    /**
     * define Color from hex, rgb, rgba, hsl, hsla or cmyk string
     */
    setFromString(color) {
        return this.stringToColor(color);
    }
    /**
     * define Color from HSV values
     */
    setHsva(hue = null, saturation = 100, brightness = 100, alpha = 1) {
        if (hue != null) {
            this.hsva.hue = hue;
        }
        if (saturation != null) {
            this.hsva.saturation = saturation;
        }
        if (brightness != null) {
            this.hsva.value = brightness;
        }
        if (alpha != null) {
            alpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
            this.hsva.alpha = alpha;
        }
        this.rgba = this.hsvaToRgba(this.hsva);
        return this;
    }
    /**
     * define Color from RGBa
     */
    setRgba(red = null, green = null, blue = null, alpha = 1) {
        if (red != null) {
            this.rgba.red = red;
        }
        if (green != null) {
            this.rgba.green = green;
        }
        if (blue != null) {
            this.rgba.blue = blue;
        }
        if (alpha != null) {
            alpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
            this.rgba.alpha = alpha;
        }
        this.hsva = this.rgbaToHsva(this.rgba);
        return this;
    }
    /**
     * define Color from HSLa
     */
    setHsla(hue, saturation, lightness, alpha = 1) {
        if (alpha != null) {
            alpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
            this.rgba.alpha = alpha;
        }
        const hsla = new _hsla_class__WEBPACK_IMPORTED_MODULE_1__.Hsla(hue, saturation, lightness, alpha);
        this.rgba = this.hslaToRgba(hsla);
        this.hsva = this.rgbaToHsva(this.rgba);
        return this;
    }
    /**
     * return hexadecimal value formatted as '#341d2a' or '#341d2aFF' if alhpa channel is enabled
     */
    toHexString(alpha = false) {
        /* tslint:disable:no-bitwise */
        let hex = '#' + ((1 << 24) | (this.rgba.getRed() << 16) | (this.rgba.getGreen() << 8) | this.rgba.getBlue()).toString(16).substr(1);
        if (alpha) {
            hex += ((1 << 8) | Math.round(this.rgba.alpha * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex.toUpperCase();
    }
    /**
     * return rgba string formatted as rgba(52, 29, 42, 1)
     */
    toRgbaString() {
        return this.rgba.toString();
    }
    /**
     * return rgb string formatted as rgb(52, 29, 42)
     */
    toRgbString() {
        return this.rgba.toString(false);
    }
    /**
     * return hsla string formatted as hsla(327, 29%, 16%, 1)
     */
    toHslaString() {
        return this.getHsla().toString();
    }
    /**
     * return hsl string formatted as hsl(327, 29%, 16%)
     */
    toHslString() {
        return this.getHsla().toString(false);
    }
    /**
     * return hsva string formatted as hsva(327, 29%, 16%, 100%)
     */
    toHsvaString() {
        return this.hsva.toString();
    }
    /**
     * return hsv string formatted as hsv(327, 29%, 16%)
     */
    toHsvString() {
        return this.hsva.toString(false);
    }
    /**
     * return Cmyk string formatted as cmyk(100%, 100%, 100%, 100%)
     */
    toCmykString() {
        return this.getCmyk().toString();
    }
    getHsva() {
        return new _hsva_class__WEBPACK_IMPORTED_MODULE_2__.Hsva(this.hsva.hue, this.hsva.saturation, this.hsva.value, this.hsva.alpha);
    }
    getRgba() {
        return new _rgba_class__WEBPACK_IMPORTED_MODULE_3__.Rgba(this.rgba.red, this.rgba.green, this.rgba.blue, this.rgba.alpha);
    }
    getHsla() {
        return this.rgbaToHsla(this.rgba);
    }
    getCmyk() {
        return this.rgbaToCmyk(this.rgba);
    }
    hsvaToHsla(color) {
        const hue = color.hue;
        const s = color.saturation / 100;
        const v = color.value / 100;
        const lightness = ((2 - s) * color.value) / 2;
        const saturation = (s * v) / ((lightness <= 1) ? lightness : 2 - lightness) || 0;
        return new _hsla_class__WEBPACK_IMPORTED_MODULE_1__.Hsla(hue, lightness * 100, saturation * 100, color.alpha);
    }
    hslaToHsva(color) {
        const hue = color.hue;
        const l = (color.lightness / 100) * 2;
        const s = (color.saturation / 100) * (l <= 1 ? l : 2 - l);
        const value = (l + s) / 2;
        const saturation = (2 * s) / (l + s) || 0;
        return new _hsva_class__WEBPACK_IMPORTED_MODULE_2__.Hsva(hue, saturation, value, color.alpha);
    }
    rgbaToHsva(color) {
        const red = color.red / 255;
        const green = color.green / 255;
        const blue = color.blue / 255;
        const alpha = color.alpha;
        const Cmax = Math.max(red, green, blue);
        const Cmin = Math.min(red, green, blue);
        const delta = Cmax - Cmin;
        let hue = 0;
        let saturation = Cmax === 0 ? 0 : delta / Cmax;
        let brightness = Cmax;
        if (Cmax !== Cmin) {
            switch (Cmax) {
                case red:
                    hue = (green - blue) / delta + (green < blue ? 6 : 0);
                    break;
                case green:
                    hue = 2 + (blue - red) / delta;
                    break;
                case blue:
                    hue = 4 + (red - green) / delta;
                    break;
            }
            hue /= 6;
        }
        hue = hue * 360;
        saturation = saturation * 100;
        brightness = brightness * 100;
        return new _hsva_class__WEBPACK_IMPORTED_MODULE_2__.Hsva(hue, saturation, brightness, alpha);
    }
    hsvaToRgba(color) {
        let red = 1;
        let green = 0;
        let blue = 0;
        const saturation = color.saturation / 100;
        const brightness = color.value / 100;
        const alpha = color.alpha;
        const hex = color.hue / 60;
        const primary = Math.floor(hex);
        const secoundary = hex - primary;
        const a = (1 - saturation) * brightness;
        const b = (1 - (saturation * secoundary)) * brightness;
        const c = (1 - (saturation * (1 - secoundary))) * brightness;
        switch (primary) {
            case 6:
            case 0:
                red = brightness;
                green = c;
                blue = a;
                break;
            case 1:
                red = b;
                green = brightness;
                blue = a;
                break;
            case 2:
                red = a;
                green = brightness;
                blue = c;
                break;
            case 3:
                red = a;
                green = b;
                blue = brightness;
                break;
            case 4:
                red = c;
                green = a;
                blue = brightness;
                break;
            case 5:
                red = brightness;
                green = a;
                blue = b;
                break;
        }
        red = red * 255;
        green = green * 255;
        blue = blue * 255;
        return new _rgba_class__WEBPACK_IMPORTED_MODULE_3__.Rgba(red, green, blue, alpha);
    }
    rgbaToHsla(color) {
        // based on CamanJS
        const red = color.red / 255;
        const green = color.green / 255;
        const blue = color.blue / 255;
        const alpha = color.alpha;
        const max = Math.max(red, green, blue);
        const min = Math.min(red, green, blue);
        let hue = 0;
        let saturation = 0;
        let luminance = (max + min) / 2;
        const delta = max - min;
        if (max !== min) {
            saturation = luminance > 0.5 ? delta / (2.0 - max - min) : delta / (max + min);
            switch (max) {
                case red:
                    hue = (green - blue) / delta + (green < blue ? 6 : 0);
                    break;
                case green:
                    hue = (blue - red) / delta + 2;
                    break;
                case blue:
                    hue = (red - green) / delta + 4;
                    break;
            }
            hue /= 6;
        }
        hue = hue * 360;
        saturation = saturation * 100;
        luminance = luminance * 100;
        return new _hsla_class__WEBPACK_IMPORTED_MODULE_1__.Hsla(hue, saturation, luminance, alpha);
    }
    /**
     * convert rgb color from HSLa
     *
     * hue = 0 => 360
     * saturation = 0 => 1
     * lightness = 0 => 1
     */
    hslaToRgba(color) {
        const hue = color.hue / 360;
        const saturation = color.saturation / 100;
        const lightness = color.lightness / 100;
        const alpha = color.alpha;
        let red = lightness;
        let green = lightness;
        let blue = lightness;
        if (saturation !== 0) {
            const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - (lightness * saturation);
            const p = 2 * lightness - q;
            red = this.hueToRgb(p, q, hue + (1 / 3));
            green = this.hueToRgb(p, q, hue);
            blue = this.hueToRgb(p, q, hue - (1 / 3));
        }
        red = red * 255;
        green = green * 255;
        blue = blue * 255;
        return new _rgba_class__WEBPACK_IMPORTED_MODULE_3__.Rgba(red, green, blue, alpha);
    }
    hueToRgb(p, q, t) {
        // based on CamanJS
        if (t < 0) {
            t += 1;
        }
        if (t > 1) {
            t -= 1;
        }
        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
            return q;
        }
        if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
    }
    /**
     * The Red, Green, Blue values are given in the range of 0..255,
     *
     * the red color(R) is calculated from the cyan(C) and black(K) colors,
     * the green color(G) is calculated from the magenta(M) and black(K) colors,
     * The blue color(B) is calculated from the yellow(Y) and black(K) colors.
     *
     * Below is the formula of CMYK to RGB convertion
     *
     * Red = 255 × 1 - min( (1 - Cyan ÷ 100) × (1 - Black) )
     * Green = 255 × 1 - min(1 - Magenta ÷ 100) × (1 - Black)
     * Blue = 255 × 1 - min(1 - Yellow ÷ 100) × (1 - Black)
     */
    cmykToRgba(color) {
        const black = color.black / 100;
        const cyan = color.cyan / 100;
        const magenta = color.magenta / 100;
        const yellow = color.yellow / 100;
        let red = Math.min(1, (1 - cyan) * (1 - black));
        let green = Math.min(1, (1 - magenta) * (1 - black));
        let blue = Math.min(1, (1 - yellow) * (1 - black));
        red = red * 255;
        green = green * 255;
        blue = blue * 255;
        return new _rgba_class__WEBPACK_IMPORTED_MODULE_3__.Rgba(red, green, blue, 1);
    }
    /**
     * The max number of R, G, B values are 255, first of all, we divided them by 255 to become the number
     * of 0~1, this ratio will be used in the calculation.
     * Rc = R ÷ 255
     * Gc = G ÷ 255
     * Bc = B ÷ 255
     * The black key(K) color could be many result, when we assume a black key value,
     * the other three colors(cyan, magenta, yellow) can be calculated.
     * we can calculate it from the red, green and blue colors, the max number of black key should be :
     * K = 1 - min(Rc, Gc, Bc);
     *
     * or we can assume we run out of the black ink, need use the remaining other three color inks to finish the printing job.
     * K = 0;
     *
     * The cyan color(C) is calculated from the red and black colors:
     * C = (1 - Rc - K) ÷ (1 - K)
     *
     * The magenta color (M) is calculated from the green and black colors:
     * M = (1 - Gr - K) ÷ (1 - K)
     *
     * The yellow color(Y) is calculated from the blue and black colors:
     * Y = (1 - Bc - K) ÷ ( 1 - K)
     */
    rgbaToCmyk(color) {
        const red = color.red / 255;
        const green = color.green / 255;
        const blue = color.blue / 255;
        let cyan = 1 - red;
        let magenta = 1 - green;
        let yellow = 1 - blue;
        let black = Math.min(cyan, magenta, yellow);
        if (black === 1) {
            return new _cmyk_class__WEBPACK_IMPORTED_MODULE_0__.Cmyk(0, 0, 0, 1);
        }
        cyan = (cyan - black) / (1 - black);
        magenta = (magenta - black) / (1 - black);
        yellow = (yellow - black) / (1 - black);
        black = black * 100;
        cyan = cyan * 100;
        magenta = magenta * 100;
        yellow = yellow * 100;
        return new _cmyk_class__WEBPACK_IMPORTED_MODULE_0__.Cmyk(cyan, magenta, yellow, black);
    }
    roundNumber(n) {
        return Math.round(n * 100) / 100;
    }
    stringToColor(colorString) {
        const str = colorString.replace(/ /g, '').toLowerCase();
        /**
         * try to find color by name in table
         */
        let rgba = _colors_table_class__WEBPACK_IMPORTED_MODULE_4__.ColorsTable[str] || null;
        /**
         * hex find
         */
        if (str[0] === '#') {
            let hex = str.substr(1);
            const length = hex.length;
            let a = 1;
            let hexArray = [];
            if (length === 3) {
                hexArray = hex.split('').map((value) => value + value);
            }
            else if (length === 6) {
                hexArray = hex.match(/.{2}/g);
            }
            else if (length === 8) {
                const alpha = hex.substr(-2);
                hex = hex.substr(0, length - 2);
                a = this.roundNumber(parseInt(alpha || 'FF', 16) / 255);
                hexArray = hex.match(/.{2}/g);
            }
            if (hexArray.length === 3) {
                rgba = new _rgba_class__WEBPACK_IMPORTED_MODULE_3__.Rgba(parseInt(hexArray[0], 16), parseInt(hexArray[1], 16), parseInt(hexArray[2], 16), a);
            }
        }
        const OpenParenthesis = str.indexOf('(');
        const CloseParenthesis = str.indexOf(')');
        if (OpenParenthesis !== -1 && CloseParenthesis + 1 === str.length) {
            const colorTypeName = str.substr(0, OpenParenthesis);
            const params = str.substr(OpenParenthesis + 1, CloseParenthesis - (OpenParenthesis + 1)).split(',');
            let alpha = 1;
            switch (colorTypeName) {
                case 'rgba':
                    alpha = parseFloat(params.pop());
                // Fall through.
                case 'rgb':
                    rgba = new _rgba_class__WEBPACK_IMPORTED_MODULE_3__.Rgba(parseInt(params[0], 10), parseInt(params[1], 10), parseInt(params[2], 10), alpha);
                    break;
                case 'hsla':
                    alpha = parseFloat(params.pop());
                case 'hsl':
                    const hsla = new _hsla_class__WEBPACK_IMPORTED_MODULE_1__.Hsla(parseInt(params[0], 10), parseInt(params[1], 10), parseInt(params[2], 10), alpha);
                    rgba = this.hslaToRgba(hsla);
                    break;
                case 'cmyk':
                    const cmyk = new _cmyk_class__WEBPACK_IMPORTED_MODULE_0__.Cmyk(parseInt(params[0], 10), parseInt(params[1], 10), parseInt(params[2], 10), parseInt(params[3], 10));
                    rgba = this.cmykToRgba(cmyk);
                    break;
            }
        }
        if (rgba) {
            this.rgba = rgba;
            this.hsva = this.rgbaToHsva(rgba);
        }
        return this;
    }
}


/***/ }),

/***/ 1035:
/*!*******************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/helpers/colors-table.class.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorsTable": () => (/* binding */ ColorsTable)
/* harmony export */ });
/* harmony import */ var _rgba_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgba.class */ 2643);

/**
 * http://www.w3.org/TR/css3-color/
 */
class ColorsTable {
}
ColorsTable.transparent = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 0, 0, 0);
ColorsTable.aliceblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(240, 248, 255, 1);
ColorsTable.antiquewhite = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(250, 235, 215, 1);
ColorsTable.aqua = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 255, 255, 1);
ColorsTable.aquamarine = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(127, 255, 212, 1);
ColorsTable.azure = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(240, 255, 255, 1);
ColorsTable.beige = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(245, 245, 220, 1);
ColorsTable.bisque = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 228, 196, 1);
ColorsTable.black = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 0, 0, 1);
ColorsTable.blanchedalmond = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 235, 205, 1);
ColorsTable.blue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 0, 255, 1);
ColorsTable.blueviolet = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(138, 43, 226, 1);
ColorsTable.brown = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(165, 42, 42, 1);
ColorsTable.burlywood = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(222, 184, 135, 1);
ColorsTable.cadetblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(95, 158, 160, 1);
ColorsTable.chartreuse = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(127, 255, 0, 1);
ColorsTable.chocolate = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(210, 105, 30, 1);
ColorsTable.coral = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 127, 80, 1);
ColorsTable.cornflowerblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(100, 149, 237, 1);
ColorsTable.cornsilk = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 248, 220, 1);
ColorsTable.crimson = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(220, 20, 60, 1);
ColorsTable.cyan = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 255, 255, 1);
ColorsTable.darkblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 0, 139, 1);
ColorsTable.darkcyan = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 139, 139, 1);
ColorsTable.darkgoldenrod = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(184, 134, 11, 1);
ColorsTable.darkgray = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(169, 169, 169, 1);
ColorsTable.darkgreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 100, 0, 1);
ColorsTable.darkgrey = ColorsTable.darkgray;
ColorsTable.darkkhaki = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(189, 183, 107, 1);
ColorsTable.darkmagenta = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(139, 0, 139, 1);
ColorsTable.darkolivegreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(85, 107, 47, 1);
ColorsTable.darkorange = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 140, 0, 1);
ColorsTable.darkorchid = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(153, 50, 204, 1);
ColorsTable.darkred = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(139, 0, 0, 1);
ColorsTable.darksalmon = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(233, 150, 122, 1);
ColorsTable.darkseagreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(143, 188, 143, 1);
ColorsTable.darkslateblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(72, 61, 139, 1);
ColorsTable.darkslategray = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(47, 79, 79, 1);
ColorsTable.darkslategrey = ColorsTable.darkslategray;
ColorsTable.darkturquoise = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 206, 209, 1);
ColorsTable.darkviolet = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(148, 0, 211, 1);
ColorsTable.deeppink = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 20, 147, 1);
ColorsTable.deepskyblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 191, 255, 1);
ColorsTable.dimgray = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(105, 105, 105, 1);
ColorsTable.dimgrey = ColorsTable.dimgray;
ColorsTable.dodgerblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(30, 144, 255, 1);
ColorsTable.firebrick = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(178, 34, 34, 1);
ColorsTable.floralwhite = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 250, 240, 1);
ColorsTable.forestgreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(34, 139, 34, 1);
ColorsTable.fuchsia = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 0, 255, 1);
ColorsTable.gainsboro = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(220, 220, 220, 1);
ColorsTable.ghostwhite = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(248, 248, 255, 1);
ColorsTable.gold = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 215, 0, 1);
ColorsTable.goldenrod = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(218, 165, 32, 1);
ColorsTable.gray = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(128, 128, 128, 1);
ColorsTable.grey = ColorsTable.gray;
ColorsTable.green = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 128, 0, 1);
ColorsTable.greenyellow = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(173, 255, 47, 1);
ColorsTable.honeydew = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(240, 255, 240, 1);
ColorsTable.hotpink = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 105, 180, 1);
ColorsTable.indianred = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(205, 92, 92, 1);
ColorsTable.indigo = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(75, 0, 130, 1);
ColorsTable.ivory = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 255, 240, 1);
ColorsTable.khaki = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(240, 230, 140, 1);
ColorsTable.lavender = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(230, 230, 250, 1);
ColorsTable.lavenderblush = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 240, 245, 1);
ColorsTable.lawngreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(124, 252, 0, 1);
ColorsTable.lemonchiffon = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 250, 205, 1);
ColorsTable.lightblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(173, 216, 230, 1);
ColorsTable.lightcoral = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(240, 128, 128, 1);
ColorsTable.lightcyan = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(224, 255, 255, 1);
ColorsTable.lightgoldenrodyellow = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(250, 250, 210, 1);
ColorsTable.lightgray = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(211, 211, 211, 1);
ColorsTable.lightgreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(144, 238, 144, 1);
ColorsTable.lightgrey = ColorsTable.lightgray;
ColorsTable.lightpink = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 182, 193, 1);
ColorsTable.lightsalmon = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 160, 122, 1);
ColorsTable.lightseagreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(32, 178, 170, 1);
ColorsTable.lightskyblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(135, 206, 250, 1);
ColorsTable.lightslategray = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(119, 136, 153, 1);
ColorsTable.lightslategrey = ColorsTable.lightslategray;
ColorsTable.lightsteelblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(176, 196, 222, 1);
ColorsTable.lightyellow = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 255, 224, 1);
ColorsTable.lime = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 255, 0, 1);
ColorsTable.limegreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(50, 205, 50, 1);
ColorsTable.linen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(250, 240, 230, 1);
ColorsTable.magenta = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 0, 255, 1);
ColorsTable.maroon = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(128, 0, 0, 1);
ColorsTable.mediumaquamarine = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(102, 205, 170, 1);
ColorsTable.mediumblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 0, 205, 1);
ColorsTable.mediumorchid = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(186, 85, 211, 1);
ColorsTable.mediumpurple = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(147, 112, 219, 1);
ColorsTable.mediumseagreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(60, 179, 113, 1);
ColorsTable.mediumslateblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(123, 104, 238, 1);
ColorsTable.mediumspringgreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 250, 154, 1);
ColorsTable.mediumturquoise = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(72, 209, 204, 1);
ColorsTable.mediumvioletred = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(199, 21, 133, 1);
ColorsTable.midnightblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(25, 25, 112, 1);
ColorsTable.mintcream = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(245, 255, 250, 1);
ColorsTable.mistyrose = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 228, 225, 1);
ColorsTable.moccasin = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 228, 181, 1);
ColorsTable.navajowhite = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 222, 173, 1);
ColorsTable.navy = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 0, 128, 1);
ColorsTable.oldlace = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(253, 245, 230, 1);
ColorsTable.olive = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(128, 128, 0, 1);
ColorsTable.olivedrab = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(107, 142, 35, 1);
ColorsTable.orange = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 165, 0, 1);
ColorsTable.orangered = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 69, 0, 1);
ColorsTable.orchid = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(218, 112, 214, 1);
ColorsTable.palegoldenrod = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(238, 232, 170, 1);
ColorsTable.palegreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(152, 251, 152, 1);
ColorsTable.paleturquoise = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(175, 238, 238, 1);
ColorsTable.palevioletred = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(219, 112, 147, 1);
ColorsTable.papayawhip = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 239, 213, 1);
ColorsTable.peachpuff = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 218, 185, 1);
ColorsTable.peru = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(205, 133, 63, 1);
ColorsTable.pink = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 192, 203, 1);
ColorsTable.plum = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(221, 160, 221, 1);
ColorsTable.powderblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(176, 224, 230, 1);
ColorsTable.purple = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(128, 0, 128, 1);
ColorsTable.red = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 0, 0, 1);
ColorsTable.rosybrown = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(188, 143, 143, 1);
ColorsTable.royalblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(65, 105, 225, 1);
ColorsTable.saddlebrown = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(139, 69, 19, 1);
ColorsTable.salmon = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(250, 128, 114, 1);
ColorsTable.sandybrown = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(244, 164, 96, 1);
ColorsTable.seagreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(46, 139, 87, 1);
ColorsTable.seashell = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 245, 238, 1);
ColorsTable.sienna = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(160, 82, 45, 1);
ColorsTable.silver = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(192, 192, 192, 1);
ColorsTable.skyblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(135, 206, 235, 1);
ColorsTable.slateblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(106, 90, 205, 1);
ColorsTable.slategray = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(112, 128, 144, 1);
ColorsTable.slategrey = ColorsTable.slategray;
ColorsTable.snow = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 250, 250, 1);
ColorsTable.springgreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 255, 127, 1);
ColorsTable.steelblue = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(70, 130, 180, 1);
ColorsTable.tan = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(210, 180, 140, 1);
ColorsTable.teal = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(0, 128, 128, 1);
ColorsTable.thistle = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(216, 191, 216, 1);
ColorsTable.tomato = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 99, 71, 1);
ColorsTable.turquoise = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(64, 224, 208, 1);
ColorsTable.violet = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(238, 130, 238, 1);
ColorsTable.wheat = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(245, 222, 179, 1);
ColorsTable.white = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 255, 255, 1);
ColorsTable.whitesmoke = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(245, 245, 245, 1);
ColorsTable.yellow = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(255, 255, 0, 1);
ColorsTable.yellowgreen = new _rgba_class__WEBPACK_IMPORTED_MODULE_0__.Rgba(154, 205, 50, 1);


/***/ }),

/***/ 4402:
/*!**************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/helpers/control.class.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPickerControl": () => (/* binding */ ColorPickerControl),
/* harmony export */   "ColorType": () => (/* binding */ ColorType)
/* harmony export */ });
/* harmony import */ var _color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.class */ 9426);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _rgba_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgba.class */ 2643);




var ColorType;
(function (ColorType) {
    ColorType["hex"] = "hex";
    ColorType["hexa"] = "hexa";
    ColorType["rgba"] = "rgba";
    ColorType["rgb"] = "rgb";
    ColorType["hsla"] = "hsla";
    ColorType["hsl"] = "hsl";
    ColorType["cmyk"] = "cmyk";
})(ColorType || (ColorType = {}));
class ColorPickerControl {
    constructor() {
        this.modelValue = null;
        this.hueValue = null;
        this.initValue = null;
        this.valueChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.presetsVisibilityChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(true);
        this.initType = null;
        this.alphaChannelVisibilityChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(true);
        this.valueChanges = this.valueChanged.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)((x, y) => x.toRgbaString() == y.toRgbaString()));
        this.colorPresets = [];
        const color = _color_class__WEBPACK_IMPORTED_MODULE_0__.Color.from(new _rgba_class__WEBPACK_IMPORTED_MODULE_1__.Rgba(255, 0, 0, 1));
        this.setValue(color);
        this.setHueColor(color);
    }
    setValueFrom(color) {
        const newColor = _color_class__WEBPACK_IMPORTED_MODULE_0__.Color.from(color);
        if (!this.initValue) {
            this.initValue = _color_class__WEBPACK_IMPORTED_MODULE_0__.Color.from(color);
        }
        if (typeof color === 'string') {
            this.finOutInputType(color);
        }
        this.setHueColor(newColor);
        this.setValue(newColor);
        return this;
    }
    setHueColor(color) {
        this.hueValue = new _color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsva(color.getHsva().hue);
    }
    get hue() {
        return this.hueValue;
    }
    /**
     * @internal
     * used for two-way data binding
     */
    set hue(hueColor) {
        this.hueValue = hueColor;
    }
    setValue(value) {
        this.modelValue = value;
        this.valueChanged.next(value);
        return this;
    }
    get value() {
        return this.modelValue;
    }
    /**
     * @internal
     * used for two-way data binding
     */
    set value(value) {
        this.setValue(value);
    }
    /**
     * reset color to initial
     */
    reset() {
        let color;
        if (!this.initValue) {
            color = _color_class__WEBPACK_IMPORTED_MODULE_0__.Color.from(new _rgba_class__WEBPACK_IMPORTED_MODULE_1__.Rgba(255, 0, 0, 1));
            this.hueValue = new _color_class__WEBPACK_IMPORTED_MODULE_0__.Color().setHsva(color.getHsva().hue);
        }
        else {
            color = this.initValue.clone();
            this.setHueColor(color);
        }
        this.setValue(color);
        return this;
    }
    isAlphaChannelEnabled() {
        return this.alphaChannelVisibilityChanges.value;
    }
    showAlphaChannel() {
        this.alphaChannelVisibilityChanges.next(true);
        return this;
    }
    hideAlphaChannel() {
        this.alphaChannelVisibilityChanges.next(false);
        return this;
    }
    finOutInputType(colorString) {
        const str = colorString.replace(/ /g, '').toLowerCase();
        if (str[0] === '#') {
            this.initType = ColorType.hex;
            if (str.length > 7) {
                this.initType = ColorType.hexa;
            }
        }
        const OpenParenthesis = str.indexOf('(');
        const colorTypeName = str.substr(0, OpenParenthesis);
        switch (colorTypeName) {
            case ColorType.rgba:
                this.initType = ColorType.rgba;
                break;
            case ColorType.rgb:
                this.initType = ColorType.rgb;
                break;
            case ColorType.hsla:
                this.initType = ColorType.hsla;
                break;
            case ColorType.hsl:
                this.initType = ColorType.hsl;
                break;
            case ColorType.cmyk:
                this.initType = ColorType.cmyk;
                break;
        }
    }
    setColorPresets(colorPresets) {
        this.colorPresets = this.setPresets(colorPresets);
        return this;
    }
    setPresets(colorPresets) {
        const presets = [];
        for (const color of colorPresets) {
            if (Array.isArray(color)) {
                presets.push(this.setPresets(color));
            }
            else {
                presets.push(new _color_class__WEBPACK_IMPORTED_MODULE_0__.Color(color));
            }
        }
        return presets;
    }
    get presets() {
        return this.colorPresets;
    }
    hasPresets() {
        return this.colorPresets.length > 0;
    }
    isPresetVisible() {
        return this.presetsVisibilityChanges.value;
    }
    showPresets() {
        this.presetsVisibilityChanges.next(true);
        return this;
    }
    hidePresets() {
        this.presetsVisibilityChanges.next(false);
        return this;
    }
}


/***/ }),

/***/ 3583:
/*!*****************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/helpers/helper.functions.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValueByType": () => (/* binding */ getValueByType)
/* harmony export */ });
/* harmony import */ var _control_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.class */ 4402);

function getValueByType(color, type) {
    switch (type) {
        case _control_class__WEBPACK_IMPORTED_MODULE_0__.ColorType.hex:
            return color.toHexString();
        case _control_class__WEBPACK_IMPORTED_MODULE_0__.ColorType.hexa:
            return color.toHexString(true);
        case _control_class__WEBPACK_IMPORTED_MODULE_0__.ColorType.rgb:
            return color.toRgbString();
        case _control_class__WEBPACK_IMPORTED_MODULE_0__.ColorType.rgba:
            return color.toRgbaString();
        case _control_class__WEBPACK_IMPORTED_MODULE_0__.ColorType.hsl:
            return color.toHslString();
        case _control_class__WEBPACK_IMPORTED_MODULE_0__.ColorType.hsla:
            return color.toHslaString();
        default:
            return color.toRgbaString();
    }
}


/***/ }),

/***/ 1925:
/*!***********************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/helpers/hsla.class.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hsla": () => (/* binding */ Hsla)
/* harmony export */ });
/* harmony import */ var _base_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-color.class */ 9041);

/**
 * HSL and HSI are the same
 *
 * Hue = ranges from 0 to 360°
 * Saturation = ranges from 0 to 100%
 * Lightness or Intensity = ranges from 0 to 100%
 * Alpha = range from 0-1
 */
class Hsla extends _base_color_class__WEBPACK_IMPORTED_MODULE_0__.BaseColor {
    constructor(hue, saturation, lightness, alpha) {
        super();
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.alpha = alpha;
    }
    toString(showAlphaChannel = true) {
        return showAlphaChannel
            ? `hsla(${this.getHue()}, ${this.getSaturation()}%, ${this.getLightness()}%, ${this.getAlpha()})`
            : `hsl(${this.getHue()}, ${this.getSaturation()}%, ${this.getLightness()}%)`;
    }
    getHue() {
        return Math.round(this.hue);
    }
    getSaturation() {
        return Math.round(this.saturation);
    }
    getLightness() {
        return Math.round(this.lightness);
    }
    getAlpha() {
        return Math.round(this.alpha * 100) / 100;
    }
}


/***/ }),

/***/ 4853:
/*!***********************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/helpers/hsva.class.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hsva": () => (/* binding */ Hsva)
/* harmony export */ });
/* harmony import */ var _base_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-color.class */ 9041);

/**
 * HSB and HSV are the same
 *
 * Hue = ranges from 0 to 360°
 * Saturation = ranges from 0 to 100%
 * Brightness or Value = ranges from 0 to 100%
 * Alpha = range from 0-1
 */
class Hsva extends _base_color_class__WEBPACK_IMPORTED_MODULE_0__.BaseColor {
    constructor(hue, saturation, value, alpha) {
        super();
        this.hue = hue;
        this.saturation = saturation;
        this.value = value;
        this.alpha = alpha;
    }
    toString(showAlphaChannel = true) {
        return showAlphaChannel ? `hsva(${this.getHue()}, ${this.getSaturation()}%, ${this.getValue()}%, ${this.getAlpha()})`
            : `hsv(${this.getHue()}, ${this.getSaturation()}%, ${this.getValue()}%)`;
    }
    getHue() {
        return Math.round(this.hue);
    }
    getSaturation() {
        return Math.round(this.saturation);
    }
    getValue() {
        return Math.round(this.value);
    }
    getAlpha() {
        return Math.round(this.alpha * 100) / 100;
    }
}


/***/ }),

/***/ 2643:
/*!***********************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/helpers/rgba.class.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rgba": () => (/* binding */ Rgba)
/* harmony export */ });
/* harmony import */ var _base_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-color.class */ 9041);

/**
 * RGB (Red Green Blue)
 *
 * Red = ranges from 0-255
 * Green = ranges from 0-255
 * Blue = ranges from 0-255
 * Alpha = range from 0-1
 */
class Rgba extends _base_color_class__WEBPACK_IMPORTED_MODULE_0__.BaseColor {
    constructor(red, green, blue, alpha) {
        super();
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    toString(showAlphaChannel = true) {
        return showAlphaChannel
            ? `rgba(${this.getRed()}, ${this.getGreen()}, ${this.getBlue()}, ${this.getAlpha()})`
            : `rgb(${this.getRed()}, ${this.getGreen()}, ${this.getBlue()})`;
    }
    getRed() {
        return Math.round(this.red);
    }
    getGreen() {
        return Math.round(this.green);
    }
    getBlue() {
        return Math.round(this.blue);
    }
    getAlpha() {
        return Math.round(this.alpha * 100) / 100;
    }
}


/***/ }),

/***/ 3973:
/*!**********************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/pipes/chunks.pipe.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChunksPipe": () => (/* binding */ ChunksPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ChunksPipe {
    transform(arr, chunkSize) {
        return arr.reduce((prev, cur, i) => (i % chunkSize) ? prev : prev.concat([arr.slice(i, i + chunkSize)]), []);
    }
}
ChunksPipe.ɵfac = function ChunksPipe_Factory(t) { return new (t || ChunksPipe)(); };
ChunksPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "chunks", type: ChunksPipe, pure: true });


/***/ }),

/***/ 2317:
/*!***********************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/pipes/reverse.pipe.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReversePipe": () => (/* binding */ ReversePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ReversePipe {
    transform(arr, isReversed = true) {
        if (isReversed) {
            return arr.slice().reverse();
        }
        return arr;
    }
}
ReversePipe.ɵfac = function ReversePipe_Factory(t) { return new (t || ReversePipe)(); };
ReversePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "reverse", type: ReversePipe, pure: true });


/***/ }),

/***/ 4191:
/*!**********************************************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/lib/services/color-picker.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPickerConfig": () => (/* binding */ ColorPickerConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ColorPickerConfig {
    constructor() {
        this.indicatorTitle = 'Copy color to clipboard';
        this.presetsTitle = '{0}. Long-click to show alternate shades.';
    }
}
ColorPickerConfig.ɵfac = function ColorPickerConfig_Factory(t) { return new (t || ColorPickerConfig)(); };
ColorPickerConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorPickerConfig, factory: ColorPickerConfig.ɵfac });


/***/ }),

/***/ 7176:
/*!***********************************************************!*\
  !*** ./projects/iplab/ngx-color-picker/src/public-api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphaComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.AlphaComponent),
/* harmony export */   "ChromePickerComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ChromePickerComponent),
/* harmony export */   "Color": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.Color),
/* harmony export */   "ColorPickerControl": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl),
/* harmony export */   "ColorPickerModule": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ColorPickerModule),
/* harmony export */   "ColorPresetComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ColorPresetComponent),
/* harmony export */   "ColorPresetSublist": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ColorPresetSublist),
/* harmony export */   "ColorPresetsComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ColorPresetsComponent),
/* harmony export */   "ColorsTable": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ColorsTable),
/* harmony export */   "CompactPickerComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.CompactPickerComponent),
/* harmony export */   "GithubPickerComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.GithubPickerComponent),
/* harmony export */   "HexComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.HexComponent),
/* harmony export */   "HslaComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.HslaComponent),
/* harmony export */   "HueComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.HueComponent),
/* harmony export */   "IndicatorComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.IndicatorComponent),
/* harmony export */   "IpPickerComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.IpPickerComponent),
/* harmony export */   "RgbaComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.RgbaComponent),
/* harmony export */   "SaturationComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.SaturationComponent),
/* harmony export */   "SketchPickerComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.SketchPickerComponent),
/* harmony export */   "SwatchesPickerComponent": () => (/* reexport safe */ _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.SwatchesPickerComponent)
/* harmony export */ });
/* harmony import */ var _lib_color_picker_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/color-picker.module */ 9334);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iplab/ngx-color-picker */ 7176);
/* harmony import */ var google_code_prettify_bin_prettify_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-code-prettify/bin/prettify.min.js */ 6377);
/* harmony import */ var google_code_prettify_bin_prettify_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_code_prettify_bin_prettify_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _projects_iplab_ngx_color_picker_src_lib_components_chrome_picker_chrome_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/iplab/ngx-color-picker/src/lib/components/chrome-picker/chrome-picker.component */ 1891);
/* harmony import */ var _projects_iplab_ngx_color_picker_src_lib_components_sketch_picker_sketch_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/iplab/ngx-color-picker/src/lib/components/sketch-picker/sketch-picker.component */ 4127);
/* harmony import */ var _projects_iplab_ngx_color_picker_src_lib_components_swatches_picker_swatches_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/iplab/ngx-color-picker/src/lib/components/swatches-picker/swatches-picker.component */ 304);
/* harmony import */ var _projects_iplab_ngx_color_picker_src_lib_components_github_picker_github_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/iplab/ngx-color-picker/src/lib/components/github-picker/github-picker.component */ 9249);
/* harmony import */ var _projects_iplab_ngx_color_picker_src_lib_components_compact_picker_compact_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projects/iplab/ngx-color-picker/src/lib/components/compact-picker/compact-picker.component */ 2021);
/* harmony import */ var _wrap_examples_chrome_picker_chrome_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wrap-examples/chrome-picker/chrome-wrapper.component */ 8625);










class AppComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this.color = 'rgba(54, 86, 4, 1)';
        this.chromeControl = new _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl()
            .setValueFrom(_iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__.ColorsTable.aquamarine)
            .hidePresets()
            .hideAlphaChannel();
        this.sketchControl = new _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl()
            .setValueFrom('#A6771C');
        this.compactControl = new _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl();
        this.githubControl = new _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl()
            .setValueFrom('#1273DE');
        this.swatchesColor = '#F04A71';
        this.wrapperColor = '#F04A71';
    }
    ngAfterViewInit() {
        this.elRef.nativeElement.querySelectorAll('.prettify')
            .forEach((el) => el.innerHTML = google_code_prettify_bin_prettify_min_js__WEBPACK_IMPORTED_MODULE_1__.prettyPrintOne(el.innerHTML));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 741, vars: 48, consts: [[1, "jumbotron"], [1, "background"], [1, "container"], [1, "row"], [1, "col"], [1, "display-4"], ["href", "https://github.com/pIvan/ngx-color-picker", "role", "button", "aria-pressed", "true", 1, "btn", "btn-primary", "btn-lg", "active"], [1, "row", "pickers-row"], [1, "col", "col-md-6", "text-right"], [3, "color", "colorChange"], [1, "col", "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-block"], [2, "padding", "0 0 0 40px"], ["id", "installation", 1, "card"], [1, "prettify"], ["id", "usage", 1, "card"], ["href", "#wrap-component"], [1, "col", "col-lg-4"], [1, "info-row"], [3, "control"], [1, "col", "col-lg-8"], [1, "buttons-row"], [1, "btn", "btn-primary", 3, "click"], ["id", "wrap-component", 1, "card"], [1, "table", "table-bordered", "table-striped"], ["target", "_blank", "href", "https://www.w3.org/TR/css-color-3/#svg-color"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "@iplab/ngx-color-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "sketch-picker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("colorChange", function AppComponent_Template_sketch_picker_colorChange_12_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10)(14, "chrome-picker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("colorChange", function AppComponent_Template_chrome_picker_colorChange_14_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 2)(16, "div", 11)(17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Getting started");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 13)(20, "ol")(21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Fork and clone this repo");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "npm install");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Open a terminal and type \"npm run start\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "p", 14)(28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "ol")(31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "npm install @iplab/ngx-color-picker --save");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "ng serve --open");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 11)(37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 13)(40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Pure Angular color picker library.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "ul")(43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "It's an Angular color picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Compatible with Angular 5+ versions");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "No external dependency");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Simple to configure");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Easy to use");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 15)(55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 13)(58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "To install this component to an external project, follow the procedure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "ol")(61, "li")(62, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "npm install @iplab/ngx-color-picker --save");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "li")(65, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "import { ColorPickerModule } from '@iplab/ngx-color-picker';\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n...\n...\n\n\n@NgModule({\n    imports: [\n        BrowserModule,\n        ColorPickerModule,\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "BrowserAnimationsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "NoopAnimationsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, " // need to be included\n    ],\n    bootstrap: [AppComponent]\n})\nexport class AppModule {}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "li")(74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "<chrome-picker [(color)]=\"#fff\"></chrome-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 17)(78, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 13)(81, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "predefined components");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "Color picker have 5 predefined components. Each component, except swatches-picker,");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, " can be used with direct color binding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "or/and");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, " with control which provides greater flexibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "p")(91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92, "<chrome-picker [(color)]=\"#fff\" [control]=\"ColorPickerControl\"></chrome-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "<sketch-picker [(color)]=\"#fff\" [control]=\"ColorPickerControl\"></sketch-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "<compact-picker [(color)]=\"#fff\" [control]=\"ColorPickerControl\"></compact-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, "<github-picker [(color)]=\"#fff\" [control]=\"ColorPickerControl\"></github-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "<swatches-picker [(color)]=\"#fff\"></swatches-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](105, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "[color] attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "When binding over attribute ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, "[color]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112, " is used, component try to determine which value type is used so the output would be the same.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, "Examples:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, "<swatches-picker [(color)]=\"rgb(255, 155, 46)\"></swatches-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, " -> output is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "rgb");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](124, "<swatches-picker [(color)]=\"rgba(255, 155, 46, 0.65)\"></swatches-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, " -> output is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127, "rgba");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130, "<swatches-picker [(color)]=\"hsl(0, 100%, 50%)\"></swatches-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, " -> output is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "hsl");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, "<swatches-picker [(color)]=\"#cF09a7\"></swatches-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, " -> output is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139, "hex");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](140, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "[control] attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](144, "When binding over ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](146, "[control]");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, " user have greater control over color output and all events");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](150, "Examples:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](151, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](153, "<chrome-picker [control]=\"ColorPickerControl\"></chrome-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](154, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](156, "Custom content before and after a color picker.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, "All components support this functionality; that is, all components project content to specified locations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](160, "Examples:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163, "<chrome-picker [control]=\"ColorPickerControl\">\n    <div before>\n        This content goes insede color picker before any other elements.\n    </div>\n    <div>\n        This content goes insede color picker after all other elements.\n    </div>\n</chrome-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](165, "An example of implementing content afterward is shown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](166, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](167, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](168, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](169, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](170, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "color indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "Color indicator is not only indicator, but click also allows copying component color to clipboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](175, " Text which is displayed on mouseover can be configured over NgModule configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](177, "import { IColorPickerConfig } from '@iplab/ngx-color-picker';\n...\n...\n@Injectable()\nclass ColorPickerConfiguration implements IColorPickerConfig {\n    public indicatorTitle: string = 'Copy color to clipboard';\n}\n                \n@NgModule({\nimports: [\n    BrowserModule,\n    ColorPickerModule.forRoot(ColorPickerConfiguration)\n],\nbootstrap: [AppComponent]\n})");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](178, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](179, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](180, "color presets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](182, "color presets on click choose a color, if the child list is available user can show it by long press on certain colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](183, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](184, " Text which is displayed on mouseover can be configured over NgModule configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](186, "import { IColorPickerConfig } from '@iplab/ngx-color-picker';\n...\n...\n@Injectable()\nclass ColorPickerConfiguration implements IColorPickerConfig {\n    public presetsTitle: string = '{0}. Long-click to show alternate shades.'; // {0} is the place where hex value will be placed\n}\n                \n@NgModule({\nimports: [\n    BrowserModule,\n    ColorPickerModule.forRoot(ColorPickerConfiguration)\n],\nbootstrap: [AppComponent]\n})");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](187, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](188, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](189, "all color picker parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](191, "Color picker library exports all parts to enable custom components builds");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193, " Here is a list of all available components and their attributes (optional attributes are marked with question mark) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](195, "<saturation-component [hue]=\"hueColor\" [(color)]=\"valueColor\"></saturation-component>\n<indicator-component [colorType]=\"'rgba' | 'hsla' | 'hex'\" [color]=\"valueColor\"></indicator-component>\n\n<hue-component vertical? [(hue)]=\"hueColor\" [(color)]=\"valueColor\"></hue-component>\n<alpha-component vertical? [(color)]=\"valueColor\"></alpha-component>\n\n<rgba-input-component [alpha?]=\"boolean\" label? [(color)]=\"valueColor\" [(hue)]=\"hueColor\"></rgba-input-component>\n<hsla-input-component [alpha?]=\"boolean\" label? [(color)]=\"valueColor\" [(hue)]=\"hueColor\"></hsla-input-component>\n<hex-input-component label? prefix?=\"#\" [(color)]=\"valueColor\" [(hue)]=\"hueColor\"></hex-input-component>\n\n<color-presets-component [(color)]=\"valueColor\" [colorPresets]=\"presetsList [(hue)]=\"hueColor\"></color-presets-component>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](197, "attributes explanation");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](198, "p")(199, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](200, "color =>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](201, " currently selected color (output color)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](203, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](204, "hue =>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](205, " color used internally as current hue color");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](206, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](207, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](208, "colorType =>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](209, " specify which type of color should be copied to the clipboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](210, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](212, "vertical =>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](213, " should component be placed horizontally or vertically");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](214, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](215, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](216, "alpha =>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](217, " should component display alpha channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](218, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](219, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](220, "label =>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](221, " whether the label will be displayed or not (rgba, hsla, hex)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](222, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, "prefix =>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](225, " definition of label prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](226, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](227, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](228, "colorPresets =>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](229, " list of colors used as presets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](230, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](231, "div", 11)(232, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](233, "Chrome color picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](234, "div", 13)(235, "div", 3)(236, "div", 19)(237, "div", 20)(238, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](239);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](241);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](243);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](244, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](245);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](247);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](249);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](251);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](253);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](254, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](255);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](256, "chrome-picker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](257, "div", 22)(258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](259, "Component code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](260, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](261, "@Component({\n...\n})\nexport class AppComponent {\n\n    public chromeControl = new ColorPickerControl()\n                                .setValueFrom(ColorsTable.aquamarine)\n                                .hidePresets()\n                                .hideAlphaChannel();\n\n    constructor() {    \n    }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](263, "Template code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](264, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](265, "<chrome-picker [control]=\"chromeControl\"></chrome-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](266, "div", 23)(267, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_267_listener() { return ctx.chromeControl.isPresetVisible() ? ctx.chromeControl.hidePresets() : ctx.chromeControl.showPresets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](268, "Toggle presets visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](269, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_270_listener() { return ctx.chromeControl.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](271, "Reset to initial");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](272, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](273, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_273_listener() { return ctx.chromeControl.isAlphaChannelEnabled() ? ctx.chromeControl.hideAlphaChannel() : ctx.chromeControl.showAlphaChannel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](274, "Toggle alpha channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](275, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](276, "div", 11)(277, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](278, "Sketch color picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](279, "div", 13)(280, "div", 3)(281, "div", 19)(282, "div", 20)(283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](284);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](286);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](288);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](289, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](290);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](292);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](294);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](296);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](298);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](300);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](301, "sketch-picker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](302, "div", 22)(303, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](304, "Component code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](305, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](306, "@Component({\n...\n})\nexport class AppComponent {\n\n    public sketchControl = new ColorPickerControl()\n                                .setValueFrom('#A6771C');\n\n    constructor() {    \n    }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](307, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](308, "Template code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](309, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](310, "<sketch-picker [control]=\"sketchControl\"></sketch-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](311, "div", 23)(312, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_312_listener() { return ctx.sketchControl.isPresetVisible() ? ctx.sketchControl.hidePresets() : ctx.sketchControl.showPresets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](313, "Toggle presets visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](314, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](315, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_315_listener() { return ctx.sketchControl.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](316, "Reset to initial");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](317, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](318, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_318_listener() { return ctx.sketchControl.isAlphaChannelEnabled() ? ctx.sketchControl.hideAlphaChannel() : ctx.sketchControl.showAlphaChannel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](319, "Toggle alpha channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](320, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](321, "div", 11)(322, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](323, "Compact color picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](324, "div", 13)(325, "div", 3)(326, "div", 19)(327, "div", 20)(328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](329);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](330, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](331);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](333);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](334, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](335);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](336, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](337);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](339);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](341);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](342, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](343);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](344, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](345);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](346, "compact-picker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](347, "div", 22)(348, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](349, "Component code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](350, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](351, "@Component({\n...\n})\nexport class AppComponent {\n\n    public compactControl = new ColorPickerControl();\n\n    constructor() {    \n    }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](352, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](353, "Template code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](354, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](355, "<compact-picker [control]=\"compactControl\"></compact-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](356, "div", 23)(357, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_357_listener() { return ctx.compactControl.isPresetVisible() ? ctx.compactControl.hidePresets() : ctx.compactControl.showPresets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](358, "Toggle presets visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](359, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](360, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_360_listener() { return ctx.compactControl.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](361, "Reset to initial");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](362, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](363, "div", 11)(364, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](365, "Github color picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](366, "div", 13)(367, "div", 3)(368, "div", 19)(369, "div", 20)(370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](371);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](372, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](373);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](375);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](377);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](379);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](380, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](381);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](383);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](384, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](385);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](387);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](388, "github-picker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](389, "div", 22)(390, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](391, "Component code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](392, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](393, "@Component({\n...\n})\nexport class AppComponent {\n\n    public githubControl = new ColorPickerControl()\n                                .setValueFrom('#1273DE');\n\n    constructor() {    \n    }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](394, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](395, "Template code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](396, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](397, "<github-picker [control]=\"githubControl\"></github-picker>\n<github-picker [control]=\"githubControl\" columns=\"auto\"></github-picker>\n<github-picker [control]=\"githubControl\" [columns]=\"16\"></github-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](398, "div", 23)(399, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_399_listener() { return ctx.githubControl.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](400, "Reset to initial");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](401, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](402, "div", 11)(403, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](404, "Swatches color picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](405, "div", 13)(406, "div", 3)(407, "div", 19)(408, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](409, "Swatches component only supports binding over color attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](410, "div", 20)(411, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](412);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](413, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](414, "swatches-picker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("colorChange", function AppComponent_Template_swatches_picker_colorChange_414_listener($event) { return ctx.swatchesColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](415, "div", 22)(416, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](417, "Component code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](418, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](419, "@Component({\n...\n})\nexport class AppComponent {\n\n    public swatchesColor = '#F04A71'\n\n    constructor() {    \n    }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](420, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](421, "Template code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](422, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](423, "<swatches-picker [(color)]=\"swatchesColor\"></swatches-picker>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](424, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](425, "div", 25)(426, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](427, "How to wrapp color picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](428, "div", 13)(429, "div", 3)(430, "div", 19)(431, "div", 20)(432, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](433);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](434, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](435, "chrome-wrapper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("colorChange", function AppComponent_Template_chrome_wrapper_colorChange_435_listener($event) { return ctx.wrapperColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](436, "div", 22)(437, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](438, "Component code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](439, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](440, "@Component({\n...\nselector: 'chrome-wrapper',\ntemplate: '\n<div class=\"picker\" *ngIf=\"isVisible\">\n    <chrome-picker [control]=\"colorControl\">\n        <div class=\"buttons\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"applyClick($event)\">Apply</button>\n        </div>\n    </chrome-picker>\n    <div class=\"overlay\"></div>\n</div>\n'\n})\nexport class ChromeWrapperComponent {\n\n    private _color: Color = null;\n\n    public colorControl = new ColorPickerControl();\n\n    public isVisible: boolean = false;\n\n    @Input()\n    public set color(color: string) {\n        this.colorControl.setValueFrom(color);\n        this._color = this.colorControl.value;\n    }\n\n    @Output()\n    public colorChange: EventEmitter<string> = new EventEmitter();\n\n    @HostBinding('style.background-color')\n    public get background(): string {\n        return this._color ? this._color.toHexString() : null;\n    }\n\n    public ngOnInit() {\n    }\n\n    @HostListener('click', ['$event'])\n    public showColorPicker(event: MouseEvent) {\n        if (this.isVisible === true) {\n            return;\n        }\n\n        this.isVisible = !this.isVisible;\n    }\n\n    public applyClick(event: MouseEvent): void {\n        event.preventDefault();\n        event.stopPropagation();\n        this.isVisible = false;\n        this._color = this.colorControl.value;\n        this.colorChange.emit(this.colorControl.value.toHexString());\n    }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](441, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](442, "Use case");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](443, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](444, "<chrome-wrapper [(color)]=\"wrapperColor\"></chrome-wrapper>");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](445, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](446, "div", 11)(447, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](448, "ColorPickerControl methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](449, "div", 13)(450, "table", 26)(451, "thead")(452, "tr")(453, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](454, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](455, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](456, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](457, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](458, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](459, "tbody")(460, "tr")(461, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](462, "setValueFrom");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](463, "td")(464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](465, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](466, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](467, "Set value from Color, Rgba, Hsla, Hsva or ColorString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](468, "tr")(469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](470, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](471, "td")(472, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](473, "Getter.value");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](474, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](475, "get value as a Color object");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](476, "tr")(477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](478, "reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](479, "td")(480, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](481, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](482, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](483, "reset value to initial state");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](484, "tr")(485, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](486, "valueChanges");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](487, "td")(488, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](489, "Observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](491, "Used to observe component value changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](492, "tr")(493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](494, "isAlphaChannelEnabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](495, "td")(496, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](497, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](499, "return is alpha changel enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](500, "tr")(501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](502, "showAlphaChannel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](503, "td")(504, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](505, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](507, "show alpha channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](508, "tr")(509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](510, "hideAlphaChannel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](511, "td")(512, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](513, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](514, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](515, "hide alpha channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](516, "tr")(517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](518, "alphaChannelVisibilityChanges");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](519, "td")(520, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](521, "BehaviorSubject");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](523, "Used to observe alpha channel changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](524, "tr")(525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](526, "setColorPresets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](527, "td")(528, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](529, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](530, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](531, "define color preset list");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](532, "tr")(533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](534, "presets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](535, "td")(536, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](537, "Getter.presets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](538, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](539, "get color presets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](540, "tr")(541, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](542, "hasPresets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](543, "td")(544, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](545, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](546, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](547, "return status of predefined color presets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](548, "tr")(549, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](550, "showPresets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](551, "td")(552, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](553, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](555, "show predefined color presets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](556, "tr")(557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](558, "hidePresets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](559, "td")(560, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](561, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](562, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](563, "hide predefined color presets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](564, "tr")(565, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](566, "presetsVisibilityChanges");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](567, "td")(568, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](569, "BehaviorSubject");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](570, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](571, "Used to observe color preset visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](572, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](573, "div", 11)(574, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](575, "Color methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](576, "div", 13)(577, "table", 26)(578, "thead")(579, "tr")(580, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](581, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](582, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](583, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](584, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](585, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](586, "tbody")(587, "tr")(588, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](589, "Color.from");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](590, "td")(591, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](592, "static method");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](593, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](594, "create new Color object from Color, Rgba, Hsla, Hsva or ColorString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](595, "tr")(596, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](597, "clone");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](598, "td")(599, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](600, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](602, "create new Color object");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](603, "tr")(604, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](605, "setFromString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](606, "td")(607, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](608, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](610, "change the value by providing the string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](611, "tr")(612, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](613, "setHsva");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](614, "td")(615, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](616, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](617, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](618, "change the value by providing hsv values");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](619, "tr")(620, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](621, "setRgba");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](622, "td")(623, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](624, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](625, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](626, "change the value by providing rgb values");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](627, "tr")(628, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](629, "setHsla");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](630, "td")(631, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](632, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](633, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](634, "change the value by providing hsl values");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](635, "tr")(636, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](637, "toHexString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](638, "td")(639, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](640, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](641, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](642, "convert Color object to hex string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](643, "tr")(644, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](645, "toRgbString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](646, "td")(647, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](648, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](649, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](650, "convert Color object to rgb string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](651, "tr")(652, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](653, "toRgbaString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](654, "td")(655, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](656, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](657, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](658, "convert Color object to rgba string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](659, "tr")(660, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](661, "toHslString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](662, "td")(663, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](664, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](665, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](666, "convert Color object to hsl string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](667, "tr")(668, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](669, "toHslaString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](670, "td")(671, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](672, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](673, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](674, "convert Color object to hsla string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](675, "tr")(676, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](677, "toHsvString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](678, "td")(679, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](680, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](681, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](682, "convert Color object to hsv string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](683, "tr")(684, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](685, "toHsvaString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](686, "td")(687, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](688, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](689, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](690, "convert Color object to hsva string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](691, "tr")(692, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](693, "toCmykString");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](694, "td")(695, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](696, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](697, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](698, "convert Color object to cmyk string");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](699, "tr")(700, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](701, "getHsva");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](702, "td")(703, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](704, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](706, "return Hsva object");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](707, "tr")(708, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](709, "getRgba");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](710, "td")(711, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](712, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](713, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](714, "return Rgba object");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](715, "tr")(716, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](717, "getHsla");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](718, "td")(719, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](720, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](721, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](722, "return Hsla object");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](723, "tr")(724, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](725, "getCmyk");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](726, "td")(727, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](728, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](729, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](730, "return Cmyk object");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](731, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](732, "div", 11)(733, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](734, "ColorsTable");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](735, "div", 13)(736, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](737, "ColorTable is class with static properties which represent Rgba colors defined by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](738, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](739, "list of the X11 colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](740, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](225);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hex: ", ctx.chromeControl.value.toHexString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hexa: ", ctx.chromeControl.value.toHexString(true), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected rgb: ", ctx.chromeControl.value.toRgbString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected rgba: ", ctx.chromeControl.value.toRgbaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsl: ", ctx.chromeControl.value.toHslString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsla: ", ctx.chromeControl.value.toHslaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsv: ", ctx.chromeControl.value.toHsvString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsva: ", ctx.chromeControl.value.toHsvaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected cmyk: ", ctx.chromeControl.value.toCmykString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.chromeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hex: ", ctx.sketchControl.value.toHexString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hexa: ", ctx.sketchControl.value.toHexString(true), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected rgb: ", ctx.sketchControl.value.toRgbString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected rgba: ", ctx.sketchControl.value.toRgbaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsl: ", ctx.sketchControl.value.toHslString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsla: ", ctx.sketchControl.value.toHslaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsv: ", ctx.sketchControl.value.toHsvString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsva: ", ctx.sketchControl.value.toHsvaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected cmyk: ", ctx.sketchControl.value.toCmykString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.sketchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hex: ", ctx.compactControl.value.toHexString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hexa: ", ctx.compactControl.value.toHexString(true), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected rgb: ", ctx.compactControl.value.toRgbString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected rgba: ", ctx.compactControl.value.toRgbaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsl: ", ctx.compactControl.value.toHslString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsla: ", ctx.compactControl.value.toHslaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsv: ", ctx.compactControl.value.toHsvString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsva: ", ctx.compactControl.value.toHsvaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected cmyk: ", ctx.compactControl.value.toCmykString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.compactControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hex: ", ctx.githubControl.value.toHexString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hexa: ", ctx.githubControl.value.toHexString(true), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected rgb: ", ctx.githubControl.value.toRgbString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected rgba: ", ctx.githubControl.value.toRgbaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsl: ", ctx.githubControl.value.toHslString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsla: ", ctx.githubControl.value.toHslaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsv: ", ctx.githubControl.value.toHsvString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected hsva: ", ctx.githubControl.value.toHsvaString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected cmyk: ", ctx.githubControl.value.toCmykString(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.githubControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected color: ", ctx.swatchesColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx.swatchesColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("selected color: ", ctx.wrapperColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", ctx.wrapperColor);
    } }, dependencies: [_projects_iplab_ngx_color_picker_src_lib_components_chrome_picker_chrome_picker_component__WEBPACK_IMPORTED_MODULE_2__.ChromePickerComponent, _projects_iplab_ngx_color_picker_src_lib_components_sketch_picker_sketch_picker_component__WEBPACK_IMPORTED_MODULE_3__.SketchPickerComponent, _projects_iplab_ngx_color_picker_src_lib_components_swatches_picker_swatches_picker_component__WEBPACK_IMPORTED_MODULE_4__.SwatchesPickerComponent, _projects_iplab_ngx_color_picker_src_lib_components_github_picker_github_picker_component__WEBPACK_IMPORTED_MODULE_5__.GithubPickerComponent, _projects_iplab_ngx_color_picker_src_lib_components_compact_picker_compact_picker_component__WEBPACK_IMPORTED_MODULE_6__.CompactPickerComponent, _wrap_examples_chrome_picker_chrome_wrapper_component__WEBPACK_IMPORTED_MODULE_7__.ChromeWrapperComponent], styles: ["[_nghost-%COMP%] {\n    display: block;\n}\n\n.background[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 500px;\n    opacity: 0.5;\n    z-index: 0;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n    position: relative;\n    background: none;\n}\n\n.jumbotron[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding-top: 20px;\n}\n\n.jumbotron[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child {\n    padding: 0;\n}\n\n.jumbotron[_ngcontent-%COMP%]   chrome-picker[_ngcontent-%COMP%] {\n    margin-top: -30px;\n    display: inline-block;\n}\n\n.jumbotron[_ngcontent-%COMP%]   sketch-picker[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.jumbotron[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    padding-top: 20px;\n}\n\n@media handheld, screen and (max-width: 768px) {\n    .jumbotron[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%], .pickers-row[_ngcontent-%COMP%] {\n        text-align: center !important;\n    }\n\n    .jumbotron[_ngcontent-%COMP%]   chrome-picker[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n}\n\n.info-row[_ngcontent-%COMP%] {\n    padding: 0 0 20px;\n}\n\n.info-row[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.col-lg-4[_ngcontent-%COMP%] {\n    padding: 0;\n}\n\n.buttons-row[_ngcontent-%COMP%] {\n    padding: 20px 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7O1FBRUksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHotaW5kZXg6IDA7XG59XG5cblxuLmp1bWJvdHJvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5qdW1ib3Ryb24gLnJvdyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5qdW1ib3Ryb24gLnJvdzpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmp1bWJvdHJvbiBjaHJvbWUtcGlja2VyIHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5qdW1ib3Ryb24gc2tldGNoLXBpY2tlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uanVtYm90cm9uIC5jb2wtbWQtNiB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbkBtZWRpYSBoYW5kaGVsZCwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5qdW1ib3Ryb24gLnRleHQtcmlnaHQsXG4gICAgLnBpY2tlcnMtcm93IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmp1bWJvdHJvbiBjaHJvbWUtcGlja2VyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLmluZm8tcm93IHtcbiAgICBwYWRkaW5nOiAwIDAgMjBweDtcbn1cblxuLmluZm8tcm93IGNvZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29sLWxnLTQge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b25zLXJvdyB7XG4gICAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iplab/ngx-color-picker */ 7176);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _wrap_examples_wrap_example_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrap-examples/wrap-example.module */ 7595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




/**
 * wrapper component examples
 */


class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__.ColorPickerModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _wrap_examples_wrap_example_module__WEBPACK_IMPORTED_MODULE_2__.WrapperExampleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__.ColorPickerModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _wrap_examples_wrap_example_module__WEBPACK_IMPORTED_MODULE_2__.WrapperExampleModule] }); })();


/***/ }),

/***/ 8625:
/*!*************************************************************************!*\
  !*** ./src/app/wrap-examples/chrome-picker/chrome-wrapper.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChromeWrapperComponent": () => (/* binding */ ChromeWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iplab/ngx-color-picker */ 7176);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _projects_iplab_ngx_color_picker_src_lib_components_chrome_picker_chrome_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../projects/iplab/ngx-color-picker/src/lib/components/chrome-picker/chrome-picker.component */ 1891);





function ChromeWrapperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "chrome-picker", 2)(2, "div", 3)(3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChromeWrapperComponent_div_0_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.applyClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r0.colorControl);
} }
class ChromeWrapperComponent {
    constructor() {
        this._color = null;
        this.colorControl = new _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__.ColorPickerControl();
        this.isVisible = false;
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    set color(color) {
        this.colorControl.setValueFrom(color);
        this._color = this.colorControl.value;
    }
    get background() {
        return this._color ? this._color.toHexString() : null;
    }
    ngOnInit() {
    }
    showColorPicker(event) {
        if (this.isVisible === true) {
            return;
        }
        this.isVisible = !this.isVisible;
    }
    applyClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isVisible = false;
        this._color = this.colorControl.value;
        this.colorChange.emit(this.colorControl.value.toHexString());
    }
}
ChromeWrapperComponent.ɵfac = function ChromeWrapperComponent_Factory(t) { return new (t || ChromeWrapperComponent)(); };
ChromeWrapperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChromeWrapperComponent, selectors: [["chrome-wrapper"]], hostVars: 2, hostBindings: function ChromeWrapperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChromeWrapperComponent_click_HostBindingHandler($event) { return ctx.showColorPicker($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx.background);
    } }, inputs: { color: "color" }, outputs: { colorChange: "colorChange" }, decls: 1, vars: 1, consts: [["class", "picker", 4, "ngIf"], [1, "picker"], [3, "control"], [1, "buttons"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "overlay"]], template: function ChromeWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ChromeWrapperComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _projects_iplab_ngx_color_picker_src_lib_components_chrome_picker_chrome_picker_component__WEBPACK_IMPORTED_MODULE_1__.ChromePickerComponent], styles: ["[_nghost-%COMP%] {\n  border: 1px solid #333;\n  border-radius: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 35px;\n  position: relative;\n  width: 35px;\n}\n\n.picker[_ngcontent-%COMP%] {\n  left: 100%;\n  position: absolute;\n  top: 100%;\n  z-index: 2;\n}\n\n.picker[_ngcontent-%COMP%]   chrome-picker[_ngcontent-%COMP%] {\n  left: 100%;\n  position: absolute;\n  top: 100%;\n  z-index: 2;\n}\n\n.picker[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  padding: 0 12px 12px;\n  text-align: center;\n}\n\n.picker[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.2rem 1rem;\n}\n\n.picker[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  background: transparent;\n  left: 0;\n  position: fixed;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNocm9tZS13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNSOztBQUVJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUVRO0VBQ0ksb0JBQUE7QUFBWjs7QUFJSTtFQUNJLHVCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRlIiLCJmaWxlIjoiY2hyb21lLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMzVweDtcbn1cblxuLnBpY2tlciB7XG4gICAgbGVmdDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICBjaHJvbWUtcGlja2VyIHtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMge1xuICAgICAgICBwYWRkaW5nOiAwIDEycHggMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAuMnJlbSAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm92ZXJsYXkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ 7595:
/*!******************************************************!*\
  !*** ./src/app/wrap-examples/wrap-example.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperExampleModule": () => (/* binding */ WrapperExampleModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iplab/ngx-color-picker */ 7176);
/* harmony import */ var _chrome_picker_chrome_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chrome-picker/chrome-wrapper.component */ 8625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class WrapperExampleModule {
}
WrapperExampleModule.ɵfac = function WrapperExampleModule_Factory(t) { return new (t || WrapperExampleModule)(); };
WrapperExampleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WrapperExampleModule });
WrapperExampleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__.ColorPickerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WrapperExampleModule, { declarations: [_chrome_picker_chrome_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.ChromeWrapperComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _iplab_ngx_color_picker__WEBPACK_IMPORTED_MODULE_0__.ColorPickerModule], exports: [_chrome_picker_chrome_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.ChromeWrapperComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map