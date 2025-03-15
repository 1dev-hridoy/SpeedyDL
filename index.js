const axios = require('axios');

const BASE_URL = 'https://speedydl.hridoy.top';

const createDownloader = (endpoint) => async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, { params: { url } });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to download video from ${endpoint}: ${error.message}`);
  }
};

const downloaders = {
  downloadFacebookVideo: createDownloader('/api/facebook'),
  downloadInstagramVideo: createDownloader('/api/instagram'),
  downloadTikTokVideo: createDownloader('/api/tiktok'),
  downloadTwitterVideo: createDownloader('/api/twitter'),
  downloadYouTubeVideo: createDownloader('/api/youtube'),
};

module.exports = downloaders;