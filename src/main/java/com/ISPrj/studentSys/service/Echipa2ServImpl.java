package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Echipa2;
import com.ISPrj.studentSys.repository.Echipa1Repo;
import com.ISPrj.studentSys.repository.Echipa2Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Echipa2ServImpl implements Echipa2Serv{

    @Autowired
    private Echipa2Repo echipa2Repo;
    @Override
    public Echipa2 saveMember(Echipa2 member) {
        return echipa2Repo.save(member);
    }
}