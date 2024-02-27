package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.model.Sector2;
import com.ISPrj.studentSys.model.Sector3;
import com.ISPrj.studentSys.repository.ClientRepo;
import com.ISPrj.studentSys.repository.Sector1Repo;
import com.ISPrj.studentSys.repository.Sector3Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class Sector3ServImpl implements Sector3Serv {

    @Autowired
    private Sector3Repo sector3Repo;
    @Override
    public Sector3 saveRoomNb(Sector3 roomNb) {
        return sector3Repo.save(roomNb);
    }

    @Override
    public List<Integer> getAllRoomNumbers() {
        List<Sector3> allRooms = sector3Repo.findAll();
        return allRooms.stream()
                .map(Sector3::getRoomNb)
                .collect(Collectors.toList());
    }
}
