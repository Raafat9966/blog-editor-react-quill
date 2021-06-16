import React, { useState, useEffect } from "react";
import Editor from "../components/editor";
import Posts from "../components/posts";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

function Blog() {
	const [post, setPost] = useState({});

	const [value, setValue] = useState({ title: "", content: "" });

	useEffect(() => {
		if (value.delta === undefined) return;
		else {
			var cfg = {};
			var converter = new QuillDeltaToHtmlConverter(value.delta.ops, cfg);
			setPost({ ...post, content: converter.convert() });
		}
	}, [value]);

	return (
		<div className="container">
			<Editor
				post={post}
				value={value}
				setPost={setPost}
				setValue={setValue}
			/>
			<Posts post={post} />
		</div>
	);
}

export default Blog;
