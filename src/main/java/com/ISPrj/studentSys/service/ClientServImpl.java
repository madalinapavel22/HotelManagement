package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.repository.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientServImpl  implements ClientServ {
    @Autowired
    private ClientRepo clientRepo;
    @Override
    public Client saveClient(Client client) {
        return clientRepo.save(client);
    }
    @Override
    public List<Client> getAllClients()
    {
        return clientRepo.findAll();
    }

    @Override
    public String deleteClient(Integer nbCamera) {
        clientRepo.deleteById(nbCamera);
        return "Deleted";
    }
    @Override
    public Client getById(Integer code) {
        return clientRepo.getById(code);
    }

    @Override
    public Client findClientByCode(Integer code) {
        return clientRepo.findByCode(code);
    }


    public String findDateByCode(Integer code) {
        return clientRepo.findDate(code);
    }

    public String findDateByRoom(Integer roomNb)
    {
        return clientRepo.findDateRoom(roomNb);
    }
    public Integer findRoomByCode(Integer code) {
        return clientRepo.findRoom(code);
    }
    @Override
    public List<Integer> findRoomsByDate(String currentDate) {
        // Assuming you have a JPA repository for your rooms
        List<Client> rooms = clientRepo.findByDate(currentDate);

        // Extract room numbers from the list of entities
        List<Integer> roomNumbers = rooms.stream()
                .map(Client::getNbCamera)
                .collect(Collectors.toList());

        return roomNumbers;
    }

    @Override
    public List<Integer> findRoomsByDateDeparture(String currentDate) {
        List<Client> rooms = clientRepo.findByDateDeparture(currentDate);

        // Extract room numbers from the list of entities
        List<Integer> roomNumbers = rooms.stream()
                .map(Client::getNbCamera)
                .collect(Collectors.toList());

        return roomNumbers;

    }
}
