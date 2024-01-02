function levelOrder(root: TreeNode | null): number[][] {
    let que = [];
    let res:number[][] = []
    if(root!=null) que.push(root);
    while(que.length){
         let size = que.length;
         let vec = [];
         while(size--){
            let node = que.shift();
            vec.push(node.val);
            if(node.left){
                que.push(node.left);
            }
            if(node.right){
                que.push(node.right)
            }
         }
         res.push(vec)
    }
    return res;
};