package org.ashutosh.java.hard;

import org.ashutosh.java.utils.RandomGenerator;

public class _135_Candy {
	public static void main(String[] args) {
//		int[] nums = new int[]{1, 0, 2};
//		int[] nums = new int[]{1, 2, 2};
//		int[] nums = new int[]{1, 3, 4, 2, 2, 4, 4, 0};
//		int[] nums = new int[]{1, 3, 4, 2, 2, 4, 4, 5, 0};

		int[] nums = RandomGenerator.generateIntegerArray(20000, 0, 20000);

		_135_Candy obj = new _135_Candy();
		int count = obj.candy(nums);
		System.out.println("candies = " + count);
	}

	public int candy(int[] ratings) {
		int len = ratings.length;
		int[] candies = new int[len];
		candies[0] = 1;
		int count = 1;

		for (int i = 1; i < len; i++) {
			if (candies[i] == 0) {
				candies[i] = 1;
				count++;
			}
			if (ratings[i] > ratings[i - 1]) {
				int temp = candies[i];
				candies[i] = candies[i - 1] + 1;
				count += candies[i] - temp;
			}
		}

		for (int i = len - 2; i >= 0; i--) {
			if (ratings[i] > ratings[i + 1]) {
				int temp = candies[i];
				candies[i] = Math.max(candies[i], candies[i + 1] + 1);
				count += candies[i] - temp;
			}
		}
		
//		System.out.println("\n\nRatings:\t" + Arrays.toString(ratings));
//		System.out.println("Candies:\t" + Arrays.toString(candies));
		return count;
	}

}
