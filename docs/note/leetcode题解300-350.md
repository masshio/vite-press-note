### 304.二维区域和检索 - 矩阵不可变
给定一个二维矩阵 matrix，以下类型的多个请求：

计算其子矩形范围内元素的总和，该子矩阵的 左上角 为 (row1, col1) ，右下角 为 (row2, col2) 。
实现 NumMatrix 类：

NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
int sumRegion(int row1, int col1, int row2, int col2) 返回 左上角 (row1, col1) 、右下角 (row2, col2) 所描述的子矩阵的元素 总和 。

题解：

```js
/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const x = matrix[0].length + 1
  const y = matrix.length + 1
  // dp[i][j] 存放的是 matrix[i][j] 到右下角区域的总和，长度+1方便计算
  this.dp = Array.from({ length: y }, () => new Array(x).fill(0))
  for(let i = y - 2; i >= 0; i--) {
    for(let j = x - 2; j >= 0; j--) {
      // 当前值 + 右侧面积 + 下侧面积 - 重叠面积
      this.dp[i][j] = matrix[i][j] + this.dp[i+1][j] + this.dp[i][j+1] - this.dp[i+1][j+1]
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  // 同样通过加减面积计算
  return this.dp[row1][col1] - this.dp[row1][col2+1] - this.dp[row2+1][col1] + this.dp[row2+1][col2+1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
```