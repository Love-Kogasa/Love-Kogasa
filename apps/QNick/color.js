export var colors = (function( mapstring ){
  var colorMap = []
  for( let color of mapstring.split( "\n" ) ){
    let [ code, name ] = color.split( " " )
    colorMap.push( [ code, name ] )
  }
  return colorMap
})(
/** QQNick 颜色对照表 */
`<&ÿĀĀĀ> 黑色
<&ÿÿ5@> 红色
<&ÿÿ]> 粉色
<&ÿÇý> 蓝色
<&ÿÄW> 绿色
<&ÿÿÏP> 黄色
<%ĀĀÐ> 初春
<%ĀĀÑ> 冬梅
<%ĀĀ×> 日出
<%ĀĀØ> 盛夏
<%ĀĀÙ> 糖果冰纷
<%ĀĀÚ> 晚秋
<%ĀĀÛ> 夜空
<%ĀĀÜ> 粉黛
<%ĀĀÝ> 朝夕
<%ĀĀÞ> 潮流
<&ÿÒUÐ> 紫色`
)

export var syms = [
  [ "awa", "awa" ],
  [ "qwq", "qwq" ],
  [ "sss", "sss" ],
  [ "˃ʍ˂", "˃ʍ˂" ],
  [ "喵~", "喵~" ],
  [ "呜~", "呜~" ],
  [ "^w^", "^w^" ]
]