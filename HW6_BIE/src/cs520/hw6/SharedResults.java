package cs520.hw6;

public class SharedResults {
    private int result = 0;

    public synchronized void addToResult(int value) {
        result += value;
        System.out.println(Thread.currentThread().getName() + " is adding " + value + ", Cumulative Result is " + result);
    }

    public synchronized int getResult() {
        return result;
    }
}
