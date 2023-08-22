import "./index.scss";
import 'highlight.js/styles/atom-one-dark.css'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import shell from 'highlight.js/lib/languages/shell';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);

hljs.configure({ ignoreUnescapedHTML: true });

/**
 * 高亮代码块
 * @param {HTMLElement} codeElement 包含代码的 code 元素
 */
function highlightCode(codeElement) {
    hljs.highlightElement(codeElement);
}

/**
 * 给代码块添加行号
 * @param {HTMLElement} codeElement 包含代码的 code 元素
 */
function buildLineNumber(codeElement) {
    if (codeElement.classList.contains('hljsln')) {
        return;
    }

    codeElement.classList.add('hljsln');
    codeElement.innerHTML = addLineNumbersFor(codeElement.innerHTML);

    // 移除最后一个行号
    let lineElements = codeElement.querySelectorAll('span[data-num]');
    lineElements.item(lineElements.length - 1).remove();

}

/**
 * 给 html 字符串添加行号
 * @param {string} html 代码内部 html 字符串
 */
function addLineNumbersFor(html) {
    var text = html.replace(/<span[^>]*>|<\/span>/g, '');
    if (/\r|\n$/.test(text)) {
        html += '<span class="ln-eof"></span>';
    }
    var num = 1;
    html = html.replace(/\r\n|\r|\n/g, function (a) {
        num++;
        return a + '<span class="ln-num" data-num="' + num + '"></span>';
    });
    html = '<span class="ln-num" data-num="1"></span>' + html;
    html = '<span class="ln-bg"></span>' + html;
    return html;
}

/**
 * 创建代码块
 * @param {HTMLElement} codeElement 包含代码的 code 元素
 */
function buildCodeBlock(codeElement) {
    highlightCode(codeElement);
    buildLineNumber(codeElement);
}

export default buildCodeBlock;