package org.ashutosh.java.easy;

public class _121_BestTimeToBuyAndSellStock {
	public static void main(String[] args) {
		int[] prices = new int[]{7, 1, 5, 3, 6, 4};
//		int[] prices = new int[]{7, 6, 4, 3, 1};
//		int[] prices = new int[]{7, 5, 1, 9, 8, 3, 10, 4, 6};

//		int[] prices = RandomGenerator.generateIntegerArray(100, 0, 100);

		_121_BestTimeToBuyAndSellStock obj = new _121_BestTimeToBuyAndSellStock();
//		int maxProfit = obj.maxProfitBruteForce(prices);
		int maxProfit = obj.maxProfit(prices);
		System.out.println(maxProfit);
	}

	public int maxProfitBruteForce(int[] prices) {
		int profit = 0;
		int len = prices.length;

		for(int i = 0; i < len; i++) {
			for (int j = i + 1; j < len; j++) {
				int temProfit = prices[j] - prices[i];
				if (temProfit > profit) {
					profit = temProfit;
				}
			}
		}

		return profit;
	}

	public int maxProfit(int[] prices) {
		int len = prices.length;
		int min = prices[0];
		int profit = 0;

		for (int i = 1; i < len; i++) {
			if (prices[i] < min) {
				min = prices[i];
			} else {
				int diff = prices[i] - min;
				if (diff > profit) {
					profit = diff;
				}
			}
		}

		System.out.println(profit);

		return profit;
	}

}
