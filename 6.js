
    const pageUrl = encodeURIComponent(window.location.href); // or use a fixed URL

    document.getElementById('twitter-share').onclick = function() {
        const twitterUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=Check%20out%20this%20article!`;
        window.open(twitterUrl, '_blank');
    };

    document.getElementById('linkedin-share').onclick = function() {
        const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`;
        window.open(linkedinUrl, '_blank');
    };

    document.getElementById('facebook-share').onclick = function() {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        window.open(facebookUrl, '_blank');
    };

