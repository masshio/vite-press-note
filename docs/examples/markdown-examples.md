# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by [VitePress](https://vitepress.dev/zh/guide/markdown).

## 内部链接跳转

**Good**:smiling_face_with_three_hearts:

```md
<!-- 推荐 -->
[内部链接](/examples/markdown-examples)
[内部链接](/examples/markdown-examples#syntax-highlighting)
```

**Bad**:sweat_smile:
```md
<!-- 可以但不推荐 -->
[内部链接](/examples/markdown-examples.md)
[内部链接](/examples/markdown-examples.html)
```

## Emoji :partying_face:

**输入**
```md
:partying_face:
```

**输出**
:partying_face: :rofl:

[支持的emoji列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
