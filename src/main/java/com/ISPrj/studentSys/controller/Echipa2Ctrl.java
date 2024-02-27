package com.ISPrj.studentSys.controller;


import com.ISPrj.studentSys.model.Echipa1;
import com.ISPrj.studentSys.model.Echipa2;
import com.ISPrj.studentSys.service.Echipa1ServImpl;
import com.ISPrj.studentSys.service.Echipa2ServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/echipa2")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class Echipa2Ctrl {

    private final Echipa2ServImpl echipa2Serv;

    @PostMapping("/add") // merge
    public String add (@RequestBody Echipa2 member )
    {
        echipa2Serv.saveMember(member);
        return "New  member added";
    }

}