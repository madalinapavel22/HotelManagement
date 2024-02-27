package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.InfoRoom;
import org.springframework.stereotype.Component;

import java.util.List;
@Component

public interface InfoRoomServ {
    InfoRoom saveInfoRoom(InfoRoom infoRoom);
    InfoRoom findinfoRoomByRoomNb(Integer roomNb);

    void resetTable();
}
