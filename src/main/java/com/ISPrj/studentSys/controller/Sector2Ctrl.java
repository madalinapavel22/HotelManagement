package com.ISPrj.studentSys.controller;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.model.Sector2;
import com.ISPrj.studentSys.service.ClientServ;
import com.ISPrj.studentSys.service.Sector1ServImpl;
import com.ISPrj.studentSys.service.Sector2ServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/sector2")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class Sector2Ctrl {

    private final Sector2ServImpl Sector2Serv;
    @PostMapping("/addRoom") // merge
    public String addRoom (@RequestBody Sector2 roomNb )
    {
        Sector2Serv.saveRoomNb(roomNb);
        return "New room is added";
    }

    @GetMapping("/getAll")
    public List<Integer> getAllRoomNumbers() {
        return Sector2Serv.getAllRoomNumbers();
    }
}
