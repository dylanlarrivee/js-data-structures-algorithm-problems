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


# Tree Traversal
Given any tree, how do we visit every node once?

## Two ways we will cover:
- Breadth-first Search: BFS
	- Left to right
- Depth-first search: DFS
		○ InOrder
		○ PreOrder
		○ PostOrder

## Breadth First Search BFS
Visit sibling node on the level before visiting the children node below.

## BFS Steps - Iteratively
	- Create a queue (this can be an array) and a variable to store the values of a node visited.
		○ .push() to add in
		○ .shift() to remove from beginning
	- Build up a visited array to put the items on while searching and then return that at the end. (in array format)
	- Place the root node in the queue
	- Loop as long as there is anything in the queue
		○ Dequeue a node from the queue and push the values of the node into the variables that stores the nodes
			§ .shift() from beginning
		○ If there is a left property on the node dequeued - add it to the queue
		○ If there is a right property on the node dequeued - add it to the queue

## Depth First Search (DFS)
	- Three ways to do this.
	- The visited downwards to the end of the nodes before they move horizontally.

DFS - PrOrder: Steps - Recursively
Visit a node, store it and then make your way all the way down the left side and then right side storing as you go.
	- Create a variable to store the values of the nodes visited
	- Store the root of the BST in a variable called current
	- Write a helper function which accepts a node
		○ Push the value of the node to the variable that stores the values
		○ If the node has a left property call the helper function with the left property of the node
		○ If the node has a right property call the helper function with the right property of the node
	- Invoke the helper function with the current variable
	- Return the array of values



DFS - PostOrder: Steps Recursively
Make your way to the end of a path waiting until you reach the end of the branch to store the value. Root is the last thing stored.
	- Create a variable to store the values of nodes visited
	- Store the root of the BST in a variable called current
	- Write a helper function which accepts a node
		○ If the node has a left property, call the helper function with the left property on the node
		○ If the node has a right property, call the helper function with the right property on the node
		○ Push the value of the node to the variable that stores the values
		○ Invoke the helper function with the current variable
		○ Return the visited node values

Same code as DFS PostOrder but just pushing the value to the array to store after we reach the bottom of a node path.

DFS - InOrder: Steps Recursively
Make your way through the tree but store the values in order from smallest to largest.
	- Create a variable to store the values of nodes visited
	- Store the root of the BST in a variable called current
	- Write a helper function which accepts a node
		○ If the node has a left property, call the helper function with the left property on the node
		○ Push the value of the node to the variable that stores the values
		○ If the node has a right property, call the helper function with the right property on the node
		○ Invoke the helper function with the current variable
		○ Return the visited node values

BFS vs DFS 
When to use each
	- Time complexity of each is the same since we are visiting each node once
	- Space complexity is what changes as we store those temp nodes
	- Depends on the tree
		○ DFS is better for Wider tree
		○ BFS is better for more narrow tree
DFS - InOrder
	- Used commonly with BSTs since we get all the nodes in order
DFS - PreOrder
	- Can be used to "export" a tree structure so that it is easily reconstructed or copied

Recap
	- Trees are non-linear data structure that contain a rot and child nodes
	- Binary trees can have values of any type, but at most 2 children for each parent
	- Binary search trees are a more specific version of binary trees where every node to the left of a parent is less than its value and every node to the right is greater
		○ Needs to be data that is comparable
	- We can search trees using DFS and BFS
