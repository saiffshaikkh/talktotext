"use client";

import { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import { forwardRef } from "react";

// ForwardRefEditor.tsx

const Editor = dynamic(() => import("./mdx-editor"), {
  ssr: false,
});

export const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <Editor {...props} editorRef={ref} />
);

ForwardRefEditor.displayName = "ForwardRefEditor";
