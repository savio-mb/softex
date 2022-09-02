import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class App {
    public static void main(String[] args) throws Exception {
        criarArquivoBinarioSerializado();
        lerArquivoBinarioSerializado();
    }

    private static void criarArquivoBinarioSerializado() throws IOException {
        Employee p1 = new Employee(1, "Sávio Menezes Brito", 2000, "12345");
        FileOutputStream fos = null;
        ObjectOutputStream oos = null;
        try {
            fos = new FileOutputStream("funcionario.bin");
            oos = new ObjectOutputStream(fos);
            oos.writeObject(p1);
        } catch (FileNotFoundException e) {
            System.out.println("Arquivo não encontrado");
        } finally {
            oos.close();
        }

    }

    private static void lerArquivoBinarioSerializado() throws IOException, ClassNotFoundException {
        Employee p1 = null;
        FileInputStream fis = null;
        ObjectInputStream ois = null;
        try {
            fis = new FileInputStream("funcionario.bin");
            ois = new ObjectInputStream(fis);
            p1 = (Employee) ois.readObject();
            System.out.printf("Id: %2d\nNome: %s\nSalário: %.2f\nSenha: %s\n", p1.getIdEmployee(), p1.getName(),
                    p1.getSalary(), p1.getPassword());
        } catch (FileNotFoundException e) {
            System.out.println("Arquivo não encontrado");
        } finally {
            ois.close();
        }
    }
}