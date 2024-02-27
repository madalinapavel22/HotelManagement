package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface ClientServ {
     Client saveClient(Client client);
     List<Client> getAllClients();
     String deleteClient(Integer nbCamera);
     Client getById(Integer code);
     Client findClientByCode(Integer code);
//    public Client registerClient (Integer code);
     String findDateByCode(Integer code);
     String findDateByRoom(Integer roomNb);
     Integer findRoomByCode(Integer code);
     List<Integer> findRoomsByDate(String currentDate);
     List<Integer> findRoomsByDateDeparture(String currentDate);

}
