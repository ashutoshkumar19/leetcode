package org.ashutosh.java.extra;

import java.util.ArrayList;
import java.util.List;

public class StaircaseRepair {
    // dp function: returns the minimum extra cost needed to form exactly 'pairsNeeded'
    // disjoint pairs from block[i ... n-1]. Each pair uses adjacent indices.
    private static long dp(int[] block, int i, int pairsNeeded, Long[][] memo) {
        int n = block.length;
        if (i >= n) {
            return pairsNeeded == 0 ? 0 : Long.MAX_VALUE / 2;
        }
        if (pairsNeeded < 0) {
            return Long.MAX_VALUE / 2;
        }
        if (memo[i][pairsNeeded] != null) {
            return memo[i][pairsNeeded];
        }
        long best = Long.MAX_VALUE / 2;
        // Option 1: Do not pair at i, repair individually.
        best = Math.min(best, dp(block, i + 1, pairsNeeded, memo));

        // Option 2: if possible, pair current step and next one.
        if (i + 1 < n && pairsNeeded > 0) {
            long costPair = block[i] + block[i + 1];
            best = Math.min(best, costPair + dp(block, i + 2, pairsNeeded - 1, memo));
        }
        memo[i][pairsNeeded] = best;
        return best;
    }

    // Computes the minimum extra cost for a contiguous block of broken steps.
    private static long minExtraCostForBlock(int[] block) {
        int n = block.length;
        int maxPairs = n / 2; // maximum number of pairs possible (floor division)
        // We'll use memoization dp starting at index 0, requiring exactly maxPairs pairs.
        Long[][] memo = new Long[n+1][maxPairs+1];
        return dp(block, 0, maxPairs, memo);
    }

    public static long minimumEffort(int[] steps) {
        long totalEffort = 0;
        int n = steps.length;
        // Sum of repair costs if repaired individually.
        long baseCost = 0;
        // We'll process each contiguous block of broken steps.
        int i = 0;
        while(i < n) {
            if (steps[i] == 0) {
                // step intact
                i++;
            } else {
                // broken step found; start a block.
                List<Integer> blockList = new ArrayList<>();
                while (i < n && steps[i] != 0) {
                    blockList.add(steps[i]);
                    baseCost += steps[i];
                    i++;
                }
                // Process this block: convert list to array.
                int[] block = new int[blockList.size()];
                for (int j = 0; j < block.length; j++) {
                    block[j] = blockList.get(j);
                }
                // Compute extra cost needed for maximum pairing (to reduce days).
                long extra = minExtraCostForBlock(block);
                totalEffort += extra;
            }
        }
        // Total effort = base cost (if all were repaired individually)
        // plus extra cost from paired repairs.
        return baseCost + totalEffort;
    }

    public static int minEffortToRepair(int[] a) {
        int n = a.length;
        int[] dp = new int[n]; // DP array for min effort

        // Base cases
        dp[0] = 0; // First step is intact
        if (a[1] > 0) dp[1] = a[1]; // If second step is broken, repair it alone

        for (int i = 2; i < n; i++) {
            if (a[i] == 0) {
                dp[i] = dp[i - 1]; // No effort needed for intact steps
            } else {
                // Case 1: Repair current step alone
                int oneStep = dp[i - 1] + a[i];

                // Case 2: Repair step i and i-1 together
                int twoStep = dp[i - 2] + 2 * (a[i] + a[i - 1]);

                // Choose the minimal effort
                dp[i] = Math.min(oneStep, twoStep);
            }
        }
        return dp[n - 1]; // Minimum total effort
    }

    public static void main(String[] args) {
        int[] steps = {0, 13, 15, 8};
//        int[] steps = {1, 2, 200, 4, 5};
//        long result = minimumEffort(steps);
        long result = minEffortToRepair(steps);
        System.out.println(result); // expected output: 59
    }
}