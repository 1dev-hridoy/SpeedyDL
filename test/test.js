const {
    downloadFacebookVideo,
    downloadInstagramVideo,
    downloadTikTokVideo,
    downloadTwitterVideo,
    downloadYouTubeVideo,
  } = require('speedydl');
  
  (async () => {
    try {
      const fbVideo = await downloadFacebookVideo('https://www.facebook.com/share/r/164EXdWBtF/');
      console.log('Facebook Video:', fbVideo);
  
      const igVideo = await downloadInstagramVideo('https://www.instagram.com/reel/C--Al8YCWCS/?igsh=N2RvcXpvMnppOWht');
      console.log('Instagram Video:', igVideo);
  
      const ttVideo = await downloadTikTokVideo('https://www.tiktok.com/@guess.now18/video/7479133687196454186?is_from_webapp=1&sender_device=pc');
      console.log('TikTok Video:', ttVideo);
  
      const twVideo = await downloadTwitterVideo('https://x.com/ReshadFCB/status/1900654006373863573');
      console.log('Twitter Video:', twVideo);
  
      const ytVideo = await downloadYouTubeVideo('https://youtu.be/jdIAgT7PJ1g?si=Gs2G33HCDvEPb4v5');
      console.log('YouTube Video:', ytVideo);
    } catch (error) {
      console.error('Error:', error.message);
    }
  })();