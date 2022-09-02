import java.io.Serializable;

public class Employee implements Serializable {
    private int idEmployee;
    private String name;
    private double salary;
    private String password;

    public Employee(int idEmployee, String name, double salary, String password) {
        this.setIdEmployee(idEmployee);
        this.setName(name);
        this.setSalary(salary);
        this.setPassword(password);
    }

    public int getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(int id) {
        this.idEmployee = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}