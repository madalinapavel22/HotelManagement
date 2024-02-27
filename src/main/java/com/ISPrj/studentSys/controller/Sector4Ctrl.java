package com.ISPrj.studentSys.controller;

import com.ISPrj.studentSys.model.Sector2;
import com.ISPrj.studentSys.model.Sector4;
import com.ISPrj.studentSys.service.Sector2ServImpl;
import com.ISPrj.studentSys.service.Sector4ServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sector4")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class Sector4Ctrl {
    private final Sector4ServImpl sector4Serv;

    @PostMapping("/addRoom") // merge
    public String addRoom (@RequestBody Sector4 roomNb )
    {
        sector4Serv.saveRoomNb(roomNb);
        return "New room  added";
    }

    @GetMapping("/getAll")
    public List<Integer> getAllRoomNumbers() {
        return sector4Serv.getAllRoomNumbers();
    }


}