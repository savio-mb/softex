package app;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.RPC)
public interface CadastroCliente {
  @WebMethod String nome(String nomeCompleto);
  @WebMethod String endereco(String rua, float numCasa);
  @WebMethod float cep(float cep);
  @WebMethod String cidade(String cidade);
}