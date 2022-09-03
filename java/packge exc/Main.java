public class Main {
  public static void main(String[] args) {
    try {
      String nome = "Sávio";
      String sobrenome = "Menezes";
      System.out.printf("Ola %s %int ", nome, sobrenome);
    } catch (Exception e) {
      System.out.println("Something went wrong.");
    }
  }
}