package com.ISPrj.studentSys.repository;

import com.ISPrj.studentSys.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
public interface RepartitionRepo extends  JpaRepository<Repartition,Integer>{
    @Query("SELECT c.idRepartition FROM Repartition c WHERE c.password=:password")
    Integer findidRepartition(String password);
}
