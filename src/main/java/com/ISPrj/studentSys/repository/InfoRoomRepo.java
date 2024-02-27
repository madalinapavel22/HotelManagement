package com.ISPrj.studentSys.repository;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.InfoRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository

public interface InfoRoomRepo extends JpaRepository<InfoRoom,Integer>  {
    @Query("SELECT c FROM InfoRoom c WHERE c.RoomNb = :roomNb")
    InfoRoom findByRoomNb(Integer roomNb);
}
