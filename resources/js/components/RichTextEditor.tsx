// import Placeholder from '@tiptap/extension-placeholder';
// import TextAlign from '@tiptap/extension-text-align';
// import Underline from '@tiptap/extension-underline';
// import { EditorContent, useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import { useEffect } from 'react';

// const RichTextEditor = ({ value, onChange }) => {
//     const editor = useEditor({
//         extensions: [
//             StarterKit,
//             Underline,
//             TextAlign.configure({ types: ['heading', 'paragraph'] }),
//             Placeholder.configure({
//                 placeholder: 'Please enter a notification message...',
//             }),
//         ],
//         editorProps: {
//             attributes: {
//                 class: 'prose prose-sm sm:prose-base focus:outline-none min-h-[150px] p-4 text-gray-700 leading-relaxed',
//             },
//         },
//         onUpdate: ({ editor }) => {
//             // Send the HTML content back to the parent
//             onChange(editor.getHTML());
//         },
//     });

//     // This useEffect ensures the editor content updates if the 'value' prop changes externally
//     // (e.g., when loading data from Laravel for an "Edit" form)
//     useEffect(() => {
//         if (editor && value !== editor.getHTML()) {
//             editor.commands.setContent(value || '');
//         }
//     }, [value, editor]);

//     if (!editor) return null;

//     const isActive = (type, opts) => editor.isActive(type, opts);

//     return (
//         <div className="overflow-hidden rounded-lg border border-gray-300 bg-white">
//             {/* Toolbar */}
//             <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 bg-white px-3 py-2">
//                 {/* BOLD */}
//                 <button
//                     type="button" // Important: prevents form submission inside a form
//                     onClick={() => editor.chain().focus().toggleBold().run()}
//                     className={`font-serif font-bold ${isActive('bold') ? 'text-black' : 'text-gray-400'}`}
//                 >
//                     B
//                 </button>
//                 {/* ITALIC */}
//                 <button
//                     type="button"
//                     onClick={() => editor.chain().focus().toggleItalic().run()}
//                     className={`font-serif italic ${isActive('italic') ? 'text-black' : 'text-gray-400'}`}
//                 >
//                     I
//                 </button>
//                 {/* UNDERLINE */}
//                 <button
//                     type="button"
//                     onClick={() =>
//                         editor.chain().focus().toggleUnderline().run()
//                     }
//                     className={`font-serif underline ${isActive('underline') ? 'text-black' : 'text-gray-400'}`}
//                 >
//                     U
//                 </button>

//                 <div className="h-4 w-px bg-gray-200"></div>

//                 {/* ALIGNMENT */}
//                 <button
//                     type="button"
//                     onClick={() =>
//                         editor.chain().focus().setTextAlign('left').run()
//                     }
//                     className={
//                         isActive({ textAlign: 'left' })
//                             ? 'text-black'
//                             : 'text-gray-400'
//                     }
//                 >
//                     {/* Left Align Icon */}
//                     <svg
//                         className="h-4 w-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M4 6h16M4 12h16M4 18h16"
//                         />
//                     </svg>
//                 </button>
//                 <button
//                     type="button"
//                     onClick={() =>
//                         editor.chain().focus().setTextAlign('center').run()
//                     }
//                     className={
//                         isActive({ textAlign: 'center' })
//                             ? 'text-black'
//                             : 'text-gray-400'
//                     }
//                 >
//                     {/* Center Align Icon */}
//                     <svg
//                         className="h-4 w-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M4 6h16M4 12h10M4 18h16"
//                         />
//                     </svg>
//                 </button>
//             </div>

//             {/* Content */}
//             <EditorContent editor={editor} />
//         </div>
//     );
// };

// export default RichTextEditor;

import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

// 1. Define the interface for your props
interface RichTextEditorProps {
    value: string;
    onChange: (content: string) => void;
}

const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Placeholder.configure({
                placeholder: 'Please enter a notification message...',
            }),
        ],
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base focus:outline-none min-h-[150px] p-4 text-gray-700 leading-relaxed',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value || '');
        }
    }, [value, editor]);

    if (!editor) return null;

    // Helper for active states
    const isActive = (type: string, opts?: any) => editor.isActive(type, opts);

    return (
        <div className="overflow-hidden rounded-lg border border-gray-300 bg-white">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 bg-white px-3 py-2">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`font-serif font-bold ${isActive('bold') ? 'text-black' : 'text-gray-400'}`}
                >
                    B
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`font-serif italic ${isActive('italic') ? 'text-black' : 'text-gray-400'}`}
                >
                    I
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleUnderline().run()
                    }
                    className={`font-serif underline ${isActive('underline') ? 'text-black' : 'text-gray-400'}`}
                >
                    U
                </button>

                <div className="h-4 w-px bg-gray-200"></div>

                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().setTextAlign('left').run()
                    }
                    className={
                        isActive({ textAlign: 'left' })
                            ? 'text-black'
                            : 'text-gray-400'
                    }
                >
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().setTextAlign('center').run()
                    }
                    className={
                        isActive({ textAlign: 'center' })
                            ? 'text-black'
                            : 'text-gray-400'
                    }
                >
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h10M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <EditorContent editor={editor} />
        </div>
    );
};

export default RichTextEditor;
