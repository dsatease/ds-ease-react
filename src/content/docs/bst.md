# Binary Search Tree
<p class="danger"><a href="/trees?topic=binary-tree">( Prerequisite Binary Tree )</a></p>
<br>

<img src="https://www.baeldung.com/wp-content/uploads/sites/4/2020/06/btree-1024x466.png" width="100%">

<br>
<br>
<br>
<br>

Binary search trees or BST are a special variant of trees that come with a very unique condition for filling in the left and right children of every node in the tree. In order to understand the basics of the binary search tree, one needs to understand the basics of a binary tree first. The binary tree is a tree where each node (except the leaves) has two children. Each node can have one parent and a maximum of two children.

<br>

A binary search tree extends upon the concept of a binary tree. A binary search tree is set such that:-
<br>

- Every left node is always lesser than its parent node

- Every right node is always greater than its parent node

<br>

At the time of insertion of nodes, the decision about the position of the node is made. These properties help solve a lot of algorithmic challenges, and as such was designed for that purpose. Binary search trees support all operations that can be performed on binary trees, allowing some of the tasks to be done in lesser time.

<br>

- Time complexity of all BST Operations = O(h).
- Here, h = Height of binary search tree

<br>

#### In worst case :
<br>

- The binary search tree is a skewed binary search tree.
- Height of the binary search tree becomes n.
- So, Time complexity of BST Operations = O(n).

<br>

#### In best case :
<br>
- The binary search tree is a balanced binary search tree.
- Height of the binary search tree becomes log(n).
- So, Time complexity of BST Operations = O(logn).


<br><br>

#### BinarySearchTree Class 
<p class="gray-col">The class of binary search tree.</p>
<code>
 public class BinarySearchTree \< T extends Comparable \< T > > extends BinaryTree{
    private TreeNode \< T > root;
    private int size = 0;

    public BinarySearchTree() {
        root = null;
        size = 0;
    }
 }
</code>

<br>

#### add(T val) :
<p class="gray-col">Returns true when value added to tree.</p>

<br>
Insertion in a Binary Search Tree
Insertion in a tree should be such that it obeys the main properties of the binary search tree. The basic algorithm should be:-



- If the node to be inserted is greater than the existing root, move down a level through the right pointer of the root. 

- If the node to be inserted is lesser than the existing root, move down a level through the left pointer of the root.

- Repeat this process for all nodes till the leaves are reached.

- Insert the node as the left or right pointer for the leaf (based on its value - if it is smaller than the leaf, it should be inserted as the left pointer; if it is larger than the leaf, it should be inserted as the right pointer)

<br>


<code>
   // public access
    public void add(T val) {
        root = add(val, root);
    }
    // private access
    private TreeNode add(T val, TreeNode node) {
        if (node == null) {
            size++;
            return new TreeNode<>(val);
        }
        if (node.compareTo(val) > 0) {
            node.left = add(val, node.left);
        } else if (node.compareTo(val) < 0) {
            node.right = add(val, node.right);
        }
        return node;
    }
</code>

<br>

#### remove(T val) :
<p class="gray-col">Removes and return the value deleted from binary tree.</p>

<br>
Deletion is a bit more complicated than insertion because it varies depending on the node that needs to be deleted from the tree.

<br>

- If the node has no children (that is, it is a leaf) - it can simply be deleted from the tree. 
<br>
<br>

<img src="https://firebasestorage.googleapis.com/v0/b/upload-pics-e599e.appspot.com/o/images%2Fdel.png?alt=media&token=5de53c14-c062-4758-b2ac-f64888bf2d7f" width="50%">


<img src="https://firebasestorage.googleapis.com/v0/b/upload-pics-e599e.appspot.com/o/images%2Fdel1.png?alt=media&token=4f81514c-9212-4862-92bf-2e569e713011" width="50%">

<br><br>


- If the node has one child, simply delete the node and move the child up to replace it.

<br>
<img src="https://firebasestorage.googleapis.com/v0/b/upload-pics-e599e.appspot.com/o/images%2Fdel3.png?alt=media&token=835157cd-2538-42f4-9f45-a5bf98b86d7b" width="50%">


