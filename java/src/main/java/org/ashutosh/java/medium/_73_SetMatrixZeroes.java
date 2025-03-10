package org.ashutosh.java.medium;

public class _73_SetMatrixZeroes {
    public static void main(String[] args) {
        _73_SetMatrixZeroes obj = new _73_SetMatrixZeroes();

        int[][] matrix = new int[][]{{0, 1, 2, 0}, {3, 4, 5, 2}, {1, 3, 1, 5}};

        System.out.println("Input Matrix:");
        obj.display(matrix);

        long startTime = System.nanoTime();
//        obj.setZeroesBruteForce(matrix);
        obj.setZeroes(matrix);
        long endTime = System.nanoTime();

        System.out.println("\nOutput Matrix:");
        obj.display(matrix);

        System.out.println("\nExecution time in microseconds: " + (endTime - startTime) / 1000);

    }

    public void display(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            System.out.print("\n");
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + "  ");
            }
        }
    }

    /* Time complexity: O(mn), space complexity: O(m+n)  */
    public void setZeroesBruteForce(int[][] matrix) {
        int rowLen = matrix.length;
        int colLen = matrix[0].length;

        boolean[] rowMarker = new boolean[rowLen];
        boolean[] colMarker = new boolean[colLen];

        for (int i = 0; i < rowLen; i++) {
            for (int j = 0; j < colLen; j++) {
                if (matrix[i][j] == 0) {
                    rowMarker[i] = true;
                    colMarker[j] = true;
                }
            }
        }

        for (int i = 0; i < rowLen; i++) {
            for (int j = 0; j < colLen; j++) {
                if (rowMarker[i] || colMarker[j]) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    /* Time complexity: O(mn), space complexity: O(1)  */
    public void setZeroes(int[][] matrix) {
        int rowLen = matrix.length;
        int colLen = matrix[0].length;

        boolean row0 = false;
        boolean col0 = false;

        for (int i = 0; i < rowLen; i++) {
            for (int j = 0; j < colLen; j++) {
                if (matrix[i][j] == 0) {
                    if (i == 0) {
                        row0 = true;
                    }
                    if (j == 0) {
                        col0 = true;
                    }
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        for (int i = 1; i < rowLen; i++) {
            for (int j = 1; j < colLen; j++) {
                if (matrix[i][0] == 0) {
                    matrix[i][j] = 0;
                } else if (matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        if (row0) {
            for (int j = 0; j < colLen; j++) {
                matrix[0][j] = 0;
            }
        }
        if (col0) {
            for (int i = 0; i < rowLen; i++) {
                matrix[i][0] = 0;
            }
        }

    }
}
