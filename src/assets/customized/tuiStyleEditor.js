const tuiStyleEditor = `
.CodeMirror {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.toastoastui-editor-contents *:not(table) {
    line-height: 1.5;
    box-sizing: content-box;
}

.toastoastui-editor-contents i,
.toastoastui-editor-contents cite,
.toastoastui-editor-contents em,
.toastoastui-editor-contents var,
.toastoastui-editor-contents address,
.toastoastui-editor-contents dfn {
    font-style: italic;
}

.toastoastui-editor-contents strong {
    font-weight: bold;
}

.toastoastui-editor-contents p {
    margin: 10px 0;
    color: #555;
}

.toastoastui-editor-contents > h1:first-of-type,
.toastoastui-editor-contents > div > div:first-of-type h1 {
      margin-top: 14px;
}

.toastoastui-editor-contents h1,
.toastoastui-editor-contents h2,
.toastoastui-editor-contents h3,
.toastoastui-editor-contents h5 {
    font-weight: bold;
}

.toastoastui-editor-contents h1 {
    font-size: 1.6rem;
    line-height: 28px;
    border-bottom: 3px double #999;
    margin: 52px 0 15px 0;
    padding-bottom: 7px;
    color: #000;
}

.toastoastui-editor-contents h2 {
    font-size: 1.3rem;
    line-height: 23px;
    border-bottom: 1px solid #dbdbdb;
    margin: 30px 0 13px 0;
    padding-bottom: 7px;
    color: #333;
}

.toastoastui-editor-contents h3,
.toastoastui-editor-contents h4 {
    font-size: 1.2rem;
    line-height: 18px;
    margin: 20px 0 2px;
    color: #333;
}

.toastoastui-editor-contents h5,
.toastoastui-editor-contents h6 {
    font-size: 1rem;
    line-height: 17px;
    margin: 10px 0 -4px;
    color: #333;
}

.toastoastui-editor-contents blockquote {
    margin: 15px 0;
}

.toastoastui-editor-contents blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;
}

.toastoastui-editor-contents blockquote > :first-child {
    margin-top: 0;
}

.toastoastui-editor-contents  blockquote > :last-child {
    margin-bottom: 0;
}

.toastoastui-editor-contents pre,
.toastoastui-editor-contents code {
    border: 0;
    border-radius: 0;
}

.toastoastui-editor-contents pre {
    margin: 2px 0 8px;
    padding: 18px;
    background-color: #f5f7f8;
}

.toastoastui-editor-contents code {
    color: #c1788b;
    padding: 4px 4px 2px 0;
    letter-spacing: -0.3px;
}

.toastoastui-editor-contents pre code {
    padding: 0;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
}

.toastoastui-editor-contents pre.addon {
    border: 1px solid #e8ebed;
    background-color: #fff;
}

.toastoastui-editor-contents img {
    margin: 4px 0 10px;
    box-sizing: border-box;
    vertical-align: top;
    max-width: 100%;
}

.toastoastui-editor-contents table {
    margin: 2px 0 14px;
    color: #555;
    width: auto;
    border-collapse: collapse;
    box-sizing: border-box;
}

.toastoastui-editor-contents table th, 
.toastoastui-editor-contents table td {
    height: 32px;
    padding: 5px 14px 5px 12px;
}

.toastoastui-editor-contents table td {
    border: 1px solid #eaeaea;
}

.toastoastui-editor-contents table th {
    border: 1px solid #72777b;
    border-top: 0;
    background-color: #7b8184;
    font-weight: 300;
    color: #fff;
    padding-top: 6px;
}

.toastoastui-editor-contents ul,
.toastoastui-editor-contents menu,
.toastoastui-editor-contents ol,
.toastoastui-editor-contents dir {
    display: block;
    list-style-type: disc;
    padding-left: 17px;
    margin: 6px 0 10px;
    color: #555;
}

.toastoastui-editor-contents ol {
    list-style-type: decimal;
}

.toastoastui-editor-contents ul ul,
.toastoastui-editor-contents ul ol,
.toastoastui-editor-contents ol ol,
.toastoastui-editor-contents ol ul {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

.toastoastui-editor-contents ul li,
.toastoastui-editor-contents ol li {
    position: relative;
}

.toastoastui-editor-contents ul p, ol p {
    margin: 0;
}

.toastoastui-editor-contents ul li.task-list-item:before,
.toastoastui-editor-contents ol li.task-list-item:before,
.toastoastui-editor-contents pre ul li:before {
    content: "";
}

.toastoastui-editor-contents hr {
    border-top: 1px solid #eee;
    margin: 16px 0;
}

.toastoastui-editor-contents a {
    text-decoration: underline;
    color: #5286bc;
}

.toastoastui-editor-contents a:hover {
    color: #007cff;
}

.toastoastui-editor-contents {
    font-size: 13px;
    margin: 0;
    padding: 0;
}

.toastoastui-editor-contents .task-list-item {
    border: 0;
    list-style: none;
    padding-left: 22px;
    margin-left: -22px;
    min-height: 20px;
}

.toastoastui-editor-contents .task-list-item:before {
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: center;
    content: "";
    height: 18px;
    width: 18px;
    position: absolute;
    left: 0;
    top: 1px;
    cursor: pointer;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAADdJREFUKBVjvHv37n8GMgALSI+SkhJJWu/du8fARJIOJMWjGpECA505GjjoIYLEB6dVUNojFQAA/1MJUFWet/4AAAAASUVORK5CYII=');
}

.toastoastui-editor-contents .task-list-item.checked:before {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAMpJREFUKBVjjJ/64D8DGYCJDD1gLbTVyM3OxJDiJMzAxcYIdyALnIWDAdJU7i/OICfCxsDMxMgwc88bwk5F1vTs/W+GFUffwY2H+1FBlI2hLliCQYCbGSyJrqlzwwuGj9//YWoMtRBgUBJnZ6gMEGeQFWaFOw9kE7omkG5GWDyCPF7mJ86gIMbO8P//fwZGRkYGXJpAGuFO/fbrP0PXppcMD179JKgJRSOIA9N8/NZXrM4DqYEBjOgAaYYFOUwRNhruVGyS+MTI1ggAx8NTGcUtFVQAAAAASUVORK5CYII=');
}

.toastoastui-editor-contents .task-list-item input[type='checkbox'],
.toastoastui-editor-contents .task-list-item .task-list-item-checkbox {
    margin-left: -17px;
    margin-right: 3.8px;
    margin-top: 3px;
}

.toastoastui-editor-contents-placeholder:before {
    content: attr(data-placeholder);
    color:grey;
    line-height: 160%;
    position: absolute;
}
`;
export default tuiStyleEditor;