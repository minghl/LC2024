function preorderTraversal(root: TreeNode | null): number[] {
    let vec = [];

    const traverse = (cur, vec)=>{
        if(cur==null)return;

        vec.push(cur.val);
        traverse(cur.left,vec);
        traverse(cur.right,vec);
    }

    traverse(root,vec);
    return vec;
};