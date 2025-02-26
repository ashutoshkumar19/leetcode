package org.ashutosh.java.leetcode.medium;

import java.util.Arrays;

public class _31_NextPermutation {
	public static void main(String[] args) {
//        int[] nums = new int[]{2, 0, 2, 1, 1, 0};
//		int[] nums = new int[]{1, 2, 3};
//		int[] nums = new int[]{3, 2, 1};
//		int[] nums = new int[]{1, 1, 5};
		int[] nums = new int[]{1, 1, 1, 1, 1, 2, 2, 1};

//		int[] nums = RandomGenerator.generateIntegerArray(100, 0, 100);

		_31_NextPermutation obj = new _31_NextPermutation();
		obj.nextPermutation(nums);
	}

	public void nextPermutation(int[] nums) {
		int len = nums.length;

		/* Iterating from the last, find the break index where the value is lesser than the value at next index */
		int break_index = -1;
		for (int i = len - 1; i > 0; i--) {
			if (nums[i] > nums[i - 1]) {
				break_index = i - 1;
				break;
			}
		}

		/* Swap the value at break index with immediate next greater value iterating from the end till break index */
		if (break_index > -1) {
			for (int i = len - 1; i > break_index; i--) {
				if (nums[i] > nums[break_index]) {
					swap(nums, break_index, i);
					break;
				}
			}
		}

		/* Reverse the array after the break index */
		if (nums[len - 1] < nums[break_index + 1]) {
			int start = break_index + 1;
			for (int i = start; i <= ((start + len - 1) / 2); i++) {
				if (nums[i] > nums[len - 1 - i + start]) {
					swap(nums, i, len - 1 - i + start);
				}
			}
		}

		System.out.println(Arrays.toString(nums));

	}

	public void swap(int[] nums, int a, int b) {
		int temp = nums[a];
		nums[a] = nums[b];
		nums[b] = temp;
	}

}
