package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.InfoRoom;
import com.ISPrj.studentSys.model.Repartition;
import com.ISPrj.studentSys.repository.InfoRoomRepo;
import com.ISPrj.studentSys.repository.RepartitionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class RepartitionServImpl implements RepartitionServ {
    @Autowired
    private RepartitionRepo repartitionRepo;

    @Override
    public Repartition saveRepartition(Repartition repartition) {
        return repartitionRepo.save(repartition);
    }



    public Integer findidByPassword(String password) {
        return repartitionRepo.findidRepartition(password);
    }
}


