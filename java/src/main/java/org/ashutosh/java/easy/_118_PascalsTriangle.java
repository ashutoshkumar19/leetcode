package org.ashutosh.java.easy;

import java.util.ArrayList;
import java.util.List;

public class _118_PascalsTriangle {
    public static void main(String[] args) {
        int numRows = 5;

        _118_PascalsTriangle obj = new _118_PascalsTriangle();
        List<List<Integer>> result = obj.generate(numRows);

        obj.display(result);
    }

    public void display(List<List<Integer>> list) {
        for (List<Integer> row : list) {
            System.out.println();
            for (Integer num : row) {
                System.out.print(num + " ");
            }
        }
    }

    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < numRows; i++) {
            List<Integer> row = new ArrayList<>();
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i ) {
                    row.add(1);
                } else {
                    row.add(result.get(i - 1).get(j - 1) + result.get(i - 1).get(j));
                }
            }
            result.add(row);
        }

        return result;
    }

}
