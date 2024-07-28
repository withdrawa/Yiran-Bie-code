package cs520.hw6;

import java.util.Random;

public class LongTask extends Thread {
    private SharedResults sharedData;
    private int start;
    private int end;

    public LongTask(SharedResults sharedData, int start, int end) {
        this.sharedData = sharedData;
        this.start = start;
        this.end = end;
        this.setName("Thread_" + start + "_" + end);
    }

    @Override
    public void run() {
        int sum = 0;
        Random random = new Random();

        for (int i = start; i <= end; i++) {
            sum += i;
            try {
                Thread.sleep(random.nextInt(10));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        sharedData.addToResult(sum);
    }
}
