<template>
  <div id="app">
    <header>
      <div class="header-left">
        <a href="/">Resume</a>
      </div>
      <div class="header-right">
        <!-- <div class="dropdown">
          <a class="header-link">Theme<span>▼</span></a>
          <div class="dropdown-content">
            <a>GitHub</a>
            <a>TUI</a>
          </div>
        </div> -->
        <div class="dropdown">
          <a class="header-link">Download<span>▼</span></a>
          <div class="dropdown-content">
            <a @click="downloadPdf()">PDF</a>
            <a @click="downloadHtml()">HTML</a>
            <a @click="downloadMd()">MarkDown</a>
          </div>
        </div>
      </div>
    </header>
    <div class="editor">
      <editor
        ref="editor"
        height="calc(100vh - 64px)"
        :previewStyle="previewStyle"
        :useCommandShortcut="useCommandShortcut"
        :initialValue="initContent"
      />
    </div>
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";
import initContent from "./assets/initContent";
import fileDownload from "js-file-download";
import printJS from "print-js";
import "./assets/app.css";
export default {
  name: "App",
  data() {
    return {
      initContent: initContent,
      useCommandShortcut: true,
      previewStyle: window.innerWidth > 700 ? "vertical" : "tab",
      editor: this.$refs.editor,
    };
  },
  components: {
    editor: Editor,
  },
  methods: {
    downloadPdf: function () {
      let content = this.$refs.editor.invoke("getHTML");
      printJS({
        type: "raw-html",
        css: "",
        scanStyles: true,
        printable: content,
        targetStyles: ["*"],
        documentTitle: "&nbsp",
      });
    },
    downloadHtml: function () {
      let content = this.$refs.editor.invoke("getHTML");
      fileDownload(content, "resume.html");
    },
    downloadMd: function () {
      let content = this.$refs.editor.invoke("getMarkdown");
      fileDownload(content, "resume.md");
    },
  },
};
</script>

<style>
</style>
