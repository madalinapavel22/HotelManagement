package com.ISPrj.studentSys.service;
import com.ISPrj.studentSys.model.Manager;

public interface ManagerServ {
    Manager findManagerByPass(String password);

    Manager saveManager (Manager manager );
}