<img src="https://firebasestorage.googleapis.com/v0/b/upload-pics-e599e.appspot.com/o/images%2Fdel4.png?alt=media&token=2d329b30-52e0-4a64-a5ff-d447ddce2b89" width="50%">

<br><br>

- If the node has two children, it becomes a little tricky. We need to find the node which has the smallest value in the right subtree and replace the node with min node.

<br>

<img src="https://firebasestorage.googleapis.com/v0/b/upload-pics-e599e.appspot.com/o/images%2Fdel4.png?alt=media&token=2d329b30-52e0-4a64-a5ff-d447ddce2b89" width="50%">

<img src="https://firebasestorage.googleapis.com/v0/b/upload-pics-e599e.appspot.com/o/images%2Fdel5.png?alt=media&token=1b6959df-9228-4702-83d2-4517ee865b52" width="50%">


<br><br>

<code>
    private static boolean that = false;
// public access
    public void remove(T val) {
        that = false;
        root = remove(val, root);
        if (that) {
            size++;
        }
    }
    // private access
    private TreeNode remove(T val, TreeNode node) {
        if (node == null) {
            return null;
        }
        if (node.compareTo(val) > 0) {
            node.left = remove(val, node.left);
        } else if (node.compareTo(val) < 0) {
            node.right = remove(val, node.right);
        } else {
            if (node.left == null && node.right != null) {
                size--;
                return node.right;
            } else if (node.right == null && node.left != null) {
                size--;
                return node.left;
            } else if (node.right != null && node.left != null) {
                T temp = getMin(node.right);
                node.val = temp;
                node.right = remove(temp, node.right);
                that = true;
                size--;
                return node;
            } else {
                size--;
                return null;
            }

        }
        return node;
    }

</code>

<br>

#### getMin() :
<p class="gray-col">Returns the min value in tree. this function is used for finding least while deleting a node.</p>

<code>
    private T getMin(TreeNode node) {
        if (node.left == null) {
            return (T) node.val;
        }
        return getMin(node.left);
    }

    public T getMin() {
        return getMin(root);
    }
</code>

<br>

#### contains(T val) :
<p class="gray-col">Returns whether tree contains the value or not.</p>

<code>
   // public access
      public boolean contains(T val) {
        return contains(val, root);
    }

    // private access
    private boolean contains(T val, TreeNode node) {
        if (node == null) {
            return false;
        }
        if (node.compareTo(val) == 0) {
            return true;
        }
        return contains(val, node.left) || contains(val, node.right);
    }
</code>

<br>

#### All Tree Traversals:
<p class="gray-col">All traversals are used from <a class="blue" href="/trees?topic=binary-tree">BinaryTree</a> class. </p>

<code>
    // LNR traversal
    public List \< Object > inOrder() {
        return super.inOrder(root);
    }

    // NLR traversal
    public List \< Object > preOrder() {
        return super.preOrder(root);
    }

    // LRN traversal
    public List \< Object > postOrder() {
        return super.postOrder(root);
    }
    
    // Top view traversal
    public List\< Object > topView() {
        return super.topView(root);
    }

     // Bottom view traversal
    public List\< Object > botttomView() {
        return super.botttomView(root);
    }

     // Level vise traversal
    public List\< List\< Object > > levelOrder() {
        return super.levelOrder(root);
    }

     // Left view traversal
    public List\< Object > leftView() {
        return super.leftView(root);
    }

     // Right view traversal
    public List\< Object > rightView() {
        return super.rightView(root);
    }
</code>

<br>

#### size() :
<p class="gray-col">Returns the number of nodes in the tree.</p>

<code>
public int size() {
    return size;
}
</code>

<br>

#### clear() :
<p class="gray-col">clears the tree by removing all nodes.</p>

<code>
    public void clear() {
        root = null;
    }
</code>


<br>

#### toString() :
<p class="gray-col">Returns the string value of tree object</p>

<code>
  @Override
    public String toString() {
        return this.inOrder().toString();
    }
</code>

<br><br>

- <a class="blue" href="https://github.com/nisabmohd/Data-Structures/blob/master/src/Trees/BinarySearchTree.java">Check the BinarySearchTree.java complete code on GitHub</a>


<br><br><br>