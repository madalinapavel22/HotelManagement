package com.ISPrj.studentSys.controller;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.InfoRoom;
import com.ISPrj.studentSys.service.ClientServ;
import com.ISPrj.studentSys.service.ClientServImpl;
import com.ISPrj.studentSys.service.InfoRoomImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/inforoom")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor

public class InfoRoomCtrl {
    private final InfoRoomImpl infoRoomServ;
    @PostMapping("/add")
    public String add (@RequestBody InfoRoom infoRoom)
    {
        infoRoomServ.saveInfoRoom(infoRoom);
        return "New information added";
    }

    @PostMapping("/reset")
    public String resetTable() {

        infoRoomServ.resetTable();
        return "Table reset successfully";
    }

    @GetMapping("/getInfoRoom/{roomNb}")
    public ResponseEntity<InfoRoom> getInfoRoom(@PathVariable Integer roomNb) {
        InfoRoom infoRoom = infoRoomServ.findinfoRoomByRoomNb(roomNb);

        if (infoRoom != null) {
            return ResponseEntity.ok(infoRoom);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
