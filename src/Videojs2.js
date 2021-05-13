import React from "react";
import VideoPlayer from "react-video-js-player";
import "videojs-hls-quality-selector";

function Video() {
	let player = VideoPlayer();
	player.hlsQualitySelector({
		displayCurrentQuality: true,
	});
	return (
		<div data-vjs-player>
			<VideoPlayer
				src="https://vod-hls-2-destination-jd16ors2klrm.s3.amazonaws.com/50f9b966-6518-468b-9479-915ebe334496/hls/vid.m3u8"
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
