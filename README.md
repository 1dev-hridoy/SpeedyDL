# SpeedyDL

![SpeedyDL Logo](https://i.ibb.co/hFgQrQWC/speedydl.png)

SpeedyDL is a package to download videos from Facebook, Instagram, TikTok, Twitter, and YouTube. This package provides a simple interface to download videos in various qualities.

## Installation

To install the package, run the following command:

```sh
npm install speedydl
```

## Usage

Here is an example of how to use the SpeedyDL package to download videos from various platforms:

```javascript
const {
  downloadFacebookVideo,
  downloadInstagramVideo,
  downloadTikTokVideo,
  downloadTwitterVideo,
  downloadYouTubeVideo,
} = require('speedydl');

(async () => {
  try {
    const fbVideo = await downloadFacebookVideo('https://www.facebook.com/video/12345');
    console.log('Facebook Video:', fbVideo);

    const igVideo = await downloadInstagramVideo('https://www.instagram.com/reel/ABC123/');
    console.log('Instagram Video:', igVideo);

    const ttVideo = await downloadTikTokVideo('https://www.tiktok.com/@user/video/12345');
    console.log('TikTok Video:', ttVideo);

    const twVideo = await downloadTwitterVideo('https://twitter.com/user/status/12345');
    console.log('Twitter Video:', twVideo);

    const ytVideo = await downloadYouTubeVideo('https://www.youtube.com/watch?v=ABC123');
    console.log('YouTube Video:', ytVideo);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

### API Endpoints

- **Facebook Video Downloader**
  - **Endpoint**: `/api/facebook`
  - **Method**: `GET`
  - **Description**: Download Facebook videos in SD and HD quality.
  - **Parameters**:
    - `url` (string, required): Facebook video URL to download.
  - **Example Request**: `/api/facebook?url=https://www.facebook.com/video/12345`
  - **Example Response**:
    ```json
    {
      "url": "https://www.facebook.com/video/12345",
      "sd": "https://video.fbcdn.net/sd.mp4",
      "hd": "https://video.fbcdn.net/hd.mp4",
      "title": "Sample Facebook Video",
      "thumbnail": "https://fbcdn.net/thumbnail.jpg",
      "dev": "1dev-hridoy"
    }
    ```

- **Instagram Video Downloader**
  - **Endpoint**: `/api/instagram`
  - **Method**: `GET`
  - **Description**: Download Instagram videos and reels.
  - **Parameters**:
    - `url` (string, required): Instagram video URL to download.
  - **Example Request**: `/api/instagram?url=https://www.instagram.com/reel/ABC123/`
  - **Example Response**:
    ```json
    {
      "url": "https://www.instagram.com/reel/ABC123/",
      "sd": "https://instagram.com/sd.mp4",
      "hd": "https://instagram.com/hd.mp4",
      "title": "Instagram Reel",
      "thumbnail": "https://instagram.com/thumbnail.jpg"
    }
    ```

- **TikTok Video Downloader**
  - **Endpoint**: `/api/tiktok`
  - **Method**: `GET`
  - **Description**: Download TikTok videos without watermark.
  - **Parameters**:
    - `url` (string, required): TikTok video URL to download.
  - **Example Request**: `/api/tiktok?url=https://www.tiktok.com/@user/video/12345`
  - **Example Response**:
    ```json
    {
      "url": "https://www.tiktok.com/@user/video/12345",
      "sd": "https://tiktok.com/sd.mp4",
      "hd": "https://tiktok.com/hd.mp4",
      "title": "Funny TikTok",
      "thumbnail": "https://tiktok.com/thumbnail.jpg"
    }
    ```

- **Twitter Video Downloader**
  - **Endpoint**: `/api/twitter`
  - **Method**: `GET`
  - **Description**: Download Twitter videos in various formats.
  - **Parameters**:
    - `url` (string, required): Twitter video URL to download.
  - **Example Request**: `/api/twitter?url=https://twitter.com/user/status/12345`
  - **Example Response**:
    ```json
    {
      "url": "https://twitter.com/user/status/12345",
      "sd": "https://twitter.com/sd.mp4",
      "hd": "https://twitter.com/hd.mp4",
      "title": "Viral Tweet",
      "thumbnail": "https://twitter.com/thumbnail.jpg"
    }
    ```

- **YouTube Video Downloader**
  - **Endpoint**: `/api/youtube`
  - **Method**: `GET`
  - **Description**: Download YouTube videos in multiple resolutions.
  - **Parameters**:
    - `url` (string, required): YouTube video URL to download.
  - **Example Request**: `/api/youtube?url=https://www.youtube.com/watch?v=ABC123`
  - **Example Response**:
    ```json
    {
      "url": "https://www.youtube.com/watch?v=ABC123",
      "formats": [
        { "quality": "360p", "url": "https://youtube.com/360p.mp4" },
        { "quality": "720p", "url": "https://youtube.com/720p.mp4" },
        { "quality": "1080p", "url": "https://youtube.com/1080p.mp4" }
      ],
      "title": "Cool YouTube Video",
      "thumbnail": "https://youtube.com/thumbnail.jpg"
    }
    ```

## License

This project is licensed under the MIT License.