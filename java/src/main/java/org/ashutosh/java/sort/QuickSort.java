package org.ashutosh.java.sort;

public class QuickSort {

	public static void sort(int[] nums, int left, int right) {
		if (left < right) {
			int pivot = partition(nums, left, right);
			sort(nums, left, pivot - 1);
			sort(nums, pivot + 1, right);
		}
	}

	public static int partition(int[] nums, int left, int right) {
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

	public static void swap(int[] nums, int a, int b) {
		int temp = nums[a];
		nums[a] = nums[b];
		nums[b] = temp;
	}
}

