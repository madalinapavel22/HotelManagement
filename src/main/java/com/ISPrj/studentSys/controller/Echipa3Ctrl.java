package com.ISPrj.studentSys.controller;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Echipa1;
import com.ISPrj.studentSys.model.Echipa3;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.service.ClientServ;
import com.ISPrj.studentSys.service.Echipa1ServImpl;
import com.ISPrj.studentSys.service.Echipa3ServImpl;
import com.ISPrj.studentSys.service.Sector1ServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/echipa3")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class Echipa3Ctrl {

    private final Echipa3ServImpl Echipa3Serv;
    @PostMapping("/add") // merge
    public String add (@RequestBody Echipa3 member )
    {
        Echipa3Serv.saveMember(member);
        return "New member is added";
    }
}
