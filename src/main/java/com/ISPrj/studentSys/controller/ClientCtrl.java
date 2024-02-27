package com.ISPrj.studentSys.controller;

import com.ISPrj.studentSys.model.Client;
import com.ISPrj.studentSys.service.ClientServ;
import com.ISPrj.studentSys.service.ClientServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class ClientCtrl {

    private final ClientServImpl clientServ;

    @PostMapping("/add") // merge
    public String add (@RequestBody Client client)
    {
        clientServ.saveClient(client);
        return "New client is added";
    }
    @GetMapping("/getAll")
    public List<Client> getAll ()
    {
        return clientServ.getAllClients();
    }

    @DeleteMapping("/delete/{nbCamera}")
    public String deleteClient(@PathVariable Integer nbCamera)
    {
        return clientServ.deleteClient(nbCamera);
    }

    @GetMapping("/getById/{code}")
    public ResponseEntity<Client> getById(@PathVariable Integer code) {
        Client client = clientServ.findClientByCode(code);

        if (client != null) {
            return ResponseEntity.ok(client);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/findDate/{code}")
    public String findDate(@PathVariable Integer code){
        String dataPlecare=clientServ.findDateByCode(code);
        return dataPlecare;
    }

    @GetMapping("/findDateRoom/{roomNb}")
    public String findDateRoom(@PathVariable Integer roomNb){
        String dataPlecare=clientServ.findDateByRoom(roomNb);
        return dataPlecare;
    }


    @GetMapping("/findRoom/{code}")
    public Integer findRoom(@PathVariable Integer code){
        Integer room=clientServ.findRoomByCode(code);
        return room;
    }




    @GetMapping("/login")
    public ResponseEntity<Client> getClientByCode(@RequestBody Integer code) {
        return ResponseEntity.ok(clientServ.getById(code));
    }

    @GetMapping("/findRoomsByCurrentDate")
    public List<Integer> findRoomsByCurrentDate() {
        // Get the current date
        Date currentDate = new Date();

        // Format the current date to "yyyy-MM-dd"
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String formattedCurrentDate = dateFormat.format(currentDate);

        // Now you can use the formatted date as needed
        System.out.println("Formatted Current Date: " + formattedCurrentDate);

        // Call your service method with the original Date if needed
        List<Integer> roomsWithCurrentDate = clientServ.findRoomsByDate(formattedCurrentDate);

        return roomsWithCurrentDate;
    }
    @GetMapping("/findRoomsByCurrentDateDeparture")
    public List<Integer> findRoomsByCurrentDateDeparture() {
        // Get the current date
        Date currentDate = new Date();

        // Format the current date to "yyyy-MM-dd"
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String formattedCurrentDate = dateFormat.format(currentDate);

        // Now you can use the formatted date as needed
        System.out.println("Formatted Current Date: " + formattedCurrentDate);

        // Call your service method with the original Date if needed
        List<Integer> roomsWithCurrentDateDeparture = clientServ.findRoomsByDateDeparture(formattedCurrentDate);

        return roomsWithCurrentDateDeparture;
    }


}
