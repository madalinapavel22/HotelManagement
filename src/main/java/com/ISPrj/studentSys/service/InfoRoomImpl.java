package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.InfoRoom;
import com.ISPrj.studentSys.repository.InfoRoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class InfoRoomImpl implements InfoRoomServ {
    @Autowired
    private InfoRoomRepo infoRoomRepo;

    @Override
    public InfoRoom saveInfoRoom(InfoRoom infoRoom) {
        return infoRoomRepo.save(infoRoom);
    }

    @Override
    public InfoRoom findinfoRoomByRoomNb(Integer roomNb) {
        return infoRoomRepo.findByRoomNb(roomNb);
    }

    @Override
    public void resetTable() {

        List<InfoRoom> infoRooms = infoRoomRepo.findAll();


        for (InfoRoom infoRoom : infoRooms) {

            infoRoom.setDnd(0);
            infoRoom.setReview("");
            infoRoom.setSoap(0);
            infoRoom.setTowels(0);
            infoRoom.setAlertHousekeeping("");
            infoRoom.setToiletPaper(0);
            infoRoom.setValueTips(0.0F);
            infoRoomRepo.save(infoRoom);
        }
    }
}
