document.addEventListener("DOMContentLoaded", function() {
    // Toggle news content visibility
    // console.log("in newscript");
    window.toggleNewsContent = function(element) {
    document.querySelectorAll('.news-content').forEach(content => {
        content.style.display = "none"; // Initially hide all content
        });

      const content = element.querySelector('.news-content');
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Show content
      } else {
        content.style.display = "none"; // Hide content
      }


    };

    // Initialize all news content to be hidden on page load
    document.querySelectorAll('.news-content').forEach(content => {
      content.style.display = "none"; // Initially hide all content
    });
  });