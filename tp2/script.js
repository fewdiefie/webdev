function updateLastModified(page) {
    if (document.getElementById('last-modified')) {
      fetch("https://api.github.com/repos/hamzaelkaiche/GI1S2-TP-webdev/commits?path=" + page)
        .then((response) => {
          return response.json();
        })
        .then((commits) => {
          document.getElementById('last-modified').textContent =commits[0]['commit']['committer']['date'].slice(0,10);
        });
    }
  }