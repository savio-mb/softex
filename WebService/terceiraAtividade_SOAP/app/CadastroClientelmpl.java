package app;

import java.util.Date;
import javax.jws.WebService;


@WebService(endpointInterface = "app.CadastroCliente")
public class CadastroClientlmpl implements CadastroClient{

  public String nome(String nomeCompleto) {
    return "O nome do cliente é: " + nomeCompleto;
  }

  public String endereco(String rua, float numCasa) {
    return "Ele reside na: " + rua + "n°" + numCasa;
  }

  public String cep(float cep) {
    return "com o CEP: " + cep;
  }

  public String cidade(String cidade) {
    return "Na cidade: " + cidade;
  }
}
public interface CadastroCliente {
  @WebMethod String nome(String nomeCompleto);
  @WebMethod String endereco(String rua, float numCasa);
  @WebMethod float cep(float cep);
  @WebMethod String cidade(String cidade);
}