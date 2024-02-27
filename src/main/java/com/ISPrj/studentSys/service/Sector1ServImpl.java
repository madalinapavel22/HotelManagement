package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.repository.Sector1Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Sector1ServImpl implements Sector1Serv {
    @Autowired
    private Sector1Repo sector1Repo;

    public Sector1 saveRoomNb(Sector1 roomNb)
    {
        return sector1Repo.save(roomNb);
    }

    @Override
    public List<Integer> getAllRoomNumbers() {
        List<Sector1> allRooms = sector1Repo.findAll();
        return allRooms.stream()
                .map(Sector1::getRoomNb)
                .collect(Collectors.toList());
    }
}