public class Main {
    public static void main(String[] args) {
        // run first test
        if (findMax(new int[]{1, 2, 3, 4, 5}) == 5) {
            System.out.println("Test 1 passed!");
        } else {
            System.out.println("Test 1 failed!");
        }

        // run second test
        if (findMax(new int[]{4, 5, 2, 1, 3}) == 5) {
            System.out.println("Test 2 passed!");
        } else {
            System.out.println("Test 2 failed!");
        }
    }

    // find the element in the array that has the highest value
    public static int findMax(int[] arr) {
        int max = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > 2 && arr[i] > arr[i-1]) {
                max = arr[i];
            }
        }
        return max;
    }
}