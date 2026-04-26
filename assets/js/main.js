(function () {
  const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  const navToggle = document.querySelector('[data-nav-toggle]');
  const navPanel = document.querySelector('[data-nav-panel]');
  let previousFocus = null;

  function closeNav() {
    if (!navToggle || !navPanel) {
      return;
    }

    navToggle.setAttribute('aria-expanded', 'false');
    navPanel.hidden = true;
    document.body.classList.remove('nav-open');

    if (previousFocus) {
      previousFocus.focus();
      previousFocus = null;
    }
  }

  function openNav() {
    if (!navToggle || !navPanel) {
      return;
    }

    previousFocus = document.activeElement;
    navToggle.setAttribute('aria-expanded', 'true');
    navPanel.hidden = false;
    document.body.classList.add('nav-open');

    const firstFocusable = navPanel.querySelector(focusableSelector);
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }

  if (navToggle && navPanel) {
    navToggle.addEventListener('click', function () {
      if (navToggle.getAttribute('aria-expanded') === 'true') {
        closeNav();
      } else {
        openNav();
      }
    });

    navPanel.addEventListener('click', function (event) {
      if (event.target === navPanel) {
        closeNav();
      }
    });

    navPanel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (event) {
      if (!navPanel.hidden && event.key === 'Escape') {
        closeNav();
      }

      if (!navPanel.hidden && event.key === 'Tab') {
        const focusable = Array.from(navPanel.querySelectorAll(focusableSelector));
        if (focusable.length === 0) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    const attribute = group.dataset.filterAttribute;
    const region = group.closest('[data-filter-region]') || document;
    const items = Array.from(region.querySelectorAll('[data-filter-item]'));
    const emptyMessage = region.querySelector('[data-empty-message]');
    const buttons = Array.from(group.querySelectorAll('[data-filter]'));

    if (!attribute || items.length === 0) {
      return;
    }

    function updateEmptyState() {
      if (!emptyMessage) {
        return;
      }

      const visibleCount = items.filter(function (item) {
        return !item.hidden;
      }).length;

      emptyMessage.hidden = visibleCount > 0;
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        const filter = button.dataset.filter;

        buttons.forEach(function (otherButton) {
          otherButton.classList.toggle('is-active', otherButton === button);
          otherButton.setAttribute('aria-pressed', otherButton === button ? 'true' : 'false');
        });

        items.forEach(function (item) {
          const value = item.getAttribute(attribute);
          item.hidden = !(filter === 'all' || value === filter);
        });

        updateEmptyState();
      });
    });

    updateEmptyState();
  });

  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
      throwOnError: false
    });
  }
})();
