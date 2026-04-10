# Change Log

## [1.0.4]
- 修复 TS 三目运算字符是斜体问题
- Markdown 引用块文字颜色调整为 `#696969`，提升暗色背景下可读性

## [1.0.3]
- 解决错误的操作符使用斜体问题
- 为 Dart、TOML、CSS、JSON、Markdown 等语言补充更细粒度的语义高亮 scope
- 再次微调 Git diff 相关配色，使新增/删除背景与侧边栏对比更柔和，并与 README 描述保持一致
- 调整 HTML / JSX 标签为更柔和的浅蓝 `#7d99db`
- CSS 属性名改为中性白 `#c2c2c2`

## [1.0.2]
- 调低 Git diff 的鲜艳度，减小视觉疲劳

## [1.0.1]
- **TSX 纯文本**：TSX 中的 JSX 标签（`meta.tag.tsx` / `source.tsx meta.tag`）改为中性白 `#c2c2c2`，不再使用浅蓝
- **HTML 内嵌 JS 纯文本**：HTML 内 `<script>` 中的变量（`variable.other.readwrite`）改为中性白 `#c2c2c2`，不再使用变量红
- **Markdown 加粗**：由常量黄改为属性黄橙 `#d19a66`，降低亮度
- **Markdown 斜体**：单独拆条，改为标签浅蓝 `#6f9bff`，斜体样式

## [1.0.0]
- 支持 go、rust 等更加细粒度的 Token 上色
- 大幅删除无用配置代码
- xml 标签颜色改为 浅蓝
- 结构体属性颜色改为 属性黄
- 调低 Git diff 鲜艳程度

## [0.1.4]
- 让 null、undefined、true、false 等语言常量关键字显示为斜体

## [0.1.3]
- 突出 Git Diff 的增减配色视觉效果

## [0.1.2]
- Initial release
