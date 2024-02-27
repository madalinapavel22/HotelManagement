package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.InfoRoom;
import com.ISPrj.studentSys.model.Repartition;
import org.springframework.stereotype.Component;

import java.util.List;
@Component

public interface RepartitionServ {
    Repartition saveRepartition(Repartition repartition);
    Integer findidByPassword(String password);
}
