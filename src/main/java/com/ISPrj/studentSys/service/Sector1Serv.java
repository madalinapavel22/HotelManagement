package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Sector1;

import java.util.List; // Add this import statement

public interface Sector1Serv {
    Sector1 saveRoomNb(Sector1 roomNb);
    List<Integer> getAllRoomNumbers();
}