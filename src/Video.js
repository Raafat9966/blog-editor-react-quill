import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "videojs-hls-quality-selector";
import "videojs-seek-buttons";
import "videojs-contrib-quality-levels";

function Video() {
	const playerRef = useRef();

	useEffect(() => {
		const player = videojs(
			playerRef.current,
			{ autoplay: false, muted: false },
			() => {
				player.src({
					src: "https://vod-hls-2-destination-jd16ors2klrm.s3.amazonaws.com/50f9b966-6518-468b-9479-915ebe334496/hls/vid.m3u8",
					type: "application/x-mpegURL",
				});
			}
		);
		player.hlsQualitySelector({
			displayCurrentQuality: true,
		});

		player.seekButtons({
			forward: 10,
			back: 10,
		});

		player.qualityLevels();

		return () => {
			player.dispose();
		};
	}, []);
	return (
		<div data-vjs-player>
			<video
				ref={playerRef}
				class="video-js"
				controls
				preload="auto"
				width="720"
				height="420"
				data-setup="{}"
			/>
		</div>
	);
}

export default Video;
