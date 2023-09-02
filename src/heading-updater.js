import {visit} from 'unist-util-visit';

export default function (newHeadingValue) {
  return tree => {
    visit(tree, 'heading', node => {
      visit(node, 'text', childNode => {
        // eslint-disable-next-line no-param-reassign
        childNode.value = newHeadingValue;
      });
    });
  };
}
