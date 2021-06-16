import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor(props) {
	const { setValue, post, setPost, value } = props;

	// extracting text content and convert it to JSON
	const handleQuill = (html, delta, source, editor) => {
		setValue({
			editorHtml: html,
			delta: editor.getContents(),
		});
	};
	const handleTitle = (e) => {
		setPost({ ...post, title: e.target.value });
	};

	// quill toolbar modules
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

	// quill toolbar formats
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
		<div>
			<input
				type="text"
				name="title"
				id="title"
				placeholder="Title..."
				value={post.title}
				onChange={handleTitle}
			/>
			<ReactQuill
				name="editor"
				theme="snow"
				value={value.editorHtml || ""}
				onChange={handleQuill}
				modules={modules}
				formats={formats}
				placeholder="Write your post here..."
			/>
		</div>
	);
}

export default Editor;
