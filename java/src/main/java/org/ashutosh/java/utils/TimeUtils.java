package org.ashutosh.java.utils;

public class TimeUtils {

    public static String formatTimeDiff(long startTime, long endTime) {
        long duration = endTime - startTime; // Duration in nanoseconds

        if (duration >= 1_000_000_000) { // If duration is at least 1 second
            double durationInSeconds = duration / 1_000_000_000.0;
            return String.format("%.3f seconds", durationInSeconds);
        }
        // Otherwise, show duration in milliseconds
        else {
            double durationInMillis = duration / 1_000_000.0;
            return String.format("%.3f milliseconds", durationInMillis);
        }
//        else if (duration >= 1_000_000) { // If duration is at least 1 millisecond
//            double durationInMillis = duration / 1_000_000.0;
//            return String.format("%.3f milliseconds", durationInMillis);
//        }
//        else { // Otherwise, show duration in nanoseconds
//            return duration + " nanoseconds";
//        }
    }

    public static void main(String[] args) {
        // Example usage
        long startTime = System.nanoTime();
        // System.out.println("Start time: " + startTime);

        // Simulate some code execution
        int[] nums = RandomGenerator.generateIntegerArray(100, 0, 2);

        long endTime = System.nanoTime();
        // System.out.println("End time: " + endTime);

        String formattedDuration = formatTimeDiff(startTime, endTime);
        System.out.println("Time taken: " + formattedDuration);

        // Print the random integer array
//        System.out.print("Random Integer Array: " + Arrays.toString(nums));
    }
}