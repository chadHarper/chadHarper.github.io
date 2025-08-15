<script>
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.crit-filter button');
  var items = document.querySelectorAll('.crit-posts li');
  if (!buttons.length || !items.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      items.forEach(function (li) {
        var show = (filter === 'all') || (li.dataset.tags || '').includes(filter);
        li.style.display = show ? '' : 'none';
      });
    });
  });
});
</script>
