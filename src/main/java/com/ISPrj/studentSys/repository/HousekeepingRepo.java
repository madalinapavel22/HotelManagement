package com.ISPrj.studentSys.repository;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Echipa1;
import com.ISPrj.studentSys.model.Housekeeping;
import com.ISPrj.studentSys.model.Sector1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
public interface HousekeepingRepo extends  JpaRepository<Housekeeping,Integer>{

}