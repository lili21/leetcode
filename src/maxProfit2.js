// https://leetcode-cn.com/explore/featured/card/bytedance/246/dynamic-programming-or-greedy/1043/
// 暴力解法 - 如何处理重叠子问题？
function maxProfitB (prices) {
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const _profit = prices[j] - prices[i]
      profit = Math.max(profit, _profit, _profit + maxProfit(prices.slice(j + 1)))
    }
  }
  return profit
}

// 只有股票有上涨 prices(i + 1) > prices(i)，就卖出获取利润。就可以获取最大利润

function maxProfit (prices) {
  let profit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i]
    }
  }
  return profit
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
