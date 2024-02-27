package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.model.Sector4;

import java.util.List;

public interface Sector4Serv {
    Sector4 saveRoomNb(Sector4 roomNb);
    List<Integer> getAllRoomNumbers();
}