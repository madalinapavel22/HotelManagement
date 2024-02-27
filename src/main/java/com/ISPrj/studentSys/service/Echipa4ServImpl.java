package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.*;
import com.ISPrj.studentSys.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class Echipa4ServImpl implements Echipa4Serv {

    @Autowired
    private Echipa4Repo echipa4Repo;
    @Override
    public Echipa4 saveMember(Echipa4 member) {
        return echipa4Repo.save(member);
    }
}
