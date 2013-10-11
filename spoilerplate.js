
var SPOILER_WORDS = ["breaking bad", "brba", "br ba", "breakingbad", "cheese"];

// Start the spoiler loop.
blockSpoilers();
window.setInterval(blockSpoilers, 2000);

// Block spoiler posts.
function blockSpoilers() {
  var userPosts = document.getElementById("home_stream").childNodes;
  for (var i = 0; i < userPosts.length; i++) {
    if (userPosts[i] !== undefined && isSpoiler(userPosts[i])) {
      blockPost(userPosts[i]);
    }
  }
}

// Blocks the post.
function blockPost(post) {
  post.className = post.className + " spoiler";
}

// Returns true if the post is sensed as a spoiler.
function isSpoiler(post) {
  var postString = getHTMLString(post);
  for (var i = 0; i < SPOILER_WORDS.length; i++) {
    if (postString.indexOf(SPOILER_WORDS[i]) > -1) {
      return true;
    }
  }
  return false;
}

// Get string representation of node.
function getHTMLString(node) {
  node = node.cloneNode(true);
  var tmp = document.createElement("div");
  tmp.appendChild(node);
  return tmp.innerHTML.toLowerCase();
}
