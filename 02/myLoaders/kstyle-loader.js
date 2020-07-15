//动态生成style 把css插入

module.exports = function (source) {
  console.log(source);
  return `const tag = document.createElement('style');
    tag.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(tag)`;
};
