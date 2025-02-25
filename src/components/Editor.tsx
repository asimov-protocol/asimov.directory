'use client';

import type { EditorProps, Monaco } from '@monaco-editor/react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
});

const Editor: React.FC<EditorProps> = (props) => {
  const handleLoadEditor = (_editor: any, monaco: Monaco) => {
    if (!monaco) {
      console.error('Monaco is undefined');
      return;
    }

    monaco.editor.defineTheme('asimovEditorTheme', {
      base: 'vs-dark',
      rules: [],
      inherit: true,
      colors: {
        'editor.background': '#05122e',
        'editor.foreground': '#f6f6f6',
        'editorWidget.border': '#f6f6f6',
      },
    });

    monaco.editor.setTheme('asimovEditorTheme');
  };

  return (
    <MonacoEditor
      {...props}
      options={{
        ...props.options,
        minimap: { enabled: false },
        fontSize: 14,
      }}
      onMount={handleLoadEditor}
      theme="asimovEditorTheme"
    />
  );
};

export default Editor;
