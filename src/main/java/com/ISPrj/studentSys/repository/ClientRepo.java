package com.ISPrj.studentSys.repository;

import com.ISPrj.studentSys.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ClientRepo extends JpaRepository<Client,Integer> {
    @Query("SELECT c FROM Client c WHERE c.code = :code")
    Client findByCode(Integer code);
    @Query("SELECT c.dataPlecare FROM Client c WHERE c.code=:code")
    String findDate(Integer code);

    @Query("SELECT c.dataPlecare FROM Client c WHERE c.nbCamera=:nbCamera")
    String findDateRoom(Integer nbCamera);
    @Query("SELECT c.nbCamera FROM Client c WHERE c.code=:code")
    Integer findRoom(Integer code);

    @Query("SELECT c FROM Client c WHERE c.dataCazare = :currentDate")
    public List<Client> findByDate(String currentDate);

    @Query("SELECT c FROM Client c WHERE c.dataPlecare= :currentDate")
    public List<Client> findByDateDeparture(String currentDate);
}
