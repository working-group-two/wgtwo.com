export function openTwitterPopup(text) {
  const url = "http://twitter.com/intent/tweet?text=";
  window.open(url + text, 'twitterwindow','left=20,top=20,width=600,height=300,toolbar=0,resizable=1');
}

export function openRedditPopup(url, text) {
  const shareUrl = `http://www.reddit.com/submit?url=${url}&title=${text}`;
  window.open(shareUrl, 'redditwindow','left=20,top=20,width=600,height=500,toolbar=0,resizable=1');
}

export function openLinkedinPopup(url, text) {
  const shareUrl = `http://www.linkedin.com/shareArticle?url=${url}&title=${text}`;
  window.open(shareUrl, 'linkedinwindow','left=20,top=20,width=600,height=500,toolbar=0,resizable=1');
}