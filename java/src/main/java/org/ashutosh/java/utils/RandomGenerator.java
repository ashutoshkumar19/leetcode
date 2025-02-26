package org.ashutosh.java.utils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class RandomGenerator {

    private static final Random RANDOM = new Random();

    // Generate string of any length
    public static String generateString(int length, String type, boolean space) {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789";
        switch (type) {
            case "u":
                characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
                break;
            case "l":
                characters = "abcdefghiklmnopqrstuvwxyz";
                break;
            case "n":
                characters = "0123456789";
                break;
            case "ul":
                characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
                break;
            case "un":
                characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ0123456789";
                break;
            case "ln":
                characters = "abcdefghiklmnopqrstuvwxyz0123456789";
                break;
            case "uln":
                characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789";
                break;
            default:
                if (!type.isEmpty()) {
                    characters = type;
                }
                break;
        }
        if (space) {
            characters += " ";
        }

        StringBuilder str = new StringBuilder();
        for (int i = 0; i < length; i++) {
            int num = RANDOM.nextInt(characters.length());
            str.append(characters.charAt(num));
        }
        return str.toString();
    }

    // Generate random integer between two integers
    public static int generateRandomInteger(int min, int max) {
        return RANDOM.nextInt((max - min) + 1) + min;
    }

    // Generate array of any length with random integers filled
    public static int[] generateIntegerArray(int length, int min, int max) {
        length = Math.max(length, 1);
        int[] array = new int[length];
        for (int i = 0; i < length; i++) {
            array[i] = generateRandomInteger(min, max);
        }
        return array;
    }

    public static void main(String[] args) {
        // Test the functions
        System.out.println("Random String: " + generateString(10, "ul", true));
        System.out.println("Random Integer: " + generateRandomInteger(1, 100));
        System.out.println("Random Integer Array: " + Arrays.toString(generateIntegerArray(10, 0, 100)));
    }
}
