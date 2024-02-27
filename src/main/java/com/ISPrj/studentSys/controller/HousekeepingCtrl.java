package com.ISPrj.studentSys.controller;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Housekeeping;
import com.ISPrj.studentSys.model.InfoRoom;
import com.ISPrj.studentSys.service.ClientServ;
import com.ISPrj.studentSys.service.ClientServImpl;
import com.ISPrj.studentSys.service.HousekeepingSrvImpl;
import com.ISPrj.studentSys.service.InfoRoomImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/housekeeping")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor

public class HousekeepingCtrl {
    private final HousekeepingSrvImpl housekeepingSrv;
    @PostMapping("/addHDetails")
    public String add (@RequestBody Housekeeping housekeeping)
    {
        housekeepingSrv.saveHousekeeping(housekeeping);
        return "New housekeeping informations added";
    }
}
