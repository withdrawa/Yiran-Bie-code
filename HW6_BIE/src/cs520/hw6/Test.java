package cs520.hw6;

public class Test {
    public static void main(String[] args) {
        // Create SharedResults object
        SharedResults sharedResults = new SharedResults();

        // Create five LongTask objects
        LongTask task1 = new LongTask(sharedResults, 1, 100);
        LongTask task2 = new LongTask(sharedResults, 101, 200);
        LongTask task3 = new LongTask(sharedResults, 201, 300);
        LongTask task4 = new LongTask(sharedResults, 301, 400);
        LongTask task5 = new LongTask(sharedResults, 401, 500);

        // Start each thread
        task1.start();
        task2.start();
        task3.start();
        task4.start();
        task5.start();

        try {
            // Wait for all threads to complete using the join method
            task1.join();
            task2.join();
            task3.join();
            task4.join();
            task5.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Print the result from the shared object
        System.out.println("Result = " + sharedResults.getResult());
    }
}
