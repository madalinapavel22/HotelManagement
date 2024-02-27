package com.ISPrj.studentSys.controller;
import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.model.Manager;
import com.ISPrj.studentSys.service.ManagerServ;
import com.ISPrj.studentSys.service.ManagerServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/manager")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class ManagerCtrl {
    private final ManagerServImpl managerServ;
    @PostMapping("/add") // merge
    public String add (@RequestBody Manager manager)
    {
        managerServ.saveManager(manager);
        return "New manager added";
    }

    @GetMapping("/getByPass")
    public ResponseEntity<Manager> getByPass(@RequestParam String password) {
        Manager manager = managerServ.findManagerByPass(password);

        if (manager != null) {
            return ResponseEntity.ok(manager);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}