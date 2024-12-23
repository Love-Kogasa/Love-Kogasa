# 实用Regex汇总
一些实用的正则表达式的汇总，大家可以拿去用做写*perl*，*sed*，*Java*，*js*，*dart*脚本以及语法高亮插件等.  
## Regex
* 匹配变量名
```js
/[0-9a-zA-Z_\$]+/
```
* 匹配*<<<*开头的任意字符(不包括空格空行以及Tab)
使用时请把\<替换成你匹配的字符
```js
/\<\<\<[^\s]+/
```
* 匹配*>>>*结尾的任意字符(字符与符号间可包含一个空格)(不包括空行以及Tab)
```js
/[^\s]+\s*(?=\>\>\>)/
```
* 匹配*{{*和*}}*中的字符( 匹配到的字符不包括*{{*和*}}* )
```js
/[^(\{\{)]+(?=(\}\}))/
```
* 匹配关键词  
不建议用regex匹配关键词(正则表达式效率较低)
```js
/\b(关键词1|关键词2|关键词3)\b/
```
* 匹配文件路径(包括根目录"/"，线路中不匹配空格，空行和Tab字符)
```js
/([^\/\s]*\/[^\/\s]*)+/
```
* 匹配ID( 如xxx:yyy, 不包括特殊字符以及_ )
```js
/[a-zA-Z]\w*:\w+/
```
* 匹配HEX颜色
```js
/\#[0-9a-fA-F]{3,8}/
```
## Example
一个简单的JS示例  
```js
function isPath( path ){
  var regex = new RegExp( "([^\/\s]*\/[^\/\s]*)+" )
  // Or var regex = /([^\/\s]*\/[^\/\s]*)+/
  // 大多数编程语言中，如果加//则代表正则(和字符串一样的一种数据类型)，而当做字符串(比如用于实例化正则对象)时不加双/
  return path.match( regex )
  // 如果是线路就返回包含匹配到的内容的对象
  // 注: String.prototype.test 方法并不存在
}

console.log( !!isPath( "hello/world" ) )
// true
console.log( !!isPath( "114514" ) )
// false
```