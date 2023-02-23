$(document).ready(function() {
    var currentPage = 1;
  
    function loadIssues() {
      $.ajax({
        url: `https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5`,
        success: function(data) {
          $('#issue-list').empty();
          data.forEach(function(issue) {
            $('#issue-list').append(`<li>${issue.title}</li>`);
          });
        }
      });
    }
  
    loadIssues();
  
    $('#load-next').click(function() {
      currentPage++;
      $('#page-number').text(`Page number ${currentPage}`);
      loadIssues();
    });
  
    $('#load-prev').click(function() {
      if (currentPage > 1) {
        currentPage--;
        $('#page-number').text(`Page number ${currentPage}`);
        loadIssues();
      }
    });
  });