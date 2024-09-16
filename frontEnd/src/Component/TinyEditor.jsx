import React, { useEffect, useRef } from "react";

export default function TinyEditor({ editorContent, setEditorContent, tinyNo }) {
  const editorRef = useRef(null);

  useEffect(() => {
    let api_key = import.meta.env.VITE_OPEN_AI_API_KEY;

    // Initialize TinyMCE when the component mounts
    if (window.tinymce) {
      window.tinymce.init({
        target: editorRef.current,
        height: 500,
        menubar: true,
        toolbar:
          "undo redo | aidialog aishortcuts | charmap | blocks fontsizeinput | bold italic | align numlist bullist | link | table pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | emoticons checklist | code fullscreen preview | save print | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck",
        plugins:
          "ai preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen link codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage help formatpainter permanentpen pageembed charmap mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate markdown",
 
        ai_request: (request, respondWith) => {
          // Handle AI request
          const openAiOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${api_key}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              temperature: 0.7,
              max_tokens: 800,
              messages: [{ role: "user", content: request.prompt }],
            }),
          };
          respondWith.string((signal) =>
            window
              .fetch("https://api.openai.com/v1/chat/completions", { signal, ...openAiOptions })
              .then(async (response) => {
                if (response) {
                  const data = await response.json();
                  if (data.error) {
                    throw new Error(`${data.error.type}: ${data.error.message}`);
                  } else if (response.ok) {
                    return data?.choices[0]?.message?.content?.trim();
                  }
                } else {
                  throw new Error("Failed to communicate with the AI");
                }
              })
          );
        },
        setup: (editor) => {
          // Add a custom button or any setup logic here
          editor.ui.registry.addButton("customButton", {
            text: "My Custom Button",
            onAction: function () {
              editor.insertContent("&nbsp;<strong>Custom content!</strong>&nbsp;");
            },
          });

          // Capture the editor content on change and set it to the state
          editor.on("change", () => {
            const content = editor.getContent();
            setEditorContent(content, tinyNo); // Update the state with editor content
            // console.log("Editor Content changed:", content);  // Log the editor content
          });
        },
      });
    }

    // Cleanup TinyMCE when the component unmounts
    return () => {
      if (window.tinymce && editorRef.current) {
        window.tinymce.remove(editorRef.current);
      }
    };
  }, [editorRef]);

  return (
    <div style={{ padding: "15px 0px" }} className="shadow-lg">
      {/* Textarea ref where TinyMCE will be initialized */}
      <textarea ref={editorRef} defaultValue={editorContent} key={tinyNo} />
    </div>
  );
}

//before
// import { Editor } from "@tinymce/tinymce-react";
// import React, { useEffect, useRef, useState } from "react";

// export default function TinyEditor({ editorContent, setEditorContent, tinyNo }) {
//   const editorRef = useRef(null);
//   // const [editorContent, setEditorContent] = useState("");
//   // useEffect(() => {
//   //   console.log(editorContent);
//   // }, [editorContent]);
//   return (
//     <>
//       <div className="flex justify-evenly gap-5 items-center shadow-xl"></div>
//       <div className="my-4 shadow-sm shadow-slate-900">
//         <Editor
//           // apiKey="5vbh0y1nq5y6uokc071mjvy9n4fnss5ctasrjft7x7ajm9fl"
//           // apiKey="5xks6zml6w83bmcfwul7tacgt4gofflf43pfx1gmk2gwkzdl"
//           apiKey="d4jnpbcnjlfdqcv1e6q86bb244nopswwdhygb27z4m9f33fp"
//           onInit={(_evt, editor) => (editorRef.current = editor)}
//           value={editorContent}
//           onEditorChange={(newValue) => setEditorContent(newValue, tinyNo)}
//           init={{
//             height: 300,
//             menubar: false,
//             plugins: [
//               "advlist",
//               "autolink",
//               "lists",
//               "link",
//               "image",
//               "charmap",
//               "preview",
//               "anchor",
//               "searchreplace",
//               "visualblocks",
//               "code",
//               "fullscreen",
//               "insertdatetime",
//               "media",
//               "table",
//               "code",
//               "help",
//               "wordcount",
//               "powerpaste",
//             ],
//             toolbar:
//               "undo redo | blocks | bold italic forecolor | alignleft aligncenter " +
//               "alignright alignjustify | bullist numlist outdent indent | " +
//               "removeformat | help",
//             content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//           }}
//         />
//       </div>
//     </>
//   );
// }

//gautam

// import { Editor } from "@tinymce/tinymce-react";
// import React, { useEffect, useRef, useState } from "react";

// export default function TinyEditor({ editorContent, setEditorContent, tinyNo }) {
//   const editorRef = useRef(null);

//   useEffect(() => {

