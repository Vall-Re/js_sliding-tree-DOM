'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const allLi = document.querySelectorAll('li');

  allLi.forEach((li) => {
    const childUl = li.querySelector(':scope > ul');

    if (!childUl) {
      return;
    }

    const nodes = Array.from(li.childNodes);
    const ulIndex = nodes.indexOf(childUl);
    const textNode = nodes.find(
      (n, i) =>
        n.nodeType === Node.TEXT_NODE && n.textContent.trim() && i < ulIndex,
    );

    if (!textNode) {
      return;
    }

    const span = document.createElement('span');

    span.textContent = textNode.textContent;
    li.replaceChild(span, textNode);

    childUl.style.display = 'none';

    span.addEventListener('click', (e) => {
      e.stopPropagation();

      const isHidden = getComputedStyle(childUl).display === 'none';

      childUl.style.display = isHidden ? 'block' : 'none';
    });
  });
});
