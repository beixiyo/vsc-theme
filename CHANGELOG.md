# Change Log

## [0.1.2]
- Initial release

## [0.1.3]
- 突出 Git Diff 的增减配色视觉效果

## [0.1.4]
- 让 null、undefined、true、false 等语言常量关键字显示为斜体

## [1.0.0]
- 支持 go、rust 等更加细粒度的 Token 上色
- 大幅删除无用配置代码
- xml 标签颜色改为 浅蓝
- 结构体属性颜色改为 属性黄
- 调低 Git diff 鲜艳程度

## [1.0.1]
- **TSX 纯文本**：TSX 中的 JSX 标签（`meta.tag.tsx` / `source.tsx meta.tag`）改为中性白 `#c2c2c2`，不再使用浅蓝
- **HTML 内嵌 JS 纯文本**：HTML 内 `<script>` 中的变量（`variable.other.readwrite`）改为中性白 `#c2c2c2`，不再使用变量红
- **Markdown 加粗**：由常量黄改为属性黄橙 `#d19a66`，降低亮度
- **Markdown 斜体**：单独拆条，改为标签浅蓝 `#6f9bff`，斜体样式

## [1.0.2]
- 调低 Git diff 的鲜艳度，减小视觉疲劳