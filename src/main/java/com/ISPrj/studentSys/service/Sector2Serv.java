package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.model.Sector2;
import org.springframework.stereotype.Component;

import java.util.List;
public interface Sector2Serv {
    Sector2 saveRoomNb(Sector2 roomNb);
    List<Integer> getAllRoomNumbers();
}
