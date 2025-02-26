package org.ashutosh.java.sort;

import java.util.concurrent.RecursiveAction;

public class QuickSortTask extends RecursiveAction {
    private final int[] array;
    private final int left;
    private final int right;

    public QuickSortTask(int[] array, int left, int right) {
        this.array = array;
        this.left = left;
        this.right = right;
    }

    @Override
    protected void compute() {
        if (left < right) {
            int pivot = partition(array, left, right);
            invokeAll(new QuickSortTask(array, left, pivot - 1),
                    new QuickSortTask(array, pivot + 1, right));
        }
    }

    private int partition(int[] array, int left, int right) {
        int pivot = array[right];
        int i = left - 1;
        for (int j = left; j < right; j++) {
            if (array[j] <= pivot) {
                i++;
                swap(array, i, j);
            }
        }
        i++;
        swap(array, i, right);
        return i;
    }

    private void swap(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

