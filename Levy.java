public class Levy {
    public static void curve(double x, double y, double z, double a, int N) {
        double tx = x;
        double ty = y;
        double tz = z;
        double ta = a;
        int tN = N;
        if (tN > 0) {
            tz /= Math.sqrt(2);
            curve(tx, ty, tz, (ta + 45), (tN - 1));
            tx += tz * Math.cos(Math.toRadians(ta + 45));
            ty += tz * Math.sin(Math.toRadians(ta + 45));
            curve(tx, ty, tz, (ta - 45), (tN - 1));
        }
        else {
            double x0 = tx, x1 = tx + tz*Math.cos(Math.toRadians(ta));
            double y0 = ty, y1 = ty + tz*Math.sin(Math.toRadians(ta));
            StdDraw.line(x0, y0, x1, y1);
        }
    }
    public static void main(String[] args) {
        int N = Integer.parseInt(args[0]);
        StdDraw.setXscale(-1, 501);
        StdDraw.setYscale(-1, 501);
        curve(250, 150, 200, 90, N);
    }
}
