package com.ISPrj.studentSys.controller;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.model.Sector2;
import com.ISPrj.studentSys.model.Sector3;
import com.ISPrj.studentSys.service.ClientServ;
import com.ISPrj.studentSys.service.Sector1ServImpl;
import com.ISPrj.studentSys.service.Sector2ServImpl;
import com.ISPrj.studentSys.service.Sector3ServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/sector3")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class Sector3Ctrl {

    private final Sector3ServImpl Sector3Serv;
    @PostMapping("/addRoom") // merge
    public String addRoom (@RequestBody Sector3 roomNb )
    {
        Sector3Serv.saveRoomNb(roomNb);
        return "New room is added";
    }
    @GetMapping("/getAll")
    public List<Integer> getAllRoomNumbers() {
        return Sector3Serv.getAllRoomNumbers();
    }
}
