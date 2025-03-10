package org.ashutosh.java.medium;

import org.ashutosh.java.utils.RandomGenerator;
import org.ashutosh.java.utils.TimeUtils;

public class _75_SortColors {
	public static void main(String[] args) {
//        int[] nums = new int[]{2, 0, 2, 1, 1, 0};

		int[] nums = RandomGenerator.generateIntegerArray(10000, 0, 100);

		_75_SortColors object = new _75_SortColors();
		object.sortColors(nums);
	}

	public void sortColors(int[] nums) {
		System.out.println("Starting sortColors...");
		//System.out.println("Before sorting: " + Arrays.toString(nums));

		int[] nums2 = nums.clone();

		// Brute force
		long t1 = System.nanoTime();
		for (int i = 0; i < nums.length - 1; i++) {
			for (int j = i + 1; j < nums.length; j++) {
				int temp = nums[i];
				if (nums[j] < nums[i]) {
					nums[i] = nums[j];
					nums[j] = temp;
				}
			}
		}
		long t2 = System.nanoTime();
		System.out.println("Brute force time taken: " + TimeUtils.formatTimeDiff(t1, t2));

		// Quicksort
		//ForkJoinPool pool = new ForkJoinPool();
		long t3 = System.nanoTime();
		quickSort(nums2, 0, nums.length - 1);
		// pool.invoke(new QuickSortTask(nums, 0, nums.length - 1));
		long t4 = System.nanoTime();

		System.out.println("Quick sort time taken: " + TimeUtils.formatTimeDiff(t3, t4));

		//System.out.println("After sorting: " + Arrays.toString(nums));

	}

	public void quickSort(int[] nums, int left, int right) {
		if (left < right) {
			int pivot = partition(nums, left, right);
			quickSort(nums, left, pivot - 1);
			quickSort(nums, pivot + 1, right);
		}
	}

	public int partition(int[] nums, int left, int right) {
		int pivot = nums[right];
		int i = left - 1;
		for (int j = left; j < right; j++) {
			if (nums[j] <= pivot) {
				i = i + 1;
				swap(nums, i, j);
			}
		}
		i = i + 1;
		swap(nums, i, right);
		return i;
	}

	public void swap(int[] nums, int a, int b) {
		int temp = nums[a];
		nums[a] = nums[b];
		nums[b] = temp;
	}

}
