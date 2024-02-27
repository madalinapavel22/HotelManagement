package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Echipa1;
import com.ISPrj.studentSys.model.Housekeeping;
import com.ISPrj.studentSys.model.Sector1;
import org.springframework.stereotype.Component;

import java.util.List;
public interface HousekeepingSrv {
    Housekeeping saveHousekeeping(Housekeeping roomValidation);
}
