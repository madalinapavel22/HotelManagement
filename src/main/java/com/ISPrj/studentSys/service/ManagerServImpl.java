package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Manager;
import com.ISPrj.studentSys.repository.ManagerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManagerServImpl implements ManagerServ {
    @Autowired
    private ManagerRepo managerRepo;

    @Override
    public Manager findManagerByPass(String password) {
        try {
            return managerRepo.findManagerByPass(password);
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace();
            throw e; // Re-throw the exception if needed
        }    }

    @Override
    public Manager saveManager(Manager manager) {
        return managerRepo.save(manager);
    }
}