//     let api_key = '';
//     // Initialize TinyMCE when the component mounts
//     if (window.tinymce) {
//       window.tinymce.init({
//         target: editorRef.current,
//         height: 500,
//         menubar: true,
//         toolbar: 'undo redo | aidialog aishortcuts | charmap | blocks fontsizeinput | bold italic | align numlist bullist | link | table pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | emoticons checklist | code fullscreen preview | save print | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck',

//         plugins: 'ai preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen link codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage help formatpainter permanentpen pageembed charmap mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate markdown',

//         ai_request: (request, respondWith) => {
//           const openAiOptions = {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ${api_key}`
//           },
//           body: JSON.stringify({
//               model: 'gpt-3.5-turbo',
//               temperature: 0.7,
//               max_tokens: 800,
//               messages: [{ role: 'user', content: request.prompt }],
//           })
//           };
//           respondWith.string((signal) => window.fetch('https://api.openai.com/v1/chat/completions', { signal, ...openAiOptions })
//           .then(async (response) => {
//               if (response) {
//               const data = await response.json();
//               if (data.error) {
//                   throw new Error(`${data.error.type}: ${data.error.message}`);
//               } else if (response.ok) {
//                   // Extract the response content from the data returned by the API
//                   return data?.choices[0]?.message?.content?.trim();
//               }
//               } else {
//                   throw new Error('Failed to communicate with the AI');
//               }
//           })
//           );
//       },
//       ai_shortcuts: [
//           { title: 'Summarize content', prompt: 'Provide the key points and concepts in this content in a succinct summary.', selection: true },
//           { title: 'Improve writing', prompt: 'Rewrite this content with no spelling mistakes, proper grammar, and with more descriptive language, using best writing practices without losing the original meaning.', selection: true },
//           { title: 'Simplify language', prompt: 'Rewrite this content with simplified language and reduce the complexity of the writing, so that the content is easier to understand.', selection: true },
//           { title: 'Expand upon', prompt: 'Expand upon this content with descriptive language and more detailed explanations, to make the writing easier to understand and increase the length of the content.', selection: true },
//           { title: 'Trim content', prompt: 'Remove any repetitive, redundant, or non-essential writing in this content without changing the meaning or losing any key information.', selection: true },
//           { title: 'Change tone', subprompts: [
//               { title: 'Professional', prompt: 'Rewrite this content using polished, formal, and respectful language to convey professional expertise and competence.', selection: true },
//               { title: 'Casual', prompt: 'Rewrite this content with casual, informal language to convey a casual conversation with a real person.', selection: true },
//               { title: 'Direct', prompt: 'Rewrite this content with direct language using only the essential information.', selection: true },
//               { title: 'Confident', prompt: 'Rewrite this content using compelling, optimistic language to convey confidence in the writing.', selection: true },
//               { title: 'Friendly', prompt: 'Rewrite this content using friendly, comforting language, to convey understanding and empathy.', selection: true },
//           ] },
//           { title: 'Change style', subprompts: [
//               { title: 'Business', prompt: 'Rewrite this content as a business professional with formal language.', selection: true },
//               { title: 'Legal', prompt: 'Rewrite this content as a legal professional using valid legal terminology.', selection: true },
//               { title: 'Journalism', prompt: 'Rewrite this content as a journalist using engaging language to convey the importance of the information.', selection: true },
//               { title: 'Medical', prompt: 'Rewrite this content as a medical professional using valid medical terminology.', selection: true },
//               { title: 'Poetic', prompt: 'Rewrite this content as a poem using poetic techniques without losing the original meaning.', selection: true },
//           ] }
//       ],
//       paste_data_images: true,
//       images_upload_url: false,
//       images_upload_handler: false,
//       automatic_uploads: false,
//         setup: (editor) => {
//           // Add a custom button or any setup logic here
//           editor.ui.registry.addButton('customButton', {
//             text: 'My Custom Button',
//             onAction: function () {
//               editor.insertContent('&nbsp;<strong>Custom content!</strong>&nbsp;');
//             },
//           });
//         },
//       });
//     }

//     // Cleanup TinyMCE when the component unmounts
//     return () => {
//       if (window.tinymce) {
//         window.tinymce.remove(editorRef.current);
//       }
//     };
//   }, []);

//   // useEffect(()=>{
//   //   console.log(editorRef);
//   // },[editorRef]);
//   return (
//     <div style={{ padding: '20px' }}>
//       {/* Textarea ref where TinyMCE will be initialized */}
//       <textarea
//       ref={editorRef}
//       value={editorContent}
//       onChange={(data) => {
//         console.log("Content changed:", data.target.value); // Log the changed data
//         setEditorContent(data.target.value, tinyNo);
//       }}
// />
//     </div>
//   );
// };
