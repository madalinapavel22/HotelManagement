package com.ISPrj.studentSys.repository;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.StateRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StateRepo extends JpaRepository<StateRoom,Integer> {


    StateRoom findByNbCamera(Integer nbCamera);
}