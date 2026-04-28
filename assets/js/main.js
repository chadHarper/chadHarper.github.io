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
  const navClose = document.querySelector('[data-nav-close]');
  const desktopNavMedia = window.matchMedia('(min-width: 768px)');
  let previousFocus = null;
  let restoreFocusOnClose = true;

  function syncNavState(isOpen) {
    if (!navToggle) {
      return;
    }

    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  }

  function finalizeNavClose() {
    syncNavState(false);

    if (restoreFocusOnClose && previousFocus) {
      previousFocus.focus();
    }

    previousFocus = null;
    restoreFocusOnClose = true;
  }

  function closeNav(options) {
    const shouldRestoreFocus = !options || options.restoreFocus !== false;

    if (!navToggle || !navPanel) {
      return;
    }

    restoreFocusOnClose = shouldRestoreFocus;

    if (typeof navPanel.close === 'function' && navPanel.open) {
      navPanel.close();
      return;
    }

    navPanel.hidden = true;
    navPanel.removeAttribute('open');
    finalizeNavClose();
  }

  function openNav() {
    if (!navToggle || !navPanel) {
      return;
    }

    previousFocus = document.activeElement;
    syncNavState(true);

    if (typeof navPanel.showModal === 'function') {
      navPanel.showModal();
    } else {
      navPanel.hidden = false;
      navPanel.setAttribute('open', '');
    }

    const firstFocusable = navPanel.querySelector('[autofocus]') || navPanel.querySelector(focusableSelector);
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

    if (navClose) {
      navClose.addEventListener('click', function () {
        closeNav();
      });
    }

    navPanel.addEventListener('click', function (event) {
      if (event.target === navPanel) {
        closeNav();
      }
    });

    navPanel.addEventListener('close', finalizeNavClose);

    navPanel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeNav({ restoreFocus: false });
      });
    });

    document.addEventListener('keydown', function (event) {
      if (navPanel.open && event.key === 'Escape') {
        closeNav();
      }

      if (navPanel.open && event.key === 'Tab' && typeof navPanel.showModal !== 'function') {
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

    function syncNavToViewport(event) {
      if (!event.matches) {
        return;
      }

      closeNav({ restoreFocus: false });
    }

    if (desktopNavMedia.addEventListener) {
      desktopNavMedia.addEventListener('change', syncNavToViewport);
    } else if (desktopNavMedia.addListener) {
      desktopNavMedia.addListener(syncNavToViewport);
    }
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
