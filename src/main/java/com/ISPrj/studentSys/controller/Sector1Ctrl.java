package com.ISPrj.studentSys.controller;



import com.ISPrj.studentSys.model.Sector1;
import com.ISPrj.studentSys.repository.Sector1Repo;
import com.ISPrj.studentSys.service.Sector1ServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/sector1")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class Sector1Ctrl {


    private final Sector1Repo sector1Repository; // Inject the repository
    private final Sector1ServImpl sector1Serv;
    @PostMapping("/addRoom") // merge
    public String addRoom (@RequestBody Sector1 roomNb )
    {
        sector1Serv.saveRoomNb(roomNb);
        return "New room  added";
    }

    @GetMapping("/getAll")
    public List<Integer> getAllRoomNumbers() {
        return sector1Serv.getAllRoomNumbers();
    }



}