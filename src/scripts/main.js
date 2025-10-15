'use strict';

// write code here

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('li');

  listItems.forEach((li) => {
    const childUl = Array.from(li.children).find((el) => el.tagName === 'UL');

    if (!childUl) {
      return;
    }

    const nodes = Array.from(li.childNodes);
    const ulIndex = nodes.indexOf(childUl);
    const textNode = nodes.find(
      (node, i) =>
        node.nodeType === Node.TEXT_NODE &&
        node.textContent.trim().length > 0 &&
        i < ulIndex,
    );

    if (!textNode) {
      return;
    }

    const span = document.createElement('span');

    span.textContent = textNode.textContent;
    li.replaceChild(span, textNode);

    const computed = getComputedStyle(childUl);

    if (computed.display !== 'none') {
      childUl.style.display = 'none';
    }

    span.addEventListener('click', (e) => {
      e.stopPropagation();

      childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
    });
  });
});
