package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Sector2;
import com.ISPrj.studentSys.model.Sector3;
import com.ISPrj.studentSys.model.Sector4;
import com.ISPrj.studentSys.repository.Sector2Repo;
import com.ISPrj.studentSys.repository.Sector4Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Sector4ServImpl implements Sector4Serv{

    @Autowired
    private Sector4Repo sector4Repo;


    @Override
    public Sector4 saveRoomNb(Sector4 roomNb) {
        return sector4Repo.save(roomNb);
    }

    @Override
    public List<Integer> getAllRoomNumbers() {
        List<Sector4> allRooms = sector4Repo.findAll();
        return allRooms.stream()
                .map(Sector4::getRoomNb)
                .collect(Collectors.toList());
    }
}