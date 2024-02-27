package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Housekeeping;
import com.ISPrj.studentSys.repository.Echipa4Repo;
import com.ISPrj.studentSys.repository.HousekeepingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class HousekeepingSrvImpl implements HousekeepingSrv {


    @Autowired
    private HousekeepingRepo housekeepingRepo;
    @Override
    public Housekeeping saveHousekeeping(Housekeeping roomValidation) {
        return housekeepingRepo.save(roomValidation);
    }
}