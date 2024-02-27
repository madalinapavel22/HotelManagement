package com.ISPrj.studentSys.service;

import com.ISPrj.studentSys.model.StateRoom;
import com.ISPrj.studentSys.repository.StateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

// Define an interface for observers to implement
interface Observer {
    void update(StateRoom stateRoom);
}

// Observable class
@Service
public class StateRoomServImpl implements Observer {
    @Autowired
    private StateRepo stateRoomRepository;

    // List to hold observers
    private List<Observer> observers = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    // Notify all observers when the state is updated
    private void notifyObservers(StateRoom stateRoom) {
        for (Observer observer : observers) {
            observer.update(stateRoom);
        }
    }

    public void updateStateByRoomNb(Integer roomNb, boolean finished) {
        StateRoom stateRoom = stateRoomRepository.findByNbCamera(roomNb);

        if (stateRoom != null) {
            stateRoom.setFinished(finished);
            stateRoomRepository.save(stateRoom);

            // Notify observers about the update
            notifyObservers(stateRoom);
        }
    }

    public StateRoom getStateRoomByNbCamera(Integer nbCamera) {
        return stateRoomRepository.findByNbCamera(nbCamera);
    }

    public void saveStateRoom(StateRoom stateRoom) {
        stateRoomRepository.save(stateRoom);

        // Notify observers about the update
        notifyObservers(stateRoom);
    }

    // Implementation of the Observer interface's update method
    @Override
    public void update(StateRoom stateRoom) {
        // Handle the update from the observable
        // You can add your custom logic here
        System.out.println("StateRoom updated: " + stateRoom);
    }
}
