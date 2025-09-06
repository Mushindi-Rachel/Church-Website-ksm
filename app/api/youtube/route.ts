import { NextResponse } from "next/server";

export async function GET() {
  // Example: fetch from YouTube API
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${process.env.NEXT_PUBLIC_YT_PLAYLIST_ID}&part=snippet&maxResults=10&key=${process.env.NEXT_PUBLIC_YT_API_KEY}`
  );

  const data = await res.json();

  // Map the data to the shape your page expects
  const sermons = data.items.map((item: any) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    image: item.snippet.thumbnails.high.url,
    date: item.snippet.publishedAt,
    speaker: "Unknown", // You can add custom logic if needed
  }));

  return NextResponse.json(sermons);
}
