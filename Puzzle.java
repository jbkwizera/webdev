import java.util.HashMap;
import java.util.ArrayList;
public class Puzzle {
    private static HashMap<Integer, ArrayList<int[][]>> hm;
    public static boolean isCorrect(int[][] a) {
        int N = a.length;
        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++)
                if (i*N + j != a[i][j])
                    return false;
        return true;
    }
    public static void backtrack(int[][] a, boolean[][] isVisited, int i, int j, int count) {
        if (isVisited[i][j]) return;
        else isVisited[i][j] = true;

        StdOut.println("visit: " + i + " - " + j);

        if (isCorrect(a)) {
            if (!hm.containsKey(count))
                hm.put(count, new ArrayList<int[][]>());
            ArrayList<int[][]> alist = hm.get(count);
            alist.add(a);
            hm.put(count, alist);
        }
        if (i-1 >= 0) {
            // swap
            int t = a[i][j];
            a[i][j] = a[i-1][j];
            a[i-1][j] = t;
            backtrack(a, isVisited, i-1, j, count+1);
        }
        if (i+1 < a.length) {
            int t = a[i][j];
            a[i][j] = a[i+1][j];
            a[i+1][j] = t;
            backtrack(a, isVisited, i+1, j, count+1);
        }
        if (j-1 >= 0) {
            int t = a[i][j];
            a[i][j] = a[i][j-1];
            a[i][j-1] = t;
            backtrack(a, isVisited, i, j-1, count+1);
        }
        if (j+1 < a.length) {
            int t = a[i][j];
            a[i][j] = a[i][j+1];
            a[i][j+1] = t;
            backtrack(a, isVisited, i, j+1, count+1);
        }
    }
    public static void shuffle2D(int[][] a) {
        int N = a.length;
        for (int i = 0; i < N; i++) {
            for (int j = N-1; j > 0; j--) {
                int m = StdRandom.uniform(i + 1);
                int n = StdRandom.uniform(j + 1);
                int t = a[i][j];
                a[i][j] = a[m][n];
                a[m][n] = t;
            }
        }
    }
    public static void main(String[] args) {
        int N = 3;
        int[][] a = {{0, 1, 2}, {3, 4, 5}, {6, 7, 8}};
        shuffle2D(a); // make a puzzle.
        // puzzle
        int m = 0, n = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                StdOut.print(a[i][j] + " ");
                if (a[i][j] == 8) { m = i; n = j; }
            }
            StdOut.println();
        }
        StdOut.println("start: " + m + " - " + n);
        boolean[][] isVisited = new boolean[N][N];

        hm = new HashMap<Integer, ArrayList<int[][]>>();
        backtrack(a, isVisited, m, n, 0);
        StdOut.println(hm.size());
    }
}
