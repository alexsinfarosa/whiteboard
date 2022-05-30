const tree = {
  value: 0,
  left: {
    value: 1,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 2,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: null,
      right: null,
    },
  },
}
console.log(tree)

function invertBinaryTree(tree) {
  if (!tree.left || !tree.right) return

  const left = tree.left
  tree.left = tree.right
  tree.right = left

  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
  return tree
}

console.log(invertBinaryTree(tree))
