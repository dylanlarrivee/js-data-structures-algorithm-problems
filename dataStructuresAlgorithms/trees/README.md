# Trees
What: A data structure that consists of a node in a parent / child relationship.
- Lists: Linear
- Trees: Non linear
- Need to have one entry point (root node) and all the data must point down from them.##
## Terminology
Root: The top node in a tree

Child: A node directly connected to another node when moving away from the root

Parent: The converse notion of a child

Siblings: A group of nodes with the same parent

Leaf: A node with no children

Edge: The connection between one node and another

## Uses for Trees
- HTML DOM
- Network routing
- Abstract syntax trees
- Artificial intelligence
- The way folders are structured on computer
## Kinds of Trees
Tons of different kinds that follow the same structure but different variations.
## Ones we will cover:
- Trees
- Binary Trees:
    - Each node can have at max 2 child nodes
    - Stores data that can be compared and is sortable
- Binary Search Trees

## Binary Search Trees BST:
- Each node can have at max 2 child nodes
- Every node to the left of a parent node is always less than the parent.
- Every node to the right of a parent node is always greater than the parent

## BST Insert
Make a new node and put in the correct spot in the BST.
- Create a new node
- Starting at the root
    - Check if there is a root, if not, the root now becomes that new node
    - If there is a root, check if the value of the new node is greater than or less than the value of the root
    - If it is greater
			§ Check to see if there is a node to the right
		- If there is, move to that node and repeat these steps
		- If there is not, add that node as the right property
    - If it is less
			§ Check to see if there is a node to the left
		- If there is, move to that node and repeat these steps
		- If there is not, add that node as the left property
- Return the entire tree at the end
## BST Find
Search a binary tree to see if a value is in the tree
- Starting at the root
    - Check if there is a root, if not we are done searching
    - If there is a root, check if the value of the new node is the value we are looking for. If we found it we are done.
    - If not check to see if the value is greater than or less than the value of the root
    - If it is greater
			§ Check to see if there is a node to the right 
		- If there is, move to that node and repeat these steps
		- If there is not we are done searching
    - If it is less
			§ Check to see if there is a node to the left
		- If there is, move to that node and repeat steps
		- If there is not, we are done searching.
## BST Big O
Insertion: O(log n)

Searching: O(log n)

- This is a good time complexity
- If you double the number of nodes you only increase the number of steps by 1.
- Not guaranteed: If ever node is greater than its parent then it will be a 1 sided tree.
You would want to do something like pick a new node to make the split more even.