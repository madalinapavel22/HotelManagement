package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Echipa1;
import com.ISPrj.studentSys.model.Echipa3;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.repository.ClientRepo;
import com.ISPrj.studentSys.repository.Echipa1Repo;
import com.ISPrj.studentSys.repository.Echipa3Repo;
import com.ISPrj.studentSys.repository.Sector1Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class Echipa3ServImpl implements Echipa3Serv {

    @Autowired
    private Echipa3Repo echipa3Repo;
    @Override
    public Echipa3 saveMember(Echipa3 member) {
        return echipa3Repo.save(member);
    }
}
