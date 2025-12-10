"use client";
// InitializedMDXEditor.tsx
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  linkPlugin,
  imagePlugin,
  tablePlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: "JavaScript",
            css: "CSS",
            bash: "Bash",
            "": "Plain Text",
            plaintext: "Plain Text",
            text: "Plain Text",
            typescript: "TypeScript",
            tsx: "TypeScript React",
            jsx: "React",
            json: "JSON",
            html: "HTML",
            sql: "SQL",
            markdown: "Markdown",
            yaml: "YAML",
          },
        }),
        linkPlugin(),
        imagePlugin(),
        tablePlugin(),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
