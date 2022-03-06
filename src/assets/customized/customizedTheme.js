import githubStyleEditor from "./githubStyleEditor";
import githubStylePdf from "./githubStylePdf";
import tuiStyleEditor from "./tuiStyleEditor"
import tuiStylePdf from "./tuiStylePdf"
let themes = {
    github: {
        id: 'github',
        editorCss: githubStyleEditor,
        pdfCss: githubStylePdf
    },
    tui: {
        id: 'tui',
        editorCss: tuiStyleEditor,
        pdfCss: tuiStylePdf
    }
}

const addStyleSheet = ({ id, css }) => {
    const sheet = document.createElement('style');
    sheet.setAttribute('id', id);
    sheet.innerHTML = css;
    document.body.appendChild(sheet);
}

const removeStyleSheet = (styleId) => {
    const sheetToBeRemoved = document.getElementById(styleId);
    console.log('---', sheetToBeRemoved)
    sheetToBeRemoved.remove();
}

const addEditorStyle = (name) => {
    let theme = {
        id: themes[name].id,
        css: themes[name].editorCss
    };
    addStyleSheet(theme);
}

const addPdfStyle = (name) => {
    let theme = {
        id: themes[name].id,
        css: themes[name].pdfCss
    }
    addEditorStyle(theme);
}

const getOutline = ({ content, css, }) => {
    return `<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css" media="print">
    @page {
      size: auto;  /* auto is the initial value */
      margin: 0mm; /* this affects the margin in the printer settings */
    }
    </style>
    <style type="text/css">
      ${css}
    </style>
    </head>`+ `
    <body>
        ${content}
    </body>`;
}

export default { themes, addEditorStyle, addPdfStyle, removeStyleSheet, getOutline };