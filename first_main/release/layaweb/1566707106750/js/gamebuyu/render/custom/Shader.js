var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var gamebuyu;
(function (gamebuyu) {
    var render;
    (function (render) {
        var custom;
        (function (custom) {
            var UIShaderValue = /** @class */ (function (_super) {
                __extends(UIShaderValue, _super);
                function UIShaderValue() {
                    var _this = _super.call(this, 0, 0) || this;
                    // 大小数据
                    _this.v_size = [];
                    // 位置数据
                    _this.pos = [];
                    // 锚点数据
                    _this.pivot = [];
                    // 旋转角度
                    _this.angle = 0;
                    // 透明度
                    _this.v_alpha = 1;
                    // 屏幕高宽比
                    _this.aspect_ratio = 1;
                    var vlen = 8 * Laya.CONST3D2D.BYTES_PE;
                    //设置在shader程序文件里定义的属性相关描述：【属性长度，属性类型，false，属性起始位置索引*CONST3D2D.BYTES_PE】
                    _this.position = [2, Laya.WebGLContext.FLOAT, false, vlen, 0];
                    _this.texcoord = [2, Laya.WebGLContext.FLOAT, false, vlen, 2 * Laya.CONST3D2D.BYTES_PE];
                    return _this;
                }
                return UIShaderValue;
            }(Laya.Value2D));
            custom.UIShaderValue = UIShaderValue;
            // ui
            var UIShader = /** @class */ (function (_super) {
                __extends(UIShader, _super);
                function UIShader() {
                    var _this = this;
                    //顶点着色器程序和片元着色器程序。
                    var vsCode = UIShader.vsCode;
                    var psCode = UIShader.psCode;
                    _this = _super.call(this, vsCode, psCode, "UIShader") || this;
                    return _this;
                }
                Object.defineProperty(UIShader, "shader", {
                    /**
                     *当前着色器的一个实例对象
                     */
                    get: function () {
                        if (!this._shader) {
                            this._shader = new UIShader();
                        }
                        return this._shader;
                    },
                    enumerable: true,
                    configurable: true
                });
                //顶点着色器程序
                UIShader.vsCode = "attribute vec2 position;\n" +
                    "attribute vec2 texcoord;\n" +
                    "uniform vec2 size;\n" +
                    "uniform vec2 v_size;\n" +
                    "uniform vec2 pos;\n" +
                    "uniform vec2 pivot;\n" +
                    "uniform float angle;\n" +
                    "uniform float aspect_ratio;\n" +
                    "varying vec2 v_texcoord;\n" +
                    "void main(){\n" +
                    "	v_texcoord = texcoord;\n" +
                    "	float sina=sin(angle);\n" +
                    "	float cosa=cos(angle);\n" +
                    // 锚点
                    "	float pivot_w = v_size.x * (1.0 - pivot.x * 2.0);\n" +
                    "	float pivot_h = v_size.y * (1.0 - pivot.y * 2.0);\n" +
                    "	vec2 v2Pos1=vec2(position.x * v_size.x + pivot_w, (position.y * v_size.y - pivot_h) * aspect_ratio);\n" +
                    "	vec2 v2Pos2=vec2(v2Pos1.x * cosa - v2Pos1.y * sina, v2Pos1.x * sina + v2Pos1.y * cosa);\n" +
                    "	v2Pos2.y = v2Pos2.y / aspect_ratio;\n" +
                    // 锚点扣回
                    "	v2Pos2.x -= pivot_w;\n" +
                    "	v2Pos2.y += pivot_h;\n" +
                    "   vec4 vt0= vec4(v2Pos2.x + pos.x, v2Pos2.y + pos.y, 0, 1);\n" +
                    "   gl_Position = vt0;\n" +
                    "}";
                // 片元着色器程序。
                UIShader.psCode = "precision mediump float;\n" +
                    "uniform sampler2D texture;\n" +
                    "uniform float v_alpha;" +
                    "varying vec2 v_texcoord;\n" +
                    "void main(void)\n" +
                    "{\n" +
                    "	vec4 infoUv = texture2D(texture, v_texcoord.xy);\n" +
                    "	infoUv.w *= v_alpha;\n" +
                    "	infoUv.xyz *= infoUv.w;\n" +
                    "	gl_FragColor = infoUv;\n" +
                    "}";
                return UIShader;
            }(Laya.Shader));
            custom.UIShader = UIShader;
            var UVMovShaderValue = /** @class */ (function (_super) {
                __extends(UVMovShaderValue, _super);
                function UVMovShaderValue() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.mov_x = 1;
                    _this.mov_y = 1;
                    _this.ratio_x = 1;
                    _this.ratio_y = 1;
                    _this.UV = [0, 0, 1, 0, 1, 1, 0, 1];
                    return _this;
                }
                return UVMovShaderValue;
            }(UIShaderValue));
            custom.UVMovShaderValue = UVMovShaderValue;
            // UV动画
            var UVMovShader = /** @class */ (function (_super) {
                __extends(UVMovShader, _super);
                function UVMovShader() {
                    var _this = this;
                    //顶点着色器程序和片元着色器程序。
                    var vsCode = UIShader.vsCode;
                    var psCode = "precision mediump float;\n" +
                        "uniform sampler2D texture;\n" +
                        "uniform float v_alpha;" +
                        "uniform float UV[8];\n" +
                        "varying vec2 v_texcoord;\n" +
                        "uniform float mov_x;\n" +
                        "uniform float mov_y;\n" +
                        "uniform float ratio_x;\n" +
                        "uniform float ratio_y;\n" +
                        "void main(void)\n" +
                        "{\n" +
                        // 处理下UV
                        "	vec2 temp = vec2(UV[0], UV[1]);\n" +
                        "	temp.x += (UV[2]-UV[0]) * v_texcoord.x;\n" +
                        "	temp.y += (UV[5]-UV[3]) * v_texcoord.y;\n" +
                        "	vec2 uv = vec2(temp.x, temp.y);\n" +
                        "	uv.x = fract(uv.x * ratio_x- mov_x);\n" +
                        "	uv.y = fract(uv.y * ratio_y + mov_y);\n" +
                        "	vec4 infoUv = texture2D(texture, uv.xy);\n" +
                        "	infoUv.w *= v_alpha;\n" +
                        "	infoUv.xyz *= infoUv.w;\n" +
                        "	gl_FragColor = infoUv;\n" +
                        "}";
                    _this = _super.call(this, vsCode, psCode, 'UVMovShader') || this;
                    return _this;
                }
                Object.defineProperty(UVMovShader, "shader", {
                    /**
                     *当前着色器的一个实例对象
                     */
                    get: function () {
                        if (!this._shader) {
                            this._shader = new UVMovShader();
                        }
                        return this._shader;
                    },
                    enumerable: true,
                    configurable: true
                });
                return UVMovShader;
            }(Laya.Shader));
            custom.UVMovShader = UVMovShader;
            var WaveShaderValue = /** @class */ (function (_super) {
                __extends(WaveShaderValue, _super);
                function WaveShaderValue() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.motion = 1;
                    _this.w_angle = 15;
                    return _this;
                }
                return WaveShaderValue;
            }(UIShaderValue));
            custom.WaveShaderValue = WaveShaderValue;
            // 水波
            var WaveShader = /** @class */ (function (_super) {
                __extends(WaveShader, _super);
                function WaveShader() {
                    var _this = this;
                    //顶点着色器程序和片元着色器程序。
                    var vsCode = UIShader.vsCode;
                    var psCode = "precision mediump float;\n" +
                        "uniform sampler2D texture;\n" +
                        "varying vec2 v_texcoord;\n" +
                        "uniform float motion;\n" +
                        "uniform float v_alpha;\n" +
                        "uniform float w_angle;\n" +
                        "void main()\n" +
                        "{\n" +
                        "	vec2 tmp = v_texcoord;\n" +
                        "	tmp.x = tmp.x + 0.001 * sin(motion +  tmp.x * w_angle);\n" +
                        "	tmp.y = tmp.y + 0.001 * sin(motion +  tmp.y * w_angle);\n" +
                        "	vec4 infoUv = texture2D(texture, tmp);\n" +
                        "	infoUv.w *= v_alpha;\n" +
                        "	infoUv.xyz *= infoUv.w;\n" +
                        "	gl_FragColor = infoUv;\n" +
                        "}";
                    _this = _super.call(this, vsCode, psCode, "WaveShader") || this;
                    return _this;
                }
                Object.defineProperty(WaveShader, "shader", {
                    /**
                     *当前着色器的一个实例对象
                     */
                    get: function () {
                        if (!this._shader) {
                            this._shader = new WaveShader();
                        }
                        return this._shader;
                    },
                    enumerable: true,
                    configurable: true
                });
                return WaveShader;
            }(Laya.Shader));
            custom.WaveShader = WaveShader;
            var FELightSweepShaderValue = /** @class */ (function (_super) {
                __extends(FELightSweepShaderValue, _super);
                function FELightSweepShaderValue() {
                    var _this = _super.call(this) || this;
                    _this.UV = [0, 0, 1, 0, 1, 1, 0, 1];
                    if (_this.setFilters && typeof _this.setFilters === "function") {
                        _this.setFilters(FELightSweepShaderValue.filters);
                    }
                    return _this;
                }
                Object.defineProperty(FELightSweepShaderValue, "filters", {
                    get: function () {
                        if (!this._filters) {
                            this._filters = [new ColorFilter([
                                    2, 0, 0, 0, 0,
                                    0, .5, 0, 0, 0,
                                    0, 0, .5, 0, 0,
                                    0, 0, 0, 1, 0,
                                ])];
                        }
                        return this._filters;
                    },
                    enumerable: true,
                    configurable: true
                });
                return FELightSweepShaderValue;
            }(UIShaderValue));
            custom.FELightSweepShaderValue = FELightSweepShaderValue;
            // 扫光
            var FELightSweepShader = /** @class */ (function (_super) {
                __extends(FELightSweepShader, _super);
                function FELightSweepShader() {
                    var _this = this;
                    //顶点着色器程序和片元着色器程序。
                    var vsCode = UIShader.vsCode;
                    var psCode = "precision mediump float;\n" +
                        "uniform sampler2D texture;\n" +
                        "varying vec2 v_texcoord;\n" +
                        "uniform float v_alpha;" +
                        "uniform float UV[8];\n" +
                        "uniform float time;\n" +
                        "uniform float opacity;\n" +
                        "uniform float A, B;\n" +
                        "uniform float dx, dy;\n" +
                        "uniform float radius;\n" +
                        "uniform float shineFactor;\n" +
                        "uniform vec4 colorAlpha;\n" +
                        "uniform mat4 colorMat;\n" +
                        "void main(void)\n" +
                        "{\n" +
                        "	float nowLineC = -A*(dx*time) - B*(dy*time);\n" +
                        "	float x = v_texcoord.x;\n" +
                        "	float y = v_texcoord.y;\n" +
                        "	float allLineC = -A*x - B*y;\n" +
                        "	float dist = abs(allLineC - nowLineC) / sqrt(A*A + B*B);\n" +
                        // "	vec2 temp = v_texcoord;\n" +
                        // 处理下UV
                        "	vec2 temp = vec2(UV[0], UV[1]);\n" +
                        "	temp.x += (UV[2]-UV[0]) * v_texcoord.x;\n" +
                        "	temp.y += (UV[5]-UV[3]) * v_texcoord.y;\n" +
                        "	vec4 infoUv = texture2D(texture, temp);\n" +
                        "	infoUv.w *= v_alpha;\n" +
                        "	infoUv.xyz *= infoUv.w;\n" +
                        "	float multi = 1.0;\n" +
                        "	float factor = 1.0 - dist/radius;\n" +
                        "	if (dist < radius) {\n" +
                        "		multi = multi + (shineFactor - 1.0) * factor;\n" +
                        "		infoUv.xyz = vec3(infoUv.r, infoUv.g, infoUv.b)*multi;\n" +
                        "	}\n" +
                        "	gl_FragColor = infoUv;\n" +
                        "	mat4 alphaMat =colorMat;\n" +
                        "	alphaMat[0][3] *= gl_FragColor.a;\n" +
                        "	alphaMat[1][3] *= gl_FragColor.a;\n" +
                        "	alphaMat[2][3] *= gl_FragColor.a;\n" +
                        "	gl_FragColor = gl_FragColor * alphaMat;\n" +
                        "	gl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n" +
                        "}";
                    _this = _super.call(this, vsCode, psCode, "FELightSweepShader") || this;
                    return _this;
                }
                Object.defineProperty(FELightSweepShader, "shader", {
                    /**
                     *当前着色器的一个实例对象
                     */
                    get: function () {
                        if (!this._shader) {
                            this._shader = new FELightSweepShader();
                        }
                        return this._shader;
                    },
                    enumerable: true,
                    configurable: true
                });
                return FELightSweepShader;
            }(Laya.Shader));
            custom.FELightSweepShader = FELightSweepShader;
            var AddSweepShaderValue = /** @class */ (function (_super) {
                __extends(AddSweepShaderValue, _super);
                function AddSweepShaderValue() {
                    var _this = _super.call(this) || this;
                    _this.UV = [0, 0, 1, 0, 1, 1, 0, 1];
                    return _this;
                }
                return AddSweepShaderValue;
            }(UIShaderValue));
            custom.AddSweepShaderValue = AddSweepShaderValue;
            // 叠加
            var AddSweepShader = /** @class */ (function (_super) {
                __extends(AddSweepShader, _super);
                function AddSweepShader() {
                    var _this = this;
                    //顶点着色器程序和片元着色器程序。
                    var vsCode = UIShader.vsCode;
                    var psCode = "precision mediump float;\n" +
                        "uniform sampler2D texture;\n" +
                        "varying vec2 v_texcoord;\n" +
                        "uniform float v_alpha;" +
                        "uniform float UV[8];\n" +
                        "void main(void)\n" +
                        "{\n" +
                        // "	vec2 temp = v_texcoord;\n" +
                        // 处理下UV
                        "	vec2 temp = vec2(UV[0], UV[1]);\n" +
                        "	temp.x += (UV[2]-UV[0]) * v_texcoord.x;\n" +
                        "	temp.y += (UV[5]-UV[3]) * v_texcoord.y;\n" +
                        "	vec4 infoUv = texture2D(texture, temp);\n" +
                        "	infoUv.w *= v_alpha;\n" +
                        "	infoUv.xyz *= infoUv.w;\n" +
                        "	gl_FragColor = infoUv;\n" +
                        "}";
                    _this = _super.call(this, vsCode, psCode, "AddSweepShader") || this;
                    return _this;
                }
                Object.defineProperty(AddSweepShader, "shader", {
                    /**
                     *当前着色器的一个实例对象
                     */
                    get: function () {
                        if (!this._shader) {
                            this._shader = new AddSweepShader();
                        }
                        return this._shader;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AddSweepShader;
            }(Laya.Shader));
            custom.AddSweepShader = AddSweepShader;
        })(custom = render.custom || (render.custom = {}));
    })(render = gamebuyu.render || (gamebuyu.render = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=Shader.js.map