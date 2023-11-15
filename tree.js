/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(val) {

    if (!this.root) return 0; 

    let total = this.root.val;

    const sumHelper = (node)=> {
      for (let child of node.children){
        total += child.val;

        if(child.children.length > 0){
          sumHelper(child)
        }
      }
    }

    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0; 

    let evenCount = 0; 

    const getEven = (node) => {

      for (let child of node.children){
        if (child.val % 2 === 0){
          eventCount++

          if (child.children.length > 0){
            getEven(child)
          }
        }
      }
    }
      getEven(this.root);
      return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    if(!this.root) return 0; 
    
    let total = 0; 

    const checkNum = (node) => {
      for(let child of node.children){
        if(child.val > lowerBound){
          total ++; 

          if(child.children.length > 0){
            checkNum(child);
          }
        }
      }
    }

    checkNum(this.root);
    return total;
  }
}

module.exports = { Tree, TreeNode };
