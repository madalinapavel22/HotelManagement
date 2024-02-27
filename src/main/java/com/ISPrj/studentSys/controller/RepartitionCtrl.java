package com.ISPrj.studentSys.controller;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Repartition;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.service.ClientServ;
import com.ISPrj.studentSys.service.RepartitionServImpl;
import com.ISPrj.studentSys.service.Sector1ServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/repartition")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class RepartitionCtrl {

    private final RepartitionServImpl RepartitionServ;
    @PostMapping("/addRepartition") // merge
    public String addRepartition (@RequestBody Repartition details )
    {
        RepartitionServ.saveRepartition(details);
        return "New repartition is added";
    }

    @GetMapping("/findidRepartition/{password}")
    public Integer findidRepartition(@PathVariable String password){
        Integer idRepartition=RepartitionServ.findidByPassword(password);
        return idRepartition;
    }
}
