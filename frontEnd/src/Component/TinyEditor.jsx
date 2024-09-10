import React, { useEffect, useRef } from "react";

export default function TinyEditor({ editorContent, setEditorContent, tinyNo }) {
  const editorRef = useRef(null);

  useEffect(() => {
    let api_key = "";

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
            console.log("Editor Content changed:", content); // Log the editor content
          });
        },
      });
    }

    // Cleanup TinyMCE when the component unmounts
    return () => {
      if (window.tinymce) {
        window.tinymce.remove(editorRef.current);
      }
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* Textarea ref where TinyMCE will be initialized */}
      <textarea ref={editorRef} value={editorContent} />
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
