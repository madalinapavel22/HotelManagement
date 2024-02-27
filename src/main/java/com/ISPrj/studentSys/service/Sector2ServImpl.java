package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.model.Sector2;
import com.ISPrj.studentSys.repository.ClientRepo;
import com.ISPrj.studentSys.repository.Sector1Repo;
import com.ISPrj.studentSys.repository.Sector2Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class Sector2ServImpl implements Sector2Serv {

    @Autowired
    private Sector2Repo sector2Repo;
    @Override
    public Sector2 saveRoomNb(Sector2 roomNb) {
        return sector2Repo.save(roomNb);
    }

    @Override
    public List<Integer> getAllRoomNumbers() {
        List<Sector2> allRooms = sector2Repo.findAll();
        return allRooms.stream()
                .map(Sector2::getRoomNb)
                .collect(Collectors.toList());
    }

}
