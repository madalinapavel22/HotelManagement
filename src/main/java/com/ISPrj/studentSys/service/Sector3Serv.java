package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.model.Sector3;
import org.springframework.stereotype.Component;

import java.util.List;
public interface Sector3Serv {
    Sector3 saveRoomNb(Sector3 roomNb);
    List<Integer> getAllRoomNumbers();
}
