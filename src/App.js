import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

function App() {
	const [value, setValue] = useState({});
	const [html, setHtml] = useState("");
	const ref = useRef(null);

	const handleChange = (html, delta, source, editor) => {
		setValue({
			editorHtml: html,
			delta: editor.getContents(),
		});

		if (value.delta === undefined) return;
		else {
			var cfg = {};
			var converter = new QuillDeltaToHtmlConverter(value.delta.ops, cfg);
			setHtml(converter.convert());

			ref.current.innerHTML = html;
		}
	};
	console.log(value.delta);

	useEffect(() => {
		ref.current.innerHTML = html;
		console.log(ref.current);
	}, []);

	const modules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }, { font: [] }],
			[{ size: [] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
			],
			["link", "image", "video"],
			["clean"],
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		},
	};

	const formats = [
		"header",
		"font",
		"size",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"video",
	];

	return (
		<div className="container">
			<ReactQuill
				name="editor"
				theme="snow"
				value={value.editorHtml}
				onChange={handleChange}
				modules={modules}
				formats={formats}
				placeholder="Write your post here..."
			/>
			<div ref={ref}>
				{/* <Interweave content={value.delta} />
				<p>{html}</p> */}
			</div>
		</div>
	);
}

export default App;
