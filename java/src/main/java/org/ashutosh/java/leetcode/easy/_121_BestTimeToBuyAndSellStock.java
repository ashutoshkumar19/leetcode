package org.ashutosh.java.leetcode.easy;

public class _121_BestTimeToBuyAndSellStock {
	public static void main(String[] args) {
//		int[] prices = new int[]{7, 1, 5, 3, 6, 4};
//		int[] prices = new int[]{7, 6, 4, 3, 1};
		int[] prices = new int[]{7, 5, 1, 9, 8, 3, 10, 4, 6};

//		int[] prices = RandomGenerator.generateIntegerArray(100, 0, 100);

		_121_BestTimeToBuyAndSellStock obj = new _121_BestTimeToBuyAndSellStock();
		obj.maxProfit(prices);
	}

	public int maxProfit(int[] prices) {
		int len = prices.length;
		int min = prices[0];
		int profit = 0;

		for (int i = 1; i < len; i++) {
			if (prices[i] < min) {
				min = prices[i];
			}
			int diff = prices[i] - min;
			if (diff > profit) {
				profit = diff;
			}
		}

		System.out.println(profit);

		return profit;
	}

}
