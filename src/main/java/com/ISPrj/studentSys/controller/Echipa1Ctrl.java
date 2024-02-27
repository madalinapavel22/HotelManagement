package com.ISPrj.studentSys.controller;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Echipa1;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.service.ClientServ;
import com.ISPrj.studentSys.service.Echipa1ServImpl;
import com.ISPrj.studentSys.service.Sector1ServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/echipa1")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class Echipa1Ctrl {

    private final Echipa1ServImpl Echipa1Serv;
    @PostMapping("/add") // merge
    public String add (@RequestBody Echipa1 member )
    {
        Echipa1Serv.saveMember(member);
        return "New member is added";
    }
}