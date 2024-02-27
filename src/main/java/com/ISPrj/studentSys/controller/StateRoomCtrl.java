package com.ISPrj.studentSys.controller;

import com.ISPrj.studentSys.model.StateRoom;
import com.ISPrj.studentSys.service.ClientServImpl;
import com.ISPrj.studentSys.service.StateRoomServImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/state")
@CrossOrigin(origins = "http://localhost:1234")
@RequiredArgsConstructor
public class StateRoomCtrl {
    private final StateRoomServImpl stateServ;

    @PutMapping("/update/{nbCamera}")
    public ResponseEntity<String> updateStateRoom(@PathVariable Integer nbCamera, @RequestBody StateRoom newState) {
        StateRoom existingStateRoom = stateServ.getStateRoomByNbCamera(nbCamera);

        if (existingStateRoom != null) {
            existingStateRoom.setFinished(newState.isFinished());
            stateServ.saveStateRoom(existingStateRoom);

            return ResponseEntity.ok("StateRoom updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}