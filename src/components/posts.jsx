import React, { useRef, useEffect } from "react";

function posts({ post }) {
	const ref = useRef(null);

	useEffect(() => {
		if (post.content === undefined) return;
		ref.current.innerHTML = post.content;
	}, [post]);

	return (
		<div className="post">
			<h2>{post.title}</h2>
			<div ref={ref}></div>
		</div>
	);
}

export default posts;
