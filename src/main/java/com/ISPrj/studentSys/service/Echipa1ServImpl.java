package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Echipa1;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.repository.ClientRepo;
import com.ISPrj.studentSys.repository.Echipa1Repo;
import com.ISPrj.studentSys.repository.Sector1Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class Echipa1ServImpl implements Echipa1Serv {

    @Autowired
    private Echipa1Repo echipa1Repo;
    @Override
    public Echipa1 saveMember(Echipa1 member) {
        return echipa1Repo.save(member);
    }
}