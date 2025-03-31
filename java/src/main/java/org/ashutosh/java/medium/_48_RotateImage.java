/*
 * https://leetcode.com/problems/rotate-image/description/
 *
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 * Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 *
 * */

package org.ashutosh.java.medium;

public class _48_RotateImage {

    public static void main(String[] args) {
        int[][] matrix = {
                {5, 1, 9, 11},
                {2, 4, 8, 10},
                {13, 3, 6, 7},
                {15, 14, 12, 16}
        };

        _48_RotateImage object = new _48_RotateImage();

        System.out.println("Original matrix: ");
        object.display(matrix);

//        int[][] rotatedMatrix = object.rotateBruteForce(matrix);
//        System.out.println("\nRotated matrix: ");
//        object.display(rotatedMatrix);

        object.rotate(matrix);
        System.out.println("\nRotated matrix: ");
        object.display(matrix);
    }

    public void display(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            System.out.print("\n");
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + "\t");
            }
        }
    }

    // Uses extra memory
    public int[][] rotateBruteForce(int[][] matrix) {
        int len = matrix.length;
        System.out.println("\nlen: " + len);

        int[][] rotatedMatrix = new int[len][len];

        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len; j++) {
                rotatedMatrix[i][j] = matrix[len - j - 1][i];
            }
        }

        return rotatedMatrix;
    }

    // Rotates matrix in-place
    public void rotate(int[][] matrix) {
        int len = matrix.length;

        // transpose the matrix
        for (int i = 1; i < len; i++) {
            for (int j = 0; j < i; j++) {
                swap(matrix, i, j, j, i);
            }
        }

        // Reverse each row
        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len / 2; j++) {
                swap(matrix, i, j, i, len - j - 1);
            }
        }
    }

    void swap(int[][] matrix, int i1, int j1, int i2, int j2) {
        int temp = matrix[i1][j1];
        matrix[i1][j1] = matrix[i2][j2];
        matrix[i2][j2] = temp;
    }

}
