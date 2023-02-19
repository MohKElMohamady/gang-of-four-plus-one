package shotnman.io;

import java.io.FileInputStream;
import java.io.InputStream;

public class Main {
    public static void main(String[] args) {
        int c;
        try {
            InputStream in = new UpperCaseInputStream(new FileInputStream("test.txt"));

            while((c = in.read()) >= 0) {
                System.out.println((char)c);
            }
            in.close();
        }catch (Exception e) {

            e.printStackTrace();
            
        }
    }
}